// ==UserScript==
// @name        Ajax-h
// @namespace   https://github.com/wendux/Ajax-hook
// @version     2.0.3
// @author      wendux
// @description Ajax-hook
// @license     MIT
// @grant       unsafeWindow
// @run-at      document-start
// ==/UserScript==
//author: wendux email: 824783146@qq.com source code: https://github.com/wendux/Ajax-hook modify by https://github.com/lzghzr
const ah = (t => {
    function e(t, e) {
        var r = {};
        for (var n in t)
            r[n] = t[n];
        return r.target = r.currentTarget = e,
        r
    }
    function r(r) {
        function n(t) {
            return function () {
                var e = this.hasOwnProperty(t + "_") ? this[t + "_"] : this.xhr[t],
                n = (r[t] || {}).getter;
                return n && n(e, this) || e
            }
        }
        function o(t) {
            return function (n) {
                var o = this.xhr,
                s = this,
                i = r[t];
                if ("on" === t.substring(0, 2))
                    s[t + "_"] = n, o[t] = function (i) {
                        i = e(i, s),
                        r[t] && r[t].call(s, o, i) || n.call(s, i)
                    };
                else {
                    var a = (i || {}).setter;
                    n = a && a(n, s) || n,
                    this[t + "_"] = n;
                    try {
                        o[t] = n
                    } catch (t) {}
                }
            }
        }
        function s(t) {
            return function () {
                var e = [].slice.call(arguments);
                if (r[t]) {
                    var n = r[t].call(this, e, this.xhr);
                    if (n)
                        return n
                }
                return this.xhr[t].apply(this.xhr, e)
            }
        }
        return t._rxhr = t._rxhr || t.XMLHttpRequest,
        t.XMLHttpRequest = function () {
            var e = new t._rxhr;
            for (var r in e) {
                var i = "";
                try {
                    i = typeof e[r]
                } catch (t) {}
                "function" === i ? this[r] = s(r) : Object.defineProperty(this, r, {
                        get: n(r),
                        set: o(r),
                        enumerable: !0
                    })
            }
            var a = this;
            e.getProxy = function () {
                return a
            },
            this.xhr = e
        },
        t._rxhr
    }
    function n() {
        t._rxhr && (t.XMLHttpRequest = t._rxhr),
        t._rxhr = void 0
    }
    var o,
    s = ["load", "loadend", "timeout", "error", "readystatechange", "abort"],
    i = s[0],
    a = s[1],
    u = s[2],
    c = s[3],
    f = s[4],
    h = s[5];
    function d(t) {
        return t.watcher || (t.watcher = document.createElement("a"))
    }
    function v(t, r) {
        var n,
        o = t.getProxy(),
        s = "on" + r + "_",
        i = e({
                type: r
            }, o);
        o[s] && o[s](i),
        "function" == typeof Event ? n = new Event(r, {
                bubbles: !1
            }) : (n = document.createEvent("Event")).initEvent(r, !1, !0),
        d(t).dispatchEvent(n)
    }
    function l(t) {
        this.xhr = t,
        this.xhrProxy = t.getProxy()
    }
    function x(t) {
        function e(t) {
            l.call(this, t)
        }
        return e.prototype = Object.create(l.prototype),
        e.prototype.next = t,
        e
    }
    l.prototype = Object.create({
            resolve: function (t) {
                var e = this.xhrProxy,
                r = this.xhr;
                e.readyState = 4,
                r.resHeader = t.headers,
                e.response = e.responseText = t.response,
                e.statusText = t.statusText,
                e.status = t.status,
                v(r, f),
                v(r, i),
                v(r, a)
            },
            reject: function (t) {
                this.xhrProxy.status = 0,
                v(this.xhr, t.type),
                v(this.xhr, a)
            }
        });
    var p = x((function (t) {
                var e = this.xhr;
                for (var r in t = t || e.config, e.withCredentials = t.withCredentials, e.open(t.method, t.url, !1 !== t.async, t.user, t.password), t.headers)
                    e.setRequestHeader(r, t.headers[r]);
                e.send(t.body)
            })),
    y = x((function (t) {
                this.resolve(t)
            })),
    g = x((function (t) {
                this.reject(t)
            }));
    function w(t) {
        var n = t.onRequest,
        o = t.onResponse,
        i = t.onError;
        function a(t, e, r) {
            var n = new g(t),
            o = {
                config: t.config,
                error: r
            };
            i ? i(o, n) : n.next(o)
        }
        function l() {
            return !0
        }
        function x(t, e) {
            return a(t, 0, e),
            !0
        }
        function w(t, e) {
            return 4 === t.readyState && 0 !== t.status ? function (t, e) {
                var r = new y(t);
                if (!o)
                    return r.resolve();
                var n = {
                    response: e.response,
                    status: e.status,
                    statusText: e.statusText,
                    config: t.config,
                    headers: t.resHeader || t.getAllResponseHeaders().split("\r\n").reduce((function (t, e) {
                            if ("" === e)
                                return t;
                            var r = e.split(":");
                            return t[r.shift()] = function (t) {
                                return t.replace(/^\s+|\s+$/g, "")
                            }
                            (r.join(":")),
                            t
                        }), {})
                };
                o(n, r)
            }
            (t, e) : 4 !== t.readyState && v(t, f),
            !0
        }
        return r({
            onload: l,
            onloadend: l,
            onerror: x,
            ontimeout: x,
            onabort: x,
            onreadystatechange: function (t) {
                return w(t, this)
            },
            open: function (t, r) {
                var o = this,
                s = r.config = {
                    headers: {}
                };
                s.method = t[0],
                s.url = t[1],
                s.async = t[2],
                s.user = t[3],
                s.password = t[4],
                s.xhr = r;
                var i = "on" + f;
                r[i] || (r[i] = function () {
                    return w(r, o)
                });
                var d = function (t) {
                    a(r, 0, e(t, o))
                };
                if ([c, u, h].forEach((function (t) {
                            var e = "on" + t;
                            r[e] || (r[e] = d)
                        })), n)
                    return !0
            },
            send: function (t, e) {
                var r = e.config;
                if (r.withCredentials = e.withCredentials, r.body = t[0], n) {
                    var o = function () {
                        n(r, new p(e))
                    };
                    return !1 === r.async ? o() : setTimeout(o),
                    !0
                }
            },
            setRequestHeader: function (t, e) {
                return e.config.headers[t[0].toLowerCase()] = t[1],
                !0
            },
            addEventListener: function (t, r) {
                var n = this;
                if (-1 !== s.indexOf(t[0])) {
                    var o = t[1];
                    return d(r).addEventListener(t[0], (function (r) {
                            var s = e(r, n);
                            s.type = t[0],
                            s.isTrusted = !0,
                            o.call(n, s)
                        })),
                    !0
                }
            },
            getAllResponseHeaders: function (t, e) {
                var r = e.resHeader;
                if (r) {
                    var n = "";
                    for (var o in r)
                        n += o + ": " + r[o] + "\r\n";
                    return n
                }
            },
            getResponseHeader: function (t, e) {
                var r = e.resHeader;
                if (r)
                    return r[(t[0] || "").toLowerCase()]
            }
        })
    }
    return {
        proxy: function (t) {
            if (o)
                throw "Proxy already exists";
            return o = new w(t)
        },
        unProxy: function () {
            o = null,
            n()
        },
        hook: r,
        unHook: n
    }
})("undefined" == typeof unsafeWindow ? window : unsafeWindow);
