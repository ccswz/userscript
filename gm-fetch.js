/**
 * GM_fetch 模拟 fetch 的功能，使用 GM_xmlhttpRequest 发起请求。
 * 这是一个使用 Terser 压缩后的文件的解压版本，并附加详细注释。
 */

var GM_fetch = (function () {
    "use strict";

    /**
     * 解析响应头字符串为 Headers 对象
     * @param {string} rawHeaders - 原始的响应头字符串
     * @returns {Headers} - 解析后的 Headers 对象
     */
    function parseHeaders(rawHeaders) {
        const trimmedHeaders = rawHeaders.trim();
        if (!trimmedHeaders) return new Headers(); // 如果没有头信息，返回空 Headers。

        const headerArray = trimmedHeaders.split("\r\n").map(headerLine => {
            let [key, value] = headerLine.split(":");
            return [key.trim(), value.trim()];
        });
        return new Headers(headerArray);
    }

    /**
     * 自定义的 Response 类，用于模拟标准 Response。
     */
    class CustomResponse {
        constructor(rawBody, init) {
            this.rawBody = rawBody; // 原始的 Blob 数据
            this.init = init; // 初始化参数
            
            // 创建一个 ReadableStream 来模拟 body 的读取
            this.body = new ReadableStream({
                start(controller) {
                    controller.enqueue(rawBody);
                    controller.close();
                }
            });

            const {
                headers, statusCode, statusText, finalUrl, redirected
            } = init;

            this.headers = headers;
            this.status = statusCode;
            this.statusText = statusText;
            this.url = finalUrl;
            this.type = "basic";
            this.redirected = redirected;
            this._bodyUsed = false; // 追踪 body 是否已被读取
        }

        get bodyUsed() {
            return this._bodyUsed;
        }

        get ok() {
            return this.status < 300;
        }

        arrayBuffer() {
            if (this.bodyUsed) {
                throw new TypeError("Failed to execute 'arrayBuffer' on 'Response': body stream already read");
            }
            this._bodyUsed = true;
            return this.rawBody.arrayBuffer();
        }

        blob() {
            if (this.bodyUsed) {
                throw new TypeError("Failed to execute 'blob' on 'Response': body stream already read");
            }
            this._bodyUsed = true;
            return Promise.resolve(this.rawBody.slice(0, this.rawBody.size, this.rawBody.type));
        }

        clone() {
            if (this.bodyUsed) {
                throw new TypeError("Failed to execute 'clone' on 'Response': body stream already read");
            }
            return new CustomResponse(this.rawBody, this.init);
        }

        formData() {
            if (this.bodyUsed) {
                throw new TypeError("Failed to execute 'formData' on 'Response': body stream already read");
            }
            this._bodyUsed = true;
            return this.rawBody.text().then(parseFormData);
        }

        async json() {
            if (this.bodyUsed) {
                throw new TypeError("Failed to execute 'json' on 'Response': body stream already read");
            }
            this._bodyUsed = true;
            return JSON.parse(await this.rawBody.text());
        }

        text() {
            if (this.bodyUsed) {
                throw new TypeError("Failed to execute 'text' on 'Response': body stream already read");
            }
            this._bodyUsed = true;
            return this.rawBody.text();
        }
    }

    /**
     * 解析表单数据字符串为 FormData 对象
     * @param {string} formDataString - 表单数据字符串
     * @returns {FormData} - 解析后的 FormData 对象
     */
    function parseFormData(formDataString) {
        const formData = new FormData();
        formDataString.trim().split("&").forEach(pair => {
            if (pair) {
                const [key, ...valueParts] = pair.split("=");
                const keyDecoded = decodeURIComponent(key.replace(/\+/g, " "));
                const valueDecoded = decodeURIComponent(valueParts.join("=").replace(/\+/g, " "));
                formData.append(keyDecoded, valueDecoded);
            }
        });
        return formData;
    }

    const supportedMethods = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "TRACE", "OPTIONS", "CONNECT"];

    /**
     * 验证 HTTP 方法是否合法
     * @param {string} method - HTTP 方法
     * @returns {string} - 合法的 HTTP 方法
     * @throws {Error} - 如果方法不被支持，则抛出错误
     */
    function validateMethod(method) {
        const upperMethod = method.toUpperCase();
        if (supportedMethods.includes(upperMethod)) return upperMethod;
        throw new Error(`unsupported http method ${method}`);
    }

    /**
     * 核心 GM_fetch 实现，使用 GM_xmlhttpRequest 发起请求
     * @param {Request} request - 请求对象
     * @param {Object} options - 请求选项
     * @returns {Promise<CustomResponse>} - 返回模拟的 Response 对象
     */
    return async function (url, options) {
        const request = new Request(url, options);
        let bodyData;

        if (options?.body) {
            bodyData = await request.text();
        }

        return new Promise((resolve, reject) => {
            if (request.signal?.aborted) {
                return reject(new DOMException("Aborted", "AbortError"));
            }

            GM_xmlhttpRequest({
                url: request.url,
                method: validateMethod(request.method),
                headers: Object.fromEntries(new Headers(options?.headers).entries()),
                data: bodyData,
                responseType: "blob",
                // 支持 anonymous 选项
                anonymous: options?.anonymous === true,  // 如果 anonymous 为 true，则禁用用户凭证
                onload(response) {
                    resolve(new CustomResponse(response.response, {
                        statusCode: response.status,
                        statusText: response.statusText,
                        headers: parseHeaders(response.responseHeaders),
                        finalUrl: response.finalUrl,
                        redirected: response.finalUrl !== request.url
                    }));
                },

                onabort() {
                    reject(new DOMException("Aborted", "AbortError"));
                },

                ontimeout() {
                    reject(new TypeError("Network request failed, timeout"));
                },

                onerror(err) {
                    reject(new TypeError(`Failed to fetch: ${err.finalUrl}`));
                }
            });
        });
    };
})();
