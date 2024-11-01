// ==UserScript==
// @name         worklog
// @namespace    npm/vite-plugin-monkey
// @version      20241101
// @author       monkey
// @icon         https://vitejs.dev/logo.svg
// @downloadURL  https://raw.githubusercontent.com/ccswz/userscript/master/worklog.user.js
// @updateURL    https://raw.githubusercontent.com/ccswz/userscript/master/worklog.user.js
// @match        http://cn.ssmis2018cloud.ccs.org.cn/ssmis/bs/bsWorkload/workload?*
// @match        https://cn.ssmis2018cloud.ccs.org.cn/ssmis/bs/bsWorkload/workload?*
// @match        http://ssmis2018.ccs.org.cn/ssmis/bs/bsWorkload/workload?*
// @match        https://ssmis2018.ccs.org.cn/ssmis/bs/bsWorkload/workload?*
// @match        http://cmp.msa.gov.cn/simis-ccs/common/formList!inputForm.do?*
// @require      https://unpkg.zhimg.com/react@18.3.1/umd/react.production.min.js
// @require      https://unpkg.zhimg.com/react-dom@18.3.1/umd/react-dom.production.min.js
// @grant        GM_addStyle
// ==/UserScript==

(o=>{if(typeof GM_addStyle=="function"){GM_addStyle(o);return}const t=document.createElement("style");t.textContent=o,document.head.append(t)})(" :root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}} ");

(function (React, ReactDOM__default) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
  const ReactDOM__default__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM__default);

  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f$1 = React, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
  function q$1(c2, a, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a.key && (e2 = "" + a.key);
    void 0 !== a.ref && (h2 = a.ref);
    for (b2 in a) m$2.call(a, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a[b2]);
    if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
    return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
  }
  reactJsxRuntime_production_min.Fragment = l$1;
  reactJsxRuntime_production_min.jsx = q$1;
  reactJsxRuntime_production_min.jsxs = q$1;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var m$1 = ReactDOM__default;
  {
    client.createRoot = m$1.createRoot;
    client.hydrateRoot = m$1.hydrateRoot;
  }
  var classnames = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function(module) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames2.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else {
        window.classNames = classNames2;
      }
    })();
  })(classnames);
  var classnamesExports = classnames.exports;
  const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var t2 = arguments[e2];
        for (var r in t2) ({}).hasOwnProperty.call(t2, r) && (n2[r] = t2[r]);
      }
      return n2;
    }, _extends.apply(null, arguments);
  }
  var reactIs = { exports: {} };
  var reactIs_production_min = {};
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
  u = Symbol.for("react.module.reference");
  function v(a) {
    if ("object" === typeof a && null !== a) {
      var r = a.$$typeof;
      switch (r) {
        case b:
          switch (a = a.type, a) {
            case d:
            case f:
            case e:
            case m:
            case n:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case h:
                case l:
                case q:
                case p:
                case g:
                  return a;
                default:
                  return r;
              }
          }
        case c:
          return r;
      }
    }
  }
  reactIs_production_min.ContextConsumer = h;
  reactIs_production_min.ContextProvider = g;
  reactIs_production_min.Element = b;
  reactIs_production_min.ForwardRef = l;
  reactIs_production_min.Fragment = d;
  reactIs_production_min.Lazy = q;
  reactIs_production_min.Memo = p;
  reactIs_production_min.Portal = c;
  reactIs_production_min.Profiler = f;
  reactIs_production_min.StrictMode = e;
  reactIs_production_min.Suspense = m;
  reactIs_production_min.SuspenseList = n;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a) {
    return v(a) === h;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return v(a) === g;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === b;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return v(a) === l;
  };
  reactIs_production_min.isFragment = function(a) {
    return v(a) === d;
  };
  reactIs_production_min.isLazy = function(a) {
    return v(a) === q;
  };
  reactIs_production_min.isMemo = function(a) {
    return v(a) === p;
  };
  reactIs_production_min.isPortal = function(a) {
    return v(a) === c;
  };
  reactIs_production_min.isProfiler = function(a) {
    return v(a) === f;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return v(a) === e;
  };
  reactIs_production_min.isSuspense = function(a) {
    return v(a) === m;
  };
  reactIs_production_min.isSuspenseList = function(a) {
    return v(a) === n;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
  };
  reactIs_production_min.typeOf = v;
  {
    reactIs.exports = reactIs_production_min;
  }
  var reactIsExports = reactIs.exports;
  function toArray$2(children) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var ret = [];
    React.Children.forEach(children, function(child) {
      if ((child === void 0 || child === null) && !option.keepEmpty) {
        return;
      }
      if (Array.isArray(child)) {
        ret = ret.concat(toArray$2(child));
      } else if (reactIsExports.isFragment(child) && child.props) {
        ret = ret.concat(toArray$2(child.props.children, option));
      } else {
        ret.push(child);
      }
    });
    return ret;
  }
  var warned = {};
  var preMessage = function preMessage2(fn) {
  };
  function warning$2(valid, message) {
  }
  function note(valid, message) {
  }
  function resetWarned() {
    warned = {};
  }
  function call(method4, valid, message) {
    if (!valid && !warned[message]) {
      method4(false, message);
      warned[message] = true;
    }
  }
  function warningOnce(valid, message) {
    call(warning$2, valid, message);
  }
  function noteOnce(valid, message) {
    call(note, valid, message);
  }
  warningOnce.preMessage = preMessage;
  warningOnce.resetWarned = resetWarned;
  warningOnce.noteOnce = noteOnce;
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function toPrimitive(t2, r) {
    if ("object" != _typeof(t2) || !t2) return t2;
    var e2 = t2[Symbol.toPrimitive];
    if (void 0 !== e2) {
      var i = e2.call(t2, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t2);
  }
  function toPropertyKey(t2) {
    var i = toPrimitive(t2, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }
  function _defineProperty(e2, r, t2) {
    return (r = toPropertyKey(r)) in e2 ? Object.defineProperty(e2, r, {
      value: t2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e2[r] = t2, e2;
  }
  function ownKeys(e2, r) {
    var t2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e2);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e2, r2).enumerable;
      })), t2.push.apply(t2, o);
    }
    return t2;
  }
  function _objectSpread2(e2) {
    for (var r = 1; r < arguments.length; r++) {
      var t2 = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
        _defineProperty(e2, r2, t2[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
        Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t2, r2));
      });
    }
    return e2;
  }
  function isDOM(node2) {
    return node2 instanceof HTMLElement || node2 instanceof SVGElement;
  }
  function getDOM(node2) {
    if (node2 && _typeof(node2) === "object" && isDOM(node2.nativeElement)) {
      return node2.nativeElement;
    }
    if (isDOM(node2)) {
      return node2;
    }
    return null;
  }
  function findDOMNode(node2) {
    var domNode = getDOM(node2);
    if (domNode) {
      return domNode;
    }
    if (node2 instanceof React.Component) {
      var _ReactDOM$findDOMNode;
      return (_ReactDOM$findDOMNode = ReactDOM__default.findDOMNode) === null || _ReactDOM$findDOMNode === void 0 ? void 0 : _ReactDOM$findDOMNode.call(ReactDOM__default, node2);
    }
    return null;
  }
  function useMemo(getValue2, condition, shouldUpdate) {
    var cacheRef = React__namespace.useRef({});
    if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
      cacheRef.current.value = getValue2();
      cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
  }
  var fillRef = function fillRef2(ref, node2) {
    if (typeof ref === "function") {
      ref(node2);
    } else if (_typeof(ref) === "object" && ref && "current" in ref) {
      ref.current = node2;
    }
  };
  var composeRef = function composeRef2() {
    for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
      refs[_key] = arguments[_key];
    }
    var refList = refs.filter(Boolean);
    if (refList.length <= 1) {
      return refList[0];
    }
    return function(node2) {
      refs.forEach(function(ref) {
        fillRef(ref, node2);
      });
    };
  };
  var useComposeRef = function useComposeRef2() {
    for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      refs[_key2] = arguments[_key2];
    }
    return useMemo(function() {
      return composeRef.apply(void 0, refs);
    }, refs, function(prev2, next2) {
      return prev2.length !== next2.length || prev2.every(function(ref, i) {
        return ref !== next2[i];
      });
    });
  };
  var supportRef = function supportRef2(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    var type4 = reactIsExports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
    if (typeof type4 === "function" && !((_type$prototype = type4.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type4.$$typeof !== reactIsExports.ForwardRef) {
      return false;
    }
    if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== reactIsExports.ForwardRef) {
      return false;
    }
    return true;
  };
  function isReactElement(node2) {
    return /* @__PURE__ */ React.isValidElement(node2) && !reactIsExports.isFragment(node2);
  }
  Number(React.version.split(".")[0]) >= 19 ? (
    // >= React 19
    function(node2) {
      if (isReactElement(node2)) {
        return node2.props.ref;
      }
      return null;
    }
  ) : (
    // < React 19
    function(node2) {
      if (isReactElement(node2)) {
        return node2.ref;
      }
      return null;
    }
  );
  var CollectionContext = /* @__PURE__ */ React__namespace.createContext(null);
  function Collection(_ref) {
    var children = _ref.children, onBatchResize = _ref.onBatchResize;
    var resizeIdRef = React__namespace.useRef(0);
    var resizeInfosRef = React__namespace.useRef([]);
    var onCollectionResize = React__namespace.useContext(CollectionContext);
    var onResize2 = React__namespace.useCallback(function(size, element, data) {
      resizeIdRef.current += 1;
      var currentId = resizeIdRef.current;
      resizeInfosRef.current.push({
        size,
        element,
        data
      });
      Promise.resolve().then(function() {
        if (currentId === resizeIdRef.current) {
          onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
          resizeInfosRef.current = [];
        }
      });
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
    }, [onBatchResize, onCollectionResize]);
    return /* @__PURE__ */ React__namespace.createElement(CollectionContext.Provider, {
      value: onResize2
    }, children);
  }
  var MapShim = function() {
    if (typeof Map !== "undefined") {
      return Map;
    }
    function getIndex(arr, key) {
      var result = -1;
      arr.some(function(entry, index2) {
        if (entry[0] === key) {
          result = index2;
          return true;
        }
        return false;
      });
      return result;
    }
    return (
      /** @class */
      function() {
        function class_1() {
          this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function() {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        class_1.prototype.get = function(key) {
          var index2 = getIndex(this.__entries__, key);
          var entry = this.__entries__[index2];
          return entry && entry[1];
        };
        class_1.prototype.set = function(key, value) {
          var index2 = getIndex(this.__entries__, key);
          if (~index2) {
            this.__entries__[index2][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        class_1.prototype.delete = function(key) {
          var entries = this.__entries__;
          var index2 = getIndex(entries, key);
          if (~index2) {
            entries.splice(index2, 1);
          }
        };
        class_1.prototype.has = function(key) {
          return !!~getIndex(this.__entries__, key);
        };
        class_1.prototype.clear = function() {
          this.__entries__.splice(0);
        };
        class_1.prototype.forEach = function(callback, ctx) {
          if (ctx === void 0) {
            ctx = null;
          }
          for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
            var entry = _a[_i];
            callback.call(ctx, entry[1], entry[0]);
          }
        };
        return class_1;
      }()
    );
  }();
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
  var global$1 = function() {
    if (typeof global !== "undefined" && global.Math === Math) {
      return global;
    }
    if (typeof self !== "undefined" && self.Math === Math) {
      return self;
    }
    if (typeof window !== "undefined" && window.Math === Math) {
      return window;
    }
    return Function("return this")();
  }();
  var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === "function") {
      return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
      return setTimeout(function() {
        return callback(Date.now());
      }, 1e3 / 60);
    };
  }();
  var trailingTimeout = 2;
  function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }
      if (trailingCall) {
        proxy();
      }
    }
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    function proxy() {
      var timeStamp = Date.now();
      if (leadingCall) {
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        }
        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }
      lastCallTime = timeStamp;
    }
    return proxy;
  }
  var REFRESH_DELAY = 20;
  var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var mutationObserverSupported = typeof MutationObserver !== "undefined";
  var ResizeObserverController = (
    /** @class */
    function() {
      function ResizeObserverController2() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      ResizeObserverController2.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        }
        if (!this.connected_) {
          this.connect_();
        }
      };
      ResizeObserverController2.prototype.removeObserver = function(observer) {
        var observers2 = this.observers_;
        var index2 = observers2.indexOf(observer);
        if (~index2) {
          observers2.splice(index2, 1);
        }
        if (!observers2.length && this.connected_) {
          this.disconnect_();
        }
      };
      ResizeObserverController2.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        if (changesDetected) {
          this.refresh();
        }
      };
      ResizeObserverController2.prototype.updateObservers_ = function() {
        var activeObservers = this.observers_.filter(function(observer) {
          return observer.gatherActive(), observer.hasActive();
        });
        activeObservers.forEach(function(observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      ResizeObserverController2.prototype.connect_ = function() {
        if (!isBrowser || this.connected_) {
          return;
        }
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      };
      ResizeObserverController2.prototype.disconnect_ = function() {
        if (!isBrowser || !this.connected_) {
          return;
        }
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
        var isReflowProperty = transitionKeys.some(function(key) {
          return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
          this.refresh();
        }
      };
      ResizeObserverController2.getInstance = function() {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController2();
        }
        return this.instance_;
      };
      ResizeObserverController2.instance_ = null;
      return ResizeObserverController2;
    }()
  );
  var defineConfigurable = function(target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return target;
  };
  var getWindowOf = function(target) {
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    return ownerGlobal || global$1;
  };
  var emptyRect = createRectInit(0, 0, 0, 0);
  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size, position2) {
      var value = styles["border-" + position2 + "-width"];
      return size + toFloat(value);
    }, 0);
  }
  function getPaddings(styles) {
    var positions = ["top", "right", "bottom", "left"];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position2 = positions_1[_i];
      var value = styles["padding-" + position2];
      paddings[position2] = toFloat(value);
    }
    return paddings;
  }
  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  function getHTMLElementContentRect(target) {
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    var width = toFloat(styles.width), height = toFloat(styles.height);
    if (styles.boxSizing === "border-box") {
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, "left", "right") + horizPad;
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, "top", "bottom") + vertPad;
      }
    }
    if (!isDocumentElement(target)) {
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight;
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
  }
  var isSVGGraphicsElement = function() {
    if (typeof SVGGraphicsElement !== "undefined") {
      return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    }
    return function(target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
    };
  }();
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
  }
  function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    defineConfigurable(rect, {
      x,
      y,
      width,
      height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x
    });
    return rect;
  }
  function createRectInit(x, y, width, height) {
    return { x, y, width, height };
  }
  var ResizeObservation = (
    /** @class */
    function() {
      function ResizeObservation2(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      ResizeObservation2.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      ResizeObservation2.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };
      return ResizeObservation2;
    }()
  );
  var ResizeObserverEntry = (
    /** @class */
    /* @__PURE__ */ function() {
      function ResizeObserverEntry2(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        defineConfigurable(this, { target, contentRect });
      }
      return ResizeObserverEntry2;
    }()
  );
  var ResizeObserverSPI = (
    /** @class */
    function() {
      function ResizeObserverSPI2(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();
        if (typeof callback !== "function") {
          throw new TypeError("The callback provided as parameter 1 is not a function.");
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      ResizeObserverSPI2.prototype.observe = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (observations.has(target)) {
          return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      };
      ResizeObserverSPI2.prototype.unobserve = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (!observations.has(target)) {
          return;
        }
        observations.delete(target);
        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      ResizeObserverSPI2.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      ResizeObserverSPI2.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      ResizeObserverSPI2.prototype.broadcastActive = function() {
        if (!this.hasActive()) {
          return;
        }
        var ctx = this.callbackCtx_;
        var entries = this.activeObservations_.map(function(observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      ResizeObserverSPI2.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      };
      ResizeObserverSPI2.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      };
      return ResizeObserverSPI2;
    }()
  );
  var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
  var ResizeObserver$2 = (
    /** @class */
    /* @__PURE__ */ function() {
      function ResizeObserver2(callback) {
        if (!(this instanceof ResizeObserver2)) {
          throw new TypeError("Cannot call a class as a function.");
        }
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }
      return ResizeObserver2;
    }()
  );
  [
    "observe",
    "unobserve",
    "disconnect"
  ].forEach(function(method4) {
    ResizeObserver$2.prototype[method4] = function() {
      var _a;
      return (_a = observers.get(this))[method4].apply(_a, arguments);
    };
  });
  var index = function() {
    if (typeof global$1.ResizeObserver !== "undefined") {
      return global$1.ResizeObserver;
    }
    return ResizeObserver$2;
  }();
  var elementListeners = /* @__PURE__ */ new Map();
  function onResize(entities) {
    entities.forEach(function(entity) {
      var _elementListeners$get;
      var target = entity.target;
      (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function(listener) {
        return listener(target);
      });
    });
  }
  var resizeObserver = new index(onResize);
  function observe(element, callback) {
    if (!elementListeners.has(element)) {
      elementListeners.set(element, /* @__PURE__ */ new Set());
      resizeObserver.observe(element);
    }
    elementListeners.get(element).add(callback);
  }
  function unobserve(element, callback) {
    if (elementListeners.has(element)) {
      elementListeners.get(element).delete(callback);
      if (!elementListeners.get(element).size) {
        resizeObserver.unobserve(element);
        elementListeners.delete(element);
      }
    }
  }
  function _classCallCheck(a, n2) {
    if (!(a instanceof n2)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e2, r) {
    for (var t2 = 0; t2 < r.length; t2++) {
      var o = r[t2];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e2, toPropertyKey(o.key), o);
    }
  }
  function _createClass(e2, r, t2) {
    return r && _defineProperties(e2.prototype, r), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", {
      writable: false
    }), e2;
  }
  function _setPrototypeOf(t2, e2) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, _setPrototypeOf(t2, e2);
  }
  function _inherits(t2, e2) {
    if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
    t2.prototype = Object.create(e2 && e2.prototype, {
      constructor: {
        value: t2,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t2, "prototype", {
      writable: false
    }), e2 && _setPrototypeOf(t2, e2);
  }
  function _getPrototypeOf(t2) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
      return t3.__proto__ || Object.getPrototypeOf(t3);
    }, _getPrototypeOf(t2);
  }
  function _isNativeReflectConstruct() {
    try {
      var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t3) {
    }
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
      return !!t2;
    })();
  }
  function _assertThisInitialized(e2) {
    if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }
  function _possibleConstructorReturn(t2, e2) {
    if (e2 && ("object" == _typeof(e2) || "function" == typeof e2)) return e2;
    if (void 0 !== e2) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t2);
  }
  function _createSuper(t2) {
    var r = _isNativeReflectConstruct();
    return function() {
      var e2, o = _getPrototypeOf(t2);
      if (r) {
        var s = _getPrototypeOf(this).constructor;
        e2 = Reflect.construct(o, arguments, s);
      } else e2 = o.apply(this, arguments);
      return _possibleConstructorReturn(this, e2);
    };
  }
  var DomWrapper$1 = /* @__PURE__ */ function(_React$Component) {
    _inherits(DomWrapper2, _React$Component);
    var _super = _createSuper(DomWrapper2);
    function DomWrapper2() {
      _classCallCheck(this, DomWrapper2);
      return _super.apply(this, arguments);
    }
    _createClass(DomWrapper2, [{
      key: "render",
      value: function render2() {
        return this.props.children;
      }
    }]);
    return DomWrapper2;
  }(React__namespace.Component);
  function SingleObserver(props, ref) {
    var children = props.children, disabled = props.disabled;
    var elementRef = React__namespace.useRef(null);
    var wrapperRef = React__namespace.useRef(null);
    var onCollectionResize = React__namespace.useContext(CollectionContext);
    var isRenderProps = typeof children === "function";
    var mergedChildren = isRenderProps ? children(elementRef) : children;
    var sizeRef = React__namespace.useRef({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1
    });
    var canRef = !isRenderProps && /* @__PURE__ */ React__namespace.isValidElement(mergedChildren) && supportRef(mergedChildren);
    var originRef = canRef ? mergedChildren.ref : null;
    var mergedRef = useComposeRef(originRef, elementRef);
    var getDom = function getDom2() {
      var _elementRef$current;
      return findDOMNode(elementRef.current) || // Support `nativeElement` format
      (elementRef.current && _typeof(elementRef.current) === "object" ? findDOMNode((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || findDOMNode(wrapperRef.current);
    };
    React__namespace.useImperativeHandle(ref, function() {
      return getDom();
    });
    var propsRef = React__namespace.useRef(props);
    propsRef.current = props;
    var onInternalResize = React__namespace.useCallback(function(target) {
      var _propsRef$current = propsRef.current, onResize2 = _propsRef$current.onResize, data = _propsRef$current.data;
      var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
      var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);
      if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        sizeRef.current = size;
        var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
        var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
        var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
          offsetWidth: mergedOffsetWidth,
          offsetHeight: mergedOffsetHeight
        });
        onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
        if (onResize2) {
          Promise.resolve().then(function() {
            onResize2(sizeInfo, target);
          });
        }
      }
    }, []);
    React__namespace.useEffect(function() {
      var currentElement = getDom();
      if (currentElement && !disabled) {
        observe(currentElement, onInternalResize);
      }
      return function() {
        return unobserve(currentElement, onInternalResize);
      };
    }, [elementRef.current, disabled]);
    return /* @__PURE__ */ React__namespace.createElement(DomWrapper$1, {
      ref: wrapperRef
    }, canRef ? /* @__PURE__ */ React__namespace.cloneElement(mergedChildren, {
      ref: mergedRef
    }) : mergedChildren);
  }
  var RefSingleObserver = /* @__PURE__ */ React__namespace.forwardRef(SingleObserver);
  var INTERNAL_PREFIX_KEY = "rc-observer-key";
  function ResizeObserver$1(props, ref) {
    var children = props.children;
    var childNodes = typeof children === "function" ? [children] : toArray$2(children);
    return childNodes.map(function(child, index2) {
      var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index2);
      return /* @__PURE__ */ React__namespace.createElement(RefSingleObserver, _extends({}, props, {
        key,
        ref: index2 === 0 ? ref : void 0
      }), child);
    });
  }
  var RefResizeObserver = /* @__PURE__ */ React__namespace.forwardRef(ResizeObserver$1);
  RefResizeObserver.Collection = Collection;
  function omit(obj, fields) {
    var clone = Object.assign({}, obj);
    if (Array.isArray(fields)) {
      fields.forEach(function(key) {
        delete clone[key];
      });
    }
    return clone;
  }
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e2 = 0, n2 = Array(a); e2 < a; e2++) n2[e2] = r[e2];
    return n2;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t2 = {}.toString.call(r).slice(8, -1);
      return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  var raf = function raf2(callback) {
    return +setTimeout(callback, 16);
  };
  var caf = function caf2(num) {
    return clearTimeout(num);
  };
  if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
    raf = function raf3(callback) {
      return window.requestAnimationFrame(callback);
    };
    caf = function caf3(handle) {
      return window.cancelAnimationFrame(handle);
    };
  }
  var rafUUID = 0;
  var rafIds = /* @__PURE__ */ new Map();
  function cleanup(id) {
    rafIds.delete(id);
  }
  var wrapperRaf = function wrapperRaf2(callback) {
    var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    rafUUID += 1;
    var id = rafUUID;
    function callRef(leftTimes) {
      if (leftTimes === 0) {
        cleanup(id);
        callback();
      } else {
        var realId = raf(function() {
          callRef(leftTimes - 1);
        });
        rafIds.set(id, realId);
      }
    }
    callRef(times);
    return id;
  };
  wrapperRaf.cancel = function(id) {
    var realId = rafIds.get(id);
    cleanup(id);
    return caf(realId);
  };
  function throttleByAnimationFrame(fn) {
    let requestId;
    const later = (args) => () => {
      requestId = null;
      fn.apply(void 0, _toConsumableArray(args));
    };
    const throttled = function() {
      if (requestId == null) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        requestId = wrapperRaf(later(args));
      }
    };
    throttled.cancel = () => {
      wrapperRaf.cancel(requestId);
      requestId = null;
    };
    return throttled;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _iterableToArrayLimit(r, l2) {
    var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t2) {
      var e2, n2, i, u2, a = [], f2 = true, o = false;
      try {
        if (i = (t2 = t2.call(r)).next, 0 === l2) {
          if (Object(t2) !== t2) return;
          f2 = false;
        } else for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true) ;
      } catch (r2) {
        o = true, n2 = r2;
      } finally {
        try {
          if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2)) return;
        } finally {
          if (o) throw n2;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(r, e2) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e2) || _unsupportedIterableToArray(r, e2) || _nonIterableRest();
  }
  function murmur2(str) {
    var h2 = 0;
    var k2, i = 0, len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
      k2 ^= /* k >>> r: */
      k2 >>> 24;
      h2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h2 ^= str.charCodeAt(i) & 255;
        h2 = /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    h2 ^= h2 >>> 13;
    h2 = /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
  }
  function canUseDom() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  function contains(root, n2) {
    if (!root) {
      return false;
    }
    if (root.contains) {
      return root.contains(n2);
    }
    var node2 = n2;
    while (node2) {
      if (node2 === root) {
        return true;
      }
      node2 = node2.parentNode;
    }
    return false;
  }
  var APPEND_ORDER = "data-rc-order";
  var APPEND_PRIORITY = "data-rc-priority";
  var MARK_KEY = "rc-util-key";
  var containerCache = /* @__PURE__ */ new Map();
  function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
    if (mark) {
      return mark.startsWith("data-") ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
  }
  function getContainer(option) {
    if (option.attachTo) {
      return option.attachTo;
    }
    var head = document.querySelector("head");
    return head || document.body;
  }
  function getOrder(prepend) {
    if (prepend === "queue") {
      return "prependQueue";
    }
    return prepend ? "prepend" : "append";
  }
  function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
      return node2.tagName === "STYLE";
    });
  }
  function injectCSS(css) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!canUseDom()) {
      return null;
    }
    var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
    var mergedOrder = getOrder(prepend);
    var isPrependQueue = mergedOrder === "prependQueue";
    var styleNode = document.createElement("style");
    styleNode.setAttribute(APPEND_ORDER, mergedOrder);
    if (isPrependQueue && priority) {
      styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
    }
    if (csp !== null && csp !== void 0 && csp.nonce) {
      styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
      if (isPrependQueue) {
        var existStyle = (option.styles || findStyles(container)).filter(function(node2) {
          if (!["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER))) {
            return false;
          }
          var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
          return priority >= nodePriority;
        });
        if (existStyle.length) {
          container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
          return styleNode;
        }
      }
      container.insertBefore(styleNode, firstChild);
    } else {
      container.appendChild(styleNode);
    }
    return styleNode;
  }
  function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var container = getContainer(option);
    return (option.styles || findStyles(container)).find(function(node2) {
      return node2.getAttribute(getMark(option)) === key;
    });
  }
  function removeCSS(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    if (existNode) {
      var container = getContainer(option);
      container.removeChild(existNode);
    }
  }
  function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
      var placeholderStyle = injectCSS("", option);
      var parentNode = placeholderStyle.parentNode;
      containerCache.set(container, parentNode);
      container.removeChild(placeholderStyle);
    }
  }
  function updateCSS(css, key) {
    var originOption = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var container = getContainer(originOption);
    var styles = findStyles(container);
    var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
      styles
    });
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
      var _option$csp, _option$csp2;
      if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
        var _option$csp3;
        existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
      }
      if (existNode.innerHTML !== css) {
        existNode.innerHTML = css;
      }
      return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
  }
  function _objectWithoutPropertiesLoose(r, e2) {
    if (null == r) return {};
    var t2 = {};
    for (var n2 in r) if ({}.hasOwnProperty.call(r, n2)) {
      if (e2.includes(n2)) continue;
      t2[n2] = r[n2];
    }
    return t2;
  }
  function _objectWithoutProperties(e2, t2) {
    if (null == e2) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e2);
      for (r = 0; r < s.length; r++) o = s[r], t2.includes(o) || {}.propertyIsEnumerable.call(e2, o) && (i[o] = e2[o]);
    }
    return i;
  }
  function isEqual(obj1, obj2) {
    var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var refSet = /* @__PURE__ */ new Set();
    function deepEqual(a, b2) {
      var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var circular = refSet.has(a);
      warningOnce(!circular, "Warning: There may be circular references");
      if (circular) {
        return false;
      }
      if (a === b2) {
        return true;
      }
      if (shallow && level > 1) {
        return false;
      }
      refSet.add(a);
      var newLevel = level + 1;
      if (Array.isArray(a)) {
        if (!Array.isArray(b2) || a.length !== b2.length) {
          return false;
        }
        for (var i = 0; i < a.length; i++) {
          if (!deepEqual(a[i], b2[i], newLevel)) {
            return false;
          }
        }
        return true;
      }
      if (a && b2 && _typeof(a) === "object" && _typeof(b2) === "object") {
        var keys2 = Object.keys(a);
        if (keys2.length !== Object.keys(b2).length) {
          return false;
        }
        return keys2.every(function(key) {
          return deepEqual(a[key], b2[key], newLevel);
        });
      }
      return false;
    }
    return deepEqual(obj1, obj2);
  }
  var SPLIT$1 = "%";
  function pathKey(keys2) {
    return keys2.join(SPLIT$1);
  }
  var Entity = /* @__PURE__ */ function() {
    function Entity2(instanceId) {
      _classCallCheck(this, Entity2);
      _defineProperty(this, "instanceId", void 0);
      _defineProperty(this, "cache", /* @__PURE__ */ new Map());
      this.instanceId = instanceId;
    }
    _createClass(Entity2, [{
      key: "get",
      value: function get2(keys2) {
        return this.opGet(pathKey(keys2));
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opGet",
      value: function opGet(keyPathStr) {
        return this.cache.get(keyPathStr) || null;
      }
    }, {
      key: "update",
      value: function update(keys2, valueFn) {
        return this.opUpdate(pathKey(keys2), valueFn);
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opUpdate",
      value: function opUpdate(keyPathStr, valueFn) {
        var prevValue = this.cache.get(keyPathStr);
        var nextValue = valueFn(prevValue);
        if (nextValue === null) {
          this.cache.delete(keyPathStr);
        } else {
          this.cache.set(keyPathStr, nextValue);
        }
      }
    }]);
    return Entity2;
  }();
  var ATTR_TOKEN = "data-token-hash";
  var ATTR_MARK = "data-css-hash";
  var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
  function createCache() {
    var cssinjsInstanceId = Math.random().toString(12).slice(2);
    if (typeof document !== "undefined" && document.head && document.body) {
      var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
      var firstChild = document.head.firstChild;
      Array.from(styles).forEach(function(style2) {
        style2[CSS_IN_JS_INSTANCE] = style2[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
        if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          document.head.insertBefore(style2, firstChild);
        }
      });
      var styleHash = {};
      Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style2) {
        var hash = style2.getAttribute(ATTR_MARK);
        if (styleHash[hash]) {
          if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
            var _style$parentNode;
            (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
          }
        } else {
          styleHash[hash] = true;
        }
      });
    }
    return new Entity(cssinjsInstanceId);
  }
  var StyleContext = /* @__PURE__ */ React__namespace.createContext({
    hashPriority: "low",
    cache: createCache(),
    defaultCache: true
  });
  function sameDerivativeOption(left, right) {
    if (left.length !== right.length) {
      return false;
    }
    for (var i = 0; i < left.length; i++) {
      if (left[i] !== right[i]) {
        return false;
      }
    }
    return true;
  }
  var ThemeCache = /* @__PURE__ */ function() {
    function ThemeCache2() {
      _classCallCheck(this, ThemeCache2);
      _defineProperty(this, "cache", void 0);
      _defineProperty(this, "keys", void 0);
      _defineProperty(this, "cacheCallTimes", void 0);
      this.cache = /* @__PURE__ */ new Map();
      this.keys = [];
      this.cacheCallTimes = 0;
    }
    _createClass(ThemeCache2, [{
      key: "size",
      value: function size() {
        return this.keys.length;
      }
    }, {
      key: "internalGet",
      value: function internalGet(derivativeOption) {
        var _cache2, _cache3;
        var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var cache = {
          map: this.cache
        };
        derivativeOption.forEach(function(derivative2) {
          if (!cache) {
            cache = void 0;
          } else {
            var _cache;
            cache = (_cache = cache) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative2);
          }
        });
        if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
          cache.value[1] = this.cacheCallTimes++;
        }
        return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
      }
    }, {
      key: "get",
      value: function get2(derivativeOption) {
        var _this$internalGet;
        return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
      }
    }, {
      key: "has",
      value: function has(derivativeOption) {
        return !!this.internalGet(derivativeOption);
      }
    }, {
      key: "set",
      value: function set2(derivativeOption, value) {
        var _this = this;
        if (!this.has(derivativeOption)) {
          if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
            var _this$keys$reduce = this.keys.reduce(function(result, key) {
              var _result = _slicedToArray(result, 2), callTimes = _result[1];
              if (_this.internalGet(key)[1] < callTimes) {
                return [key, _this.internalGet(key)[1]];
              }
              return result;
            }, [this.keys[0], this.cacheCallTimes]), _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
            this.delete(targetKey);
          }
          this.keys.push(derivativeOption);
        }
        var cache = this.cache;
        derivativeOption.forEach(function(derivative2, index2) {
          if (index2 === derivativeOption.length - 1) {
            cache.set(derivative2, {
              value: [value, _this.cacheCallTimes++]
            });
          } else {
            var cacheValue = cache.get(derivative2);
            if (!cacheValue) {
              cache.set(derivative2, {
                map: /* @__PURE__ */ new Map()
              });
            } else if (!cacheValue.map) {
              cacheValue.map = /* @__PURE__ */ new Map();
            }
            cache = cache.get(derivative2).map;
          }
        });
      }
    }, {
      key: "deleteByPath",
      value: function deleteByPath(currentCache, derivatives) {
        var cache = currentCache.get(derivatives[0]);
        if (derivatives.length === 1) {
          var _cache$value;
          if (!cache.map) {
            currentCache.delete(derivatives[0]);
          } else {
            currentCache.set(derivatives[0], {
              map: cache.map
            });
          }
          return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
        }
        var result = this.deleteByPath(cache.map, derivatives.slice(1));
        if ((!cache.map || cache.map.size === 0) && !cache.value) {
          currentCache.delete(derivatives[0]);
        }
        return result;
      }
    }, {
      key: "delete",
      value: function _delete(derivativeOption) {
        if (this.has(derivativeOption)) {
          this.keys = this.keys.filter(function(item) {
            return !sameDerivativeOption(item, derivativeOption);
          });
          return this.deleteByPath(this.cache, derivativeOption);
        }
        return void 0;
      }
    }]);
    return ThemeCache2;
  }();
  _defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
  _defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);
  var uuid$2 = 0;
  var Theme = /* @__PURE__ */ function() {
    function Theme2(derivatives) {
      _classCallCheck(this, Theme2);
      _defineProperty(this, "derivatives", void 0);
      _defineProperty(this, "id", void 0);
      this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
      this.id = uuid$2;
      if (derivatives.length === 0) {
        warning$2(derivatives.length > 0);
      }
      uuid$2 += 1;
    }
    _createClass(Theme2, [{
      key: "getDerivativeToken",
      value: function getDerivativeToken(token2) {
        return this.derivatives.reduce(function(result, derivative2) {
          return derivative2(token2, result);
        }, void 0);
      }
    }]);
    return Theme2;
  }();
  var cacheThemes = new ThemeCache();
  function createTheme(derivatives) {
    var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
    if (!cacheThemes.has(derivativeArr)) {
      cacheThemes.set(derivativeArr, new Theme(derivativeArr));
    }
    return cacheThemes.get(derivativeArr);
  }
  var resultCache = /* @__PURE__ */ new WeakMap();
  var RESULT_VALUE = {};
  function memoResult(callback, deps) {
    var current = resultCache;
    for (var i = 0; i < deps.length; i += 1) {
      var dep = deps[i];
      if (!current.has(dep)) {
        current.set(dep, /* @__PURE__ */ new WeakMap());
      }
      current = current.get(dep);
    }
    if (!current.has(RESULT_VALUE)) {
      current.set(RESULT_VALUE, callback());
    }
    return current.get(RESULT_VALUE);
  }
  var flattenTokenCache = /* @__PURE__ */ new WeakMap();
  function flattenToken(token2) {
    var hashed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var str = flattenTokenCache.get(token2) || "";
    if (!str) {
      Object.keys(token2).forEach(function(key) {
        var value = token2[key];
        str += key;
        if (value instanceof Theme) {
          str += value.id;
        } else if (value && _typeof(value) === "object") {
          str += flattenToken(value, hashed);
        } else {
          str += value;
        }
      });
      if (hashed) {
        str = murmur2(str);
      }
      flattenTokenCache.set(token2, str);
    }
    return str;
  }
  function token2key(token2, salt) {
    return murmur2("".concat(salt, "_").concat(flattenToken(token2, true)));
  }
  var isClientSide = canUseDom();
  function unit$1(num) {
    if (typeof num === "number") {
      return "".concat(num, "px");
    }
    return num;
  }
  function toStyleStr(style2, tokenKey, styleId) {
    var customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var plain = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    if (plain) {
      return style2;
    }
    var attrs = _objectSpread2(_objectSpread2({}, customizeAttrs), {}, _defineProperty(_defineProperty({}, ATTR_TOKEN, tokenKey), ATTR_MARK, styleId));
    var attrStr = Object.keys(attrs).map(function(attr) {
      var val = attrs[attr];
      return val ? "".concat(attr, '="').concat(val, '"') : null;
    }).filter(function(v2) {
      return v2;
    }).join(" ");
    return "<style ".concat(attrStr, ">").concat(style2, "</style>");
  }
  var token2CSSVar = function token2CSSVar2(token2) {
    var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "--".concat(prefix ? "".concat(prefix, "-") : "").concat(token2).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
  };
  var serializeCSSVar = function serializeCSSVar2(cssVars, hashId, options) {
    if (!Object.keys(cssVars).length) {
      return "";
    }
    return ".".concat(hashId).concat(options !== null && options !== void 0 && options.scope ? ".".concat(options.scope) : "", "{").concat(Object.entries(cssVars).map(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
      return "".concat(key, ":").concat(value, ";");
    }).join(""), "}");
  };
  var transformToken = function transformToken2(token2, themeKey, config) {
    var cssVars = {};
    var result = {};
    Object.entries(token2).forEach(function(_ref3) {
      var _config$preserve, _config$ignore;
      var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
      if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
        result[key] = value;
      } else if ((typeof value === "string" || typeof value === "number") && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
        var _config$unitless;
        var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
        cssVars[cssVar] = typeof value === "number" && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
        result[key] = "var(".concat(cssVar, ")");
      }
    });
    return [result, serializeCSSVar(cssVars, themeKey, {
      scope: config === null || config === void 0 ? void 0 : config.scope
    })];
  };
  var useInternalLayoutEffect = canUseDom() ? React__namespace.useLayoutEffect : React__namespace.useEffect;
  var useLayoutEffect = function useLayoutEffect2(callback, deps) {
    var firstMountRef = React__namespace.useRef(true);
    useInternalLayoutEffect(function() {
      return callback(firstMountRef.current);
    }, deps);
    useInternalLayoutEffect(function() {
      firstMountRef.current = false;
      return function() {
        firstMountRef.current = true;
      };
    }, []);
  };
  var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
    useLayoutEffect(function(firstMount) {
      if (!firstMount) {
        return callback();
      }
    }, deps);
  };
  var fullClone$3 = _objectSpread2({}, React__namespace);
  var useInsertionEffect$1 = fullClone$3.useInsertionEffect;
  var useInsertionEffectPolyfill = function useInsertionEffectPolyfill2(renderEffect, effect, deps) {
    React__namespace.useMemo(renderEffect, deps);
    useLayoutEffect(function() {
      return effect(true);
    }, deps);
  };
  var useCompatibleInsertionEffect = useInsertionEffect$1 ? function(renderEffect, effect, deps) {
    return useInsertionEffect$1(function() {
      renderEffect();
      return effect();
    }, deps);
  } : useInsertionEffectPolyfill;
  var fullClone$2 = _objectSpread2({}, React__namespace);
  var useInsertionEffect = fullClone$2.useInsertionEffect;
  var useCleanupRegister = function useCleanupRegister2(deps) {
    var effectCleanups = [];
    var cleanupFlag = false;
    function register2(fn) {
      if (cleanupFlag) {
        return;
      }
      effectCleanups.push(fn);
    }
    React__namespace.useEffect(function() {
      cleanupFlag = false;
      return function() {
        cleanupFlag = true;
        if (effectCleanups.length) {
          effectCleanups.forEach(function(fn) {
            return fn();
          });
        }
      };
    }, deps);
    return register2;
  };
  var useRun = function useRun2() {
    return function(fn) {
      fn();
    };
  };
  var useEffectCleanupRegister = typeof useInsertionEffect !== "undefined" ? useCleanupRegister : useRun;
  function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
    var _React$useContext = React__namespace.useContext(StyleContext), globalCache = _React$useContext.cache;
    var fullPath = [prefix].concat(_toConsumableArray(keyPath));
    var fullPathStr = pathKey(fullPath);
    var register2 = useEffectCleanupRegister([fullPathStr]);
    var buildCache = function buildCache2(updater) {
      globalCache.opUpdate(fullPathStr, function(prevCache) {
        var _ref = prevCache || [void 0, void 0], _ref2 = _slicedToArray(_ref, 2), _ref2$ = _ref2[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache = _ref2[1];
        var tmpCache = cache;
        var mergedCache = tmpCache || cacheFn();
        var data = [times, mergedCache];
        return updater ? updater(data) : data;
      });
    };
    React__namespace.useMemo(
      function() {
        buildCache();
      },
      /* eslint-disable react-hooks/exhaustive-deps */
      [fullPathStr]
      /* eslint-enable */
    );
    var cacheEntity = globalCache.opGet(fullPathStr);
    var cacheContent = cacheEntity[1];
    useCompatibleInsertionEffect(function() {
      onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
    }, function(polyfill) {
      buildCache(function(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2), times = _ref4[0], cache = _ref4[1];
        if (polyfill && times === 0) {
          onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
        }
        return [times + 1, cache];
      });
      return function() {
        globalCache.opUpdate(fullPathStr, function(prevCache) {
          var _ref5 = prevCache || [], _ref6 = _slicedToArray(_ref5, 2), _ref6$ = _ref6[0], times = _ref6$ === void 0 ? 0 : _ref6$, cache = _ref6[1];
          var nextCount = times - 1;
          if (nextCount === 0) {
            register2(function() {
              if (polyfill || !globalCache.opGet(fullPathStr)) {
                onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache, false);
              }
            });
            return null;
          }
          return [times - 1, cache];
        });
      };
    }, [fullPathStr]);
    return cacheContent;
  }
  var EMPTY_OVERRIDE = {};
  var hashPrefix = "css";
  var tokenKeys = /* @__PURE__ */ new Map();
  function recordCleanToken(tokenKey) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
  }
  function removeStyleTags(key, instanceId) {
    if (typeof document !== "undefined") {
      var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, '="').concat(key, '"]'));
      styles.forEach(function(style2) {
        if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
          var _style$parentNode;
          (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
        }
      });
    }
  }
  var TOKEN_THRESHOLD = 0;
  function cleanTokenStyle(tokenKey, instanceId) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
    var tokenKeyList = Array.from(tokenKeys.keys());
    var cleanableKeyList = tokenKeyList.filter(function(key) {
      var count = tokenKeys.get(key) || 0;
      return count <= 0;
    });
    if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
      cleanableKeyList.forEach(function(key) {
        removeStyleTags(key, instanceId);
        tokenKeys.delete(key);
      });
    }
  }
  var getComputedToken$1 = function getComputedToken2(originToken, overrideToken, theme, format2) {
    var derivativeToken = theme.getDerivativeToken(originToken);
    var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), overrideToken);
    if (format2) {
      mergedDerivativeToken = format2(mergedDerivativeToken);
    }
    return mergedDerivativeToken;
  };
  var TOKEN_PREFIX = "token";
  function useCacheToken(theme, tokens) {
    var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _useContext = React.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var _option$salt = option.salt, salt = _option$salt === void 0 ? "" : _option$salt, _option$override = option.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken2 = option.formatToken, compute = option.getComputedToken, cssVar = option.cssVar;
    var mergedToken = memoResult(function() {
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
    }, tokens);
    var tokenStr = flattenToken(mergedToken);
    var overrideTokenStr = flattenToken(override);
    var cssVarStr = cssVar ? flattenToken(cssVar) : "";
    var cachedToken = useGlobalCache(TOKEN_PREFIX, [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr], function() {
      var _cssVar$key;
      var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken$1(mergedToken, override, theme, formatToken2);
      var actualToken = _objectSpread2({}, mergedDerivativeToken);
      var cssVarsStr = "";
      if (!!cssVar) {
        var _transformToken = transformToken(mergedDerivativeToken, cssVar.key, {
          prefix: cssVar.prefix,
          ignore: cssVar.ignore,
          unitless: cssVar.unitless,
          preserve: cssVar.preserve
        });
        var _transformToken2 = _slicedToArray(_transformToken, 2);
        mergedDerivativeToken = _transformToken2[0];
        cssVarsStr = _transformToken2[1];
      }
      var tokenKey = token2key(mergedDerivativeToken, salt);
      mergedDerivativeToken._tokenKey = tokenKey;
      actualToken._tokenKey = token2key(actualToken, salt);
      var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
      mergedDerivativeToken._themeKey = themeKey;
      recordCleanToken(themeKey);
      var hashId = "".concat(hashPrefix, "-").concat(murmur2(tokenKey));
      mergedDerivativeToken._hashId = hashId;
      return [mergedDerivativeToken, hashId, actualToken, cssVarsStr, (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ""];
    }, function(cache) {
      cleanTokenStyle(cache[0]._themeKey, instanceId);
    }, function(_ref) {
      var _ref2 = _slicedToArray(_ref, 4), token2 = _ref2[0], cssVarsStr = _ref2[3];
      if (cssVar && cssVarsStr) {
        var style2 = updateCSS(cssVarsStr, murmur2("css-variables-".concat(token2._themeKey)), {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: -999
        });
        style2[CSS_IN_JS_INSTANCE] = instanceId;
        style2.setAttribute(ATTR_TOKEN, token2._themeKey);
      }
    });
    return cachedToken;
  }
  var extract$2 = function extract2(cache, effectStyles, options) {
    var _cache = _slicedToArray(cache, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
    var _ref3 = options || {}, plain = _ref3.plain;
    if (!styleStr) {
      return null;
    }
    var styleId = realToken._tokenKey;
    var order = -999;
    var sharedAttrs = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(order)
    };
    var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [order, styleId, styleText];
  };
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";
  var abs = Math.abs;
  var from = String.fromCharCode;
  function trim(value) {
    return value.trim();
  }
  function replace(value, pattern4, replacement) {
    return value.replace(pattern4, replacement);
  }
  function indexof(value, search, position2) {
    return value.indexOf(search, position2);
  }
  function charat(value, index2) {
    return value.charCodeAt(index2) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array4) {
    return array4.push(value), value;
  }
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type4, props, children, length2, siblings) {
    return { value, root, parent, type: type4, props, children, line, column, length: length2, return: "", siblings };
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type4) {
    switch (type4) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type4) {
    return trim(slice(position - 1, delimiter(type4 === 91 ? type4 + 2 : type4 === 40 ? type4 + 1 : type4)));
  }
  function whitespace$1(type4) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type4) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index2, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type4) {
    while (next())
      switch (character) {
        case type4:
          return position;
        case 34:
        case 39:
          if (type4 !== 34 && type4 !== 39)
            delimiter(character);
          break;
        case 40:
          if (type4 === 41)
            delimiter(type4);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type4, index2) {
    while (next())
      if (type4 + character === 47 + 10)
        break;
      else if (type4 + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index2, position - 1) + "*" + from(type4 === 47 ? type4 : next());
  }
  function identifier(index2) {
    while (!token(peek()))
      next();
    return slice(index2, position);
  }
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules2, rulesets, pseudo, points, declarations) {
    var index2 = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type4 = "";
    var props = rules2;
    var children = rulesets;
    var reference = rule;
    var characters2 = type4;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index2 ? points[index2 - 1] : 0)) != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace$1(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
              if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index2++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root, parent, index2, offset, rules2, points, type4, props = [], children = [], length2, rulesets), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules2, points, type4, rules2, props = [], length2, children), children), rules2, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index2 = offset = property = 0, variable = ampersand = 1, type4 = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type4 = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index2, offset, rules2, points, type4, props, children, length2, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules2 : [""];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k2 = 0; i < index2; ++i)
      for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
        if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
          props[k2++] = z;
    return node(value, root, parent, offset === 0 ? RULESET : type4, props, children, length2, siblings);
  }
  function comment(value, root, parent, siblings) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
  }
  function declaration(value, root, parent, length2, siblings) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
  }
  function serialize(children, callback) {
    var output = "";
    for (var i = 0; i < children.length; i++)
      output += callback(children[i], i, children, callback) || "";
    return output;
  }
  function stringify$1(element, index2, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length) break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        if (!strlen(element.value = element.props.join(","))) return "";
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
  var CSS_FILE_STYLE = "_FILE_STYLE__";
  var cachePathMap;
  var fromCSSFile = true;
  function prepare() {
    if (!cachePathMap) {
      cachePathMap = {};
      if (canUseDom()) {
        var div = document.createElement("div");
        div.className = ATTR_CACHE_MAP;
        div.style.position = "fixed";
        div.style.visibility = "hidden";
        div.style.top = "-9999px";
        document.body.appendChild(div);
        var content = getComputedStyle(div).content || "";
        content = content.replace(/^"/, "").replace(/"$/, "");
        content.split(";").forEach(function(item) {
          var _item$split = item.split(":"), _item$split2 = _slicedToArray(_item$split, 2), path2 = _item$split2[0], hash = _item$split2[1];
          cachePathMap[path2] = hash;
        });
        var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
        if (inlineMapStyle) {
          var _inlineMapStyle$paren;
          fromCSSFile = false;
          (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
        }
        document.body.removeChild(div);
      }
    }
  }
  function existPath(path2) {
    prepare();
    return !!cachePathMap[path2];
  }
  function getStyleAndHash(path2) {
    var hash = cachePathMap[path2];
    var styleStr = null;
    if (hash && canUseDom()) {
      if (fromCSSFile) {
        styleStr = CSS_FILE_STYLE;
      } else {
        var _style = document.querySelector("style[".concat(ATTR_MARK, '="').concat(cachePathMap[path2], '"]'));
        if (_style) {
          styleStr = _style.innerHTML;
        } else {
          delete cachePathMap[path2];
        }
      }
    }
    return [styleStr, hash];
  }
  var SKIP_CHECK = "_skip_check_";
  var MULTI_VALUE = "_multi_value_";
  function normalizeStyle(styleStr) {
    var serialized = serialize(compile(styleStr), stringify$1);
    return serialized.replace(/\{%%%\:[^;];}/g, ";");
  }
  function isCompoundCSSProperty(value) {
    return _typeof(value) === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
  }
  function injectSelectorHash(key, hashId, hashPriority) {
    if (!hashId) {
      return key;
    }
    var hashClassName = ".".concat(hashId);
    var hashSelector = hashPriority === "low" ? ":where(".concat(hashClassName, ")") : hashClassName;
    var keys2 = key.split(",").map(function(k2) {
      var _firstPath$match;
      var fullPath = k2.trim().split(/\s+/);
      var firstPath = fullPath[0] || "";
      var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || "";
      firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
      return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
    });
    return keys2.join(",");
  }
  var parseStyle = function parseStyle2(interpolation) {
    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      root: true,
      parentSelectors: []
    }, root = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
    var hashId = config.hashId, layer = config.layer;
    config.path;
    var hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers;
    config.linters;
    var styleStr = "";
    var effectStyle = {};
    function parseKeyframes(keyframes) {
      var animationName = keyframes.getName(hashId);
      if (!effectStyle[animationName]) {
        var _parseStyle = parseStyle2(keyframes.style, config, {
          root: false,
          parentSelectors
        }), _parseStyle2 = _slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
        effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
      }
    }
    function flattenList(list) {
      var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      list.forEach(function(item) {
        if (Array.isArray(item)) {
          flattenList(item, fullList);
        } else if (item) {
          fullList.push(item);
        }
      });
      return fullList;
    }
    var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
    flattenStyleList.forEach(function(originStyle) {
      var style2 = typeof originStyle === "string" && !root ? {} : originStyle;
      if (typeof style2 === "string") {
        styleStr += "".concat(style2, "\n");
      } else if (style2._keyframe) {
        parseKeyframes(style2);
      } else {
        var mergedStyle = transformers.reduce(function(prev2, trans) {
          var _trans$visit;
          return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev2)) || prev2;
        }, style2);
        Object.keys(mergedStyle).forEach(function(key) {
          var value = mergedStyle[key];
          if (_typeof(value) === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
            var subInjectHash = false;
            var mergedKey = key.trim();
            var nextRoot = false;
            if ((root || injectHash) && hashId) {
              if (mergedKey.startsWith("@")) {
                subInjectHash = true;
              } else if (mergedKey === "&") {
                mergedKey = injectSelectorHash("", hashId, hashPriority);
              } else {
                mergedKey = injectSelectorHash(key, hashId, hashPriority);
              }
            } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
              mergedKey = "";
              nextRoot = true;
            }
            var _parseStyle3 = parseStyle2(value, config, {
              root: nextRoot,
              injectHash: subInjectHash,
              parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
            }), _parseStyle4 = _slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
            effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
            styleStr += "".concat(mergedKey).concat(_parsedStr2);
          } else {
            let appendStyle = function(cssKey, cssValue) {
              var styleName = cssKey.replace(/[A-Z]/g, function(match2) {
                return "-".concat(match2.toLowerCase());
              });
              var formatValue = cssValue;
              if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
                formatValue = "".concat(formatValue, "px");
              }
              if (cssKey === "animationName" && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
                parseKeyframes(cssValue);
                formatValue = cssValue.getName(hashId);
              }
              styleStr += "".concat(styleName, ":").concat(formatValue, ";");
            };
            var _value;
            var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
            if (_typeof(value) === "object" && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
              actualValue.forEach(function(item) {
                appendStyle(key, item);
              });
            } else {
              appendStyle(key, actualValue);
            }
          }
        });
      }
    });
    if (!root) {
      styleStr = "{".concat(styleStr, "}");
    } else if (layer) {
      styleStr = "@layer ".concat(layer.name, " {").concat(styleStr, "}");
      if (layer.dependencies) {
        effectStyle["@layer ".concat(layer.name)] = layer.dependencies.map(function(deps) {
          return "@layer ".concat(deps, ", ").concat(layer.name, ";");
        }).join("\n");
      }
    }
    return [styleStr, effectStyle];
  };
  function uniqueHash(path2, styleStr) {
    return murmur2("".concat(path2.join("%")).concat(styleStr));
  }
  function Empty() {
    return null;
  }
  var STYLE_PREFIX = "style";
  function useStyleRegister(info, styleFn) {
    var token2 = info.token, path2 = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = _info$order === void 0 ? 0 : _info$order;
    var _React$useContext = React__namespace.useContext(StyleContext), autoClear = _React$useContext.autoClear;
    _React$useContext.mock;
    var defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache = _React$useContext.cache, enableLayer = _React$useContext.layer;
    var tokenKey = token2._tokenKey;
    var fullPath = [tokenKey];
    if (enableLayer) {
      fullPath.push("layer");
    }
    fullPath.push.apply(fullPath, _toConsumableArray(path2));
    var isMergedClientSide = isClientSide;
    var _useGlobalCache = useGlobalCache(
      STYLE_PREFIX,
      fullPath,
      // Create cache if needed
      function() {
        var cachePath = fullPath.join("|");
        if (existPath(cachePath)) {
          var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
          if (inlineCacheStyleStr) {
            return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
          }
        }
        var styleObj = styleFn();
        var _parseStyle5 = parseStyle(styleObj, {
          hashId,
          hashPriority,
          layer: enableLayer ? layer : void 0,
          path: path2.join("-"),
          transformers,
          linters
        }), _parseStyle6 = _slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
        var styleStr = normalizeStyle(parsedStyle);
        var styleId = uniqueHash(fullPath, styleStr);
        return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
      },
      // Remove cache if no need
      function(_ref2, fromHMR) {
        var _ref3 = _slicedToArray(_ref2, 3), styleId = _ref3[2];
        if ((fromHMR || autoClear) && isClientSide) {
          removeCSS(styleId, {
            mark: ATTR_MARK
          });
        }
      },
      // Effect: Inject style here
      function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 4), styleStr = _ref5[0];
        _ref5[1];
        var styleId = _ref5[2], effectStyle = _ref5[3];
        if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
          var mergedCSSConfig = {
            mark: ATTR_MARK,
            prepend: enableLayer ? false : "queue",
            attachTo: container,
            priority: order
          };
          var nonceStr = typeof nonce === "function" ? nonce() : nonce;
          if (nonceStr) {
            mergedCSSConfig.csp = {
              nonce: nonceStr
            };
          }
          var effectLayerKeys = [];
          var effectRestKeys = [];
          Object.keys(effectStyle).forEach(function(key) {
            if (key.startsWith("@layer")) {
              effectLayerKeys.push(key);
            } else {
              effectRestKeys.push(key);
            }
          });
          effectLayerKeys.forEach(function(effectKey) {
            updateCSS(normalizeStyle(effectStyle[effectKey]), "_layer-".concat(effectKey), _objectSpread2(_objectSpread2({}, mergedCSSConfig), {}, {
              prepend: true
            }));
          });
          var style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
          style2[CSS_IN_JS_INSTANCE] = cache.instanceId;
          style2.setAttribute(ATTR_TOKEN, tokenKey);
          effectRestKeys.forEach(function(effectKey) {
            updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
          });
        }
      }
    ), _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
    return function(node2) {
      var styleNode;
      if (!ssrInline || isMergedClientSide || !defaultCache) {
        styleNode = /* @__PURE__ */ React__namespace.createElement(Empty, null);
      } else {
        styleNode = /* @__PURE__ */ React__namespace.createElement("style", _extends({}, _defineProperty(_defineProperty({}, ATTR_TOKEN, cachedTokenKey), ATTR_MARK, cachedStyleId), {
          dangerouslySetInnerHTML: {
            __html: cachedStyleStr
          }
        }));
      }
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, styleNode, node2);
    };
  }
  var extract$1 = function extract22(cache, effectStyles, options) {
    var _cache = _slicedToArray(cache, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
    var _ref7 = options || {}, plain = _ref7.plain;
    if (clientOnly) {
      return null;
    }
    var keyStyleText = styleStr;
    var sharedAttrs = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(order)
    };
    keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
    if (effectStyle) {
      Object.keys(effectStyle).forEach(function(effectKey) {
        if (!effectStyles[effectKey]) {
          effectStyles[effectKey] = true;
          var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
          var effectStyleHTML = toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
          if (effectKey.startsWith("@layer")) {
            keyStyleText = effectStyleHTML + keyStyleText;
          } else {
            keyStyleText += effectStyleHTML;
          }
        }
      });
    }
    return [order, styleId, keyStyleText];
  };
  var CSS_VAR_PREFIX = "cssVar";
  var useCSSVarRegister = function useCSSVarRegister2(config, fn) {
    var key = config.key, prefix = config.prefix, unitless2 = config.unitless, ignore2 = config.ignore, token2 = config.token, _config$scope = config.scope, scope = _config$scope === void 0 ? "" : _config$scope;
    var _useContext = React.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var tokenKey = token2._tokenKey;
    var stylePath = [].concat(_toConsumableArray(config.path), [key, scope, tokenKey]);
    var cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
      var originToken = fn();
      var _transformToken = transformToken(originToken, key, {
        prefix,
        unitless: unitless2,
        ignore: ignore2,
        scope
      }), _transformToken2 = _slicedToArray(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
      var styleId = uniqueHash(stylePath, cssVarsStr);
      return [mergedToken, cssVarsStr, styleId, key];
    }, function(_ref) {
      var _ref2 = _slicedToArray(_ref, 3), styleId = _ref2[2];
      if (isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    }, function(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 3), cssVarsStr = _ref4[1], styleId = _ref4[2];
      if (!cssVarsStr) {
        return;
      }
      var style2 = updateCSS(cssVarsStr, styleId, {
        mark: ATTR_MARK,
        prepend: "queue",
        attachTo: container,
        priority: -999
      });
      style2[CSS_IN_JS_INSTANCE] = instanceId;
      style2.setAttribute(ATTR_TOKEN, key);
    });
    return cache;
  };
  var extract = function extract3(cache, effectStyles, options) {
    var _cache = _slicedToArray(cache, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
    var _ref5 = options || {}, plain = _ref5.plain;
    if (!styleStr) {
      return null;
    }
    var order = -999;
    var sharedAttrs = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(order)
    };
    var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [order, styleId, styleText];
  };
  _defineProperty(_defineProperty(_defineProperty({}, STYLE_PREFIX, extract$1), TOKEN_PREFIX, extract$2), CSS_VAR_PREFIX, extract);
  var Keyframe = /* @__PURE__ */ function() {
    function Keyframe2(name, style2) {
      _classCallCheck(this, Keyframe2);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "style", void 0);
      _defineProperty(this, "_keyframe", true);
      this.name = name;
      this.style = style2;
    }
    _createClass(Keyframe2, [{
      key: "getName",
      value: function getName() {
        var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
      }
    }]);
    return Keyframe2;
  }();
  function noSplit(list) {
    list.notSplit = true;
    return list;
  }
  ({
    // Inset
    inset: ["top", "right", "bottom", "left"],
    insetBlock: ["top", "bottom"],
    insetBlockStart: ["top"],
    insetBlockEnd: ["bottom"],
    insetInline: ["left", "right"],
    insetInlineStart: ["left"],
    insetInlineEnd: ["right"],
    // Margin
    marginBlock: ["marginTop", "marginBottom"],
    marginBlockStart: ["marginTop"],
    marginBlockEnd: ["marginBottom"],
    marginInline: ["marginLeft", "marginRight"],
    marginInlineStart: ["marginLeft"],
    marginInlineEnd: ["marginRight"],
    // Padding
    paddingBlock: ["paddingTop", "paddingBottom"],
    paddingBlockStart: ["paddingTop"],
    paddingBlockEnd: ["paddingBottom"],
    paddingInline: ["paddingLeft", "paddingRight"],
    paddingInlineStart: ["paddingLeft"],
    paddingInlineEnd: ["paddingRight"],
    // Border
    borderBlock: noSplit(["borderTop", "borderBottom"]),
    borderBlockStart: noSplit(["borderTop"]),
    borderBlockEnd: noSplit(["borderBottom"]),
    borderInline: noSplit(["borderLeft", "borderRight"]),
    borderInlineStart: noSplit(["borderLeft"]),
    borderInlineEnd: noSplit(["borderRight"]),
    // Border width
    borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
    borderBlockStartWidth: ["borderTopWidth"],
    borderBlockEndWidth: ["borderBottomWidth"],
    borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
    borderInlineStartWidth: ["borderLeftWidth"],
    borderInlineEndWidth: ["borderRightWidth"],
    // Border style
    borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
    borderBlockStartStyle: ["borderTopStyle"],
    borderBlockEndStyle: ["borderBottomStyle"],
    borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
    borderInlineStartStyle: ["borderLeftStyle"],
    borderInlineEndStyle: ["borderRightStyle"],
    // Border color
    borderBlockColor: ["borderTopColor", "borderBottomColor"],
    borderBlockStartColor: ["borderTopColor"],
    borderBlockEndColor: ["borderBottomColor"],
    borderInlineColor: ["borderLeftColor", "borderRightColor"],
    borderInlineStartColor: ["borderLeftColor"],
    borderInlineEndColor: ["borderRightColor"],
    // Border radius
    borderStartStartRadius: ["borderTopLeftRadius"],
    borderStartEndRadius: ["borderTopRightRadius"],
    borderEndStartRadius: ["borderBottomLeftRadius"],
    borderEndEndRadius: ["borderBottomRightRadius"]
  });
  var IconContext = /* @__PURE__ */ React.createContext({});
  function _toArray(r) {
    return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
  }
  function get(entity, path2) {
    var current = entity;
    for (var i = 0; i < path2.length; i += 1) {
      if (current === null || current === void 0) {
        return void 0;
      }
      current = current[path2[i]];
    }
    return current;
  }
  function internalSet(entity, paths, value, removeIfUndefined) {
    if (!paths.length) {
      return value;
    }
    var _paths = _toArray(paths), path2 = _paths[0], restPath = _paths.slice(1);
    var clone;
    if (!entity && typeof path2 === "number") {
      clone = [];
    } else if (Array.isArray(entity)) {
      clone = _toConsumableArray(entity);
    } else {
      clone = _objectSpread2({}, entity);
    }
    if (removeIfUndefined && value === void 0 && restPath.length === 1) {
      delete clone[path2][restPath[0]];
    } else {
      clone[path2] = internalSet(clone[path2], restPath, value, removeIfUndefined);
    }
    return clone;
  }
  function set(entity, paths, value) {
    var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
      return entity;
    }
    return internalSet(entity, paths, value, removeIfUndefined);
  }
  function isObject(obj) {
    return _typeof(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
  }
  function createEmpty(source) {
    return Array.isArray(source) ? [] : {};
  }
  var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
  function merge$1() {
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var clone = createEmpty(sources[0]);
    sources.forEach(function(src) {
      function internalMerge(path2, parentLoopSet) {
        var loopSet = new Set(parentLoopSet);
        var value = get(src, path2);
        var isArr = Array.isArray(value);
        if (isArr || isObject(value)) {
          if (!loopSet.has(value)) {
            loopSet.add(value);
            var originValue = get(clone, path2);
            if (isArr) {
              clone = set(clone, path2, []);
            } else if (!originValue || _typeof(originValue) !== "object") {
              clone = set(clone, path2, createEmpty(value));
            }
            keys(value).forEach(function(key) {
              internalMerge([].concat(_toConsumableArray(path2), [key]), loopSet);
            });
          }
        } else {
          clone = set(clone, path2, value);
        }
      }
      internalMerge([]);
    });
    return clone;
  }
  function noop$1() {
  }
  const WarningContext = /* @__PURE__ */ React__namespace.createContext({});
  const devUseWarning = () => {
    const noopWarning = () => {
    };
    noopWarning.deprecated = noop$1;
    return noopWarning;
  };
  const ValidateMessagesContext = /* @__PURE__ */ React.createContext(void 0);
  var locale$3 = {
    // Options
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    // Pagination
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
  };
  var commonLocale = {
    yearFormat: "YYYY",
    dayFormat: "D",
    cellMeridiemFormat: "A",
    monthBeforeYear: true
  };
  var locale$2 = _objectSpread2(_objectSpread2({}, commonLocale), {}, {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    dateFormat: "M/D/YYYY",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  });
  const locale$1 = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  };
  const locale = {
    lang: Object.assign({
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"]
    }, locale$2),
    timePickerLocale: Object.assign({}, locale$1)
  };
  const typeTemplate$1 = "${label} is not a valid ${type}";
  const localeValues = {
    locale: "en",
    Pagination: locale$3,
    DatePicker: locale,
    TimePicker: locale$1,
    Calendar: locale,
    global: {
      placeholder: "Please select"
    },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting"
    },
    Tour: {
      Next: "Next",
      Previous: "Previous",
      Finish: "Finish"
    },
    Modal: {
      okText: "OK",
      cancelText: "Cancel",
      justOkText: "OK"
    },
    Popconfirm: {
      okText: "OK",
      cancelText: "Cancel"
    },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      deselectAll: "Deselect all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page"
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file"
    },
    Empty: {
      description: "No data"
    },
    Icon: {
      icon: "icon"
    },
    Text: {
      edit: "Edit",
      copy: "Copy",
      copied: "Copied",
      expand: "Expand",
      collapse: "Collapse"
    },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date"
        },
        types: {
          string: typeTemplate$1,
          method: typeTemplate$1,
          array: typeTemplate$1,
          object: typeTemplate$1,
          number: typeTemplate$1,
          date: typeTemplate$1,
          boolean: typeTemplate$1,
          integer: typeTemplate$1,
          float: typeTemplate$1,
          regexp: typeTemplate$1,
          email: typeTemplate$1,
          url: typeTemplate$1,
          hex: typeTemplate$1
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters"
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}"
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}"
        },
        pattern: {
          mismatch: "${label} does not match the pattern ${pattern}"
        }
      }
    },
    Image: {
      preview: "Preview"
    },
    QRCode: {
      expired: "QR code expired",
      refresh: "Refresh",
      scanned: "Scanned"
    },
    ColorPicker: {
      presetEmpty: "Empty",
      transparent: "Transparent",
      singleColor: "Single",
      gradientColor: "Gradient"
    }
  };
  Object.assign({}, localeValues.Modal);
  let localeList = [];
  const generateLocale = () => localeList.reduce((merged, locale2) => Object.assign(Object.assign({}, merged), locale2), localeValues.Modal);
  function changeConfirmLocale(newLocale) {
    if (newLocale) {
      const cloneLocale = Object.assign({}, newLocale);
      localeList.push(cloneLocale);
      generateLocale();
      return () => {
        localeList = localeList.filter((locale2) => locale2 !== cloneLocale);
        generateLocale();
      };
    }
    Object.assign({}, localeValues.Modal);
  }
  const LocaleContext = /* @__PURE__ */ React.createContext(void 0);
  const ANT_MARK = "internalMark";
  const LocaleProvider = (props) => {
    const {
      locale: locale2 = {},
      children,
      _ANT_MARK__
    } = props;
    React__namespace.useEffect(() => {
      const clearLocale = changeConfirmLocale(locale2 === null || locale2 === void 0 ? void 0 : locale2.Modal);
      return clearLocale;
    }, [locale2]);
    const getMemoizedContextValue = React__namespace.useMemo(() => Object.assign(Object.assign({}, locale2), {
      exist: true
    }), [locale2]);
    return /* @__PURE__ */ React__namespace.createElement(LocaleContext.Provider, {
      value: getMemoizedContextValue
    }, children);
  };
  function bound01(n2, max) {
    if (isOnePointZero(n2)) {
      n2 = "100%";
    }
    var isPercent = isPercentage(n2);
    n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
    if (isPercent) {
      n2 = parseInt(String(n2 * max), 10) / 100;
    }
    if (Math.abs(n2 - max) < 1e-6) {
      return 1;
    }
    if (max === 360) {
      n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
    } else {
      n2 = n2 % max / parseFloat(String(max));
    }
    return n2;
  }
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }
  function isOnePointZero(n2) {
    return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
  }
  function isPercentage(n2) {
    return typeof n2 === "string" && n2.indexOf("%") !== -1;
  }
  function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }
    return a;
  }
  function convertToPercentage(n2) {
    if (n2 <= 1) {
      return "".concat(Number(n2) * 100, "%");
    }
    return n2;
  }
  function pad2(c2) {
    return c2.length === 1 ? "0" + c2 : String(c2);
  }
  function rgbToRgb(r, g2, b2) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g2, 255) * 255,
      b: bound01(b2, 255) * 255
    };
  }
  function rgbToHsl(r, g2, b2) {
    r = bound01(r, 255);
    g2 = bound01(g2, 255);
    b2 = bound01(b2, 255);
    var max = Math.max(r, g2, b2);
    var min = Math.min(r, g2, b2);
    var h2 = 0;
    var s = 0;
    var l2 = (max + min) / 2;
    if (max === min) {
      s = 0;
      h2 = 0;
    } else {
      var d2 = max - min;
      s = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
      switch (max) {
        case r:
          h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          h2 = (b2 - r) / d2 + 2;
          break;
        case b2:
          h2 = (r - g2) / d2 + 4;
          break;
      }
      h2 /= 6;
    }
    return { h: h2, s, l: l2 };
  }
  function hue2rgb(p2, q2, t2) {
    if (t2 < 0) {
      t2 += 1;
    }
    if (t2 > 1) {
      t2 -= 1;
    }
    if (t2 < 1 / 6) {
      return p2 + (q2 - p2) * (6 * t2);
    }
    if (t2 < 1 / 2) {
      return q2;
    }
    if (t2 < 2 / 3) {
      return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
    }
    return p2;
  }
  function hslToRgb(h2, s, l2) {
    var r;
    var g2;
    var b2;
    h2 = bound01(h2, 360);
    s = bound01(s, 100);
    l2 = bound01(l2, 100);
    if (s === 0) {
      g2 = l2;
      b2 = l2;
      r = l2;
    } else {
      var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
      var p2 = 2 * l2 - q2;
      r = hue2rgb(p2, q2, h2 + 1 / 3);
      g2 = hue2rgb(p2, q2, h2);
      b2 = hue2rgb(p2, q2, h2 - 1 / 3);
    }
    return { r: r * 255, g: g2 * 255, b: b2 * 255 };
  }
  function rgbToHsv(r, g2, b2) {
    r = bound01(r, 255);
    g2 = bound01(g2, 255);
    b2 = bound01(b2, 255);
    var max = Math.max(r, g2, b2);
    var min = Math.min(r, g2, b2);
    var h2 = 0;
    var v2 = max;
    var d2 = max - min;
    var s = max === 0 ? 0 : d2 / max;
    if (max === min) {
      h2 = 0;
    } else {
      switch (max) {
        case r:
          h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          h2 = (b2 - r) / d2 + 2;
          break;
        case b2:
          h2 = (r - g2) / d2 + 4;
          break;
      }
      h2 /= 6;
    }
    return { h: h2, s, v: v2 };
  }
  function hsvToRgb(h2, s, v2) {
    h2 = bound01(h2, 360) * 6;
    s = bound01(s, 100);
    v2 = bound01(v2, 100);
    var i = Math.floor(h2);
    var f2 = h2 - i;
    var p2 = v2 * (1 - s);
    var q2 = v2 * (1 - f2 * s);
    var t2 = v2 * (1 - (1 - f2) * s);
    var mod = i % 6;
    var r = [v2, q2, p2, p2, t2, v2][mod];
    var g2 = [t2, v2, v2, q2, p2, p2][mod];
    var b2 = [p2, p2, t2, v2, v2, q2][mod];
    return { r: r * 255, g: g2 * 255, b: b2 * 255 };
  }
  function rgbToHex(r, g2, b2, allow3Char) {
    var hex2 = [
      pad2(Math.round(r).toString(16)),
      pad2(Math.round(g2).toString(16)),
      pad2(Math.round(b2).toString(16))
    ];
    if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
      return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
    }
    return hex2.join("");
  }
  function rgbaToHex(r, g2, b2, a, allow4Char) {
    var hex2 = [
      pad2(Math.round(r).toString(16)),
      pad2(Math.round(g2).toString(16)),
      pad2(Math.round(b2).toString(16)),
      pad2(convertDecimalToHex(a))
    ];
    if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
      return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
    }
    return hex2.join("");
  }
  function convertDecimalToHex(d2) {
    return Math.round(parseFloat(d2) * 255).toString(16);
  }
  function convertHexToDecimal(h2) {
    return parseIntFromHex(h2) / 255;
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }
  function numberInputToObject(color) {
    return {
      r: color >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  }
  var names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v2 = null;
    var l2 = null;
    var ok = false;
    var format2 = false;
    if (typeof color === "string") {
      color = stringInputToObject(color);
    }
    if (typeof color === "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v2 = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v2);
        ok = true;
        format2 = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l2 = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l2);
        ok = true;
        format2 = "hsl";
      }
      if (Object.prototype.hasOwnProperty.call(color, "a")) {
        a = color.a;
      }
    }
    a = boundAlpha(a);
    return {
      ok,
      format: color.format || format2,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a
    };
  }
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
      return false;
    }
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color === "transparent") {
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }
    var match2 = matchers.rgb.exec(color);
    if (match2) {
      return { r: match2[1], g: match2[2], b: match2[3] };
    }
    match2 = matchers.rgba.exec(color);
    if (match2) {
      return { r: match2[1], g: match2[2], b: match2[3], a: match2[4] };
    }
    match2 = matchers.hsl.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], l: match2[3] };
    }
    match2 = matchers.hsla.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
    }
    match2 = matchers.hsv.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], v: match2[3] };
    }
    match2 = matchers.hsva.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], v: match2[3], a: match2[4] };
    }
    match2 = matchers.hex8.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1]),
        g: parseIntFromHex(match2[2]),
        b: parseIntFromHex(match2[3]),
        a: convertHexToDecimal(match2[4]),
        format: named ? "name" : "hex8"
      };
    }
    match2 = matchers.hex6.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1]),
        g: parseIntFromHex(match2[2]),
        b: parseIntFromHex(match2[3]),
        format: named ? "name" : "hex"
      };
    }
    match2 = matchers.hex4.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1] + match2[1]),
        g: parseIntFromHex(match2[2] + match2[2]),
        b: parseIntFromHex(match2[3] + match2[3]),
        a: convertHexToDecimal(match2[4] + match2[4]),
        format: named ? "name" : "hex8"
      };
    }
    match2 = matchers.hex3.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1] + match2[1]),
        g: parseIntFromHex(match2[2] + match2[2]),
        b: parseIntFromHex(match2[3] + match2[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
  }
  var TinyColor = (
    /** @class */
    function() {
      function TinyColor2(color, opts) {
        if (color === void 0) {
          color = "";
        }
        if (opts === void 0) {
          opts = {};
        }
        var _a;
        if (color instanceof TinyColor2) {
          return color;
        }
        if (typeof color === "number") {
          color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
          this.r = Math.round(this.r);
        }
        if (this.g < 1) {
          this.g = Math.round(this.g);
        }
        if (this.b < 1) {
          this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
      }
      TinyColor2.prototype.isDark = function() {
        return this.getBrightness() < 128;
      };
      TinyColor2.prototype.isLight = function() {
        return !this.isDark();
      };
      TinyColor2.prototype.getBrightness = function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      };
      TinyColor2.prototype.getLuminance = function() {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R = RsRGB / 12.92;
        } else {
          R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G = GsRGB / 12.92;
        } else {
          G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B = BsRGB / 12.92;
        } else {
          B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      };
      TinyColor2.prototype.getAlpha = function() {
        return this.a;
      };
      TinyColor2.prototype.setAlpha = function(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
      };
      TinyColor2.prototype.isMonochrome = function() {
        var s = this.toHsl().s;
        return s === 0;
      };
      TinyColor2.prototype.toHsv = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
      };
      TinyColor2.prototype.toHsvString = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h2 = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v2 = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHsl = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
      };
      TinyColor2.prototype.toHslString = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h2 = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l2 = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHex = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
      };
      TinyColor2.prototype.toHexString = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return "#" + this.toHex(allow3Char);
      };
      TinyColor2.prototype.toHex8 = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
      };
      TinyColor2.prototype.toHex8String = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return "#" + this.toHex8(allow4Char);
      };
      TinyColor2.prototype.toHexShortString = function(allowShortChar) {
        if (allowShortChar === void 0) {
          allowShortChar = false;
        }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
      };
      TinyColor2.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toRgbString = function() {
        var r = Math.round(this.r);
        var g2 = Math.round(this.g);
        var b2 = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toPercentageRgb = function() {
        var fmt = function(x) {
          return "".concat(Math.round(bound01(x, 255) * 100), "%");
        };
        return {
          r: fmt(this.r),
          g: fmt(this.g),
          b: fmt(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toPercentageRgbString = function() {
        var rnd = function(x) {
          return Math.round(bound01(x, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toName = function() {
        if (this.a === 0) {
          return "transparent";
        }
        if (this.a < 1) {
          return false;
        }
        var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          if (hex2 === value) {
            return key;
          }
        }
        return false;
      };
      TinyColor2.prototype.toString = function(format2) {
        var formatSet = Boolean(format2);
        format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
        if (needsAlphaFormat) {
          if (format2 === "name" && this.a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format2 === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format2 === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format2 === "hex" || format2 === "hex6") {
          formattedString = this.toHexString();
        }
        if (format2 === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format2 === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format2 === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format2 === "name") {
          formattedString = this.toName();
        }
        if (format2 === "hsl") {
          formattedString = this.toHslString();
        }
        if (format2 === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      };
      TinyColor2.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      };
      TinyColor2.prototype.clone = function() {
        return new TinyColor2(this.toString());
      };
      TinyColor2.prototype.lighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.brighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor2(rgb);
      };
      TinyColor2.prototype.darken = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.tint = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("white", amount);
      };
      TinyColor2.prototype.shade = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("black", amount);
      };
      TinyColor2.prototype.desaturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.saturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.greyscale = function() {
        return this.desaturate(100);
      };
      TinyColor2.prototype.spin = function(amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.mix = function(color, amount) {
        if (amount === void 0) {
          amount = 50;
        }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor2(color).toRgb();
        var p2 = amount / 100;
        var rgba = {
          r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
          g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
          b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
          a: (rgb2.a - rgb1.a) * p2 + rgb1.a
        };
        return new TinyColor2(rgba);
      };
      TinyColor2.prototype.analogous = function(results, slices) {
        if (results === void 0) {
          results = 6;
        }
        if (slices === void 0) {
          slices = 30;
        }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(new TinyColor2(hsl));
        }
        return ret;
      };
      TinyColor2.prototype.complement = function() {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.monochromatic = function(results) {
        if (results === void 0) {
          results = 6;
        }
        var hsv = this.toHsv();
        var h2 = hsv.h;
        var s = hsv.s;
        var v2 = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
          res.push(new TinyColor2({ h: h2, s, v: v2 }));
          v2 = (v2 + modification) % 1;
        }
        return res;
      };
      TinyColor2.prototype.splitcomplement = function() {
        var hsl = this.toHsl();
        var h2 = hsl.h;
        return [
          this,
          new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
          new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
        ];
      };
      TinyColor2.prototype.onBackground = function(background) {
        var fg = this.toRgb();
        var bg = new TinyColor2(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor2({
          r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
          g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
          b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
          a: alpha
        });
      };
      TinyColor2.prototype.triad = function() {
        return this.polyad(3);
      };
      TinyColor2.prototype.tetrad = function() {
        return this.polyad(4);
      };
      TinyColor2.prototype.polyad = function(n2) {
        var hsl = this.toHsl();
        var h2 = hsl.h;
        var result = [this];
        var increment = 360 / n2;
        for (var i = 1; i < n2; i++) {
          result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
      };
      TinyColor2.prototype.equals = function(color) {
        return this.toRgbString() === new TinyColor2(color).toRgbString();
      };
      return TinyColor2;
    }()
  );
  var hueStep = 2;
  var saturationStep = 0.16;
  var saturationStep2 = 0.05;
  var brightnessStep1 = 0.05;
  var brightnessStep2 = 0.15;
  var lightColorCount = 5;
  var darkColorCount = 4;
  var darkColorMap = [{
    index: 7,
    opacity: 0.15
  }, {
    index: 6,
    opacity: 0.25
  }, {
    index: 5,
    opacity: 0.3
  }, {
    index: 5,
    opacity: 0.45
  }, {
    index: 5,
    opacity: 0.65
  }, {
    index: 5,
    opacity: 0.85
  }, {
    index: 4,
    opacity: 0.9
  }, {
    index: 3,
    opacity: 0.95
  }, {
    index: 2,
    opacity: 0.97
  }, {
    index: 1,
    opacity: 0.98
  }];
  function toHsv(_ref) {
    var r = _ref.r, g2 = _ref.g, b2 = _ref.b;
    var hsv = rgbToHsv(r, g2, b2);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v
    };
  }
  function toHex(_ref2) {
    var r = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
    return "#".concat(rgbToHex(r, g2, b2, false));
  }
  function mix(rgb1, rgb2, amount) {
    var p2 = amount / 100;
    var rgb = {
      r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p2 + rgb1.b
    };
    return rgb;
  }
  function getHue(hsv, i, light) {
    var hue;
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
      hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    } else {
      hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return hue;
  }
  function getSaturation(hsv, i, light) {
    if (hsv.h === 0 && hsv.s === 0) {
      return hsv.s;
    }
    var saturation;
    if (light) {
      saturation = hsv.s - saturationStep * i;
    } else if (i === darkColorCount) {
      saturation = hsv.s + saturationStep;
    } else {
      saturation = hsv.s + saturationStep2 * i;
    }
    if (saturation > 1) {
      saturation = 1;
    }
    if (light && i === lightColorCount && saturation > 0.1) {
      saturation = 0.1;
    }
    if (saturation < 0.06) {
      saturation = 0.06;
    }
    return Number(saturation.toFixed(2));
  }
  function getValue$1(hsv, i, light) {
    var value;
    if (light) {
      value = hsv.v + brightnessStep1 * i;
    } else {
      value = hsv.v - brightnessStep2 * i;
    }
    if (value > 1) {
      value = 1;
    }
    return Number(value.toFixed(2));
  }
  function generate$1(color) {
    var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var patterns = [];
    var pColor = inputToRGB(color);
    for (var i = lightColorCount; i > 0; i -= 1) {
      var hsv = toHsv(pColor);
      var colorString = toHex(inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue$1(hsv, i, true)
      }));
      patterns.push(colorString);
    }
    patterns.push(toHex(pColor));
    for (var _i = 1; _i <= darkColorCount; _i += 1) {
      var _hsv = toHsv(pColor);
      var _colorString = toHex(inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue$1(_hsv, _i)
      }));
      patterns.push(_colorString);
    }
    if (opts.theme === "dark") {
      return darkColorMap.map(function(_ref3) {
        var index2 = _ref3.index, opacity = _ref3.opacity;
        var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
        return darkColorString;
      });
    }
    return patterns;
  }
  var presetPrimaryColors = {
    "red": "#F5222D",
    "volcano": "#FA541C",
    "orange": "#FA8C16",
    "gold": "#FAAD14",
    "yellow": "#FADB14",
    "lime": "#A0D911",
    "green": "#52C41A",
    "cyan": "#13C2C2",
    "blue": "#1677FF",
    "geekblue": "#2F54EB",
    "purple": "#722ED1",
    "magenta": "#EB2F96",
    "grey": "#666666"
  };
  var red = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
  red.primary = red[5];
  var volcano = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
  volcano.primary = volcano[5];
  var orange = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
  orange.primary = orange[5];
  var gold = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
  gold.primary = gold[5];
  var yellow = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
  yellow.primary = yellow[5];
  var lime = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
  lime.primary = lime[5];
  var green = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
  green.primary = green[5];
  var cyan = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
  cyan.primary = cyan[5];
  var blue = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
  blue.primary = blue[5];
  var geekblue = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
  geekblue.primary = geekblue[5];
  var purple = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
  purple.primary = purple[5];
  var magenta = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
  magenta.primary = magenta[5];
  var grey = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
  grey.primary = grey[5];
  var presetPalettes = {
    red,
    volcano,
    orange,
    gold,
    yellow,
    lime,
    green,
    cyan,
    blue,
    geekblue,
    purple,
    magenta,
    grey
  };
  const defaultPresetColors = {
    blue: "#1677FF",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    /**
     * @deprecated Use magenta instead
     */
    pink: "#EB2F96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
  };
  const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
    // Color
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: "solid",
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Motion
    motion: true
  });
  function genColorMapToken(seed, _ref) {
    let {
      generateColorPalettes: generateColorPalettes2,
      generateNeutralColorPalettes: generateNeutralColorPalettes2
    } = _ref;
    const {
      colorSuccess: colorSuccessBase,
      colorWarning: colorWarningBase,
      colorError: colorErrorBase,
      colorInfo: colorInfoBase,
      colorPrimary: colorPrimaryBase,
      colorBgBase,
      colorTextBase
    } = seed;
    const primaryColors = generateColorPalettes2(colorPrimaryBase);
    const successColors = generateColorPalettes2(colorSuccessBase);
    const warningColors = generateColorPalettes2(colorWarningBase);
    const errorColors = generateColorPalettes2(colorErrorBase);
    const infoColors = generateColorPalettes2(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes2(colorLink);
    const colorErrorBgFilledHover = new TinyColor(errorColors[1]).mix(new TinyColor(errorColors[3]), 50).toHexString();
    return Object.assign(Object.assign({}, neutralColors), {
      colorPrimaryBg: primaryColors[1],
      colorPrimaryBgHover: primaryColors[2],
      colorPrimaryBorder: primaryColors[3],
      colorPrimaryBorderHover: primaryColors[4],
      colorPrimaryHover: primaryColors[5],
      colorPrimary: primaryColors[6],
      colorPrimaryActive: primaryColors[7],
      colorPrimaryTextHover: primaryColors[8],
      colorPrimaryText: primaryColors[9],
      colorPrimaryTextActive: primaryColors[10],
      colorSuccessBg: successColors[1],
      colorSuccessBgHover: successColors[2],
      colorSuccessBorder: successColors[3],
      colorSuccessBorderHover: successColors[4],
      colorSuccessHover: successColors[4],
      colorSuccess: successColors[6],
      colorSuccessActive: successColors[7],
      colorSuccessTextHover: successColors[8],
      colorSuccessText: successColors[9],
      colorSuccessTextActive: successColors[10],
      colorErrorBg: errorColors[1],
      colorErrorBgHover: errorColors[2],
      colorErrorBgFilledHover,
      colorErrorBgActive: errorColors[3],
      colorErrorBorder: errorColors[3],
      colorErrorBorderHover: errorColors[4],
      colorErrorHover: errorColors[5],
      colorError: errorColors[6],
      colorErrorActive: errorColors[7],
      colorErrorTextHover: errorColors[8],
      colorErrorText: errorColors[9],
      colorErrorTextActive: errorColors[10],
      colorWarningBg: warningColors[1],
      colorWarningBgHover: warningColors[2],
      colorWarningBorder: warningColors[3],
      colorWarningBorderHover: warningColors[4],
      colorWarningHover: warningColors[4],
      colorWarning: warningColors[6],
      colorWarningActive: warningColors[7],
      colorWarningTextHover: warningColors[8],
      colorWarningText: warningColors[9],
      colorWarningTextActive: warningColors[10],
      colorInfoBg: infoColors[1],
      colorInfoBgHover: infoColors[2],
      colorInfoBorder: infoColors[3],
      colorInfoBorderHover: infoColors[4],
      colorInfoHover: infoColors[4],
      colorInfo: infoColors[6],
      colorInfoActive: infoColors[7],
      colorInfoTextHover: infoColors[8],
      colorInfoText: infoColors[9],
      colorInfoTextActive: infoColors[10],
      colorLinkHover: linkColors[4],
      colorLink: linkColors[6],
      colorLinkActive: linkColors[7],
      colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
      colorWhite: "#fff"
    });
  }
  const genRadius = (radiusBase) => {
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    if (radiusBase < 6 && radiusBase >= 5) {
      radiusLG = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
      radiusLG = radiusBase + 2;
    } else if (radiusBase >= 16) {
      radiusLG = 16;
    }
    if (radiusBase < 7 && radiusBase >= 5) {
      radiusSM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
      radiusSM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
      radiusSM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
      radiusSM = 7;
    } else if (radiusBase >= 16) {
      radiusSM = 8;
    }
    if (radiusBase < 6 && radiusBase >= 2) {
      radiusXS = 1;
    } else if (radiusBase >= 6) {
      radiusXS = 2;
    }
    if (radiusBase > 4 && radiusBase < 8) {
      radiusOuter = 4;
    } else if (radiusBase >= 8) {
      radiusOuter = 6;
    }
    return {
      borderRadius: radiusBase,
      borderRadiusXS: radiusXS,
      borderRadiusSM: radiusSM,
      borderRadiusLG: radiusLG,
      borderRadiusOuter: radiusOuter
    };
  };
  function genCommonMapToken(token2) {
    const {
      motionUnit,
      motionBase,
      borderRadius,
      lineWidth
    } = token2;
    return Object.assign({
      // motion
      motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
      motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
      motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
      // line
      lineWidthBold: lineWidth + 1
    }, genRadius(borderRadius));
  }
  const genControlHeight = (token2) => {
    const {
      controlHeight
    } = token2;
    return {
      controlHeightSM: controlHeight * 0.75,
      controlHeightXS: controlHeight * 0.5,
      controlHeightLG: controlHeight * 1.25
    };
  };
  function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
  }
  function getFontSizes(base) {
    const fontSizes = new Array(10).fill(null).map((_, index2) => {
      const i = index2 - 1;
      const baseSize = base * Math.pow(Math.E, i / 5);
      const intSize = index2 > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
      return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size) => ({
      size,
      lineHeight: getLineHeight(size)
    }));
  }
  const genFontMapToken = (fontSize) => {
    const fontSizePairs = getFontSizes(fontSize);
    const fontSizes = fontSizePairs.map((pair) => pair.size);
    const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
      fontSizeSM,
      fontSize: fontSizeMD,
      fontSizeLG,
      fontSizeXL: fontSizes[3],
      fontSizeHeading1: fontSizes[6],
      fontSizeHeading2: fontSizes[5],
      fontSizeHeading3: fontSizes[4],
      fontSizeHeading4: fontSizes[3],
      fontSizeHeading5: fontSizes[2],
      lineHeight,
      lineHeightLG,
      lineHeightSM,
      fontHeight: Math.round(lineHeight * fontSizeMD),
      fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
      fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
      lineHeightHeading1: lineHeights[6],
      lineHeightHeading2: lineHeights[5],
      lineHeightHeading3: lineHeights[4],
      lineHeightHeading4: lineHeights[3],
      lineHeightHeading5: lineHeights[2]
    };
  };
  function genSizeMapToken(token2) {
    const {
      sizeUnit,
      sizeStep
    } = token2;
    return {
      sizeXXL: sizeUnit * (sizeStep + 8),
      // 48
      sizeXL: sizeUnit * (sizeStep + 4),
      // 32
      sizeLG: sizeUnit * (sizeStep + 2),
      // 24
      sizeMD: sizeUnit * (sizeStep + 1),
      // 20
      sizeMS: sizeUnit * sizeStep,
      // 16
      size: sizeUnit * sizeStep,
      // 16
      sizeSM: sizeUnit * (sizeStep - 1),
      // 12
      sizeXS: sizeUnit * (sizeStep - 2),
      // 8
      sizeXXS: sizeUnit * (sizeStep - 3)
      // 4
    };
  }
  const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
  const getSolidColor = (baseColor, brightness) => {
    const instance = new TinyColor(baseColor);
    return instance.darken(brightness).toHexString();
  };
  const generateColorPalettes = (baseColor) => {
    const colors = generate$1(baseColor);
    return {
      1: colors[0],
      2: colors[1],
      3: colors[2],
      4: colors[3],
      5: colors[4],
      6: colors[5],
      7: colors[6],
      8: colors[4],
      9: colors[5],
      10: colors[6]
      // 8: colors[7],
      // 9: colors[8],
      // 10: colors[9],
    };
  };
  const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
    const colorBgBase = bgBaseColor || "#fff";
    const colorTextBase = textBaseColor || "#000";
    return {
      colorBgBase,
      colorTextBase,
      colorText: getAlphaColor$1(colorTextBase, 0.88),
      colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
      colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
      colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
      colorFill: getAlphaColor$1(colorTextBase, 0.15),
      colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
      colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
      colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
      colorBgSolid: getAlphaColor$1(colorTextBase, 1),
      colorBgSolidHover: getAlphaColor$1(colorTextBase, 0.75),
      colorBgSolidActive: getAlphaColor$1(colorTextBase, 0.95),
      colorBgLayout: getSolidColor(colorBgBase, 4),
      colorBgContainer: getSolidColor(colorBgBase, 0),
      colorBgElevated: getSolidColor(colorBgBase, 0),
      colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
      colorBgBlur: "transparent",
      colorBorder: getSolidColor(colorBgBase, 15),
      colorBorderSecondary: getSolidColor(colorBgBase, 6)
    };
  };
  function derivative(token2) {
    presetPrimaryColors.pink = presetPrimaryColors.magenta;
    presetPalettes.pink = presetPalettes.magenta;
    const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
      const colors = token2[colorKey] === presetPrimaryColors[colorKey] ? presetPalettes[colorKey] : generate$1(token2[colorKey]);
      return new Array(10).fill(1).reduce((prev2, _, i) => {
        prev2[`${colorKey}-${i + 1}`] = colors[i];
        prev2[`${colorKey}${i + 1}`] = colors[i];
        return prev2;
      }, {});
    }).reduce((prev2, cur) => {
      prev2 = Object.assign(Object.assign({}, prev2), cur);
      return prev2;
    }, {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token2), colorPalettes), genColorMapToken(token2, {
      generateColorPalettes,
      generateNeutralColorPalettes
    })), genFontMapToken(token2.fontSize)), genSizeMapToken(token2)), genControlHeight(token2)), genCommonMapToken(token2));
  }
  const defaultTheme = createTheme(derivative);
  const defaultConfig = {
    token: seedToken,
    override: {
      override: seedToken
    },
    hashed: true
  };
  const DesignTokenContext = /* @__PURE__ */ React.createContext(defaultConfig);
  const defaultPrefixCls = "ant";
  const defaultIconPrefixCls = "anticon";
  const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
  };
  const ConfigContext = /* @__PURE__ */ React__namespace.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
  });
  const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
  function getStyle$1(globalPrefixCls2, theme) {
    const variables = {};
    const formatColor = (color, updater) => {
      let clone = color.clone();
      clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
      return clone.toRgbString();
    };
    const fillColor = (colorVal, type4) => {
      const baseColor = new TinyColor(colorVal);
      const colorPalettes = generate$1(baseColor.toRgbString());
      variables[`${type4}-color`] = formatColor(baseColor);
      variables[`${type4}-color-disabled`] = colorPalettes[1];
      variables[`${type4}-color-hover`] = colorPalettes[4];
      variables[`${type4}-color-active`] = colorPalettes[6];
      variables[`${type4}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
      variables[`${type4}-color-deprecated-bg`] = colorPalettes[0];
      variables[`${type4}-color-deprecated-border`] = colorPalettes[2];
    };
    if (theme.primaryColor) {
      fillColor(theme.primaryColor, "primary");
      const primaryColor = new TinyColor(theme.primaryColor);
      const primaryColors = generate$1(primaryColor.toRgbString());
      primaryColors.forEach((color, index2) => {
        variables[`primary-${index2 + 1}`] = color;
      });
      variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c2) => c2.lighten(35));
      variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c2) => c2.lighten(20));
      variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c2) => c2.tint(20));
      variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c2) => c2.tint(50));
      variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.12));
      const primaryActiveColor = new TinyColor(primaryColors[0]);
      variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.3));
      variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c2) => c2.darken(2));
    }
    if (theme.successColor) {
      fillColor(theme.successColor, "success");
    }
    if (theme.warningColor) {
      fillColor(theme.warningColor, "warning");
    }
    if (theme.errorColor) {
      fillColor(theme.errorColor, "error");
    }
    if (theme.infoColor) {
      fillColor(theme.infoColor, "info");
    }
    const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`);
    return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
  }
  function registerTheme(globalPrefixCls2, theme) {
    const style2 = getStyle$1(globalPrefixCls2, theme);
    if (canUseDom()) {
      updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
    }
  }
  const DisabledContext = /* @__PURE__ */ React__namespace.createContext(false);
  const DisabledContextProvider = (_ref) => {
    let {
      children,
      disabled
    } = _ref;
    const originDisabled = React__namespace.useContext(DisabledContext);
    return /* @__PURE__ */ React__namespace.createElement(DisabledContext.Provider, {
      value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
    }, children);
  };
  const SizeContext = /* @__PURE__ */ React__namespace.createContext(void 0);
  const SizeContextProvider = (_ref) => {
    let {
      children,
      size
    } = _ref;
    const originSize = React__namespace.useContext(SizeContext);
    return /* @__PURE__ */ React__namespace.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  };
  function useConfig() {
    const componentDisabled = React.useContext(DisabledContext);
    const componentSize = React.useContext(SizeContext);
    return {
      componentDisabled,
      componentSize
    };
  }
  var AbstractCalculator = /* @__PURE__ */ _createClass(function AbstractCalculator2() {
    _classCallCheck(this, AbstractCalculator2);
  });
  var CALC_UNIT = "CALC_UNIT";
  var regexp$1 = new RegExp(CALC_UNIT, "g");
  function unit(value) {
    if (typeof value === "number") {
      return "".concat(value).concat(CALC_UNIT);
    }
    return value;
  }
  var CSSCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
    _inherits(CSSCalculator2, _AbstractCalculator);
    var _super = _createSuper(CSSCalculator2);
    function CSSCalculator2(num, unitlessCssVar) {
      var _this;
      _classCallCheck(this, CSSCalculator2);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "result", "");
      _defineProperty(_assertThisInitialized(_this), "unitlessCssVar", void 0);
      _defineProperty(_assertThisInitialized(_this), "lowPriority", void 0);
      var numType = _typeof(num);
      _this.unitlessCssVar = unitlessCssVar;
      if (num instanceof CSSCalculator2) {
        _this.result = "(".concat(num.result, ")");
      } else if (numType === "number") {
        _this.result = unit(num);
      } else if (numType === "string") {
        _this.result = num;
      }
      return _this;
    }
    _createClass(CSSCalculator2, [{
      key: "add",
      value: function add(num) {
        if (num instanceof CSSCalculator2) {
          this.result = "".concat(this.result, " + ").concat(num.getResult());
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = "".concat(this.result, " + ").concat(unit(num));
        }
        this.lowPriority = true;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(num) {
        if (num instanceof CSSCalculator2) {
          this.result = "".concat(this.result, " - ").concat(num.getResult());
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = "".concat(this.result, " - ").concat(unit(num));
        }
        this.lowPriority = true;
        return this;
      }
    }, {
      key: "mul",
      value: function mul(num) {
        if (this.lowPriority) {
          this.result = "(".concat(this.result, ")");
        }
        if (num instanceof CSSCalculator2) {
          this.result = "".concat(this.result, " * ").concat(num.getResult(true));
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = "".concat(this.result, " * ").concat(num);
        }
        this.lowPriority = false;
        return this;
      }
    }, {
      key: "div",
      value: function div(num) {
        if (this.lowPriority) {
          this.result = "(".concat(this.result, ")");
        }
        if (num instanceof CSSCalculator2) {
          this.result = "".concat(this.result, " / ").concat(num.getResult(true));
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = "".concat(this.result, " / ").concat(num);
        }
        this.lowPriority = false;
        return this;
      }
    }, {
      key: "getResult",
      value: function getResult(force) {
        return this.lowPriority || force ? "(".concat(this.result, ")") : this.result;
      }
    }, {
      key: "equal",
      value: function equal(options) {
        var _this2 = this;
        var _ref = options || {}, cssUnit = _ref.unit;
        var mergedUnit = true;
        if (typeof cssUnit === "boolean") {
          mergedUnit = cssUnit;
        } else if (Array.from(this.unitlessCssVar).some(function(cssVar) {
          return _this2.result.includes(cssVar);
        })) {
          mergedUnit = false;
        }
        this.result = this.result.replace(regexp$1, mergedUnit ? "px" : "");
        if (typeof this.lowPriority !== "undefined") {
          return "calc(".concat(this.result, ")");
        }
        return this.result;
      }
    }]);
    return CSSCalculator2;
  }(AbstractCalculator);
  var NumCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
    _inherits(NumCalculator2, _AbstractCalculator);
    var _super = _createSuper(NumCalculator2);
    function NumCalculator2(num) {
      var _this;
      _classCallCheck(this, NumCalculator2);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "result", 0);
      if (num instanceof NumCalculator2) {
        _this.result = num.result;
      } else if (typeof num === "number") {
        _this.result = num;
      }
      return _this;
    }
    _createClass(NumCalculator2, [{
      key: "add",
      value: function add(num) {
        if (num instanceof NumCalculator2) {
          this.result += num.result;
        } else if (typeof num === "number") {
          this.result += num;
        }
        return this;
      }
    }, {
      key: "sub",
      value: function sub(num) {
        if (num instanceof NumCalculator2) {
          this.result -= num.result;
        } else if (typeof num === "number") {
          this.result -= num;
        }
        return this;
      }
    }, {
      key: "mul",
      value: function mul(num) {
        if (num instanceof NumCalculator2) {
          this.result *= num.result;
        } else if (typeof num === "number") {
          this.result *= num;
        }
        return this;
      }
    }, {
      key: "div",
      value: function div(num) {
        if (num instanceof NumCalculator2) {
          this.result /= num.result;
        } else if (typeof num === "number") {
          this.result /= num;
        }
        return this;
      }
    }, {
      key: "equal",
      value: function equal() {
        return this.result;
      }
    }]);
    return NumCalculator2;
  }(AbstractCalculator);
  var genCalc = function genCalc2(type4, unitlessCssVar) {
    var Calculator = type4 === "css" ? CSSCalculator : NumCalculator;
    return function(num) {
      return new Calculator(num, unitlessCssVar);
    };
  };
  var getCompVarPrefix = function getCompVarPrefix2(component, prefix) {
    return "".concat([prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
  };
  function useEvent(callback) {
    var fnRef = React__namespace.useRef();
    fnRef.current = callback;
    var memoFn = React__namespace.useCallback(function() {
      var _fnRef$current;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
    }, []);
    return memoFn;
  }
  function useSafeState(defaultValue) {
    var destroyRef = React__namespace.useRef(false);
    var _React$useState = React__namespace.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    React__namespace.useEffect(function() {
      destroyRef.current = false;
      return function() {
        destroyRef.current = true;
      };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
      if (ignoreDestroy && destroyRef.current) {
        return;
      }
      setValue(updater);
    }
    return [value, safeSetState];
  }
  function hasValue(value) {
    return value !== void 0;
  }
  function useMergedState(defaultStateValue, option) {
    var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
    var _useState = useSafeState(function() {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
      }
    }), _useState2 = _slicedToArray(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
    var mergedValue = value !== void 0 ? value : innerValue;
    var postMergedValue = postState ? postState(mergedValue) : mergedValue;
    var onChangeFn = useEvent(onChange);
    var _useState3 = useSafeState([mergedValue]), _useState4 = _slicedToArray(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
    useLayoutUpdateEffect(function() {
      var prev2 = prevValue[0];
      if (innerValue !== prev2) {
        onChangeFn(innerValue, prev2);
      }
    }, [prevValue]);
    useLayoutUpdateEffect(function() {
      if (!hasValue(value)) {
        setInnerValue(value);
      }
    }, [value]);
    var triggerChange = useEvent(function(updater, ignoreDestroy) {
      setInnerValue(updater, ignoreDestroy);
      setPrevValue([mergedValue], ignoreDestroy);
    });
    return [postMergedValue, triggerChange];
  }
  function getComponentToken(component, token2, defaultToken, options) {
    var customToken = _objectSpread2({}, token2[component]);
    if (options !== null && options !== void 0 && options.deprecatedTokens) {
      var deprecatedTokens = options.deprecatedTokens;
      deprecatedTokens.forEach(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), oldTokenKey = _ref2[0], newTokenKey = _ref2[1];
        if (customToken !== null && customToken !== void 0 && customToken[oldTokenKey] || customToken !== null && customToken !== void 0 && customToken[newTokenKey]) {
          var _customToken$newToken;
          (_customToken$newToken = customToken[newTokenKey]) !== null && _customToken$newToken !== void 0 ? _customToken$newToken : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
        }
      });
    }
    var mergedToken = _objectSpread2(_objectSpread2({}, defaultToken), customToken);
    Object.keys(mergedToken).forEach(function(key) {
      if (mergedToken[key] === token2[key]) {
        delete mergedToken[key];
      }
    });
    return mergedToken;
  }
  var enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
  var recording = true;
  function merge() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }
    if (!enableStatistic) {
      return Object.assign.apply(Object, [{}].concat(objs));
    }
    recording = false;
    var ret = {};
    objs.forEach(function(obj) {
      if (_typeof(obj) !== "object") {
        return;
      }
      var keys2 = Object.keys(obj);
      keys2.forEach(function(key) {
        Object.defineProperty(ret, key, {
          configurable: true,
          enumerable: true,
          get: function get2() {
            return obj[key];
          }
        });
      });
    });
    recording = true;
    return ret;
  }
  var statistic = {};
  function noop() {
  }
  var statisticToken = function statisticToken2(token2) {
    var tokenKeys2;
    var proxy = token2;
    var flush = noop;
    if (enableStatistic && typeof Proxy !== "undefined") {
      tokenKeys2 = /* @__PURE__ */ new Set();
      proxy = new Proxy(token2, {
        get: function get2(obj, prop) {
          if (recording) {
            var _tokenKeys;
            (_tokenKeys = tokenKeys2) === null || _tokenKeys === void 0 || _tokenKeys.add(prop);
          }
          return obj[prop];
        }
      });
      flush = function flush2(componentName, componentToken) {
        var _statistic$componentN;
        statistic[componentName] = {
          global: Array.from(tokenKeys2),
          component: _objectSpread2(_objectSpread2({}, (_statistic$componentN = statistic[componentName]) === null || _statistic$componentN === void 0 ? void 0 : _statistic$componentN.component), componentToken)
        };
      };
    }
    return {
      token: proxy,
      keys: tokenKeys2,
      flush
    };
  };
  function getDefaultComponentToken(component, token2, getDefaultToken) {
    if (typeof getDefaultToken === "function") {
      var _token$component;
      return getDefaultToken(merge(token2, (_token$component = token2[component]) !== null && _token$component !== void 0 ? _token$component : {}));
    }
    return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
  }
  function genMaxMin(type4) {
    if (type4 === "js") {
      return {
        max: Math.max,
        min: Math.min
      };
    }
    return {
      max: function max() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return "max(".concat(args.map(function(value) {
          return unit$1(value);
        }).join(","), ")");
      },
      min: function min() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return "min(".concat(args.map(function(value) {
          return unit$1(value);
        }).join(","), ")");
      }
    };
  }
  var BEAT_LIMIT = 1e3 * 60 * 10;
  var ArrayKeyMap = /* @__PURE__ */ function() {
    function ArrayKeyMap2() {
      _classCallCheck(this, ArrayKeyMap2);
      _defineProperty(this, "map", /* @__PURE__ */ new Map());
      _defineProperty(this, "objectIDMap", /* @__PURE__ */ new WeakMap());
      _defineProperty(this, "nextID", 0);
      _defineProperty(this, "lastAccessBeat", /* @__PURE__ */ new Map());
      _defineProperty(this, "accessBeat", 0);
    }
    _createClass(ArrayKeyMap2, [{
      key: "set",
      value: function set2(keys2, value) {
        this.clear();
        var compositeKey = this.getCompositeKey(keys2);
        this.map.set(compositeKey, value);
        this.lastAccessBeat.set(compositeKey, Date.now());
      }
    }, {
      key: "get",
      value: function get2(keys2) {
        var compositeKey = this.getCompositeKey(keys2);
        var cache = this.map.get(compositeKey);
        this.lastAccessBeat.set(compositeKey, Date.now());
        this.accessBeat += 1;
        return cache;
      }
    }, {
      key: "getCompositeKey",
      value: function getCompositeKey(keys2) {
        var _this = this;
        var ids = keys2.map(function(key) {
          if (key && _typeof(key) === "object") {
            return "obj_".concat(_this.getObjectID(key));
          }
          return "".concat(_typeof(key), "_").concat(key);
        });
        return ids.join("|");
      }
    }, {
      key: "getObjectID",
      value: function getObjectID(obj) {
        if (this.objectIDMap.has(obj)) {
          return this.objectIDMap.get(obj);
        }
        var id = this.nextID;
        this.objectIDMap.set(obj, id);
        this.nextID += 1;
        return id;
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this2 = this;
        if (this.accessBeat > 1e4) {
          var now = Date.now();
          this.lastAccessBeat.forEach(function(beat, key) {
            if (now - beat > BEAT_LIMIT) {
              _this2.map.delete(key);
              _this2.lastAccessBeat.delete(key);
            }
          });
          this.accessBeat = 0;
        }
      }
    }]);
    return ArrayKeyMap2;
  }();
  var uniqueMap = new ArrayKeyMap();
  function useUniqueMemo(memoFn, deps) {
    return React.useMemo(function() {
      var cachedValue = uniqueMap.get(deps);
      if (cachedValue) {
        return cachedValue;
      }
      var newValue = memoFn();
      uniqueMap.set(deps, newValue);
      return newValue;
    }, deps);
  }
  var useDefaultCSP = function useDefaultCSP2() {
    return {};
  };
  function genStyleUtils(config) {
    var _config$useCSP = config.useCSP, useCSP = _config$useCSP === void 0 ? useDefaultCSP : _config$useCSP, useToken2 = config.useToken, usePrefix = config.usePrefix, getResetStyles = config.getResetStyles, getCommonStyle = config.getCommonStyle, getCompUnitless = config.getCompUnitless;
    function genStyleHooks2(component, styleFn, getDefaultToken, options) {
      var componentName = Array.isArray(component) ? component[0] : component;
      function prefixToken(key) {
        return "".concat(String(componentName)).concat(key.slice(0, 1).toUpperCase()).concat(key.slice(1));
      }
      var originUnitless = (options === null || options === void 0 ? void 0 : options.unitless) || {};
      var originCompUnitless = typeof getCompUnitless === "function" ? getCompUnitless(component) : {};
      var compUnitless = _objectSpread2(_objectSpread2({}, originCompUnitless), {}, _defineProperty({}, prefixToken("zIndexPopup"), true));
      Object.keys(originUnitless).forEach(function(key) {
        compUnitless[prefixToken(key)] = originUnitless[key];
      });
      var mergedOptions = _objectSpread2(_objectSpread2({}, options), {}, {
        unitless: compUnitless,
        prefixToken
      });
      var useStyle2 = genComponentStyleHook2(component, styleFn, getDefaultToken, mergedOptions);
      var useCSSVar = genCSSVarRegister(componentName, getDefaultToken, mergedOptions);
      return function(prefixCls) {
        var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
        var _useStyle = useStyle2(prefixCls, rootCls), _useStyle2 = _slicedToArray(_useStyle, 2), hashId = _useStyle2[1];
        var _useCSSVar = useCSSVar(rootCls), _useCSSVar2 = _slicedToArray(_useCSSVar, 2), wrapCSSVar = _useCSSVar2[0], cssVarCls = _useCSSVar2[1];
        return [wrapCSSVar, hashId, cssVarCls];
      };
    }
    function genCSSVarRegister(component, getDefaultToken, options) {
      var compUnitless = options.unitless, _options$injectStyle = options.injectStyle, injectStyle = _options$injectStyle === void 0 ? true : _options$injectStyle, prefixToken = options.prefixToken, ignore2 = options.ignore;
      var CSSVarRegister = function CSSVarRegister2(_ref) {
        var rootCls = _ref.rootCls, _ref$cssVar = _ref.cssVar, cssVar = _ref$cssVar === void 0 ? {} : _ref$cssVar;
        var _useToken = useToken2(), realToken = _useToken.realToken;
        useCSSVarRegister({
          path: [component],
          prefix: cssVar.prefix,
          key: cssVar.key,
          unitless: compUnitless,
          ignore: ignore2,
          token: realToken,
          scope: rootCls
        }, function() {
          var defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
          var componentToken = getComponentToken(component, realToken, defaultToken, {
            deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
          });
          Object.keys(defaultToken).forEach(function(key) {
            componentToken[prefixToken(key)] = componentToken[key];
            delete componentToken[key];
          });
          return componentToken;
        });
        return null;
      };
      var useCSSVar = function useCSSVar2(rootCls) {
        var _useToken2 = useToken2(), cssVar = _useToken2.cssVar;
        return [function(node2) {
          return injectStyle && cssVar ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CSSVarRegister, {
            rootCls,
            cssVar,
            component
          }), node2) : node2;
        }, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
      };
      return useCSSVar;
    }
    function genComponentStyleHook2(componentName, styleFn, getDefaultToken) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      var cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
      var _cells = _slicedToArray(cells, 1), component = _cells[0];
      var concatComponent = cells.join("-");
      var mergedLayer = config.layer || {
        name: "antd"
      };
      return function(prefixCls) {
        var rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
        var _useToken3 = useToken2(), theme = _useToken3.theme, realToken = _useToken3.realToken, hashId = _useToken3.hashId, token2 = _useToken3.token, cssVar = _useToken3.cssVar;
        var _usePrefix = usePrefix(), rootPrefixCls = _usePrefix.rootPrefixCls, iconPrefixCls = _usePrefix.iconPrefixCls;
        var csp = useCSP();
        var type4 = cssVar ? "css" : "js";
        var calc = useUniqueMemo(function() {
          var unitlessCssVar = /* @__PURE__ */ new Set();
          if (cssVar) {
            Object.keys(options.unitless || {}).forEach(function(key) {
              unitlessCssVar.add(token2CSSVar(key, cssVar.prefix));
              unitlessCssVar.add(token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix)));
            });
          }
          return genCalc(type4, unitlessCssVar);
        }, [type4, component, cssVar === null || cssVar === void 0 ? void 0 : cssVar.prefix]);
        var _genMaxMin = genMaxMin(type4), max = _genMaxMin.max, min = _genMaxMin.min;
        var sharedConfig = {
          theme,
          token: token2,
          hashId,
          nonce: function nonce() {
            return csp.nonce;
          },
          clientOnly: options.clientOnly,
          layer: mergedLayer,
          // antd is always at top of styles
          order: options.order || -999
        };
        useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
          clientOnly: false,
          path: ["Shared", rootPrefixCls]
        }), function() {
          return typeof getResetStyles === "function" ? getResetStyles(token2) : [];
        });
        var wrapSSR = useStyleRegister(_objectSpread2(_objectSpread2({}, sharedConfig), {}, {
          path: [concatComponent, prefixCls, iconPrefixCls]
        }), function() {
          if (options.injectStyle === false) {
            return [];
          }
          var _statisticToken = statisticToken(token2), proxyToken = _statisticToken.token, flush = _statisticToken.flush;
          var defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
          var componentCls = ".".concat(prefixCls);
          var componentToken = getComponentToken(component, realToken, defaultComponentToken, {
            deprecatedTokens: options.deprecatedTokens
          });
          if (cssVar && defaultComponentToken && _typeof(defaultComponentToken) === "object") {
            Object.keys(defaultComponentToken).forEach(function(key) {
              defaultComponentToken[key] = "var(".concat(token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix)), ")");
            });
          }
          var mergedToken = merge(proxyToken, {
            componentCls,
            prefixCls,
            iconCls: ".".concat(iconPrefixCls),
            antCls: ".".concat(rootPrefixCls),
            calc,
            // @ts-ignore
            max,
            // @ts-ignore
            min
          }, cssVar ? defaultComponentToken : componentToken);
          var styleInterpolation = styleFn(mergedToken, {
            hashId,
            prefixCls,
            rootPrefixCls,
            iconPrefixCls
          });
          flush(component, componentToken);
          var commonStyle = typeof getCommonStyle === "function" ? getCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont) : null;
          return [options.resetStyle === false ? null : commonStyle, styleInterpolation];
        });
        return [wrapSSR, hashId];
      };
    }
    function genSubStyleComponent2(componentName, styleFn, getDefaultToken) {
      var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      var useStyle2 = genComponentStyleHook2(componentName, styleFn, getDefaultToken, _objectSpread2({
        resetStyle: false,
        // Sub Style should default after root one
        order: -998
      }, options));
      var StyledComponent = function StyledComponent2(_ref2) {
        var prefixCls = _ref2.prefixCls, _ref2$rootCls = _ref2.rootCls, rootCls = _ref2$rootCls === void 0 ? prefixCls : _ref2$rootCls;
        useStyle2(prefixCls, rootCls);
        return null;
      };
      return StyledComponent;
    }
    return {
      genStyleHooks: genStyleHooks2,
      genSubStyleComponent: genSubStyleComponent2,
      genComponentStyleHook: genComponentStyleHook2
    };
  }
  const PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
  const version$1 = "5.21.5";
  function isStableColor(color) {
    return color >= 0 && color <= 255;
  }
  function getAlphaColor(frontColor, backgroundColor) {
    const {
      r: fR,
      g: fG,
      b: fB,
      a: originAlpha
    } = new TinyColor(frontColor).toRgb();
    if (originAlpha < 1) {
      return frontColor;
    }
    const {
      r: bR,
      g: bG,
      b: bB
    } = new TinyColor(backgroundColor).toRgb();
    for (let fA = 0.01; fA <= 1; fA += 0.01) {
      const r = Math.round((fR - bR * (1 - fA)) / fA);
      const g2 = Math.round((fG - bG * (1 - fA)) / fA);
      const b2 = Math.round((fB - bB * (1 - fA)) / fA);
      if (isStableColor(r) && isStableColor(g2) && isStableColor(b2)) {
        return new TinyColor({
          r,
          g: g2,
          b: b2,
          a: Math.round(fA * 100) / 100
        }).toRgbString();
      }
    }
    return new TinyColor({
      r: fR,
      g: fG,
      b: fB,
      a: 1
    }).toRgbString();
  }
  var __rest$g = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  function formatToken(derivativeToken) {
    const {
      override
    } = derivativeToken, restToken = __rest$g(derivativeToken, ["override"]);
    const overrideTokens = Object.assign({}, override);
    Object.keys(seedToken).forEach((token2) => {
      delete overrideTokens[token2];
    });
    const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    if (mergedToken.motion === false) {
      const fastDuration = "0s";
      mergedToken.motionDurationFast = fastDuration;
      mergedToken.motionDurationMid = fastDuration;
      mergedToken.motionDurationSlow = fastDuration;
    }
    const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
      // ============== Background ============== //
      colorFillContent: mergedToken.colorFillSecondary,
      colorFillContentHover: mergedToken.colorFill,
      colorFillAlter: mergedToken.colorFillQuaternary,
      colorBgContainerDisabled: mergedToken.colorFillTertiary,
      // ============== Split ============== //
      colorBorderBg: mergedToken.colorBgContainer,
      colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
      // ============== Text ============== //
      colorTextPlaceholder: mergedToken.colorTextQuaternary,
      colorTextDisabled: mergedToken.colorTextQuaternary,
      colorTextHeading: mergedToken.colorText,
      colorTextLabel: mergedToken.colorTextSecondary,
      colorTextDescription: mergedToken.colorTextTertiary,
      colorTextLightSolid: mergedToken.colorWhite,
      colorHighlight: mergedToken.colorError,
      colorBgTextHover: mergedToken.colorFillSecondary,
      colorBgTextActive: mergedToken.colorFill,
      colorIcon: mergedToken.colorTextTertiary,
      colorIconHover: mergedToken.colorText,
      colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
      colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
      // Font
      fontSizeIcon: mergedToken.fontSizeSM,
      // Line
      lineWidthFocus: mergedToken.lineWidth * 3,
      // Control
      lineWidth: mergedToken.lineWidth,
      controlOutlineWidth: mergedToken.lineWidth * 2,
      // Checkbox size and expand icon size
      controlInteractiveSize: mergedToken.controlHeight / 2,
      controlItemBgHover: mergedToken.colorFillTertiary,
      controlItemBgActive: mergedToken.colorPrimaryBg,
      controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
      controlItemBgActiveDisabled: mergedToken.colorFill,
      controlTmpOutline: mergedToken.colorFillQuaternary,
      controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
      lineType: mergedToken.lineType,
      borderRadius: mergedToken.borderRadius,
      borderRadiusXS: mergedToken.borderRadiusXS,
      borderRadiusSM: mergedToken.borderRadiusSM,
      borderRadiusLG: mergedToken.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: mergedToken.sizeXXS,
      paddingXS: mergedToken.sizeXS,
      paddingSM: mergedToken.sizeSM,
      padding: mergedToken.size,
      paddingMD: mergedToken.sizeMD,
      paddingLG: mergedToken.sizeLG,
      paddingXL: mergedToken.sizeXL,
      paddingContentHorizontalLG: mergedToken.sizeLG,
      paddingContentVerticalLG: mergedToken.sizeMS,
      paddingContentHorizontal: mergedToken.sizeMS,
      paddingContentVertical: mergedToken.sizeSM,
      paddingContentHorizontalSM: mergedToken.size,
      paddingContentVerticalSM: mergedToken.sizeXS,
      marginXXS: mergedToken.sizeXXS,
      marginXS: mergedToken.sizeXS,
      marginSM: mergedToken.sizeSM,
      margin: mergedToken.size,
      marginMD: mergedToken.sizeMD,
      marginLG: mergedToken.sizeLG,
      marginXL: mergedToken.sizeXL,
      marginXXL: mergedToken.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS,
      screenXSMin: screenXS,
      screenXSMax: screenSM - 1,
      screenSM,
      screenSMMin: screenSM,
      screenSMMax: screenMD - 1,
      screenMD,
      screenMDMin: screenMD,
      screenMDMax: screenLG - 1,
      screenLG,
      screenLGMin: screenLG,
      screenLGMax: screenXL - 1,
      screenXL,
      screenXLMin: screenXL,
      screenXLMax: screenXXL - 1,
      screenXXL,
      screenXXLMin: screenXXL,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), overrideTokens);
    return aliasToken;
  }
  var __rest$f = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true,
    opacityImage: true
  };
  const ignore = {
    size: true,
    sizeSM: true,
    sizeLG: true,
    sizeMD: true,
    sizeXS: true,
    sizeXXS: true,
    sizeMS: true,
    sizeXL: true,
    sizeXXL: true,
    sizeUnit: true,
    sizeStep: true,
    motionBase: true,
    motionUnit: true
  };
  const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
  };
  const getComputedToken = (originToken, overrideToken, theme) => {
    const derivativeToken = theme.getDerivativeToken(originToken);
    const {
      override
    } = overrideToken, components = __rest$f(overrideToken, ["override"]);
    let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
      override
    });
    mergedDerivativeToken = formatToken(mergedDerivativeToken);
    if (components) {
      Object.entries(components).forEach((_ref) => {
        let [key, value] = _ref;
        const {
          theme: componentTheme
        } = value, componentTokens = __rest$f(value, ["theme"]);
        let mergedComponentToken = componentTokens;
        if (componentTheme) {
          mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
            override: componentTokens
          }, componentTheme);
        }
        mergedDerivativeToken[key] = mergedComponentToken;
      });
    }
    return mergedDerivativeToken;
  };
  function useToken() {
    const {
      token: rootDesignToken,
      hashed,
      theme,
      override,
      cssVar
    } = React.useContext(DesignTokenContext);
    const salt = `${version$1}-${hashed || ""}`;
    const mergedTheme = theme || defaultTheme;
    const [token2, hashId, realToken] = useCacheToken(mergedTheme, [seedToken, rootDesignToken], {
      salt,
      override,
      getComputedToken,
      // formatToken will not be consumed after 1.15.0 with getComputedToken.
      // But token will break if @ant-design/cssinjs is under 1.15.0 without it
      formatToken,
      cssVar: cssVar && {
        prefix: cssVar.prefix,
        key: cssVar.key,
        unitless,
        ignore,
        preserve
      }
    });
    return [mergedTheme, realToken, hashed ? hashId : "", token2, cssVar];
  }
  const resetComponent = function(token2) {
    let needInheritFontFamily = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      color: token2.colorText,
      fontSize: token2.fontSize,
      // font-variant: @font-variant-base;
      lineHeight: token2.lineHeight,
      listStyle: "none",
      // font-feature-settings: @font-feature-settings-base;
      fontFamily: needInheritFontFamily ? "inherit" : token2.fontFamily
    };
  };
  const resetIcon = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": {
      lineHeight: 1
    },
    svg: {
      display: "inline-block"
    }
  });
  const genLinkStyle = (token2) => ({
    a: {
      color: token2.colorLink,
      textDecoration: token2.linkDecoration,
      backgroundColor: "transparent",
      // remove the gray background on active links in IE 10.
      outline: "none",
      cursor: "pointer",
      transition: `color ${token2.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      // remove gaps in links underline in iOS 8+ and Safari 8+.
      "&:hover": {
        color: token2.colorLinkHover
      },
      "&:active": {
        color: token2.colorLinkActive
      },
      "&:active, &:hover": {
        textDecoration: token2.linkHoverDecoration,
        outline: 0
      },
      // https://github.com/ant-design/ant-design/issues/22503
      "&:focus": {
        textDecoration: token2.linkFocusDecoration,
        outline: 0
      },
      "&[disabled]": {
        color: token2.colorTextDisabled,
        cursor: "not-allowed"
      }
    }
  });
  const genCommonStyle = (token2, componentPrefixCls, rootCls, resetFont) => {
    const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
    const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
    const resetStyle = {
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      }
    };
    let resetFontStyle = {};
    if (resetFont !== false) {
      resetFontStyle = {
        fontFamily: token2.fontFamily,
        fontSize: token2.fontSize
      };
    }
    return {
      [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
        [prefixSelector]: resetStyle
      })
    };
  };
  const genFocusOutline = (token2) => ({
    outline: `${unit$1(token2.lineWidthFocus)} solid ${token2.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s"
  });
  const genFocusStyle = (token2) => ({
    "&:focus-visible": Object.assign({}, genFocusOutline(token2))
  });
  const useResetIconStyle = (iconPrefixCls, csp) => {
    const [theme, token2] = useToken();
    return useStyleRegister({
      theme,
      token: token2,
      hashId: "",
      path: ["ant-design-icons", iconPrefixCls],
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
      layer: {
        name: "antd"
      }
    }, () => [{
      [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
        [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
          display: "block"
        }
      })
    }]);
  };
  const {
    genStyleHooks,
    genComponentStyleHook,
    genSubStyleComponent
  } = genStyleUtils({
    usePrefix: () => {
      const {
        getPrefixCls,
        iconPrefixCls
      } = React.useContext(ConfigContext);
      const rootPrefixCls = getPrefixCls();
      return {
        rootPrefixCls,
        iconPrefixCls
      };
    },
    useToken: () => {
      const [theme, realToken, hashId, token2, cssVar] = useToken();
      return {
        theme,
        realToken,
        hashId,
        token: token2,
        cssVar
      };
    },
    useCSP: () => {
      const {
        csp,
        iconPrefixCls
      } = React.useContext(ConfigContext);
      useResetIconStyle(iconPrefixCls, csp);
      return csp !== null && csp !== void 0 ? csp : {};
    },
    getResetStyles: (token2) => [{
      "&": genLinkStyle(token2)
    }],
    getCommonStyle: genCommonStyle,
    getCompUnitless: () => unitless
  });
  function genPresetColor(token2, genCss) {
    return PresetColors.reduce((prev2, colorKey) => {
      const lightColor = token2[`${colorKey}1`];
      const lightBorderColor = token2[`${colorKey}3`];
      const darkColor = token2[`${colorKey}6`];
      const textColor = token2[`${colorKey}7`];
      return Object.assign(Object.assign({}, prev2), genCss(colorKey, {
        lightColor,
        lightBorderColor,
        darkColor,
        textColor
      }));
    }, {});
  }
  const fullClone$1 = Object.assign({}, React__namespace);
  const {
    useId: useId$1
  } = fullClone$1;
  const useEmptyId = () => "";
  const useThemeKey = typeof useId$1 === "undefined" ? useEmptyId : useId$1;
  function useTheme(theme, parentTheme, config) {
    var _a;
    devUseWarning();
    const themeConfig = theme || {};
    const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, defaultConfig), {
      hashed: (_a = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a !== void 0 ? _a : defaultConfig.hashed,
      cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
    }) : parentTheme;
    const themeKey = useThemeKey();
    return useMemo(() => {
      var _a2, _b2;
      if (!theme) {
        return parentTheme;
      }
      const mergedComponents = Object.assign({}, parentThemeConfig.components);
      Object.keys(theme.components || {}).forEach((componentName) => {
        mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
      });
      const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
      const mergedCssVar = ((_a2 = themeConfig.cssVar) !== null && _a2 !== void 0 ? _a2 : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
        prefix: config === null || config === void 0 ? void 0 : config.prefixCls
      }, typeof parentThemeConfig.cssVar === "object" ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === "object" ? themeConfig.cssVar : {}), {
        key: typeof themeConfig.cssVar === "object" && ((_b2 = themeConfig.cssVar) === null || _b2 === void 0 ? void 0 : _b2.key) || cssVarKey
      });
      return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
        token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
        components: mergedComponents,
        cssVar: mergedCssVar
      });
    }, [themeConfig, parentThemeConfig], (prev2, next2) => prev2.some((prevTheme, index2) => {
      const nextTheme = next2[index2];
      return !isEqual(prevTheme, nextTheme, true);
    }));
  }
  var _excluded$d = ["children"];
  var Context$1 = /* @__PURE__ */ React__namespace.createContext({});
  function MotionProvider(_ref) {
    var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded$d);
    return /* @__PURE__ */ React__namespace.createElement(Context$1.Provider, {
      value: props
    }, children);
  }
  var DomWrapper = /* @__PURE__ */ function(_React$Component) {
    _inherits(DomWrapper2, _React$Component);
    var _super = _createSuper(DomWrapper2);
    function DomWrapper2() {
      _classCallCheck(this, DomWrapper2);
      return _super.apply(this, arguments);
    }
    _createClass(DomWrapper2, [{
      key: "render",
      value: function render2() {
        return this.props.children;
      }
    }]);
    return DomWrapper2;
  }(React__namespace.Component);
  function useSyncState(defaultValue) {
    var _React$useReducer = React__namespace.useReducer(function(x) {
      return x + 1;
    }, 0), _React$useReducer2 = _slicedToArray(_React$useReducer, 2), forceUpdate = _React$useReducer2[1];
    var currentValueRef = React__namespace.useRef(defaultValue);
    var getValue2 = useEvent(function() {
      return currentValueRef.current;
    });
    var setValue = useEvent(function(updater) {
      currentValueRef.current = typeof updater === "function" ? updater(currentValueRef.current) : updater;
      forceUpdate();
    });
    return [getValue2, setValue];
  }
  var STATUS_NONE = "none";
  var STATUS_APPEAR = "appear";
  var STATUS_ENTER = "enter";
  var STATUS_LEAVE = "leave";
  var STEP_NONE = "none";
  var STEP_PREPARE = "prepare";
  var STEP_START = "start";
  var STEP_ACTIVE = "active";
  var STEP_ACTIVATED = "end";
  var STEP_PREPARED = "prepared";
  function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
    prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
    prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
    prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
    return prefixes;
  }
  function getVendorPrefixes(domSupport, win) {
    var prefixes = {
      animationend: makePrefixMap("Animation", "AnimationEnd"),
      transitionend: makePrefixMap("Transition", "TransitionEnd")
    };
    if (domSupport) {
      if (!("AnimationEvent" in win)) {
        delete prefixes.animationend.animation;
      }
      if (!("TransitionEvent" in win)) {
        delete prefixes.transitionend.transition;
      }
    }
    return prefixes;
  }
  var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
  var style = {};
  if (canUseDom()) {
    var _document$createEleme = document.createElement("div");
    style = _document$createEleme.style;
  }
  var prefixedEventNames = {};
  function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
      return prefixedEventNames[eventName];
    }
    var prefixMap = vendorPrefixes[eventName];
    if (prefixMap) {
      var stylePropList = Object.keys(prefixMap);
      var len = stylePropList.length;
      for (var i = 0; i < len; i += 1) {
        var styleProp = stylePropList[i];
        if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
          prefixedEventNames[eventName] = prefixMap[styleProp];
          return prefixedEventNames[eventName];
        }
      }
    }
    return "";
  }
  var internalAnimationEndName = getVendorPrefixedEventName("animationend");
  var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
  var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
  var animationEndName = internalAnimationEndName || "animationend";
  var transitionEndName = internalTransitionEndName || "transitionend";
  function getTransitionName$1(transitionName, transitionType) {
    if (!transitionName) return null;
    if (_typeof(transitionName) === "object") {
      var type4 = transitionType.replace(/-\w/g, function(match2) {
        return match2[1].toUpperCase();
      });
      return transitionName[type4];
    }
    return "".concat(transitionName, "-").concat(transitionType);
  }
  const useDomMotionEvents = function(onInternalMotionEnd) {
    var cacheElementRef = React.useRef();
    function removeMotionEvents(element) {
      if (element) {
        element.removeEventListener(transitionEndName, onInternalMotionEnd);
        element.removeEventListener(animationEndName, onInternalMotionEnd);
      }
    }
    function patchMotionEvents(element) {
      if (cacheElementRef.current && cacheElementRef.current !== element) {
        removeMotionEvents(cacheElementRef.current);
      }
      if (element && element !== cacheElementRef.current) {
        element.addEventListener(transitionEndName, onInternalMotionEnd);
        element.addEventListener(animationEndName, onInternalMotionEnd);
        cacheElementRef.current = element;
      }
    }
    React__namespace.useEffect(function() {
      return function() {
        removeMotionEvents(cacheElementRef.current);
      };
    }, []);
    return [patchMotionEvents, removeMotionEvents];
  };
  var useIsomorphicLayoutEffect = canUseDom() ? React.useLayoutEffect : React.useEffect;
  const useNextFrame = function() {
    var nextFrameRef = React__namespace.useRef(null);
    function cancelNextFrame() {
      wrapperRaf.cancel(nextFrameRef.current);
    }
    function nextFrame(callback) {
      var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      cancelNextFrame();
      var nextFrameId = wrapperRaf(function() {
        if (delay <= 1) {
          callback({
            isCanceled: function isCanceled() {
              return nextFrameId !== nextFrameRef.current;
            }
          });
        } else {
          nextFrame(callback, delay - 1);
        }
      });
      nextFrameRef.current = nextFrameId;
    }
    React__namespace.useEffect(function() {
      return function() {
        cancelNextFrame();
      };
    }, []);
    return [nextFrame, cancelNextFrame];
  };
  var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
  var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
  var SkipStep = false;
  var DoStep = true;
  function isActive(step) {
    return step === STEP_ACTIVE || step === STEP_ACTIVATED;
  }
  const useStepQueue = function(status, prepareOnly, callback) {
    var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = useNextFrame(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
      setStep(STEP_PREPARE, true);
    }
    var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
    useIsomorphicLayoutEffect(function() {
      if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
        var index2 = STEP_QUEUE.indexOf(step);
        var nextStep = STEP_QUEUE[index2 + 1];
        var result = callback(step);
        if (result === SkipStep) {
          setStep(nextStep, true);
        } else if (nextStep) {
          nextFrame(function(info) {
            function doNext() {
              if (info.isCanceled()) return;
              setStep(nextStep, true);
            }
            if (result === true) {
              doNext();
            } else {
              Promise.resolve(result).then(doNext);
            }
          });
        }
      }
    }, [status, step]);
    React__namespace.useEffect(function() {
      return function() {
        cancelNextFrame();
      };
    }, []);
    return [startQueue, step];
  };
  function useStatus(supportMotion, visible, getElement, _ref) {
    var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
    var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
    var _useSyncState = useSyncState(STATUS_NONE), _useSyncState2 = _slicedToArray(_useSyncState, 2), getStatus = _useSyncState2[0], setStatus = _useSyncState2[1];
    var _useState3 = useSafeState(null), _useState4 = _slicedToArray(_useState3, 2), style2 = _useState4[0], setStyle = _useState4[1];
    var currentStatus = getStatus();
    var mountedRef = React.useRef(false);
    var deadlineRef = React.useRef(null);
    function getDomElement() {
      return getElement();
    }
    var activeRef = React.useRef(false);
    function updateMotionEndStatus() {
      setStatus(STATUS_NONE);
      setStyle(null, true);
    }
    var onInternalMotionEnd = useEvent(function(event) {
      var status = getStatus();
      if (status === STATUS_NONE) {
        return;
      }
      var element = getDomElement();
      if (event && !event.deadline && event.target !== element) {
        return;
      }
      var currentActive = activeRef.current;
      var canEnd;
      if (status === STATUS_APPEAR && currentActive) {
        canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
      } else if (status === STATUS_ENTER && currentActive) {
        canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
      } else if (status === STATUS_LEAVE && currentActive) {
        canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
      }
      if (currentActive && canEnd !== false) {
        updateMotionEndStatus();
      }
    });
    var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
    var getEventHandlers = function getEventHandlers2(targetStatus) {
      switch (targetStatus) {
        case STATUS_APPEAR:
          return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onAppearPrepare), STEP_START, onAppearStart), STEP_ACTIVE, onAppearActive);
        case STATUS_ENTER:
          return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onEnterPrepare), STEP_START, onEnterStart), STEP_ACTIVE, onEnterActive);
        case STATUS_LEAVE:
          return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, onLeavePrepare), STEP_START, onLeaveStart), STEP_ACTIVE, onLeaveActive);
        default:
          return {};
      }
    };
    var eventHandlers = React__namespace.useMemo(function() {
      return getEventHandlers(currentStatus);
    }, [currentStatus]);
    var _useStepQueue = useStepQueue(currentStatus, !supportMotion, function(newStep) {
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];
        if (!onPrepare) {
          return SkipStep;
        }
        return onPrepare(getDomElement());
      }
      if (step in eventHandlers) {
        var _eventHandlers$step;
        setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
      }
      if (step === STEP_ACTIVE && currentStatus !== STATUS_NONE) {
        patchMotionEvents(getDomElement());
        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function() {
            onInternalMotionEnd({
              deadline: true
            });
          }, motionDeadline);
        }
      }
      if (step === STEP_PREPARED) {
        updateMotionEndStatus();
      }
      return DoStep;
    }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
    var active = isActive(step);
    activeRef.current = active;
    useIsomorphicLayoutEffect(function() {
      setAsyncVisible(visible);
      var isMounted = mountedRef.current;
      mountedRef.current = true;
      var nextStatus;
      if (!isMounted && visible && motionAppear) {
        nextStatus = STATUS_APPEAR;
      }
      if (isMounted && visible && motionEnter) {
        nextStatus = STATUS_ENTER;
      }
      if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
        nextStatus = STATUS_LEAVE;
      }
      var nextEventHandlers = getEventHandlers(nextStatus);
      if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
        setStatus(nextStatus);
        startStep();
      } else {
        setStatus(STATUS_NONE);
      }
    }, [visible]);
    React.useEffect(function() {
      if (
        // Cancel appear
        currentStatus === STATUS_APPEAR && !motionAppear || // Cancel enter
        currentStatus === STATUS_ENTER && !motionEnter || // Cancel leave
        currentStatus === STATUS_LEAVE && !motionLeave
      ) {
        setStatus(STATUS_NONE);
      }
    }, [motionAppear, motionEnter, motionLeave]);
    React.useEffect(function() {
      return function() {
        mountedRef.current = false;
        clearTimeout(deadlineRef.current);
      };
    }, []);
    var firstMountChangeRef = React__namespace.useRef(false);
    React.useEffect(function() {
      if (asyncVisible) {
        firstMountChangeRef.current = true;
      }
      if (asyncVisible !== void 0 && currentStatus === STATUS_NONE) {
        if (firstMountChangeRef.current || asyncVisible) {
          onVisibleChanged === null || onVisibleChanged === void 0 || onVisibleChanged(asyncVisible);
        }
        firstMountChangeRef.current = true;
      }
    }, [asyncVisible, currentStatus]);
    var mergedStyle = style2;
    if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
      mergedStyle = _objectSpread2({
        transition: "none"
      }, mergedStyle);
    }
    return [currentStatus, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
  }
  function genCSSMotion(config) {
    var transitionSupport = config;
    if (_typeof(config) === "object") {
      transitionSupport = config.transitionSupport;
    }
    function isSupportTransition(props, contextMotion) {
      return !!(props.motionName && transitionSupport && contextMotion !== false);
    }
    var CSSMotion2 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
      var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
      var _React$useContext = React__namespace.useContext(Context$1), contextMotion = _React$useContext.motion;
      var supportMotion = isSupportTransition(props, contextMotion);
      var nodeRef = React.useRef();
      var wrapperNodeRef = React.useRef();
      function getDomElement() {
        try {
          return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
        } catch (e2) {
          return null;
        }
      }
      var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
      var renderedRef = React__namespace.useRef(mergedVisible);
      if (mergedVisible) {
        renderedRef.current = true;
      }
      var setNodeRef = React__namespace.useCallback(function(node2) {
        nodeRef.current = node2;
        fillRef(ref, node2);
      }, [ref]);
      var motionChildren;
      var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
        visible
      });
      if (!children) {
        motionChildren = null;
      } else if (status === STATUS_NONE) {
        if (mergedVisible) {
          motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
        } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
          motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
            className: leavedClassName
          }), setNodeRef);
        } else if (forceRender || !removeOnLeave && !leavedClassName) {
          motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
            style: {
              display: "none"
            }
          }), setNodeRef);
        } else {
          motionChildren = null;
        }
      } else {
        var statusSuffix;
        if (statusStep === STEP_PREPARE) {
          statusSuffix = "prepare";
        } else if (isActive(statusStep)) {
          statusSuffix = "active";
        } else if (statusStep === STEP_START) {
          statusSuffix = "start";
        }
        var motionCls = getTransitionName$1(motionName, "".concat(status, "-").concat(statusSuffix));
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: classNames(getTransitionName$1(motionName, status), _defineProperty(_defineProperty({}, motionCls, motionCls && statusSuffix), motionName, typeof motionName === "string")),
          style: statusStyle
        }), setNodeRef);
      }
      if (/* @__PURE__ */ React__namespace.isValidElement(motionChildren) && supportRef(motionChildren)) {
        var _ref = motionChildren, originNodeRef = _ref.ref;
        if (!originNodeRef) {
          motionChildren = /* @__PURE__ */ React__namespace.cloneElement(motionChildren, {
            ref: setNodeRef
          });
        }
      }
      return /* @__PURE__ */ React__namespace.createElement(DomWrapper, {
        ref: wrapperNodeRef
      }, motionChildren);
    });
    CSSMotion2.displayName = "CSSMotion";
    return CSSMotion2;
  }
  const CSSMotion = genCSSMotion(supportTransition);
  var STATUS_ADD = "add";
  var STATUS_KEEP = "keep";
  var STATUS_REMOVE = "remove";
  var STATUS_REMOVED = "removed";
  function wrapKeyToObject(key) {
    var keyObj;
    if (key && _typeof(key) === "object" && "key" in key) {
      keyObj = key;
    } else {
      keyObj = {
        key
      };
    }
    return _objectSpread2(_objectSpread2({}, keyObj), {}, {
      key: String(keyObj.key)
    });
  }
  function parseKeys() {
    var keys2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return keys2.map(wrapKeyToObject);
  }
  function diffKeys() {
    var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var list = [];
    var currentIndex = 0;
    var currentLen = currentKeys.length;
    var prevKeyObjects = parseKeys(prevKeys);
    var currentKeyObjects = parseKeys(currentKeys);
    prevKeyObjects.forEach(function(keyObj) {
      var hit = false;
      for (var i = currentIndex; i < currentLen; i += 1) {
        var currentKeyObj = currentKeyObjects[i];
        if (currentKeyObj.key === keyObj.key) {
          if (currentIndex < i) {
            list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
              return _objectSpread2(_objectSpread2({}, obj), {}, {
                status: STATUS_ADD
              });
            }));
            currentIndex = i;
          }
          list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
            status: STATUS_KEEP
          }));
          currentIndex += 1;
          hit = true;
          break;
        }
      }
      if (!hit) {
        list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
          status: STATUS_REMOVE
        }));
      }
    });
    if (currentIndex < currentLen) {
      list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
        return _objectSpread2(_objectSpread2({}, obj), {}, {
          status: STATUS_ADD
        });
      }));
    }
    var keys2 = {};
    list.forEach(function(_ref) {
      var key = _ref.key;
      keys2[key] = (keys2[key] || 0) + 1;
    });
    var duplicatedKeys = Object.keys(keys2).filter(function(key) {
      return keys2[key] > 1;
    });
    duplicatedKeys.forEach(function(matchKey) {
      list = list.filter(function(_ref2) {
        var key = _ref2.key, status = _ref2.status;
        return key !== matchKey || status !== STATUS_REMOVE;
      });
      list.forEach(function(node2) {
        if (node2.key === matchKey) {
          node2.status = STATUS_KEEP;
        }
      });
    });
    return list;
  }
  var _excluded$c = ["component", "children", "onVisibleChanged", "onAllRemoved"], _excluded2$1 = ["status"];
  var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
  function genCSSMotionList(transitionSupport) {
    var CSSMotion$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion;
    var CSSMotionList = /* @__PURE__ */ function(_React$Component) {
      _inherits(CSSMotionList2, _React$Component);
      var _super = _createSuper(CSSMotionList2);
      function CSSMotionList2() {
        var _this;
        _classCallCheck(this, CSSMotionList2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
          keyEntities: []
        });
        _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
          _this.setState(function(prevState) {
            var nextKeyEntities = prevState.keyEntities.map(function(entity) {
              if (entity.key !== removeKey) return entity;
              return _objectSpread2(_objectSpread2({}, entity), {}, {
                status: STATUS_REMOVED
              });
            });
            return {
              keyEntities: nextKeyEntities
            };
          }, function() {
            var keyEntities = _this.state.keyEntities;
            var restKeysCount = keyEntities.filter(function(_ref) {
              var status = _ref.status;
              return status !== STATUS_REMOVED;
            }).length;
            if (restKeysCount === 0 && _this.props.onAllRemoved) {
              _this.props.onAllRemoved();
            }
          });
        });
        return _this;
      }
      _createClass(CSSMotionList2, [{
        key: "render",
        value: function render2() {
          var _this2 = this;
          var keyEntities = this.state.keyEntities;
          var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged;
          _this$props.onAllRemoved;
          var restProps = _objectWithoutProperties(_this$props, _excluded$c);
          var Component = component || React__namespace.Fragment;
          var motionProps = {};
          MOTION_PROP_NAMES.forEach(function(prop) {
            motionProps[prop] = restProps[prop];
            delete restProps[prop];
          });
          delete restProps.keys;
          return /* @__PURE__ */ React__namespace.createElement(Component, restProps, keyEntities.map(function(_ref2, index2) {
            var status = _ref2.status, eventProps = _objectWithoutProperties(_ref2, _excluded2$1);
            var visible = status === STATUS_ADD || status === STATUS_KEEP;
            return /* @__PURE__ */ React__namespace.createElement(CSSMotion$1, _extends({}, motionProps, {
              key: eventProps.key,
              visible,
              eventProps,
              onVisibleChanged: function onVisibleChanged(changedVisible) {
                _onVisibleChanged === null || _onVisibleChanged === void 0 || _onVisibleChanged(changedVisible, {
                  key: eventProps.key
                });
                if (!changedVisible) {
                  _this2.removeKey(eventProps.key);
                }
              }
            }), function(props, ref) {
              return children(_objectSpread2(_objectSpread2({}, props), {}, {
                index: index2
              }), ref);
            });
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(_ref3, _ref4) {
          var keys2 = _ref3.keys;
          var keyEntities = _ref4.keyEntities;
          var parsedKeyObjects = parseKeys(keys2);
          var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
          return {
            keyEntities: mixedKeyEntities.filter(function(entity) {
              var prevEntity = keyEntities.find(function(_ref5) {
                var key = _ref5.key;
                return entity.key === key;
              });
              if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
                return false;
              }
              return true;
            })
          };
        }
      }]);
      return CSSMotionList2;
    }(React__namespace.Component);
    _defineProperty(CSSMotionList, "defaultProps", {
      component: "div"
    });
    return CSSMotionList;
  }
  genCSSMotionList(supportTransition);
  function MotionWrapper(props) {
    const {
      children
    } = props;
    const [, token2] = useToken();
    const {
      motion
    } = token2;
    const needWrapMotionProviderRef = React__namespace.useRef(false);
    needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
    if (needWrapMotionProviderRef.current) {
      return /* @__PURE__ */ React__namespace.createElement(MotionProvider, {
        motion
      }, children);
    }
    return children;
  }
  const PropWarning = () => null;
  var __rest$e = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
  let globalPrefixCls;
  function getGlobalPrefixCls() {
    return globalPrefixCls || defaultPrefixCls;
  }
  function isLegacyTheme(theme) {
    return Object.keys(theme).some((key) => key.endsWith("Color"));
  }
  const setGlobalConfig = (props) => {
    const {
      prefixCls,
      iconPrefixCls,
      theme,
      holderRender
    } = props;
    if (prefixCls !== void 0) {
      globalPrefixCls = prefixCls;
    }
    if (theme) {
      if (isLegacyTheme(theme)) {
        registerTheme(getGlobalPrefixCls(), theme);
      }
    }
  };
  const ProviderChildren = (props) => {
    const {
      children,
      csp: customCsp,
      autoInsertSpaceInButton,
      alert,
      anchor,
      form,
      locale: locale2,
      componentSize,
      direction,
      space,
      splitter,
      virtual,
      dropdownMatchSelectWidth,
      popupMatchSelectWidth,
      popupOverflow,
      legacyLocale,
      parentContext,
      iconPrefixCls: customIconPrefixCls,
      theme,
      componentDisabled,
      segmented,
      statistic: statistic2,
      spin,
      calendar,
      carousel,
      cascader,
      collapse,
      typography,
      checkbox,
      descriptions,
      divider,
      drawer,
      skeleton,
      steps,
      image,
      layout,
      list,
      mentions,
      modal,
      progress,
      result,
      slider,
      breadcrumb,
      menu,
      pagination,
      input,
      textArea,
      empty,
      badge,
      radio,
      rate,
      switch: SWITCH,
      transfer,
      avatar,
      message,
      tag,
      table,
      card,
      tabs,
      timeline,
      timePicker,
      upload,
      notification,
      tree,
      colorPicker,
      datePicker,
      rangePicker,
      flex,
      wave,
      dropdown,
      warning: warningConfig,
      tour,
      floatButtonGroup,
      variant,
      inputNumber,
      treeSelect
    } = props;
    const getPrefixCls = React__namespace.useCallback((suffixCls, customizePrefixCls) => {
      const {
        prefixCls
      } = props;
      if (customizePrefixCls) {
        return customizePrefixCls;
      }
      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    }, [parentContext.getPrefixCls, props.prefixCls]);
    const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
    const csp = customCsp || parentContext.csp;
    useResetIconStyle(iconPrefixCls, csp);
    const mergedTheme = useTheme(theme, parentContext.theme, {
      prefixCls: getPrefixCls("")
    });
    const baseConfig = {
      csp,
      autoInsertSpaceInButton,
      alert,
      anchor,
      locale: locale2 || legacyLocale,
      direction,
      space,
      splitter,
      virtual,
      popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
      popupOverflow,
      getPrefixCls,
      iconPrefixCls,
      theme: mergedTheme,
      segmented,
      statistic: statistic2,
      spin,
      calendar,
      carousel,
      cascader,
      collapse,
      typography,
      checkbox,
      descriptions,
      divider,
      drawer,
      skeleton,
      steps,
      image,
      input,
      textArea,
      layout,
      list,
      mentions,
      modal,
      progress,
      result,
      slider,
      breadcrumb,
      menu,
      pagination,
      empty,
      badge,
      radio,
      rate,
      switch: SWITCH,
      transfer,
      avatar,
      message,
      tag,
      table,
      card,
      tabs,
      timeline,
      timePicker,
      upload,
      notification,
      tree,
      colorPicker,
      datePicker,
      rangePicker,
      flex,
      wave,
      dropdown,
      warning: warningConfig,
      tour,
      floatButtonGroup,
      variant,
      inputNumber,
      treeSelect
    };
    const config = Object.assign({}, parentContext);
    Object.keys(baseConfig).forEach((key) => {
      if (baseConfig[key] !== void 0) {
        config[key] = baseConfig[key];
      }
    });
    PASSED_PROPS.forEach((propName) => {
      const propValue = props[propName];
      if (propValue) {
        config[propName] = propValue;
      }
    });
    if (typeof autoInsertSpaceInButton !== "undefined") {
      config.button = Object.assign({
        autoInsertSpace: autoInsertSpaceInButton
      }, config.button);
    }
    const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
      const prevKeys = Object.keys(prevConfig);
      const currentKeys = Object.keys(currentConfig);
      return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
    });
    const memoIconContextValue = React__namespace.useMemo(() => ({
      prefixCls: iconPrefixCls,
      csp
    }), [iconPrefixCls, csp]);
    let childNode = /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(PropWarning, {
      dropdownMatchSelectWidth
    }), children);
    const validateMessages = React__namespace.useMemo(() => {
      var _a, _b, _c, _d;
      return merge$1(((_a = localeValues.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
    }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
    if (Object.keys(validateMessages).length > 0) {
      childNode = /* @__PURE__ */ React__namespace.createElement(ValidateMessagesContext.Provider, {
        value: validateMessages
      }, childNode);
    }
    if (locale2) {
      childNode = /* @__PURE__ */ React__namespace.createElement(LocaleProvider, {
        locale: locale2,
        _ANT_MARK__: ANT_MARK
      }, childNode);
    }
    if (iconPrefixCls || csp) {
      childNode = /* @__PURE__ */ React__namespace.createElement(IconContext.Provider, {
        value: memoIconContextValue
      }, childNode);
    }
    if (componentSize) {
      childNode = /* @__PURE__ */ React__namespace.createElement(SizeContextProvider, {
        size: componentSize
      }, childNode);
    }
    childNode = /* @__PURE__ */ React__namespace.createElement(MotionWrapper, null, childNode);
    const memoTheme = React__namespace.useMemo(() => {
      const _a = mergedTheme || {}, {
        algorithm,
        token: token2,
        components,
        cssVar
      } = _a, rest = __rest$e(_a, ["algorithm", "token", "components", "cssVar"]);
      const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
      const parsedComponents = {};
      Object.entries(components || {}).forEach((_ref) => {
        let [componentName, componentToken] = _ref;
        const parsedToken = Object.assign({}, componentToken);
        if ("algorithm" in parsedToken) {
          if (parsedToken.algorithm === true) {
            parsedToken.theme = themeObj;
          } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
            parsedToken.theme = createTheme(parsedToken.algorithm);
          }
          delete parsedToken.algorithm;
        }
        parsedComponents[componentName] = parsedToken;
      });
      const mergedToken = Object.assign(Object.assign({}, seedToken), token2);
      return Object.assign(Object.assign({}, rest), {
        theme: themeObj,
        token: mergedToken,
        components: parsedComponents,
        override: Object.assign({
          override: mergedToken
        }, parsedComponents),
        cssVar
      });
    }, [mergedTheme]);
    if (theme) {
      childNode = /* @__PURE__ */ React__namespace.createElement(DesignTokenContext.Provider, {
        value: memoTheme
      }, childNode);
    }
    if (memoedConfig.warning) {
      childNode = /* @__PURE__ */ React__namespace.createElement(WarningContext.Provider, {
        value: memoedConfig.warning
      }, childNode);
    }
    if (componentDisabled !== void 0) {
      childNode = /* @__PURE__ */ React__namespace.createElement(DisabledContextProvider, {
        disabled: componentDisabled
      }, childNode);
    }
    return /* @__PURE__ */ React__namespace.createElement(ConfigContext.Provider, {
      value: memoedConfig
    }, childNode);
  };
  const ConfigProvider = (props) => {
    const context = React__namespace.useContext(ConfigContext);
    const antLocale = React__namespace.useContext(LocaleContext);
    return /* @__PURE__ */ React__namespace.createElement(ProviderChildren, Object.assign({
      parentContext: context,
      legacyLocale: antLocale
    }, props));
  };
  ConfigProvider.ConfigContext = ConfigContext;
  ConfigProvider.SizeContext = SizeContext;
  ConfigProvider.config = setGlobalConfig;
  ConfigProvider.useConfig = useConfig;
  Object.defineProperty(ConfigProvider, "SizeContext", {
    get: () => {
      return SizeContext;
    }
  });
  function getRoot(ele) {
    var _ele$getRootNode;
    return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
  }
  function inShadow(ele) {
    return getRoot(ele) instanceof ShadowRoot;
  }
  function getShadowRoot(ele) {
    return inShadow(ele) ? getRoot(ele) : null;
  }
  function camelCase(input) {
    return input.replace(/-(.)/g, function(match2, g2) {
      return g2.toUpperCase();
    });
  }
  function warning$1(valid, message) {
    warningOnce(valid, "[@ant-design/icons] ".concat(message));
  }
  function isIconDefinition(target) {
    return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
  }
  function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
      var val = attrs[key];
      switch (key) {
        case "class":
          acc.className = val;
          delete acc.class;
          break;
        default:
          delete acc[key];
          acc[camelCase(key)] = val;
      }
      return acc;
    }, {});
  }
  function generate(node2, key, rootProps) {
    if (!rootProps) {
      return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2({
        key
      }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index2) {
        return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
      }));
    }
    return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2(_objectSpread2({
      key
    }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index2) {
      return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
    }));
  }
  function getSecondaryColor(primaryColor) {
    return generate$1(primaryColor)[0];
  }
  function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
      return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
  }
  var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
  var useInsertStyles = function useInsertStyles2(eleRef) {
    var _useContext = React.useContext(IconContext), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
      mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    React.useEffect(function() {
      var ele = eleRef.current;
      var shadowRoot = getShadowRoot(ele);
      updateCSS(mergedStyleStr, "@ant-design-icons", {
        prepend: true,
        csp,
        attachTo: shadowRoot
      });
    }, []);
  };
  var _excluded$b = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
  var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
  };
  function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
  }
  function getTwoToneColors() {
    return _objectSpread2({}, twoToneColorPalette);
  }
  var IconBase = function IconBase2(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded$b);
    var svgRef = React__namespace.useRef();
    var colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }
    useInsertStyles(svgRef);
    warning$1(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) {
      return null;
    }
    var target = icon;
    if (target && typeof target.icon === "function") {
      target = _objectSpread2(_objectSpread2({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }
    return generate(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
      className,
      onClick,
      style: style2,
      "data-icon": target.name,
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, restProps), {}, {
      ref: svgRef
    }));
  };
  IconBase.displayName = "IconReact";
  IconBase.getTwoToneColors = getTwoToneColors;
  IconBase.setTwoToneColors = setTwoToneColors;
  function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return IconBase.setTwoToneColors({
      primaryColor,
      secondaryColor
    });
  }
  function getTwoToneColor() {
    var colors = IconBase.getTwoToneColors();
    if (!colors.calculated) {
      return colors.primaryColor;
    }
    return [colors.primaryColor, colors.secondaryColor];
  }
  var _excluded$a = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
  setTwoToneColor(blue.primary);
  var Icon = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded$a);
    var _React$useContext = React__namespace.useContext(IconContext), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
    var classString = classNames(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === void 0 && onClick) {
      iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
      msTransform: "rotate(".concat(rotate, "deg)"),
      transform: "rotate(".concat(rotate, "deg)")
    } : void 0;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /* @__PURE__ */ React__namespace.createElement("span", _extends({
      role: "img",
      "aria-label": icon.name
    }, restProps, {
      ref,
      tabIndex: iconTabIndex,
      onClick,
      className: classString
    }), /* @__PURE__ */ React__namespace.createElement(IconBase, {
      icon,
      primaryColor,
      secondaryColor,
      style: svgStyle
    }));
  });
  Icon.displayName = "AntdIcon";
  Icon.getTwoToneColor = getTwoToneColor;
  Icon.setTwoToneColor = setTwoToneColor;
  var CloseOutlined$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
  var CloseOutlined = function CloseOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: CloseOutlined$1
    }));
  };
  var RefIcon$4 = /* @__PURE__ */ React__namespace.forwardRef(CloseOutlined);
  var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
  var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
  var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
  var ariaPrefix = "aria-";
  var dataPrefix = "data-";
  function match(key, prefix) {
    return key.indexOf(prefix) === 0;
  }
  function pickAttrs(props) {
    var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var mergedConfig;
    if (ariaOnly === false) {
      mergedConfig = {
        aria: true,
        data: true,
        attr: true
      };
    } else if (ariaOnly === true) {
      mergedConfig = {
        aria: true
      };
    } else {
      mergedConfig = _objectSpread2({}, ariaOnly);
    }
    var attrs = {};
    Object.keys(props).forEach(function(key) {
      if (
        // Aria
        mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
        mergedConfig.data && match(key, dataPrefix) || // Attr
        mergedConfig.attr && propList.includes(key)
      ) {
        attrs[key] = props[key];
      }
    });
    return attrs;
  }
  function isFragment(child) {
    return child && /* @__PURE__ */ React.isValidElement(child) && child.type === React.Fragment;
  }
  const replaceElement = (element, replacement, props) => {
    if (!/* @__PURE__ */ React.isValidElement(element)) {
      return replacement;
    }
    return /* @__PURE__ */ React.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
  };
  function cloneElement(element, props) {
    return replaceElement(element, element, props);
  }
  function isWindow(obj) {
    return obj !== null && obj !== void 0 && obj === obj.window;
  }
  const getScroll = (target) => {
    var _a, _b;
    if (typeof window === "undefined") {
      return 0;
    }
    let result = 0;
    if (isWindow(target)) {
      result = target.pageYOffset;
    } else if (target instanceof Document) {
      result = target.documentElement.scrollTop;
    } else if (target instanceof HTMLElement) {
      result = target.scrollTop;
    } else if (target) {
      result = target["scrollTop"];
    }
    if (target && !isWindow(target) && typeof result !== "number") {
      result = (_b = ((_a = target.ownerDocument) !== null && _a !== void 0 ? _a : target).documentElement) === null || _b === void 0 ? void 0 : _b.scrollTop;
    }
    return result;
  };
  function easeInOutCubic(t2, b2, c2, d2) {
    const cc = c2 - b2;
    t2 /= d2 / 2;
    if (t2 < 1) {
      return cc / 2 * t2 * t2 * t2 + b2;
    }
    return cc / 2 * ((t2 -= 2) * t2 * t2 + 2) + b2;
  }
  function scrollTo(y) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
      getContainer: getContainer2 = () => window,
      callback,
      duration = 450
    } = options;
    const container = getContainer2();
    const scrollTop = getScroll(container);
    const startTime = Date.now();
    const frameFunc = () => {
      const timestamp = Date.now();
      const time = timestamp - startTime;
      const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration);
      if (isWindow(container)) {
        container.scrollTo(window.pageXOffset, nextScrollTop);
      } else if (container instanceof Document || container.constructor.name === "HTMLDocument") {
        container.documentElement.scrollTop = nextScrollTop;
      } else {
        container.scrollTop = nextScrollTop;
      }
      if (time < duration) {
        wrapperRaf(frameFunc);
      } else if (typeof callback === "function") {
        callback();
      }
    };
    wrapperRaf(frameFunc);
  }
  const useCSSVarCls = (prefixCls) => {
    const [, , , , cssVar] = useToken();
    return cssVar ? `${prefixCls}-css-var` : "";
  };
  var KeyCode = {
    /**
     * MAC_ENTER
     */
    MAC_ENTER: 3,
    /**
     * BACKSPACE
     */
    BACKSPACE: 8,
    /**
     * TAB
     */
    TAB: 9,
    /**
     * NUMLOCK on FF/Safari Mac
     */
    NUM_CENTER: 12,
    // NUMLOCK on FF/Safari Mac
    /**
     * ENTER
     */
    ENTER: 13,
    /**
     * SHIFT
     */
    SHIFT: 16,
    /**
     * CTRL
     */
    CTRL: 17,
    /**
     * ALT
     */
    ALT: 18,
    /**
     * PAUSE
     */
    PAUSE: 19,
    /**
     * CAPS_LOCK
     */
    CAPS_LOCK: 20,
    /**
     * ESC
     */
    ESC: 27,
    /**
     * SPACE
     */
    SPACE: 32,
    /**
     * PAGE_UP
     */
    PAGE_UP: 33,
    // also NUM_NORTH_EAST
    /**
     * PAGE_DOWN
     */
    PAGE_DOWN: 34,
    // also NUM_SOUTH_EAST
    /**
     * END
     */
    END: 35,
    // also NUM_SOUTH_WEST
    /**
     * HOME
     */
    HOME: 36,
    // also NUM_NORTH_WEST
    /**
     * LEFT
     */
    LEFT: 37,
    // also NUM_WEST
    /**
     * UP
     */
    UP: 38,
    // also NUM_NORTH
    /**
     * RIGHT
     */
    RIGHT: 39,
    // also NUM_EAST
    /**
     * DOWN
     */
    DOWN: 40,
    // also NUM_SOUTH
    /**
     * PRINT_SCREEN
     */
    PRINT_SCREEN: 44,
    /**
     * INSERT
     */
    INSERT: 45,
    // also NUM_INSERT
    /**
     * DELETE
     */
    DELETE: 46,
    // also NUM_DELETE
    /**
     * ZERO
     */
    ZERO: 48,
    /**
     * ONE
     */
    ONE: 49,
    /**
     * TWO
     */
    TWO: 50,
    /**
     * THREE
     */
    THREE: 51,
    /**
     * FOUR
     */
    FOUR: 52,
    /**
     * FIVE
     */
    FIVE: 53,
    /**
     * SIX
     */
    SIX: 54,
    /**
     * SEVEN
     */
    SEVEN: 55,
    /**
     * EIGHT
     */
    EIGHT: 56,
    /**
     * NINE
     */
    NINE: 57,
    /**
     * QUESTION_MARK
     */
    QUESTION_MARK: 63,
    // needs localization
    /**
     * A
     */
    A: 65,
    /**
     * B
     */
    B: 66,
    /**
     * C
     */
    C: 67,
    /**
     * D
     */
    D: 68,
    /**
     * E
     */
    E: 69,
    /**
     * F
     */
    F: 70,
    /**
     * G
     */
    G: 71,
    /**
     * H
     */
    H: 72,
    /**
     * I
     */
    I: 73,
    /**
     * J
     */
    J: 74,
    /**
     * K
     */
    K: 75,
    /**
     * L
     */
    L: 76,
    /**
     * M
     */
    M: 77,
    /**
     * N
     */
    N: 78,
    /**
     * O
     */
    O: 79,
    /**
     * P
     */
    P: 80,
    /**
     * Q
     */
    Q: 81,
    /**
     * R
     */
    R: 82,
    /**
     * S
     */
    S: 83,
    /**
     * T
     */
    T: 84,
    /**
     * U
     */
    U: 85,
    /**
     * V
     */
    V: 86,
    /**
     * W
     */
    W: 87,
    /**
     * X
     */
    X: 88,
    /**
     * Y
     */
    Y: 89,
    /**
     * Z
     */
    Z: 90,
    /**
     * META
     */
    META: 91,
    // WIN_KEY_LEFT
    /**
     * WIN_KEY_RIGHT
     */
    WIN_KEY_RIGHT: 92,
    /**
     * CONTEXT_MENU
     */
    CONTEXT_MENU: 93,
    /**
     * NUM_ZERO
     */
    NUM_ZERO: 96,
    /**
     * NUM_ONE
     */
    NUM_ONE: 97,
    /**
     * NUM_TWO
     */
    NUM_TWO: 98,
    /**
     * NUM_THREE
     */
    NUM_THREE: 99,
    /**
     * NUM_FOUR
     */
    NUM_FOUR: 100,
    /**
     * NUM_FIVE
     */
    NUM_FIVE: 101,
    /**
     * NUM_SIX
     */
    NUM_SIX: 102,
    /**
     * NUM_SEVEN
     */
    NUM_SEVEN: 103,
    /**
     * NUM_EIGHT
     */
    NUM_EIGHT: 104,
    /**
     * NUM_NINE
     */
    NUM_NINE: 105,
    /**
     * NUM_MULTIPLY
     */
    NUM_MULTIPLY: 106,
    /**
     * NUM_PLUS
     */
    NUM_PLUS: 107,
    /**
     * NUM_MINUS
     */
    NUM_MINUS: 109,
    /**
     * NUM_PERIOD
     */
    NUM_PERIOD: 110,
    /**
     * NUM_DIVISION
     */
    NUM_DIVISION: 111,
    /**
     * F1
     */
    F1: 112,
    /**
     * F2
     */
    F2: 113,
    /**
     * F3
     */
    F3: 114,
    /**
     * F4
     */
    F4: 115,
    /**
     * F5
     */
    F5: 116,
    /**
     * F6
     */
    F6: 117,
    /**
     * F7
     */
    F7: 118,
    /**
     * F8
     */
    F8: 119,
    /**
     * F9
     */
    F9: 120,
    /**
     * F10
     */
    F10: 121,
    /**
     * F11
     */
    F11: 122,
    /**
     * F12
     */
    F12: 123,
    /**
     * NUMLOCK
     */
    NUMLOCK: 144,
    /**
     * SEMICOLON
     */
    SEMICOLON: 186,
    // needs localization
    /**
     * DASH
     */
    DASH: 189,
    // needs localization
    /**
     * EQUALS
     */
    EQUALS: 187,
    // needs localization
    /**
     * COMMA
     */
    COMMA: 188,
    // needs localization
    /**
     * PERIOD
     */
    PERIOD: 190,
    // needs localization
    /**
     * SLASH
     */
    SLASH: 191,
    // needs localization
    /**
     * APOSTROPHE
     */
    APOSTROPHE: 192,
    // needs localization
    /**
     * SINGLE_QUOTE
     */
    SINGLE_QUOTE: 222,
    // needs localization
    /**
     * OPEN_SQUARE_BRACKET
     */
    OPEN_SQUARE_BRACKET: 219,
    // needs localization
    /**
     * BACKSLASH
     */
    BACKSLASH: 220,
    // needs localization
    /**
     * CLOSE_SQUARE_BRACKET
     */
    CLOSE_SQUARE_BRACKET: 221,
    // needs localization
    /**
     * WIN_KEY
     */
    WIN_KEY: 224,
    /**
     * MAC_FF_META
     */
    MAC_FF_META: 224,
    // Firefox (Gecko) fires this for the meta key instead of 91
    /**
     * WIN_IME
     */
    WIN_IME: 229,
    // ======================== Function ========================
    /**
     * whether text and modified key is entered at the same time.
     */
    isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
      var keyCode = e2.keyCode;
      if (e2.altKey && !e2.ctrlKey || e2.metaKey || // Function keys don't generate text
      keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
        return false;
      }
      switch (keyCode) {
        case KeyCode.ALT:
        case KeyCode.CAPS_LOCK:
        case KeyCode.CONTEXT_MENU:
        case KeyCode.CTRL:
        case KeyCode.DOWN:
        case KeyCode.END:
        case KeyCode.ESC:
        case KeyCode.HOME:
        case KeyCode.INSERT:
        case KeyCode.LEFT:
        case KeyCode.MAC_FF_META:
        case KeyCode.META:
        case KeyCode.NUMLOCK:
        case KeyCode.NUM_CENTER:
        case KeyCode.PAGE_DOWN:
        case KeyCode.PAGE_UP:
        case KeyCode.PAUSE:
        case KeyCode.PRINT_SCREEN:
        case KeyCode.RIGHT:
        case KeyCode.SHIFT:
        case KeyCode.UP:
        case KeyCode.WIN_KEY:
        case KeyCode.WIN_KEY_RIGHT:
          return false;
        default:
          return true;
      }
    },
    /**
     * whether character is entered.
     */
    isCharacterKey: function isCharacterKey(keyCode) {
      if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
        return true;
      }
      if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
        return true;
      }
      if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
        return true;
      }
      if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
        return true;
      }
      switch (keyCode) {
        case KeyCode.SPACE:
        case KeyCode.QUESTION_MARK:
        case KeyCode.NUM_PLUS:
        case KeyCode.NUM_MINUS:
        case KeyCode.NUM_PERIOD:
        case KeyCode.NUM_DIVISION:
        case KeyCode.SEMICOLON:
        case KeyCode.DASH:
        case KeyCode.EQUALS:
        case KeyCode.COMMA:
        case KeyCode.PERIOD:
        case KeyCode.SLASH:
        case KeyCode.APOSTROPHE:
        case KeyCode.SINGLE_QUOTE:
        case KeyCode.OPEN_SQUARE_BRACKET:
        case KeyCode.BACKSLASH:
        case KeyCode.CLOSE_SQUARE_BRACKET:
          return true;
        default:
          return false;
      }
    }
  };
  var LoadingOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
  var LoadingOutlined = function LoadingOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: LoadingOutlined$1
    }));
  };
  var RefIcon$3 = /* @__PURE__ */ React__namespace.forwardRef(LoadingOutlined);
  const zIndexContext = /* @__PURE__ */ React.createContext(void 0);
  const CONTAINER_OFFSET = 100;
  const containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET,
    FloatButton: CONTAINER_OFFSET
  };
  const consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
  };
  function isContainerType(type4) {
    return type4 in containerBaseZIndexOffset;
  }
  const useZIndex = (componentType, customZIndex) => {
    const [, token2] = useToken();
    const parentZIndex = React.useContext(zIndexContext);
    const isContainer = isContainerType(componentType);
    let result;
    if (customZIndex !== void 0) {
      result = [customZIndex, customZIndex];
    } else {
      let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
      if (isContainer) {
        zIndex += // Use preset token zIndex by default but not stack when has parent container
        (parentZIndex ? 0 : token2.zIndexPopupBase) + // Container offset
        containerBaseZIndexOffset[componentType];
      } else {
        zIndex += consumerBaseZIndexOffset[componentType];
      }
      result = [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
    }
    return result;
  };
  function _regeneratorRuntime() {
    _regeneratorRuntime = function _regeneratorRuntime2() {
      return e2;
    };
    var t2, e2 = {}, r = Object.prototype, n2 = r.hasOwnProperty, o = Object.defineProperty || function(t3, e3, r2) {
      t3[e3] = r2.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c2 = i.asyncIterator || "@@asyncIterator", u2 = i.toStringTag || "@@toStringTag";
    function define(t3, e3, r2) {
      return Object.defineProperty(t3, e3, {
        value: r2,
        enumerable: true,
        configurable: true,
        writable: true
      }), t3[e3];
    }
    try {
      define({}, "");
    } catch (t3) {
      define = function define2(t4, e3, r2) {
        return t4[e3] = r2;
      };
    }
    function wrap(t3, e3, r2, n3) {
      var i2 = e3 && e3.prototype instanceof Generator ? e3 : Generator, a2 = Object.create(i2.prototype), c3 = new Context2(n3 || []);
      return o(a2, "_invoke", {
        value: makeInvokeMethod(t3, r2, c3)
      }), a2;
    }
    function tryCatch(t3, e3, r2) {
      try {
        return {
          type: "normal",
          arg: t3.call(e3, r2)
        };
      } catch (t4) {
        return {
          type: "throw",
          arg: t4
        };
      }
    }
    e2.wrap = wrap;
    var h2 = "suspendedStart", l2 = "suspendedYield", f2 = "executing", s = "completed", y = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var p2 = {};
    define(p2, a, function() {
      return this;
    });
    var d2 = Object.getPrototypeOf, v2 = d2 && d2(d2(values([])));
    v2 && v2 !== r && n2.call(v2, a) && (p2 = v2);
    var g2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p2);
    function defineIteratorMethods(t3) {
      ["next", "throw", "return"].forEach(function(e3) {
        define(t3, e3, function(t4) {
          return this._invoke(e3, t4);
        });
      });
    }
    function AsyncIterator(t3, e3) {
      function invoke(r3, o2, i2, a2) {
        var c3 = tryCatch(t3[r3], t3, o2);
        if ("throw" !== c3.type) {
          var u3 = c3.arg, h3 = u3.value;
          return h3 && "object" == _typeof(h3) && n2.call(h3, "__await") ? e3.resolve(h3.__await).then(function(t4) {
            invoke("next", t4, i2, a2);
          }, function(t4) {
            invoke("throw", t4, i2, a2);
          }) : e3.resolve(h3).then(function(t4) {
            u3.value = t4, i2(u3);
          }, function(t4) {
            return invoke("throw", t4, i2, a2);
          });
        }
        a2(c3.arg);
      }
      var r2;
      o(this, "_invoke", {
        value: function value(t4, n3) {
          function callInvokeWithMethodAndArg() {
            return new e3(function(e4, r3) {
              invoke(t4, n3, e4, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e3, r2, n3) {
      var o2 = h2;
      return function(i2, a2) {
        if (o2 === f2) throw Error("Generator is already running");
        if (o2 === s) {
          if ("throw" === i2) throw a2;
          return {
            value: t2,
            done: true
          };
        }
        for (n3.method = i2, n3.arg = a2; ; ) {
          var c3 = n3.delegate;
          if (c3) {
            var u3 = maybeInvokeDelegate(c3, n3);
            if (u3) {
              if (u3 === y) continue;
              return u3;
            }
          }
          if ("next" === n3.method) n3.sent = n3._sent = n3.arg;
          else if ("throw" === n3.method) {
            if (o2 === h2) throw o2 = s, n3.arg;
            n3.dispatchException(n3.arg);
          } else "return" === n3.method && n3.abrupt("return", n3.arg);
          o2 = f2;
          var p3 = tryCatch(e3, r2, n3);
          if ("normal" === p3.type) {
            if (o2 = n3.done ? s : l2, p3.arg === y) continue;
            return {
              value: p3.arg,
              done: n3.done
            };
          }
          "throw" === p3.type && (o2 = s, n3.method = "throw", n3.arg = p3.arg);
        }
      };
    }
    function maybeInvokeDelegate(e3, r2) {
      var n3 = r2.method, o2 = e3.iterator[n3];
      if (o2 === t2) return r2.delegate = null, "throw" === n3 && e3.iterator["return"] && (r2.method = "return", r2.arg = t2, maybeInvokeDelegate(e3, r2), "throw" === r2.method) || "return" !== n3 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y;
      var i2 = tryCatch(o2, e3.iterator, r2.arg);
      if ("throw" === i2.type) return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
      var a2 = i2.arg;
      return a2 ? a2.done ? (r2[e3.resultName] = a2.value, r2.next = e3.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t2), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
    }
    function pushTryEntry(t3) {
      var e3 = {
        tryLoc: t3[0]
      };
      1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
    }
    function resetTryEntry(t3) {
      var e3 = t3.completion || {};
      e3.type = "normal", delete e3.arg, t3.completion = e3;
    }
    function Context2(t3) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t3.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(e3) {
      if (e3 || "" === e3) {
        var r2 = e3[a];
        if (r2) return r2.call(e3);
        if ("function" == typeof e3.next) return e3;
        if (!isNaN(e3.length)) {
          var o2 = -1, i2 = function next2() {
            for (; ++o2 < e3.length; ) if (n2.call(e3, o2)) return next2.value = e3[o2], next2.done = false, next2;
            return next2.value = t2, next2.done = true, next2;
          };
          return i2.next = i2;
        }
      }
      throw new TypeError(_typeof(e3) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g2, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u2, "GeneratorFunction"), e2.isGeneratorFunction = function(t3) {
      var e3 = "function" == typeof t3 && t3.constructor;
      return !!e3 && (e3 === GeneratorFunction || "GeneratorFunction" === (e3.displayName || e3.name));
    }, e2.mark = function(t3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define(t3, u2, "GeneratorFunction")), t3.prototype = Object.create(g2), t3;
    }, e2.awrap = function(t3) {
      return {
        __await: t3
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
      return this;
    }), e2.AsyncIterator = AsyncIterator, e2.async = function(t3, r2, n3, o2, i2) {
      void 0 === i2 && (i2 = Promise);
      var a2 = new AsyncIterator(wrap(t3, r2, n3, o2), i2);
      return e2.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t4) {
        return t4.done ? t4.value : a2.next();
      });
    }, defineIteratorMethods(g2), define(g2, u2, "Generator"), define(g2, a, function() {
      return this;
    }), define(g2, "toString", function() {
      return "[object Generator]";
    }), e2.keys = function(t3) {
      var e3 = Object(t3), r2 = [];
      for (var n3 in e3) r2.push(n3);
      return r2.reverse(), function next2() {
        for (; r2.length; ) {
          var t4 = r2.pop();
          if (t4 in e3) return next2.value = t4, next2.done = false, next2;
        }
        return next2.done = true, next2;
      };
    }, e2.values = values, Context2.prototype = {
      constructor: Context2,
      reset: function reset(e3) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e3) for (var r2 in this) "t" === r2.charAt(0) && n2.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t2);
      },
      stop: function stop() {
        this.done = true;
        var t3 = this.tryEntries[0].completion;
        if ("throw" === t3.type) throw t3.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e3) {
        if (this.done) throw e3;
        var r2 = this;
        function handle(n3, o3) {
          return a2.type = "throw", a2.arg = e3, r2.next = n3, o3 && (r2.method = "next", r2.arg = t2), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if ("root" === i2.tryLoc) return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c3 = n2.call(i2, "catchLoc"), u3 = n2.call(i2, "finallyLoc");
            if (c3 && u3) {
              if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
              if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
            } else if (c3) {
              if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
            } else {
              if (!u3) throw Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t3, e3) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n2.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      },
      complete: function complete(t3, e3) {
        if ("throw" === t3.type) throw t3.arg;
        return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y;
      },
      finish: function finish(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r2 = this.tryEntries[e3];
          if (r2.finallyLoc === t3) return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      },
      "catch": function _catch(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r2 = this.tryEntries[e3];
          if (r2.tryLoc === t3) {
            var n3 = r2.completion;
            if ("throw" === n3.type) {
              var o2 = n3.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e3, r2, n3) {
        return this.delegate = {
          iterator: values(e3),
          resultName: r2,
          nextLoc: n3
        }, "next" === this.method && (this.arg = t2), y;
      }
    }, e2;
  }
  function asyncGeneratorStep(n2, t2, e2, r, o, a, c2) {
    try {
      var i = n2[a](c2), u2 = i.value;
    } catch (n3) {
      return void e2(n3);
    }
    i.done ? t2(u2) : Promise.resolve(u2).then(r, o);
  }
  function _asyncToGenerator(n2) {
    return function() {
      var t2 = this, e2 = arguments;
      return new Promise(function(r, o) {
        var a = n2.apply(t2, e2);
        function _next(n3) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n3);
        }
        function _throw(n3) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n3);
        }
        _next(void 0);
      });
    };
  }
  var fullClone = _objectSpread2({}, ReactDOM__default__namespace);
  var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
  var createRoot;
  try {
    var mainVersion = Number((version || "").split(".")[0]);
    if (mainVersion >= 18) {
      createRoot = fullClone.createRoot;
    }
  } catch (e2) {
  }
  function toggleWarning(skip) {
    var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
    }
  }
  var MARK = "__rc_react_root__";
  function modernRender(node2, container) {
    toggleWarning(true);
    var root = container[MARK] || createRoot(container);
    toggleWarning(false);
    root.render(node2);
    container[MARK] = root;
  }
  function legacyRender(node2, container) {
    reactRender(node2, container);
  }
  function render(node2, container) {
    if (createRoot) {
      modernRender(node2, container);
      return;
    }
    legacyRender(node2, container);
  }
  function modernUnmount(_x) {
    return _modernUnmount.apply(this, arguments);
  }
  function _modernUnmount() {
    _modernUnmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(container) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Promise.resolve().then(function() {
              var _container$MARK;
              (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
              delete container[MARK];
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _modernUnmount.apply(this, arguments);
  }
  function legacyUnmount(container) {
    unmountComponentAtNode(container);
  }
  function unmount(_x2) {
    return _unmount.apply(this, arguments);
  }
  function _unmount() {
    _unmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(container) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(createRoot !== void 0)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", modernUnmount(container));
          case 2:
            legacyUnmount(container);
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _unmount.apply(this, arguments);
  }
  const getCollapsedHeight = () => ({
    height: 0,
    opacity: 0
  });
  const getRealHeight = (node2) => {
    const {
      scrollHeight
    } = node2;
    return {
      height: scrollHeight,
      opacity: 1
    };
  };
  const getCurrentHeight = (node2) => ({
    height: node2 ? node2.offsetHeight : 0
  });
  const skipOpacityTransition = (_, event) => (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === "height";
  const initCollapseMotion = function() {
    let rootCls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultPrefixCls;
    return {
      motionName: `${rootCls}-motion-collapse`,
      onAppearStart: getCollapsedHeight,
      onEnterStart: getCollapsedHeight,
      onAppearActive: getRealHeight,
      onEnterActive: getRealHeight,
      onLeaveStart: getCurrentHeight,
      onLeaveActive: getCollapsedHeight,
      onAppearEnd: skipOpacityTransition,
      onEnterEnd: skipOpacityTransition,
      onLeaveEnd: skipOpacityTransition,
      motionDeadline: 500
    };
  };
  const getTransitionName = (rootPrefixCls, motion, transitionName) => {
    if (transitionName !== void 0) {
      return transitionName;
    }
    return `${rootPrefixCls}-${motion}`;
  };
  const isVisible = function(element) {
    if (!element) {
      return false;
    }
    if (element instanceof Element) {
      if (element.offsetParent) {
        return true;
      }
      if (element.getBBox) {
        var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
        if (width || height) {
          return true;
        }
      }
      if (element.getBoundingClientRect) {
        var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
        if (_width || _height) {
          return true;
        }
      }
    }
    return false;
  };
  const genWaveStyle = (token2) => {
    const {
      componentCls,
      colorPrimary
    } = token2;
    return {
      [componentCls]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${colorPrimary})`,
        boxShadow: `0 0 0 0 currentcolor`,
        opacity: 0.2,
        // =================== Motion ===================
        "&.wave-motion-appear": {
          transition: [`box-shadow 0.4s ${token2.motionEaseOutCirc}`, `opacity 2s ${token2.motionEaseOutCirc}`].join(","),
          "&-active": {
            boxShadow: `0 0 0 6px currentcolor`,
            opacity: 0
          },
          "&.wave-quick": {
            transition: [`box-shadow ${token2.motionDurationSlow} ${token2.motionEaseInOut}`, `opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`].join(",")
          }
        }
      }
    };
  };
  const useStyle$a = genComponentStyleHook("Wave", (token2) => [genWaveStyle(token2)]);
  const TARGET_CLS = `${defaultPrefixCls}-wave-target`;
  function isValidWaveColor(color) {
    return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
    color !== "transparent";
  }
  function getTargetWaveColor(node2) {
    const {
      borderTopColor,
      borderColor,
      backgroundColor
    } = getComputedStyle(node2);
    if (isValidWaveColor(borderTopColor)) {
      return borderTopColor;
    }
    if (isValidWaveColor(borderColor)) {
      return borderColor;
    }
    if (isValidWaveColor(backgroundColor)) {
      return backgroundColor;
    }
    return null;
  }
  function validateNum(value) {
    return Number.isNaN(value) ? 0 : value;
  }
  const WaveEffect = (props) => {
    const {
      className,
      target,
      component
    } = props;
    const divRef = React__namespace.useRef(null);
    const [color, setWaveColor] = React__namespace.useState(null);
    const [borderRadius, setBorderRadius] = React__namespace.useState([]);
    const [left, setLeft] = React__namespace.useState(0);
    const [top, setTop] = React__namespace.useState(0);
    const [width, setWidth] = React__namespace.useState(0);
    const [height, setHeight] = React__namespace.useState(0);
    const [enabled, setEnabled] = React__namespace.useState(false);
    const waveStyle = {
      left,
      top,
      width,
      height,
      borderRadius: borderRadius.map((radius) => `${radius}px`).join(" ")
    };
    if (color) {
      waveStyle["--wave-color"] = color;
    }
    function syncPos() {
      const nodeStyle = getComputedStyle(target);
      setWaveColor(getTargetWaveColor(target));
      const isStatic = nodeStyle.position === "static";
      const {
        borderLeftWidth,
        borderTopWidth
      } = nodeStyle;
      setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
      setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
      setWidth(target.offsetWidth);
      setHeight(target.offsetHeight);
      const {
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius
      } = nodeStyle;
      setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(parseFloat(radius))));
    }
    React__namespace.useEffect(() => {
      if (target) {
        const id = wrapperRaf(() => {
          syncPos();
          setEnabled(true);
        });
        let resizeObserver2;
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver2 = new ResizeObserver(syncPos);
          resizeObserver2.observe(target);
        }
        return () => {
          wrapperRaf.cancel(id);
          resizeObserver2 === null || resizeObserver2 === void 0 ? void 0 : resizeObserver2.disconnect();
        };
      }
    }, []);
    if (!enabled) {
      return null;
    }
    const isSmallComponent = (component === "Checkbox" || component === "Radio") && (target === null || target === void 0 ? void 0 : target.classList.contains(TARGET_CLS));
    return /* @__PURE__ */ React__namespace.createElement(CSSMotion, {
      visible: true,
      motionAppear: true,
      motionName: "wave-motion",
      motionDeadline: 5e3,
      onAppearEnd: (_, event) => {
        var _a;
        if (event.deadline || event.propertyName === "opacity") {
          const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
          unmount(holder).then(() => {
            holder === null || holder === void 0 ? void 0 : holder.remove();
          });
        }
        return false;
      }
    }, (_ref, ref) => {
      let {
        className: motionClassName
      } = _ref;
      return /* @__PURE__ */ React__namespace.createElement("div", {
        ref: composeRef(divRef, ref),
        className: classNames(className, motionClassName, {
          "wave-quick": isSmallComponent
        }),
        style: waveStyle
      });
    });
  };
  const showWaveEffect = (target, info) => {
    var _a;
    const {
      component
    } = info;
    if (component === "Checkbox" && !((_a = target.querySelector("input")) === null || _a === void 0 ? void 0 : _a.checked)) {
      return;
    }
    const holder = document.createElement("div");
    holder.style.position = "absolute";
    holder.style.left = "0px";
    holder.style.top = "0px";
    target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
    render(/* @__PURE__ */ React__namespace.createElement(WaveEffect, Object.assign({}, info, {
      target
    })), holder);
  };
  const useWave = (nodeRef, className, component) => {
    const {
      wave
    } = React__namespace.useContext(ConfigContext);
    const [, token2, hashId] = useToken();
    const showWave = useEvent((event) => {
      const node2 = nodeRef.current;
      if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node2) {
        return;
      }
      const targetNode = node2.querySelector(`.${TARGET_CLS}`) || node2;
      const {
        showEffect
      } = wave || {};
      (showEffect || showWaveEffect)(targetNode, {
        className,
        token: token2,
        component,
        event,
        hashId
      });
    });
    const rafId = React__namespace.useRef();
    const showDebounceWave = (event) => {
      wrapperRaf.cancel(rafId.current);
      rafId.current = wrapperRaf(() => {
        showWave(event);
      });
    };
    return showDebounceWave;
  };
  const Wave = (props) => {
    const {
      children,
      disabled,
      component
    } = props;
    const {
      getPrefixCls
    } = React.useContext(ConfigContext);
    const containerRef = React.useRef(null);
    const prefixCls = getPrefixCls("wave");
    const [, hashId] = useStyle$a(prefixCls);
    const showWave = useWave(containerRef, classNames(prefixCls, hashId), component);
    React.useEffect(() => {
      const node2 = containerRef.current;
      if (!node2 || node2.nodeType !== 1 || disabled) {
        return;
      }
      const onClick = (e2) => {
        if (!isVisible(e2.target) || // No need wave
        !node2.getAttribute || node2.getAttribute("disabled") || node2.disabled || node2.className.includes("disabled") || node2.className.includes("-leave")) {
          return;
        }
        showWave(e2);
      };
      node2.addEventListener("click", onClick, true);
      return () => {
        node2.removeEventListener("click", onClick, true);
      };
    }, [disabled]);
    if (!/* @__PURE__ */ React.isValidElement(children)) {
      return children !== null && children !== void 0 ? children : null;
    }
    const ref = supportRef(children) ? composeRef(children.ref, containerRef) : containerRef;
    return cloneElement(children, {
      ref
    });
  };
  const useSize = (customSize) => {
    const size = React.useContext(SizeContext);
    const mergedSize = React.useMemo(() => {
      if (!customSize) {
        return size;
      }
      if (typeof customSize === "string") {
        return customSize !== null && customSize !== void 0 ? customSize : size;
      }
      if (customSize instanceof Function) {
        return customSize(size);
      }
      return size;
    }, [customSize, size]);
    return mergedSize;
  };
  const genSpaceCompactStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [componentCls]: {
        "&-block": {
          display: "flex",
          width: "100%"
        },
        "&-vertical": {
          flexDirection: "column"
        }
      }
    };
  };
  const genSpaceStyle = (token2) => {
    const {
      componentCls,
      antCls
    } = token2;
    return {
      [componentCls]: {
        display: "inline-flex",
        "&-rtl": {
          direction: "rtl"
        },
        "&-vertical": {
          flexDirection: "column"
        },
        "&-align": {
          flexDirection: "column",
          "&-center": {
            alignItems: "center"
          },
          "&-start": {
            alignItems: "flex-start"
          },
          "&-end": {
            alignItems: "flex-end"
          },
          "&-baseline": {
            alignItems: "baseline"
          }
        },
        [`${componentCls}-item:empty`]: {
          display: "none"
        },
        // https://github.com/ant-design/ant-design/issues/47875
        [`${componentCls}-item > ${antCls}-badge-not-a-wrapper:only-child`]: {
          display: "block"
        }
      }
    };
  };
  const genSpaceGapStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [componentCls]: {
        "&-gap-row-small": {
          rowGap: token2.spaceGapSmallSize
        },
        "&-gap-row-middle": {
          rowGap: token2.spaceGapMiddleSize
        },
        "&-gap-row-large": {
          rowGap: token2.spaceGapLargeSize
        },
        "&-gap-col-small": {
          columnGap: token2.spaceGapSmallSize
        },
        "&-gap-col-middle": {
          columnGap: token2.spaceGapMiddleSize
        },
        "&-gap-col-large": {
          columnGap: token2.spaceGapLargeSize
        }
      }
    };
  };
  const useStyle$9 = genStyleHooks("Space", (token2) => {
    const spaceToken = merge(token2, {
      spaceGapSmallSize: token2.paddingXS,
      spaceGapMiddleSize: token2.padding,
      spaceGapLargeSize: token2.paddingLG
    });
    return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken), genSpaceCompactStyle(spaceToken)];
  }, () => ({}), {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false
  });
  var __rest$d = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const SpaceCompactItemContext = /* @__PURE__ */ React__namespace.createContext(null);
  const useCompactItemContext = (prefixCls, direction) => {
    const compactItemContext = React__namespace.useContext(SpaceCompactItemContext);
    const compactItemClassnames = React__namespace.useMemo(() => {
      if (!compactItemContext) {
        return "";
      }
      const {
        compactDirection,
        isFirstItem,
        isLastItem
      } = compactItemContext;
      const separator = compactDirection === "vertical" ? "-vertical-" : "-";
      return classNames(`${prefixCls}-compact${separator}item`, {
        [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
        [`${prefixCls}-compact${separator}last-item`]: isLastItem,
        [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
      });
    }, [prefixCls, direction, compactItemContext]);
    return {
      compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
      compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
      compactItemClassnames
    };
  };
  const NoCompactStyle = (_ref) => {
    let {
      children
    } = _ref;
    return /* @__PURE__ */ React__namespace.createElement(SpaceCompactItemContext.Provider, {
      value: null
    }, children);
  };
  const CompactItem = (_a) => {
    var {
      children
    } = _a, otherProps = __rest$d(_a, ["children"]);
    return /* @__PURE__ */ React__namespace.createElement(SpaceCompactItemContext.Provider, {
      value: otherProps
    }, children);
  };
  const Compact = (props) => {
    const {
      getPrefixCls,
      direction: directionConfig
    } = React__namespace.useContext(ConfigContext);
    const {
      size,
      direction,
      block,
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      children
    } = props, restProps = __rest$d(props, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]);
    const mergedSize = useSize((ctx) => size !== null && size !== void 0 ? size : ctx);
    const prefixCls = getPrefixCls("space-compact", customizePrefixCls);
    const [wrapCSSVar, hashId] = useStyle$9(prefixCls);
    const clx = classNames(prefixCls, hashId, {
      [`${prefixCls}-rtl`]: directionConfig === "rtl",
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-vertical`]: direction === "vertical"
    }, className, rootClassName);
    const compactItemContext = React__namespace.useContext(SpaceCompactItemContext);
    const childNodes = toArray$2(children);
    const nodes = React__namespace.useMemo(() => childNodes.map((child, i) => {
      const key = (child === null || child === void 0 ? void 0 : child.key) || `${prefixCls}-item-${i}`;
      return /* @__PURE__ */ React__namespace.createElement(CompactItem, {
        key,
        compactSize: mergedSize,
        compactDirection: direction,
        isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
        isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
      }, child);
    }), [size, childNodes, compactItemContext]);
    if (childNodes.length === 0) {
      return null;
    }
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", Object.assign({
      className: clx
    }, restProps), nodes));
  };
  var __rest$c = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const GroupSizeContext = /* @__PURE__ */ React__namespace.createContext(void 0);
  const ButtonGroup = (props) => {
    const {
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const {
      prefixCls: customizePrefixCls,
      size,
      className
    } = props, others = __rest$c(props, ["prefixCls", "size", "className"]);
    const prefixCls = getPrefixCls("btn-group", customizePrefixCls);
    const [, , hashId] = useToken();
    let sizeCls = "";
    switch (size) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
        break;
    }
    const classes = classNames(prefixCls, {
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, className, hashId);
    return /* @__PURE__ */ React__namespace.createElement(GroupSizeContext.Provider, {
      value: size
    }, /* @__PURE__ */ React__namespace.createElement("div", Object.assign({}, others, {
      className: classes
    })));
  };
  const rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
  const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
  function isString(str) {
    return typeof str === "string";
  }
  function isUnBorderedButtonVariant(type4) {
    return type4 === "text" || type4 === "link";
  }
  function splitCNCharsBySpace(child, needInserted) {
    if (child === null || child === void 0) {
      return;
    }
    const SPACE = needInserted ? " " : "";
    if (typeof child !== "string" && typeof child !== "number" && isString(child.type) && isTwoCNChar(child.props.children)) {
      return cloneElement(child, {
        children: child.props.children.split("").join(SPACE)
      });
    }
    if (isString(child)) {
      return isTwoCNChar(child) ? /* @__PURE__ */ React.createElement("span", null, child.split("").join(SPACE)) : /* @__PURE__ */ React.createElement("span", null, child);
    }
    if (isFragment(child)) {
      return /* @__PURE__ */ React.createElement("span", null, child);
    }
    return child;
  }
  function spaceChildren(children, needInserted) {
    let isPrevChildPure = false;
    const childList = [];
    React.Children.forEach(children, (child) => {
      const type4 = typeof child;
      const isCurrentChildPure = type4 === "string" || type4 === "number";
      if (isPrevChildPure && isCurrentChildPure) {
        const lastIndex = childList.length - 1;
        const lastChild = childList[lastIndex];
        childList[lastIndex] = `${lastChild}${child}`;
      } else {
        childList.push(child);
      }
      isPrevChildPure = isCurrentChildPure;
    });
    return React.Children.map(childList, (child) => splitCNCharsBySpace(child, needInserted));
  }
  const IconWrapper = /* @__PURE__ */ React.forwardRef((props, ref) => {
    const {
      className,
      style: style2,
      children,
      prefixCls
    } = props;
    const iconWrapperCls = classNames(`${prefixCls}-icon`, className);
    return /* @__PURE__ */ React.createElement("span", {
      ref,
      className: iconWrapperCls,
      style: style2
    }, children);
  });
  const InnerLoadingIcon = /* @__PURE__ */ React.forwardRef((props, ref) => {
    const {
      prefixCls,
      className,
      style: style2,
      iconClassName
    } = props;
    const mergedIconCls = classNames(`${prefixCls}-loading-icon`, className);
    return /* @__PURE__ */ React.createElement(IconWrapper, {
      prefixCls,
      className: mergedIconCls,
      style: style2,
      ref
    }, /* @__PURE__ */ React.createElement(RefIcon$3, {
      className: iconClassName
    }));
  });
  const getCollapsedWidth = () => ({
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  });
  const getRealWidth = (node2) => ({
    width: node2.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  });
  const LoadingIcon = (props) => {
    const {
      prefixCls,
      loading,
      existIcon,
      className,
      style: style2
    } = props;
    const visible = !!loading;
    if (existIcon) {
      return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
        prefixCls,
        className,
        style: style2
      });
    }
    return /* @__PURE__ */ React.createElement(CSSMotion, {
      visible,
      // We do not really use this motionName
      motionName: `${prefixCls}-loading-icon-motion`,
      motionLeave: visible,
      removeOnLeave: true,
      onAppearStart: getCollapsedWidth,
      onAppearActive: getRealWidth,
      onEnterStart: getCollapsedWidth,
      onEnterActive: getRealWidth,
      onLeaveStart: getRealWidth,
      onLeaveActive: getCollapsedWidth
    }, (_ref, ref) => {
      let {
        className: motionCls,
        style: motionStyle
      } = _ref;
      return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
        prefixCls,
        className,
        style: Object.assign(Object.assign({}, style2), motionStyle),
        ref,
        iconClassName: motionCls
      });
    });
  };
  const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
    // Border
    [`> span, > ${buttonTypeCls}`]: {
      "&:not(:last-child)": {
        [`&, & > ${buttonTypeCls}`]: {
          "&:not(:disabled)": {
            borderInlineEndColor: borderColor
          }
        }
      },
      "&:not(:first-child)": {
        [`&, & > ${buttonTypeCls}`]: {
          "&:not(:disabled)": {
            borderInlineStartColor: borderColor
          }
        }
      }
    }
  });
  const genGroupStyle = (token2) => {
    const {
      componentCls,
      fontSize,
      lineWidth,
      groupBorderColor,
      colorErrorHover
    } = token2;
    return {
      [`${componentCls}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          // Border
          [`> span, > ${componentCls}`]: {
            "&:not(:last-child)": {
              [`&, & > ${componentCls}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            "&:not(:first-child)": {
              marginInlineStart: token2.calc(lineWidth).mul(-1).equal(),
              [`&, & > ${componentCls}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            }
          },
          [componentCls]: {
            position: "relative",
            zIndex: 1,
            "&:hover, &:focus, &:active": {
              zIndex: 2
            },
            "&[disabled]": {
              zIndex: 0
            }
          },
          [`${componentCls}-icon-only`]: {
            fontSize
          }
        },
        // Border Color
        genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor),
        genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
      ]
    };
  };
  const round = Math.round;
  function splitColorStr(str, parseNum) {
    const match2 = str.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [];
    const numList = match2.map((item) => parseFloat(item));
    for (let i = 0; i < 3; i += 1) {
      numList[i] = parseNum(numList[i] || 0, match2[i] || "", i);
    }
    if (match2[3]) {
      numList[3] = match2[3].includes("%") ? numList[3] / 100 : numList[3];
    } else {
      numList[3] = 1;
    }
    return numList;
  }
  const parseHSVorHSL = (num, _, index2) => index2 === 0 ? num : num / 100;
  function limitRange(value, max) {
    const mergedMax = max || 255;
    if (value > mergedMax) {
      return mergedMax;
    }
    if (value < 0) {
      return 0;
    }
    return value;
  }
  class FastColor {
    constructor(input) {
      _defineProperty(this, "isValid", true);
      _defineProperty(this, "r", 0);
      _defineProperty(this, "g", 0);
      _defineProperty(this, "b", 0);
      _defineProperty(this, "a", 1);
      _defineProperty(this, "_h", void 0);
      _defineProperty(this, "_s", void 0);
      _defineProperty(this, "_l", void 0);
      _defineProperty(this, "_v", void 0);
      _defineProperty(this, "_max", void 0);
      _defineProperty(this, "_min", void 0);
      _defineProperty(this, "_brightness", void 0);
      function matchFormat(str) {
        return str[0] in input && str[1] in input && str[2] in input;
      }
      if (!input) ;
      else if (typeof input === "string") {
        let matchPrefix = function(prefix) {
          return trimStr.startsWith(prefix);
        };
        const trimStr = input.trim();
        if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) {
          this.fromHexString(trimStr);
        } else if (matchPrefix("rgb")) {
          this.fromRgbString(trimStr);
        } else if (matchPrefix("hsl")) {
          this.fromHslString(trimStr);
        } else if (matchPrefix("hsv") || matchPrefix("hsb")) {
          this.fromHsvString(trimStr);
        }
      } else if (input instanceof FastColor) {
        this.r = input.r;
        this.g = input.g;
        this.b = input.b;
        this.a = input.a;
        this._h = input._h;
        this._s = input._s;
        this._l = input._l;
        this._v = input._v;
      } else if (matchFormat("rgb")) {
        this.r = limitRange(input.r);
        this.g = limitRange(input.g);
        this.b = limitRange(input.b);
        this.a = typeof input.a === "number" ? limitRange(input.a, 1) : 1;
      } else if (matchFormat("hsl")) {
        this.fromHsl(input);
      } else if (matchFormat("hsv")) {
        this.fromHsv(input);
      } else {
        throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(input));
      }
    }
    // ======================= Setter =======================
    setR(value) {
      return this._sc("r", value);
    }
    setG(value) {
      return this._sc("g", value);
    }
    setB(value) {
      return this._sc("b", value);
    }
    setA(value) {
      return this._sc("a", value, 1);
    }
    setHue(value) {
      const hsv = this.toHsv();
      hsv.h = value;
      return this._c(hsv);
    }
    // ======================= Getter =======================
    /**
     * Returns the perceived luminance of a color, from 0-1.
     * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
     */
    getLuminance() {
      function adjustGamma(raw) {
        const val = raw / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      }
      const R = adjustGamma(this.r);
      const G = adjustGamma(this.g);
      const B = adjustGamma(this.b);
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }
    getHue() {
      if (typeof this._h === "undefined") {
        const delta = this.getMax() - this.getMin();
        if (delta === 0) {
          this._h = 0;
        } else {
          this._h = round(60 * (this.r === this.getMax() ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / delta + 2 : (this.r - this.g) / delta + 4));
        }
      }
      return this._h;
    }
    getSaturation() {
      if (typeof this._s === "undefined") {
        const delta = this.getMax() - this.getMin();
        if (delta === 0) {
          this._s = 0;
        } else {
          this._s = delta / this.getMax();
        }
      }
      return this._s;
    }
    getLightness() {
      if (typeof this._l === "undefined") {
        this._l = (this.getMax() + this.getMin()) / 510;
      }
      return this._l;
    }
    getValue() {
      if (typeof this._v === "undefined") {
        this._v = this.getMax() / 255;
      }
      return this._v;
    }
    /**
     * Returns the perceived brightness of the color, from 0-255.
     * Note: this is not the b of HSB
     * @see http://www.w3.org/TR/AERT#color-contrast
     */
    getBrightness() {
      if (typeof this._brightness === "undefined") {
        this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3;
      }
      return this._brightness;
    }
    // ======================== Func ========================
    darken(amount = 10) {
      const h2 = this.getHue();
      const s = this.getSaturation();
      let l2 = this.getLightness() - amount / 100;
      if (l2 < 0) {
        l2 = 0;
      }
      return this._c({
        h: h2,
        s,
        l: l2,
        a: this.a
      });
    }
    lighten(amount = 10) {
      const h2 = this.getHue();
      const s = this.getSaturation();
      let l2 = this.getLightness() + amount / 100;
      if (l2 > 1) {
        l2 = 1;
      }
      return this._c({
        h: h2,
        s,
        l: l2,
        a: this.a
      });
    }
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    mix(input, amount = 50) {
      const color = this._c(input);
      const p2 = amount / 100;
      const calc = (key) => (color[key] - this[key]) * p2 + this[key];
      const rgba = {
        r: round(calc("r")),
        g: round(calc("g")),
        b: round(calc("b")),
        a: round(calc("a") * 100) / 100
      };
      return this._c(rgba);
    }
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     */
    tint(amount = 10) {
      return this.mix({
        r: 255,
        g: 255,
        b: 255,
        a: 1
      }, amount);
    }
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     */
    shade(amount = 10) {
      return this.mix({
        r: 0,
        g: 0,
        b: 0,
        a: 1
      }, amount);
    }
    onBackground(background) {
      const bg = this._c(background);
      const alpha = this.a + bg.a * (1 - this.a);
      const calc = (key) => {
        return round((this[key] * this.a + bg[key] * bg.a * (1 - this.a)) / alpha);
      };
      return this._c({
        r: calc("r"),
        g: calc("g"),
        b: calc("b"),
        a: alpha
      });
    }
    // ======================= Status =======================
    isDark() {
      return this.getBrightness() < 128;
    }
    isLight() {
      return this.getBrightness() >= 128;
    }
    // ======================== MISC ========================
    equals(other) {
      return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
    }
    clone() {
      return this._c(this);
    }
    // ======================= Format =======================
    toHexString() {
      let hex2 = "#";
      const rHex = (this.r || 0).toString(16);
      hex2 += rHex.length === 2 ? rHex : "0" + rHex;
      const gHex = (this.g || 0).toString(16);
      hex2 += gHex.length === 2 ? gHex : "0" + gHex;
      const bHex = (this.b || 0).toString(16);
      hex2 += bHex.length === 2 ? bHex : "0" + bHex;
      if (typeof this.a === "number" && this.a >= 0 && this.a < 1) {
        const aHex = round(this.a * 255).toString(16);
        hex2 += aHex.length === 2 ? aHex : "0" + aHex;
      }
      return hex2;
    }
    /** CSS support color pattern */
    toHsl() {
      return {
        h: this.getHue(),
        s: this.getSaturation(),
        l: this.getLightness(),
        a: this.a
      };
    }
    /** CSS support color pattern */
    toHslString() {
      const h2 = this.getHue();
      const s = round(this.getSaturation() * 100);
      const l2 = round(this.getLightness() * 100);
      return this.a !== 1 ? `hsla(${h2},${s}%,${l2}%,${this.a})` : `hsl(${h2},${s}%,${l2}%)`;
    }
    /** Same as toHsb */
    toHsv() {
      return {
        h: this.getHue(),
        s: this.getSaturation(),
        v: this.getValue(),
        a: this.a
      };
    }
    toRgb() {
      return {
        r: this.r,
        g: this.g,
        b: this.b,
        a: this.a
      };
    }
    toRgbString() {
      return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
    }
    toString() {
      return this.toRgbString();
    }
    // ====================== Privates ======================
    /** Return a new FastColor object with one channel changed */
    _sc(rgb, value, max) {
      const clone = this.clone();
      clone[rgb] = limitRange(value, max);
      return clone;
    }
    _c(input) {
      return new this.constructor(input);
    }
    getMax() {
      if (typeof this._max === "undefined") {
        this._max = Math.max(this.r, this.g, this.b);
      }
      return this._max;
    }
    getMin() {
      if (typeof this._min === "undefined") {
        this._min = Math.min(this.r, this.g, this.b);
      }
      return this._min;
    }
    fromHexString(trimStr) {
      const withoutPrefix = trimStr.replace("#", "");
      function connectNum(index1, index2) {
        return parseInt(withoutPrefix[index1] + withoutPrefix[index2 || index1], 16);
      }
      if (withoutPrefix.length < 6) {
        this.r = connectNum(0);
        this.g = connectNum(1);
        this.b = connectNum(2);
        this.a = withoutPrefix[3] ? connectNum(3) / 255 : 1;
      } else {
        this.r = connectNum(0, 1);
        this.g = connectNum(2, 3);
        this.b = connectNum(4, 5);
        this.a = withoutPrefix[6] ? connectNum(6, 7) / 255 : 1;
      }
    }
    fromHsl({
      h: h2,
      s,
      l: l2,
      a
    }) {
      this._h = h2 % 360;
      this._s = s;
      this._l = l2;
      this.a = typeof a === "number" ? a : 1;
      if (s <= 0) {
        const rgb = round(l2 * 255);
        this.r = rgb;
        this.g = rgb;
        this.b = rgb;
      }
      let r = 0, g2 = 0, b2 = 0;
      const huePrime = h2 / 60;
      const chroma = (1 - Math.abs(2 * l2 - 1)) * s;
      const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
      if (huePrime >= 0 && huePrime < 1) {
        r = chroma;
        g2 = secondComponent;
      } else if (huePrime >= 1 && huePrime < 2) {
        r = secondComponent;
        g2 = chroma;
      } else if (huePrime >= 2 && huePrime < 3) {
        g2 = chroma;
        b2 = secondComponent;
      } else if (huePrime >= 3 && huePrime < 4) {
        g2 = secondComponent;
        b2 = chroma;
      } else if (huePrime >= 4 && huePrime < 5) {
        r = secondComponent;
        b2 = chroma;
      } else if (huePrime >= 5 && huePrime < 6) {
        r = chroma;
        b2 = secondComponent;
      }
      const lightnessModification = l2 - chroma / 2;
      this.r = round((r + lightnessModification) * 255);
      this.g = round((g2 + lightnessModification) * 255);
      this.b = round((b2 + lightnessModification) * 255);
    }
    fromHsv({
      h: h2,
      s,
      v: v2,
      a
    }) {
      this._h = h2 % 360;
      this._s = s;
      this._v = v2;
      this.a = typeof a === "number" ? a : 1;
      const vv = round(v2 * 255);
      this.r = vv;
      this.g = vv;
      this.b = vv;
      if (s <= 0) {
        return;
      }
      const hh = h2 / 60;
      const i = Math.floor(hh);
      const ff = hh - i;
      const p2 = round(v2 * (1 - s) * 255);
      const q2 = round(v2 * (1 - s * ff) * 255);
      const t2 = round(v2 * (1 - s * (1 - ff)) * 255);
      switch (i) {
        case 0:
          this.g = t2;
          this.b = p2;
          break;
        case 1:
          this.r = q2;
          this.b = p2;
          break;
        case 2:
          this.r = p2;
          this.b = t2;
          break;
        case 3:
          this.r = p2;
          this.g = q2;
          break;
        case 4:
          this.r = t2;
          this.g = p2;
          break;
        case 5:
        default:
          this.g = p2;
          this.b = q2;
          break;
      }
    }
    fromHsvString(trimStr) {
      const cells = splitColorStr(trimStr, parseHSVorHSL);
      this.fromHsv({
        h: cells[0],
        s: cells[1],
        v: cells[2],
        a: cells[3]
      });
    }
    fromHslString(trimStr) {
      const cells = splitColorStr(trimStr, parseHSVorHSL);
      this.fromHsl({
        h: cells[0],
        s: cells[1],
        l: cells[2],
        a: cells[3]
      });
    }
    fromRgbString(trimStr) {
      const cells = splitColorStr(trimStr, (num, txt) => (
        // Convert percentage to number. e.g. 50% -> 128
        txt.includes("%") ? round(num / 100 * 255) : num
      ));
      this.r = cells[0];
      this.g = cells[1];
      this.b = cells[2];
      this.a = cells[3];
    }
  }
  var _excluded$9 = ["b"], _excluded2 = ["v"];
  var getRoundNumber = function getRoundNumber2(value) {
    return Math.round(Number(value || 0));
  };
  var convertHsb2Hsv = function convertHsb2Hsv2(color) {
    if (color instanceof FastColor) {
      return color;
    }
    if (color && _typeof(color) === "object" && "h" in color && "b" in color) {
      var _ref = color, b2 = _ref.b, resets = _objectWithoutProperties(_ref, _excluded$9);
      return _objectSpread2(_objectSpread2({}, resets), {}, {
        v: b2
      });
    }
    if (typeof color === "string" && /hsb/.test(color)) {
      return color.replace(/hsb/, "hsv");
    }
    return color;
  };
  var Color = /* @__PURE__ */ function(_FastColor) {
    _inherits(Color2, _FastColor);
    var _super = _createSuper(Color2);
    function Color2(color) {
      _classCallCheck(this, Color2);
      return _super.call(this, convertHsb2Hsv(color));
    }
    _createClass(Color2, [{
      key: "toHsbString",
      value: function toHsbString() {
        var hsb = this.toHsb();
        var saturation = getRoundNumber(hsb.s * 100);
        var lightness = getRoundNumber(hsb.b * 100);
        var hue = getRoundNumber(hsb.h);
        var alpha = hsb.a;
        var hsbString = "hsb(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%)");
        var hsbaString = "hsba(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%, ").concat(alpha.toFixed(alpha === 0 ? 0 : 2), ")");
        return alpha === 1 ? hsbString : hsbaString;
      }
    }, {
      key: "toHsb",
      value: function toHsb() {
        var _this$toHsv = this.toHsv(), v2 = _this$toHsv.v, resets = _objectWithoutProperties(_this$toHsv, _excluded2);
        return _objectSpread2(_objectSpread2({}, resets), {}, {
          b: v2,
          a: this.a
        });
      }
    }]);
    return Color2;
  }(FastColor);
  var generateColor = function generateColor2(color) {
    if (color instanceof Color) {
      return color;
    }
    return new Color(color);
  };
  generateColor("#1677ff");
  const toHexFormat = (value, alpha) => (value === null || value === void 0 ? void 0 : value.replace(/[^\w/]/g, "").slice(0, alpha ? 8 : 6)) || "";
  const getHex = (value, alpha) => value ? toHexFormat(value, alpha) : "";
  let AggregationColor = /* @__PURE__ */ function() {
    function AggregationColor2(color) {
      _classCallCheck(this, AggregationColor2);
      var _a;
      this.cleared = false;
      if (color instanceof AggregationColor2) {
        this.metaColor = color.metaColor.clone();
        this.colors = (_a = color.colors) === null || _a === void 0 ? void 0 : _a.map((info) => ({
          color: new AggregationColor2(info.color),
          percent: info.percent
        }));
        this.cleared = color.cleared;
        return;
      }
      const isArray = Array.isArray(color);
      if (isArray && color.length) {
        this.colors = color.map((_ref) => {
          let {
            color: c2,
            percent
          } = _ref;
          return {
            color: new AggregationColor2(c2),
            percent
          };
        });
        this.metaColor = new Color(this.colors[0].color.metaColor);
      } else {
        this.metaColor = new Color(isArray ? "" : color);
      }
      if (!color || isArray && !this.colors) {
        this.metaColor = this.metaColor.setA(0);
        this.cleared = true;
      }
    }
    return _createClass(AggregationColor2, [{
      key: "toHsb",
      value: function toHsb() {
        return this.metaColor.toHsb();
      }
    }, {
      key: "toHsbString",
      value: function toHsbString() {
        return this.metaColor.toHsbString();
      }
    }, {
      key: "toHex",
      value: function toHex2() {
        return getHex(this.toHexString(), this.metaColor.a < 1);
      }
    }, {
      key: "toHexString",
      value: function toHexString() {
        return this.metaColor.toHexString();
      }
    }, {
      key: "toRgb",
      value: function toRgb() {
        return this.metaColor.toRgb();
      }
    }, {
      key: "toRgbString",
      value: function toRgbString() {
        return this.metaColor.toRgbString();
      }
    }, {
      key: "isGradient",
      value: function isGradient() {
        return !!this.colors && !this.cleared;
      }
    }, {
      key: "getColors",
      value: function getColors() {
        return this.colors || [{
          color: this,
          percent: 0
        }];
      }
    }, {
      key: "toCssString",
      value: function toCssString() {
        const {
          colors
        } = this;
        if (colors) {
          const colorsStr = colors.map((c2) => `${c2.color.toRgbString()} ${c2.percent}%`).join(", ");
          return `linear-gradient(90deg, ${colorsStr})`;
        }
        return this.metaColor.toRgbString();
      }
    }, {
      key: "equals",
      value: function equals(color) {
        if (!color || this.isGradient() !== color.isGradient()) {
          return false;
        }
        if (!this.isGradient()) {
          return this.toHexString() === color.toHexString();
        }
        return this.colors.length === color.colors.length && this.colors.every((c2, i) => {
          const target = color.colors[i];
          return c2.percent === target.percent && c2.color.equals(target.color);
        });
      }
    }]);
  }();
  var RightOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
  var RightOutlined = function RightOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: RightOutlined$1
    }));
  };
  var RefIcon$2 = /* @__PURE__ */ React__namespace.forwardRef(RightOutlined);
  var PanelContent = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, forceRender = props.forceRender, className = props.className, style2 = props.style, children = props.children, isActive2 = props.isActive, role = props.role, customizeClassNames = props.classNames, styles = props.styles;
    var _React$useState = React.useState(isActive2 || forceRender), _React$useState2 = _slicedToArray(_React$useState, 2), rendered = _React$useState2[0], setRendered = _React$useState2[1];
    React.useEffect(function() {
      if (forceRender || isActive2) {
        setRendered(true);
      }
    }, [forceRender, isActive2]);
    if (!rendered) {
      return null;
    }
    return /* @__PURE__ */ React.createElement("div", {
      ref,
      className: classNames("".concat(prefixCls, "-content"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-content-active"), isActive2), "".concat(prefixCls, "-content-inactive"), !isActive2), className),
      style: style2,
      role
    }, /* @__PURE__ */ React.createElement("div", {
      className: classNames("".concat(prefixCls, "-content-box"), customizeClassNames === null || customizeClassNames === void 0 ? void 0 : customizeClassNames.body),
      style: styles === null || styles === void 0 ? void 0 : styles.body
    }, children));
  });
  PanelContent.displayName = "PanelContent";
  var _excluded$8 = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "classNames", "styles", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"];
  var CollapsePanel$1 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var _props$showArrow = props.showArrow, showArrow = _props$showArrow === void 0 ? true : _props$showArrow, headerClass = props.headerClass, isActive2 = props.isActive, onItemClick = props.onItemClick, forceRender = props.forceRender, className = props.className, _props$classNames = props.classNames, customizeClassNames = _props$classNames === void 0 ? {} : _props$classNames, _props$styles = props.styles, styles = _props$styles === void 0 ? {} : _props$styles, prefixCls = props.prefixCls, collapsible = props.collapsible, accordion = props.accordion, panelKey = props.panelKey, extra = props.extra, header = props.header, expandIcon = props.expandIcon, openMotion = props.openMotion, destroyInactivePanel = props.destroyInactivePanel, children = props.children, resetProps = _objectWithoutProperties(props, _excluded$8);
    var disabled = collapsible === "disabled";
    var collapsibleHeader = collapsible === "header";
    var collapsibleIcon = collapsible === "icon";
    var ifExtraExist = extra !== null && extra !== void 0 && typeof extra !== "boolean";
    var handleItemClick = function handleItemClick2() {
      onItemClick === null || onItemClick === void 0 || onItemClick(panelKey);
    };
    var handleKeyDown = function handleKeyDown2(e2) {
      if (e2.key === "Enter" || e2.keyCode === KeyCode.ENTER || e2.which === KeyCode.ENTER) {
        handleItemClick();
      }
    };
    var iconNode = typeof expandIcon === "function" ? expandIcon(props) : /* @__PURE__ */ React.createElement("i", {
      className: "arrow"
    });
    if (iconNode) {
      iconNode = /* @__PURE__ */ React.createElement("div", {
        className: "".concat(prefixCls, "-expand-icon"),
        onClick: ["header", "icon"].includes(collapsible) ? handleItemClick : void 0
      }, iconNode);
    }
    var collapsePanelClassNames = classNames(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-item"), true), "".concat(prefixCls, "-item-active"), isActive2), "".concat(prefixCls, "-item-disabled"), disabled), className);
    var headerClassName = classNames(headerClass, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-header"), true), "".concat(prefixCls, "-header-collapsible-only"), collapsibleHeader), "".concat(prefixCls, "-icon-collapsible-only"), collapsibleIcon), customizeClassNames.header);
    var headerProps = {
      className: headerClassName,
      "aria-expanded": isActive2,
      "aria-disabled": disabled,
      onKeyDown: handleKeyDown,
      style: styles.header
    };
    if (!collapsibleHeader && !collapsibleIcon) {
      headerProps.onClick = handleItemClick;
      headerProps.role = accordion ? "tab" : "button";
      headerProps.tabIndex = disabled ? -1 : 0;
    }
    return /* @__PURE__ */ React.createElement("div", _extends({}, resetProps, {
      ref,
      className: collapsePanelClassNames
    }), /* @__PURE__ */ React.createElement("div", headerProps, showArrow && iconNode, /* @__PURE__ */ React.createElement("span", {
      className: "".concat(prefixCls, "-header-text"),
      onClick: collapsible === "header" ? handleItemClick : void 0
    }, header), ifExtraExist && /* @__PURE__ */ React.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra)), /* @__PURE__ */ React.createElement(CSSMotion, _extends({
      visible: isActive2,
      leavedClassName: "".concat(prefixCls, "-content-hidden")
    }, openMotion, {
      forceRender,
      removeOnLeave: destroyInactivePanel
    }), function(_ref, motionRef) {
      var motionClassName = _ref.className, motionStyle = _ref.style;
      return /* @__PURE__ */ React.createElement(PanelContent, {
        ref: motionRef,
        prefixCls,
        className: motionClassName,
        classNames: customizeClassNames,
        style: motionStyle,
        styles,
        isActive: isActive2,
        forceRender,
        role: accordion ? "tabpanel" : void 0
      }, children);
    }));
  });
  var _excluded$7 = ["children", "label", "key", "collapsible", "onItemClick", "destroyInactivePanel"];
  var convertItemsToNodes = function convertItemsToNodes2(items, props) {
    var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon;
    return items.map(function(item, index2) {
      var children = item.children, label = item.label, rawKey = item.key, rawCollapsible = item.collapsible, rawOnItemClick = item.onItemClick, rawDestroyInactivePanel = item.destroyInactivePanel, restProps = _objectWithoutProperties(item, _excluded$7);
      var key = String(rawKey !== null && rawKey !== void 0 ? rawKey : index2);
      var mergeCollapsible = rawCollapsible !== null && rawCollapsible !== void 0 ? rawCollapsible : collapsible;
      var mergeDestroyInactivePanel = rawDestroyInactivePanel !== null && rawDestroyInactivePanel !== void 0 ? rawDestroyInactivePanel : destroyInactivePanel;
      var handleItemClick = function handleItemClick2(value) {
        if (mergeCollapsible === "disabled") return;
        onItemClick(value);
        rawOnItemClick === null || rawOnItemClick === void 0 || rawOnItemClick(value);
      };
      var isActive2 = false;
      if (accordion) {
        isActive2 = activeKey[0] === key;
      } else {
        isActive2 = activeKey.indexOf(key) > -1;
      }
      return /* @__PURE__ */ React.createElement(CollapsePanel$1, _extends({}, restProps, {
        prefixCls,
        key,
        panelKey: key,
        isActive: isActive2,
        accordion,
        openMotion,
        expandIcon,
        header: label,
        collapsible: mergeCollapsible,
        onItemClick: handleItemClick,
        destroyInactivePanel: mergeDestroyInactivePanel
      }), children);
    });
  };
  var getNewChild = function getNewChild2(child, index2, props) {
    if (!child) return null;
    var prefixCls = props.prefixCls, accordion = props.accordion, collapsible = props.collapsible, destroyInactivePanel = props.destroyInactivePanel, onItemClick = props.onItemClick, activeKey = props.activeKey, openMotion = props.openMotion, expandIcon = props.expandIcon;
    var key = child.key || String(index2);
    var _child$props = child.props, header = _child$props.header, headerClass = _child$props.headerClass, childDestroyInactivePanel = _child$props.destroyInactivePanel, childCollapsible = _child$props.collapsible, childOnItemClick = _child$props.onItemClick;
    var isActive2 = false;
    if (accordion) {
      isActive2 = activeKey[0] === key;
    } else {
      isActive2 = activeKey.indexOf(key) > -1;
    }
    var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
    var handleItemClick = function handleItemClick2(value) {
      if (mergeCollapsible === "disabled") return;
      onItemClick(value);
      childOnItemClick === null || childOnItemClick === void 0 || childOnItemClick(value);
    };
    var childProps = {
      key,
      panelKey: key,
      header,
      headerClass,
      isActive: isActive2,
      prefixCls,
      destroyInactivePanel: childDestroyInactivePanel !== null && childDestroyInactivePanel !== void 0 ? childDestroyInactivePanel : destroyInactivePanel,
      openMotion,
      accordion,
      children: child.props.children,
      onItemClick: handleItemClick,
      expandIcon,
      collapsible: mergeCollapsible
    };
    if (typeof child.type === "string") {
      return child;
    }
    Object.keys(childProps).forEach(function(propName) {
      if (typeof childProps[propName] === "undefined") {
        delete childProps[propName];
      }
    });
    return /* @__PURE__ */ React.cloneElement(child, childProps);
  };
  function useItems(items, rawChildren, props) {
    if (Array.isArray(items)) {
      return convertItemsToNodes(items, props);
    }
    return toArray$2(rawChildren).map(function(child, index2) {
      return getNewChild(child, index2, props);
    });
  }
  function getActiveKeysArray(activeKey) {
    var currentActiveKey = activeKey;
    if (!Array.isArray(currentActiveKey)) {
      var activeKeyType = _typeof(currentActiveKey);
      currentActiveKey = activeKeyType === "number" || activeKeyType === "string" ? [currentActiveKey] : [];
    }
    return currentActiveKey.map(function(key) {
      return String(key);
    });
  }
  var Collapse$2 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-collapse" : _props$prefixCls, _props$destroyInactiv = props.destroyInactivePanel, destroyInactivePanel = _props$destroyInactiv === void 0 ? false : _props$destroyInactiv, style2 = props.style, accordion = props.accordion, className = props.className, children = props.children, collapsible = props.collapsible, openMotion = props.openMotion, expandIcon = props.expandIcon, rawActiveKey = props.activeKey, defaultActiveKey = props.defaultActiveKey, _onChange = props.onChange, items = props.items;
    var collapseClassName = classNames(prefixCls, className);
    var _useMergedState = useMergedState([], {
      value: rawActiveKey,
      onChange: function onChange(v2) {
        return _onChange === null || _onChange === void 0 ? void 0 : _onChange(v2);
      },
      defaultValue: defaultActiveKey,
      postState: getActiveKeysArray
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), activeKey = _useMergedState2[0], setActiveKey = _useMergedState2[1];
    var onItemClick = function onItemClick2(key) {
      return setActiveKey(function() {
        if (accordion) {
          return activeKey[0] === key ? [] : [key];
        }
        var index2 = activeKey.indexOf(key);
        var isActive2 = index2 > -1;
        if (isActive2) {
          return activeKey.filter(function(item) {
            return item !== key;
          });
        }
        return [].concat(_toConsumableArray(activeKey), [key]);
      });
    };
    warningOnce(!children, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
    var mergedChildren = useItems(items, children, {
      prefixCls,
      accordion,
      openMotion,
      expandIcon,
      collapsible,
      destroyInactivePanel,
      onItemClick,
      activeKey
    });
    return /* @__PURE__ */ React.createElement("div", _extends({
      ref,
      className: collapseClassName,
      style: style2,
      role: accordion ? "tablist" : void 0
    }, pickAttrs(props, {
      aria: true,
      data: true
    })), mergedChildren);
  });
  const Collapse$3 = Object.assign(Collapse$2, {
    /**
     * @deprecated use `items` instead, will be removed in `v4.0.0`
     */
    Panel: CollapsePanel$1
  });
  Collapse$3.Panel;
  const CollapsePanel = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const {
      prefixCls: customizePrefixCls,
      className,
      showArrow = true
    } = props;
    const prefixCls = getPrefixCls("collapse", customizePrefixCls);
    const collapsePanelClassName = classNames({
      [`${prefixCls}-no-arrow`]: !showArrow
    }, className);
    return /* @__PURE__ */ React__namespace.createElement(Collapse$3.Panel, Object.assign({
      ref
    }, props, {
      prefixCls,
      className: collapsePanelClassName
    }));
  });
  const genCollapseMotion = (token2) => ({
    [token2.componentCls]: {
      // For common/openAnimation
      [`${token2.antCls}-motion-collapse-legacy`]: {
        overflow: "hidden",
        "&-active": {
          transition: `height ${token2.motionDurationMid} ${token2.motionEaseInOut},
        opacity ${token2.motionDurationMid} ${token2.motionEaseInOut} !important`
        }
      },
      [`${token2.antCls}-motion-collapse`]: {
        overflow: "hidden",
        transition: `height ${token2.motionDurationMid} ${token2.motionEaseInOut},
        opacity ${token2.motionDurationMid} ${token2.motionEaseInOut} !important`
      }
    }
  });
  const initMotionCommon = (duration) => ({
    animationDuration: duration,
    animationFillMode: "both"
  });
  const initMotionCommonLeave = (duration) => ({
    animationDuration: duration,
    animationFillMode: "both"
  });
  const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
    let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    const sameLevelPrefix = sameLevel ? "&" : "";
    return {
      [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
        animationPlayState: "paused"
      }),
      [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
        animationPlayState: "paused"
      }),
      [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
        animationName: inKeyframes,
        animationPlayState: "running"
      },
      [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
        animationName: outKeyframes,
        animationPlayState: "running",
        pointerEvents: "none"
      }
    };
  };
  const fadeIn = new Keyframe("antFadeIn", {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  });
  const fadeOut = new Keyframe("antFadeOut", {
    "0%": {
      opacity: 1
    },
    "100%": {
      opacity: 0
    }
  });
  const initFadeMotion = function(token2) {
    let sameLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const {
      antCls
    } = token2;
    const motionCls = `${antCls}-fade`;
    const sameLevelPrefix = sameLevel ? "&" : "";
    return [initMotion(motionCls, fadeIn, fadeOut, token2.motionDurationMid, sameLevel), {
      [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
        opacity: 0,
        animationTimingFunction: "linear"
      },
      [`${sameLevelPrefix}${motionCls}-leave`]: {
        animationTimingFunction: "linear"
      }
    }];
  };
  const zoomIn = new Keyframe("antZoomIn", {
    "0%": {
      transform: "scale(0.2)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1
    }
  });
  const zoomOut = new Keyframe("antZoomOut", {
    "0%": {
      transform: "scale(1)"
    },
    "100%": {
      transform: "scale(0.2)",
      opacity: 0
    }
  });
  const zoomBigIn = new Keyframe("antZoomBigIn", {
    "0%": {
      transform: "scale(0.8)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1
    }
  });
  const zoomBigOut = new Keyframe("antZoomBigOut", {
    "0%": {
      transform: "scale(1)"
    },
    "100%": {
      transform: "scale(0.8)",
      opacity: 0
    }
  });
  const zoomUpIn = new Keyframe("antZoomUpIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "50% 0%"
    }
  });
  const zoomUpOut = new Keyframe("antZoomUpOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "50% 0%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 0%",
      opacity: 0
    }
  });
  const zoomLeftIn = new Keyframe("antZoomLeftIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "0% 50%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "0% 50%"
    }
  });
  const zoomLeftOut = new Keyframe("antZoomLeftOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "0% 50%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "0% 50%",
      opacity: 0
    }
  });
  const zoomRightIn = new Keyframe("antZoomRightIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "100% 50%"
    }
  });
  const zoomRightOut = new Keyframe("antZoomRightOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "100% 50%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0
    }
  });
  const zoomDownIn = new Keyframe("antZoomDownIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "50% 100%"
    }
  });
  const zoomDownOut = new Keyframe("antZoomDownOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "50% 100%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0
    }
  });
  const zoomMotion = {
    zoom: {
      inKeyframes: zoomIn,
      outKeyframes: zoomOut
    },
    "zoom-big": {
      inKeyframes: zoomBigIn,
      outKeyframes: zoomBigOut
    },
    "zoom-big-fast": {
      inKeyframes: zoomBigIn,
      outKeyframes: zoomBigOut
    },
    "zoom-left": {
      inKeyframes: zoomLeftIn,
      outKeyframes: zoomLeftOut
    },
    "zoom-right": {
      inKeyframes: zoomRightIn,
      outKeyframes: zoomRightOut
    },
    "zoom-up": {
      inKeyframes: zoomUpIn,
      outKeyframes: zoomUpOut
    },
    "zoom-down": {
      inKeyframes: zoomDownIn,
      outKeyframes: zoomDownOut
    }
  };
  const initZoomMotion = (token2, motionName) => {
    const {
      antCls
    } = token2;
    const motionCls = `${antCls}-${motionName}`;
    const {
      inKeyframes,
      outKeyframes
    } = zoomMotion[motionName];
    return [initMotion(motionCls, inKeyframes, outKeyframes, token2.motionDurationFast), {
      [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
        transform: "scale(0)",
        opacity: 0,
        animationTimingFunction: token2.motionEaseOutCirc,
        "&-prepare": {
          transform: "none"
        }
      },
      [`${motionCls}-leave`]: {
        animationTimingFunction: token2.motionEaseInOutCirc
      }
    }];
  };
  const genBaseStyle$1 = (token2) => {
    const {
      componentCls,
      contentBg,
      padding,
      headerBg,
      headerPadding,
      collapseHeaderPaddingSM,
      collapseHeaderPaddingLG,
      collapsePanelBorderRadius,
      lineWidth,
      lineType,
      colorBorder,
      colorText,
      colorTextHeading,
      colorTextDisabled,
      fontSizeLG,
      lineHeight,
      lineHeightLG,
      marginSM,
      paddingSM,
      paddingLG,
      paddingXS,
      motionDurationSlow,
      fontSizeIcon,
      contentPadding,
      fontHeight,
      fontHeightLG
    } = token2;
    const borderBase = `${unit$1(lineWidth)} ${lineType} ${colorBorder}`;
    return {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
        backgroundColor: headerBg,
        border: borderBase,
        borderRadius: collapsePanelBorderRadius,
        "&-rtl": {
          direction: "rtl"
        },
        [`& > ${componentCls}-item`]: {
          borderBottom: borderBase,
          "&:last-child": {
            [`
            &,
            & > ${componentCls}-header`]: {
              borderRadius: `0 0 ${unit$1(collapsePanelBorderRadius)} ${unit$1(collapsePanelBorderRadius)}`
            }
          },
          [`> ${componentCls}-header`]: {
            position: "relative",
            // Compatible with old version of antd, should remove in next version
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "flex-start",
            padding: headerPadding,
            color: colorTextHeading,
            lineHeight,
            cursor: "pointer",
            transition: `all ${motionDurationSlow}, visibility 0s`,
            [`> ${componentCls}-header-text`]: {
              flex: "auto"
            },
            "&:focus": {
              outline: "none"
            },
            // >>>>> Arrow
            [`${componentCls}-expand-icon`]: {
              height: fontHeight,
              display: "flex",
              alignItems: "center",
              paddingInlineEnd: marginSM
            },
            [`${componentCls}-arrow`]: Object.assign(Object.assign({}, resetIcon()), {
              fontSize: fontSizeIcon,
              // when `transform: rotate()` is applied to icon's root element
              transition: `transform ${motionDurationSlow}`,
              // when `transform: rotate()` is applied to icon's child element
              svg: {
                transition: `transform ${motionDurationSlow}`
              }
            }),
            // >>>>> Text
            [`${componentCls}-header-text`]: {
              marginInlineEnd: "auto"
            }
          },
          [`${componentCls}-icon-collapsible-only`]: {
            cursor: "unset",
            [`${componentCls}-expand-icon`]: {
              cursor: "pointer"
            }
          }
        },
        [`${componentCls}-content`]: {
          color: colorText,
          backgroundColor: contentBg,
          borderTop: borderBase,
          [`& > ${componentCls}-content-box`]: {
            padding: contentPadding
          },
          "&-hidden": {
            display: "none"
          }
        },
        "&-small": {
          [`> ${componentCls}-item`]: {
            [`> ${componentCls}-header`]: {
              padding: collapseHeaderPaddingSM,
              paddingInlineStart: paddingXS,
              [`> ${componentCls}-expand-icon`]: {
                // Arrow offset
                marginInlineStart: token2.calc(paddingSM).sub(paddingXS).equal()
              }
            },
            [`> ${componentCls}-content > ${componentCls}-content-box`]: {
              padding: paddingSM
            }
          }
        },
        "&-large": {
          [`> ${componentCls}-item`]: {
            fontSize: fontSizeLG,
            lineHeight: lineHeightLG,
            [`> ${componentCls}-header`]: {
              padding: collapseHeaderPaddingLG,
              paddingInlineStart: padding,
              [`> ${componentCls}-expand-icon`]: {
                height: fontHeightLG,
                // Arrow offset
                marginInlineStart: token2.calc(paddingLG).sub(padding).equal()
              }
            },
            [`> ${componentCls}-content > ${componentCls}-content-box`]: {
              padding: paddingLG
            }
          }
        },
        [`${componentCls}-item:last-child`]: {
          borderBottom: 0,
          [`> ${componentCls}-content`]: {
            borderRadius: `0 0 ${unit$1(collapsePanelBorderRadius)} ${unit$1(collapsePanelBorderRadius)}`
          }
        },
        [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
          [`
          &,
          & > .arrow
        `]: {
            color: colorTextDisabled,
            cursor: "not-allowed"
          }
        },
        // ========================== Icon Position ==========================
        [`&${componentCls}-icon-position-end`]: {
          [`& > ${componentCls}-item`]: {
            [`> ${componentCls}-header`]: {
              [`${componentCls}-expand-icon`]: {
                order: 1,
                paddingInlineEnd: 0,
                paddingInlineStart: marginSM
              }
            }
          }
        }
      })
    };
  };
  const genArrowStyle = (token2) => {
    const {
      componentCls
    } = token2;
    const fixedSelector = `> ${componentCls}-item > ${componentCls}-header ${componentCls}-arrow`;
    return {
      [`${componentCls}-rtl`]: {
        [fixedSelector]: {
          transform: `rotate(180deg)`
        }
      }
    };
  };
  const genBorderlessStyle = (token2) => {
    const {
      componentCls,
      headerBg,
      paddingXXS,
      colorBorder
    } = token2;
    return {
      [`${componentCls}-borderless`]: {
        backgroundColor: headerBg,
        border: 0,
        [`> ${componentCls}-item`]: {
          borderBottom: `1px solid ${colorBorder}`
        },
        [`
        > ${componentCls}-item:last-child,
        > ${componentCls}-item:last-child ${componentCls}-header
      `]: {
          borderRadius: 0
        },
        [`> ${componentCls}-item:last-child`]: {
          borderBottom: 0
        },
        [`> ${componentCls}-item > ${componentCls}-content`]: {
          backgroundColor: "transparent",
          borderTop: 0
        },
        [`> ${componentCls}-item > ${componentCls}-content > ${componentCls}-content-box`]: {
          paddingTop: paddingXXS
        }
      }
    };
  };
  const genGhostStyle = (token2) => {
    const {
      componentCls,
      paddingSM
    } = token2;
    return {
      [`${componentCls}-ghost`]: {
        backgroundColor: "transparent",
        border: 0,
        [`> ${componentCls}-item`]: {
          borderBottom: 0,
          [`> ${componentCls}-content`]: {
            backgroundColor: "transparent",
            border: 0,
            [`> ${componentCls}-content-box`]: {
              paddingBlock: paddingSM
            }
          }
        }
      }
    };
  };
  const prepareComponentToken$6 = (token2) => ({
    headerPadding: `${token2.paddingSM}px ${token2.padding}px`,
    headerBg: token2.colorFillAlter,
    contentPadding: `${token2.padding}px 16px`,
    // Fixed Value
    contentBg: token2.colorBgContainer
  });
  const useStyle$8 = genStyleHooks("Collapse", (token2) => {
    const collapseToken = merge(token2, {
      collapseHeaderPaddingSM: `${unit$1(token2.paddingXS)} ${unit$1(token2.paddingSM)}`,
      collapseHeaderPaddingLG: `${unit$1(token2.padding)} ${unit$1(token2.paddingLG)}`,
      collapsePanelBorderRadius: token2.borderRadiusLG
    });
    return [genBaseStyle$1(collapseToken), genBorderlessStyle(collapseToken), genGhostStyle(collapseToken), genArrowStyle(collapseToken), genCollapseMotion(collapseToken)];
  }, prepareComponentToken$6);
  const Collapse = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      getPrefixCls,
      direction,
      collapse
    } = React__namespace.useContext(ConfigContext);
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style: style2,
      bordered = true,
      ghost,
      size: customizeSize,
      expandIconPosition = "start",
      children,
      expandIcon
    } = props;
    const mergedSize = useSize((ctx) => {
      var _a;
      return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : ctx) !== null && _a !== void 0 ? _a : "middle";
    });
    const prefixCls = getPrefixCls("collapse", customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$8(prefixCls);
    const mergedExpandIconPosition = React__namespace.useMemo(() => {
      if (expandIconPosition === "left") {
        return "start";
      }
      return expandIconPosition === "right" ? "end" : expandIconPosition;
    }, [expandIconPosition]);
    const mergedExpandIcon = expandIcon !== null && expandIcon !== void 0 ? expandIcon : collapse === null || collapse === void 0 ? void 0 : collapse.expandIcon;
    const renderExpandIcon = React__namespace.useCallback(function() {
      let panelProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const icon = typeof mergedExpandIcon === "function" ? mergedExpandIcon(panelProps) : /* @__PURE__ */ React__namespace.createElement(RefIcon$2, {
        rotate: panelProps.isActive ? 90 : void 0,
        "aria-label": panelProps.isActive ? "expanded" : "collapsed"
      });
      return cloneElement(icon, () => {
        var _a;
        return {
          className: classNames((_a = icon === null || icon === void 0 ? void 0 : icon.props) === null || _a === void 0 ? void 0 : _a.className, `${prefixCls}-arrow`)
        };
      });
    }, [mergedExpandIcon, prefixCls]);
    const collapseClassName = classNames(`${prefixCls}-icon-position-${mergedExpandIconPosition}`, {
      [`${prefixCls}-borderless`]: !bordered,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-ghost`]: !!ghost,
      [`${prefixCls}-${mergedSize}`]: mergedSize !== "middle"
    }, collapse === null || collapse === void 0 ? void 0 : collapse.className, className, rootClassName, hashId, cssVarCls);
    const openMotion = Object.assign(Object.assign({}, initCollapseMotion(rootPrefixCls)), {
      motionAppear: false,
      leavedClassName: `${prefixCls}-content-hidden`
    });
    const items = React__namespace.useMemo(() => children ? toArray$2(children).map((child, index2) => {
      var _a, _b;
      if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) {
        const key = (_b = child.key) !== null && _b !== void 0 ? _b : String(index2);
        const {
          disabled,
          collapsible
        } = child.props;
        const childProps = Object.assign(Object.assign({}, omit(child.props, ["disabled"])), {
          key,
          collapsible: collapsible !== null && collapsible !== void 0 ? collapsible : disabled ? "disabled" : void 0
        });
        return cloneElement(child, childProps);
      }
      return child;
    }) : null, [children]);
    return wrapCSSVar(
      // @ts-ignore
      /* @__PURE__ */ React__namespace.createElement(Collapse$3, Object.assign({
        ref,
        openMotion
      }, omit(props, ["rootClassName"]), {
        expandIcon: renderExpandIcon,
        prefixCls,
        className: collapseClassName,
        style: Object.assign(Object.assign({}, collapse === null || collapse === void 0 ? void 0 : collapse.style), style2)
      }), items)
    );
  });
  const Collapse$1 = Object.assign(Collapse, {
    Panel: CollapsePanel
  });
  const isBright = (value, bgColorToken) => {
    const {
      r,
      g: g2,
      b: b2,
      a
    } = value.toRgb();
    const hsv = new Color(value.toRgbString()).onBackground(bgColorToken).toHsv();
    if (a <= 0.5) {
      return hsv.v > 0.5;
    }
    return r * 0.299 + g2 * 0.587 + b2 * 0.114 > 192;
  };
  const prepareToken$1 = (token2) => {
    const {
      paddingInline,
      onlyIconSize,
      paddingBlock
    } = token2;
    const buttonToken = merge(token2, {
      buttonPaddingHorizontal: paddingInline,
      buttonPaddingVertical: paddingBlock,
      buttonIconOnlyFontSize: onlyIconSize
    });
    return buttonToken;
  };
  const prepareComponentToken$5 = (token2) => {
    var _a, _b, _c, _d, _e, _f;
    const contentFontSize = (_a = token2.contentFontSize) !== null && _a !== void 0 ? _a : token2.fontSize;
    const contentFontSizeSM = (_b = token2.contentFontSizeSM) !== null && _b !== void 0 ? _b : token2.fontSize;
    const contentFontSizeLG = (_c = token2.contentFontSizeLG) !== null && _c !== void 0 ? _c : token2.fontSizeLG;
    const contentLineHeight = (_d = token2.contentLineHeight) !== null && _d !== void 0 ? _d : getLineHeight(contentFontSize);
    const contentLineHeightSM = (_e = token2.contentLineHeightSM) !== null && _e !== void 0 ? _e : getLineHeight(contentFontSizeSM);
    const contentLineHeightLG = (_f = token2.contentLineHeightLG) !== null && _f !== void 0 ? _f : getLineHeight(contentFontSizeLG);
    const solidTextColor = isBright(new AggregationColor(token2.colorBgSolid), "#fff") ? "#000" : "#fff";
    return {
      fontWeight: 400,
      defaultShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlTmpOutline}`,
      primaryShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlOutline}`,
      dangerShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.colorErrorOutline}`,
      primaryColor: token2.colorTextLightSolid,
      dangerColor: token2.colorTextLightSolid,
      borderColorDisabled: token2.colorBorder,
      defaultGhostColor: token2.colorBgContainer,
      ghostBg: "transparent",
      defaultGhostBorderColor: token2.colorBgContainer,
      paddingInline: token2.paddingContentHorizontal - token2.lineWidth,
      paddingInlineLG: token2.paddingContentHorizontal - token2.lineWidth,
      paddingInlineSM: 8 - token2.lineWidth,
      onlyIconSize: token2.fontSizeLG,
      onlyIconSizeSM: token2.fontSizeLG - 2,
      onlyIconSizeLG: token2.fontSizeLG + 2,
      groupBorderColor: token2.colorPrimaryHover,
      linkHoverBg: "transparent",
      textTextColor: token2.colorText,
      textTextHoverColor: token2.colorText,
      textTextActiveColor: token2.colorText,
      textHoverBg: token2.colorFillTertiary,
      defaultColor: token2.colorText,
      defaultBg: token2.colorBgContainer,
      defaultBorderColor: token2.colorBorder,
      defaultBorderColorDisabled: token2.colorBorder,
      defaultHoverBg: token2.colorBgContainer,
      defaultHoverColor: token2.colorPrimaryHover,
      defaultHoverBorderColor: token2.colorPrimaryHover,
      defaultActiveBg: token2.colorBgContainer,
      defaultActiveColor: token2.colorPrimaryActive,
      defaultActiveBorderColor: token2.colorPrimaryActive,
      solidTextColor,
      contentFontSize,
      contentFontSizeSM,
      contentFontSizeLG,
      contentLineHeight,
      contentLineHeightSM,
      contentLineHeightLG,
      paddingBlock: Math.max((token2.controlHeight - contentFontSize * contentLineHeight) / 2 - token2.lineWidth, 0),
      paddingBlockSM: Math.max((token2.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token2.lineWidth, 0),
      paddingBlockLG: Math.max((token2.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token2.lineWidth, 0)
    };
  };
  const genSharedButtonStyle = (token2) => {
    const {
      componentCls,
      iconCls,
      fontWeight
    } = token2;
    return {
      [componentCls]: {
        outline: "none",
        position: "relative",
        display: "inline-flex",
        gap: token2.marginXS,
        alignItems: "center",
        justifyContent: "center",
        fontWeight,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        background: "transparent",
        border: `${unit$1(token2.lineWidth)} ${token2.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        color: token2.colorText,
        "&:disabled > *": {
          pointerEvents: "none"
        },
        "> span": {
          display: "inline-block"
        },
        [`${componentCls}-icon`]: {
          lineHeight: 1
        },
        "> a": {
          color: "currentColor"
        },
        "&:not(:disabled)": Object.assign({}, genFocusStyle(token2)),
        [`&${componentCls}-two-chinese-chars::first-letter`]: {
          letterSpacing: "0.34em"
        },
        [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
          marginInlineEnd: "-0.34em",
          letterSpacing: "0.34em"
        },
        // iconPosition="end"
        "&-icon-end": {
          flexDirection: "row-reverse"
        }
      }
    };
  };
  const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
    [`&:not(:disabled):not(${btnCls}-disabled)`]: {
      "&:hover": hoverStyle,
      "&:active": activeStyle
    }
  });
  const genCircleButtonStyle = (token2) => ({
    minWidth: token2.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%"
  });
  const genRoundButtonStyle = (token2) => ({
    borderRadius: token2.controlHeight,
    paddingInlineStart: token2.calc(token2.controlHeight).div(2).equal(),
    paddingInlineEnd: token2.calc(token2.controlHeight).div(2).equal()
  });
  const genDisabledStyle = (token2) => ({
    cursor: "not-allowed",
    borderColor: token2.borderColorDisabled,
    color: token2.colorTextDisabled,
    background: token2.colorBgContainerDisabled,
    boxShadow: "none"
  });
  const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
    [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
      color: textColor || void 0,
      background,
      borderColor: borderColor || void 0,
      boxShadow: "none"
    }, genHoverActiveButtonStyle(btnCls, Object.assign({
      background
    }, hoverStyle), Object.assign({
      background
    }, activeStyle))), {
      "&:disabled": {
        cursor: "not-allowed",
        color: textColorDisabled || void 0,
        borderColor: borderColorDisabled || void 0
      }
    })
  });
  const genSolidDisabledButtonStyle = (token2) => ({
    [`&:disabled, &${token2.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(token2))
  });
  const genPureDisabledButtonStyle = (token2) => ({
    [`&:disabled, &${token2.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: token2.colorTextDisabled
    }
  });
  const genVariantButtonStyle = (token2, hoverStyle, activeStyle, variant) => {
    const isPureDisabled = variant && ["link", "text"].includes(variant);
    const genDisabledButtonStyle = isPureDisabled ? genPureDisabledButtonStyle : genSolidDisabledButtonStyle;
    return Object.assign(Object.assign({}, genDisabledButtonStyle(token2)), genHoverActiveButtonStyle(token2.componentCls, hoverStyle, activeStyle));
  };
  const genSolidButtonStyle = (token2, textColor, background, hoverStyle, activeStyle) => ({
    [`&${token2.componentCls}-variant-solid`]: Object.assign({
      color: textColor,
      background
    }, genVariantButtonStyle(token2, hoverStyle, activeStyle))
  });
  const genOutlinedDashedButtonStyle = (token2, borderColor, background, hoverStyle, activeStyle) => ({
    [`&${token2.componentCls}-variant-outlined, &${token2.componentCls}-variant-dashed`]: Object.assign({
      borderColor,
      background
    }, genVariantButtonStyle(token2, hoverStyle, activeStyle))
  });
  const genDashedButtonStyle = (token2) => ({
    [`&${token2.componentCls}-variant-dashed`]: {
      borderStyle: "dashed"
    }
  });
  const genFilledButtonStyle = (token2, background, hoverStyle, activeStyle) => ({
    [`&${token2.componentCls}-variant-filled`]: Object.assign({
      boxShadow: "none",
      background
    }, genVariantButtonStyle(token2, hoverStyle, activeStyle))
  });
  const genTextLinkButtonStyle = (token2, textColor, variant, hoverStyle, activeStyle) => ({
    [`&${token2.componentCls}-variant-${variant}`]: Object.assign({
      color: textColor,
      boxShadow: "none"
    }, genVariantButtonStyle(token2, hoverStyle, activeStyle, variant))
  });
  const genDefaultButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    color: token2.defaultColor,
    boxShadow: token2.defaultShadow
  }, genSolidButtonStyle(token2, token2.solidTextColor, token2.colorBgSolid, {
    background: token2.colorBgSolidHover
  }, {
    background: token2.colorBgSolidActive
  })), genDashedButtonStyle(token2)), genFilledButtonStyle(token2, token2.colorFillTertiary, {
    background: token2.colorFillSecondary
  }, {
    background: token2.colorFill
  })), genTextLinkButtonStyle(token2, token2.textTextColor, "link", {
    color: token2.colorLinkHover,
    background: token2.linkHoverBg
  }, {
    color: token2.colorLinkActive
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.defaultGhostColor, token2.defaultGhostBorderColor, token2.colorTextDisabled, token2.colorBorder));
  const genPrimaryButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    color: token2.colorPrimary,
    boxShadow: token2.primaryShadow
  }, genOutlinedDashedButtonStyle(token2, token2.colorPrimary, token2.colorBgContainer, {
    color: token2.colorPrimaryTextHover,
    borderColor: token2.colorPrimaryHover,
    background: token2.colorBgContainer
  }, {
    color: token2.colorPrimaryTextActive,
    borderColor: token2.colorPrimaryActive,
    background: token2.colorBgContainer
  })), genDashedButtonStyle(token2)), genFilledButtonStyle(token2, token2.colorPrimaryBg, {
    background: token2.colorPrimaryBgHover
  }, {
    background: token2.colorPrimaryBorder
  })), genTextLinkButtonStyle(token2, token2.colorLink, "text", {
    color: token2.colorPrimaryTextHover,
    background: token2.colorPrimaryBg
  }, {
    color: token2.colorPrimaryTextActive,
    background: token2.colorPrimaryBorder
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorPrimary, token2.colorPrimary, token2.colorTextDisabled, token2.colorBorder, {
    color: token2.colorPrimaryHover,
    borderColor: token2.colorPrimaryHover
  }, {
    color: token2.colorPrimaryActive,
    borderColor: token2.colorPrimaryActive
  }));
  const genDangerousStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    color: token2.colorError,
    boxShadow: token2.dangerShadow
  }, genSolidButtonStyle(token2, token2.dangerColor, token2.colorError, {
    background: token2.colorErrorHover
  }, {
    background: token2.colorErrorActive
  })), genOutlinedDashedButtonStyle(token2, token2.colorError, token2.colorBgContainer, {
    color: token2.colorErrorHover,
    borderColor: token2.colorErrorBorderHover
  }, {
    color: token2.colorErrorActive,
    borderColor: token2.colorErrorActive
  })), genDashedButtonStyle(token2)), genFilledButtonStyle(token2, token2.colorErrorBg, {
    background: token2.colorErrorBgFilledHover
  }, {
    background: token2.colorErrorBgActive
  })), genTextLinkButtonStyle(token2, token2.colorError, "text", {
    color: token2.colorErrorHover,
    background: token2.colorErrorBg
  }, {
    color: token2.colorErrorHover,
    background: token2.colorErrorBgActive
  })), genTextLinkButtonStyle(token2, token2.colorError, "link", {
    color: token2.colorErrorHover
  }, {
    color: token2.colorErrorActive
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder, {
    color: token2.colorErrorHover,
    borderColor: token2.colorErrorHover
  }, {
    color: token2.colorErrorActive,
    borderColor: token2.colorErrorActive
  }));
  const genColorButtonStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [`${componentCls}-color-default`]: genDefaultButtonStyle(token2),
      [`${componentCls}-color-primary`]: genPrimaryButtonStyle(token2),
      [`${componentCls}-color-dangerous`]: genDangerousStyle(token2)
    };
  };
  const genCompatibleButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign({}, genOutlinedDashedButtonStyle(token2, token2.defaultBorderColor, token2.defaultBg, {
    color: token2.defaultHoverColor,
    borderColor: token2.defaultHoverBorderColor,
    background: token2.defaultHoverBg
  }, {
    color: token2.defaultActiveColor,
    borderColor: token2.defaultActiveBorderColor,
    background: token2.defaultActiveBg
  })), genTextLinkButtonStyle(token2, token2.textTextColor, "text", {
    color: token2.textTextHoverColor,
    background: token2.textHoverBg
  }, {
    color: token2.textTextActiveColor,
    background: token2.colorBgTextActive
  })), genSolidButtonStyle(token2, token2.primaryColor, token2.colorPrimary, {
    background: token2.colorPrimaryHover,
    color: token2.primaryColor
  }, {
    background: token2.colorPrimaryActive,
    color: token2.primaryColor
  })), genTextLinkButtonStyle(token2, token2.colorLink, "link", {
    color: token2.colorLinkHover,
    background: token2.linkHoverBg
  }, {
    color: token2.colorLinkActive
  }));
  const genButtonStyle = function(token2) {
    let prefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
      componentCls,
      controlHeight,
      fontSize,
      lineHeight,
      borderRadius,
      buttonPaddingHorizontal,
      iconCls,
      buttonPaddingVertical
    } = token2;
    const iconOnlyCls = `${componentCls}-icon-only`;
    return [
      {
        [prefixCls]: {
          fontSize,
          lineHeight,
          height: controlHeight,
          padding: `${unit$1(buttonPaddingVertical)} ${unit$1(buttonPaddingHorizontal)}`,
          borderRadius,
          [`&${iconOnlyCls}`]: {
            width: controlHeight,
            paddingInline: 0,
            // make `btn-icon-only` not too narrow
            [`&${componentCls}-compact-item`]: {
              flex: "none"
            },
            [`&${componentCls}-round`]: {
              width: "auto"
            },
            [iconCls]: {
              fontSize: token2.buttonIconOnlyFontSize
            }
          },
          // Loading
          [`&${componentCls}-loading`]: {
            opacity: token2.opacityLoading,
            cursor: "default"
          },
          [`${componentCls}-loading-icon`]: {
            transition: `width ${token2.motionDurationSlow} ${token2.motionEaseInOut}, opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`
          }
        }
      },
      // Shape - patch prefixCls again to override solid border radius style
      {
        [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token2)
      },
      {
        [`${componentCls}${componentCls}-round${prefixCls}`]: genRoundButtonStyle(token2)
      }
    ];
  };
  const genSizeBaseButtonStyle = (token2) => {
    const baseToken = merge(token2, {
      fontSize: token2.contentFontSize,
      lineHeight: token2.contentLineHeight
    });
    return genButtonStyle(baseToken, token2.componentCls);
  };
  const genSizeSmallButtonStyle = (token2) => {
    const smallToken = merge(token2, {
      controlHeight: token2.controlHeightSM,
      fontSize: token2.contentFontSizeSM,
      lineHeight: token2.contentLineHeightSM,
      padding: token2.paddingXS,
      buttonPaddingHorizontal: token2.paddingInlineSM,
      buttonPaddingVertical: token2.paddingBlockSM,
      borderRadius: token2.borderRadiusSM,
      buttonIconOnlyFontSize: token2.onlyIconSizeSM
    });
    return genButtonStyle(smallToken, `${token2.componentCls}-sm`);
  };
  const genSizeLargeButtonStyle = (token2) => {
    const largeToken = merge(token2, {
      controlHeight: token2.controlHeightLG,
      fontSize: token2.contentFontSizeLG,
      lineHeight: token2.contentLineHeightLG,
      buttonPaddingHorizontal: token2.paddingInlineLG,
      buttonPaddingVertical: token2.paddingBlockLG,
      borderRadius: token2.borderRadiusLG,
      buttonIconOnlyFontSize: token2.onlyIconSizeLG
    });
    return genButtonStyle(largeToken, `${token2.componentCls}-lg`);
  };
  const genBlockButtonStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [componentCls]: {
        [`&${componentCls}-block`]: {
          width: "100%"
        }
      }
    };
  };
  const useStyle$7 = genStyleHooks("Button", (token2) => {
    const buttonToken = prepareToken$1(token2);
    return [
      // Shared
      genSharedButtonStyle(buttonToken),
      // Size
      genSizeBaseButtonStyle(buttonToken),
      genSizeSmallButtonStyle(buttonToken),
      genSizeLargeButtonStyle(buttonToken),
      // Block
      genBlockButtonStyle(buttonToken),
      // Color
      genColorButtonStyle(buttonToken),
      // https://github.com/ant-design/ant-design/issues/50969
      genCompatibleButtonStyle(buttonToken),
      // Button Group
      genGroupStyle(buttonToken)
    ];
  }, prepareComponentToken$5, {
    unitless: {
      fontWeight: true,
      contentLineHeight: true,
      contentLineHeightSM: true,
      contentLineHeightLG: true
    }
  });
  function compactItemBorder(token2, parentCls, options) {
    const {
      focusElCls,
      focus,
      borderElCls
    } = options;
    const childCombinator = borderElCls ? "> *" : "";
    const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n2) => `&:${n2} ${childCombinator}`).join(",");
    return {
      [`&-item:not(${parentCls}-last-item)`]: {
        marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal()
      },
      "&-item": Object.assign(Object.assign({
        [hoverEffects]: {
          zIndex: 2
        }
      }, focusElCls ? {
        [`&${focusElCls}`]: {
          zIndex: 2
        }
      } : {}), {
        [`&[disabled] ${childCombinator}`]: {
          zIndex: 0
        }
      })
    };
  }
  function compactItemBorderRadius(prefixCls, parentCls, options) {
    const {
      borderElCls
    } = options;
    const childCombinator = borderElCls ? `> ${borderElCls}` : "";
    return {
      [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
        borderRadius: 0
      },
      [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
        [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
        [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      }
    };
  }
  function genCompactItemStyle(token2) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      focus: true
    };
    const {
      componentCls
    } = token2;
    const compactCls = `${componentCls}-compact`;
    return {
      [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token2, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
    };
  }
  function compactItemVerticalBorder(token2, parentCls) {
    return {
      // border collapse
      [`&-item:not(${parentCls}-last-item)`]: {
        marginBottom: token2.calc(token2.lineWidth).mul(-1).equal()
      },
      "&-item": {
        "&:hover,&:focus,&:active": {
          zIndex: 2
        },
        "&[disabled]": {
          zIndex: 0
        }
      }
    };
  }
  function compactItemBorderVerticalRadius(prefixCls, parentCls) {
    return {
      [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
        borderRadius: 0
      },
      [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
        [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
          borderEndEndRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
        [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0
        }
      }
    };
  }
  function genCompactItemVerticalStyle(token2) {
    const compactCls = `${token2.componentCls}-compact-vertical`;
    return {
      [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token2, compactCls)), compactItemBorderVerticalRadius(token2.componentCls, compactCls))
    };
  }
  const genButtonCompactStyle = (token2) => {
    const {
      componentCls,
      calc
    } = token2;
    return {
      [componentCls]: {
        // Special styles for Primary Button
        [`&-compact-item${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: calc(token2.lineWidth).mul(-1).equal(),
              insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: token2.lineWidth,
              height: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
              backgroundColor: token2.colorPrimaryHover,
              content: '""'
            }
          }
        },
        // Special styles for Primary Button
        "&-compact-vertical-item": {
          [`&${componentCls}-primary`]: {
            [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: calc(token2.lineWidth).mul(-1).equal(),
                insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
                display: "inline-block",
                width: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
                height: token2.lineWidth,
                backgroundColor: token2.colorPrimaryHover,
                content: '""'
              }
            }
          }
        }
      }
    };
  };
  const CompactCmp = genSubStyleComponent(["Button", "compact"], (token2) => {
    const buttonToken = prepareToken$1(token2);
    return [
      // Space Compact
      genCompactItemStyle(buttonToken),
      genCompactItemVerticalStyle(buttonToken),
      genButtonCompactStyle(buttonToken)
    ];
  }, prepareComponentToken$5);
  var __rest$b = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  function getLoadingConfig(loading) {
    if (typeof loading === "object" && loading) {
      let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
      delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
      return {
        loading: delay <= 0,
        delay
      };
    }
    return {
      loading: !!loading,
      delay: 0
    };
  }
  const ButtonTypeMap = {
    default: ["default", "outlined"],
    primary: ["primary", "solid"],
    dashed: ["default", "dashed"],
    link: ["primary", "link"],
    text: ["default", "text"]
  };
  const InternalCompoundedButton = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var _a, _b, _c, _d;
    const {
      loading = false,
      prefixCls: customizePrefixCls,
      color,
      variant,
      type: type4,
      danger = false,
      shape = "default",
      size: customizeSize,
      styles,
      disabled: customDisabled,
      className,
      rootClassName,
      children,
      icon,
      iconPosition = "start",
      ghost = false,
      block = false,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType = "button",
      classNames: customClassNames,
      style: customStyle = {},
      autoInsertSpace
    } = props, rest = __rest$b(props, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]);
    const mergedType = type4 || "default";
    const [mergedColor, mergedVariant] = React.useMemo(() => {
      if (color && variant) {
        return [color, variant];
      }
      const colorVariantPair = ButtonTypeMap[mergedType] || [];
      if (danger) {
        return ["danger", colorVariantPair[1]];
      }
      return colorVariantPair;
    }, [type4, color, variant, danger]);
    const isDanger = mergedColor === "danger";
    const mergedColorText = isDanger ? "dangerous" : mergedColor;
    const {
      getPrefixCls,
      direction,
      button
    } = React.useContext(ConfigContext);
    const mergedInsertSpace = (_a = autoInsertSpace !== null && autoInsertSpace !== void 0 ? autoInsertSpace : button === null || button === void 0 ? void 0 : button.autoInsertSpace) !== null && _a !== void 0 ? _a : true;
    const prefixCls = getPrefixCls("btn", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$7(prefixCls);
    const disabled = React.useContext(DisabledContext);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const groupSize = React.useContext(GroupSizeContext);
    const loadingOrDelay = React.useMemo(() => getLoadingConfig(loading), [loading]);
    const [innerLoading, setLoading] = React.useState(loadingOrDelay.loading);
    const [hasTwoCNChar, setHasTwoCNChar] = React.useState(false);
    const internalRef = /* @__PURE__ */ React.createRef();
    const buttonRef = composeRef(ref, internalRef);
    const needInserted = React.Children.count(children) === 1 && !icon && !isUnBorderedButtonVariant(mergedVariant);
    React.useEffect(() => {
      let delayTimer = null;
      if (loadingOrDelay.delay > 0) {
        delayTimer = setTimeout(() => {
          delayTimer = null;
          setLoading(true);
        }, loadingOrDelay.delay);
      } else {
        setLoading(loadingOrDelay.loading);
      }
      function cleanupTimer() {
        if (delayTimer) {
          clearTimeout(delayTimer);
          delayTimer = null;
        }
      }
      return cleanupTimer;
    }, [loadingOrDelay]);
    React.useEffect(() => {
      if (!buttonRef || !buttonRef.current || !mergedInsertSpace) {
        return;
      }
      const buttonText = buttonRef.current.textContent;
      if (needInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar) {
          setHasTwoCNChar(true);
        }
      } else if (hasTwoCNChar) {
        setHasTwoCNChar(false);
      }
    }, [buttonRef]);
    const handleClick = React.useCallback((e2) => {
      var _a2;
      if (innerLoading || mergedDisabled) {
        e2.preventDefault();
        return;
      }
      (_a2 = props.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(props, e2);
    }, [props.onClick, innerLoading, mergedDisabled]);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const sizeClassNameMap = {
      large: "lg",
      small: "sm",
      middle: void 0
    };
    const sizeFullName = useSize((ctxSize) => {
      var _a2, _b2;
      return (_b2 = (_a2 = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a2 !== void 0 ? _a2 : groupSize) !== null && _b2 !== void 0 ? _b2 : ctxSize;
    });
    const sizeCls = sizeFullName ? (_b = sizeClassNameMap[sizeFullName]) !== null && _b !== void 0 ? _b : "" : "";
    const iconType = innerLoading ? "loading" : icon;
    const linkButtonRestProps = omit(rest, ["navigate"]);
    const classes = classNames(prefixCls, hashId, cssVarCls, {
      [`${prefixCls}-${shape}`]: shape !== "default" && shape,
      // line(253 - 254): Compatible with versions earlier than 5.21.0
      [`${prefixCls}-${mergedType}`]: mergedType,
      [`${prefixCls}-dangerous`]: danger,
      [`${prefixCls}-color-${mergedColorText}`]: mergedColorText,
      [`${prefixCls}-variant-${mergedVariant}`]: mergedVariant,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
      [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonVariant(mergedVariant),
      [`${prefixCls}-loading`]: innerLoading,
      [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && mergedInsertSpace && !innerLoading,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-icon-end`]: iconPosition === "end"
    }, compactItemClassnames, className, rootClassName, button === null || button === void 0 ? void 0 : button.className);
    const fullStyle = Object.assign(Object.assign({}, button === null || button === void 0 ? void 0 : button.style), customStyle);
    const iconClasses = classNames(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, (_c = button === null || button === void 0 ? void 0 : button.classNames) === null || _c === void 0 ? void 0 : _c.icon);
    const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), ((_d = button === null || button === void 0 ? void 0 : button.styles) === null || _d === void 0 ? void 0 : _d.icon) || {});
    const iconNode = icon && !innerLoading ? /* @__PURE__ */ React.createElement(IconWrapper, {
      prefixCls,
      className: iconClasses,
      style: iconStyle
    }, icon) : /* @__PURE__ */ React.createElement(LoadingIcon, {
      existIcon: !!icon,
      prefixCls,
      loading: innerLoading
    });
    const kids = children || children === 0 ? spaceChildren(children, needInserted && mergedInsertSpace) : null;
    if (linkButtonRestProps.href !== void 0) {
      return wrapCSSVar(/* @__PURE__ */ React.createElement("a", Object.assign({}, linkButtonRestProps, {
        className: classNames(classes, {
          [`${prefixCls}-disabled`]: mergedDisabled
        }),
        href: mergedDisabled ? void 0 : linkButtonRestProps.href,
        style: fullStyle,
        onClick: handleClick,
        ref: buttonRef,
        tabIndex: mergedDisabled ? -1 : 0
      }), iconNode, kids));
    }
    let buttonNode = /* @__PURE__ */ React.createElement("button", Object.assign({}, rest, {
      type: htmlType,
      className: classes,
      style: fullStyle,
      onClick: handleClick,
      disabled: mergedDisabled,
      ref: buttonRef
    }), iconNode, kids, !!compactItemClassnames && /* @__PURE__ */ React.createElement(CompactCmp, {
      key: "compact",
      prefixCls
    }));
    if (!isUnBorderedButtonVariant(mergedVariant)) {
      buttonNode = /* @__PURE__ */ React.createElement(Wave, {
        component: "Button",
        disabled: innerLoading
      }, buttonNode);
    }
    return wrapCSSVar(buttonNode);
  });
  const Button = InternalCompoundedButton;
  Button.Group = ButtonGroup;
  Button.__ANT_BUTTON = true;
  var OrderContext = /* @__PURE__ */ React__namespace.createContext(null);
  var EMPTY_LIST = [];
  function useDom(render2, debug) {
    var _React$useState = React__namespace.useState(function() {
      if (!canUseDom()) {
        return null;
      }
      var defaultEle = document.createElement("div");
      return defaultEle;
    }), _React$useState2 = _slicedToArray(_React$useState, 1), ele = _React$useState2[0];
    var appendedRef = React__namespace.useRef(false);
    var queueCreate = React__namespace.useContext(OrderContext);
    var _React$useState3 = React__namespace.useState(EMPTY_LIST), _React$useState4 = _slicedToArray(_React$useState3, 2), queue = _React$useState4[0], setQueue = _React$useState4[1];
    var mergedQueueCreate = queueCreate || (appendedRef.current ? void 0 : function(appendFn) {
      setQueue(function(origin) {
        var newQueue = [appendFn].concat(_toConsumableArray(origin));
        return newQueue;
      });
    });
    function append2() {
      if (!ele.parentElement) {
        document.body.appendChild(ele);
      }
      appendedRef.current = true;
    }
    function cleanup2() {
      var _ele$parentElement;
      (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
      appendedRef.current = false;
    }
    useLayoutEffect(function() {
      if (render2) {
        if (queueCreate) {
          queueCreate(append2);
        } else {
          append2();
        }
      } else {
        cleanup2();
      }
      return cleanup2;
    }, [render2]);
    useLayoutEffect(function() {
      if (queue.length) {
        queue.forEach(function(appendFn) {
          return appendFn();
        });
        setQueue(EMPTY_LIST);
      }
    }, [queue]);
    return [ele, mergedQueueCreate];
  }
  function measureScrollbarSize(ele) {
    var randomId = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7));
    var measureEle = document.createElement("div");
    measureEle.id = randomId;
    var measureStyle = measureEle.style;
    measureStyle.position = "absolute";
    measureStyle.left = "0";
    measureStyle.top = "0";
    measureStyle.width = "100px";
    measureStyle.height = "100px";
    measureStyle.overflow = "scroll";
    var fallbackWidth;
    var fallbackHeight;
    if (ele) {
      var targetStyle = getComputedStyle(ele);
      measureStyle.scrollbarColor = targetStyle.scrollbarColor;
      measureStyle.scrollbarWidth = targetStyle.scrollbarWidth;
      var webkitScrollbarStyle = getComputedStyle(ele, "::-webkit-scrollbar");
      var width = parseInt(webkitScrollbarStyle.width, 10);
      var height = parseInt(webkitScrollbarStyle.height, 10);
      try {
        var widthStyle = width ? "width: ".concat(webkitScrollbarStyle.width, ";") : "";
        var heightStyle = height ? "height: ".concat(webkitScrollbarStyle.height, ";") : "";
        updateCSS("\n#".concat(randomId, "::-webkit-scrollbar {\n").concat(widthStyle, "\n").concat(heightStyle, "\n}"), randomId);
      } catch (e2) {
        console.error(e2);
        fallbackWidth = width;
        fallbackHeight = height;
      }
    }
    document.body.appendChild(measureEle);
    var scrollWidth = ele && fallbackWidth && !isNaN(fallbackWidth) ? fallbackWidth : measureEle.offsetWidth - measureEle.clientWidth;
    var scrollHeight = ele && fallbackHeight && !isNaN(fallbackHeight) ? fallbackHeight : measureEle.offsetHeight - measureEle.clientHeight;
    document.body.removeChild(measureEle);
    removeCSS(randomId);
    return {
      width: scrollWidth,
      height: scrollHeight
    };
  }
  function getTargetScrollBarSize(target) {
    if (typeof document === "undefined" || !target || !(target instanceof Element)) {
      return {
        width: 0,
        height: 0
      };
    }
    return measureScrollbarSize(target);
  }
  function isBodyOverflowing() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
  }
  var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
  var uuid$1 = 0;
  function useScrollLocker(lock) {
    var mergedLock = !!lock;
    var _React$useState = React__namespace.useState(function() {
      uuid$1 += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid$1);
    }), _React$useState2 = _slicedToArray(_React$useState, 1), id = _React$useState2[0];
    useLayoutEffect(function() {
      if (mergedLock) {
        var scrollbarSize = getTargetScrollBarSize(document.body).width;
        var isOverflow = isBodyOverflowing();
        updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : "", "\n}"), id);
      } else {
        removeCSS(id);
      }
      return function() {
        removeCSS(id);
      };
    }, [mergedLock, id]);
  }
  var inline = false;
  function inlineMock(nextInline) {
    return inline;
  }
  var getPortalContainer = function getPortalContainer2(getContainer2) {
    if (getContainer2 === false) {
      return false;
    }
    if (!canUseDom() || !getContainer2) {
      return null;
    }
    if (typeof getContainer2 === "string") {
      return document.querySelector(getContainer2);
    }
    if (typeof getContainer2 === "function") {
      return getContainer2();
    }
    return getContainer2;
  };
  var Portal = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var open = props.open, autoLock = props.autoLock, getContainer2 = props.getContainer;
    props.debug;
    var _props$autoDestroy = props.autoDestroy, autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy, children = props.children;
    var _React$useState = React__namespace.useState(open), _React$useState2 = _slicedToArray(_React$useState, 2), shouldRender = _React$useState2[0], setShouldRender = _React$useState2[1];
    var mergedRender = shouldRender || open;
    React__namespace.useEffect(function() {
      if (autoDestroy || open) {
        setShouldRender(open);
      }
    }, [open, autoDestroy]);
    var _React$useState3 = React__namespace.useState(function() {
      return getPortalContainer(getContainer2);
    }), _React$useState4 = _slicedToArray(_React$useState3, 2), innerContainer = _React$useState4[0], setInnerContainer = _React$useState4[1];
    React__namespace.useEffect(function() {
      var customizeContainer = getPortalContainer(getContainer2);
      setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
    });
    var _useDom = useDom(mergedRender && !innerContainer), _useDom2 = _slicedToArray(_useDom, 2), defaultContainer = _useDom2[0], queueCreate = _useDom2[1];
    var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;
    useScrollLocker(autoLock && open && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));
    var childRef = null;
    if (children && supportRef(children) && ref) {
      var _ref = children;
      childRef = _ref.ref;
    }
    var mergedRef = useComposeRef(childRef, ref);
    if (!mergedRender || !canUseDom() || innerContainer === void 0) {
      return null;
    }
    var renderInline = mergedContainer === false || inlineMock();
    var reffedChildren = children;
    if (ref) {
      reffedChildren = /* @__PURE__ */ React__namespace.cloneElement(children, {
        ref: mergedRef
      });
    }
    return /* @__PURE__ */ React__namespace.createElement(OrderContext.Provider, {
      value: queueCreate
    }, renderInline ? reffedChildren : /* @__PURE__ */ ReactDOM__default.createPortal(reffedChildren, mergedContainer));
  });
  function getUseId() {
    var fullClone2 = _objectSpread2({}, React__namespace);
    return fullClone2.useId;
  }
  var uuid = 0;
  var useOriginId = getUseId();
  const useId = useOriginId ? (
    // Use React `useId`
    function useId2(id) {
      var reactId = useOriginId();
      if (id) {
        return id;
      }
      return reactId;
    }
  ) : (
    // Use compatible of `useId`
    function useCompatId(id) {
      var _React$useState = React__namespace.useState("ssr-id"), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
      React__namespace.useEffect(function() {
        var nextId = uuid;
        uuid += 1;
        setInnerId("rc_unique_".concat(nextId));
      }, []);
      if (id) {
        return id;
      }
      return innerId;
    }
  );
  var HOOK_MARK = "RC_FORM_INTERNAL_HOOKS";
  var warningFunc = function warningFunc2() {
    warningOnce(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
  };
  var Context = /* @__PURE__ */ React__namespace.createContext({
    getFieldValue: warningFunc,
    getFieldsValue: warningFunc,
    getFieldError: warningFunc,
    getFieldWarning: warningFunc,
    getFieldsError: warningFunc,
    isFieldsTouched: warningFunc,
    isFieldTouched: warningFunc,
    isFieldValidating: warningFunc,
    isFieldsValidating: warningFunc,
    resetFields: warningFunc,
    setFields: warningFunc,
    setFieldValue: warningFunc,
    setFieldsValue: warningFunc,
    validateFields: warningFunc,
    submit: warningFunc,
    getInternalHooks: function getInternalHooks() {
      warningFunc();
      return {
        dispatch: warningFunc,
        initEntityValue: warningFunc,
        registerField: warningFunc,
        useSubscribe: warningFunc,
        setInitialValues: warningFunc,
        destroyForm: warningFunc,
        setCallbacks: warningFunc,
        registerWatch: warningFunc,
        getFields: warningFunc,
        setValidateMessages: warningFunc,
        setPreserve: warningFunc,
        getInitialValue: warningFunc
      };
    }
  });
  var ListContext = /* @__PURE__ */ React__namespace.createContext(null);
  function toArray$1(value) {
    if (value === void 0 || value === null) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
  }
  function isFormInstance(form) {
    return form && !!form._init;
  }
  function newMessages() {
    return {
      default: "Validation error on field %s",
      required: "%s is required",
      enum: "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        boolean: "%s is not a %s",
        integer: "%s is not an %s",
        float: "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone() {
        var cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  var messages = newMessages();
  function _isNativeFunction(t2) {
    try {
      return -1 !== Function.toString.call(t2).indexOf("[native code]");
    } catch (n2) {
      return "function" == typeof t2;
    }
  }
  function _construct(t2, e2, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e2);
    var p2 = new (t2.bind.apply(t2, o))();
    return r && _setPrototypeOf(p2, r.prototype), p2;
  }
  function _wrapNativeSuper(t2) {
    var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return _wrapNativeSuper = function _wrapNativeSuper2(t3) {
      if (null === t3 || !_isNativeFunction(t3)) return t3;
      if ("function" != typeof t3) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t3)) return r.get(t3);
        r.set(t3, Wrapper);
      }
      function Wrapper() {
        return _construct(t3, arguments, _getPrototypeOf(this).constructor);
      }
      return Wrapper.prototype = Object.create(t3.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      }), _setPrototypeOf(Wrapper, t3);
    }, _wrapNativeSuper(t2);
  }
  var define_process_env_default = {};
  var formatRegExp = /%[sdj%]/g;
  var warning = function warning2() {
  };
  if (typeof process !== "undefined" && define_process_env_default && false) {
    warning = function warning3(type4, errors) {
      if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
        if (errors.every(function(e2) {
          return typeof e2 === "string";
        })) {
          console.warn(type4, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length) return null;
    var fields = {};
    errors.forEach(function(error) {
      var field = error.field;
      fields[field] = fields[field] || [];
      fields[field].push(error);
    });
    return fields;
  }
  function format(template) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var i = 0;
    var len = args.length;
    if (typeof template === "function") {
      return template.apply(null, args);
    }
    if (typeof template === "string") {
      var str = template.replace(formatRegExp, function(x) {
        if (x === "%%") {
          return "%";
        }
        if (i >= len) {
          return x;
        }
        switch (x) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
            break;
          default:
            return x;
        }
      });
      return str;
    }
    return template;
  }
  function isNativeStringType(type4) {
    return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
  }
  function isEmptyValue(value, type4) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (type4 === "array" && Array.isArray(value) && !value.length) {
      return true;
    }
    if (isNativeStringType(type4) && typeof value === "string" && !value) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func, callback) {
    var results = [];
    var total = 0;
    var arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, _toConsumableArray(errors || []));
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach(function(a) {
      func(a, count);
    });
  }
  function asyncSerialArray(arr, func, callback) {
    var index2 = 0;
    var arrLength = arr.length;
    function next2(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      var original = index2;
      index2 = index2 + 1;
      if (original < arrLength) {
        func(arr[original], next2);
      } else {
        callback([]);
      }
    }
    next2([]);
  }
  function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function(k2) {
      ret.push.apply(ret, _toConsumableArray(objArr[k2] || []));
    });
    return ret;
  }
  var AsyncValidationError = /* @__PURE__ */ function(_Error) {
    _inherits(AsyncValidationError2, _Error);
    var _super = _createSuper(AsyncValidationError2);
    function AsyncValidationError2(errors, fields) {
      var _this;
      _classCallCheck(this, AsyncValidationError2);
      _this = _super.call(this, "Async Validation Error");
      _defineProperty(_assertThisInitialized(_this), "errors", void 0);
      _defineProperty(_assertThisInitialized(_this), "fields", void 0);
      _this.errors = errors;
      _this.fields = fields;
      return _this;
    }
    return _createClass(AsyncValidationError2);
  }(/* @__PURE__ */ _wrapNativeSuper(Error));
  function asyncMap(objArr, option, func, callback, source) {
    if (option.first) {
      var _pending = new Promise(function(resolve, reject) {
        var next2 = function next22(errors) {
          callback(errors);
          return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
        };
        var flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func, next2);
      });
      _pending.catch(function(e2) {
        return e2;
      });
      return _pending;
    }
    var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var pending = new Promise(function(resolve, reject) {
      var next2 = function next22(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve(source);
      }
      objArrKeys.forEach(function(key) {
        var arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func, next2);
        } else {
          asyncParallelArray(arr, func, next2);
        }
      });
    });
    pending.catch(function(e2) {
      return e2;
    });
    return pending;
  }
  function isErrorObj(obj) {
    return !!(obj && obj.message !== void 0);
  }
  function getValue(value, path2) {
    var v2 = value;
    for (var i = 0; i < path2.length; i++) {
      if (v2 == void 0) {
        return v2;
      }
      v2 = v2[path2[i]];
    }
    return v2;
  }
  function complementError(rule, source) {
    return function(oe) {
      var fieldValue;
      if (rule.fullFields) {
        fieldValue = getValue(source, rule.fullFields);
      } else {
        fieldValue = source[oe.field || rule.fullField];
      }
      if (isErrorObj(oe)) {
        oe.field = oe.field || rule.fullField;
        oe.fieldValue = fieldValue;
        return oe;
      }
      return {
        message: typeof oe === "function" ? oe() : oe,
        fieldValue,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge(target, source) {
    if (source) {
      for (var s in source) {
        if (source.hasOwnProperty(s)) {
          var value = source[s];
          if (_typeof(value) === "object" && _typeof(target[s]) === "object") {
            target[s] = _objectSpread2(_objectSpread2({}, target[s]), value);
          } else {
            target[s] = value;
          }
        }
      }
    }
    return target;
  }
  var ENUM$1 = "enum";
  var enumerable$1 = function enumerable(rule, value, source, errors, options) {
    rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
    if (rule[ENUM$1].indexOf(value) === -1) {
      errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
    }
  };
  var pattern$2 = function pattern(rule, value, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        var _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      }
    }
  };
  var range = function range2(rule, value, source, errors, options) {
    var len = typeof rule.len === "number";
    var min = typeof rule.min === "number";
    var max = typeof rule.max === "number";
    var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var val = value;
    var key = null;
    var num = typeof value === "number";
    var str = typeof value === "string";
    var arr = Array.isArray(value);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value.length;
    }
    if (str) {
      val = value.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  };
  var required$1 = function required(rule, value, source, errors, options, type4) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  };
  var urlReg;
  const getUrlRegex = function() {
    if (urlReg) {
      return urlReg;
    }
    var word = "[a-fA-F\\d:]";
    var b2 = function b3(options) {
      return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(word, ")|(?<=").concat(word, ")(?=\\s|$))") : "";
    };
    var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
    var v6seg = "[a-fA-F\\d]{1,4}";
    var v6List = [
      "(?:".concat(v6seg, ":){7}(?:").concat(v6seg, "|:)"),
      // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
      "(?:".concat(v6seg, ":){6}(?:").concat(v4, "|:").concat(v6seg, "|:)"),
      // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
      "(?:".concat(v6seg, ":){5}(?::").concat(v4, "|(?::").concat(v6seg, "){1,2}|:)"),
      // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
      "(?:".concat(v6seg, ":){4}(?:(?::").concat(v6seg, "){0,1}:").concat(v4, "|(?::").concat(v6seg, "){1,3}|:)"),
      // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
      "(?:".concat(v6seg, ":){3}(?:(?::").concat(v6seg, "){0,2}:").concat(v4, "|(?::").concat(v6seg, "){1,4}|:)"),
      // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
      "(?:".concat(v6seg, ":){2}(?:(?::").concat(v6seg, "){0,3}:").concat(v4, "|(?::").concat(v6seg, "){1,5}|:)"),
      // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
      "(?:".concat(v6seg, ":){1}(?:(?::").concat(v6seg, "){0,4}:").concat(v4, "|(?::").concat(v6seg, "){1,6}|:)"),
      // 1::              1::3:4:5:6:7:8   1::8            1::
      "(?::(?:(?::".concat(v6seg, "){0,5}:").concat(v4, "|(?::").concat(v6seg, "){1,7}|:))")
      // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
    ];
    var v6Eth0 = "(?:%[0-9a-zA-Z]{1,})?";
    var v6 = "(?:".concat(v6List.join("|"), ")").concat(v6Eth0);
    var v46Exact = new RegExp("(?:^".concat(v4, "$)|(?:^").concat(v6, "$)"));
    var v4exact = new RegExp("^".concat(v4, "$"));
    var v6exact = new RegExp("^".concat(v6, "$"));
    var ip = function ip2(options) {
      return options && options.exact ? v46Exact : new RegExp("(?:".concat(b2(options)).concat(v4).concat(b2(options), ")|(?:").concat(b2(options)).concat(v6).concat(b2(options), ")"), "g");
    };
    ip.v4 = function(options) {
      return options && options.exact ? v4exact : new RegExp("".concat(b2(options)).concat(v4).concat(b2(options)), "g");
    };
    ip.v6 = function(options) {
      return options && options.exact ? v6exact : new RegExp("".concat(b2(options)).concat(v6).concat(b2(options)), "g");
    };
    var protocol = "(?:(?:[a-z]+:)?//)";
    var auth = "(?:\\S+(?::\\S*)?@)?";
    var ipv4 = ip.v4().source;
    var ipv6 = ip.v6().source;
    var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
    var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
    var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
    var port = "(?::\\d{2,5})?";
    var path2 = '(?:[/?#][^\\s"]*)?';
    var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:localhost|").concat(ipv4, "|").concat(ipv6, "|").concat(host).concat(domain).concat(tld, ")").concat(port).concat(path2);
    urlReg = new RegExp("(?:^".concat(regex, "$)"), "i");
    return urlReg;
  };
  var pattern$1 = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    // url: new RegExp(
    //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    //   'i',
    // ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    float: function float(value) {
      return types.number(value) && !types.integer(value);
    },
    array: function array(value) {
      return Array.isArray(value);
    },
    regexp: function regexp(value) {
      if (value instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value);
      } catch (e2) {
        return false;
      }
    },
    date: function date(value) {
      return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
    },
    number: function number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    object: function object(value) {
      return _typeof(value) === "object" && !types.array(value);
    },
    method: function method(value) {
      return typeof value === "function";
    },
    email: function email(value) {
      return typeof value === "string" && value.length <= 320 && !!value.match(pattern$1.email);
    },
    url: function url(value) {
      return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
    },
    hex: function hex(value) {
      return typeof value === "string" && !!value.match(pattern$1.hex);
    }
  };
  var type$1 = function type(rule, value, source, errors, options) {
    if (rule.required && value === void 0) {
      required$1(rule, value, source, errors, options);
      return;
    }
    var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    var ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && _typeof(value) !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  };
  var whitespace = function whitespace2(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  };
  const rules = {
    required: required$1,
    whitespace,
    type: type$1,
    range,
    enum: enumerable$1,
    pattern: pattern$2
  };
  var any = function any2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
    }
    callback(errors);
  };
  var array2 = function array3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if ((value === void 0 || value === null) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "array");
      if (value !== void 0 && value !== null) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var boolean = function boolean2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var date2 = function date3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "date") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "date")) {
        var dateObject;
        if (value instanceof Date) {
          dateObject = value;
        } else {
          dateObject = new Date(value);
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  };
  var ENUM = "enum";
  var enumerable2 = function enumerable3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules[ENUM](rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var floatFn = function floatFn2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var integer2 = function integer3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var method2 = function method3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var number2 = function number3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (value === "") {
        value = void 0;
      }
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var object2 = function object3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var pattern2 = function pattern3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "string")) {
        rules.pattern(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var regexp2 = function regexp3(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  var required2 = function required3(rule, value, callback, source, options) {
    var errors = [];
    var type4 = Array.isArray(value) ? "array" : _typeof(value);
    rules.required(rule, value, source, errors, options, type4);
    callback(errors);
  };
  var string = function string2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "string");
      if (!isEmptyValue(value, "string")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
        rules.pattern(rule, value, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value, source, errors, options);
        }
      }
    }
    callback(errors);
  };
  var type2 = function type3(rule, value, callback, source, options) {
    var ruleType = rule.type;
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, ruleType);
      if (!isEmptyValue(value, ruleType)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  };
  const validators = {
    string,
    method: method2,
    number: number2,
    boolean,
    regexp: regexp2,
    integer: integer2,
    float: floatFn,
    array: array2,
    object: object2,
    enum: enumerable2,
    pattern: pattern2,
    date: date2,
    url: type2,
    hex: type2,
    email: type2,
    required: required2,
    any
  };
  var Schema = /* @__PURE__ */ function() {
    function Schema2(descriptor) {
      _classCallCheck(this, Schema2);
      _defineProperty(this, "rules", null);
      _defineProperty(this, "_messages", messages);
      this.define(descriptor);
    }
    _createClass(Schema2, [{
      key: "define",
      value: function define(rules2) {
        var _this = this;
        if (!rules2) {
          throw new Error("Cannot configure a schema with no rules");
        }
        if (_typeof(rules2) !== "object" || Array.isArray(rules2)) {
          throw new Error("Rules must be an object");
        }
        this.rules = {};
        Object.keys(rules2).forEach(function(name) {
          var item = rules2[name];
          _this.rules[name] = Array.isArray(item) ? item : [item];
        });
      }
    }, {
      key: "messages",
      value: function messages2(_messages) {
        if (_messages) {
          this._messages = deepMerge(newMessages(), _messages);
        }
        return this._messages;
      }
    }, {
      key: "validate",
      value: function validate(source_) {
        var _this2 = this;
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var oc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
        };
        var source = source_;
        var options = o;
        var callback = oc;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        if (!this.rules || Object.keys(this.rules).length === 0) {
          if (callback) {
            callback(null, source);
          }
          return Promise.resolve(source);
        }
        function complete(results) {
          var errors = [];
          var fields = {};
          function add(e2) {
            if (Array.isArray(e2)) {
              var _errors;
              errors = (_errors = errors).concat.apply(_errors, _toConsumableArray(e2));
            } else {
              errors.push(e2);
            }
          }
          for (var i = 0; i < results.length; i++) {
            add(results[i]);
          }
          if (!errors.length) {
            callback(null, source);
          } else {
            fields = convertFieldsError(errors);
            callback(errors, fields);
          }
        }
        if (options.messages) {
          var messages$1 = this.messages();
          if (messages$1 === messages) {
            messages$1 = newMessages();
          }
          deepMerge(messages$1, options.messages);
          options.messages = messages$1;
        } else {
          options.messages = this.messages();
        }
        var series = {};
        var keys2 = options.keys || Object.keys(this.rules);
        keys2.forEach(function(z) {
          var arr = _this2.rules[z];
          var value = source[z];
          arr.forEach(function(r) {
            var rule = r;
            if (typeof rule.transform === "function") {
              if (source === source_) {
                source = _objectSpread2({}, source);
              }
              value = source[z] = rule.transform(value);
              if (value !== void 0 && value !== null) {
                rule.type = rule.type || (Array.isArray(value) ? "array" : _typeof(value));
              }
            }
            if (typeof rule === "function") {
              rule = {
                validator: rule
              };
            } else {
              rule = _objectSpread2({}, rule);
            }
            rule.validator = _this2.getValidationMethod(rule);
            if (!rule.validator) {
              return;
            }
            rule.field = z;
            rule.fullField = rule.fullField || z;
            rule.type = _this2.getType(rule);
            series[z] = series[z] || [];
            series[z].push({
              rule,
              value,
              source,
              field: z
            });
          });
        });
        var errorFields = {};
        return asyncMap(series, options, function(data, doIt) {
          var rule = data.rule;
          var deep = (rule.type === "object" || rule.type === "array") && (_typeof(rule.fields) === "object" || _typeof(rule.defaultField) === "object");
          deep = deep && (rule.required || !rule.required && data.value);
          rule.field = data.field;
          function addFullField(key, schema) {
            return _objectSpread2(_objectSpread2({}, schema), {}, {
              fullField: "".concat(rule.fullField, ".").concat(key),
              fullFields: rule.fullFields ? [].concat(_toConsumableArray(rule.fullFields), [key]) : [key]
            });
          }
          function cb() {
            var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            var errorList = Array.isArray(e2) ? e2 : [e2];
            if (!options.suppressWarning && errorList.length) {
              Schema2.warning("async-validator:", errorList);
            }
            if (errorList.length && rule.message !== void 0) {
              errorList = [].concat(rule.message);
            }
            var filledErrors = errorList.map(complementError(rule, source));
            if (options.first && filledErrors.length) {
              errorFields[rule.field] = 1;
              return doIt(filledErrors);
            }
            if (!deep) {
              doIt(filledErrors);
            } else {
              if (rule.required && !data.value) {
                if (rule.message !== void 0) {
                  filledErrors = [].concat(rule.message).map(complementError(rule, source));
                } else if (options.error) {
                  filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
                }
                return doIt(filledErrors);
              }
              var fieldsSchema = {};
              if (rule.defaultField) {
                Object.keys(data.value).map(function(key) {
                  fieldsSchema[key] = rule.defaultField;
                });
              }
              fieldsSchema = _objectSpread2(_objectSpread2({}, fieldsSchema), data.rule.fields);
              var paredFieldsSchema = {};
              Object.keys(fieldsSchema).forEach(function(field) {
                var fieldSchema = fieldsSchema[field];
                var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
                paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
              });
              var schema = new Schema2(paredFieldsSchema);
              schema.messages(options.messages);
              if (data.rule.options) {
                data.rule.options.messages = options.messages;
                data.rule.options.error = options.error;
              }
              schema.validate(data.value, data.rule.options || options, function(errs) {
                var finalErrors = [];
                if (filledErrors && filledErrors.length) {
                  finalErrors.push.apply(finalErrors, _toConsumableArray(filledErrors));
                }
                if (errs && errs.length) {
                  finalErrors.push.apply(finalErrors, _toConsumableArray(errs));
                }
                doIt(finalErrors.length ? finalErrors : null);
              });
            }
          }
          var res;
          if (rule.asyncValidator) {
            res = rule.asyncValidator(rule, data.value, cb, data.source, options);
          } else if (rule.validator) {
            try {
              res = rule.validator(rule, data.value, cb, data.source, options);
            } catch (error) {
              var _console$error, _console;
              (_console$error = (_console = console).error) === null || _console$error === void 0 || _console$error.call(_console, error);
              if (!options.suppressValidatorError) {
                setTimeout(function() {
                  throw error;
                }, 0);
              }
              cb(error.message);
            }
            if (res === true) {
              cb();
            } else if (res === false) {
              cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || "".concat(rule.fullField || rule.field, " fails"));
            } else if (res instanceof Array) {
              cb(res);
            } else if (res instanceof Error) {
              cb(res.message);
            }
          }
          if (res && res.then) {
            res.then(function() {
              return cb();
            }, function(e2) {
              return cb(e2);
            });
          }
        }, function(results) {
          complete(results);
        }, source);
      }
    }, {
      key: "getType",
      value: function getType(rule) {
        if (rule.type === void 0 && rule.pattern instanceof RegExp) {
          rule.type = "pattern";
        }
        if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
          throw new Error(format("Unknown rule type %s", rule.type));
        }
        return rule.type || "string";
      }
    }, {
      key: "getValidationMethod",
      value: function getValidationMethod(rule) {
        if (typeof rule.validator === "function") {
          return rule.validator;
        }
        var keys2 = Object.keys(rule);
        var messageIndex = keys2.indexOf("message");
        if (messageIndex !== -1) {
          keys2.splice(messageIndex, 1);
        }
        if (keys2.length === 1 && keys2[0] === "required") {
          return validators.required;
        }
        return validators[this.getType(rule)] || void 0;
      }
    }]);
    return Schema2;
  }();
  _defineProperty(Schema, "register", function register(type4, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type4] = validator;
  });
  _defineProperty(Schema, "warning", warning);
  _defineProperty(Schema, "messages", messages);
  _defineProperty(Schema, "validators", validators);
  var typeTemplate = "'${name}' is not a valid ${type}";
  var defaultValidateMessages = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date"
    },
    types: {
      string: typeTemplate,
      method: typeTemplate,
      array: typeTemplate,
      object: typeTemplate,
      number: typeTemplate,
      date: typeTemplate,
      boolean: typeTemplate,
      integer: typeTemplate,
      float: typeTemplate,
      regexp: typeTemplate,
      email: typeTemplate,
      url: typeTemplate,
      hex: typeTemplate
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters"
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}"
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length"
    },
    pattern: {
      mismatch: "'${name}' does not match pattern ${pattern}"
    }
  };
  var AsyncValidator = Schema;
  function replaceMessage(template, kv) {
    return template.replace(/\\?\$\{\w+\}/g, function(str) {
      if (str.startsWith("\\")) {
        return str.slice(1);
      }
      var key = str.slice(2, -1);
      return kv[key];
    });
  }
  var CODE_LOGIC_ERROR = "CODE_LOGIC_ERROR";
  function validateRule(_x, _x2, _x3, _x4, _x5) {
    return _validateRule.apply(this, arguments);
  }
  function _validateRule() {
    _validateRule = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(name, value, rule, options, messageVariables) {
      var cloneRule, originValidator, subRuleField, validator, messages2, result, subResults, kv, fillVariableResult;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            cloneRule = _objectSpread2({}, rule);
            delete cloneRule.ruleIndex;
            AsyncValidator.warning = function() {
              return void 0;
            };
            if (cloneRule.validator) {
              originValidator = cloneRule.validator;
              cloneRule.validator = function() {
                try {
                  return originValidator.apply(void 0, arguments);
                } catch (error) {
                  console.error(error);
                  return Promise.reject(CODE_LOGIC_ERROR);
                }
              };
            }
            subRuleField = null;
            if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }
            validator = new AsyncValidator(_defineProperty({}, name, [cloneRule]));
            messages2 = merge$1(defaultValidateMessages, options.validateMessages);
            validator.messages(messages2);
            result = [];
            _context2.prev = 10;
            _context2.next = 13;
            return Promise.resolve(validator.validate(_defineProperty({}, name, value), _objectSpread2({}, options)));
          case 13:
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](10);
            if (_context2.t0.errors) {
              result = _context2.t0.errors.map(function(_ref4, index2) {
                var message = _ref4.message;
                var mergedMessage = message === CODE_LOGIC_ERROR ? messages2.default : message;
                return /* @__PURE__ */ React__namespace.isValidElement(mergedMessage) ? (
                  // Wrap ReactNode with `key`
                  /* @__PURE__ */ React__namespace.cloneElement(mergedMessage, {
                    key: "error_".concat(index2)
                  })
                ) : mergedMessage;
              });
            }
          case 18:
            if (!(!result.length && subRuleField)) {
              _context2.next = 23;
              break;
            }
            _context2.next = 21;
            return Promise.all(value.map(function(subValue, i) {
              return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
            }));
          case 21:
            subResults = _context2.sent;
            return _context2.abrupt("return", subResults.reduce(function(prev2, errors) {
              return [].concat(_toConsumableArray(prev2), _toConsumableArray(errors));
            }, []));
          case 23:
            kv = _objectSpread2(_objectSpread2({}, rule), {}, {
              name,
              enum: (rule.enum || []).join(", ")
            }, messageVariables);
            fillVariableResult = result.map(function(error) {
              if (typeof error === "string") {
                return replaceMessage(error, kv);
              }
              return error;
            });
            return _context2.abrupt("return", fillVariableResult);
          case 26:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[10, 15]]);
    }));
    return _validateRule.apply(this, arguments);
  }
  function validateRules(namePath, value, rules2, options, validateFirst, messageVariables) {
    var name = namePath.join(".");
    var filledRules = rules2.map(function(currentRule, ruleIndex) {
      var originValidatorFunc = currentRule.validator;
      var cloneRule = _objectSpread2(_objectSpread2({}, currentRule), {}, {
        ruleIndex
      });
      if (originValidatorFunc) {
        cloneRule.validator = function(rule, val, callback) {
          var hasPromise = false;
          var wrappedCallback = function wrappedCallback2() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            Promise.resolve().then(function() {
              warningOnce(!hasPromise, "Your validator function has already return a promise. `callback` will be ignored.");
              if (!hasPromise) {
                callback.apply(void 0, args);
              }
            });
          };
          var promise = originValidatorFunc(rule, val, wrappedCallback);
          hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
          warningOnce(hasPromise, "`callback` is deprecated. Please return a promise instead.");
          if (hasPromise) {
            promise.then(function() {
              callback();
            }).catch(function(err) {
              callback(err || " ");
            });
          }
        };
      }
      return cloneRule;
    }).sort(function(_ref, _ref2) {
      var w1 = _ref.warningOnly, i1 = _ref.ruleIndex;
      var w2 = _ref2.warningOnly, i2 = _ref2.ruleIndex;
      if (!!w1 === !!w2) {
        return i1 - i2;
      }
      if (w1) {
        return 1;
      }
      return -1;
    });
    var summaryPromise;
    if (validateFirst === true) {
      summaryPromise = new Promise(/* @__PURE__ */ function() {
        var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(resolve, reject) {
          var i, rule, errors;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                i = 0;
              case 1:
                if (!(i < filledRules.length)) {
                  _context.next = 12;
                  break;
                }
                rule = filledRules[i];
                _context.next = 5;
                return validateRule(name, value, rule, options, messageVariables);
              case 5:
                errors = _context.sent;
                if (!errors.length) {
                  _context.next = 9;
                  break;
                }
                reject([{
                  errors,
                  rule
                }]);
                return _context.abrupt("return");
              case 9:
                i += 1;
                _context.next = 1;
                break;
              case 12:
                resolve([]);
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function(_x6, _x7) {
          return _ref3.apply(this, arguments);
        };
      }());
    } else {
      var rulePromises = filledRules.map(function(rule) {
        return validateRule(name, value, rule, options, messageVariables).then(function(errors) {
          return {
            errors,
            rule
          };
        });
      });
      summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function(errors) {
        return Promise.reject(errors);
      });
    }
    summaryPromise.catch(function(e2) {
      return e2;
    });
    return summaryPromise;
  }
  function finishOnAllFailed(_x8) {
    return _finishOnAllFailed.apply(this, arguments);
  }
  function _finishOnAllFailed() {
    _finishOnAllFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(rulePromises) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Promise.all(rulePromises).then(function(errorsList) {
              var _ref5;
              var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(errorsList));
              return errors;
            }));
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _finishOnAllFailed.apply(this, arguments);
  }
  function finishOnFirstFailed(_x9) {
    return _finishOnFirstFailed.apply(this, arguments);
  }
  function _finishOnFirstFailed() {
    _finishOnFirstFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(rulePromises) {
      var count;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            count = 0;
            return _context4.abrupt("return", new Promise(function(resolve) {
              rulePromises.forEach(function(promise) {
                promise.then(function(ruleError) {
                  if (ruleError.errors.length) {
                    resolve([ruleError]);
                  }
                  count += 1;
                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _finishOnFirstFailed.apply(this, arguments);
  }
  function getNamePath(path2) {
    return toArray$1(path2);
  }
  function cloneByNamePathList(store, namePathList) {
    var newStore = {};
    namePathList.forEach(function(namePath) {
      var value = get(store, namePath);
      newStore = set(newStore, namePath, value);
    });
    return newStore;
  }
  function containsNamePath(namePathList, namePath) {
    var partialMatch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return namePathList && namePathList.some(function(path2) {
      return matchNamePath(namePath, path2, partialMatch);
    });
  }
  function matchNamePath(namePath, subNamePath) {
    var partialMatch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (!namePath || !subNamePath) {
      return false;
    }
    if (!partialMatch && namePath.length !== subNamePath.length) {
      return false;
    }
    return subNamePath.every(function(nameUnit, i) {
      return namePath[i] === nameUnit;
    });
  }
  function isSimilar(source, target) {
    if (source === target) {
      return true;
    }
    if (!source && target || source && !target) {
      return false;
    }
    if (!source || !target || _typeof(source) !== "object" || _typeof(target) !== "object") {
      return false;
    }
    var sourceKeys = Object.keys(source);
    var targetKeys = Object.keys(target);
    var keys2 = new Set([].concat(sourceKeys, targetKeys));
    return _toConsumableArray(keys2).every(function(key) {
      var sourceValue = source[key];
      var targetValue = target[key];
      if (typeof sourceValue === "function" && typeof targetValue === "function") {
        return true;
      }
      return sourceValue === targetValue;
    });
  }
  function defaultGetValueFromEvent(valuePropName) {
    var event = arguments.length <= 1 ? void 0 : arguments[1];
    if (event && event.target && _typeof(event.target) === "object" && valuePropName in event.target) {
      return event.target[valuePropName];
    }
    return event;
  }
  function move(array4, moveIndex, toIndex) {
    var length2 = array4.length;
    if (moveIndex < 0 || moveIndex >= length2 || toIndex < 0 || toIndex >= length2) {
      return array4;
    }
    var item = array4[moveIndex];
    var diff = moveIndex - toIndex;
    if (diff > 0) {
      return [].concat(_toConsumableArray(array4.slice(0, toIndex)), [item], _toConsumableArray(array4.slice(toIndex, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, length2)));
    }
    if (diff < 0) {
      return [].concat(_toConsumableArray(array4.slice(0, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array4.slice(toIndex + 1, length2)));
    }
    return array4;
  }
  var _excluded$6 = ["name"];
  var EMPTY_ERRORS = [];
  function requireUpdate(shouldUpdate, prev2, next2, prevValue, nextValue, info) {
    if (typeof shouldUpdate === "function") {
      return shouldUpdate(prev2, next2, "source" in info ? {
        source: info.source
      } : {});
    }
    return prevValue !== nextValue;
  }
  var Field = /* @__PURE__ */ function(_React$Component) {
    _inherits(Field2, _React$Component);
    var _super = _createSuper(Field2);
    function Field2(props) {
      var _this;
      _classCallCheck(this, Field2);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "state", {
        resetCount: 0
      });
      _defineProperty(_assertThisInitialized(_this), "cancelRegisterFunc", null);
      _defineProperty(_assertThisInitialized(_this), "mounted", false);
      _defineProperty(_assertThisInitialized(_this), "touched", false);
      _defineProperty(_assertThisInitialized(_this), "dirty", false);
      _defineProperty(_assertThisInitialized(_this), "validatePromise", void 0);
      _defineProperty(_assertThisInitialized(_this), "prevValidating", void 0);
      _defineProperty(_assertThisInitialized(_this), "errors", EMPTY_ERRORS);
      _defineProperty(_assertThisInitialized(_this), "warnings", EMPTY_ERRORS);
      _defineProperty(_assertThisInitialized(_this), "cancelRegister", function() {
        var _this$props = _this.props, preserve2 = _this$props.preserve, isListField = _this$props.isListField, name = _this$props.name;
        if (_this.cancelRegisterFunc) {
          _this.cancelRegisterFunc(isListField, preserve2, getNamePath(name));
        }
        _this.cancelRegisterFunc = null;
      });
      _defineProperty(_assertThisInitialized(_this), "getNamePath", function() {
        var _this$props2 = _this.props, name = _this$props2.name, fieldContext = _this$props2.fieldContext;
        var _fieldContext$prefixN = fieldContext.prefixName, prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
        return name !== void 0 ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
      });
      _defineProperty(_assertThisInitialized(_this), "getRules", function() {
        var _this$props3 = _this.props, _this$props3$rules = _this$props3.rules, rules2 = _this$props3$rules === void 0 ? [] : _this$props3$rules, fieldContext = _this$props3.fieldContext;
        return rules2.map(function(rule) {
          if (typeof rule === "function") {
            return rule(fieldContext);
          }
          return rule;
        });
      });
      _defineProperty(_assertThisInitialized(_this), "refresh", function() {
        if (!_this.mounted) return;
        _this.setState(function(_ref) {
          var resetCount = _ref.resetCount;
          return {
            resetCount: resetCount + 1
          };
        });
      });
      _defineProperty(_assertThisInitialized(_this), "metaCache", null);
      _defineProperty(_assertThisInitialized(_this), "triggerMetaEvent", function(destroy) {
        var onMetaChange = _this.props.onMetaChange;
        if (onMetaChange) {
          var _meta = _objectSpread2(_objectSpread2({}, _this.getMeta()), {}, {
            destroy
          });
          if (!isEqual(_this.metaCache, _meta)) {
            onMetaChange(_meta);
          }
          _this.metaCache = _meta;
        } else {
          _this.metaCache = null;
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onStoreChange", function(prevStore, namePathList, info) {
        var _this$props4 = _this.props, shouldUpdate = _this$props4.shouldUpdate, _this$props4$dependen = _this$props4.dependencies, dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen, onReset = _this$props4.onReset;
        var store = info.store;
        var namePath = _this.getNamePath();
        var prevValue = _this.getValue(prevStore);
        var curValue = _this.getValue(store);
        var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
        if (info.type === "valueUpdate" && info.source === "external" && !isEqual(prevValue, curValue)) {
          _this.touched = true;
          _this.dirty = true;
          _this.validatePromise = null;
          _this.errors = EMPTY_ERRORS;
          _this.warnings = EMPTY_ERRORS;
          _this.triggerMetaEvent();
        }
        switch (info.type) {
          case "reset":
            if (!namePathList || namePathMatch) {
              _this.touched = false;
              _this.dirty = false;
              _this.validatePromise = void 0;
              _this.errors = EMPTY_ERRORS;
              _this.warnings = EMPTY_ERRORS;
              _this.triggerMetaEvent();
              onReset === null || onReset === void 0 || onReset();
              _this.refresh();
              return;
            }
            break;
          case "remove": {
            if (shouldUpdate && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
          case "setField": {
            var data = info.data;
            if (namePathMatch) {
              if ("touched" in data) {
                _this.touched = data.touched;
              }
              if ("validating" in data && !("originRCField" in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }
              if ("errors" in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }
              if ("warnings" in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }
              _this.dirty = true;
              _this.triggerMetaEvent();
              _this.reRender();
              return;
            } else if ("value" in data && containsNamePath(namePathList, namePath, true)) {
              _this.reRender();
              return;
            }
            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
          case "dependenciesUpdate": {
            var dependencyList = dependencies.map(getNamePath);
            if (dependencyList.some(function(dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();
              return;
            }
            break;
          }
          default:
            if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
        }
        if (shouldUpdate === true) {
          _this.reRender();
        }
      });
      _defineProperty(_assertThisInitialized(_this), "validateRules", function(options) {
        var namePath = _this.getNamePath();
        var currentValue = _this.getValue();
        var _ref2 = options || {}, triggerName = _ref2.triggerName, _ref2$validateOnly = _ref2.validateOnly, validateOnly = _ref2$validateOnly === void 0 ? false : _ref2$validateOnly;
        var rootPromise = Promise.resolve().then(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
          var _this$props5, _this$props5$validate, validateFirst, messageVariables, validateDebounce, filteredRules, promise;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (_this.mounted) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", []);
              case 2:
                _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables, validateDebounce = _this$props5.validateDebounce;
                filteredRules = _this.getRules();
                if (triggerName) {
                  filteredRules = filteredRules.filter(function(rule) {
                    return rule;
                  }).filter(function(rule) {
                    var validateTrigger = rule.validateTrigger;
                    if (!validateTrigger) {
                      return true;
                    }
                    var triggerList = toArray$1(validateTrigger);
                    return triggerList.includes(triggerName);
                  });
                }
                if (!(validateDebounce && triggerName)) {
                  _context.next = 10;
                  break;
                }
                _context.next = 8;
                return new Promise(function(resolve) {
                  setTimeout(resolve, validateDebounce);
                });
              case 8:
                if (!(_this.validatePromise !== rootPromise)) {
                  _context.next = 10;
                  break;
                }
                return _context.abrupt("return", []);
              case 10:
                promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
                promise.catch(function(e2) {
                  return e2;
                }).then(function() {
                  var ruleErrors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : EMPTY_ERRORS;
                  if (_this.validatePromise === rootPromise) {
                    var _ruleErrors$forEach;
                    _this.validatePromise = null;
                    var nextErrors = [];
                    var nextWarnings = [];
                    (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref4) {
                      var warningOnly = _ref4.rule.warningOnly, _ref4$errors = _ref4.errors, errors = _ref4$errors === void 0 ? EMPTY_ERRORS : _ref4$errors;
                      if (warningOnly) {
                        nextWarnings.push.apply(nextWarnings, _toConsumableArray(errors));
                      } else {
                        nextErrors.push.apply(nextErrors, _toConsumableArray(errors));
                      }
                    });
                    _this.errors = nextErrors;
                    _this.warnings = nextWarnings;
                    _this.triggerMetaEvent();
                    _this.reRender();
                  }
                });
                return _context.abrupt("return", promise);
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })));
        if (validateOnly) {
          return rootPromise;
        }
        _this.validatePromise = rootPromise;
        _this.dirty = true;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
        _this.reRender();
        return rootPromise;
      });
      _defineProperty(_assertThisInitialized(_this), "isFieldValidating", function() {
        return !!_this.validatePromise;
      });
      _defineProperty(_assertThisInitialized(_this), "isFieldTouched", function() {
        return _this.touched;
      });
      _defineProperty(_assertThisInitialized(_this), "isFieldDirty", function() {
        if (_this.dirty || _this.props.initialValue !== void 0) {
          return true;
        }
        var fieldContext = _this.props.fieldContext;
        var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK), getInitialValue = _fieldContext$getInte.getInitialValue;
        if (getInitialValue(_this.getNamePath()) !== void 0) {
          return true;
        }
        return false;
      });
      _defineProperty(_assertThisInitialized(_this), "getErrors", function() {
        return _this.errors;
      });
      _defineProperty(_assertThisInitialized(_this), "getWarnings", function() {
        return _this.warnings;
      });
      _defineProperty(_assertThisInitialized(_this), "isListField", function() {
        return _this.props.isListField;
      });
      _defineProperty(_assertThisInitialized(_this), "isList", function() {
        return _this.props.isList;
      });
      _defineProperty(_assertThisInitialized(_this), "isPreserve", function() {
        return _this.props.preserve;
      });
      _defineProperty(_assertThisInitialized(_this), "getMeta", function() {
        _this.prevValidating = _this.isFieldValidating();
        var meta = {
          touched: _this.isFieldTouched(),
          validating: _this.prevValidating,
          errors: _this.errors,
          warnings: _this.warnings,
          name: _this.getNamePath(),
          validated: _this.validatePromise === null
        };
        return meta;
      });
      _defineProperty(_assertThisInitialized(_this), "getOnlyChild", function(children) {
        if (typeof children === "function") {
          var _meta2 = _this.getMeta();
          return _objectSpread2(_objectSpread2({}, _this.getOnlyChild(children(_this.getControlled(), _meta2, _this.props.fieldContext))), {}, {
            isFunction: true
          });
        }
        var childList = toArray$2(children);
        if (childList.length !== 1 || !/* @__PURE__ */ React__namespace.isValidElement(childList[0])) {
          return {
            child: childList,
            isFunction: false
          };
        }
        return {
          child: childList[0],
          isFunction: false
        };
      });
      _defineProperty(_assertThisInitialized(_this), "getValue", function(store) {
        var getFieldsValue = _this.props.fieldContext.getFieldsValue;
        var namePath = _this.getNamePath();
        return get(store || getFieldsValue(true), namePath);
      });
      _defineProperty(_assertThisInitialized(_this), "getControlled", function() {
        var childProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _this$props6 = _this.props, name = _this$props6.name, trigger = _this$props6.trigger, validateTrigger = _this$props6.validateTrigger, getValueFromEvent = _this$props6.getValueFromEvent, normalize2 = _this$props6.normalize, valuePropName = _this$props6.valuePropName, getValueProps = _this$props6.getValueProps, fieldContext = _this$props6.fieldContext;
        var mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : fieldContext.validateTrigger;
        var namePath = _this.getNamePath();
        var getInternalHooks22 = fieldContext.getInternalHooks, getFieldsValue = fieldContext.getFieldsValue;
        var _getInternalHooks = getInternalHooks22(HOOK_MARK), dispatch = _getInternalHooks.dispatch;
        var value = _this.getValue();
        var mergedGetValueProps = getValueProps || function(val) {
          return _defineProperty({}, valuePropName, val);
        };
        var originTriggerFunc = childProps[trigger];
        var valueProps = name !== void 0 ? mergedGetValueProps(value) : {};
        var control = _objectSpread2(_objectSpread2({}, childProps), valueProps);
        control[trigger] = function() {
          _this.touched = true;
          _this.dirty = true;
          _this.triggerMetaEvent();
          var newValue;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (getValueFromEvent) {
            newValue = getValueFromEvent.apply(void 0, args);
          } else {
            newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
          }
          if (normalize2) {
            newValue = normalize2(newValue, value, getFieldsValue(true));
          }
          dispatch({
            type: "updateValue",
            namePath,
            value: newValue
          });
          if (originTriggerFunc) {
            originTriggerFunc.apply(void 0, args);
          }
        };
        var validateTriggerList = toArray$1(mergedValidateTrigger || []);
        validateTriggerList.forEach(function(triggerName) {
          var originTrigger = control[triggerName];
          control[triggerName] = function() {
            if (originTrigger) {
              originTrigger.apply(void 0, arguments);
            }
            var rules2 = _this.props.rules;
            if (rules2 && rules2.length) {
              dispatch({
                type: "validateField",
                namePath,
                triggerName
              });
            }
          };
        });
        return control;
      });
      if (props.fieldContext) {
        var getInternalHooks2 = props.fieldContext.getInternalHooks;
        var _getInternalHooks2 = getInternalHooks2(HOOK_MARK), initEntityValue = _getInternalHooks2.initEntityValue;
        initEntityValue(_assertThisInitialized(_this));
      }
      return _this;
    }
    _createClass(Field2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props7 = this.props, shouldUpdate = _this$props7.shouldUpdate, fieldContext = _this$props7.fieldContext;
        this.mounted = true;
        if (fieldContext) {
          var getInternalHooks2 = fieldContext.getInternalHooks;
          var _getInternalHooks3 = getInternalHooks2(HOOK_MARK), registerField = _getInternalHooks3.registerField;
          this.cancelRegisterFunc = registerField(this);
        }
        if (shouldUpdate === true) {
          this.reRender();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.cancelRegister();
        this.triggerMetaEvent(true);
        this.mounted = false;
      }
    }, {
      key: "reRender",
      value: function reRender() {
        if (!this.mounted) return;
        this.forceUpdate();
      }
    }, {
      key: "render",
      value: function render2() {
        var resetCount = this.state.resetCount;
        var children = this.props.children;
        var _this$getOnlyChild = this.getOnlyChild(children), child = _this$getOnlyChild.child, isFunction = _this$getOnlyChild.isFunction;
        var returnChildNode;
        if (isFunction) {
          returnChildNode = child;
        } else if (/* @__PURE__ */ React__namespace.isValidElement(child)) {
          returnChildNode = /* @__PURE__ */ React__namespace.cloneElement(child, this.getControlled(child.props));
        } else {
          warningOnce(!child, "`children` of Field is not validate ReactElement.");
          returnChildNode = child;
        }
        return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, {
          key: resetCount
        }, returnChildNode);
      }
    }]);
    return Field2;
  }(React__namespace.Component);
  _defineProperty(Field, "contextType", Context);
  _defineProperty(Field, "defaultProps", {
    trigger: "onChange",
    valuePropName: "value"
  });
  function WrapperField(_ref6) {
    var name = _ref6.name, restProps = _objectWithoutProperties(_ref6, _excluded$6);
    var fieldContext = React__namespace.useContext(Context);
    var listContext = React__namespace.useContext(ListContext);
    var namePath = name !== void 0 ? getNamePath(name) : void 0;
    var key = "keep";
    if (!restProps.isListField) {
      key = "_".concat((namePath || []).join("_"));
    }
    return /* @__PURE__ */ React__namespace.createElement(Field, _extends({
      key,
      name: namePath,
      isListField: !!listContext
    }, restProps, {
      fieldContext
    }));
  }
  function List(_ref) {
    var name = _ref.name, initialValue = _ref.initialValue, children = _ref.children, rules2 = _ref.rules, validateTrigger = _ref.validateTrigger, isListField = _ref.isListField;
    var context = React__namespace.useContext(Context);
    var wrapperListContext = React__namespace.useContext(ListContext);
    var keyRef = React__namespace.useRef({
      keys: [],
      id: 0
    });
    var keyManager = keyRef.current;
    var prefixName = React__namespace.useMemo(function() {
      var parentPrefixName = getNamePath(context.prefixName) || [];
      return [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));
    }, [context.prefixName, name]);
    var fieldContext = React__namespace.useMemo(function() {
      return _objectSpread2(_objectSpread2({}, context), {}, {
        prefixName
      });
    }, [context, prefixName]);
    var listContext = React__namespace.useMemo(function() {
      return {
        getKey: function getKey(namePath) {
          var len = prefixName.length;
          var pathName = namePath[len];
          return [keyManager.keys[pathName], namePath.slice(len + 1)];
        }
      };
    }, [prefixName]);
    if (typeof children !== "function") {
      warningOnce(false, "Form.List only accepts function as children.");
      return null;
    }
    var shouldUpdate = function shouldUpdate2(prevValue, nextValue, _ref2) {
      var source = _ref2.source;
      if (source === "internal") {
        return false;
      }
      return prevValue !== nextValue;
    };
    return /* @__PURE__ */ React__namespace.createElement(ListContext.Provider, {
      value: listContext
    }, /* @__PURE__ */ React__namespace.createElement(Context.Provider, {
      value: fieldContext
    }, /* @__PURE__ */ React__namespace.createElement(WrapperField, {
      name: [],
      shouldUpdate,
      rules: rules2,
      validateTrigger,
      initialValue,
      isList: true,
      isListField: isListField !== null && isListField !== void 0 ? isListField : !!wrapperListContext
    }, function(_ref3, meta) {
      var _ref3$value = _ref3.value, value = _ref3$value === void 0 ? [] : _ref3$value, onChange = _ref3.onChange;
      var getFieldValue = context.getFieldValue;
      var getNewValue = function getNewValue2() {
        var values = getFieldValue(prefixName || []);
        return values || [];
      };
      var operations = {
        add: function add(defaultValue, index2) {
          var newValue = getNewValue();
          if (index2 >= 0 && index2 <= newValue.length) {
            keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index2)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index2)));
            onChange([].concat(_toConsumableArray(newValue.slice(0, index2)), [defaultValue], _toConsumableArray(newValue.slice(index2))));
          } else {
            keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
            onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
          }
          keyManager.id += 1;
        },
        remove: function remove(index2) {
          var newValue = getNewValue();
          var indexSet = new Set(Array.isArray(index2) ? index2 : [index2]);
          if (indexSet.size <= 0) {
            return;
          }
          keyManager.keys = keyManager.keys.filter(function(_, keysIndex) {
            return !indexSet.has(keysIndex);
          });
          onChange(newValue.filter(function(_, valueIndex) {
            return !indexSet.has(valueIndex);
          }));
        },
        move: function move$1(from2, to) {
          if (from2 === to) {
            return;
          }
          var newValue = getNewValue();
          if (from2 < 0 || from2 >= newValue.length || to < 0 || to >= newValue.length) {
            return;
          }
          keyManager.keys = move(keyManager.keys, from2, to);
          onChange(move(newValue, from2, to));
        }
      };
      var listValue = value || [];
      if (!Array.isArray(listValue)) {
        listValue = [];
      }
      return children(listValue.map(function(__, index2) {
        var key = keyManager.keys[index2];
        if (key === void 0) {
          keyManager.keys[index2] = keyManager.id;
          key = keyManager.keys[index2];
          keyManager.id += 1;
        }
        return {
          name: index2,
          key,
          isListField: true
        };
      }), operations, meta);
    })));
  }
  function allPromiseFinish(promiseList) {
    var hasError = false;
    var count = promiseList.length;
    var results = [];
    if (!promiseList.length) {
      return Promise.resolve([]);
    }
    return new Promise(function(resolve, reject) {
      promiseList.forEach(function(promise, index2) {
        promise.catch(function(e2) {
          hasError = true;
          return e2;
        }).then(function(result) {
          count -= 1;
          results[index2] = result;
          if (count > 0) {
            return;
          }
          if (hasError) {
            reject(results);
          }
          resolve(results);
        });
      });
    });
  }
  var SPLIT = "__@field_split__";
  function normalize(namePath) {
    return namePath.map(function(cell) {
      return "".concat(_typeof(cell), ":").concat(cell);
    }).join(SPLIT);
  }
  var NameMap = /* @__PURE__ */ function() {
    function NameMap2() {
      _classCallCheck(this, NameMap2);
      _defineProperty(this, "kvs", /* @__PURE__ */ new Map());
    }
    _createClass(NameMap2, [{
      key: "set",
      value: function set2(key, value) {
        this.kvs.set(normalize(key), value);
      }
    }, {
      key: "get",
      value: function get2(key) {
        return this.kvs.get(normalize(key));
      }
    }, {
      key: "update",
      value: function update(key, updater) {
        var origin = this.get(key);
        var next2 = updater(origin);
        if (!next2) {
          this.delete(key);
        } else {
          this.set(key, next2);
        }
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        this.kvs.delete(normalize(key));
      }
      // Since we only use this in test, let simply realize this
    }, {
      key: "map",
      value: function map(callback) {
        return _toConsumableArray(this.kvs.entries()).map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
          var cells = key.split(SPLIT);
          return callback({
            key: cells.map(function(cell) {
              var _cell$match = cell.match(/^([^:]*):(.*)$/), _cell$match2 = _slicedToArray(_cell$match, 3), type4 = _cell$match2[1], unit2 = _cell$match2[2];
              return type4 === "number" ? Number(unit2) : unit2;
            }),
            value
          });
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var json = {};
        this.map(function(_ref3) {
          var key = _ref3.key, value = _ref3.value;
          json[key.join(".")] = value;
          return null;
        });
        return json;
      }
    }]);
    return NameMap2;
  }();
  var _excluded$5 = ["name"];
  var FormStore = /* @__PURE__ */ _createClass(function FormStore2(forceRootUpdate) {
    var _this = this;
    _classCallCheck(this, FormStore2);
    _defineProperty(this, "formHooked", false);
    _defineProperty(this, "forceRootUpdate", void 0);
    _defineProperty(this, "subscribable", true);
    _defineProperty(this, "store", {});
    _defineProperty(this, "fieldEntities", []);
    _defineProperty(this, "initialValues", {});
    _defineProperty(this, "callbacks", {});
    _defineProperty(this, "validateMessages", null);
    _defineProperty(this, "preserve", null);
    _defineProperty(this, "lastValidatePromise", null);
    _defineProperty(this, "getForm", function() {
      return {
        getFieldValue: _this.getFieldValue,
        getFieldsValue: _this.getFieldsValue,
        getFieldError: _this.getFieldError,
        getFieldWarning: _this.getFieldWarning,
        getFieldsError: _this.getFieldsError,
        isFieldsTouched: _this.isFieldsTouched,
        isFieldTouched: _this.isFieldTouched,
        isFieldValidating: _this.isFieldValidating,
        isFieldsValidating: _this.isFieldsValidating,
        resetFields: _this.resetFields,
        setFields: _this.setFields,
        setFieldValue: _this.setFieldValue,
        setFieldsValue: _this.setFieldsValue,
        validateFields: _this.validateFields,
        submit: _this.submit,
        _init: true,
        getInternalHooks: _this.getInternalHooks
      };
    });
    _defineProperty(this, "getInternalHooks", function(key) {
      if (key === HOOK_MARK) {
        _this.formHooked = true;
        return {
          dispatch: _this.dispatch,
          initEntityValue: _this.initEntityValue,
          registerField: _this.registerField,
          useSubscribe: _this.useSubscribe,
          setInitialValues: _this.setInitialValues,
          destroyForm: _this.destroyForm,
          setCallbacks: _this.setCallbacks,
          setValidateMessages: _this.setValidateMessages,
          getFields: _this.getFields,
          setPreserve: _this.setPreserve,
          getInitialValue: _this.getInitialValue,
          registerWatch: _this.registerWatch
        };
      }
      warningOnce(false, "`getInternalHooks` is internal usage. Should not call directly.");
      return null;
    });
    _defineProperty(this, "useSubscribe", function(subscribable) {
      _this.subscribable = subscribable;
    });
    _defineProperty(this, "prevWithoutPreserves", null);
    _defineProperty(this, "setInitialValues", function(initialValues, init) {
      _this.initialValues = initialValues || {};
      if (init) {
        var _this$prevWithoutPres;
        var nextStore = merge$1(initialValues, _this.store);
        (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 || _this$prevWithoutPres.map(function(_ref) {
          var namePath = _ref.key;
          nextStore = set(nextStore, namePath, get(initialValues, namePath));
        });
        _this.prevWithoutPreserves = null;
        _this.updateStore(nextStore);
      }
    });
    _defineProperty(this, "destroyForm", function(clearOnDestroy) {
      if (clearOnDestroy) {
        _this.updateStore({});
      } else {
        var prevWithoutPreserves = new NameMap();
        _this.getFieldEntities(true).forEach(function(entity) {
          if (!_this.isMergedPreserve(entity.isPreserve())) {
            prevWithoutPreserves.set(entity.getNamePath(), true);
          }
        });
        _this.prevWithoutPreserves = prevWithoutPreserves;
      }
    });
    _defineProperty(this, "getInitialValue", function(namePath) {
      var initValue = get(_this.initialValues, namePath);
      return namePath.length ? merge$1(initValue) : initValue;
    });
    _defineProperty(this, "setCallbacks", function(callbacks) {
      _this.callbacks = callbacks;
    });
    _defineProperty(this, "setValidateMessages", function(validateMessages) {
      _this.validateMessages = validateMessages;
    });
    _defineProperty(this, "setPreserve", function(preserve2) {
      _this.preserve = preserve2;
    });
    _defineProperty(this, "watchList", []);
    _defineProperty(this, "registerWatch", function(callback) {
      _this.watchList.push(callback);
      return function() {
        _this.watchList = _this.watchList.filter(function(fn) {
          return fn !== callback;
        });
      };
    });
    _defineProperty(this, "notifyWatch", function() {
      var namePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (_this.watchList.length) {
        var values = _this.getFieldsValue();
        var allValues = _this.getFieldsValue(true);
        _this.watchList.forEach(function(callback) {
          callback(values, allValues, namePath);
        });
      }
    });
    _defineProperty(this, "timeoutId", null);
    _defineProperty(this, "warningUnhooked", function() {
    });
    _defineProperty(this, "updateStore", function(nextStore) {
      _this.store = nextStore;
    });
    _defineProperty(this, "getFieldEntities", function() {
      var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (!pure) {
        return _this.fieldEntities;
      }
      return _this.fieldEntities.filter(function(field) {
        return field.getNamePath().length;
      });
    });
    _defineProperty(this, "getFieldsMap", function() {
      var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var cache = new NameMap();
      _this.getFieldEntities(pure).forEach(function(field) {
        var namePath = field.getNamePath();
        cache.set(namePath, field);
      });
      return cache;
    });
    _defineProperty(this, "getFieldEntitiesForNamePathList", function(nameList) {
      if (!nameList) {
        return _this.getFieldEntities(true);
      }
      var cache = _this.getFieldsMap(true);
      return nameList.map(function(name) {
        var namePath = getNamePath(name);
        return cache.get(namePath) || {
          INVALIDATE_NAME_PATH: getNamePath(name)
        };
      });
    });
    _defineProperty(this, "getFieldsValue", function(nameList, filterFunc) {
      _this.warningUnhooked();
      var mergedNameList;
      var mergedFilterFunc;
      var mergedStrict;
      if (nameList === true || Array.isArray(nameList)) {
        mergedNameList = nameList;
        mergedFilterFunc = filterFunc;
      } else if (nameList && _typeof(nameList) === "object") {
        mergedStrict = nameList.strict;
        mergedFilterFunc = nameList.filter;
      }
      if (mergedNameList === true && !mergedFilterFunc) {
        return _this.store;
      }
      var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null);
      var filteredNameList = [];
      fieldEntities.forEach(function(entity) {
        var _isListField, _ref3;
        var namePath = "INVALIDATE_NAME_PATH" in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
        if (mergedStrict) {
          var _isList, _ref2;
          if ((_isList = (_ref2 = entity).isList) !== null && _isList !== void 0 && _isList.call(_ref2)) {
            return;
          }
        } else if (!mergedNameList && (_isListField = (_ref3 = entity).isListField) !== null && _isListField !== void 0 && _isListField.call(_ref3)) {
          return;
        }
        if (!mergedFilterFunc) {
          filteredNameList.push(namePath);
        } else {
          var meta = "getMeta" in entity ? entity.getMeta() : null;
          if (mergedFilterFunc(meta)) {
            filteredNameList.push(namePath);
          }
        }
      });
      return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
    });
    _defineProperty(this, "getFieldValue", function(name) {
      _this.warningUnhooked();
      var namePath = getNamePath(name);
      return get(_this.store, namePath);
    });
    _defineProperty(this, "getFieldsError", function(nameList) {
      _this.warningUnhooked();
      var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
      return fieldEntities.map(function(entity, index2) {
        if (entity && !("INVALIDATE_NAME_PATH" in entity)) {
          return {
            name: entity.getNamePath(),
            errors: entity.getErrors(),
            warnings: entity.getWarnings()
          };
        }
        return {
          name: getNamePath(nameList[index2]),
          errors: [],
          warnings: []
        };
      });
    });
    _defineProperty(this, "getFieldError", function(name) {
      _this.warningUnhooked();
      var namePath = getNamePath(name);
      var fieldError = _this.getFieldsError([namePath])[0];
      return fieldError.errors;
    });
    _defineProperty(this, "getFieldWarning", function(name) {
      _this.warningUnhooked();
      var namePath = getNamePath(name);
      var fieldError = _this.getFieldsError([namePath])[0];
      return fieldError.warnings;
    });
    _defineProperty(this, "isFieldsTouched", function() {
      _this.warningUnhooked();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var arg0 = args[0], arg1 = args[1];
      var namePathList;
      var isAllFieldsTouched = false;
      if (args.length === 0) {
        namePathList = null;
      } else if (args.length === 1) {
        if (Array.isArray(arg0)) {
          namePathList = arg0.map(getNamePath);
          isAllFieldsTouched = false;
        } else {
          namePathList = null;
          isAllFieldsTouched = arg0;
        }
      } else {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = arg1;
      }
      var fieldEntities = _this.getFieldEntities(true);
      var isFieldTouched = function isFieldTouched2(field) {
        return field.isFieldTouched();
      };
      if (!namePathList) {
        return isAllFieldsTouched ? fieldEntities.every(function(entity) {
          return isFieldTouched(entity) || entity.isList();
        }) : fieldEntities.some(isFieldTouched);
      }
      var map = new NameMap();
      namePathList.forEach(function(shortNamePath) {
        map.set(shortNamePath, []);
      });
      fieldEntities.forEach(function(field) {
        var fieldNamePath = field.getNamePath();
        namePathList.forEach(function(shortNamePath) {
          if (shortNamePath.every(function(nameUnit, i) {
            return fieldNamePath[i] === nameUnit;
          })) {
            map.update(shortNamePath, function(list) {
              return [].concat(_toConsumableArray(list), [field]);
            });
          }
        });
      });
      var isNamePathListTouched = function isNamePathListTouched2(entities) {
        return entities.some(isFieldTouched);
      };
      var namePathListEntities = map.map(function(_ref4) {
        var value = _ref4.value;
        return value;
      });
      return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
    });
    _defineProperty(this, "isFieldTouched", function(name) {
      _this.warningUnhooked();
      return _this.isFieldsTouched([name]);
    });
    _defineProperty(this, "isFieldsValidating", function(nameList) {
      _this.warningUnhooked();
      var fieldEntities = _this.getFieldEntities();
      if (!nameList) {
        return fieldEntities.some(function(testField) {
          return testField.isFieldValidating();
        });
      }
      var namePathList = nameList.map(getNamePath);
      return fieldEntities.some(function(testField) {
        var fieldNamePath = testField.getNamePath();
        return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
      });
    });
    _defineProperty(this, "isFieldValidating", function(name) {
      _this.warningUnhooked();
      return _this.isFieldsValidating([name]);
    });
    _defineProperty(this, "resetWithFieldInitialValue", function() {
      var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var cache = new NameMap();
      var fieldEntities = _this.getFieldEntities(true);
      fieldEntities.forEach(function(field) {
        var initialValue = field.props.initialValue;
        var namePath = field.getNamePath();
        if (initialValue !== void 0) {
          var records = cache.get(namePath) || /* @__PURE__ */ new Set();
          records.add({
            entity: field,
            value: initialValue
          });
          cache.set(namePath, records);
        }
      });
      var resetWithFields = function resetWithFields2(entities) {
        entities.forEach(function(field) {
          var initialValue = field.props.initialValue;
          if (initialValue !== void 0) {
            var namePath = field.getNamePath();
            var formInitialValue = _this.getInitialValue(namePath);
            if (formInitialValue !== void 0) {
              warningOnce(false, "Form already set 'initialValues' with path '".concat(namePath.join("."), "'. Field can not overwrite it."));
            } else {
              var records = cache.get(namePath);
              if (records && records.size > 1) {
                warningOnce(false, "Multiple Field with path '".concat(namePath.join("."), "' set 'initialValue'. Can not decide which one to pick."));
              } else if (records) {
                var originValue = _this.getFieldValue(namePath);
                var isListField = field.isListField();
                if (!isListField && (!info.skipExist || originValue === void 0)) {
                  _this.updateStore(set(_this.store, namePath, _toConsumableArray(records)[0].value));
                }
              }
            }
          }
        });
      };
      var requiredFieldEntities;
      if (info.entities) {
        requiredFieldEntities = info.entities;
      } else if (info.namePathList) {
        requiredFieldEntities = [];
        info.namePathList.forEach(function(namePath) {
          var records = cache.get(namePath);
          if (records) {
            var _requiredFieldEntitie;
            (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function(r) {
              return r.entity;
            })));
          }
        });
      } else {
        requiredFieldEntities = fieldEntities;
      }
      resetWithFields(requiredFieldEntities);
    });
    _defineProperty(this, "resetFields", function(nameList) {
      _this.warningUnhooked();
      var prevStore = _this.store;
      if (!nameList) {
        _this.updateStore(merge$1(_this.initialValues));
        _this.resetWithFieldInitialValue();
        _this.notifyObservers(prevStore, null, {
          type: "reset"
        });
        _this.notifyWatch();
        return;
      }
      var namePathList = nameList.map(getNamePath);
      namePathList.forEach(function(namePath) {
        var initialValue = _this.getInitialValue(namePath);
        _this.updateStore(set(_this.store, namePath, initialValue));
      });
      _this.resetWithFieldInitialValue({
        namePathList
      });
      _this.notifyObservers(prevStore, namePathList, {
        type: "reset"
      });
      _this.notifyWatch(namePathList);
    });
    _defineProperty(this, "setFields", function(fields) {
      _this.warningUnhooked();
      var prevStore = _this.store;
      var namePathList = [];
      fields.forEach(function(fieldData) {
        var name = fieldData.name, data = _objectWithoutProperties(fieldData, _excluded$5);
        var namePath = getNamePath(name);
        namePathList.push(namePath);
        if ("value" in data) {
          _this.updateStore(set(_this.store, namePath, data.value));
        }
        _this.notifyObservers(prevStore, [namePath], {
          type: "setField",
          data: fieldData
        });
      });
      _this.notifyWatch(namePathList);
    });
    _defineProperty(this, "getFields", function() {
      var entities = _this.getFieldEntities(true);
      var fields = entities.map(function(field) {
        var namePath = field.getNamePath();
        var meta = field.getMeta();
        var fieldData = _objectSpread2(_objectSpread2({}, meta), {}, {
          name: namePath,
          value: _this.getFieldValue(namePath)
        });
        Object.defineProperty(fieldData, "originRCField", {
          value: true
        });
        return fieldData;
      });
      return fields;
    });
    _defineProperty(this, "initEntityValue", function(entity) {
      var initialValue = entity.props.initialValue;
      if (initialValue !== void 0) {
        var namePath = entity.getNamePath();
        var prevValue = get(_this.store, namePath);
        if (prevValue === void 0) {
          _this.updateStore(set(_this.store, namePath, initialValue));
        }
      }
    });
    _defineProperty(this, "isMergedPreserve", function(fieldPreserve) {
      var mergedPreserve = fieldPreserve !== void 0 ? fieldPreserve : _this.preserve;
      return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
    });
    _defineProperty(this, "registerField", function(entity) {
      _this.fieldEntities.push(entity);
      var namePath = entity.getNamePath();
      _this.notifyWatch([namePath]);
      if (entity.props.initialValue !== void 0) {
        var prevStore = _this.store;
        _this.resetWithFieldInitialValue({
          entities: [entity],
          skipExist: true
        });
        _this.notifyObservers(prevStore, [entity.getNamePath()], {
          type: "valueUpdate",
          source: "internal"
        });
      }
      return function(isListField, preserve2) {
        var subNamePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        _this.fieldEntities = _this.fieldEntities.filter(function(item) {
          return item !== entity;
        });
        if (!_this.isMergedPreserve(preserve2) && (!isListField || subNamePath.length > 1)) {
          var defaultValue = isListField ? void 0 : _this.getInitialValue(namePath);
          if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function(field) {
            return (
              // Only reset when no namePath exist
              !matchNamePath(field.getNamePath(), namePath)
            );
          })) {
            var _prevStore = _this.store;
            _this.updateStore(set(_prevStore, namePath, defaultValue, true));
            _this.notifyObservers(_prevStore, [namePath], {
              type: "remove"
            });
            _this.triggerDependenciesUpdate(_prevStore, namePath);
          }
        }
        _this.notifyWatch([namePath]);
      };
    });
    _defineProperty(this, "dispatch", function(action) {
      switch (action.type) {
        case "updateValue": {
          var namePath = action.namePath, value = action.value;
          _this.updateValue(namePath, value);
          break;
        }
        case "validateField": {
          var _namePath = action.namePath, triggerName = action.triggerName;
          _this.validateFields([_namePath], {
            triggerName
          });
          break;
        }
      }
    });
    _defineProperty(this, "notifyObservers", function(prevStore, namePathList, info) {
      if (_this.subscribable) {
        var mergedInfo = _objectSpread2(_objectSpread2({}, info), {}, {
          store: _this.getFieldsValue(true)
        });
        _this.getFieldEntities().forEach(function(_ref5) {
          var onStoreChange = _ref5.onStoreChange;
          onStoreChange(prevStore, namePathList, mergedInfo);
        });
      } else {
        _this.forceRootUpdate();
      }
    });
    _defineProperty(this, "triggerDependenciesUpdate", function(prevStore, namePath) {
      var childrenFields = _this.getDependencyChildrenFields(namePath);
      if (childrenFields.length) {
        _this.validateFields(childrenFields);
      }
      _this.notifyObservers(prevStore, childrenFields, {
        type: "dependenciesUpdate",
        relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
      });
      return childrenFields;
    });
    _defineProperty(this, "updateValue", function(name, value) {
      var namePath = getNamePath(name);
      var prevStore = _this.store;
      _this.updateStore(set(_this.store, namePath, value));
      _this.notifyObservers(prevStore, [namePath], {
        type: "valueUpdate",
        source: "internal"
      });
      _this.notifyWatch([namePath]);
      var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
      var onValuesChange = _this.callbacks.onValuesChange;
      if (onValuesChange) {
        var changedValues = cloneByNamePathList(_this.store, [namePath]);
        onValuesChange(changedValues, _this.getFieldsValue());
      }
      _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
    });
    _defineProperty(this, "setFieldsValue", function(store) {
      _this.warningUnhooked();
      var prevStore = _this.store;
      if (store) {
        var nextStore = merge$1(_this.store, store);
        _this.updateStore(nextStore);
      }
      _this.notifyObservers(prevStore, null, {
        type: "valueUpdate",
        source: "external"
      });
      _this.notifyWatch();
    });
    _defineProperty(this, "setFieldValue", function(name, value) {
      _this.setFields([{
        name,
        value
      }]);
    });
    _defineProperty(this, "getDependencyChildrenFields", function(rootNamePath) {
      var children = /* @__PURE__ */ new Set();
      var childrenFields = [];
      var dependencies2fields = new NameMap();
      _this.getFieldEntities().forEach(function(field) {
        var dependencies = field.props.dependencies;
        (dependencies || []).forEach(function(dependency) {
          var dependencyNamePath = getNamePath(dependency);
          dependencies2fields.update(dependencyNamePath, function() {
            var fields = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
            fields.add(field);
            return fields;
          });
        });
      });
      var fillChildren = function fillChildren2(namePath) {
        var fields = dependencies2fields.get(namePath) || /* @__PURE__ */ new Set();
        fields.forEach(function(field) {
          if (!children.has(field)) {
            children.add(field);
            var fieldNamePath = field.getNamePath();
            if (field.isFieldDirty() && fieldNamePath.length) {
              childrenFields.push(fieldNamePath);
              fillChildren2(fieldNamePath);
            }
          }
        });
      };
      fillChildren(rootNamePath);
      return childrenFields;
    });
    _defineProperty(this, "triggerOnFieldsChange", function(namePathList, filedErrors) {
      var onFieldsChange = _this.callbacks.onFieldsChange;
      if (onFieldsChange) {
        var fields = _this.getFields();
        if (filedErrors) {
          var cache = new NameMap();
          filedErrors.forEach(function(_ref6) {
            var name = _ref6.name, errors = _ref6.errors;
            cache.set(name, errors);
          });
          fields.forEach(function(field) {
            field.errors = cache.get(field.name) || field.errors;
          });
        }
        var changedFields = fields.filter(function(_ref7) {
          var fieldName = _ref7.name;
          return containsNamePath(namePathList, fieldName);
        });
        if (changedFields.length) {
          onFieldsChange(changedFields, fields);
        }
      }
    });
    _defineProperty(this, "validateFields", function(arg1, arg2) {
      _this.warningUnhooked();
      var nameList;
      var options;
      if (Array.isArray(arg1) || typeof arg1 === "string" || typeof arg2 === "string") {
        nameList = arg1;
        options = arg2;
      } else {
        options = arg1;
      }
      var provideNameList = !!nameList;
      var namePathList = provideNameList ? nameList.map(getNamePath) : [];
      var promiseList = [];
      var TMP_SPLIT = String(Date.now());
      var validateNamePathList = /* @__PURE__ */ new Set();
      var _ref8 = options || {}, recursive = _ref8.recursive, dirty = _ref8.dirty;
      _this.getFieldEntities(true).forEach(function(field) {
        if (!provideNameList) {
          namePathList.push(field.getNamePath());
        }
        if (!field.props.rules || !field.props.rules.length) {
          return;
        }
        if (dirty && !field.isFieldDirty()) {
          return;
        }
        var fieldNamePath = field.getNamePath();
        validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));
        if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
          var promise = field.validateRules(_objectSpread2({
            validateMessages: _objectSpread2(_objectSpread2({}, defaultValidateMessages), _this.validateMessages)
          }, options));
          promiseList.push(promise.then(function() {
            return {
              name: fieldNamePath,
              errors: [],
              warnings: []
            };
          }).catch(function(ruleErrors) {
            var _ruleErrors$forEach;
            var mergedErrors = [];
            var mergedWarnings = [];
            (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref9) {
              var warningOnly = _ref9.rule.warningOnly, errors = _ref9.errors;
              if (warningOnly) {
                mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
              } else {
                mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
              }
            });
            if (mergedErrors.length) {
              return Promise.reject({
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              });
            }
            return {
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            };
          }));
        }
      });
      var summaryPromise = allPromiseFinish(promiseList);
      _this.lastValidatePromise = summaryPromise;
      summaryPromise.catch(function(results) {
        return results;
      }).then(function(results) {
        var resultNamePathList = results.map(function(_ref10) {
          var name = _ref10.name;
          return name;
        });
        _this.notifyObservers(_this.store, resultNamePathList, {
          type: "validateFinish"
        });
        _this.triggerOnFieldsChange(resultNamePathList, results);
      });
      var returnPromise = summaryPromise.then(function() {
        if (_this.lastValidatePromise === summaryPromise) {
          return Promise.resolve(_this.getFieldsValue(namePathList));
        }
        return Promise.reject([]);
      }).catch(function(results) {
        var errorList = results.filter(function(result) {
          return result && result.errors.length;
        });
        return Promise.reject({
          values: _this.getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: _this.lastValidatePromise !== summaryPromise
        });
      });
      returnPromise.catch(function(e2) {
        return e2;
      });
      var triggerNamePathList = namePathList.filter(function(namePath) {
        return validateNamePathList.has(namePath.join(TMP_SPLIT));
      });
      _this.triggerOnFieldsChange(triggerNamePathList);
      return returnPromise;
    });
    _defineProperty(this, "submit", function() {
      _this.warningUnhooked();
      _this.validateFields().then(function(values) {
        var onFinish = _this.callbacks.onFinish;
        if (onFinish) {
          try {
            onFinish(values);
          } catch (err) {
            console.error(err);
          }
        }
      }).catch(function(e2) {
        var onFinishFailed = _this.callbacks.onFinishFailed;
        if (onFinishFailed) {
          onFinishFailed(e2);
        }
      });
    });
    this.forceRootUpdate = forceRootUpdate;
  });
  function useForm(form) {
    var formRef = React__namespace.useRef();
    var _React$useState = React__namespace.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), forceUpdate = _React$useState2[1];
    if (!formRef.current) {
      if (form) {
        formRef.current = form;
      } else {
        var forceReRender = function forceReRender2() {
          forceUpdate({});
        };
        var formStore = new FormStore(forceReRender);
        formRef.current = formStore.getForm();
      }
    }
    return [formRef.current];
  }
  var FormContext = /* @__PURE__ */ React__namespace.createContext({
    triggerFormChange: function triggerFormChange() {
    },
    triggerFormFinish: function triggerFormFinish() {
    },
    registerForm: function registerForm() {
    },
    unregisterForm: function unregisterForm() {
    }
  });
  var FormProvider = function FormProvider2(_ref) {
    var validateMessages = _ref.validateMessages, onFormChange = _ref.onFormChange, onFormFinish = _ref.onFormFinish, children = _ref.children;
    var formContext = React__namespace.useContext(FormContext);
    var formsRef = React__namespace.useRef({});
    return /* @__PURE__ */ React__namespace.createElement(FormContext.Provider, {
      value: _objectSpread2(_objectSpread2({}, formContext), {}, {
        validateMessages: _objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages),
        // =========================================================
        // =                  Global Form Control                  =
        // =========================================================
        triggerFormChange: function triggerFormChange2(name, changedFields) {
          if (onFormChange) {
            onFormChange(name, {
              changedFields,
              forms: formsRef.current
            });
          }
          formContext.triggerFormChange(name, changedFields);
        },
        triggerFormFinish: function triggerFormFinish2(name, values) {
          if (onFormFinish) {
            onFormFinish(name, {
              values,
              forms: formsRef.current
            });
          }
          formContext.triggerFormFinish(name, values);
        },
        registerForm: function registerForm2(name, form) {
          if (name) {
            formsRef.current = _objectSpread2(_objectSpread2({}, formsRef.current), {}, _defineProperty({}, name, form));
          }
          formContext.registerForm(name, form);
        },
        unregisterForm: function unregisterForm2(name) {
          var newForms = _objectSpread2({}, formsRef.current);
          delete newForms[name];
          formsRef.current = newForms;
          formContext.unregisterForm(name);
        }
      })
    }, children);
  };
  var _excluded$4 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"];
  var Form = function Form2(_ref, ref) {
    var name = _ref.name, initialValues = _ref.initialValues, fields = _ref.fields, form = _ref.form, preserve2 = _ref.preserve, children = _ref.children, _ref$component = _ref.component, Component = _ref$component === void 0 ? "form" : _ref$component, validateMessages = _ref.validateMessages, _ref$validateTrigger = _ref.validateTrigger, validateTrigger = _ref$validateTrigger === void 0 ? "onChange" : _ref$validateTrigger, onValuesChange = _ref.onValuesChange, _onFieldsChange = _ref.onFieldsChange, _onFinish = _ref.onFinish, onFinishFailed = _ref.onFinishFailed, clearOnDestroy = _ref.clearOnDestroy, restProps = _objectWithoutProperties(_ref, _excluded$4);
    var nativeElementRef = React__namespace.useRef(null);
    var formContext = React__namespace.useContext(FormContext);
    var _useForm = useForm(form), _useForm2 = _slicedToArray(_useForm, 1), formInstance = _useForm2[0];
    var _getInternalHooks = formInstance.getInternalHooks(HOOK_MARK), useSubscribe = _getInternalHooks.useSubscribe, setInitialValues = _getInternalHooks.setInitialValues, setCallbacks = _getInternalHooks.setCallbacks, setValidateMessages = _getInternalHooks.setValidateMessages, setPreserve = _getInternalHooks.setPreserve, destroyForm = _getInternalHooks.destroyForm;
    React__namespace.useImperativeHandle(ref, function() {
      return _objectSpread2(_objectSpread2({}, formInstance), {}, {
        nativeElement: nativeElementRef.current
      });
    });
    React__namespace.useEffect(function() {
      formContext.registerForm(name, formInstance);
      return function() {
        formContext.unregisterForm(name);
      };
    }, [formContext, formInstance, name]);
    setValidateMessages(_objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages));
    setCallbacks({
      onValuesChange,
      onFieldsChange: function onFieldsChange(changedFields) {
        formContext.triggerFormChange(name, changedFields);
        if (_onFieldsChange) {
          for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
          }
          _onFieldsChange.apply(void 0, [changedFields].concat(rest));
        }
      },
      onFinish: function onFinish(values) {
        formContext.triggerFormFinish(name, values);
        if (_onFinish) {
          _onFinish(values);
        }
      },
      onFinishFailed
    });
    setPreserve(preserve2);
    var mountRef = React__namespace.useRef(null);
    setInitialValues(initialValues, !mountRef.current);
    if (!mountRef.current) {
      mountRef.current = true;
    }
    React__namespace.useEffect(
      function() {
        return function() {
          return destroyForm(clearOnDestroy);
        };
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    var childrenNode;
    var childrenRenderProps = typeof children === "function";
    if (childrenRenderProps) {
      var _values = formInstance.getFieldsValue(true);
      childrenNode = children(_values, formInstance);
    } else {
      childrenNode = children;
    }
    useSubscribe(!childrenRenderProps);
    var prevFieldsRef = React__namespace.useRef();
    React__namespace.useEffect(function() {
      if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
        formInstance.setFields(fields || []);
      }
      prevFieldsRef.current = fields;
    }, [fields, formInstance]);
    var formContextValue = React__namespace.useMemo(function() {
      return _objectSpread2(_objectSpread2({}, formInstance), {}, {
        validateTrigger
      });
    }, [formInstance, validateTrigger]);
    var wrapperNode = /* @__PURE__ */ React__namespace.createElement(ListContext.Provider, {
      value: null
    }, /* @__PURE__ */ React__namespace.createElement(Context.Provider, {
      value: formContextValue
    }, childrenNode));
    if (Component === false) {
      return wrapperNode;
    }
    return /* @__PURE__ */ React__namespace.createElement(Component, _extends({}, restProps, {
      ref: nativeElementRef,
      onSubmit: function onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        formInstance.submit();
      },
      onReset: function onReset(event) {
        var _restProps$onReset;
        event.preventDefault();
        formInstance.resetFields();
        (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 || _restProps$onReset.call(restProps, event);
      }
    }), wrapperNode);
  };
  function stringify(value) {
    try {
      return JSON.stringify(value);
    } catch (err) {
      return Math.random();
    }
  }
  function useWatch$1() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var dependencies = args[0], _args$ = args[1], _form = _args$ === void 0 ? {} : _args$;
    var options = isFormInstance(_form) ? {
      form: _form
    } : _form;
    var form = options.form;
    var _useState = React.useState(), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
    var valueStr = React.useMemo(function() {
      return stringify(value);
    }, [value]);
    var valueStrRef = React.useRef(valueStr);
    valueStrRef.current = valueStr;
    var fieldContext = React.useContext(Context);
    var formInstance = form || fieldContext;
    var isValidForm = formInstance && formInstance._init;
    var namePath = getNamePath(dependencies);
    var namePathRef = React.useRef(namePath);
    namePathRef.current = namePath;
    React.useEffect(
      function() {
        if (!isValidForm) {
          return;
        }
        var getFieldsValue = formInstance.getFieldsValue, getInternalHooks2 = formInstance.getInternalHooks;
        var _getInternalHooks = getInternalHooks2(HOOK_MARK), registerWatch = _getInternalHooks.registerWatch;
        var getWatchValue = function getWatchValue2(values, allValues) {
          var watchValue = options.preserve ? allValues : values;
          return typeof dependencies === "function" ? dependencies(watchValue) : get(watchValue, namePathRef.current);
        };
        var cancelRegister = registerWatch(function(values, allValues) {
          var newValue = getWatchValue(values, allValues);
          var nextValueStr = stringify(newValue);
          if (valueStrRef.current !== nextValueStr) {
            valueStrRef.current = nextValueStr;
            setValue(newValue);
          }
        });
        var initialValue = getWatchValue(getFieldsValue(), getFieldsValue(true));
        if (value !== initialValue) {
          setValue(initialValue);
        }
        return cancelRegister;
      },
      // We do not need re-register since namePath content is the same
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isValidForm]
    );
    return value;
  }
  var InternalForm = /* @__PURE__ */ React__namespace.forwardRef(Form);
  var RefForm = InternalForm;
  RefForm.FormProvider = FormProvider;
  RefForm.Field = WrapperField;
  RefForm.List = List;
  RefForm.useForm = useForm;
  RefForm.useWatch = useWatch$1;
  const FormItemInputContext = /* @__PURE__ */ React__namespace.createContext({});
  const NoFormStyle = (_ref) => {
    let {
      children,
      status,
      override
    } = _ref;
    const formItemInputContext = React.useContext(FormItemInputContext);
    const newFormItemInputContext = React.useMemo(() => {
      const newContext = Object.assign({}, formItemInputContext);
      if (override) {
        delete newContext.isFormItemInput;
      }
      if (status) {
        delete newContext.status;
        delete newContext.hasFeedback;
        delete newContext.feedbackIcon;
      }
      return newContext;
    }, [status, override, formItemInputContext]);
    return /* @__PURE__ */ React__namespace.createElement(FormItemInputContext.Provider, {
      value: newFormItemInputContext
    }, children);
  };
  const ContextIsolator = (props) => {
    const {
      space,
      form,
      children
    } = props;
    if (children === void 0 || children === null) {
      return null;
    }
    let result = children;
    if (form) {
      result = /* @__PURE__ */ React.createElement(NoFormStyle, {
        override: true,
        status: true
      }, result);
    }
    if (space) {
      result = /* @__PURE__ */ React.createElement(NoCompactStyle, null, result);
    }
    return result;
  };
  function pickClosable(context) {
    if (!context) {
      return void 0;
    }
    return {
      closable: context.closable,
      closeIcon: context.closeIcon
    };
  }
  function useClosableConfig(closableCollection) {
    const {
      closable,
      closeIcon
    } = closableCollection || {};
    return React.useMemo(() => {
      if (
        // If `closable`, whatever rest be should be true
        !closable && (closable === false || closeIcon === false || closeIcon === null)
      ) {
        return false;
      }
      if (closable === void 0 && closeIcon === void 0) {
        return null;
      }
      let closableConfig = {
        closeIcon: typeof closeIcon !== "boolean" && closeIcon !== null ? closeIcon : void 0
      };
      if (closable && typeof closable === "object") {
        closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
      }
      return closableConfig;
    }, [closable, closeIcon]);
  }
  function assignWithoutUndefined() {
    const target = {};
    for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
      objList[_key] = arguments[_key];
    }
    objList.forEach((obj) => {
      if (obj) {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== void 0) {
            target[key] = obj[key];
          }
        });
      }
    });
    return target;
  }
  const EmptyFallbackCloseCollection = {};
  function useClosable(propCloseCollection, contextCloseCollection) {
    let fallbackCloseCollection = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EmptyFallbackCloseCollection;
    const propCloseConfig = useClosableConfig(propCloseCollection);
    const contextCloseConfig = useClosableConfig(contextCloseCollection);
    const closeBtnIsDisabled = typeof propCloseConfig !== "boolean" ? !!(propCloseConfig === null || propCloseConfig === void 0 ? void 0 : propCloseConfig.disabled) : false;
    const mergedFallbackCloseCollection = React.useMemo(() => Object.assign({
      closeIcon: /* @__PURE__ */ React.createElement(RefIcon$4, null)
    }, fallbackCloseCollection), [fallbackCloseCollection]);
    const mergedClosableConfig = React.useMemo(() => {
      if (propCloseConfig === false) {
        return false;
      }
      if (propCloseConfig) {
        return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
      }
      if (contextCloseConfig === false) {
        return false;
      }
      if (contextCloseConfig) {
        return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig);
      }
      return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
    }, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);
    return React.useMemo(() => {
      if (mergedClosableConfig === false) {
        return [false, null, closeBtnIsDisabled];
      }
      const {
        closeIconRender
      } = mergedFallbackCloseCollection;
      const {
        closeIcon
      } = mergedClosableConfig;
      let mergedCloseIcon = closeIcon;
      if (mergedCloseIcon !== null && mergedCloseIcon !== void 0) {
        if (closeIconRender) {
          mergedCloseIcon = closeIconRender(closeIcon);
        }
        const ariaProps = pickAttrs(mergedClosableConfig, true);
        if (Object.keys(ariaProps).length) {
          mergedCloseIcon = /* @__PURE__ */ React.isValidElement(mergedCloseIcon) ? /* @__PURE__ */ React.cloneElement(mergedCloseIcon, ariaProps) : /* @__PURE__ */ React.createElement("span", Object.assign({}, ariaProps), mergedCloseIcon);
        }
      }
      return [true, mergedCloseIcon, closeBtnIsDisabled];
    }, [mergedClosableConfig, mergedFallbackCloseCollection]);
  }
  const Element$1 = (props) => {
    const {
      prefixCls,
      className,
      style: style2,
      size,
      shape
    } = props;
    const sizeCls = classNames({
      [`${prefixCls}-lg`]: size === "large",
      [`${prefixCls}-sm`]: size === "small"
    });
    const shapeCls = classNames({
      [`${prefixCls}-circle`]: shape === "circle",
      [`${prefixCls}-square`]: shape === "square",
      [`${prefixCls}-round`]: shape === "round"
    });
    const sizeStyle = React__namespace.useMemo(() => typeof size === "number" ? {
      width: size,
      height: size,
      lineHeight: `${size}px`
    } : {}, [size]);
    return /* @__PURE__ */ React__namespace.createElement("span", {
      className: classNames(prefixCls, sizeCls, shapeCls, className),
      style: Object.assign(Object.assign({}, sizeStyle), style2)
    });
  };
  const skeletonClsLoading = new Keyframe(`ant-skeleton-loading`, {
    "0%": {
      backgroundPosition: "100% 50%"
    },
    "100%": {
      backgroundPosition: "0 50%"
    }
  });
  const genSkeletonElementCommonSize = (size) => ({
    height: size,
    lineHeight: unit$1(size)
  });
  const genSkeletonElementAvatarSize = (size) => Object.assign({
    width: size
  }, genSkeletonElementCommonSize(size));
  const genSkeletonColor = (token2) => ({
    background: token2.skeletonLoadingBackground,
    backgroundSize: "400% 100%",
    animationName: skeletonClsLoading,
    animationDuration: token2.skeletonLoadingMotionDuration,
    animationTimingFunction: "ease",
    animationIterationCount: "infinite"
  });
  const genSkeletonElementInputSize = (size, calc) => Object.assign({
    width: calc(size).mul(5).equal(),
    minWidth: calc(size).mul(5).equal()
  }, genSkeletonElementCommonSize(size));
  const genSkeletonElementAvatar = (token2) => {
    const {
      skeletonAvatarCls,
      gradientFromColor,
      controlHeight,
      controlHeightLG,
      controlHeightSM
    } = token2;
    return {
      [skeletonAvatarCls]: Object.assign({
        display: "inline-block",
        verticalAlign: "top",
        background: gradientFromColor
      }, genSkeletonElementAvatarSize(controlHeight)),
      [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
        borderRadius: "50%"
      },
      [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
      [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
    };
  };
  const genSkeletonElementInput = (token2) => {
    const {
      controlHeight,
      borderRadiusSM,
      skeletonInputCls,
      controlHeightLG,
      controlHeightSM,
      gradientFromColor,
      calc
    } = token2;
    return {
      [skeletonInputCls]: Object.assign({
        display: "inline-block",
        verticalAlign: "top",
        background: gradientFromColor,
        borderRadius: borderRadiusSM
      }, genSkeletonElementInputSize(controlHeight, calc)),
      [`${skeletonInputCls}-lg`]: Object.assign({}, genSkeletonElementInputSize(controlHeightLG, calc)),
      [`${skeletonInputCls}-sm`]: Object.assign({}, genSkeletonElementInputSize(controlHeightSM, calc))
    };
  };
  const genSkeletonElementImageSize = (size) => Object.assign({
    width: size
  }, genSkeletonElementCommonSize(size));
  const genSkeletonElementImage = (token2) => {
    const {
      skeletonImageCls,
      imageSizeBase,
      gradientFromColor,
      borderRadiusSM,
      calc
    } = token2;
    return {
      [skeletonImageCls]: Object.assign(Object.assign({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        background: gradientFromColor,
        borderRadius: borderRadiusSM
      }, genSkeletonElementImageSize(calc(imageSizeBase).mul(2).equal())), {
        [`${skeletonImageCls}-path`]: {
          fill: "#bfbfbf"
        },
        [`${skeletonImageCls}-svg`]: Object.assign(Object.assign({}, genSkeletonElementImageSize(imageSizeBase)), {
          maxWidth: calc(imageSizeBase).mul(4).equal(),
          maxHeight: calc(imageSizeBase).mul(4).equal()
        }),
        [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
          borderRadius: "50%"
        }
      }),
      [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
        borderRadius: "50%"
      }
    };
  };
  const genSkeletonElementButtonShape = (token2, size, buttonCls) => {
    const {
      skeletonButtonCls
    } = token2;
    return {
      [`${buttonCls}${skeletonButtonCls}-circle`]: {
        width: size,
        minWidth: size,
        borderRadius: "50%"
      },
      [`${buttonCls}${skeletonButtonCls}-round`]: {
        borderRadius: size
      }
    };
  };
  const genSkeletonElementButtonSize = (size, calc) => Object.assign({
    width: calc(size).mul(2).equal(),
    minWidth: calc(size).mul(2).equal()
  }, genSkeletonElementCommonSize(size));
  const genSkeletonElementButton = (token2) => {
    const {
      borderRadiusSM,
      skeletonButtonCls,
      controlHeight,
      controlHeightLG,
      controlHeightSM,
      gradientFromColor,
      calc
    } = token2;
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      [skeletonButtonCls]: Object.assign({
        display: "inline-block",
        verticalAlign: "top",
        background: gradientFromColor,
        borderRadius: borderRadiusSM,
        width: calc(controlHeight).mul(2).equal(),
        minWidth: calc(controlHeight).mul(2).equal()
      }, genSkeletonElementButtonSize(controlHeight, calc))
    }, genSkeletonElementButtonShape(token2, controlHeight, skeletonButtonCls)), {
      [`${skeletonButtonCls}-lg`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightLG, calc))
    }), genSkeletonElementButtonShape(token2, controlHeightLG, `${skeletonButtonCls}-lg`)), {
      [`${skeletonButtonCls}-sm`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightSM, calc))
    }), genSkeletonElementButtonShape(token2, controlHeightSM, `${skeletonButtonCls}-sm`));
  };
  const genBaseStyle = (token2) => {
    const {
      componentCls,
      skeletonAvatarCls,
      skeletonTitleCls,
      skeletonParagraphCls,
      skeletonButtonCls,
      skeletonInputCls,
      skeletonImageCls,
      controlHeight,
      controlHeightLG,
      controlHeightSM,
      gradientFromColor,
      padding,
      marginSM,
      borderRadius,
      titleHeight,
      blockRadius,
      paragraphLiHeight,
      controlHeightXS,
      paragraphMarginTop
    } = token2;
    return {
      [componentCls]: {
        display: "table",
        width: "100%",
        [`${componentCls}-header`]: {
          display: "table-cell",
          paddingInlineEnd: padding,
          verticalAlign: "top",
          // Avatar
          [skeletonAvatarCls]: Object.assign({
            display: "inline-block",
            verticalAlign: "top",
            background: gradientFromColor
          }, genSkeletonElementAvatarSize(controlHeight)),
          [`${skeletonAvatarCls}-circle`]: {
            borderRadius: "50%"
          },
          [`${skeletonAvatarCls}-lg`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
          [`${skeletonAvatarCls}-sm`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
        },
        [`${componentCls}-content`]: {
          display: "table-cell",
          width: "100%",
          verticalAlign: "top",
          // Title
          [skeletonTitleCls]: {
            width: "100%",
            height: titleHeight,
            background: gradientFromColor,
            borderRadius: blockRadius,
            [`+ ${skeletonParagraphCls}`]: {
              marginBlockStart: controlHeightSM
            }
          },
          // paragraph
          [skeletonParagraphCls]: {
            padding: 0,
            "> li": {
              width: "100%",
              height: paragraphLiHeight,
              listStyle: "none",
              background: gradientFromColor,
              borderRadius: blockRadius,
              "+ li": {
                marginBlockStart: controlHeightXS
              }
            }
          },
          [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
            width: "61%"
          }
        },
        [`&-round ${componentCls}-content`]: {
          [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
            borderRadius
          }
        }
      },
      [`${componentCls}-with-avatar ${componentCls}-content`]: {
        // Title
        [skeletonTitleCls]: {
          marginBlockStart: marginSM,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: paragraphMarginTop
          }
        }
      },
      // Skeleton element
      [`${componentCls}${componentCls}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "auto"
      }, genSkeletonElementButton(token2)), genSkeletonElementAvatar(token2)), genSkeletonElementInput(token2)), genSkeletonElementImage(token2)),
      // Skeleton Block Button, Input
      [`${componentCls}${componentCls}-block`]: {
        width: "100%",
        [skeletonButtonCls]: {
          width: "100%"
        },
        [skeletonInputCls]: {
          width: "100%"
        }
      },
      // With active animation
      [`${componentCls}${componentCls}-active`]: {
        [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonImageCls}
      `]: Object.assign({}, genSkeletonColor(token2))
      }
    };
  };
  const prepareComponentToken$4 = (token2) => {
    const {
      colorFillContent,
      colorFill
    } = token2;
    const gradientFromColor = colorFillContent;
    const gradientToColor = colorFill;
    return {
      color: gradientFromColor,
      colorGradientEnd: gradientToColor,
      gradientFromColor,
      gradientToColor,
      titleHeight: token2.controlHeight / 2,
      blockRadius: token2.borderRadiusSM,
      paragraphMarginTop: token2.marginLG + token2.marginXXS,
      paragraphLiHeight: token2.controlHeight / 2
    };
  };
  const useStyle$6 = genStyleHooks("Skeleton", (token2) => {
    const {
      componentCls,
      calc
    } = token2;
    const skeletonToken = merge(token2, {
      skeletonAvatarCls: `${componentCls}-avatar`,
      skeletonTitleCls: `${componentCls}-title`,
      skeletonParagraphCls: `${componentCls}-paragraph`,
      skeletonButtonCls: `${componentCls}-button`,
      skeletonInputCls: `${componentCls}-input`,
      skeletonImageCls: `${componentCls}-image`,
      imageSizeBase: calc(token2.controlHeight).mul(1.5).equal(),
      borderRadius: 100,
      // Large number to make capsule shape
      skeletonLoadingBackground: `linear-gradient(90deg, ${token2.gradientFromColor} 25%, ${token2.gradientToColor} 37%, ${token2.gradientFromColor} 63%)`,
      skeletonLoadingMotionDuration: "1.4s"
    });
    return [genBaseStyle(skeletonToken)];
  }, prepareComponentToken$4, {
    deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
  });
  const SkeletonAvatar = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      active,
      shape = "circle",
      size = "default"
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls);
    const otherProps = omit(props, ["prefixCls", "className"]);
    const cls = classNames(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement(Element$1, Object.assign({
      prefixCls: `${prefixCls}-avatar`,
      shape,
      size
    }, otherProps))));
  };
  const SkeletonButton = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      active,
      block = false,
      size = "default"
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls);
    const otherProps = omit(props, ["prefixCls"]);
    const cls = classNames(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-block`]: block
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement(Element$1, Object.assign({
      prefixCls: `${prefixCls}-button`,
      size
    }, otherProps))));
  };
  const path = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";
  const SkeletonImage = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style: style2,
      active
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls);
    const cls = classNames(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: classNames(`${prefixCls}-image`, className),
      style: style2
    }, /* @__PURE__ */ React__namespace.createElement("svg", {
      viewBox: "0 0 1098 1024",
      xmlns: "http://www.w3.org/2000/svg",
      className: `${prefixCls}-image-svg`
    }, /* @__PURE__ */ React__namespace.createElement("title", null, "Image placeholder"), /* @__PURE__ */ React__namespace.createElement("path", {
      d: path,
      className: `${prefixCls}-image-path`
    })))));
  };
  const SkeletonInput = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      active,
      block,
      size = "default"
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls);
    const otherProps = omit(props, ["prefixCls"]);
    const cls = classNames(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-block`]: block
    }, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement(Element$1, Object.assign({
      prefixCls: `${prefixCls}-input`,
      size
    }, otherProps))));
  };
  const SkeletonNode = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style: style2,
      active,
      children
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls);
    const cls = classNames(prefixCls, `${prefixCls}-element`, {
      [`${prefixCls}-active`]: active
    }, hashId, className, rootClassName, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: classNames(`${prefixCls}-image`, className),
      style: style2
    }, children)));
  };
  const getWidth = (index2, props) => {
    const {
      width,
      rows = 2
    } = props;
    if (Array.isArray(width)) {
      return width[index2];
    }
    if (rows - 1 === index2) {
      return width;
    }
    return void 0;
  };
  const Paragraph = (props) => {
    const {
      prefixCls,
      className,
      style: style2,
      rows
    } = props;
    const rowList = _toConsumableArray(new Array(rows)).map((_, index2) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ React__namespace.createElement("li", {
        key: index2,
        style: {
          width: getWidth(index2, props)
        }
      })
    ));
    return /* @__PURE__ */ React__namespace.createElement("ul", {
      className: classNames(prefixCls, className),
      style: style2
    }, rowList);
  };
  const Title = (_ref) => {
    let {
      prefixCls,
      className,
      width,
      style: style2
    } = _ref;
    return (
      // biome-ignore lint/a11y/useHeadingContent: HOC here
      /* @__PURE__ */ React__namespace.createElement("h3", {
        className: classNames(prefixCls, className),
        style: Object.assign({
          width
        }, style2)
      })
    );
  };
  function getComponentProps(prop) {
    if (prop && typeof prop === "object") {
      return prop;
    }
    return {};
  }
  function getAvatarBasicProps(hasTitle, hasParagraph) {
    if (hasTitle && !hasParagraph) {
      return {
        size: "large",
        shape: "square"
      };
    }
    return {
      size: "large",
      shape: "circle"
    };
  }
  function getTitleBasicProps(hasAvatar, hasParagraph) {
    if (!hasAvatar && hasParagraph) {
      return {
        width: "38%"
      };
    }
    if (hasAvatar && hasParagraph) {
      return {
        width: "50%"
      };
    }
    return {};
  }
  function getParagraphBasicProps(hasAvatar, hasTitle) {
    const basicProps = {};
    if (!hasAvatar || !hasTitle) {
      basicProps.width = "61%";
    }
    if (!hasAvatar && hasTitle) {
      basicProps.rows = 3;
    } else {
      basicProps.rows = 2;
    }
    return basicProps;
  }
  const Skeleton = (props) => {
    const {
      prefixCls: customizePrefixCls,
      loading,
      className,
      rootClassName,
      style: style2,
      children,
      avatar = false,
      title = true,
      paragraph = true,
      active,
      round: round2
    } = props;
    const {
      getPrefixCls,
      direction,
      skeleton
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls);
    if (loading || !("loading" in props)) {
      const hasAvatar = !!avatar;
      const hasTitle = !!title;
      const hasParagraph = !!paragraph;
      let avatarNode;
      if (hasAvatar) {
        const avatarProps = Object.assign(Object.assign({
          prefixCls: `${prefixCls}-avatar`
        }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
        avatarNode = /* @__PURE__ */ React__namespace.createElement("div", {
          className: `${prefixCls}-header`
        }, /* @__PURE__ */ React__namespace.createElement(Element$1, Object.assign({}, avatarProps)));
      }
      let contentNode;
      if (hasTitle || hasParagraph) {
        let $title;
        if (hasTitle) {
          const titleProps = Object.assign(Object.assign({
            prefixCls: `${prefixCls}-title`
          }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
          $title = /* @__PURE__ */ React__namespace.createElement(Title, Object.assign({}, titleProps));
        }
        let paragraphNode;
        if (hasParagraph) {
          const paragraphProps = Object.assign(Object.assign({
            prefixCls: `${prefixCls}-paragraph`
          }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
          paragraphNode = /* @__PURE__ */ React__namespace.createElement(Paragraph, Object.assign({}, paragraphProps));
        }
        contentNode = /* @__PURE__ */ React__namespace.createElement("div", {
          className: `${prefixCls}-content`
        }, $title, paragraphNode);
      }
      const cls = classNames(prefixCls, {
        [`${prefixCls}-with-avatar`]: hasAvatar,
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-rtl`]: direction === "rtl",
        [`${prefixCls}-round`]: round2
      }, skeleton === null || skeleton === void 0 ? void 0 : skeleton.className, className, rootClassName, hashId, cssVarCls);
      return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
        className: cls,
        style: Object.assign(Object.assign({}, skeleton === null || skeleton === void 0 ? void 0 : skeleton.style), style2)
      }, avatarNode, contentNode));
    }
    return children !== null && children !== void 0 ? children : null;
  };
  Skeleton.Button = SkeletonButton;
  Skeleton.Avatar = SkeletonAvatar;
  Skeleton.Input = SkeletonInput;
  Skeleton.Image = SkeletonImage;
  Skeleton.Node = SkeletonNode;
  function voidFunc() {
  }
  const WatermarkContext = /* @__PURE__ */ React__namespace.createContext({
    add: voidFunc,
    remove: voidFunc
  });
  function usePanelRef(panelSelector) {
    const watermark = React__namespace.useContext(WatermarkContext);
    const panelEleRef = React__namespace.useRef();
    const panelRef = useEvent((ele) => {
      if (ele) {
        const innerContentEle = ele;
        watermark.add(innerContentEle);
        panelEleRef.current = innerContentEle;
      } else {
        watermark.remove(panelEleRef.current);
      }
    });
    return panelRef;
  }
  const isMobile = function() {
    if (typeof navigator === "undefined" || typeof window === "undefined") {
      return false;
    }
    var agent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
  };
  function Arrow(props) {
    var prefixCls = props.prefixCls, align = props.align, arrow = props.arrow, arrowPos = props.arrowPos;
    var _ref = arrow || {}, className = _ref.className, content = _ref.content;
    var _arrowPos$x = arrowPos.x, x = _arrowPos$x === void 0 ? 0 : _arrowPos$x, _arrowPos$y = arrowPos.y, y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
    var arrowRef = React__namespace.useRef();
    if (!align || !align.points) {
      return null;
    }
    var alignStyle = {
      position: "absolute"
    };
    if (align.autoArrow !== false) {
      var popupPoints = align.points[0];
      var targetPoints = align.points[1];
      var popupTB = popupPoints[0];
      var popupLR = popupPoints[1];
      var targetTB = targetPoints[0];
      var targetLR = targetPoints[1];
      if (popupTB === targetTB || !["t", "b"].includes(popupTB)) {
        alignStyle.top = y;
      } else if (popupTB === "t") {
        alignStyle.top = 0;
      } else {
        alignStyle.bottom = 0;
      }
      if (popupLR === targetLR || !["l", "r"].includes(popupLR)) {
        alignStyle.left = x;
      } else if (popupLR === "l") {
        alignStyle.left = 0;
      } else {
        alignStyle.right = 0;
      }
    }
    return /* @__PURE__ */ React__namespace.createElement("div", {
      ref: arrowRef,
      className: classNames("".concat(prefixCls, "-arrow"), className),
      style: alignStyle
    }, content);
  }
  function Mask(props) {
    var prefixCls = props.prefixCls, open = props.open, zIndex = props.zIndex, mask = props.mask, motion = props.motion;
    if (!mask) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(CSSMotion, _extends({}, motion, {
      motionAppear: true,
      visible: open,
      removeOnLeave: true
    }), function(_ref) {
      var className = _ref.className;
      return /* @__PURE__ */ React__namespace.createElement("div", {
        style: {
          zIndex
        },
        className: classNames("".concat(prefixCls, "-mask"), className)
      });
    });
  }
  var PopupContent = /* @__PURE__ */ React__namespace.memo(function(_ref) {
    var children = _ref.children;
    return children;
  }, function(_, next2) {
    return next2.cache;
  });
  var Popup$1 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var popup = props.popup, className = props.className, prefixCls = props.prefixCls, style2 = props.style, target = props.target, _onVisibleChanged = props.onVisibleChanged, open = props.open, keepDom = props.keepDom, fresh = props.fresh, onClick = props.onClick, mask = props.mask, arrow = props.arrow, arrowPos = props.arrowPos, align = props.align, motion = props.motion, maskMotion = props.maskMotion, forceRender = props.forceRender, getPopupContainer = props.getPopupContainer, autoDestroy = props.autoDestroy, Portal2 = props.portal, zIndex = props.zIndex, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onPointerEnter = props.onPointerEnter, ready = props.ready, offsetX = props.offsetX, offsetY = props.offsetY, offsetR = props.offsetR, offsetB = props.offsetB, onAlign = props.onAlign, onPrepare = props.onPrepare, stretch = props.stretch, targetWidth = props.targetWidth, targetHeight = props.targetHeight;
    var childNode = typeof popup === "function" ? popup() : popup;
    var isNodeVisible = open || keepDom;
    var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
    var _React$useState = React__namespace.useState(!getPopupContainer || !getPopupContainerNeedParams), _React$useState2 = _slicedToArray(_React$useState, 2), show = _React$useState2[0], setShow = _React$useState2[1];
    useLayoutEffect(function() {
      if (!show && getPopupContainerNeedParams && target) {
        setShow(true);
      }
    }, [show, getPopupContainerNeedParams, target]);
    if (!show) {
      return null;
    }
    var AUTO = "auto";
    var offsetStyle = {
      left: "-1000vw",
      top: "-1000vh",
      right: AUTO,
      bottom: AUTO
    };
    if (ready || !open) {
      var _experimental;
      var points = align.points;
      var dynamicInset = align.dynamicInset || ((_experimental = align._experimental) === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset);
      var alignRight = dynamicInset && points[0][1] === "r";
      var alignBottom = dynamicInset && points[0][0] === "b";
      if (alignRight) {
        offsetStyle.right = offsetR;
        offsetStyle.left = AUTO;
      } else {
        offsetStyle.left = offsetX;
        offsetStyle.right = AUTO;
      }
      if (alignBottom) {
        offsetStyle.bottom = offsetB;
        offsetStyle.top = AUTO;
      } else {
        offsetStyle.top = offsetY;
        offsetStyle.bottom = AUTO;
      }
    }
    var miscStyle = {};
    if (stretch) {
      if (stretch.includes("height") && targetHeight) {
        miscStyle.height = targetHeight;
      } else if (stretch.includes("minHeight") && targetHeight) {
        miscStyle.minHeight = targetHeight;
      }
      if (stretch.includes("width") && targetWidth) {
        miscStyle.width = targetWidth;
      } else if (stretch.includes("minWidth") && targetWidth) {
        miscStyle.minWidth = targetWidth;
      }
    }
    if (!open) {
      miscStyle.pointerEvents = "none";
    }
    return /* @__PURE__ */ React__namespace.createElement(Portal2, {
      open: forceRender || isNodeVisible,
      getContainer: getPopupContainer && function() {
        return getPopupContainer(target);
      },
      autoDestroy
    }, /* @__PURE__ */ React__namespace.createElement(Mask, {
      prefixCls,
      open,
      zIndex,
      mask,
      motion: maskMotion
    }), /* @__PURE__ */ React__namespace.createElement(RefResizeObserver, {
      onResize: onAlign,
      disabled: !open
    }, function(resizeObserverRef) {
      return /* @__PURE__ */ React__namespace.createElement(CSSMotion, _extends({
        motionAppear: true,
        motionEnter: true,
        motionLeave: true,
        removeOnLeave: false,
        forceRender,
        leavedClassName: "".concat(prefixCls, "-hidden")
      }, motion, {
        onAppearPrepare: onPrepare,
        onEnterPrepare: onPrepare,
        visible: open,
        onVisibleChanged: function onVisibleChanged(nextVisible) {
          var _motion$onVisibleChan;
          motion === null || motion === void 0 || (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 || _motion$onVisibleChan.call(motion, nextVisible);
          _onVisibleChanged(nextVisible);
        }
      }), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        var cls = classNames(prefixCls, motionClassName, className);
        return /* @__PURE__ */ React__namespace.createElement("div", {
          ref: composeRef(resizeObserverRef, ref, motionRef),
          className: cls,
          style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
            "--arrow-x": "".concat(arrowPos.x || 0, "px"),
            "--arrow-y": "".concat(arrowPos.y || 0, "px")
          }, offsetStyle), miscStyle), motionStyle), {}, {
            boxSizing: "border-box",
            zIndex
          }, style2),
          onMouseEnter,
          onMouseLeave,
          onPointerEnter,
          onClick
        }, arrow && /* @__PURE__ */ React__namespace.createElement(Arrow, {
          prefixCls,
          arrow,
          arrowPos,
          align
        }), /* @__PURE__ */ React__namespace.createElement(PopupContent, {
          cache: !open && !fresh
        }, childNode));
      });
    }));
  });
  var TriggerWrapper = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var children = props.children, getTriggerDOMNode = props.getTriggerDOMNode;
    var canUseRef = supportRef(children);
    var setRef = React__namespace.useCallback(function(node2) {
      fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node2) : node2);
    }, [getTriggerDOMNode]);
    var mergedRef = useComposeRef(setRef, children.ref);
    return canUseRef ? /* @__PURE__ */ React__namespace.cloneElement(children, {
      ref: mergedRef
    }) : children;
  });
  var TriggerContext = /* @__PURE__ */ React__namespace.createContext(null);
  function toArray(val) {
    return val ? Array.isArray(val) ? val : [val] : [];
  }
  function useAction(mobile, action, showAction, hideAction) {
    return React__namespace.useMemo(function() {
      var mergedShowAction = toArray(showAction !== null && showAction !== void 0 ? showAction : action);
      var mergedHideAction = toArray(hideAction !== null && hideAction !== void 0 ? hideAction : action);
      var showActionSet = new Set(mergedShowAction);
      var hideActionSet = new Set(mergedHideAction);
      if (mobile) {
        if (showActionSet.has("hover")) {
          showActionSet.delete("hover");
          showActionSet.add("click");
        }
        if (hideActionSet.has("hover")) {
          hideActionSet.delete("hover");
          hideActionSet.add("click");
        }
      }
      return [showActionSet, hideActionSet];
    }, [mobile, action, showAction, hideAction]);
  }
  function isPointsEq() {
    var a1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var a2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var isAlignPoint = arguments.length > 2 ? arguments[2] : void 0;
    if (isAlignPoint) {
      return a1[0] === a2[0];
    }
    return a1[0] === a2[0] && a1[1] === a2[1];
  }
  function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    var placements2 = Object.keys(builtinPlacements);
    for (var i = 0; i < placements2.length; i += 1) {
      var _builtinPlacements$pl;
      var placement = placements2[i];
      if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
        return "".concat(prefixCls, "-placement-").concat(placement);
      }
    }
    return "";
  }
  function getMotion(prefixCls, motion, animation, transitionName) {
    if (motion) {
      return motion;
    }
    if (animation) {
      return {
        motionName: "".concat(prefixCls, "-").concat(animation)
      };
    }
    if (transitionName) {
      return {
        motionName: transitionName
      };
    }
    return null;
  }
  function getWin(ele) {
    return ele.ownerDocument.defaultView;
  }
  function collectScroller(ele) {
    var scrollerList = [];
    var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
    var scrollStyle = ["hidden", "scroll", "clip", "auto"];
    while (current) {
      var _getWin$getComputedSt = getWin(current).getComputedStyle(current), overflowX = _getWin$getComputedSt.overflowX, overflowY = _getWin$getComputedSt.overflowY, overflow = _getWin$getComputedSt.overflow;
      if ([overflowX, overflowY, overflow].some(function(o) {
        return scrollStyle.includes(o);
      })) {
        scrollerList.push(current);
      }
      current = current.parentElement;
    }
    return scrollerList;
  }
  function toNum(num) {
    var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    return Number.isNaN(num) ? defaultValue : num;
  }
  function getPxValue(val) {
    return toNum(parseFloat(val), 0);
  }
  function getVisibleArea(initArea, scrollerList) {
    var visibleArea = _objectSpread2({}, initArea);
    (scrollerList || []).forEach(function(ele) {
      if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
        return;
      }
      var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele), overflow = _getWin$getComputedSt2.overflow, overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin, borderTopWidth = _getWin$getComputedSt2.borderTopWidth, borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth, borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth, borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
      var eleRect = ele.getBoundingClientRect();
      var eleOutHeight = ele.offsetHeight, eleInnerHeight = ele.clientHeight, eleOutWidth = ele.offsetWidth, eleInnerWidth = ele.clientWidth;
      var borderTopNum = getPxValue(borderTopWidth);
      var borderBottomNum = getPxValue(borderBottomWidth);
      var borderLeftNum = getPxValue(borderLeftWidth);
      var borderRightNum = getPxValue(borderRightWidth);
      var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1e3) / 1e3);
      var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1e3) / 1e3);
      var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
      var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
      var scaledBorderTopWidth = borderTopNum * scaleY;
      var scaledBorderBottomWidth = borderBottomNum * scaleY;
      var scaledBorderLeftWidth = borderLeftNum * scaleX;
      var scaledBorderRightWidth = borderRightNum * scaleX;
      var clipMarginWidth = 0;
      var clipMarginHeight = 0;
      if (overflow === "clip") {
        var clipNum = getPxValue(overflowClipMargin);
        clipMarginWidth = clipNum * scaleX;
        clipMarginHeight = clipNum * scaleY;
      }
      var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
      var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
      var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
      var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
      visibleArea.left = Math.max(visibleArea.left, eleLeft);
      visibleArea.top = Math.max(visibleArea.top, eleTop);
      visibleArea.right = Math.min(visibleArea.right, eleRight);
      visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
    });
    return visibleArea;
  }
  function getUnitOffset(size) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var offsetStr = "".concat(offset);
    var cells = offsetStr.match(/^(.*)\%$/);
    if (cells) {
      return size * (parseFloat(cells[1]) / 100);
    }
    return parseFloat(offsetStr);
  }
  function getNumberOffset(rect, offset) {
    var _ref = offset || [], _ref2 = _slicedToArray(_ref, 2), offsetX = _ref2[0], offsetY = _ref2[1];
    return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
  }
  function splitPoints() {
    var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return [points[0], points[1]];
  }
  function getAlignPoint(rect, points) {
    var topBottom = points[0];
    var leftRight = points[1];
    var x;
    var y;
    if (topBottom === "t") {
      y = rect.y;
    } else if (topBottom === "b") {
      y = rect.y + rect.height;
    } else {
      y = rect.y + rect.height / 2;
    }
    if (leftRight === "l") {
      x = rect.x;
    } else if (leftRight === "r") {
      x = rect.x + rect.width;
    } else {
      x = rect.x + rect.width / 2;
    }
    return {
      x,
      y
    };
  }
  function reversePoints(points, index2) {
    var reverseMap = {
      t: "b",
      b: "t",
      l: "r",
      r: "l"
    };
    return points.map(function(point, i) {
      if (i === index2) {
        return reverseMap[point] || "c";
      }
      return point;
    }).join("");
  }
  function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
    var _React$useState = React__namespace.useState({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement] || {}
    }), _React$useState2 = _slicedToArray(_React$useState, 2), offsetInfo = _React$useState2[0], setOffsetInfo = _React$useState2[1];
    var alignCountRef = React__namespace.useRef(0);
    var scrollerList = React__namespace.useMemo(function() {
      if (!popupEle) {
        return [];
      }
      return collectScroller(popupEle);
    }, [popupEle]);
    var prevFlipRef = React__namespace.useRef({});
    var resetFlipCache = function resetFlipCache2() {
      prevFlipRef.current = {};
    };
    if (!open) {
      resetFlipCache();
    }
    var onAlign = useEvent(function() {
      if (popupEle && target && open) {
        let getIntersectionVisibleArea = function(offsetX, offsetY) {
          var area = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : visibleArea;
          var l2 = popupRect.x + offsetX;
          var t2 = popupRect.y + offsetY;
          var r = l2 + popupWidth;
          var b2 = t2 + popupHeight;
          var visibleL = Math.max(l2, area.left);
          var visibleT = Math.max(t2, area.top);
          var visibleR = Math.min(r, area.right);
          var visibleB = Math.min(b2, area.bottom);
          return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
        }, syncNextPopupPosition = function() {
          nextPopupY = popupRect.y + nextOffsetY;
          nextPopupBottom = nextPopupY + popupHeight;
          nextPopupX = popupRect.x + nextOffsetX;
          nextPopupRight = nextPopupX + popupWidth;
        };
        var _popupElement$parentE, _popupRect$x, _popupRect$y, _popupElement$parentE2;
        var popupElement = popupEle;
        var doc = popupElement.ownerDocument;
        var win = getWin(popupElement);
        var _win$getComputedStyle = win.getComputedStyle(popupElement), width = _win$getComputedStyle.width, height = _win$getComputedStyle.height, popupPosition = _win$getComputedStyle.position;
        var originLeft = popupElement.style.left;
        var originTop = popupElement.style.top;
        var originRight = popupElement.style.right;
        var originBottom = popupElement.style.bottom;
        var originOverflow = popupElement.style.overflow;
        var placementInfo = _objectSpread2(_objectSpread2({}, builtinPlacements[placement]), popupAlign);
        var placeholderElement = doc.createElement("div");
        (_popupElement$parentE = popupElement.parentElement) === null || _popupElement$parentE === void 0 || _popupElement$parentE.appendChild(placeholderElement);
        placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
        placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
        placeholderElement.style.position = popupPosition;
        placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
        placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");
        popupElement.style.left = "0";
        popupElement.style.top = "0";
        popupElement.style.right = "auto";
        popupElement.style.bottom = "auto";
        popupElement.style.overflow = "hidden";
        var targetRect;
        if (Array.isArray(target)) {
          targetRect = {
            x: target[0],
            y: target[1],
            width: 0,
            height: 0
          };
        } else {
          var _rect$x, _rect$y;
          var rect = target.getBoundingClientRect();
          rect.x = (_rect$x = rect.x) !== null && _rect$x !== void 0 ? _rect$x : rect.left;
          rect.y = (_rect$y = rect.y) !== null && _rect$y !== void 0 ? _rect$y : rect.top;
          targetRect = {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
          };
        }
        var popupRect = popupElement.getBoundingClientRect();
        popupRect.x = (_popupRect$x = popupRect.x) !== null && _popupRect$x !== void 0 ? _popupRect$x : popupRect.left;
        popupRect.y = (_popupRect$y = popupRect.y) !== null && _popupRect$y !== void 0 ? _popupRect$y : popupRect.top;
        var _doc$documentElement = doc.documentElement, clientWidth = _doc$documentElement.clientWidth, clientHeight = _doc$documentElement.clientHeight, scrollWidth = _doc$documentElement.scrollWidth, scrollHeight = _doc$documentElement.scrollHeight, scrollTop = _doc$documentElement.scrollTop, scrollLeft = _doc$documentElement.scrollLeft;
        var popupHeight = popupRect.height;
        var popupWidth = popupRect.width;
        var targetHeight = targetRect.height;
        var targetWidth = targetRect.width;
        var visibleRegion = {
          left: 0,
          top: 0,
          right: clientWidth,
          bottom: clientHeight
        };
        var scrollRegion = {
          left: -scrollLeft,
          top: -scrollTop,
          right: scrollWidth - scrollLeft,
          bottom: scrollHeight - scrollTop
        };
        var htmlRegion = placementInfo.htmlRegion;
        var VISIBLE = "visible";
        var VISIBLE_FIRST = "visibleFirst";
        if (htmlRegion !== "scroll" && htmlRegion !== VISIBLE_FIRST) {
          htmlRegion = VISIBLE;
        }
        var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
        var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
        var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
        var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
        var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
        popupElement.style.left = "auto";
        popupElement.style.top = "auto";
        popupElement.style.right = "0";
        popupElement.style.bottom = "0";
        var popupMirrorRect = popupElement.getBoundingClientRect();
        popupElement.style.left = originLeft;
        popupElement.style.top = originTop;
        popupElement.style.right = originRight;
        popupElement.style.bottom = originBottom;
        popupElement.style.overflow = originOverflow;
        (_popupElement$parentE2 = popupElement.parentElement) === null || _popupElement$parentE2 === void 0 || _popupElement$parentE2.removeChild(placeholderElement);
        var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1e3) / 1e3);
        var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1e3) / 1e3);
        if (_scaleX === 0 || _scaleY === 0 || isDOM(target) && !isVisible(target)) {
          return;
        }
        var offset = placementInfo.offset, targetOffset2 = placementInfo.targetOffset;
        var _getNumberOffset = getNumberOffset(popupRect, offset), _getNumberOffset2 = _slicedToArray(_getNumberOffset, 2), popupOffsetX = _getNumberOffset2[0], popupOffsetY = _getNumberOffset2[1];
        var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset2), _getNumberOffset4 = _slicedToArray(_getNumberOffset3, 2), targetOffsetX = _getNumberOffset4[0], targetOffsetY = _getNumberOffset4[1];
        targetRect.x -= targetOffsetX;
        targetRect.y -= targetOffsetY;
        var _ref3 = placementInfo.points || [], _ref4 = _slicedToArray(_ref3, 2), popupPoint = _ref4[0], targetPoint = _ref4[1];
        var targetPoints = splitPoints(targetPoint);
        var popupPoints = splitPoints(popupPoint);
        var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
        var popupAlignPoint = getAlignPoint(popupRect, popupPoints);
        var nextAlignInfo = _objectSpread2({}, placementInfo);
        var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
        var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
        var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
        var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
        var targetAlignPointTL = getAlignPoint(targetRect, ["t", "l"]);
        var popupAlignPointTL = getAlignPoint(popupRect, ["t", "l"]);
        var targetAlignPointBR = getAlignPoint(targetRect, ["b", "r"]);
        var popupAlignPointBR = getAlignPoint(popupRect, ["b", "r"]);
        var overflow = placementInfo.overflow || {};
        var adjustX = overflow.adjustX, adjustY = overflow.adjustY, shiftX = overflow.shiftX, shiftY = overflow.shiftY;
        var supportAdjust = function supportAdjust2(val) {
          if (typeof val === "boolean") {
            return val;
          }
          return val >= 0;
        };
        var nextPopupY;
        var nextPopupBottom;
        var nextPopupX;
        var nextPopupRight;
        syncNextPopupPosition();
        var needAdjustY = supportAdjust(adjustY);
        var sameTB = popupPoints[0] === targetPoints[0];
        if (needAdjustY && popupPoints[0] === "t" && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
          var tmpNextOffsetY = nextOffsetY;
          if (sameTB) {
            tmpNextOffsetY -= popupHeight - targetHeight;
          } else {
            tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
          }
          var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
          var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            newVisibleRecommendArea >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.bt = true;
            nextOffsetY = tmpNextOffsetY;
            popupOffsetY = -popupOffsetY;
            nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
          } else {
            prevFlipRef.current.bt = false;
          }
        }
        if (needAdjustY && popupPoints[0] === "b" && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
          var _tmpNextOffsetY = nextOffsetY;
          if (sameTB) {
            _tmpNextOffsetY += popupHeight - targetHeight;
          } else {
            _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
          }
          var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
          var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.tb = true;
            nextOffsetY = _tmpNextOffsetY;
            popupOffsetY = -popupOffsetY;
            nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
          } else {
            prevFlipRef.current.tb = false;
          }
        }
        var needAdjustX = supportAdjust(adjustX);
        var sameLR = popupPoints[1] === targetPoints[1];
        if (needAdjustX && popupPoints[1] === "l" && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
          var tmpNextOffsetX = nextOffsetX;
          if (sameLR) {
            tmpNextOffsetX -= popupWidth - targetWidth;
          } else {
            tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
          }
          var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
          var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea2 >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.rl = true;
            nextOffsetX = tmpNextOffsetX;
            popupOffsetX = -popupOffsetX;
            nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
          } else {
            prevFlipRef.current.rl = false;
          }
        }
        if (needAdjustX && popupPoints[1] === "r" && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
          var _tmpNextOffsetX = nextOffsetX;
          if (sameLR) {
            _tmpNextOffsetX += popupWidth - targetWidth;
          } else {
            _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
          }
          var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
          var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea3 >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.lr = true;
            nextOffsetX = _tmpNextOffsetX;
            popupOffsetX = -popupOffsetX;
            nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
          } else {
            prevFlipRef.current.lr = false;
          }
        }
        syncNextPopupPosition();
        var numShiftX = shiftX === true ? 0 : shiftX;
        if (typeof numShiftX === "number") {
          if (nextPopupX < visibleRegionArea.left) {
            nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
            if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
              nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
            }
          }
          if (nextPopupRight > visibleRegionArea.right) {
            nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
            if (targetRect.x > visibleRegionArea.right - numShiftX) {
              nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
            }
          }
        }
        var numShiftY = shiftY === true ? 0 : shiftY;
        if (typeof numShiftY === "number") {
          if (nextPopupY < visibleRegionArea.top) {
            nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
            if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
              nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
            }
          }
          if (nextPopupBottom > visibleRegionArea.bottom) {
            nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
            if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
              nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
            }
          }
        }
        var popupLeft = popupRect.x + nextOffsetX;
        var popupRight = popupLeft + popupWidth;
        var popupTop = popupRect.y + nextOffsetY;
        var popupBottom = popupTop + popupHeight;
        var targetLeft = targetRect.x;
        var targetRight = targetLeft + targetWidth;
        var targetTop = targetRect.y;
        var targetBottom = targetTop + targetHeight;
        var maxLeft = Math.max(popupLeft, targetLeft);
        var minRight = Math.min(popupRight, targetRight);
        var xCenter = (maxLeft + minRight) / 2;
        var nextArrowX = xCenter - popupLeft;
        var maxTop = Math.max(popupTop, targetTop);
        var minBottom = Math.min(popupBottom, targetBottom);
        var yCenter = (maxTop + minBottom) / 2;
        var nextArrowY = yCenter - popupTop;
        onPopupAlign === null || onPopupAlign === void 0 || onPopupAlign(popupEle, nextAlignInfo);
        var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
        var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
        if (_scaleX === 1) {
          nextOffsetX = Math.round(nextOffsetX);
          offsetX4Right = Math.round(offsetX4Right);
        }
        if (_scaleY === 1) {
          nextOffsetY = Math.round(nextOffsetY);
          offsetY4Bottom = Math.round(offsetY4Bottom);
        }
        var nextOffsetInfo = {
          ready: true,
          offsetX: nextOffsetX / _scaleX,
          offsetY: nextOffsetY / _scaleY,
          offsetR: offsetX4Right / _scaleX,
          offsetB: offsetY4Bottom / _scaleY,
          arrowX: nextArrowX / _scaleX,
          arrowY: nextArrowY / _scaleY,
          scaleX: _scaleX,
          scaleY: _scaleY,
          align: nextAlignInfo
        };
        setOffsetInfo(nextOffsetInfo);
      }
    });
    var triggerAlign = function triggerAlign2() {
      alignCountRef.current += 1;
      var id = alignCountRef.current;
      Promise.resolve().then(function() {
        if (alignCountRef.current === id) {
          onAlign();
        }
      });
    };
    var resetReady = function resetReady2() {
      setOffsetInfo(function(ori) {
        return _objectSpread2(_objectSpread2({}, ori), {}, {
          ready: false
        });
      });
    };
    useLayoutEffect(resetReady, [placement]);
    useLayoutEffect(function() {
      if (!open) {
        resetReady();
      }
    }, [open]);
    return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
  }
  function useWatch(open, target, popup, onAlign, onScroll) {
    useLayoutEffect(function() {
      if (open && target && popup) {
        let notifyScroll = function() {
          onAlign();
          onScroll();
        };
        var targetElement = target;
        var popupElement = popup;
        var targetScrollList = collectScroller(targetElement);
        var popupScrollList = collectScroller(popupElement);
        var win = getWin(popupElement);
        var mergedList = new Set([win].concat(_toConsumableArray(targetScrollList), _toConsumableArray(popupScrollList)));
        mergedList.forEach(function(scroller) {
          scroller.addEventListener("scroll", notifyScroll, {
            passive: true
          });
        });
        win.addEventListener("resize", notifyScroll, {
          passive: true
        });
        onAlign();
        return function() {
          mergedList.forEach(function(scroller) {
            scroller.removeEventListener("scroll", notifyScroll);
            win.removeEventListener("resize", notifyScroll);
          });
        };
      }
    }, [open, target, popup]);
  }
  function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
    var openRef = React__namespace.useRef(open);
    openRef.current = open;
    React__namespace.useEffect(function() {
      if (clickToHide && popupEle && (!mask || maskClosable)) {
        var onTriggerClose = function onTriggerClose2(e2) {
          var _e$composedPath;
          if (openRef.current && !inPopupOrChild(((_e$composedPath = e2.composedPath) === null || _e$composedPath === void 0 || (_e$composedPath = _e$composedPath.call(e2)) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath[0]) || e2.target)) {
            triggerOpen(false);
          }
        };
        var win = getWin(popupEle);
        win.addEventListener("mousedown", onTriggerClose, true);
        win.addEventListener("contextmenu", onTriggerClose, true);
        var targetShadowRoot = getShadowRoot(targetEle);
        if (targetShadowRoot) {
          targetShadowRoot.addEventListener("mousedown", onTriggerClose, true);
          targetShadowRoot.addEventListener("contextmenu", onTriggerClose, true);
        }
        return function() {
          win.removeEventListener("mousedown", onTriggerClose, true);
          win.removeEventListener("contextmenu", onTriggerClose, true);
          if (targetShadowRoot) {
            targetShadowRoot.removeEventListener("mousedown", onTriggerClose, true);
            targetShadowRoot.removeEventListener("contextmenu", onTriggerClose, true);
          }
        };
      }
    }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
  }
  var _excluded$3 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
  function generateTrigger() {
    var PortalComponent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Portal;
    var Trigger2 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
      var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-trigger-popup" : _props$prefixCls, children = props.children, _props$action = props.action, action = _props$action === void 0 ? "hover" : _props$action, showAction = props.showAction, hideAction = props.hideAction, popupVisible = props.popupVisible, defaultPopupVisible = props.defaultPopupVisible, onPopupVisibleChange = props.onPopupVisibleChange, afterPopupVisibleChange = props.afterPopupVisibleChange, mouseEnterDelay = props.mouseEnterDelay, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, focusDelay = props.focusDelay, blurDelay = props.blurDelay, mask = props.mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, getPopupContainer = props.getPopupContainer, forceRender = props.forceRender, autoDestroy = props.autoDestroy, destroyPopupOnHide = props.destroyPopupOnHide, popup = props.popup, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupPlacement = props.popupPlacement, _props$builtinPlaceme = props.builtinPlacements, builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme, popupAlign = props.popupAlign, zIndex = props.zIndex, stretch = props.stretch, getPopupClassNameFromAlign = props.getPopupClassNameFromAlign, fresh = props.fresh, alignPoint = props.alignPoint, onPopupClick = props.onPopupClick, onPopupAlign = props.onPopupAlign, arrow = props.arrow, popupMotion = props.popupMotion, maskMotion = props.maskMotion, popupTransitionName = props.popupTransitionName, popupAnimation = props.popupAnimation, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, className = props.className, getTriggerDOMNode = props.getTriggerDOMNode, restProps = _objectWithoutProperties(props, _excluded$3);
      var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;
      var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
      useLayoutEffect(function() {
        setMobile(isMobile());
      }, []);
      var subPopupElements = React__namespace.useRef({});
      var parentContext = React__namespace.useContext(TriggerContext);
      var context = React__namespace.useMemo(function() {
        return {
          registerSubPopup: function registerSubPopup(id2, subPopupEle) {
            subPopupElements.current[id2] = subPopupEle;
            parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id2, subPopupEle);
          }
        };
      }, [parentContext]);
      var id = useId();
      var _React$useState3 = React__namespace.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), popupEle = _React$useState4[0], setPopupEle = _React$useState4[1];
      var externalPopupRef = React__namespace.useRef(null);
      var setPopupRef = useEvent(function(node2) {
        externalPopupRef.current = node2;
        if (isDOM(node2) && popupEle !== node2) {
          setPopupEle(node2);
        }
        parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, node2);
      });
      var _React$useState5 = React__namespace.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), targetEle = _React$useState6[0], setTargetEle = _React$useState6[1];
      var externalForwardRef = React__namespace.useRef(null);
      var setTargetRef = useEvent(function(node2) {
        if (isDOM(node2) && targetEle !== node2) {
          setTargetEle(node2);
          externalForwardRef.current = node2;
        }
      });
      var child = React__namespace.Children.only(children);
      var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
      var cloneProps = {};
      var inPopupOrChild = useEvent(function(ele) {
        var _getShadowRoot, _getShadowRoot2;
        var childDOM = targetEle;
        return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = getShadowRoot(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = getShadowRoot(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function(subPopupEle) {
          return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
        });
      });
      var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
      var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);
      var _React$useState7 = React__namespace.useState(defaultPopupVisible || false), _React$useState8 = _slicedToArray(_React$useState7, 2), internalOpen = _React$useState8[0], setInternalOpen = _React$useState8[1];
      var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;
      var setMergedOpen = useEvent(function(nextOpen) {
        if (popupVisible === void 0) {
          setInternalOpen(nextOpen);
        }
      });
      useLayoutEffect(function() {
        setInternalOpen(popupVisible || false);
      }, [popupVisible]);
      var openRef = React__namespace.useRef(mergedOpen);
      openRef.current = mergedOpen;
      var lastTriggerRef = React__namespace.useRef([]);
      lastTriggerRef.current = [];
      var internalTriggerOpen = useEvent(function(nextOpen) {
        var _lastTriggerRef$curre;
        setMergedOpen(nextOpen);
        if (((_lastTriggerRef$curre = lastTriggerRef.current[lastTriggerRef.current.length - 1]) !== null && _lastTriggerRef$curre !== void 0 ? _lastTriggerRef$curre : mergedOpen) !== nextOpen) {
          lastTriggerRef.current.push(nextOpen);
          onPopupVisibleChange === null || onPopupVisibleChange === void 0 || onPopupVisibleChange(nextOpen);
        }
      });
      var delayRef = React__namespace.useRef();
      var clearDelay = function clearDelay2() {
        clearTimeout(delayRef.current);
      };
      var triggerOpen = function triggerOpen2(nextOpen) {
        var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        clearDelay();
        if (delay === 0) {
          internalTriggerOpen(nextOpen);
        } else {
          delayRef.current = setTimeout(function() {
            internalTriggerOpen(nextOpen);
          }, delay * 1e3);
        }
      };
      React__namespace.useEffect(function() {
        return clearDelay;
      }, []);
      var _React$useState9 = React__namespace.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), inMotion = _React$useState10[0], setInMotion = _React$useState10[1];
      useLayoutEffect(function(firstMount) {
        if (!firstMount || mergedOpen) {
          setInMotion(true);
        }
      }, [mergedOpen]);
      var _React$useState11 = React__namespace.useState(null), _React$useState12 = _slicedToArray(_React$useState11, 2), motionPrepareResolve = _React$useState12[0], setMotionPrepareResolve = _React$useState12[1];
      var _React$useState13 = React__namespace.useState(null), _React$useState14 = _slicedToArray(_React$useState13, 2), mousePos = _React$useState14[0], setMousePos = _React$useState14[1];
      var setMousePosByEvent = function setMousePosByEvent2(event) {
        setMousePos([event.clientX, event.clientY]);
      };
      var _useAlign = useAlign(mergedOpen, popupEle, alignPoint && mousePos !== null ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign), _useAlign2 = _slicedToArray(_useAlign, 11), ready = _useAlign2[0], offsetX = _useAlign2[1], offsetY = _useAlign2[2], offsetR = _useAlign2[3], offsetB = _useAlign2[4], arrowX = _useAlign2[5], arrowY = _useAlign2[6], scaleX = _useAlign2[7], scaleY = _useAlign2[8], alignInfo = _useAlign2[9], onAlign = _useAlign2[10];
      var _useAction = useAction(mobile, action, showAction, hideAction), _useAction2 = _slicedToArray(_useAction, 2), showActions = _useAction2[0], hideActions = _useAction2[1];
      var clickToShow = showActions.has("click");
      var clickToHide = hideActions.has("click") || hideActions.has("contextMenu");
      var triggerAlign = useEvent(function() {
        if (!inMotion) {
          onAlign();
        }
      });
      var onScroll = function onScroll2() {
        if (openRef.current && alignPoint && clickToHide) {
          triggerOpen(false);
        }
      };
      useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
      useLayoutEffect(function() {
        triggerAlign();
      }, [mousePos, popupPlacement]);
      useLayoutEffect(function() {
        if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
          triggerAlign();
        }
      }, [JSON.stringify(popupAlign)]);
      var alignedClassName = React__namespace.useMemo(function() {
        var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
        return classNames(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
      }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
      React__namespace.useImperativeHandle(ref, function() {
        return {
          nativeElement: externalForwardRef.current,
          popupElement: externalPopupRef.current,
          forceAlign: triggerAlign
        };
      });
      var _React$useState15 = React__namespace.useState(0), _React$useState16 = _slicedToArray(_React$useState15, 2), targetWidth = _React$useState16[0], setTargetWidth = _React$useState16[1];
      var _React$useState17 = React__namespace.useState(0), _React$useState18 = _slicedToArray(_React$useState17, 2), targetHeight = _React$useState18[0], setTargetHeight = _React$useState18[1];
      var syncTargetSize = function syncTargetSize2() {
        if (stretch && targetEle) {
          var rect = targetEle.getBoundingClientRect();
          setTargetWidth(rect.width);
          setTargetHeight(rect.height);
        }
      };
      var onTargetResize = function onTargetResize2() {
        syncTargetSize();
        triggerAlign();
      };
      var onVisibleChanged = function onVisibleChanged2(visible) {
        setInMotion(false);
        onAlign();
        afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 || afterPopupVisibleChange(visible);
      };
      var onPrepare = function onPrepare2() {
        return new Promise(function(resolve) {
          syncTargetSize();
          setMotionPrepareResolve(function() {
            return resolve;
          });
        });
      };
      useLayoutEffect(function() {
        if (motionPrepareResolve) {
          onAlign();
          motionPrepareResolve();
          setMotionPrepareResolve(null);
        }
      }, [motionPrepareResolve]);
      function wrapperAction(eventName, nextOpen, delay, preEvent) {
        cloneProps[eventName] = function(event) {
          var _originChildProps$eve;
          preEvent === null || preEvent === void 0 || preEvent(event);
          triggerOpen(nextOpen, delay);
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 || _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
        };
      }
      if (clickToShow || clickToHide) {
        cloneProps.onClick = function(event) {
          var _originChildProps$onC;
          if (openRef.current && clickToHide) {
            triggerOpen(false);
          } else if (!openRef.current && clickToShow) {
            setMousePosByEvent(event);
            triggerOpen(true);
          }
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 || _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
        };
      }
      useWinClick(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);
      var hoverToShow = showActions.has("hover");
      var hoverToHide = hideActions.has("hover");
      var onPopupMouseEnter;
      var onPopupMouseLeave;
      if (hoverToShow) {
        wrapperAction("onMouseEnter", true, mouseEnterDelay, function(event) {
          setMousePosByEvent(event);
        });
        wrapperAction("onPointerEnter", true, mouseEnterDelay, function(event) {
          setMousePosByEvent(event);
        });
        onPopupMouseEnter = function onPopupMouseEnter2(event) {
          if ((mergedOpen || inMotion) && popupEle !== null && popupEle !== void 0 && popupEle.contains(event.target)) {
            triggerOpen(true, mouseEnterDelay);
          }
        };
        if (alignPoint) {
          cloneProps.onMouseMove = function(event) {
            var _originChildProps$onM;
            (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 || _originChildProps$onM.call(originChildProps, event);
          };
        }
      }
      if (hoverToHide) {
        wrapperAction("onMouseLeave", false, mouseLeaveDelay);
        wrapperAction("onPointerLeave", false, mouseLeaveDelay);
        onPopupMouseLeave = function onPopupMouseLeave2() {
          triggerOpen(false, mouseLeaveDelay);
        };
      }
      if (showActions.has("focus")) {
        wrapperAction("onFocus", true, focusDelay);
      }
      if (hideActions.has("focus")) {
        wrapperAction("onBlur", false, blurDelay);
      }
      if (showActions.has("contextMenu")) {
        cloneProps.onContextMenu = function(event) {
          var _originChildProps$onC2;
          if (openRef.current && hideActions.has("contextMenu")) {
            triggerOpen(false);
          } else {
            setMousePosByEvent(event);
            triggerOpen(true);
          }
          event.preventDefault();
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 || _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
        };
      }
      if (className) {
        cloneProps.className = classNames(originChildProps.className, className);
      }
      var mergedChildrenProps = _objectSpread2(_objectSpread2({}, originChildProps), cloneProps);
      var passedProps = {};
      var passedEventList = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
      passedEventList.forEach(function(eventName) {
        if (restProps[eventName]) {
          passedProps[eventName] = function() {
            var _mergedChildrenProps$;
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 || _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
            restProps[eventName].apply(restProps, args);
          };
        }
      });
      var triggerNode = /* @__PURE__ */ React__namespace.cloneElement(child, _objectSpread2(_objectSpread2({}, mergedChildrenProps), passedProps));
      var arrowPos = {
        x: arrowX,
        y: arrowY
      };
      var innerArrow = arrow ? _objectSpread2({}, arrow !== true ? arrow : {}) : null;
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(RefResizeObserver, {
        disabled: !mergedOpen,
        ref: setTargetRef,
        onResize: onTargetResize
      }, /* @__PURE__ */ React__namespace.createElement(TriggerWrapper, {
        getTriggerDOMNode
      }, triggerNode)), /* @__PURE__ */ React__namespace.createElement(TriggerContext.Provider, {
        value: context
      }, /* @__PURE__ */ React__namespace.createElement(Popup$1, {
        portal: PortalComponent,
        ref: setPopupRef,
        prefixCls,
        popup,
        className: classNames(popupClassName, alignedClassName),
        style: popupStyle,
        target: targetEle,
        onMouseEnter: onPopupMouseEnter,
        onMouseLeave: onPopupMouseLeave,
        onPointerEnter: onPopupMouseEnter,
        zIndex,
        open: mergedOpen,
        keepDom: inMotion,
        fresh,
        onClick: onPopupClick,
        mask,
        motion: mergePopupMotion,
        maskMotion: mergeMaskMotion,
        onVisibleChanged,
        onPrepare,
        forceRender,
        autoDestroy: mergedAutoDestroy,
        getPopupContainer,
        align: alignInfo,
        arrow: innerArrow,
        arrowPos,
        ready,
        offsetX,
        offsetY,
        offsetR,
        offsetB,
        onAlign: triggerAlign,
        stretch,
        targetWidth: targetWidth / scaleX,
        targetHeight: targetHeight / scaleY
      })));
    });
    return Trigger2;
  }
  const Trigger = generateTrigger(Portal);
  function Popup(props) {
    var children = props.children, prefixCls = props.prefixCls, id = props.id, overlayInnerStyle = props.overlayInnerStyle, className = props.className, style2 = props.style;
    return /* @__PURE__ */ React__namespace.createElement("div", {
      className: classNames("".concat(prefixCls, "-content"), className),
      style: style2
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: "".concat(prefixCls, "-inner"),
      id,
      role: "tooltip",
      style: overlayInnerStyle
    }, typeof children === "function" ? children() : children));
  }
  var autoAdjustOverflowTopBottom = {
    shiftX: 64,
    adjustY: 1
  };
  var autoAdjustOverflowLeftRight = {
    adjustX: 1,
    shiftY: true
  };
  var targetOffset = [0, 0];
  var placements = {
    left: {
      points: ["cr", "cl"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [-4, 0],
      targetOffset
    },
    right: {
      points: ["cl", "cr"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [4, 0],
      targetOffset
    },
    top: {
      points: ["bc", "tc"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, -4],
      targetOffset
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, 4],
      targetOffset
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, -4],
      targetOffset
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [-4, 0],
      targetOffset
    },
    topRight: {
      points: ["br", "tr"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, -4],
      targetOffset
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [4, 0],
      targetOffset
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, 4],
      targetOffset
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [4, 0],
      targetOffset
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, 4],
      targetOffset
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [-4, 0],
      targetOffset
    }
  };
  var _excluded$2 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"];
  var Tooltip$1 = function Tooltip(props, ref) {
    var overlayClassName = props.overlayClassName, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? ["hover"] : _props$trigger, _props$mouseEnterDela = props.mouseEnterDelay, mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, overlayStyle = props.overlayStyle, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-tooltip" : _props$prefixCls, children = props.children, onVisibleChange = props.onVisibleChange, afterVisibleChange = props.afterVisibleChange, transitionName = props.transitionName, animation = props.animation, motion = props.motion, _props$placement = props.placement, placement = _props$placement === void 0 ? "right" : _props$placement, _props$align = props.align, align = _props$align === void 0 ? {} : _props$align, _props$destroyTooltip = props.destroyTooltipOnHide, destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip, defaultVisible = props.defaultVisible, getTooltipContainer = props.getTooltipContainer, overlayInnerStyle = props.overlayInnerStyle;
    props.arrowContent;
    var overlay = props.overlay, id = props.id, _props$showArrow = props.showArrow, showArrow = _props$showArrow === void 0 ? true : _props$showArrow, restProps = _objectWithoutProperties(props, _excluded$2);
    var triggerRef = React.useRef(null);
    React.useImperativeHandle(ref, function() {
      return triggerRef.current;
    });
    var extraProps = _objectSpread2({}, restProps);
    if ("visible" in props) {
      extraProps.popupVisible = props.visible;
    }
    var getPopupElement = function getPopupElement2() {
      return /* @__PURE__ */ React__namespace.createElement(Popup, {
        key: "content",
        prefixCls,
        id,
        overlayInnerStyle
      }, overlay);
    };
    return /* @__PURE__ */ React__namespace.createElement(Trigger, _extends({
      popupClassName: overlayClassName,
      prefixCls,
      popup: getPopupElement,
      action: trigger,
      builtinPlacements: placements,
      popupPlacement: placement,
      ref: triggerRef,
      popupAlign: align,
      getPopupContainer: getTooltipContainer,
      onPopupVisibleChange: onVisibleChange,
      afterPopupVisibleChange: afterVisibleChange,
      popupTransitionName: transitionName,
      popupAnimation: animation,
      popupMotion: motion,
      defaultPopupVisible: defaultVisible,
      autoDestroy: destroyTooltipOnHide,
      mouseLeaveDelay,
      popupStyle: overlayStyle,
      mouseEnterDelay,
      arrow: showArrow
    }, extraProps), children);
  };
  const Tooltip$2 = /* @__PURE__ */ React.forwardRef(Tooltip$1);
  function getArrowToken(token2) {
    const {
      sizePopupArrow,
      borderRadiusXS,
      borderRadiusOuter
    } = token2;
    const unitWidth = sizePopupArrow / 2;
    const ax = 0;
    const ay = unitWidth;
    const bx = borderRadiusOuter * 1 / Math.sqrt(2);
    const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
    const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
    const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
    const dx = 2 * unitWidth - cx;
    const dy = cy;
    const ex = 2 * unitWidth - bx;
    const ey = by;
    const fx = 2 * unitWidth - ax;
    const fy = ay;
    const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
    const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
    const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
    const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
    return {
      arrowShadowWidth: shadowWidth,
      arrowPath,
      arrowPolygon
    };
  }
  const genRoundedArrow = (token2, bgColor, boxShadow) => {
    const {
      sizePopupArrow,
      arrowPolygon,
      arrowPath,
      arrowShadowWidth,
      borderRadiusXS,
      calc
    } = token2;
    return {
      pointerEvents: "none",
      width: sizePopupArrow,
      height: sizePopupArrow,
      overflow: "hidden",
      "&::before": {
        position: "absolute",
        bottom: 0,
        insetInlineStart: 0,
        width: sizePopupArrow,
        height: calc(sizePopupArrow).div(2).equal(),
        background: bgColor,
        clipPath: {
          _multi_value_: true,
          value: [arrowPolygon, arrowPath]
        },
        content: '""'
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: arrowShadowWidth,
        height: arrowShadowWidth,
        bottom: 0,
        insetInline: 0,
        margin: "auto",
        borderRadius: {
          _skip_check_: true,
          value: `0 0 ${unit$1(borderRadiusXS)} 0`
        },
        transform: "translateY(50%) rotate(-135deg)",
        boxShadow,
        zIndex: 0,
        background: "transparent"
      }
    };
  };
  const MAX_VERTICAL_CONTENT_RADIUS = 8;
  function getArrowOffsetToken(options) {
    const {
      contentRadius,
      limitVerticalRadius
    } = options;
    const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
      arrowOffsetHorizontal: arrowOffset,
      arrowOffsetVertical
    };
  }
  function isInject(valid, code) {
    if (!valid) {
      return {};
    }
    return code;
  }
  function getArrowStyle(token2, colorBg, options) {
    const {
      componentCls,
      boxShadowPopoverArrow,
      arrowOffsetVertical,
      arrowOffsetHorizontal
    } = token2;
    const {
      arrowDistance = 0,
      arrowPlacement = {
        left: true,
        right: true,
        top: true,
        bottom: true
      }
    } = {};
    return {
      [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({
        // ============================ Basic ============================
        [`${componentCls}-arrow`]: [Object.assign(Object.assign({
          position: "absolute",
          zIndex: 1,
          display: "block"
        }, genRoundedArrow(token2, colorBg, boxShadowPopoverArrow)), {
          "&:before": {
            background: colorBg
          }
        })]
      }, isInject(!!arrowPlacement.top, {
        [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(",")]: {
          bottom: arrowDistance,
          transform: "translateY(100%) rotate(180deg)"
        },
        [`&-placement-top > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateX(-50%) translateY(100%) rotate(180deg)"
        },
        "&-placement-topLeft": {
          "--arrow-offset-horizontal": arrowOffsetHorizontal,
          [`> ${componentCls}-arrow`]: {
            left: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        },
        "&-placement-topRight": {
          "--arrow-offset-horizontal": `calc(100% - ${unit$1(arrowOffsetHorizontal)})`,
          [`> ${componentCls}-arrow`]: {
            right: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        }
      })), isInject(!!arrowPlacement.bottom, {
        [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(",")]: {
          top: arrowDistance,
          transform: `translateY(-100%)`
        },
        [`&-placement-bottom > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: `translateX(-50%) translateY(-100%)`
        },
        "&-placement-bottomLeft": {
          "--arrow-offset-horizontal": arrowOffsetHorizontal,
          [`> ${componentCls}-arrow`]: {
            left: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        },
        "&-placement-bottomRight": {
          "--arrow-offset-horizontal": `calc(100% - ${unit$1(arrowOffsetHorizontal)})`,
          [`> ${componentCls}-arrow`]: {
            right: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        }
      })), isInject(!!arrowPlacement.left, {
        [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(",")]: {
          right: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(100%) rotate(90deg)"
        },
        [`&-placement-left > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(100%) rotate(90deg)"
        },
        [`&-placement-leftTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-leftBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      })), isInject(!!arrowPlacement.right, {
        [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(",")]: {
          left: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-right > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-rightTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-rightBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      }))
    };
  }
  function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
    if (autoAdjustOverflow === false) {
      return {
        adjustX: false,
        adjustY: false
      };
    }
    const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === "object" ? autoAdjustOverflow : {};
    const baseOverflow = {};
    switch (placement) {
      case "top":
      case "bottom":
        baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
        baseOverflow.shiftY = true;
        baseOverflow.adjustY = true;
        break;
      case "left":
      case "right":
        baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
        baseOverflow.shiftX = true;
        baseOverflow.adjustX = true;
        break;
    }
    const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
    if (!mergedOverflow.shiftX) {
      mergedOverflow.adjustX = true;
    }
    if (!mergedOverflow.shiftY) {
      mergedOverflow.adjustY = true;
    }
    return mergedOverflow;
  }
  const PlacementAlignMap = {
    left: {
      points: ["cr", "cl"]
    },
    right: {
      points: ["cl", "cr"]
    },
    top: {
      points: ["bc", "tc"]
    },
    bottom: {
      points: ["tc", "bc"]
    },
    topLeft: {
      points: ["bl", "tl"]
    },
    leftTop: {
      points: ["tr", "tl"]
    },
    topRight: {
      points: ["br", "tr"]
    },
    rightTop: {
      points: ["tl", "tr"]
    },
    bottomRight: {
      points: ["tr", "br"]
    },
    rightBottom: {
      points: ["bl", "br"]
    },
    bottomLeft: {
      points: ["tl", "bl"]
    },
    leftBottom: {
      points: ["br", "bl"]
    }
  };
  const ArrowCenterPlacementAlignMap = {
    topLeft: {
      points: ["bl", "tc"]
    },
    leftTop: {
      points: ["tr", "cl"]
    },
    topRight: {
      points: ["br", "tc"]
    },
    rightTop: {
      points: ["tl", "cr"]
    },
    bottomRight: {
      points: ["tr", "bc"]
    },
    rightBottom: {
      points: ["bl", "cr"]
    },
    bottomLeft: {
      points: ["tl", "bc"]
    },
    leftBottom: {
      points: ["br", "cl"]
    }
  };
  const DisableAutoArrowList = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
  function getPlacements(config) {
    const {
      arrowWidth,
      autoAdjustOverflow,
      arrowPointAtCenter,
      offset,
      borderRadius,
      visibleFirst
    } = config;
    const halfArrowWidth = arrowWidth / 2;
    const placementMap = {};
    Object.keys(PlacementAlignMap).forEach((key) => {
      const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
      const placementInfo = Object.assign(Object.assign({}, template), {
        offset: [0, 0],
        dynamicInset: true
      });
      placementMap[key] = placementInfo;
      if (DisableAutoArrowList.has(key)) {
        placementInfo.autoArrow = false;
      }
      switch (key) {
        case "top":
        case "topLeft":
        case "topRight":
          placementInfo.offset[1] = -halfArrowWidth - offset;
          break;
        case "bottom":
        case "bottomLeft":
        case "bottomRight":
          placementInfo.offset[1] = halfArrowWidth + offset;
          break;
        case "left":
        case "leftTop":
        case "leftBottom":
          placementInfo.offset[0] = -halfArrowWidth - offset;
          break;
        case "right":
        case "rightTop":
        case "rightBottom":
          placementInfo.offset[0] = halfArrowWidth + offset;
          break;
      }
      const arrowOffset = getArrowOffsetToken({
        contentRadius: borderRadius,
        limitVerticalRadius: true
      });
      if (arrowPointAtCenter) {
        switch (key) {
          case "topLeft":
          case "bottomLeft":
            placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
            break;
          case "topRight":
          case "bottomRight":
            placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
            break;
          case "leftTop":
          case "rightTop":
            placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
            break;
          case "leftBottom":
          case "rightBottom":
            placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
            break;
        }
      }
      placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
      if (visibleFirst) {
        placementInfo.htmlRegion = "visibleFirst";
      }
    });
    return placementMap;
  }
  const genTooltipStyle = (token2) => {
    const {
      componentCls,
      // ant-tooltip
      tooltipMaxWidth,
      tooltipColor,
      tooltipBg,
      tooltipBorderRadius,
      zIndexPopup,
      controlHeight,
      boxShadowSecondary,
      paddingSM,
      paddingXS
    } = token2;
    return [
      {
        [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), {
          position: "absolute",
          zIndex: zIndexPopup,
          display: "block",
          width: "max-content",
          maxWidth: tooltipMaxWidth,
          visibility: "visible",
          // When use `autoArrow`, origin will follow the arrow position
          "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
          transformOrigin: [`var(--valid-offset-x, 50%)`, `var(--arrow-y, 50%)`].join(" "),
          "&-hidden": {
            display: "none"
          },
          "--antd-arrow-background-color": tooltipBg,
          // Wrapper for the tooltip content
          [`${componentCls}-inner`]: {
            minWidth: "1em",
            minHeight: controlHeight,
            padding: `${unit$1(token2.calc(paddingSM).div(2).equal())} ${unit$1(paddingXS)}`,
            color: tooltipColor,
            textAlign: "start",
            textDecoration: "none",
            wordWrap: "break-word",
            backgroundColor: tooltipBg,
            borderRadius: tooltipBorderRadius,
            boxShadow: boxShadowSecondary,
            boxSizing: "border-box"
          },
          // Limit left and right placement radius
          [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
            [`${componentCls}-inner`]: {
              borderRadius: token2.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
            }
          },
          [`${componentCls}-content`]: {
            position: "relative"
          }
        }), genPresetColor(token2, (colorKey, _ref) => {
          let {
            darkColor
          } = _ref;
          return {
            [`&${componentCls}-${colorKey}`]: {
              [`${componentCls}-inner`]: {
                backgroundColor: darkColor
              },
              [`${componentCls}-arrow`]: {
                "--antd-arrow-background-color": darkColor
              }
            }
          };
        })), {
          // RTL
          "&-rtl": {
            direction: "rtl"
          }
        })
      },
      // Arrow Style
      getArrowStyle(token2, "var(--antd-arrow-background-color)"),
      // Pure Render
      {
        [`${componentCls}-pure`]: {
          position: "relative",
          maxWidth: "none",
          margin: token2.sizePopupArrow
        }
      }
    ];
  };
  const prepareComponentToken$3 = (token2) => Object.assign(Object.assign({
    zIndexPopup: token2.zIndexPopupBase + 70
  }, getArrowOffsetToken({
    contentRadius: token2.borderRadius,
    limitVerticalRadius: true
  })), getArrowToken(merge(token2, {
    borderRadiusOuter: Math.min(token2.borderRadiusOuter, 4)
  })));
  const useStyle$5 = function(prefixCls) {
    let injectStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const useStyle2 = genStyleHooks("Tooltip", (token2) => {
      const {
        borderRadius,
        colorTextLightSolid,
        colorBgSpotlight
      } = token2;
      const TooltipToken = merge(token2, {
        // default variables
        tooltipMaxWidth: 250,
        tooltipColor: colorTextLightSolid,
        tooltipBorderRadius: borderRadius,
        tooltipBg: colorBgSpotlight
      });
      return [genTooltipStyle(TooltipToken), initZoomMotion(token2, "zoom-big-fast")];
    }, prepareComponentToken$3, {
      resetStyle: false,
      // Popover use Tooltip as internal component. We do not need to handle this.
      injectStyle
    });
    return useStyle2(prefixCls);
  };
  const inverseColors = PresetColors.map((color) => `${color}-inverse`);
  function isPresetColor(color) {
    let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (includeInverse) {
      return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
    }
    return PresetColors.includes(color);
  }
  function parseColor(prefixCls, color) {
    const isInternalColor = isPresetColor(color);
    const className = classNames({
      [`${prefixCls}-${color}`]: color && isInternalColor
    });
    const overlayStyle = {};
    const arrowStyle = {};
    if (color && !isInternalColor) {
      overlayStyle.background = color;
      arrowStyle["--antd-arrow-background-color"] = color;
    }
    return {
      className,
      overlayStyle,
      arrowStyle
    };
  }
  const PurePanel$2 = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      placement = "top",
      title,
      color,
      overlayInnerStyle
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$5(prefixCls);
    const colorInfo = parseColor(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    const cls = classNames(hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls,
      style: arrowContentStyle
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-arrow`
    }), /* @__PURE__ */ React__namespace.createElement(Popup, Object.assign({}, props, {
      className: hashId,
      prefixCls,
      overlayInnerStyle: formattedOverlayInnerStyle
    }), title)));
  };
  var __rest$a = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const InternalTooltip = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    var _a, _b;
    const {
      prefixCls: customizePrefixCls,
      openClassName,
      getTooltipContainer,
      overlayClassName,
      color,
      overlayInnerStyle,
      children,
      afterOpenChange,
      afterVisibleChange,
      destroyTooltipOnHide,
      arrow = true,
      title,
      overlay,
      builtinPlacements,
      arrowPointAtCenter = false,
      autoAdjustOverflow = true
    } = props;
    const mergedShowArrow = !!arrow;
    const [, token2] = useToken();
    const {
      getPopupContainer: getContextPopupContainer,
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const warning3 = devUseWarning();
    const tooltipRef = React__namespace.useRef(null);
    const forceAlign = () => {
      var _a2;
      (_a2 = tooltipRef.current) === null || _a2 === void 0 ? void 0 : _a2.forceAlign();
    };
    React__namespace.useImperativeHandle(ref, () => {
      var _a2;
      return {
        forceAlign,
        forcePopupAlign: () => {
          warning3.deprecated(false, "forcePopupAlign", "forceAlign");
          forceAlign();
        },
        nativeElement: (_a2 = tooltipRef.current) === null || _a2 === void 0 ? void 0 : _a2.nativeElement
      };
    });
    const [open, setOpen] = useMergedState(false, {
      value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
      defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
    });
    const noTitle = !title && !overlay && title !== 0;
    const onOpenChange = (vis) => {
      var _a2, _b2;
      setOpen(noTitle ? false : vis);
      if (!noTitle) {
        (_a2 = props.onOpenChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, vis);
        (_b2 = props.onVisibleChange) === null || _b2 === void 0 ? void 0 : _b2.call(props, vis);
      }
    };
    const tooltipPlacements = React__namespace.useMemo(() => {
      var _a2, _b2;
      let mergedArrowPointAtCenter = arrowPointAtCenter;
      if (typeof arrow === "object") {
        mergedArrowPointAtCenter = (_b2 = (_a2 = arrow.pointAtCenter) !== null && _a2 !== void 0 ? _a2 : arrow.arrowPointAtCenter) !== null && _b2 !== void 0 ? _b2 : arrowPointAtCenter;
      }
      return builtinPlacements || getPlacements({
        arrowPointAtCenter: mergedArrowPointAtCenter,
        autoAdjustOverflow,
        arrowWidth: mergedShowArrow ? token2.sizePopupArrow : 0,
        borderRadius: token2.borderRadius,
        offset: token2.marginXXS,
        visibleFirst: true
      });
    }, [arrowPointAtCenter, arrow, builtinPlacements, token2]);
    const memoOverlay = React__namespace.useMemo(() => {
      if (title === 0) {
        return title;
      }
      return overlay || title || "";
    }, [overlay, title]);
    const memoOverlayWrapper = /* @__PURE__ */ React__namespace.createElement(ContextIsolator, {
      space: true
    }, typeof memoOverlay === "function" ? memoOverlay() : memoOverlay);
    const {
      getPopupContainer,
      placement = "top",
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle,
      rootClassName
    } = props, otherProps = __rest$a(props, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]);
    const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const injectFromPopover = props["data-popover-inject"];
    let tempOpen = open;
    if (!("open" in props) && !("visible" in props) && noTitle) {
      tempOpen = false;
    }
    const child = /* @__PURE__ */ React__namespace.isValidElement(children) && !isFragment(children) ? children : /* @__PURE__ */ React__namespace.createElement("span", null, children);
    const childProps = child.props;
    const childCls = !childProps.className || typeof childProps.className === "string" ? classNames(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$5(prefixCls, !injectFromPopover);
    const colorInfo = parseColor(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    const customOverlayClassName = classNames(overlayClassName, {
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, colorInfo.className, rootClassName, hashId, cssVarCls);
    const [zIndex, contextZIndex] = useZIndex("Tooltip", otherProps.zIndex);
    const content = /* @__PURE__ */ React__namespace.createElement(Tooltip$2, Object.assign({}, otherProps, {
      zIndex,
      showArrow: mergedShowArrow,
      placement,
      mouseEnterDelay,
      mouseLeaveDelay,
      prefixCls,
      overlayClassName: customOverlayClassName,
      overlayStyle: Object.assign(Object.assign({}, arrowContentStyle), overlayStyle),
      getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
      ref: tooltipRef,
      builtinPlacements: tooltipPlacements,
      overlay: memoOverlayWrapper,
      visible: tempOpen,
      onVisibleChange: onOpenChange,
      afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
      overlayInnerStyle: formattedOverlayInnerStyle,
      arrowContent: /* @__PURE__ */ React__namespace.createElement("span", {
        className: `${prefixCls}-arrow-content`
      }),
      motion: {
        motionName: getTransitionName(rootPrefixCls, "zoom-big-fast", props.transitionName),
        motionDeadline: 1e3
      },
      destroyTooltipOnHide: !!destroyTooltipOnHide
    }), tempOpen ? cloneElement(child, {
      className: childCls
    }) : child);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(zIndexContext.Provider, {
      value: contextZIndex
    }, content));
  });
  const Tooltip2 = InternalTooltip;
  Tooltip2._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$2;
  var VerticalAlignTopOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z" } }] }, "name": "vertical-align-top", "theme": "outlined" };
  var VerticalAlignTopOutlined = function VerticalAlignTopOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: VerticalAlignTopOutlined$1
    }));
  };
  var RefIcon$1 = /* @__PURE__ */ React__namespace.forwardRef(VerticalAlignTopOutlined);
  const antStatusProcessing = new Keyframe("antStatusProcessing", {
    "0%": {
      transform: "scale(0.8)",
      opacity: 0.5
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  });
  const antZoomBadgeIn = new Keyframe("antZoomBadgeIn", {
    "0%": {
      transform: "scale(0) translate(50%, -50%)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1) translate(50%, -50%)"
    }
  });
  const antZoomBadgeOut = new Keyframe("antZoomBadgeOut", {
    "0%": {
      transform: "scale(1) translate(50%, -50%)"
    },
    "100%": {
      transform: "scale(0) translate(50%, -50%)",
      opacity: 0
    }
  });
  const antNoWrapperZoomBadgeIn = new Keyframe("antNoWrapperZoomBadgeIn", {
    "0%": {
      transform: "scale(0)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)"
    }
  });
  const antNoWrapperZoomBadgeOut = new Keyframe("antNoWrapperZoomBadgeOut", {
    "0%": {
      transform: "scale(1)"
    },
    "100%": {
      transform: "scale(0)",
      opacity: 0
    }
  });
  const antBadgeLoadingCircle = new Keyframe("antBadgeLoadingCircle", {
    "0%": {
      transformOrigin: "50%"
    },
    "100%": {
      transform: "translate(50%, -50%) rotate(360deg)",
      transformOrigin: "50%"
    }
  });
  const genSharedBadgeStyle = (token2) => {
    const {
      componentCls,
      iconCls,
      antCls,
      badgeShadowSize,
      textFontSize,
      textFontSizeSM,
      statusSize,
      dotSize,
      textFontWeight,
      indicatorHeight,
      indicatorHeightSM,
      marginXS,
      calc
    } = token2;
    const numberPrefixCls = `${antCls}-scroll-number`;
    const colorPreset = genPresetColor(token2, (colorKey, _ref) => {
      let {
        darkColor
      } = _ref;
      return {
        [`&${componentCls} ${componentCls}-color-${colorKey}`]: {
          background: darkColor,
          [`&:not(${componentCls}-count)`]: {
            color: darkColor
          },
          "a:hover &": {
            background: darkColor
          }
        }
      };
    });
    return {
      [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), {
        position: "relative",
        display: "inline-block",
        width: "fit-content",
        lineHeight: 1,
        [`${componentCls}-count`]: {
          display: "inline-flex",
          justifyContent: "center",
          zIndex: token2.indicatorZIndex,
          minWidth: indicatorHeight,
          height: indicatorHeight,
          color: token2.badgeTextColor,
          fontWeight: textFontWeight,
          fontSize: textFontSize,
          lineHeight: unit$1(indicatorHeight),
          whiteSpace: "nowrap",
          textAlign: "center",
          background: token2.badgeColor,
          borderRadius: calc(indicatorHeight).div(2).equal(),
          boxShadow: `0 0 0 ${unit$1(badgeShadowSize)} ${token2.badgeShadowColor}`,
          transition: `background ${token2.motionDurationMid}`,
          a: {
            color: token2.badgeTextColor
          },
          "a:hover": {
            color: token2.badgeTextColor
          },
          "a:hover &": {
            background: token2.badgeColorHover
          }
        },
        [`${componentCls}-count-sm`]: {
          minWidth: indicatorHeightSM,
          height: indicatorHeightSM,
          fontSize: textFontSizeSM,
          lineHeight: unit$1(indicatorHeightSM),
          borderRadius: calc(indicatorHeightSM).div(2).equal()
        },
        [`${componentCls}-multiple-words`]: {
          padding: `0 ${unit$1(token2.paddingXS)}`,
          bdi: {
            unicodeBidi: "plaintext"
          }
        },
        [`${componentCls}-dot`]: {
          zIndex: token2.indicatorZIndex,
          width: dotSize,
          minWidth: dotSize,
          height: dotSize,
          background: token2.badgeColor,
          borderRadius: "100%",
          boxShadow: `0 0 0 ${unit$1(badgeShadowSize)} ${token2.badgeShadowColor}`
        },
        [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          transform: "translate(50%, -50%)",
          transformOrigin: "100% 0%",
          [`&${iconCls}-spin`]: {
            animationName: antBadgeLoadingCircle,
            animationDuration: "1s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear"
          }
        },
        [`&${componentCls}-status`]: {
          lineHeight: "inherit",
          verticalAlign: "baseline",
          [`${componentCls}-status-dot`]: {
            position: "relative",
            top: -1,
            // Magic number, but seems better experience
            display: "inline-block",
            width: statusSize,
            height: statusSize,
            verticalAlign: "middle",
            borderRadius: "50%"
          },
          [`${componentCls}-status-success`]: {
            backgroundColor: token2.colorSuccess
          },
          [`${componentCls}-status-processing`]: {
            overflow: "visible",
            color: token2.colorInfo,
            backgroundColor: token2.colorInfo,
            borderColor: "currentcolor",
            "&::after": {
              position: "absolute",
              top: 0,
              insetInlineStart: 0,
              width: "100%",
              height: "100%",
              borderWidth: badgeShadowSize,
              borderStyle: "solid",
              borderColor: "inherit",
              borderRadius: "50%",
              animationName: antStatusProcessing,
              animationDuration: token2.badgeProcessingDuration,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
              content: '""'
            }
          },
          [`${componentCls}-status-default`]: {
            backgroundColor: token2.colorTextPlaceholder
          },
          [`${componentCls}-status-error`]: {
            backgroundColor: token2.colorError
          },
          [`${componentCls}-status-warning`]: {
            backgroundColor: token2.colorWarning
          },
          [`${componentCls}-status-text`]: {
            marginInlineStart: marginXS,
            color: token2.colorText,
            fontSize: token2.fontSize
          }
        }
      }), colorPreset), {
        [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
          animationName: antZoomBadgeIn,
          animationDuration: token2.motionDurationSlow,
          animationTimingFunction: token2.motionEaseOutBack,
          animationFillMode: "both"
        },
        [`${componentCls}-zoom-leave`]: {
          animationName: antZoomBadgeOut,
          animationDuration: token2.motionDurationSlow,
          animationTimingFunction: token2.motionEaseOutBack,
          animationFillMode: "both"
        },
        [`&${componentCls}-not-a-wrapper`]: {
          [`${componentCls}-zoom-appear, ${componentCls}-zoom-enter`]: {
            animationName: antNoWrapperZoomBadgeIn,
            animationDuration: token2.motionDurationSlow,
            animationTimingFunction: token2.motionEaseOutBack
          },
          [`${componentCls}-zoom-leave`]: {
            animationName: antNoWrapperZoomBadgeOut,
            animationDuration: token2.motionDurationSlow,
            animationTimingFunction: token2.motionEaseOutBack
          },
          [`&:not(${componentCls}-status)`]: {
            verticalAlign: "middle"
          },
          [`${numberPrefixCls}-custom-component, ${componentCls}-count`]: {
            transform: "none"
          },
          [`${numberPrefixCls}-custom-component, ${numberPrefixCls}`]: {
            position: "relative",
            top: "auto",
            display: "block",
            transformOrigin: "50% 50%"
          }
        },
        [numberPrefixCls]: {
          overflow: "hidden",
          transition: `all ${token2.motionDurationMid} ${token2.motionEaseOutBack}`,
          [`${numberPrefixCls}-only`]: {
            position: "relative",
            display: "inline-block",
            height: indicatorHeight,
            transition: `all ${token2.motionDurationSlow} ${token2.motionEaseOutBack}`,
            WebkitTransformStyle: "preserve-3d",
            WebkitBackfaceVisibility: "hidden",
            [`> p${numberPrefixCls}-only-unit`]: {
              height: indicatorHeight,
              margin: 0,
              WebkitTransformStyle: "preserve-3d",
              WebkitBackfaceVisibility: "hidden"
            }
          },
          [`${numberPrefixCls}-symbol`]: {
            verticalAlign: "top"
          }
        },
        // ====================== RTL =======================
        "&-rtl": {
          direction: "rtl",
          [`${componentCls}-count, ${componentCls}-dot, ${numberPrefixCls}-custom-component`]: {
            transform: "translate(-50%, -50%)"
          }
        }
      })
    };
  };
  const prepareToken = (token2) => {
    const {
      fontHeight,
      lineWidth,
      marginXS,
      colorBorderBg
    } = token2;
    const badgeFontHeight = fontHeight;
    const badgeShadowSize = lineWidth;
    const badgeTextColor = token2.colorTextLightSolid;
    const badgeColor = token2.colorError;
    const badgeColorHover = token2.colorErrorHover;
    const badgeToken = merge(token2, {
      badgeFontHeight,
      badgeShadowSize,
      badgeTextColor,
      badgeColor,
      badgeColorHover,
      badgeShadowColor: colorBorderBg,
      badgeProcessingDuration: "1.2s",
      badgeRibbonOffset: marginXS,
      // Follow token just by Design. Not related with token
      badgeRibbonCornerTransform: "scaleY(0.75)",
      badgeRibbonCornerFilter: `brightness(75%)`
    });
    return badgeToken;
  };
  const prepareComponentToken$2 = (token2) => {
    const {
      fontSize,
      lineHeight,
      fontSizeSM,
      lineWidth
    } = token2;
    return {
      indicatorZIndex: "auto",
      indicatorHeight: Math.round(fontSize * lineHeight) - 2 * lineWidth,
      indicatorHeightSM: fontSize,
      dotSize: fontSizeSM / 2,
      textFontSize: fontSizeSM,
      textFontSizeSM: fontSizeSM,
      textFontWeight: "normal",
      statusSize: fontSizeSM / 2
    };
  };
  const useStyle$4 = genStyleHooks("Badge", (token2) => {
    const badgeToken = prepareToken(token2);
    return genSharedBadgeStyle(badgeToken);
  }, prepareComponentToken$2);
  const genRibbonStyle = (token2) => {
    const {
      antCls,
      badgeFontHeight,
      marginXS,
      badgeRibbonOffset,
      calc
    } = token2;
    const ribbonPrefixCls = `${antCls}-ribbon`;
    const ribbonWrapperPrefixCls = `${antCls}-ribbon-wrapper`;
    const statusRibbonPreset = genPresetColor(token2, (colorKey, _ref) => {
      let {
        darkColor
      } = _ref;
      return {
        [`&${ribbonPrefixCls}-color-${colorKey}`]: {
          background: darkColor,
          color: darkColor
        }
      };
    });
    return {
      [ribbonWrapperPrefixCls]: {
        position: "relative"
      },
      [ribbonPrefixCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), {
        position: "absolute",
        top: marginXS,
        padding: `0 ${unit$1(token2.paddingXS)}`,
        color: token2.colorPrimary,
        lineHeight: unit$1(badgeFontHeight),
        whiteSpace: "nowrap",
        backgroundColor: token2.colorPrimary,
        borderRadius: token2.borderRadiusSM,
        [`${ribbonPrefixCls}-text`]: {
          color: token2.badgeTextColor
        },
        [`${ribbonPrefixCls}-corner`]: {
          position: "absolute",
          top: "100%",
          width: badgeRibbonOffset,
          height: badgeRibbonOffset,
          color: "currentcolor",
          border: `${unit$1(calc(badgeRibbonOffset).div(2).equal())} solid`,
          transform: token2.badgeRibbonCornerTransform,
          transformOrigin: "top",
          filter: token2.badgeRibbonCornerFilter
        }
      }), statusRibbonPreset), {
        [`&${ribbonPrefixCls}-placement-end`]: {
          insetInlineEnd: calc(badgeRibbonOffset).mul(-1).equal(),
          borderEndEndRadius: 0,
          [`${ribbonPrefixCls}-corner`]: {
            insetInlineEnd: 0,
            borderInlineEndColor: "transparent",
            borderBlockEndColor: "transparent"
          }
        },
        [`&${ribbonPrefixCls}-placement-start`]: {
          insetInlineStart: calc(badgeRibbonOffset).mul(-1).equal(),
          borderEndStartRadius: 0,
          [`${ribbonPrefixCls}-corner`]: {
            insetInlineStart: 0,
            borderBlockEndColor: "transparent",
            borderInlineStartColor: "transparent"
          }
        },
        // ====================== RTL =======================
        "&-rtl": {
          direction: "rtl"
        }
      })
    };
  };
  const useStyle$3 = genStyleHooks(["Badge", "Ribbon"], (token2) => {
    const badgeToken = prepareToken(token2);
    return genRibbonStyle(badgeToken);
  }, prepareComponentToken$2);
  const Ribbon = (props) => {
    const {
      className,
      prefixCls: customizePrefixCls,
      style: style2,
      color,
      children,
      text,
      placement = "end",
      rootClassName
    } = props;
    const {
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("ribbon", customizePrefixCls);
    const wrapperCls = `${prefixCls}-wrapper`;
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$3(prefixCls, wrapperCls);
    const colorInPreset = isPresetColor(color, false);
    const ribbonCls = classNames(prefixCls, `${prefixCls}-placement-${placement}`, {
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-color-${color}`]: colorInPreset
    }, className);
    const colorStyle = {};
    const cornerColorStyle = {};
    if (color && !colorInPreset) {
      colorStyle.background = color;
      cornerColorStyle.color = color;
    }
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: classNames(wrapperCls, rootClassName, hashId, cssVarCls)
    }, children, /* @__PURE__ */ React__namespace.createElement("div", {
      className: classNames(ribbonCls, hashId),
      style: Object.assign(Object.assign({}, colorStyle), style2)
    }, /* @__PURE__ */ React__namespace.createElement("span", {
      className: `${prefixCls}-text`
    }, text), /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-corner`,
      style: cornerColorStyle
    }))));
  };
  const UnitNumber = (props) => {
    const {
      prefixCls,
      value,
      current,
      offset = 0
    } = props;
    let style2;
    if (offset) {
      style2 = {
        position: "absolute",
        top: `${offset}00%`,
        left: 0
      };
    }
    return /* @__PURE__ */ React__namespace.createElement("span", {
      style: style2,
      className: classNames(`${prefixCls}-only-unit`, {
        current
      })
    }, value);
  };
  function getOffset$1(start, end, unit2) {
    let index2 = start;
    let offset = 0;
    while ((index2 + 10) % 10 !== end) {
      index2 += unit2;
      offset += unit2;
    }
    return offset;
  }
  const SingleNumber = (props) => {
    const {
      prefixCls,
      count: originCount,
      value: originValue
    } = props;
    const value = Number(originValue);
    const count = Math.abs(originCount);
    const [prevValue, setPrevValue] = React__namespace.useState(value);
    const [prevCount, setPrevCount] = React__namespace.useState(count);
    const onTransitionEnd = () => {
      setPrevValue(value);
      setPrevCount(count);
    };
    React__namespace.useEffect(() => {
      const timer = setTimeout(onTransitionEnd, 1e3);
      return () => clearTimeout(timer);
    }, [value]);
    let unitNodes;
    let offsetStyle;
    if (prevValue === value || Number.isNaN(value) || Number.isNaN(prevValue)) {
      unitNodes = [/* @__PURE__ */ React__namespace.createElement(UnitNumber, Object.assign({}, props, {
        key: value,
        current: true
      }))];
      offsetStyle = {
        transition: "none"
      };
    } else {
      unitNodes = [];
      const end = value + 10;
      const unitNumberList = [];
      for (let index2 = value; index2 <= end; index2 += 1) {
        unitNumberList.push(index2);
      }
      const prevIndex = unitNumberList.findIndex((n2) => n2 % 10 === prevValue);
      unitNodes = unitNumberList.map((n2, index2) => {
        const singleUnit = n2 % 10;
        return /* @__PURE__ */ React__namespace.createElement(UnitNumber, Object.assign({}, props, {
          key: n2,
          value: singleUnit,
          offset: index2 - prevIndex,
          current: index2 === prevIndex
        }));
      });
      const unit2 = prevCount < count ? 1 : -1;
      offsetStyle = {
        transform: `translateY(${-getOffset$1(prevValue, value, unit2)}00%)`
      };
    }
    return /* @__PURE__ */ React__namespace.createElement("span", {
      className: `${prefixCls}-only`,
      style: offsetStyle,
      onTransitionEnd
    }, unitNodes);
  };
  var __rest$9 = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const ScrollNumber = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      count,
      className,
      motionClassName,
      style: style2,
      title,
      show,
      component: Component = "sup",
      children
    } = props, restProps = __rest$9(props, ["prefixCls", "count", "className", "motionClassName", "style", "title", "show", "component", "children"]);
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("scroll-number", customizePrefixCls);
    const newProps = Object.assign(Object.assign({}, restProps), {
      "data-show": show,
      style: style2,
      className: classNames(prefixCls, className, motionClassName),
      title
    });
    let numberNodes = count;
    if (count && Number(count) % 1 === 0) {
      const numberList = String(count).split("");
      numberNodes = /* @__PURE__ */ React__namespace.createElement("bdi", null, numberList.map((num, i) => /* @__PURE__ */ React__namespace.createElement(SingleNumber, {
        prefixCls,
        count: Number(count),
        value: num,
        // eslint-disable-next-line react/no-array-index-key
        key: numberList.length - i
      })));
    }
    if (style2 === null || style2 === void 0 ? void 0 : style2.borderColor) {
      newProps.style = Object.assign(Object.assign({}, style2), {
        boxShadow: `0 0 0 1px ${style2.borderColor} inset`
      });
    }
    if (children) {
      return cloneElement(children, (oriProps) => ({
        className: classNames(`${prefixCls}-custom-component`, oriProps === null || oriProps === void 0 ? void 0 : oriProps.className, motionClassName)
      }));
    }
    return /* @__PURE__ */ React__namespace.createElement(Component, Object.assign({}, newProps, {
      ref
    }), numberNodes);
  });
  var __rest$8 = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const InternalBadge = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    var _a, _b, _c, _d, _e;
    const {
      prefixCls: customizePrefixCls,
      scrollNumberPrefixCls: customizeScrollNumberPrefixCls,
      children,
      status,
      text,
      color,
      count = null,
      overflowCount = 99,
      dot = false,
      size = "default",
      title,
      offset,
      style: style2,
      className,
      rootClassName,
      classNames: classNames$1,
      styles,
      showZero = false
    } = props, restProps = __rest$8(props, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "rootClassName", "classNames", "styles", "showZero"]);
    const {
      getPrefixCls,
      direction,
      badge
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("badge", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$4(prefixCls);
    const numberedDisplayCount = count > overflowCount ? `${overflowCount}+` : count;
    const isZero = numberedDisplayCount === "0" || numberedDisplayCount === 0;
    const ignoreCount = count === null || isZero && !showZero;
    const hasStatus = (status !== null && status !== void 0 || color !== null && color !== void 0) && ignoreCount;
    const showAsDot = dot && !isZero;
    const mergedCount = showAsDot ? "" : numberedDisplayCount;
    const isHidden = React.useMemo(() => {
      const isEmpty = mergedCount === null || mergedCount === void 0 || mergedCount === "";
      return (isEmpty || isZero && !showZero) && !showAsDot;
    }, [mergedCount, isZero, showZero, showAsDot]);
    const countRef = React.useRef(count);
    if (!isHidden) {
      countRef.current = count;
    }
    const livingCount = countRef.current;
    const displayCountRef = React.useRef(mergedCount);
    if (!isHidden) {
      displayCountRef.current = mergedCount;
    }
    const displayCount = displayCountRef.current;
    const isDotRef = React.useRef(showAsDot);
    if (!isHidden) {
      isDotRef.current = showAsDot;
    }
    const mergedStyle = React.useMemo(() => {
      if (!offset) {
        return Object.assign(Object.assign({}, badge === null || badge === void 0 ? void 0 : badge.style), style2);
      }
      const offsetStyle = {
        marginTop: offset[1]
      };
      if (direction === "rtl") {
        offsetStyle.left = parseInt(offset[0], 10);
      } else {
        offsetStyle.right = -parseInt(offset[0], 10);
      }
      return Object.assign(Object.assign(Object.assign({}, offsetStyle), badge === null || badge === void 0 ? void 0 : badge.style), style2);
    }, [direction, offset, style2, badge === null || badge === void 0 ? void 0 : badge.style]);
    const titleNode = title !== null && title !== void 0 ? title : typeof livingCount === "string" || typeof livingCount === "number" ? livingCount : void 0;
    const statusTextNode = isHidden || !text ? null : /* @__PURE__ */ React__namespace.createElement("span", {
      className: `${prefixCls}-status-text`
    }, text);
    const displayNode = !livingCount || typeof livingCount !== "object" ? void 0 : cloneElement(livingCount, (oriProps) => ({
      style: Object.assign(Object.assign({}, mergedStyle), oriProps.style)
    }));
    const isInternalColor = isPresetColor(color, false);
    const statusCls = classNames(classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.indicator, (_a = badge === null || badge === void 0 ? void 0 : badge.classNames) === null || _a === void 0 ? void 0 : _a.indicator, {
      [`${prefixCls}-status-dot`]: hasStatus,
      [`${prefixCls}-status-${status}`]: !!status,
      [`${prefixCls}-color-${color}`]: isInternalColor
    });
    const statusStyle = {};
    if (color && !isInternalColor) {
      statusStyle.color = color;
      statusStyle.background = color;
    }
    const badgeClassName = classNames(prefixCls, {
      [`${prefixCls}-status`]: hasStatus,
      [`${prefixCls}-not-a-wrapper`]: !children,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, className, rootClassName, badge === null || badge === void 0 ? void 0 : badge.className, (_b = badge === null || badge === void 0 ? void 0 : badge.classNames) === null || _b === void 0 ? void 0 : _b.root, classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.root, hashId, cssVarCls);
    if (!children && hasStatus) {
      const statusTextColor = mergedStyle.color;
      return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("span", Object.assign({}, restProps, {
        className: badgeClassName,
        style: Object.assign(Object.assign(Object.assign({}, styles === null || styles === void 0 ? void 0 : styles.root), (_c = badge === null || badge === void 0 ? void 0 : badge.styles) === null || _c === void 0 ? void 0 : _c.root), mergedStyle)
      }), /* @__PURE__ */ React__namespace.createElement("span", {
        className: statusCls,
        style: Object.assign(Object.assign(Object.assign({}, styles === null || styles === void 0 ? void 0 : styles.indicator), (_d = badge === null || badge === void 0 ? void 0 : badge.styles) === null || _d === void 0 ? void 0 : _d.indicator), statusStyle)
      }), text && /* @__PURE__ */ React__namespace.createElement("span", {
        style: {
          color: statusTextColor
        },
        className: `${prefixCls}-status-text`
      }, text)));
    }
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("span", Object.assign({
      ref
    }, restProps, {
      className: badgeClassName,
      style: Object.assign(Object.assign({}, (_e = badge === null || badge === void 0 ? void 0 : badge.styles) === null || _e === void 0 ? void 0 : _e.root), styles === null || styles === void 0 ? void 0 : styles.root)
    }), children, /* @__PURE__ */ React__namespace.createElement(CSSMotion, {
      visible: !isHidden,
      motionName: `${prefixCls}-zoom`,
      motionAppear: false,
      motionDeadline: 1e3
    }, (_ref) => {
      let {
        className: motionClassName
      } = _ref;
      var _a2, _b2;
      const scrollNumberPrefixCls = getPrefixCls("scroll-number", customizeScrollNumberPrefixCls);
      const isDot = isDotRef.current;
      const scrollNumberCls = classNames(classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.indicator, (_a2 = badge === null || badge === void 0 ? void 0 : badge.classNames) === null || _a2 === void 0 ? void 0 : _a2.indicator, {
        [`${prefixCls}-dot`]: isDot,
        [`${prefixCls}-count`]: !isDot,
        [`${prefixCls}-count-sm`]: size === "small",
        [`${prefixCls}-multiple-words`]: !isDot && displayCount && displayCount.toString().length > 1,
        [`${prefixCls}-status-${status}`]: !!status,
        [`${prefixCls}-color-${color}`]: isInternalColor
      });
      let scrollNumberStyle = Object.assign(Object.assign(Object.assign({}, styles === null || styles === void 0 ? void 0 : styles.indicator), (_b2 = badge === null || badge === void 0 ? void 0 : badge.styles) === null || _b2 === void 0 ? void 0 : _b2.indicator), mergedStyle);
      if (color && !isInternalColor) {
        scrollNumberStyle = scrollNumberStyle || {};
        scrollNumberStyle.background = color;
      }
      return /* @__PURE__ */ React__namespace.createElement(ScrollNumber, {
        prefixCls: scrollNumberPrefixCls,
        show: !isHidden,
        motionClassName,
        className: scrollNumberCls,
        count: displayCount,
        title: titleNode,
        style: scrollNumberStyle,
        key: "scrollNumber"
      }, displayNode);
    }), statusTextNode));
  });
  const Badge = InternalBadge;
  Badge.Ribbon = Ribbon;
  var _excluded$1 = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"];
  var Checkbox$2 = /* @__PURE__ */ React.forwardRef(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-checkbox" : _props$prefixCls, className = props.className, style2 = props.style, checked = props.checked, disabled = props.disabled, _props$defaultChecked = props.defaultChecked, defaultChecked = _props$defaultChecked === void 0 ? false : _props$defaultChecked, _props$type = props.type, type4 = _props$type === void 0 ? "checkbox" : _props$type, title = props.title, onChange = props.onChange, inputProps = _objectWithoutProperties(props, _excluded$1);
    var inputRef = React.useRef(null);
    var holderRef = React.useRef(null);
    var _useMergedState = useMergedState(defaultChecked, {
      value: checked
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), rawValue = _useMergedState2[0], setRawValue = _useMergedState2[1];
    React.useImperativeHandle(ref, function() {
      return {
        focus: function focus(options) {
          var _inputRef$current;
          (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus(options);
        },
        blur: function blur() {
          var _inputRef$current2;
          (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.blur();
        },
        input: inputRef.current,
        nativeElement: holderRef.current
      };
    });
    var classString = classNames(prefixCls, className, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-checked"), rawValue), "".concat(prefixCls, "-disabled"), disabled));
    var handleChange = function handleChange2(e2) {
      if (disabled) {
        return;
      }
      if (!("checked" in props)) {
        setRawValue(e2.target.checked);
      }
      onChange === null || onChange === void 0 || onChange({
        target: _objectSpread2(_objectSpread2({}, props), {}, {
          type: type4,
          checked: e2.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e2.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e2.preventDefault();
        },
        nativeEvent: e2.nativeEvent
      });
    };
    return /* @__PURE__ */ React__namespace.createElement("span", {
      className: classString,
      title,
      style: style2,
      ref: holderRef
    }, /* @__PURE__ */ React__namespace.createElement("input", _extends({}, inputProps, {
      className: "".concat(prefixCls, "-input"),
      ref: inputRef,
      onChange: handleChange,
      disabled,
      checked: !!rawValue,
      type: type4
    })), /* @__PURE__ */ React__namespace.createElement("span", {
      className: "".concat(prefixCls, "-inner")
    }));
  });
  const genCheckboxStyle = (token2) => {
    const {
      checkboxCls
    } = token2;
    const wrapperCls = `${checkboxCls}-wrapper`;
    return [
      // ===================== Basic =====================
      {
        // Group
        [`${checkboxCls}-group`]: Object.assign(Object.assign({}, resetComponent(token2)), {
          display: "inline-flex",
          flexWrap: "wrap",
          columnGap: token2.marginXS,
          // Group > Grid
          [`> ${token2.antCls}-row`]: {
            flex: 1
          }
        }),
        // Wrapper
        [wrapperCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
          display: "inline-flex",
          alignItems: "baseline",
          cursor: "pointer",
          // Fix checkbox & radio in flex align #30260
          "&:after": {
            display: "inline-block",
            width: 0,
            overflow: "hidden",
            content: "'\\a0'"
          },
          // Checkbox near checkbox
          [`& + ${wrapperCls}`]: {
            marginInlineStart: 0
          },
          [`&${wrapperCls}-in-form-item`]: {
            'input[type="checkbox"]': {
              width: 14,
              // FIXME: magic
              height: 14
              // FIXME: magic
            }
          }
        }),
        // Wrapper > Checkbox
        [checkboxCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
          position: "relative",
          whiteSpace: "nowrap",
          lineHeight: 1,
          cursor: "pointer",
          borderRadius: token2.borderRadiusSM,
          // To make alignment right when `controlHeight` is changed
          // Ref: https://github.com/ant-design/ant-design/issues/41564
          alignSelf: "center",
          // Wrapper > Checkbox > input
          [`${checkboxCls}-input`]: {
            position: "absolute",
            // Since baseline align will get additional space offset,
            // we need to move input to top to make it align with text.
            // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
            inset: 0,
            zIndex: 1,
            cursor: "pointer",
            opacity: 0,
            margin: 0,
            [`&:focus-visible + ${checkboxCls}-inner`]: Object.assign({}, genFocusOutline(token2))
          },
          // Wrapper > Checkbox > inner
          [`${checkboxCls}-inner`]: {
            boxSizing: "border-box",
            display: "block",
            width: token2.checkboxSize,
            height: token2.checkboxSize,
            direction: "ltr",
            backgroundColor: token2.colorBgContainer,
            border: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`,
            borderRadius: token2.borderRadiusSM,
            borderCollapse: "separate",
            transition: `all ${token2.motionDurationSlow}`,
            "&:after": {
              boxSizing: "border-box",
              position: "absolute",
              top: "50%",
              insetInlineStart: "25%",
              display: "table",
              width: token2.calc(token2.checkboxSize).div(14).mul(5).equal(),
              height: token2.calc(token2.checkboxSize).div(14).mul(8).equal(),
              border: `${unit$1(token2.lineWidthBold)} solid ${token2.colorWhite}`,
              borderTop: 0,
              borderInlineStart: 0,
              transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
              opacity: 0,
              content: '""',
              transition: `all ${token2.motionDurationFast} ${token2.motionEaseInBack}, opacity ${token2.motionDurationFast}`
            }
          },
          // Wrapper > Checkbox + Text
          "& + span": {
            paddingInlineStart: token2.paddingXS,
            paddingInlineEnd: token2.paddingXS
          }
        })
      },
      // ===================== Hover =====================
      {
        // Wrapper & Wrapper > Checkbox
        [`
        ${wrapperCls}:not(${wrapperCls}-disabled),
        ${checkboxCls}:not(${checkboxCls}-disabled)
      `]: {
          [`&:hover ${checkboxCls}-inner`]: {
            borderColor: token2.colorPrimary
          }
        },
        [`${wrapperCls}:not(${wrapperCls}-disabled)`]: {
          [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled) ${checkboxCls}-inner`]: {
            backgroundColor: token2.colorPrimaryHover,
            borderColor: "transparent"
          },
          [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled):after`]: {
            borderColor: token2.colorPrimaryHover
          }
        }
      },
      // ==================== Checked ====================
      {
        // Wrapper > Checkbox
        [`${checkboxCls}-checked`]: {
          [`${checkboxCls}-inner`]: {
            backgroundColor: token2.colorPrimary,
            borderColor: token2.colorPrimary,
            "&:after": {
              opacity: 1,
              transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
              transition: `all ${token2.motionDurationMid} ${token2.motionEaseOutBack} ${token2.motionDurationFast}`
            }
          }
        },
        [`
        ${wrapperCls}-checked:not(${wrapperCls}-disabled),
        ${checkboxCls}-checked:not(${checkboxCls}-disabled)
      `]: {
          [`&:hover ${checkboxCls}-inner`]: {
            backgroundColor: token2.colorPrimaryHover,
            borderColor: "transparent"
          }
        }
      },
      // ================= Indeterminate =================
      {
        [checkboxCls]: {
          "&-indeterminate": {
            // Wrapper > Checkbox > inner
            [`${checkboxCls}-inner`]: {
              backgroundColor: `${token2.colorBgContainer} !important`,
              borderColor: `${token2.colorBorder} !important`,
              "&:after": {
                top: "50%",
                insetInlineStart: "50%",
                width: token2.calc(token2.fontSizeLG).div(2).equal(),
                height: token2.calc(token2.fontSizeLG).div(2).equal(),
                backgroundColor: token2.colorPrimary,
                border: 0,
                transform: "translate(-50%, -50%) scale(1)",
                opacity: 1,
                content: '""'
              }
            },
            // https://github.com/ant-design/ant-design/issues/50074
            [`&:hover ${checkboxCls}-inner`]: {
              backgroundColor: `${token2.colorBgContainer} !important`,
              borderColor: `${token2.colorPrimary} !important`
            }
          }
        }
      },
      // ==================== Disable ====================
      {
        // Wrapper
        [`${wrapperCls}-disabled`]: {
          cursor: "not-allowed"
        },
        // Wrapper > Checkbox
        [`${checkboxCls}-disabled`]: {
          // Wrapper > Checkbox > input
          [`&, ${checkboxCls}-input`]: {
            cursor: "not-allowed",
            // Disabled for native input to enable Tooltip event handler
            // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
            pointerEvents: "none"
          },
          // Wrapper > Checkbox > inner
          [`${checkboxCls}-inner`]: {
            background: token2.colorBgContainerDisabled,
            borderColor: token2.colorBorder,
            "&:after": {
              borderColor: token2.colorTextDisabled
            }
          },
          "&:after": {
            display: "none"
          },
          "& + span": {
            color: token2.colorTextDisabled
          },
          [`&${checkboxCls}-indeterminate ${checkboxCls}-inner::after`]: {
            background: token2.colorTextDisabled
          }
        }
      }
    ];
  };
  function getStyle(prefixCls, token2) {
    const checkboxToken = merge(token2, {
      checkboxCls: `.${prefixCls}`,
      checkboxSize: token2.controlInteractiveSize
    });
    return [genCheckboxStyle(checkboxToken)];
  }
  const useStyle$2 = genStyleHooks("Checkbox", (token2, _ref) => {
    let {
      prefixCls
    } = _ref;
    return [getStyle(prefixCls, token2)];
  });
  const GroupContext = /* @__PURE__ */ React.createContext(null);
  var __rest$7 = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const InternalCheckbox = (props, ref) => {
    var _a;
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      children,
      indeterminate = false,
      style: style2,
      onMouseEnter,
      onMouseLeave,
      skipGroup = false,
      disabled
    } = props, restProps = __rest$7(props, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);
    const {
      getPrefixCls,
      direction,
      checkbox
    } = React__namespace.useContext(ConfigContext);
    const checkboxGroup = React__namespace.useContext(GroupContext);
    const {
      isFormItemInput
    } = React__namespace.useContext(FormItemInputContext);
    const contextDisabled = React__namespace.useContext(DisabledContext);
    const mergedDisabled = (_a = (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || disabled) !== null && _a !== void 0 ? _a : contextDisabled;
    const prevValue = React__namespace.useRef(restProps.value);
    React__namespace.useEffect(() => {
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
    }, []);
    React__namespace.useEffect(() => {
      if (skipGroup) {
        return;
      }
      if (restProps.value !== prevValue.current) {
        checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
        checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
        prevValue.current = restProps.value;
      }
      return () => checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
    }, [restProps.value]);
    const prefixCls = getPrefixCls("checkbox", customizePrefixCls);
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls, rootCls);
    const checkboxProps = Object.assign({}, restProps);
    if (checkboxGroup && !skipGroup) {
      checkboxProps.onChange = function() {
        if (restProps.onChange) {
          restProps.onChange.apply(restProps, arguments);
        }
        if (checkboxGroup.toggleOption) {
          checkboxGroup.toggleOption({
            label: children,
            value: restProps.value
          });
        }
      };
      checkboxProps.name = checkboxGroup.name;
      checkboxProps.checked = checkboxGroup.value.includes(restProps.value);
    }
    const classString = classNames(`${prefixCls}-wrapper`, {
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-wrapper-checked`]: checkboxProps.checked,
      [`${prefixCls}-wrapper-disabled`]: mergedDisabled,
      [`${prefixCls}-wrapper-in-form-item`]: isFormItemInput
    }, checkbox === null || checkbox === void 0 ? void 0 : checkbox.className, className, rootClassName, cssVarCls, rootCls, hashId);
    const checkboxClass = classNames({
      [`${prefixCls}-indeterminate`]: indeterminate
    }, TARGET_CLS, hashId);
    const ariaChecked = indeterminate ? "mixed" : void 0;
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(Wave, {
      component: "Checkbox",
      disabled: mergedDisabled
    }, /* @__PURE__ */ React__namespace.createElement("label", {
      className: classString,
      style: Object.assign(Object.assign({}, checkbox === null || checkbox === void 0 ? void 0 : checkbox.style), style2),
      onMouseEnter,
      onMouseLeave
    }, /* @__PURE__ */ React__namespace.createElement(Checkbox$2, Object.assign({
      "aria-checked": ariaChecked
    }, checkboxProps, {
      prefixCls,
      className: checkboxClass,
      disabled: mergedDisabled,
      ref
    })), children !== void 0 && /* @__PURE__ */ React__namespace.createElement("span", null, children))));
  };
  const Checkbox$1 = /* @__PURE__ */ React__namespace.forwardRef(InternalCheckbox);
  var __rest$6 = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const CheckboxGroup = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      defaultValue,
      children,
      options = [],
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style: style2,
      onChange
    } = props, restProps = __rest$6(props, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]);
    const {
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const [value, setValue] = React__namespace.useState(restProps.value || defaultValue || []);
    const [registeredValues, setRegisteredValues] = React__namespace.useState([]);
    React__namespace.useEffect(() => {
      if ("value" in restProps) {
        setValue(restProps.value || []);
      }
    }, [restProps.value]);
    const memoOptions = React__namespace.useMemo(() => options.map((option) => {
      if (typeof option === "string" || typeof option === "number") {
        return {
          label: option,
          value: option
        };
      }
      return option;
    }), [options]);
    const cancelValue = (val) => {
      setRegisteredValues((prevValues) => prevValues.filter((v2) => v2 !== val));
    };
    const registerValue = (val) => {
      setRegisteredValues((prevValues) => [].concat(_toConsumableArray(prevValues), [val]));
    };
    const toggleOption = (option) => {
      const optionIndex = value.indexOf(option.value);
      const newValue = _toConsumableArray(value);
      if (optionIndex === -1) {
        newValue.push(option.value);
      } else {
        newValue.splice(optionIndex, 1);
      }
      if (!("value" in restProps)) {
        setValue(newValue);
      }
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue.filter((val) => registeredValues.includes(val)).sort((a, b2) => {
        const indexA = memoOptions.findIndex((opt) => opt.value === a);
        const indexB = memoOptions.findIndex((opt) => opt.value === b2);
        return indexA - indexB;
      }));
    };
    const prefixCls = getPrefixCls("checkbox", customizePrefixCls);
    const groupPrefixCls = `${prefixCls}-group`;
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls, rootCls);
    const domProps = omit(restProps, ["value", "disabled"]);
    const childrenNode = options.length ? memoOptions.map((option) => /* @__PURE__ */ React__namespace.createElement(Checkbox$1, {
      prefixCls,
      key: option.value.toString(),
      disabled: "disabled" in option ? option.disabled : restProps.disabled,
      value: option.value,
      checked: value.includes(option.value),
      onChange: option.onChange,
      className: `${groupPrefixCls}-item`,
      style: option.style,
      title: option.title,
      id: option.id,
      required: option.required
    }, option.label)) : children;
    const context = {
      toggleOption,
      value,
      disabled: restProps.disabled,
      name: restProps.name,
      // https://github.com/ant-design/ant-design/issues/16376
      registerValue,
      cancelValue
    };
    const classString = classNames(groupPrefixCls, {
      [`${groupPrefixCls}-rtl`]: direction === "rtl"
    }, className, rootClassName, cssVarCls, rootCls, hashId);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", Object.assign({
      className: classString,
      style: style2
    }, domProps, {
      ref
    }), /* @__PURE__ */ React__namespace.createElement(GroupContext.Provider, {
      value: context
    }, childrenNode)));
  });
  const Checkbox = Checkbox$1;
  Checkbox.Group = CheckboxGroup;
  Checkbox.__ANT_CHECKBOX = true;
  var DrawerContext = /* @__PURE__ */ React__namespace.createContext(null);
  var RefContext = /* @__PURE__ */ React__namespace.createContext({});
  var _excluded = ["prefixCls", "className", "containerRef"];
  var DrawerPanel$1 = function DrawerPanel2(props) {
    var prefixCls = props.prefixCls, className = props.className, containerRef = props.containerRef, restProps = _objectWithoutProperties(props, _excluded);
    var _React$useContext = React__namespace.useContext(RefContext), panelRef = _React$useContext.panel;
    var mergedRef = useComposeRef(panelRef, containerRef);
    return /* @__PURE__ */ React__namespace.createElement("div", _extends({
      className: classNames("".concat(prefixCls, "-content"), className),
      role: "dialog",
      ref: mergedRef
    }, pickAttrs(props, {
      aria: true
    }), {
      "aria-modal": "true"
    }, restProps));
  };
  function parseWidthHeight(value) {
    if (typeof value === "string" && String(Number(value)) === value) {
      warningOnce(false, "Invalid value type of `width` or `height` which should be number type instead.");
      return Number(value);
    }
    return value;
  }
  var sentinelStyle = {
    width: 0,
    height: 0,
    overflow: "hidden",
    outline: "none",
    position: "absolute"
  };
  function DrawerPopup(props, ref) {
    var _ref, _pushConfig$distance, _pushConfig;
    var prefixCls = props.prefixCls, open = props.open, placement = props.placement, inline2 = props.inline, push = props.push, forceRender = props.forceRender, autoFocus = props.autoFocus, keyboard = props.keyboard, drawerClassNames = props.classNames, rootClassName = props.rootClassName, rootStyle = props.rootStyle, zIndex = props.zIndex, className = props.className, id = props.id, style2 = props.style, motion = props.motion, width = props.width, height = props.height, children = props.children, mask = props.mask, maskClosable = props.maskClosable, maskMotion = props.maskMotion, maskClassName = props.maskClassName, maskStyle = props.maskStyle, afterOpenChange = props.afterOpenChange, onClose = props.onClose, onMouseEnter = props.onMouseEnter, onMouseOver = props.onMouseOver, onMouseLeave = props.onMouseLeave, onClick = props.onClick, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, styles = props.styles, drawerRender = props.drawerRender;
    var panelRef = React__namespace.useRef();
    var sentinelStartRef = React__namespace.useRef();
    var sentinelEndRef = React__namespace.useRef();
    React__namespace.useImperativeHandle(ref, function() {
      return panelRef.current;
    });
    var onPanelKeyDown = function onPanelKeyDown2(event) {
      var keyCode = event.keyCode, shiftKey = event.shiftKey;
      switch (keyCode) {
        case KeyCode.TAB: {
          if (keyCode === KeyCode.TAB) {
            if (!shiftKey && document.activeElement === sentinelEndRef.current) {
              var _sentinelStartRef$cur;
              (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 || _sentinelStartRef$cur.focus({
                preventScroll: true
              });
            } else if (shiftKey && document.activeElement === sentinelStartRef.current) {
              var _sentinelEndRef$curre;
              (_sentinelEndRef$curre = sentinelEndRef.current) === null || _sentinelEndRef$curre === void 0 || _sentinelEndRef$curre.focus({
                preventScroll: true
              });
            }
          }
          break;
        }
        case KeyCode.ESC: {
          if (onClose && keyboard) {
            event.stopPropagation();
            onClose(event);
          }
          break;
        }
      }
    };
    React__namespace.useEffect(function() {
      if (open && autoFocus) {
        var _panelRef$current;
        (_panelRef$current = panelRef.current) === null || _panelRef$current === void 0 || _panelRef$current.focus({
          preventScroll: true
        });
      }
    }, [open]);
    var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), pushed = _React$useState2[0], setPushed = _React$useState2[1];
    var parentContext = React__namespace.useContext(DrawerContext);
    var pushConfig;
    if (typeof push === "boolean") {
      pushConfig = push ? {} : {
        distance: 0
      };
    } else {
      pushConfig = push || {};
    }
    var pushDistance = (_ref = (_pushConfig$distance = (_pushConfig = pushConfig) === null || _pushConfig === void 0 ? void 0 : _pushConfig.distance) !== null && _pushConfig$distance !== void 0 ? _pushConfig$distance : parentContext === null || parentContext === void 0 ? void 0 : parentContext.pushDistance) !== null && _ref !== void 0 ? _ref : 180;
    var mergedContext = React__namespace.useMemo(function() {
      return {
        pushDistance,
        push: function push2() {
          setPushed(true);
        },
        pull: function pull() {
          setPushed(false);
        }
      };
    }, [pushDistance]);
    React__namespace.useEffect(function() {
      if (open) {
        var _parentContext$push;
        parentContext === null || parentContext === void 0 || (_parentContext$push = parentContext.push) === null || _parentContext$push === void 0 || _parentContext$push.call(parentContext);
      } else {
        var _parentContext$pull;
        parentContext === null || parentContext === void 0 || (_parentContext$pull = parentContext.pull) === null || _parentContext$pull === void 0 || _parentContext$pull.call(parentContext);
      }
    }, [open]);
    React__namespace.useEffect(function() {
      return function() {
        var _parentContext$pull2;
        parentContext === null || parentContext === void 0 || (_parentContext$pull2 = parentContext.pull) === null || _parentContext$pull2 === void 0 || _parentContext$pull2.call(parentContext);
      };
    }, []);
    var maskNode = mask && /* @__PURE__ */ React__namespace.createElement(CSSMotion, _extends({
      key: "mask"
    }, maskMotion, {
      visible: open
    }), function(_ref2, maskRef) {
      var motionMaskClassName = _ref2.className, motionMaskStyle = _ref2.style;
      return /* @__PURE__ */ React__namespace.createElement("div", {
        className: classNames("".concat(prefixCls, "-mask"), motionMaskClassName, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.mask, maskClassName),
        style: _objectSpread2(_objectSpread2(_objectSpread2({}, motionMaskStyle), maskStyle), styles === null || styles === void 0 ? void 0 : styles.mask),
        onClick: maskClosable && open ? onClose : void 0,
        ref: maskRef
      });
    });
    var motionProps = typeof motion === "function" ? motion(placement) : motion;
    var wrapperStyle = {};
    if (pushed && pushDistance) {
      switch (placement) {
        case "top":
          wrapperStyle.transform = "translateY(".concat(pushDistance, "px)");
          break;
        case "bottom":
          wrapperStyle.transform = "translateY(".concat(-pushDistance, "px)");
          break;
        case "left":
          wrapperStyle.transform = "translateX(".concat(pushDistance, "px)");
          break;
        default:
          wrapperStyle.transform = "translateX(".concat(-pushDistance, "px)");
          break;
      }
    }
    if (placement === "left" || placement === "right") {
      wrapperStyle.width = parseWidthHeight(width);
    } else {
      wrapperStyle.height = parseWidthHeight(height);
    }
    var eventHandlers = {
      onMouseEnter,
      onMouseOver,
      onMouseLeave,
      onClick,
      onKeyDown,
      onKeyUp
    };
    var panelNode = /* @__PURE__ */ React__namespace.createElement(CSSMotion, _extends({
      key: "panel"
    }, motionProps, {
      visible: open,
      forceRender,
      onVisibleChanged: function onVisibleChanged(nextVisible) {
        afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(nextVisible);
      },
      removeOnLeave: false,
      leavedClassName: "".concat(prefixCls, "-content-wrapper-hidden")
    }), function(_ref3, motionRef) {
      var motionClassName = _ref3.className, motionStyle = _ref3.style;
      var content = /* @__PURE__ */ React__namespace.createElement(DrawerPanel$1, _extends({
        id,
        containerRef: motionRef,
        prefixCls,
        className: classNames(className, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.content),
        style: _objectSpread2(_objectSpread2({}, style2), styles === null || styles === void 0 ? void 0 : styles.content)
      }, pickAttrs(props, {
        aria: true
      }), eventHandlers), children);
      return /* @__PURE__ */ React__namespace.createElement("div", _extends({
        className: classNames("".concat(prefixCls, "-content-wrapper"), drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.wrapper, motionClassName),
        style: _objectSpread2(_objectSpread2(_objectSpread2({}, wrapperStyle), motionStyle), styles === null || styles === void 0 ? void 0 : styles.wrapper)
      }, pickAttrs(props, {
        data: true
      })), drawerRender ? drawerRender(content) : content);
    });
    var containerStyle = _objectSpread2({}, rootStyle);
    if (zIndex) {
      containerStyle.zIndex = zIndex;
    }
    return /* @__PURE__ */ React__namespace.createElement(DrawerContext.Provider, {
      value: mergedContext
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: classNames(prefixCls, "".concat(prefixCls, "-").concat(placement), rootClassName, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-open"), open), "".concat(prefixCls, "-inline"), inline2)),
      style: containerStyle,
      tabIndex: -1,
      ref: panelRef,
      onKeyDown: onPanelKeyDown
    }, maskNode, /* @__PURE__ */ React__namespace.createElement("div", {
      tabIndex: 0,
      ref: sentinelStartRef,
      style: sentinelStyle,
      "aria-hidden": "true",
      "data-sentinel": "start"
    }), panelNode, /* @__PURE__ */ React__namespace.createElement("div", {
      tabIndex: 0,
      ref: sentinelEndRef,
      style: sentinelStyle,
      "aria-hidden": "true",
      "data-sentinel": "end"
    })));
  }
  var RefDrawerPopup = /* @__PURE__ */ React__namespace.forwardRef(DrawerPopup);
  var Drawer$1 = function Drawer2(props) {
    var _props$open = props.open, open = _props$open === void 0 ? false : _props$open, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-drawer" : _props$prefixCls, _props$placement = props.placement, placement = _props$placement === void 0 ? "right" : _props$placement, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? true : _props$keyboard, _props$width = props.width, width = _props$width === void 0 ? 378 : _props$width, _props$mask = props.mask, mask = _props$mask === void 0 ? true : _props$mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, getContainer2 = props.getContainer, forceRender = props.forceRender, afterOpenChange = props.afterOpenChange, destroyOnClose = props.destroyOnClose, onMouseEnter = props.onMouseEnter, onMouseOver = props.onMouseOver, onMouseLeave = props.onMouseLeave, onClick = props.onClick, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, panelRef = props.panelRef;
    var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), animatedVisible = _React$useState2[0], setAnimatedVisible = _React$useState2[1];
    var _React$useState3 = React__namespace.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), mounted = _React$useState4[0], setMounted = _React$useState4[1];
    useLayoutEffect(function() {
      setMounted(true);
    }, []);
    var mergedOpen = mounted ? open : false;
    var popupRef = React__namespace.useRef();
    var lastActiveRef = React__namespace.useRef();
    useLayoutEffect(function() {
      if (mergedOpen) {
        lastActiveRef.current = document.activeElement;
      }
    }, [mergedOpen]);
    var internalAfterOpenChange = function internalAfterOpenChange2(nextVisible) {
      var _popupRef$current;
      setAnimatedVisible(nextVisible);
      afterOpenChange === null || afterOpenChange === void 0 || afterOpenChange(nextVisible);
      if (!nextVisible && lastActiveRef.current && !((_popupRef$current = popupRef.current) !== null && _popupRef$current !== void 0 && _popupRef$current.contains(lastActiveRef.current))) {
        var _lastActiveRef$curren;
        (_lastActiveRef$curren = lastActiveRef.current) === null || _lastActiveRef$curren === void 0 || _lastActiveRef$curren.focus({
          preventScroll: true
        });
      }
    };
    var refContext = React__namespace.useMemo(function() {
      return {
        panel: panelRef
      };
    }, [panelRef]);
    if (!forceRender && !animatedVisible && !mergedOpen && destroyOnClose) {
      return null;
    }
    var eventHandlers = {
      onMouseEnter,
      onMouseOver,
      onMouseLeave,
      onClick,
      onKeyDown,
      onKeyUp
    };
    var drawerPopupProps = _objectSpread2(_objectSpread2({}, props), {}, {
      open: mergedOpen,
      prefixCls,
      placement,
      autoFocus,
      keyboard,
      width,
      mask,
      maskClosable,
      inline: getContainer2 === false,
      afterOpenChange: internalAfterOpenChange,
      ref: popupRef
    }, eventHandlers);
    return /* @__PURE__ */ React__namespace.createElement(RefContext.Provider, {
      value: refContext
    }, /* @__PURE__ */ React__namespace.createElement(Portal, {
      open: mergedOpen || forceRender || animatedVisible,
      autoDestroy: false,
      getContainer: getContainer2,
      autoLock: mask && (mergedOpen || animatedVisible)
    }, /* @__PURE__ */ React__namespace.createElement(RefDrawerPopup, drawerPopupProps)));
  };
  const DrawerPanel = (props) => {
    var _a, _b;
    const {
      prefixCls,
      title,
      footer,
      extra,
      loading,
      onClose,
      headerStyle,
      bodyStyle,
      footerStyle,
      children,
      classNames: drawerClassNames,
      styles: drawerStyles
    } = props;
    const {
      drawer: drawerContext
    } = React__namespace.useContext(ConfigContext);
    const customCloseIconRender = React__namespace.useCallback((icon) => /* @__PURE__ */ React__namespace.createElement("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: `${prefixCls}-close`
    }, icon), [onClose]);
    const [mergedClosable, mergedCloseIcon] = useClosable(pickClosable(props), pickClosable(drawerContext), {
      closable: true,
      closeIconRender: customCloseIconRender
    });
    const headerNode = React__namespace.useMemo(() => {
      var _a2, _b2;
      if (!title && !mergedClosable) {
        return null;
      }
      return /* @__PURE__ */ React__namespace.createElement("div", {
        style: Object.assign(Object.assign(Object.assign({}, (_a2 = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.styles) === null || _a2 === void 0 ? void 0 : _a2.header), headerStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.header),
        className: classNames(`${prefixCls}-header`, {
          [`${prefixCls}-header-close-only`]: mergedClosable && !title && !extra
        }, (_b2 = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.classNames) === null || _b2 === void 0 ? void 0 : _b2.header, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.header)
      }, /* @__PURE__ */ React__namespace.createElement("div", {
        className: `${prefixCls}-header-title`
      }, mergedCloseIcon, title && /* @__PURE__ */ React__namespace.createElement("div", {
        className: `${prefixCls}-title`
      }, title)), extra && /* @__PURE__ */ React__namespace.createElement("div", {
        className: `${prefixCls}-extra`
      }, extra));
    }, [mergedClosable, mergedCloseIcon, extra, headerStyle, prefixCls, title]);
    const footerNode = React__namespace.useMemo(() => {
      var _a2, _b2;
      if (!footer) {
        return null;
      }
      const footerClassName = `${prefixCls}-footer`;
      return /* @__PURE__ */ React__namespace.createElement("div", {
        className: classNames(footerClassName, (_a2 = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.classNames) === null || _a2 === void 0 ? void 0 : _a2.footer, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.footer),
        style: Object.assign(Object.assign(Object.assign({}, (_b2 = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.styles) === null || _b2 === void 0 ? void 0 : _b2.footer), footerStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.footer)
      }, footer);
    }, [footer, footerStyle, prefixCls]);
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, headerNode, /* @__PURE__ */ React__namespace.createElement("div", {
      className: classNames(`${prefixCls}-body`, drawerClassNames === null || drawerClassNames === void 0 ? void 0 : drawerClassNames.body, (_a = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.classNames) === null || _a === void 0 ? void 0 : _a.body),
      style: Object.assign(Object.assign(Object.assign({}, (_b = drawerContext === null || drawerContext === void 0 ? void 0 : drawerContext.styles) === null || _b === void 0 ? void 0 : _b.body), bodyStyle), drawerStyles === null || drawerStyles === void 0 ? void 0 : drawerStyles.body)
    }, loading ? /* @__PURE__ */ React__namespace.createElement(Skeleton, {
      active: true,
      title: false,
      paragraph: {
        rows: 5
      },
      className: `${prefixCls}-body-skeleton`
    }) : children), footerNode);
  };
  const getMoveTranslate = (direction) => {
    const value = "100%";
    return {
      left: `translateX(-${value})`,
      right: `translateX(${value})`,
      top: `translateY(-${value})`,
      bottom: `translateY(${value})`
    }[direction];
  };
  const getEnterLeaveStyle = (startStyle, endStyle) => ({
    "&-enter, &-appear": Object.assign(Object.assign({}, startStyle), {
      "&-active": endStyle
    }),
    "&-leave": Object.assign(Object.assign({}, endStyle), {
      "&-active": startStyle
    })
  });
  const getFadeStyle = (from2, duration) => Object.assign({
    "&-enter, &-appear, &-leave": {
      "&-start": {
        transition: "none"
      },
      "&-active": {
        transition: `all ${duration}`
      }
    }
  }, getEnterLeaveStyle({
    opacity: from2
  }, {
    opacity: 1
  }));
  const getPanelMotionStyles = (direction, duration) => [getFadeStyle(0.7, duration), getEnterLeaveStyle({
    transform: getMoveTranslate(direction)
  }, {
    transform: "none"
  })];
  const genMotionStyle = (token2) => {
    const {
      componentCls,
      motionDurationSlow
    } = token2;
    return {
      [componentCls]: {
        // ======================== Mask ========================
        [`${componentCls}-mask-motion`]: getFadeStyle(0, motionDurationSlow),
        // ======================= Panel ========================
        [`${componentCls}-panel-motion`]: ["left", "right", "top", "bottom"].reduce((obj, direction) => Object.assign(Object.assign({}, obj), {
          [`&-${direction}`]: getPanelMotionStyles(direction, motionDurationSlow)
        }), {})
      }
    };
  };
  const genDrawerStyle = (token2) => {
    const {
      borderRadiusSM,
      componentCls,
      zIndexPopup,
      colorBgMask,
      colorBgElevated,
      motionDurationSlow,
      motionDurationMid,
      paddingXS,
      padding,
      paddingLG,
      fontSizeLG,
      lineHeightLG,
      lineWidth,
      lineType,
      colorSplit,
      marginXS,
      colorIcon,
      colorIconHover,
      colorBgTextHover,
      colorBgTextActive,
      colorText,
      fontWeightStrong,
      footerPaddingBlock,
      footerPaddingInline,
      calc
    } = token2;
    const wrapperCls = `${componentCls}-content-wrapper`;
    return {
      [componentCls]: {
        position: "fixed",
        inset: 0,
        zIndex: zIndexPopup,
        pointerEvents: "none",
        color: colorText,
        "&-pure": {
          position: "relative",
          background: colorBgElevated,
          display: "flex",
          flexDirection: "column",
          [`&${componentCls}-left`]: {
            boxShadow: token2.boxShadowDrawerLeft
          },
          [`&${componentCls}-right`]: {
            boxShadow: token2.boxShadowDrawerRight
          },
          [`&${componentCls}-top`]: {
            boxShadow: token2.boxShadowDrawerUp
          },
          [`&${componentCls}-bottom`]: {
            boxShadow: token2.boxShadowDrawerDown
          }
        },
        "&-inline": {
          position: "absolute"
        },
        // ====================== Mask ======================
        [`${componentCls}-mask`]: {
          position: "absolute",
          inset: 0,
          zIndex: zIndexPopup,
          background: colorBgMask,
          pointerEvents: "auto"
        },
        // ==================== Content =====================
        [wrapperCls]: {
          position: "absolute",
          zIndex: zIndexPopup,
          maxWidth: "100vw",
          transition: `all ${motionDurationSlow}`,
          "&-hidden": {
            display: "none"
          }
        },
        // Placement
        [`&-left > ${wrapperCls}`]: {
          top: 0,
          bottom: 0,
          left: {
            _skip_check_: true,
            value: 0
          },
          boxShadow: token2.boxShadowDrawerLeft
        },
        [`&-right > ${wrapperCls}`]: {
          top: 0,
          right: {
            _skip_check_: true,
            value: 0
          },
          bottom: 0,
          boxShadow: token2.boxShadowDrawerRight
        },
        [`&-top > ${wrapperCls}`]: {
          top: 0,
          insetInline: 0,
          boxShadow: token2.boxShadowDrawerUp
        },
        [`&-bottom > ${wrapperCls}`]: {
          bottom: 0,
          insetInline: 0,
          boxShadow: token2.boxShadowDrawerDown
        },
        [`${componentCls}-content`]: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          overflow: "auto",
          background: colorBgElevated,
          pointerEvents: "auto"
        },
        // Header
        [`${componentCls}-header`]: {
          display: "flex",
          flex: 0,
          alignItems: "center",
          padding: `${unit$1(padding)} ${unit$1(paddingLG)}`,
          fontSize: fontSizeLG,
          lineHeight: lineHeightLG,
          borderBottom: `${unit$1(lineWidth)} ${lineType} ${colorSplit}`,
          "&-title": {
            display: "flex",
            flex: 1,
            alignItems: "center",
            minWidth: 0,
            minHeight: 0
          }
        },
        [`${componentCls}-extra`]: {
          flex: "none"
        },
        [`${componentCls}-close`]: Object.assign({
          display: "inline-flex",
          width: calc(fontSizeLG).add(paddingXS).equal(),
          height: calc(fontSizeLG).add(paddingXS).equal(),
          borderRadius: borderRadiusSM,
          justifyContent: "center",
          alignItems: "center",
          marginInlineEnd: marginXS,
          color: colorIcon,
          fontWeight: fontWeightStrong,
          fontSize: fontSizeLG,
          fontStyle: "normal",
          lineHeight: 1,
          textAlign: "center",
          textTransform: "none",
          textDecoration: "none",
          background: "transparent",
          border: 0,
          cursor: "pointer",
          transition: `all ${motionDurationMid}`,
          textRendering: "auto",
          "&:hover": {
            color: colorIconHover,
            backgroundColor: colorBgTextHover,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: colorBgTextActive
          }
        }, genFocusStyle(token2)),
        [`${componentCls}-title`]: {
          flex: 1,
          margin: 0,
          fontWeight: token2.fontWeightStrong,
          fontSize: fontSizeLG,
          lineHeight: lineHeightLG
        },
        // Body
        [`${componentCls}-body`]: {
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          padding: paddingLG,
          overflow: "auto",
          [`${componentCls}-body-skeleton`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center"
          }
        },
        // Footer
        [`${componentCls}-footer`]: {
          flexShrink: 0,
          padding: `${unit$1(footerPaddingBlock)} ${unit$1(footerPaddingInline)}`,
          borderTop: `${unit$1(lineWidth)} ${lineType} ${colorSplit}`
        },
        // ====================== RTL =======================
        "&-rtl": {
          direction: "rtl"
        }
      }
    };
  };
  const prepareComponentToken$1 = (token2) => ({
    zIndexPopup: token2.zIndexPopupBase,
    footerPaddingBlock: token2.paddingXS,
    footerPaddingInline: token2.padding
  });
  const useStyle$1 = genStyleHooks("Drawer", (token2) => {
    const drawerToken = merge(token2, {});
    return [genDrawerStyle(drawerToken), genMotionStyle(drawerToken)];
  }, prepareComponentToken$1);
  var __rest$5 = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const defaultPushState = {
    distance: 180
  };
  const Drawer = (props) => {
    const {
      rootClassName,
      width,
      height,
      size = "default",
      mask = true,
      push = defaultPushState,
      open,
      afterOpenChange,
      onClose,
      prefixCls: customizePrefixCls,
      getContainer: customizeGetContainer,
      style: style2,
      className,
      // Deprecated
      visible,
      afterVisibleChange,
      maskStyle,
      drawerStyle,
      contentWrapperStyle
    } = props, rest = __rest$5(props, ["rootClassName", "width", "height", "size", "mask", "push", "open", "afterOpenChange", "onClose", "prefixCls", "getContainer", "style", "className", "visible", "afterVisibleChange", "maskStyle", "drawerStyle", "contentWrapperStyle"]);
    const {
      getPopupContainer,
      getPrefixCls,
      direction,
      drawer
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("drawer", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls);
    const getContainer2 = (
      // 有可能为 false，所以不能直接判断
      customizeGetContainer === void 0 && getPopupContainer ? () => getPopupContainer(document.body) : customizeGetContainer
    );
    const drawerClassName = classNames({
      "no-mask": !mask,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, rootClassName, hashId, cssVarCls);
    const mergedWidth = React__namespace.useMemo(() => width !== null && width !== void 0 ? width : size === "large" ? 736 : 378, [width, size]);
    const mergedHeight = React__namespace.useMemo(() => height !== null && height !== void 0 ? height : size === "large" ? 736 : 378, [height, size]);
    const maskMotion = {
      motionName: getTransitionName(prefixCls, "mask-motion"),
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      motionDeadline: 500
    };
    const panelMotion = (motionPlacement) => ({
      motionName: getTransitionName(prefixCls, `panel-motion-${motionPlacement}`),
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      motionDeadline: 500
    });
    const panelRef = usePanelRef();
    const [zIndex, contextZIndex] = useZIndex("Drawer", rest.zIndex);
    const {
      classNames: propClassNames = {},
      styles: propStyles = {}
    } = rest;
    const {
      classNames: contextClassNames = {},
      styles: contextStyles = {}
    } = drawer || {};
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(ContextIsolator, {
      form: true,
      space: true
    }, /* @__PURE__ */ React__namespace.createElement(zIndexContext.Provider, {
      value: contextZIndex
    }, /* @__PURE__ */ React__namespace.createElement(Drawer$1, Object.assign({
      prefixCls,
      onClose,
      maskMotion,
      motion: panelMotion
    }, rest, {
      classNames: {
        mask: classNames(propClassNames.mask, contextClassNames.mask),
        content: classNames(propClassNames.content, contextClassNames.content),
        wrapper: classNames(propClassNames.wrapper, contextClassNames.wrapper)
      },
      styles: {
        mask: Object.assign(Object.assign(Object.assign({}, propStyles.mask), maskStyle), contextStyles.mask),
        content: Object.assign(Object.assign(Object.assign({}, propStyles.content), drawerStyle), contextStyles.content),
        wrapper: Object.assign(Object.assign(Object.assign({}, propStyles.wrapper), contentWrapperStyle), contextStyles.wrapper)
      },
      open: open !== null && open !== void 0 ? open : visible,
      mask,
      push,
      width: mergedWidth,
      height: mergedHeight,
      style: Object.assign(Object.assign({}, drawer === null || drawer === void 0 ? void 0 : drawer.style), style2),
      className: classNames(drawer === null || drawer === void 0 ? void 0 : drawer.className, className),
      rootClassName: drawerClassName,
      getContainer: getContainer2,
      afterOpenChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
      panelRef,
      zIndex
    }), /* @__PURE__ */ React__namespace.createElement(DrawerPanel, Object.assign({
      prefixCls
    }, rest, {
      onClose
    }))))));
  };
  const PurePanel$1 = (props) => {
    const {
      prefixCls: customizePrefixCls,
      style: style2,
      className,
      placement = "right"
    } = props, restProps = __rest$5(props, ["prefixCls", "style", "className", "placement"]);
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("drawer", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls);
    const cls = classNames(prefixCls, `${prefixCls}-pure`, `${prefixCls}-${placement}`, hashId, cssVarCls, className);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls,
      style: style2
    }, /* @__PURE__ */ React__namespace.createElement(DrawerPanel, Object.assign({
      prefixCls
    }, restProps))));
  };
  Drawer._InternalPanelDoNotUseOrYouWillBeFired = PurePanel$1;
  function isPresetSize(size) {
    return ["small", "middle", "large"].includes(size);
  }
  function isValidGapNumber(size) {
    if (!size) {
      return false;
    }
    return typeof size === "number" && !Number.isNaN(size);
  }
  const SpaceContext = /* @__PURE__ */ React.createContext({
    latestIndex: 0
  });
  const SpaceContextProvider = SpaceContext.Provider;
  const Item = (_ref) => {
    let {
      className,
      index: index2,
      children,
      split,
      style: style2
    } = _ref;
    const {
      latestIndex
    } = React__namespace.useContext(SpaceContext);
    if (children === null || children === void 0) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("div", {
      className,
      style: style2
    }, children), index2 < latestIndex && split && /* @__PURE__ */ React__namespace.createElement("span", {
      className: `${className}-split`
    }, split));
  };
  var __rest$4 = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const InternalSpace = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    var _a, _b, _c;
    const {
      getPrefixCls,
      space,
      direction: directionConfig
    } = React__namespace.useContext(ConfigContext);
    const {
      size = (_a = space === null || space === void 0 ? void 0 : space.size) !== null && _a !== void 0 ? _a : "small",
      align,
      className,
      rootClassName,
      children,
      direction = "horizontal",
      prefixCls: customizePrefixCls,
      split,
      style: style2,
      wrap = false,
      classNames: customClassNames,
      styles
    } = props, otherProps = __rest$4(props, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]);
    const [horizontalSize, verticalSize] = Array.isArray(size) ? size : [size, size];
    const isPresetVerticalSize = isPresetSize(verticalSize);
    const isPresetHorizontalSize = isPresetSize(horizontalSize);
    const isValidVerticalSize = isValidGapNumber(verticalSize);
    const isValidHorizontalSize = isValidGapNumber(horizontalSize);
    const childNodes = toArray$2(children, {
      keepEmpty: true
    });
    const mergedAlign = align === void 0 && direction === "horizontal" ? "center" : align;
    const prefixCls = getPrefixCls("space", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$9(prefixCls);
    const cls = classNames(prefixCls, space === null || space === void 0 ? void 0 : space.className, hashId, `${prefixCls}-${direction}`, {
      [`${prefixCls}-rtl`]: directionConfig === "rtl",
      [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
      [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
      [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize
    }, className, rootClassName, cssVarCls);
    const itemClassName = classNames(`${prefixCls}-item`, (_b = customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.item) !== null && _b !== void 0 ? _b : (_c = space === null || space === void 0 ? void 0 : space.classNames) === null || _c === void 0 ? void 0 : _c.item);
    let latestIndex = 0;
    const nodes = childNodes.map((child, i) => {
      var _a2, _b2;
      if (child !== null && child !== void 0) {
        latestIndex = i;
      }
      const key = (child === null || child === void 0 ? void 0 : child.key) || `${itemClassName}-${i}`;
      return /* @__PURE__ */ React__namespace.createElement(Item, {
        className: itemClassName,
        key,
        index: i,
        split,
        style: (_a2 = styles === null || styles === void 0 ? void 0 : styles.item) !== null && _a2 !== void 0 ? _a2 : (_b2 = space === null || space === void 0 ? void 0 : space.styles) === null || _b2 === void 0 ? void 0 : _b2.item
      }, child);
    });
    const spaceContext = React__namespace.useMemo(() => ({
      latestIndex
    }), [latestIndex]);
    if (childNodes.length === 0) {
      return null;
    }
    const gapStyle = {};
    if (wrap) {
      gapStyle.flexWrap = "wrap";
    }
    if (!isPresetHorizontalSize && isValidHorizontalSize) {
      gapStyle.columnGap = horizontalSize;
    }
    if (!isPresetVerticalSize && isValidVerticalSize) {
      gapStyle.rowGap = verticalSize;
    }
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", Object.assign({
      ref,
      className: cls,
      style: Object.assign(Object.assign(Object.assign({}, gapStyle), space === null || space === void 0 ? void 0 : space.style), style2)
    }, otherProps), /* @__PURE__ */ React__namespace.createElement(SpaceContextProvider, {
      value: spaceContext
    }, nodes)));
  });
  const Space = InternalSpace;
  Space.Compact = Compact;
  const FloatButtonGroupContext = /* @__PURE__ */ React.createContext(void 0);
  const {
    Provider: FloatButtonGroupProvider
  } = FloatButtonGroupContext;
  var FileTextOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" } }] }, "name": "file-text", "theme": "outlined" };
  var FileTextOutlined = function FileTextOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: FileTextOutlined$1
    }));
  };
  var RefIcon = /* @__PURE__ */ React__namespace.forwardRef(FileTextOutlined);
  const FloatButtonContent = (props) => {
    const {
      icon,
      description,
      prefixCls,
      className
    } = props;
    const defaultElement = /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-icon`
    }, /* @__PURE__ */ React.createElement(RefIcon, null));
    return /* @__PURE__ */ React.createElement("div", {
      onClick: props.onClick,
      onFocus: props.onFocus,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      className: classNames(className, `${prefixCls}-content`)
    }, icon || description ? /* @__PURE__ */ React.createElement(React.Fragment, null, icon && /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-icon`
    }, icon), description && /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-description`
    }, description)) : defaultElement);
  };
  const Content = /* @__PURE__ */ React.memo(FloatButtonContent);
  const getOffset = (radius) => {
    if (radius === 0) {
      return 0;
    }
    return radius - Math.sqrt(Math.pow(radius, 2) / 2);
  };
  const floatButtonGroupMotion = (token2) => {
    const {
      componentCls,
      floatButtonSize,
      motionDurationSlow,
      motionEaseInOutCirc,
      calc
    } = token2;
    const moveTopIn = new Keyframe("antFloatButtonMoveTopIn", {
      "0%": {
        transform: `translate3d(0, ${unit$1(floatButtonSize)}, 0)`,
        transformOrigin: "0 0",
        opacity: 0
      },
      "100%": {
        transform: "translate3d(0, 0, 0)",
        transformOrigin: "0 0",
        opacity: 1
      }
    });
    const moveTopOut = new Keyframe("antFloatButtonMoveTopOut", {
      "0%": {
        transform: "translate3d(0, 0, 0)",
        transformOrigin: "0 0",
        opacity: 1
      },
      "100%": {
        transform: `translate3d(0, ${unit$1(floatButtonSize)}, 0)`,
        transformOrigin: "0 0",
        opacity: 0
      }
    });
    const moveRightIn = new Keyframe("antFloatButtonMoveRightIn", {
      "0%": {
        transform: `translate3d(${calc(floatButtonSize).mul(-1).equal()}, 0, 0)`,
        transformOrigin: "0 0",
        opacity: 0
      },
      "100%": {
        transform: "translate3d(0, 0, 0)",
        transformOrigin: "0 0",
        opacity: 1
      }
    });
    const moveRightOut = new Keyframe("antFloatButtonMoveRightOut", {
      "0%": {
        transform: "translate3d(0, 0, 0)",
        transformOrigin: "0 0",
        opacity: 1
      },
      "100%": {
        transform: `translate3d(${calc(floatButtonSize).mul(-1).equal()}, 0, 0)`,
        transformOrigin: "0 0",
        opacity: 0
      }
    });
    const moveBottomIn = new Keyframe("antFloatButtonMoveBottomIn", {
      "0%": {
        transform: `translate3d(0, ${calc(floatButtonSize).mul(-1).equal()}, 0)`,
        transformOrigin: "0 0",
        opacity: 0
      },
      "100%": {
        transform: "translate3d(0, 0, 0)",
        transformOrigin: "0 0",
        opacity: 1
      }
    });
    const moveBottomOut = new Keyframe("antFloatButtonMoveBottomOut", {
      "0%": {
        transform: "translate3d(0, 0, 0)",
        transformOrigin: "0 0",
        opacity: 1
      },
      "100%": {
        transform: `translate3d(0, ${calc(floatButtonSize).mul(-1).equal()}, 0)`,
        transformOrigin: "0 0",
        opacity: 0
      }
    });
    const moveLeftIn = new Keyframe("antFloatButtonMoveLeftIn", {
      "0%": {
        transform: `translate3d(${unit$1(floatButtonSize)}, 0, 0)`,
        transformOrigin: "0 0",
        opacity: 0
      },
      "100%": {
        transform: "translate3d(0, 0, 0)",
        transformOrigin: "0 0",
        opacity: 1
      }
    });
    const moveLeftOut = new Keyframe("antFloatButtonMoveLeftOut", {
      "0%": {
        transform: "translate3d(0, 0, 0)",
        transformOrigin: "0 0",
        opacity: 1
      },
      "100%": {
        transform: `translate3d(${unit$1(floatButtonSize)}, 0, 0)`,
        transformOrigin: "0 0",
        opacity: 0
      }
    });
    const groupPrefixCls = `${componentCls}-group`;
    return [{
      [groupPrefixCls]: {
        [`&${groupPrefixCls}-top ${groupPrefixCls}-wrap`]: initMotion(`${groupPrefixCls}-wrap`, moveTopIn, moveTopOut, motionDurationSlow, true),
        [`&${groupPrefixCls}-bottom ${groupPrefixCls}-wrap`]: initMotion(`${groupPrefixCls}-wrap`, moveBottomIn, moveBottomOut, motionDurationSlow, true),
        [`&${groupPrefixCls}-left ${groupPrefixCls}-wrap`]: initMotion(`${groupPrefixCls}-wrap`, moveLeftIn, moveLeftOut, motionDurationSlow, true),
        [`&${groupPrefixCls}-right ${groupPrefixCls}-wrap`]: initMotion(`${groupPrefixCls}-wrap`, moveRightIn, moveRightOut, motionDurationSlow, true)
      }
    }, {
      [`${groupPrefixCls}-wrap`]: {
        [`&${groupPrefixCls}-wrap-enter, &${groupPrefixCls}-wrap-appear`]: {
          opacity: 0,
          animationTimingFunction: motionEaseInOutCirc
        },
        [`&${groupPrefixCls}-wrap-leave`]: {
          opacity: 1,
          animationTimingFunction: motionEaseInOutCirc
        }
      }
    }];
  };
  const floatButtonGroupStyle = (token2) => {
    const {
      antCls,
      componentCls,
      floatButtonSize,
      margin,
      borderRadiusLG,
      borderRadiusSM,
      badgeOffset,
      floatButtonBodyPadding,
      zIndexPopupBase,
      calc
    } = token2;
    const groupPrefixCls = `${componentCls}-group`;
    return {
      [groupPrefixCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
        zIndex: zIndexPopupBase,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        position: "fixed",
        height: "auto",
        boxShadow: "none",
        minWidth: floatButtonSize,
        minHeight: floatButtonSize,
        insetInlineEnd: token2.floatButtonInsetInlineEnd,
        bottom: token2.floatButtonInsetBlockEnd,
        borderRadius: borderRadiusLG,
        [`${groupPrefixCls}-wrap`]: {
          zIndex: -1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute"
        },
        [`&${groupPrefixCls}-rtl`]: {
          direction: "rtl"
        },
        [componentCls]: {
          position: "static"
        }
      }),
      [`${groupPrefixCls}-top > ${groupPrefixCls}-wrap`]: {
        flexDirection: "column",
        top: "auto",
        bottom: calc(floatButtonSize).add(margin).equal(),
        "&::after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: margin,
          bottom: calc(margin).mul(-1).equal()
        }
      },
      [`${groupPrefixCls}-bottom > ${groupPrefixCls}-wrap`]: {
        flexDirection: "column",
        top: calc(floatButtonSize).add(margin).equal(),
        bottom: "auto",
        "&::after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: margin,
          top: calc(margin).mul(-1).equal()
        }
      },
      [`${groupPrefixCls}-right > ${groupPrefixCls}-wrap`]: {
        flexDirection: "row",
        left: {
          _skip_check_: true,
          value: calc(floatButtonSize).add(margin).equal()
        },
        right: {
          _skip_check_: true,
          value: "auto"
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: margin,
          height: "100%",
          left: {
            _skip_check_: true,
            value: calc(margin).mul(-1).equal()
          }
        }
      },
      [`${groupPrefixCls}-left > ${groupPrefixCls}-wrap`]: {
        flexDirection: "row",
        left: {
          _skip_check_: true,
          value: "auto"
        },
        right: {
          _skip_check_: true,
          value: calc(floatButtonSize).add(margin).equal()
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: margin,
          height: "100%",
          right: {
            _skip_check_: true,
            value: calc(margin).mul(-1).equal()
          }
        }
      },
      [`${groupPrefixCls}-circle`]: {
        gap: margin,
        [`${groupPrefixCls}-wrap`]: {
          gap: margin
        }
      },
      [`${groupPrefixCls}-square`]: {
        [`${componentCls}-square`]: {
          padding: 0,
          borderRadius: 0,
          [`&${groupPrefixCls}-trigger`]: {
            borderRadius: borderRadiusLG
          },
          "&:first-child": {
            borderStartStartRadius: borderRadiusLG,
            borderStartEndRadius: borderRadiusLG
          },
          "&:last-child": {
            borderEndStartRadius: borderRadiusLG,
            borderEndEndRadius: borderRadiusLG
          },
          "&:not(:last-child)": {
            borderBottom: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorSplit}`
          },
          [`${antCls}-badge`]: {
            [`${antCls}-badge-count`]: {
              top: calc(calc(floatButtonBodyPadding).add(badgeOffset)).mul(-1).equal(),
              insetInlineEnd: calc(calc(floatButtonBodyPadding).add(badgeOffset)).mul(-1).equal()
            }
          }
        },
        [`${groupPrefixCls}-wrap`]: {
          borderRadius: borderRadiusLG,
          boxShadow: token2.boxShadowSecondary,
          [`${componentCls}-square`]: {
            boxShadow: "none",
            borderRadius: 0,
            padding: floatButtonBodyPadding,
            [`${componentCls}-body`]: {
              width: token2.floatButtonBodySize,
              height: token2.floatButtonBodySize,
              borderRadius: borderRadiusSM
            }
          }
        }
      },
      [`${groupPrefixCls}-top > ${groupPrefixCls}-wrap, ${groupPrefixCls}-bottom > ${groupPrefixCls}-wrap`]: {
        [`> ${componentCls}-square`]: {
          "&:first-child": {
            borderStartStartRadius: borderRadiusLG,
            borderStartEndRadius: borderRadiusLG
          },
          "&:last-child": {
            borderEndStartRadius: borderRadiusLG,
            borderEndEndRadius: borderRadiusLG
          },
          "&:not(:last-child)": {
            borderBottom: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorSplit}`
          }
        }
      },
      [`${groupPrefixCls}-left > ${groupPrefixCls}-wrap, ${groupPrefixCls}-right > ${groupPrefixCls}-wrap`]: {
        [`> ${componentCls}-square`]: {
          "&:first-child": {
            borderStartStartRadius: borderRadiusLG,
            borderEndStartRadius: borderRadiusLG
          },
          "&:last-child": {
            borderStartEndRadius: borderRadiusLG,
            borderEndEndRadius: borderRadiusLG
          },
          "&:not(:last-child)": {
            borderInlineEnd: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorSplit}`
          }
        }
      },
      [`${groupPrefixCls}-circle-shadow`]: {
        boxShadow: "none"
      },
      [`${groupPrefixCls}-square-shadow`]: {
        boxShadow: token2.boxShadowSecondary,
        [`${componentCls}-square`]: {
          boxShadow: "none",
          padding: floatButtonBodyPadding,
          [`${componentCls}-body`]: {
            width: token2.floatButtonBodySize,
            height: token2.floatButtonBodySize,
            borderRadius: borderRadiusSM
          }
        }
      }
    };
  };
  const sharedFloatButtonStyle = (token2) => {
    const {
      antCls,
      componentCls,
      floatButtonBodyPadding,
      floatButtonIconSize,
      floatButtonSize,
      borderRadiusLG,
      badgeOffset,
      dotOffsetInSquare,
      dotOffsetInCircle,
      zIndexPopupBase,
      calc
    } = token2;
    return {
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
        border: "none",
        position: "fixed",
        cursor: "pointer",
        zIndex: zIndexPopupBase,
        // Do not remove the 'display: block' here.
        // Deleting it will cause marginBottom to become ineffective.
        // Ref: https://github.com/ant-design/ant-design/issues/44700
        display: "block",
        width: floatButtonSize,
        height: floatButtonSize,
        insetInlineEnd: token2.floatButtonInsetInlineEnd,
        bottom: token2.floatButtonInsetBlockEnd,
        boxShadow: token2.boxShadowSecondary,
        // Pure Panel
        "&-pure": {
          position: "relative",
          inset: "auto"
        },
        "&:empty": {
          display: "none"
        },
        [`${antCls}-badge`]: {
          width: "100%",
          height: "100%",
          [`${antCls}-badge-count`]: {
            transform: "translate(0, 0)",
            transformOrigin: "center",
            top: calc(badgeOffset).mul(-1).equal(),
            insetInlineEnd: calc(badgeOffset).mul(-1).equal()
          }
        },
        [`${componentCls}-body`]: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: `all ${token2.motionDurationMid}`,
          [`${componentCls}-content`]: {
            overflow: "hidden",
            textAlign: "center",
            minHeight: floatButtonSize,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: `${unit$1(calc(floatButtonBodyPadding).div(2).equal())} ${unit$1(floatButtonBodyPadding)}`,
            [`${componentCls}-icon`]: {
              textAlign: "center",
              margin: "auto",
              width: floatButtonIconSize,
              fontSize: floatButtonIconSize,
              lineHeight: 1
            }
          }
        }
      }),
      [`${componentCls}-rtl`]: {
        direction: "rtl"
      },
      [`${componentCls}-circle`]: {
        height: floatButtonSize,
        borderRadius: "50%",
        [`${antCls}-badge`]: {
          [`${antCls}-badge-dot`]: {
            top: dotOffsetInCircle,
            insetInlineEnd: dotOffsetInCircle
          }
        },
        [`${componentCls}-body`]: {
          borderRadius: "50%"
        }
      },
      [`${componentCls}-square`]: {
        height: "auto",
        minHeight: floatButtonSize,
        borderRadius: borderRadiusLG,
        [`${antCls}-badge`]: {
          [`${antCls}-badge-dot`]: {
            top: dotOffsetInSquare,
            insetInlineEnd: dotOffsetInSquare
          }
        },
        [`${componentCls}-body`]: {
          height: "auto",
          borderRadius: borderRadiusLG
        }
      },
      [`${componentCls}-default`]: {
        backgroundColor: token2.floatButtonBackgroundColor,
        transition: `background-color ${token2.motionDurationMid}`,
        [`${componentCls}-body`]: {
          backgroundColor: token2.floatButtonBackgroundColor,
          transition: `background-color ${token2.motionDurationMid}`,
          "&:hover": {
            backgroundColor: token2.colorFillContent
          },
          [`${componentCls}-content`]: {
            [`${componentCls}-icon`]: {
              color: token2.colorText
            },
            [`${componentCls}-description`]: {
              display: "flex",
              alignItems: "center",
              lineHeight: unit$1(token2.fontSizeLG),
              color: token2.colorText,
              fontSize: token2.fontSizeSM
            }
          }
        }
      },
      [`${componentCls}-primary`]: {
        backgroundColor: token2.colorPrimary,
        [`${componentCls}-body`]: {
          backgroundColor: token2.colorPrimary,
          transition: `background-color ${token2.motionDurationMid}`,
          "&:hover": {
            backgroundColor: token2.colorPrimaryHover
          },
          [`${componentCls}-content`]: {
            [`${componentCls}-icon`]: {
              color: token2.colorTextLightSolid
            },
            [`${componentCls}-description`]: {
              display: "flex",
              alignItems: "center",
              lineHeight: unit$1(token2.fontSizeLG),
              color: token2.colorTextLightSolid,
              fontSize: token2.fontSizeSM
            }
          }
        }
      }
    };
  };
  const prepareComponentToken = (token2) => ({
    dotOffsetInCircle: getOffset(token2.controlHeightLG / 2),
    dotOffsetInSquare: getOffset(token2.borderRadiusLG)
  });
  const useStyle = genStyleHooks("FloatButton", (token2) => {
    const {
      colorTextLightSolid,
      colorBgElevated,
      controlHeightLG,
      marginXXL,
      marginLG,
      fontSize,
      fontSizeIcon,
      controlItemBgHover,
      paddingXXS,
      calc
    } = token2;
    const floatButtonToken = merge(token2, {
      floatButtonBackgroundColor: colorBgElevated,
      floatButtonColor: colorTextLightSolid,
      floatButtonHoverBackgroundColor: controlItemBgHover,
      floatButtonFontSize: fontSize,
      floatButtonIconSize: calc(fontSizeIcon).mul(1.5).equal(),
      floatButtonSize: controlHeightLG,
      floatButtonInsetBlockEnd: marginXXL,
      floatButtonInsetInlineEnd: marginLG,
      floatButtonBodySize: calc(controlHeightLG).sub(calc(paddingXXS).mul(2)).equal(),
      // 这里的 paddingXXS 是简写，完整逻辑是 (controlHeightLG - (controlHeightLG - paddingXXS * 2)) / 2,
      floatButtonBodyPadding: paddingXXS,
      badgeOffset: calc(paddingXXS).mul(1.5).equal()
    });
    return [floatButtonGroupStyle(floatButtonToken), sharedFloatButtonStyle(floatButtonToken), initFadeMotion(token2), floatButtonGroupMotion(floatButtonToken)];
  }, prepareComponentToken);
  var __rest$3 = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const floatButtonPrefixCls = "float-btn";
  const InternalFloatButton = /* @__PURE__ */ React.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style: style2,
      type: type4 = "default",
      shape = "circle",
      icon,
      description,
      tooltip,
      htmlType = "button",
      badge = {}
    } = props, restProps = __rest$3(props, ["prefixCls", "className", "rootClassName", "style", "type", "shape", "icon", "description", "tooltip", "htmlType", "badge"]);
    const {
      getPrefixCls,
      direction
    } = React.useContext(ConfigContext);
    const groupShape = React.useContext(FloatButtonGroupContext);
    const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);
    const mergedShape = groupShape || shape;
    const classString = classNames(hashId, cssVarCls, rootCls, prefixCls, className, rootClassName, `${prefixCls}-${type4}`, `${prefixCls}-${mergedShape}`, {
      [`${prefixCls}-rtl`]: direction === "rtl"
    });
    const [zIndex] = useZIndex("FloatButton", style2 === null || style2 === void 0 ? void 0 : style2.zIndex);
    const mergedStyle = Object.assign(Object.assign({}, style2), {
      zIndex
    });
    const badgeProps = omit(badge, ["title", "children", "status", "text"]);
    const contentProps = React.useMemo(() => ({
      prefixCls,
      description,
      icon,
      type: type4
    }), [prefixCls, description, icon, type4]);
    let buttonNode = /* @__PURE__ */ React.createElement("div", {
      className: `${prefixCls}-body`
    }, /* @__PURE__ */ React.createElement(Content, Object.assign({}, contentProps)));
    if ("badge" in props) {
      buttonNode = /* @__PURE__ */ React.createElement(Badge, Object.assign({}, badgeProps), buttonNode);
    }
    if ("tooltip" in props) {
      buttonNode = /* @__PURE__ */ React.createElement(Tooltip2, {
        title: tooltip,
        placement: direction === "rtl" ? "right" : "left"
      }, buttonNode);
    }
    return wrapCSSVar(props.href ? /* @__PURE__ */ React.createElement("a", Object.assign({
      ref
    }, restProps, {
      className: classString,
      style: mergedStyle
    }), buttonNode) : /* @__PURE__ */ React.createElement("button", Object.assign({
      ref
    }, restProps, {
      className: classString,
      style: mergedStyle,
      type: htmlType
    }), buttonNode));
  });
  const FloatButton = InternalFloatButton;
  var __rest$2 = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const BackTop = /* @__PURE__ */ React.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      type: type4 = "default",
      shape = "circle",
      visibilityHeight = 400,
      icon = /* @__PURE__ */ React.createElement(RefIcon$1, null),
      target,
      onClick,
      duration = 450
    } = props, restProps = __rest$2(props, ["prefixCls", "className", "type", "shape", "visibilityHeight", "icon", "target", "onClick", "duration"]);
    const [visible, setVisible] = React.useState(visibilityHeight === 0);
    const internalRef = React.useRef(null);
    React.useImperativeHandle(ref, () => ({
      nativeElement: internalRef.current
    }));
    const getDefaultTarget = () => {
      var _a;
      return ((_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) || window;
    };
    const handleScroll = throttleByAnimationFrame((e2) => {
      const scrollTop = getScroll(e2.target);
      setVisible(scrollTop >= visibilityHeight);
    });
    React.useEffect(() => {
      const getTarget = target || getDefaultTarget;
      const container = getTarget();
      handleScroll({
        target: container
      });
      container === null || container === void 0 ? void 0 : container.addEventListener("scroll", handleScroll);
      return () => {
        handleScroll.cancel();
        container === null || container === void 0 ? void 0 : container.removeEventListener("scroll", handleScroll);
      };
    }, [target]);
    const scrollToTop = (e2) => {
      scrollTo(0, {
        getContainer: target || getDefaultTarget,
        duration
      });
      onClick === null || onClick === void 0 ? void 0 : onClick(e2);
    };
    const {
      getPrefixCls
    } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const groupShape = React.useContext(FloatButtonGroupContext);
    const mergedShape = groupShape || shape;
    const contentProps = Object.assign({
      prefixCls,
      icon,
      type: type4,
      shape: mergedShape
    }, restProps);
    return /* @__PURE__ */ React.createElement(CSSMotion, {
      visible,
      motionName: `${rootPrefixCls}-fade`
    }, (_ref, setRef) => {
      let {
        className: motionClassName
      } = _ref;
      return /* @__PURE__ */ React.createElement(FloatButton, Object.assign({
        ref: composeRef(internalRef, setRef)
      }, contentProps, {
        onClick: scrollToTop,
        className: classNames(className, motionClassName)
      }));
    });
  });
  var __rest$1 = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const FloatButtonGroup = (props) => {
    var _a;
    const {
      prefixCls: customizePrefixCls,
      className,
      style: style2,
      shape = "circle",
      type: type4 = "default",
      placement = "top",
      icon = /* @__PURE__ */ React.createElement(RefIcon, null),
      closeIcon,
      description,
      trigger,
      children,
      onOpenChange,
      open: customOpen,
      onClick: onTriggerButtonClick
    } = props, floatButtonProps = __rest$1(props, ["prefixCls", "className", "style", "shape", "type", "placement", "icon", "closeIcon", "description", "trigger", "children", "onOpenChange", "open", "onClick"]);
    const {
      direction,
      getPrefixCls,
      floatButtonGroup
    } = React.useContext(ConfigContext);
    const mergedCloseIcon = (_a = closeIcon !== null && closeIcon !== void 0 ? closeIcon : floatButtonGroup === null || floatButtonGroup === void 0 ? void 0 : floatButtonGroup.closeIcon) !== null && _a !== void 0 ? _a : /* @__PURE__ */ React.createElement(RefIcon$4, null);
    const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
    const rootCls = useCSSVarCls(prefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);
    const groupPrefixCls = `${prefixCls}-group`;
    const isMenuMode = trigger && ["click", "hover"].includes(trigger);
    const isValidPlacement = placement && ["top", "left", "right", "bottom"].includes(placement);
    const groupCls = classNames(groupPrefixCls, hashId, cssVarCls, rootCls, className, {
      [`${groupPrefixCls}-rtl`]: direction === "rtl",
      [`${groupPrefixCls}-${shape}`]: shape,
      [`${groupPrefixCls}-${shape}-shadow`]: !isMenuMode,
      [`${groupPrefixCls}-${placement}`]: isMenuMode && isValidPlacement
      // 只有菜单模式才支持弹出方向
    });
    const [zIndex] = useZIndex("FloatButton", style2 === null || style2 === void 0 ? void 0 : style2.zIndex);
    const mergedStyle = Object.assign(Object.assign({}, style2), {
      zIndex
    });
    const wrapperCls = classNames(hashId, `${groupPrefixCls}-wrap`);
    const [open, setOpen] = useMergedState(false, {
      value: customOpen
    });
    const floatButtonGroupRef = React.useRef(null);
    const hoverTrigger = trigger === "hover";
    const clickTrigger = trigger === "click";
    const triggerOpen = useEvent((nextOpen) => {
      if (open !== nextOpen) {
        setOpen(nextOpen);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen);
      }
    });
    const onMouseEnter = () => {
      if (hoverTrigger) {
        triggerOpen(true);
      }
    };
    const onMouseLeave = () => {
      if (hoverTrigger) {
        triggerOpen(false);
      }
    };
    const onInternalTriggerButtonClick = (e2) => {
      if (clickTrigger) {
        triggerOpen(!open);
      }
      onTriggerButtonClick === null || onTriggerButtonClick === void 0 ? void 0 : onTriggerButtonClick(e2);
    };
    React.useEffect(() => {
      if (clickTrigger) {
        const onDocClick = (e2) => {
          var _a2;
          if ((_a2 = floatButtonGroupRef.current) === null || _a2 === void 0 ? void 0 : _a2.contains(e2.target)) {
            return;
          }
          triggerOpen(false);
        };
        document.addEventListener("click", onDocClick, {
          capture: true
        });
        return () => document.removeEventListener("click", onDocClick, {
          capture: true
        });
      }
    }, [clickTrigger]);
    return wrapCSSVar(/* @__PURE__ */ React.createElement(FloatButtonGroupProvider, {
      value: shape
    }, /* @__PURE__ */ React.createElement("div", {
      ref: floatButtonGroupRef,
      className: groupCls,
      style: mergedStyle,
      // Hover trigger
      onMouseEnter,
      onMouseLeave
    }, isMenuMode ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CSSMotion, {
      visible: open,
      motionName: `${groupPrefixCls}-wrap`
    }, (_ref) => {
      let {
        className: motionClassName
      } = _ref;
      return /* @__PURE__ */ React.createElement("div", {
        className: classNames(motionClassName, wrapperCls)
      }, children);
    }), /* @__PURE__ */ React.createElement(FloatButton, Object.assign({
      type: type4,
      icon: open ? mergedCloseIcon : icon,
      description,
      "aria-label": props["aria-label"],
      className: `${groupPrefixCls}-trigger`,
      onClick: onInternalTriggerButtonClick
    }, floatButtonProps))) : children)));
  };
  var __rest = function(s, e2) {
    var t2 = {};
    for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0) t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i])) t2[p2[i]] = s[p2[i]];
    }
    return t2;
  };
  const PureFloatButton = (_a) => {
    var {
      backTop
    } = _a, props = __rest(_a, ["backTop"]);
    return backTop ? /* @__PURE__ */ React__namespace.createElement(BackTop, Object.assign({}, props, {
      visibilityHeight: 0
    })) : /* @__PURE__ */ React__namespace.createElement(FloatButton, Object.assign({}, props));
  };
  const PurePanel = (_a) => {
    var {
      className,
      items
    } = _a, props = __rest(_a, ["className", "items"]);
    const {
      prefixCls: customizePrefixCls
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
    const pureCls = `${prefixCls}-pure`;
    if (items) {
      return /* @__PURE__ */ React__namespace.createElement(FloatButtonGroup, Object.assign({
        className: classNames(className, pureCls)
      }, props), items.map((item, index2) => /* @__PURE__ */ React__namespace.createElement(PureFloatButton, Object.assign({
        key: index2
      }, item))));
    }
    return /* @__PURE__ */ React__namespace.createElement(PureFloatButton, Object.assign({
      className: classNames(className, pureCls)
    }, props));
  };
  FloatButton.BackTop = BackTop;
  FloatButton.Group = FloatButtonGroup;
  FloatButton._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  Collapse$1.Item;
  const DataForm = ({ data, onChange }) => {
    const [selected, setSelected] = React.useState([]);
    const handleCheckBoxChange = (e2) => {
      console.log("checked = ", e2.target);
      const newSelected = e2.target.checked ? [...selected, e2.target.value] : selected.filter((i) => i !== e2.target.value);
      setSelected(newSelected);
      onChange(newSelected);
    };
    if (data.length === 0) return null;
    const optionsAs = Array.from(data).filter((i) => i.type === "AS").map((c2) => {
      return {
        label: c2.title,
        value: c2.id
      };
    });
    const optionsIs = Array.from(data).filter((i) => i.type === "IS").map((c2) => {
      return {
        label: c2.title,
        value: c2.id
      };
    });
    const optionsSs = Array.from(data).filter((i) => i.type === "SS").map((c2) => {
      return {
        label: c2.title,
        value: c2.id
      };
    });
    const optionsOthers = Array.from(data).filter((i) => i.type === "OTHERS").map((c2) => {
      return {
        label: c2.title,
        value: c2.id
      };
    });
    const items = [
      {
        key: "AS",
        label: "AS",
        children: optionsAs.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { value: o.value, onChange: handleCheckBoxChange, children: o.label }, o.value))
      },
      {
        key: "IS",
        label: "IS",
        children: optionsIs.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { value: o.value, onChange: handleCheckBoxChange, children: o.label }, o.value))
      },
      {
        key: "SS",
        label: "SS",
        children: optionsSs.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { value: o.value, onChange: handleCheckBoxChange, children: o.label }, o.value))
      },
      {
        key: "OTHERS",
        label: "OTHERS",
        children: optionsOthers.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { value: o.value, onChange: handleCheckBoxChange, children: o.label }, o.value))
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse$1, { items });
  };
  const App = () => {
    const [visible, setVisible] = React.useState(false);
    const [data, setData] = React.useState({});
    const [selected, setSelected] = React.useState([]);
    const [textareaId, setTextareaId] = React.useState("");
    React.useEffect(() => {
      const handleFocus = (e2) => {
        if (e2.target.tagName.toLowerCase() === "textarea") {
          setTextareaId(e2.target.id);
        }
      };
      document.addEventListener("focusout", handleFocus);
      return () => {
        document.removeEventListener("focusout", handleFocus);
      };
    }, []);
    const handleClick = () => {
      setVisible(false);
      const textArea = document.getElementById(textareaId);
      if (textArea && selected.length > 0) {
        const selectedData = selected.map((id) => {
          const item = data.find((d2) => d2.id === id);
          return item ? item.cn : "";
        }).join("\n");
        textArea.value = selectedData;
      }
    };
    const handleChange = (s) => {
      console.log("app", s);
      setSelected(s.sort());
    };
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://raw.githubusercontent.com/ccswz/userscript/master/workLog.json");
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatButton, { type: "primary", onClick: () => {
        setVisible(true);
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Drawer,
        {
          width: 332,
          title: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "日志模板 " }),
          open: visible,
          getContainer: false,
          onClose: () => {
            setVisible(false);
          },
          extra: /* @__PURE__ */ jsxRuntimeExports.jsx(Space, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "primary", onClick: handleClick, children: "插入日志" }) }),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataForm, { data, onChange: handleChange })
        }
      )
    ] });
  };
  client.createRoot(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  ).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );

})(React, ReactDOM);