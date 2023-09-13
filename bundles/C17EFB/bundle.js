(function () {
	'use strict';

	function _mergeNamespaces(n, m) {
		m.forEach(function (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default' && !(k in n)) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		});
		return Object.freeze(n);
	}

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }

	  return Object(val);
	}

	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    } // Detect buggy property enumeration order in older V8 versions.
	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

	    test1[5] = 'de';

	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test2 = {};

	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }

	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });

	    if (order2.join('') !== '0123456789') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });

	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }

	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;

	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }

	    if (getOwnPropertySymbols$1) {
	      symbols = getOwnPropertySymbols$1(from);

	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }

	  return to;
	};

	var react_production_min = createCommonjsModule(function (module, exports) {

	  var n = 60103,
	      p = 60106;
	  exports.Fragment = 60107;
	  exports.StrictMode = 60108;
	  exports.Profiler = 60114;
	  var q = 60109,
	      r = 60110,
	      t = 60112;
	  exports.Suspense = 60113;
	  var u = 60115,
	      v = 60116;

	  if ("function" === typeof Symbol && Symbol.for) {
	    var w = Symbol.for;
	    n = w("react.element");
	    p = w("react.portal");
	    exports.Fragment = w("react.fragment");
	    exports.StrictMode = w("react.strict_mode");
	    exports.Profiler = w("react.profiler");
	    q = w("react.provider");
	    r = w("react.context");
	    t = w("react.forward_ref");
	    exports.Suspense = w("react.suspense");
	    u = w("react.memo");
	    v = w("react.lazy");
	  }

	  var x = "function" === typeof Symbol && Symbol.iterator;

	  function y(a) {
	    if (null === a || "object" !== typeof a) return null;
	    a = x && a[x] || a["@@iterator"];
	    return "function" === typeof a ? a : null;
	  }

	  function z(a) {
	    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

	    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	  }

	  var A = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	      B = {};

	  function C(a, b, c) {
	    this.props = a;
	    this.context = b;
	    this.refs = B;
	    this.updater = c || A;
	  }

	  C.prototype.isReactComponent = {};

	  C.prototype.setState = function (a, b) {
	    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
	    this.updater.enqueueSetState(this, a, b, "setState");
	  };

	  C.prototype.forceUpdate = function (a) {
	    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	  };

	  function D() {}

	  D.prototype = C.prototype;

	  function E(a, b, c) {
	    this.props = a;
	    this.context = b;
	    this.refs = B;
	    this.updater = c || A;
	  }

	  var F = E.prototype = new D();
	  F.constructor = E;
	  objectAssign(F, C.prototype);
	  F.isPureReactComponent = !0;
	  var G = {
	    current: null
	  },
	      H = Object.prototype.hasOwnProperty,
	      I = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };

	  function J(a, b, c) {
	    var e,
	        d = {},
	        k = null,
	        h = null;
	    if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
	    var g = arguments.length - 2;
	    if (1 === g) d.children = c;else if (1 < g) {
	      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];

	      d.children = f;
	    }
	    if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
	    return {
	      $$typeof: n,
	      type: a,
	      key: k,
	      ref: h,
	      props: d,
	      _owner: G.current
	    };
	  }

	  function K(a, b) {
	    return {
	      $$typeof: n,
	      type: a.type,
	      key: b,
	      ref: a.ref,
	      props: a.props,
	      _owner: a._owner
	    };
	  }

	  function L(a) {
	    return "object" === typeof a && null !== a && a.$$typeof === n;
	  }

	  function escape(a) {
	    var b = {
	      "=": "=0",
	      ":": "=2"
	    };
	    return "$" + a.replace(/[=:]/g, function (a) {
	      return b[a];
	    });
	  }

	  var M = /\/+/g;

	  function N(a, b) {
	    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	  }

	  function O(a, b, c, e, d) {
	    var k = typeof a;
	    if ("undefined" === k || "boolean" === k) a = null;
	    var h = !1;
	    if (null === a) h = !0;else switch (k) {
	      case "string":
	      case "number":
	        h = !0;
	        break;

	      case "object":
	        switch (a.$$typeof) {
	          case n:
	          case p:
	            h = !0;
	        }

	    }
	    if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
	      return a;
	    })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
	    h = 0;
	    e = "" === e ? "." : e + ":";
	    if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
	      k = a[g];
	      var f = e + N(k, g);
	      h += O(k, b, c, f, d);
	    } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
	    return h;
	  }

	  function P(a, b, c) {
	    if (null == a) return a;
	    var e = [],
	        d = 0;
	    O(a, e, "", "", function (a) {
	      return b.call(c, a, d++);
	    });
	    return e;
	  }

	  function Q(a) {
	    if (-1 === a._status) {
	      var b = a._result;
	      b = b();
	      a._status = 0;
	      a._result = b;
	      b.then(function (b) {
	        0 === a._status && (b = b.default, a._status = 1, a._result = b);
	      }, function (b) {
	        0 === a._status && (a._status = 2, a._result = b);
	      });
	    }

	    if (1 === a._status) return a._result;
	    throw a._result;
	  }

	  var R = {
	    current: null
	  };

	  function S() {
	    var a = R.current;
	    if (null === a) throw Error(z(321));
	    return a;
	  }

	  var T = {
	    ReactCurrentDispatcher: R,
	    ReactCurrentBatchConfig: {
	      transition: 0
	    },
	    ReactCurrentOwner: G,
	    IsSomeRendererActing: {
	      current: !1
	    },
	    assign: objectAssign
	  };
	  exports.Children = {
	    map: P,
	    forEach: function (a, b, c) {
	      P(a, function () {
	        b.apply(this, arguments);
	      }, c);
	    },
	    count: function (a) {
	      var b = 0;
	      P(a, function () {
	        b++;
	      });
	      return b;
	    },
	    toArray: function (a) {
	      return P(a, function (a) {
	        return a;
	      }) || [];
	    },
	    only: function (a) {
	      if (!L(a)) throw Error(z(143));
	      return a;
	    }
	  };
	  exports.Component = C;
	  exports.PureComponent = E;
	  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;

	  exports.cloneElement = function (a, b, c) {
	    if (null === a || void 0 === a) throw Error(z(267, a));
	    var e = objectAssign({}, a.props),
	        d = a.key,
	        k = a.ref,
	        h = a._owner;

	    if (null != b) {
	      void 0 !== b.ref && (k = b.ref, h = G.current);
	      void 0 !== b.key && (d = "" + b.key);
	      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

	      for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	    }

	    var f = arguments.length - 2;
	    if (1 === f) e.children = c;else if (1 < f) {
	      g = Array(f);

	      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];

	      e.children = g;
	    }
	    return {
	      $$typeof: n,
	      type: a.type,
	      key: d,
	      ref: k,
	      props: e,
	      _owner: h
	    };
	  };

	  exports.createContext = function (a, b) {
	    void 0 === b && (b = null);
	    a = {
	      $$typeof: r,
	      _calculateChangedBits: b,
	      _currentValue: a,
	      _currentValue2: a,
	      _threadCount: 0,
	      Provider: null,
	      Consumer: null
	    };
	    a.Provider = {
	      $$typeof: q,
	      _context: a
	    };
	    return a.Consumer = a;
	  };

	  exports.createElement = J;

	  exports.createFactory = function (a) {
	    var b = J.bind(null, a);
	    b.type = a;
	    return b;
	  };

	  exports.createRef = function () {
	    return {
	      current: null
	    };
	  };

	  exports.forwardRef = function (a) {
	    return {
	      $$typeof: t,
	      render: a
	    };
	  };

	  exports.isValidElement = L;

	  exports.lazy = function (a) {
	    return {
	      $$typeof: v,
	      _payload: {
	        _status: -1,
	        _result: a
	      },
	      _init: Q
	    };
	  };

	  exports.memo = function (a, b) {
	    return {
	      $$typeof: u,
	      type: a,
	      compare: void 0 === b ? null : b
	    };
	  };

	  exports.useCallback = function (a, b) {
	    return S().useCallback(a, b);
	  };

	  exports.useContext = function (a, b) {
	    return S().useContext(a, b);
	  };

	  exports.useDebugValue = function () {};

	  exports.useEffect = function (a, b) {
	    return S().useEffect(a, b);
	  };

	  exports.useImperativeHandle = function (a, b, c) {
	    return S().useImperativeHandle(a, b, c);
	  };

	  exports.useLayoutEffect = function (a, b) {
	    return S().useLayoutEffect(a, b);
	  };

	  exports.useMemo = function (a, b) {
	    return S().useMemo(a, b);
	  };

	  exports.useReducer = function (a, b, c) {
	    return S().useReducer(a, b, c);
	  };

	  exports.useRef = function (a) {
	    return S().useRef(a);
	  };

	  exports.useState = function (a) {
	    return S().useState(a);
	  };

	  exports.version = "17.0.2";
	});

	createCommonjsModule(function (module, exports) {
	});

	var react = createCommonjsModule(function (module) {

	  {
	    module.exports = react_production_min;
	  }
	});

	var React = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
		__proto__: null,
		'default': react
	}, [react]));

	var scheduler_production_min = createCommonjsModule(function (module, exports) {

	  var f, g, h, k;

	  if ("object" === typeof performance && "function" === typeof performance.now) {
	    var l = performance;

	    exports.unstable_now = function () {
	      return l.now();
	    };
	  } else {
	    var p = Date,
	        q = p.now();

	    exports.unstable_now = function () {
	      return p.now() - q;
	    };
	  }

	  if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
	    var t = null,
	        u = null,
	        w = function () {
	      if (null !== t) try {
	        var a = exports.unstable_now();
	        t(!0, a);
	        t = null;
	      } catch (b) {
	        throw setTimeout(w, 0), b;
	      }
	    };

	    f = function (a) {
	      null !== t ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
	    };

	    g = function (a, b) {
	      u = setTimeout(a, b);
	    };

	    h = function () {
	      clearTimeout(u);
	    };

	    exports.unstable_shouldYield = function () {
	      return !1;
	    };

	    k = exports.unstable_forceFrameRate = function () {};
	  } else {
	    var x = window.setTimeout,
	        y = window.clearTimeout;

	    if ("undefined" !== typeof console) {
	      var z = window.cancelAnimationFrame;
	      "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
	      "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
	    }

	    var A = !1,
	        B = null,
	        C = -1,
	        D = 5,
	        E = 0;

	    exports.unstable_shouldYield = function () {
	      return exports.unstable_now() >= E;
	    };

	    k = function () {};

	    exports.unstable_forceFrameRate = function (a) {
	      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
	    };

	    var F = new MessageChannel(),
	        G = F.port2;

	    F.port1.onmessage = function () {
	      if (null !== B) {
	        var a = exports.unstable_now();
	        E = a + D;

	        try {
	          B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
	        } catch (b) {
	          throw G.postMessage(null), b;
	        }
	      } else A = !1;
	    };

	    f = function (a) {
	      B = a;
	      A || (A = !0, G.postMessage(null));
	    };

	    g = function (a, b) {
	      C = x(function () {
	        a(exports.unstable_now());
	      }, b);
	    };

	    h = function () {
	      y(C);
	      C = -1;
	    };
	  }

	  function H(a, b) {
	    var c = a.length;
	    a.push(b);

	    a: for (;;) {
	      var d = c - 1 >>> 1,
	          e = a[d];
	      if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;else break a;
	    }
	  }

	  function J(a) {
	    a = a[0];
	    return void 0 === a ? null : a;
	  }

	  function K(a) {
	    var b = a[0];

	    if (void 0 !== b) {
	      var c = a.pop();

	      if (c !== b) {
	        a[0] = c;

	        a: for (var d = 0, e = a.length; d < e;) {
	          var m = 2 * (d + 1) - 1,
	              n = a[m],
	              v = m + 1,
	              r = a[v];
	          if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;else break a;
	        }
	      }

	      return b;
	    }

	    return null;
	  }

	  function I(a, b) {
	    var c = a.sortIndex - b.sortIndex;
	    return 0 !== c ? c : a.id - b.id;
	  }

	  var L = [],
	      M = [],
	      N = 1,
	      O = null,
	      P = 3,
	      Q = !1,
	      R = !1,
	      S = !1;

	  function T(a) {
	    for (var b = J(M); null !== b;) {
	      if (null === b.callback) K(M);else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);else break;
	      b = J(M);
	    }
	  }

	  function U(a) {
	    S = !1;
	    T(a);
	    if (!R) if (null !== J(L)) R = !0, f(V);else {
	      var b = J(M);
	      null !== b && g(U, b.startTime - a);
	    }
	  }

	  function V(a, b) {
	    R = !1;
	    S && (S = !1, h());
	    Q = !0;
	    var c = P;

	    try {
	      T(b);

	      for (O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());) {
	        var d = O.callback;

	        if ("function" === typeof d) {
	          O.callback = null;
	          P = O.priorityLevel;
	          var e = d(O.expirationTime <= b);
	          b = exports.unstable_now();
	          "function" === typeof e ? O.callback = e : O === J(L) && K(L);
	          T(b);
	        } else K(L);

	        O = J(L);
	      }

	      if (null !== O) var m = !0;else {
	        var n = J(M);
	        null !== n && g(U, n.startTime - b);
	        m = !1;
	      }
	      return m;
	    } finally {
	      O = null, P = c, Q = !1;
	    }
	  }

	  var W = k;
	  exports.unstable_IdlePriority = 5;
	  exports.unstable_ImmediatePriority = 1;
	  exports.unstable_LowPriority = 4;
	  exports.unstable_NormalPriority = 3;
	  exports.unstable_Profiling = null;
	  exports.unstable_UserBlockingPriority = 2;

	  exports.unstable_cancelCallback = function (a) {
	    a.callback = null;
	  };

	  exports.unstable_continueExecution = function () {
	    R || Q || (R = !0, f(V));
	  };

	  exports.unstable_getCurrentPriorityLevel = function () {
	    return P;
	  };

	  exports.unstable_getFirstCallbackNode = function () {
	    return J(L);
	  };

	  exports.unstable_next = function (a) {
	    switch (P) {
	      case 1:
	      case 2:
	      case 3:
	        var b = 3;
	        break;

	      default:
	        b = P;
	    }

	    var c = P;
	    P = b;

	    try {
	      return a();
	    } finally {
	      P = c;
	    }
	  };

	  exports.unstable_pauseExecution = function () {};

	  exports.unstable_requestPaint = W;

	  exports.unstable_runWithPriority = function (a, b) {
	    switch (a) {
	      case 1:
	      case 2:
	      case 3:
	      case 4:
	      case 5:
	        break;

	      default:
	        a = 3;
	    }

	    var c = P;
	    P = a;

	    try {
	      return b();
	    } finally {
	      P = c;
	    }
	  };

	  exports.unstable_scheduleCallback = function (a, b, c) {
	    var d = exports.unstable_now();
	    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;

	    switch (a) {
	      case 1:
	        var e = -1;
	        break;

	      case 2:
	        e = 250;
	        break;

	      case 5:
	        e = 1073741823;
	        break;

	      case 4:
	        e = 1E4;
	        break;

	      default:
	        e = 5E3;
	    }

	    e = c + e;
	    a = {
	      id: N++,
	      callback: b,
	      priorityLevel: a,
	      startTime: c,
	      expirationTime: e,
	      sortIndex: -1
	    };
	    c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, f(V)));
	    return a;
	  };

	  exports.unstable_wrapCallback = function (a) {
	    var b = P;
	    return function () {
	      var c = P;
	      P = b;

	      try {
	        return a.apply(this, arguments);
	      } finally {
	        P = c;
	      }
	    };
	  };
	});

	createCommonjsModule(function (module, exports) {
	});

	var scheduler = createCommonjsModule(function (module) {

	  {
	    module.exports = scheduler_production_min;
	  }
	});

	function y$2(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}

	if (!react) throw Error(y$2(227));
	var ba = new Set(),
	    ca = {};

	function da(a, b) {
	  ea(a, b);
	  ea(a + "Capture", b);
	}

	function ea(a, b) {
	  ca[a] = b;

	  for (a = 0; a < b.length; a++) ba.add(b[a]);
	}

	var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
	    ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	    ia = Object.prototype.hasOwnProperty,
	    ja = {},
	    ka = {};

	function la(a) {
	  if (ia.call(ka, a)) return !0;
	  if (ia.call(ja, a)) return !1;
	  if (ha.test(a)) return ka[a] = !0;
	  ja[a] = !0;
	  return !1;
	}

	function ma(a, b, c, d) {
	  if (null !== c && 0 === c.type) return !1;

	  switch (typeof b) {
	    case "function":
	    case "symbol":
	      return !0;

	    case "boolean":
	      if (d) return !1;
	      if (null !== c) return !c.acceptsBooleans;
	      a = a.toLowerCase().slice(0, 5);
	      return "data-" !== a && "aria-" !== a;

	    default:
	      return !1;
	  }
	}

	function na(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || ma(a, b, c, d)) return !0;
	  if (d) return !1;
	  if (null !== c) switch (c.type) {
	    case 3:
	      return !b;

	    case 4:
	      return !1 === b;

	    case 5:
	      return isNaN(b);

	    case 6:
	      return isNaN(b) || 1 > b;
	  }
	  return !1;
	}

	function B$1(a, b, c, d, e, f, g) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	  this.attributeName = d;
	  this.attributeNamespace = e;
	  this.mustUseProperty = c;
	  this.propertyName = a;
	  this.type = b;
	  this.sanitizeURL = f;
	  this.removeEmptyString = g;
	}

	var D$1 = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  D$1[a] = new B$1(a, 0, !1, a, null, !1, !1);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];
	  D$1[b] = new B$1(b, 1, !1, a[1], null, !1, !1);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  D$1[a] = new B$1(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	  D$1[a] = new B$1(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  D$1[a] = new B$1(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  D$1[a] = new B$1(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function (a) {
	  D$1[a] = new B$1(a, 4, !1, a, null, !1, !1);
	});
	["cols", "rows", "size", "span"].forEach(function (a) {
	  D$1[a] = new B$1(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function (a) {
	  D$1[a] = new B$1(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var oa = /[\-:]([a-z])/g;

	function pa(a) {
	  return a[1].toUpperCase();
	}

	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D$1[b] = new B$1(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D$1[b] = new B$1(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D$1[b] = new B$1(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function (a) {
	  D$1[a] = new B$1(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	D$1.xlinkHref = new B$1("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	["src", "href", "action", "formAction"].forEach(function (a) {
	  D$1[a] = new B$1(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});

	function qa(a, b, c, d) {
	  var e = D$1.hasOwnProperty(b) ? D$1[b] : null;
	  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
	  f || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
	}

	var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	    sa = 60103,
	    ta = 60106,
	    ua = 60107,
	    wa = 60108,
	    xa = 60114,
	    ya = 60109,
	    za = 60110,
	    Aa = 60112,
	    Ba = 60113,
	    Ca = 60120,
	    Da = 60115,
	    Ea = 60116,
	    Fa = 60121,
	    Ga = 60128,
	    Ha = 60129,
	    Ia = 60130,
	    Ja = 60131;

	if ("function" === typeof Symbol && Symbol.for) {
	  var E$1 = Symbol.for;
	  sa = E$1("react.element");
	  ta = E$1("react.portal");
	  ua = E$1("react.fragment");
	  wa = E$1("react.strict_mode");
	  xa = E$1("react.profiler");
	  ya = E$1("react.provider");
	  za = E$1("react.context");
	  Aa = E$1("react.forward_ref");
	  Ba = E$1("react.suspense");
	  Ca = E$1("react.suspense_list");
	  Da = E$1("react.memo");
	  Ea = E$1("react.lazy");
	  Fa = E$1("react.block");
	  E$1("react.scope");
	  Ga = E$1("react.opaque.id");
	  Ha = E$1("react.debug_trace_mode");
	  Ia = E$1("react.offscreen");
	  Ja = E$1("react.legacy_hidden");
	}

	var Ka = "function" === typeof Symbol && Symbol.iterator;

	function La(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = Ka && a[Ka] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}

	var Ma;

	function Na(a) {
	  if (void 0 === Ma) try {
	    throw Error();
	  } catch (c) {
	    var b = c.stack.trim().match(/\n( *(at )?)/);
	    Ma = b && b[1] || "";
	  }
	  return "\n" + Ma + a;
	}

	var Oa = !1;

	function Pa(a, b) {
	  if (!a || Oa) return "";
	  Oa = !0;
	  var c = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;

	  try {
	    if (b) {
	      if (b = function () {
	        throw Error();
	      }, Object.defineProperty(b.prototype, "props", {
	        set: function () {
	          throw Error();
	        }
	      }), "object" === typeof Reflect && Reflect.construct) {
	        try {
	          Reflect.construct(b, []);
	        } catch (k) {
	          var d = k;
	        }

	        Reflect.construct(a, [], b);
	      } else {
	        try {
	          b.call();
	        } catch (k) {
	          d = k;
	        }

	        a.call(b.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (k) {
	        d = k;
	      }

	      a();
	    }
	  } catch (k) {
	    if (k && d && "string" === typeof k.stack) {
	      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;

	      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
	        if (1 !== g || 1 !== h) {
	          do if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at "); while (1 <= g && 0 <= h);
	        }

	        break;
	      }
	    }
	  } finally {
	    Oa = !1, Error.prepareStackTrace = c;
	  }

	  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
	}

	function Qa(a) {
	  switch (a.tag) {
	    case 5:
	      return Na(a.type);

	    case 16:
	      return Na("Lazy");

	    case 13:
	      return Na("Suspense");

	    case 19:
	      return Na("SuspenseList");

	    case 0:
	    case 2:
	    case 15:
	      return a = Pa(a.type, !1), a;

	    case 11:
	      return a = Pa(a.type.render, !1), a;

	    case 22:
	      return a = Pa(a.type._render, !1), a;

	    case 1:
	      return a = Pa(a.type, !0), a;

	    default:
	      return "";
	  }
	}

	function Ra(a) {
	  if (null == a) return null;
	  if ("function" === typeof a) return a.displayName || a.name || null;
	  if ("string" === typeof a) return a;

	  switch (a) {
	    case ua:
	      return "Fragment";

	    case ta:
	      return "Portal";

	    case xa:
	      return "Profiler";

	    case wa:
	      return "StrictMode";

	    case Ba:
	      return "Suspense";

	    case Ca:
	      return "SuspenseList";
	  }

	  if ("object" === typeof a) switch (a.$$typeof) {
	    case za:
	      return (a.displayName || "Context") + ".Consumer";

	    case ya:
	      return (a._context.displayName || "Context") + ".Provider";

	    case Aa:
	      var b = a.render;
	      b = b.displayName || b.name || "";
	      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

	    case Da:
	      return Ra(a.type);

	    case Fa:
	      return Ra(a._render);

	    case Ea:
	      b = a._payload;
	      a = a._init;

	      try {
	        return Ra(a(b));
	      } catch (c) {}

	  }
	  return null;
	}

	function Sa(a) {
	  switch (typeof a) {
	    case "boolean":
	    case "number":
	    case "object":
	    case "string":
	    case "undefined":
	      return a;

	    default:
	      return "";
	  }
	}

	function Ta(a) {
	  var b = a.type;
	  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}

	function Ua(a) {
	  var b = Ta(a) ? "checked" : "value",
	      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
	      d = "" + a[b];

	  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	    var e = c.get,
	        f = c.set;
	    Object.defineProperty(a, b, {
	      configurable: !0,
	      get: function () {
	        return e.call(this);
	      },
	      set: function (a) {
	        d = "" + a;
	        f.call(this, a);
	      }
	    });
	    Object.defineProperty(a, b, {
	      enumerable: c.enumerable
	    });
	    return {
	      getValue: function () {
	        return d;
	      },
	      setValue: function (a) {
	        d = "" + a;
	      },
	      stopTracking: function () {
	        a._valueTracker = null;
	        delete a[b];
	      }
	    };
	  }
	}

	function Va(a) {
	  a._valueTracker || (a._valueTracker = Ua(a));
	}

	function Wa(a) {
	  if (!a) return !1;
	  var b = a._valueTracker;
	  if (!b) return !0;
	  var c = b.getValue();
	  var d = "";
	  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
	  a = d;
	  return a !== c ? (b.setValue(a), !0) : !1;
	}

	function Xa(a) {
	  a = a || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof a) return null;

	  try {
	    return a.activeElement || a.body;
	  } catch (b) {
	    return a.body;
	  }
	}

	function Ya(a, b) {
	  var c = b.checked;
	  return objectAssign({}, b, {
	    defaultChecked: void 0,
	    defaultValue: void 0,
	    value: void 0,
	    checked: null != c ? c : a._wrapperState.initialChecked
	  });
	}

	function Za(a, b) {
	  var c = null == b.defaultValue ? "" : b.defaultValue,
	      d = null != b.checked ? b.checked : b.defaultChecked;
	  c = Sa(null != b.value ? b.value : c);
	  a._wrapperState = {
	    initialChecked: d,
	    initialValue: c,
	    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	  };
	}

	function $a(a, b) {
	  b = b.checked;
	  null != b && qa(a, "checked", b, !1);
	}

	function ab(a, b) {
	  $a(a, b);
	  var c = Sa(b.value),
	      d = b.type;
	  if (null != c) {
	    if ("number" === d) {
	      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	    } else a.value !== "" + c && (a.value = "" + c);
	  } else if ("submit" === d || "reset" === d) {
	    a.removeAttribute("value");
	    return;
	  }
	  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
	  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}

	function cb(a, b, c) {
	  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
	    var d = b.type;
	    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
	    b = "" + a._wrapperState.initialValue;
	    c || b === a.value || (a.value = b);
	    a.defaultValue = b;
	  }

	  c = a.name;
	  "" !== c && (a.name = "");
	  a.defaultChecked = !!a._wrapperState.initialChecked;
	  "" !== c && (a.name = c);
	}

	function bb(a, b, c) {
	  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}

	function db(a) {
	  var b = "";
	  react.Children.forEach(a, function (a) {
	    null != a && (b += a);
	  });
	  return b;
	}

	function eb(a, b) {
	  a = objectAssign({
	    children: void 0
	  }, b);
	  if (b = db(b.children)) a.children = b;
	  return a;
	}

	function fb(a, b, c, d) {
	  a = a.options;

	  if (b) {
	    b = {};

	    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;

	    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
	  } else {
	    c = "" + Sa(c);
	    b = null;

	    for (e = 0; e < a.length; e++) {
	      if (a[e].value === c) {
	        a[e].selected = !0;
	        d && (a[e].defaultSelected = !0);
	        return;
	      }

	      null !== b || a[e].disabled || (b = a[e]);
	    }

	    null !== b && (b.selected = !0);
	  }
	}

	function gb(a, b) {
	  if (null != b.dangerouslySetInnerHTML) throw Error(y$2(91));
	  return objectAssign({}, b, {
	    value: void 0,
	    defaultValue: void 0,
	    children: "" + a._wrapperState.initialValue
	  });
	}

	function hb(a, b) {
	  var c = b.value;

	  if (null == c) {
	    c = b.children;
	    b = b.defaultValue;

	    if (null != c) {
	      if (null != b) throw Error(y$2(92));

	      if (Array.isArray(c)) {
	        if (!(1 >= c.length)) throw Error(y$2(93));
	        c = c[0];
	      }

	      b = c;
	    }

	    null == b && (b = "");
	    c = b;
	  }

	  a._wrapperState = {
	    initialValue: Sa(c)
	  };
	}

	function ib(a, b) {
	  var c = Sa(b.value),
	      d = Sa(b.defaultValue);
	  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
	  null != d && (a.defaultValue = "" + d);
	}

	function jb(a) {
	  var b = a.textContent;
	  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}

	var kb = {
	  html: "http://www.w3.org/1999/xhtml",
	  mathml: "http://www.w3.org/1998/Math/MathML",
	  svg: "http://www.w3.org/2000/svg"
	};

	function lb(a) {
	  switch (a) {
	    case "svg":
	      return "http://www.w3.org/2000/svg";

	    case "math":
	      return "http://www.w3.org/1998/Math/MathML";

	    default:
	      return "http://www.w3.org/1999/xhtml";
	  }
	}

	function mb(a, b) {
	  return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}

	var nb,
	    ob = function (a) {
	  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	    MSApp.execUnsafeLocalFunction(function () {
	      return a(b, c, d, e);
	    });
	  } : a;
	}(function (a, b) {
	  if (a.namespaceURI !== kb.svg || "innerHTML" in a) a.innerHTML = b;else {
	    nb = nb || document.createElement("div");
	    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";

	    for (b = nb.firstChild; a.firstChild;) a.removeChild(a.firstChild);

	    for (; b.firstChild;) a.appendChild(b.firstChild);
	  }
	});

	function pb(a, b) {
	  if (b) {
	    var c = a.firstChild;

	    if (c && c === a.lastChild && 3 === c.nodeType) {
	      c.nodeValue = b;
	      return;
	    }
	  }

	  a.textContent = b;
	}

	var qb = {
	  animationIterationCount: !0,
	  borderImageOutset: !0,
	  borderImageSlice: !0,
	  borderImageWidth: !0,
	  boxFlex: !0,
	  boxFlexGroup: !0,
	  boxOrdinalGroup: !0,
	  columnCount: !0,
	  columns: !0,
	  flex: !0,
	  flexGrow: !0,
	  flexPositive: !0,
	  flexShrink: !0,
	  flexNegative: !0,
	  flexOrder: !0,
	  gridArea: !0,
	  gridRow: !0,
	  gridRowEnd: !0,
	  gridRowSpan: !0,
	  gridRowStart: !0,
	  gridColumn: !0,
	  gridColumnEnd: !0,
	  gridColumnSpan: !0,
	  gridColumnStart: !0,
	  fontWeight: !0,
	  lineClamp: !0,
	  lineHeight: !0,
	  opacity: !0,
	  order: !0,
	  orphans: !0,
	  tabSize: !0,
	  widows: !0,
	  zIndex: !0,
	  zoom: !0,
	  fillOpacity: !0,
	  floodOpacity: !0,
	  stopOpacity: !0,
	  strokeDasharray: !0,
	  strokeDashoffset: !0,
	  strokeMiterlimit: !0,
	  strokeOpacity: !0,
	  strokeWidth: !0
	},
	    rb = ["Webkit", "ms", "Moz", "O"];
	Object.keys(qb).forEach(function (a) {
	  rb.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);
	    qb[b] = qb[a];
	  });
	});

	function sb(a, b, c) {
	  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
	}

	function tb(a, b) {
	  a = a.style;

	  for (var c in b) if (b.hasOwnProperty(c)) {
	    var d = 0 === c.indexOf("--"),
	        e = sb(c, b[c], d);
	    "float" === c && (c = "cssFloat");
	    d ? a.setProperty(c, e) : a[c] = e;
	  }
	}

	var ub = objectAssign({
	  menuitem: !0
	}, {
	  area: !0,
	  base: !0,
	  br: !0,
	  col: !0,
	  embed: !0,
	  hr: !0,
	  img: !0,
	  input: !0,
	  keygen: !0,
	  link: !0,
	  meta: !0,
	  param: !0,
	  source: !0,
	  track: !0,
	  wbr: !0
	});

	function vb(a, b) {
	  if (b) {
	    if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(y$2(137, a));

	    if (null != b.dangerouslySetInnerHTML) {
	      if (null != b.children) throw Error(y$2(60));
	      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(y$2(61));
	    }

	    if (null != b.style && "object" !== typeof b.style) throw Error(y$2(62));
	  }
	}

	function wb(a, b) {
	  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

	  switch (a) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return !1;

	    default:
	      return !0;
	  }
	}

	function xb(a) {
	  a = a.target || a.srcElement || window;
	  a.correspondingUseElement && (a = a.correspondingUseElement);
	  return 3 === a.nodeType ? a.parentNode : a;
	}

	var yb = null,
	    zb = null,
	    Ab = null;

	function Bb(a) {
	  if (a = Cb(a)) {
	    if ("function" !== typeof yb) throw Error(y$2(280));
	    var b = a.stateNode;
	    b && (b = Db(b), yb(a.stateNode, a.type, b));
	  }
	}

	function Eb(a) {
	  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}

	function Fb() {
	  if (zb) {
	    var a = zb,
	        b = Ab;
	    Ab = zb = null;
	    Bb(a);
	    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
	  }
	}

	function Gb(a, b) {
	  return a(b);
	}

	function Hb(a, b, c, d, e) {
	  return a(b, c, d, e);
	}

	function Ib() {}

	var Jb = Gb,
	    Kb = !1,
	    Lb = !1;

	function Mb() {
	  if (null !== zb || null !== Ab) Ib(), Fb();
	}

	function Nb(a, b, c) {
	  if (Lb) return a(b, c);
	  Lb = !0;

	  try {
	    return Jb(a, b, c);
	  } finally {
	    Lb = !1, Mb();
	  }
	}

	function Ob(a, b) {
	  var c = a.stateNode;
	  if (null === c) return null;
	  var d = Db(c);
	  if (null === d) return null;
	  c = d[b];

	  a: switch (b) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	      a = !d;
	      break a;

	    default:
	      a = !1;
	  }

	  if (a) return null;
	  if (c && "function" !== typeof c) throw Error(y$2(231, b, typeof c));
	  return c;
	}

	var Pb = !1;
	if (fa) try {
	  var Qb = {};
	  Object.defineProperty(Qb, "passive", {
	    get: function () {
	      Pb = !0;
	    }
	  });
	  window.addEventListener("test", Qb, Qb);
	  window.removeEventListener("test", Qb, Qb);
	} catch (a) {
	  Pb = !1;
	}

	function Rb(a, b, c, d, e, f, g, h, k) {
	  var l = Array.prototype.slice.call(arguments, 3);

	  try {
	    b.apply(c, l);
	  } catch (n) {
	    this.onError(n);
	  }
	}

	var Sb = !1,
	    Tb = null,
	    Ub = !1,
	    Vb = null,
	    Wb = {
	  onError: function (a) {
	    Sb = !0;
	    Tb = a;
	  }
	};

	function Xb(a, b, c, d, e, f, g, h, k) {
	  Sb = !1;
	  Tb = null;
	  Rb.apply(Wb, arguments);
	}

	function Yb(a, b, c, d, e, f, g, h, k) {
	  Xb.apply(this, arguments);

	  if (Sb) {
	    if (Sb) {
	      var l = Tb;
	      Sb = !1;
	      Tb = null;
	    } else throw Error(y$2(198));

	    Ub || (Ub = !0, Vb = l);
	  }
	}

	function Zb(a) {
	  var b = a,
	      c = a;
	  if (a.alternate) for (; b.return;) b = b.return;else {
	    a = b;

	    do b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return; while (a);
	  }
	  return 3 === b.tag ? c : null;
	}

	function $b(a) {
	  if (13 === a.tag) {
	    var b = a.memoizedState;
	    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	    if (null !== b) return b.dehydrated;
	  }

	  return null;
	}

	function ac(a) {
	  if (Zb(a) !== a) throw Error(y$2(188));
	}

	function bc(a) {
	  var b = a.alternate;

	  if (!b) {
	    b = Zb(a);
	    if (null === b) throw Error(y$2(188));
	    return b !== a ? null : a;
	  }

	  for (var c = a, d = b;;) {
	    var e = c.return;
	    if (null === e) break;
	    var f = e.alternate;

	    if (null === f) {
	      d = e.return;

	      if (null !== d) {
	        c = d;
	        continue;
	      }

	      break;
	    }

	    if (e.child === f.child) {
	      for (f = e.child; f;) {
	        if (f === c) return ac(e), a;
	        if (f === d) return ac(e), b;
	        f = f.sibling;
	      }

	      throw Error(y$2(188));
	    }

	    if (c.return !== d.return) c = e, d = f;else {
	      for (var g = !1, h = e.child; h;) {
	        if (h === c) {
	          g = !0;
	          c = e;
	          d = f;
	          break;
	        }

	        if (h === d) {
	          g = !0;
	          d = e;
	          c = f;
	          break;
	        }

	        h = h.sibling;
	      }

	      if (!g) {
	        for (h = f.child; h;) {
	          if (h === c) {
	            g = !0;
	            c = f;
	            d = e;
	            break;
	          }

	          if (h === d) {
	            g = !0;
	            d = f;
	            c = e;
	            break;
	          }

	          h = h.sibling;
	        }

	        if (!g) throw Error(y$2(189));
	      }
	    }
	    if (c.alternate !== d) throw Error(y$2(190));
	  }

	  if (3 !== c.tag) throw Error(y$2(188));
	  return c.stateNode.current === c ? a : b;
	}

	function cc(a) {
	  a = bc(a);
	  if (!a) return null;

	  for (var b = a;;) {
	    if (5 === b.tag || 6 === b.tag) return b;
	    if (b.child) b.child.return = b, b = b.child;else {
	      if (b === a) break;

	      for (; !b.sibling;) {
	        if (!b.return || b.return === a) return null;
	        b = b.return;
	      }

	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }

	  return null;
	}

	function dc(a, b) {
	  for (var c = a.alternate; null !== b;) {
	    if (b === a || b === c) return !0;
	    b = b.return;
	  }

	  return !1;
	}

	var ec,
	    fc,
	    gc,
	    hc,
	    ic = !1,
	    jc = [],
	    kc = null,
	    lc = null,
	    mc = null,
	    nc = new Map(),
	    oc = new Map(),
	    pc = [],
	    qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

	function rc(a, b, c, d, e) {
	  return {
	    blockedOn: a,
	    domEventName: b,
	    eventSystemFlags: c | 16,
	    nativeEvent: e,
	    targetContainers: [d]
	  };
	}

	function sc(a, b) {
	  switch (a) {
	    case "focusin":
	    case "focusout":
	      kc = null;
	      break;

	    case "dragenter":
	    case "dragleave":
	      lc = null;
	      break;

	    case "mouseover":
	    case "mouseout":
	      mc = null;
	      break;

	    case "pointerover":
	    case "pointerout":
	      nc.delete(b.pointerId);
	      break;

	    case "gotpointercapture":
	    case "lostpointercapture":
	      oc.delete(b.pointerId);
	  }
	}

	function tc(a, b, c, d, e, f) {
	  if (null === a || a.nativeEvent !== f) return a = rc(b, c, d, e, f), null !== b && (b = Cb(b), null !== b && fc(b)), a;
	  a.eventSystemFlags |= d;
	  b = a.targetContainers;
	  null !== e && -1 === b.indexOf(e) && b.push(e);
	  return a;
	}

	function uc(a, b, c, d, e) {
	  switch (b) {
	    case "focusin":
	      return kc = tc(kc, a, b, c, d, e), !0;

	    case "dragenter":
	      return lc = tc(lc, a, b, c, d, e), !0;

	    case "mouseover":
	      return mc = tc(mc, a, b, c, d, e), !0;

	    case "pointerover":
	      var f = e.pointerId;
	      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
	      return !0;

	    case "gotpointercapture":
	      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), !0;
	  }

	  return !1;
	}

	function vc(a) {
	  var b = wc(a.target);

	  if (null !== b) {
	    var c = Zb(b);
	    if (null !== c) if (b = c.tag, 13 === b) {
	      if (b = $b(c), null !== b) {
	        a.blockedOn = b;
	        hc(a.lanePriority, function () {
	          scheduler.unstable_runWithPriority(a.priority, function () {
	            gc(c);
	          });
	        });
	        return;
	      }
	    } else if (3 === b && c.stateNode.hydrate) {
	      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	      return;
	    }
	  }

	  a.blockedOn = null;
	}

	function xc(a) {
	  if (null !== a.blockedOn) return !1;

	  for (var b = a.targetContainers; 0 < b.length;) {
	    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	    if (null !== c) return b = Cb(c), null !== b && fc(b), a.blockedOn = c, !1;
	    b.shift();
	  }

	  return !0;
	}

	function zc(a, b, c) {
	  xc(a) && c.delete(b);
	}

	function Ac() {
	  for (ic = !1; 0 < jc.length;) {
	    var a = jc[0];

	    if (null !== a.blockedOn) {
	      a = Cb(a.blockedOn);
	      null !== a && ec(a);
	      break;
	    }

	    for (var b = a.targetContainers; 0 < b.length;) {
	      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);

	      if (null !== c) {
	        a.blockedOn = c;
	        break;
	      }

	      b.shift();
	    }

	    null === a.blockedOn && jc.shift();
	  }

	  null !== kc && xc(kc) && (kc = null);
	  null !== lc && xc(lc) && (lc = null);
	  null !== mc && xc(mc) && (mc = null);
	  nc.forEach(zc);
	  oc.forEach(zc);
	}

	function Bc(a, b) {
	  a.blockedOn === b && (a.blockedOn = null, ic || (ic = !0, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
	}

	function Cc(a) {
	  function b(b) {
	    return Bc(b, a);
	  }

	  if (0 < jc.length) {
	    Bc(jc[0], a);

	    for (var c = 1; c < jc.length; c++) {
	      var d = jc[c];
	      d.blockedOn === a && (d.blockedOn = null);
	    }
	  }

	  null !== kc && Bc(kc, a);
	  null !== lc && Bc(lc, a);
	  null !== mc && Bc(mc, a);
	  nc.forEach(b);
	  oc.forEach(b);

	  for (c = 0; c < pc.length; c++) d = pc[c], d.blockedOn === a && (d.blockedOn = null);

	  for (; 0 < pc.length && (c = pc[0], null === c.blockedOn);) vc(c), null === c.blockedOn && pc.shift();
	}

	function Dc(a, b) {
	  var c = {};
	  c[a.toLowerCase()] = b.toLowerCase();
	  c["Webkit" + a] = "webkit" + b;
	  c["Moz" + a] = "moz" + b;
	  return c;
	}

	var Ec = {
	  animationend: Dc("Animation", "AnimationEnd"),
	  animationiteration: Dc("Animation", "AnimationIteration"),
	  animationstart: Dc("Animation", "AnimationStart"),
	  transitionend: Dc("Transition", "TransitionEnd")
	},
	    Fc = {},
	    Gc = {};
	fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);

	function Hc(a) {
	  if (Fc[a]) return Fc[a];
	  if (!Ec[a]) return a;
	  var b = Ec[a],
	      c;

	  for (c in b) if (b.hasOwnProperty(c) && c in Gc) return Fc[a] = b[c];

	  return a;
	}

	var Ic = Hc("animationend"),
	    Jc = Hc("animationiteration"),
	    Kc = Hc("animationstart"),
	    Lc = Hc("transitionend"),
	    Mc = new Map(),
	    Nc = new Map(),
	    Oc = ["abort", "abort", Ic, "animationEnd", Jc, "animationIteration", Kc, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Lc, "transitionEnd", "waiting", "waiting"];

	function Pc(a, b) {
	  for (var c = 0; c < a.length; c += 2) {
	    var d = a[c],
	        e = a[c + 1];
	    e = "on" + (e[0].toUpperCase() + e.slice(1));
	    Nc.set(d, b);
	    Mc.set(d, e);
	    da(e, [d]);
	  }
	}

	var Qc = scheduler.unstable_now;
	Qc();
	var F$1 = 8;

	function Rc(a) {
	  if (0 !== (1 & a)) return F$1 = 15, 1;
	  if (0 !== (2 & a)) return F$1 = 14, 2;
	  if (0 !== (4 & a)) return F$1 = 13, 4;
	  var b = 24 & a;
	  if (0 !== b) return F$1 = 12, b;
	  if (0 !== (a & 32)) return F$1 = 11, 32;
	  b = 192 & a;
	  if (0 !== b) return F$1 = 10, b;
	  if (0 !== (a & 256)) return F$1 = 9, 256;
	  b = 3584 & a;
	  if (0 !== b) return F$1 = 8, b;
	  if (0 !== (a & 4096)) return F$1 = 7, 4096;
	  b = 4186112 & a;
	  if (0 !== b) return F$1 = 6, b;
	  b = 62914560 & a;
	  if (0 !== b) return F$1 = 5, b;
	  if (a & 67108864) return F$1 = 4, 67108864;
	  if (0 !== (a & 134217728)) return F$1 = 3, 134217728;
	  b = 805306368 & a;
	  if (0 !== b) return F$1 = 2, b;
	  if (0 !== (1073741824 & a)) return F$1 = 1, 1073741824;
	  F$1 = 8;
	  return a;
	}

	function Sc(a) {
	  switch (a) {
	    case 99:
	      return 15;

	    case 98:
	      return 10;

	    case 97:
	    case 96:
	      return 8;

	    case 95:
	      return 2;

	    default:
	      return 0;
	  }
	}

	function Tc(a) {
	  switch (a) {
	    case 15:
	    case 14:
	      return 99;

	    case 13:
	    case 12:
	    case 11:
	    case 10:
	      return 98;

	    case 9:
	    case 8:
	    case 7:
	    case 6:
	    case 4:
	    case 5:
	      return 97;

	    case 3:
	    case 2:
	    case 1:
	      return 95;

	    case 0:
	      return 90;

	    default:
	      throw Error(y$2(358, a));
	  }
	}

	function Uc(a, b) {
	  var c = a.pendingLanes;
	  if (0 === c) return F$1 = 0;
	  var d = 0,
	      e = 0,
	      f = a.expiredLanes,
	      g = a.suspendedLanes,
	      h = a.pingedLanes;
	  if (0 !== f) d = f, e = F$1 = 15;else if (f = c & 134217727, 0 !== f) {
	    var k = f & ~g;
	    0 !== k ? (d = Rc(k), e = F$1) : (h &= f, 0 !== h && (d = Rc(h), e = F$1));
	  } else f = c & ~g, 0 !== f ? (d = Rc(f), e = F$1) : 0 !== h && (d = Rc(h), e = F$1);
	  if (0 === d) return 0;
	  d = 31 - Vc(d);
	  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;

	  if (0 !== b && b !== d && 0 === (b & g)) {
	    Rc(b);
	    if (e <= F$1) return b;
	    F$1 = e;
	  }

	  b = a.entangledLanes;
	  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
	  return d;
	}

	function Wc(a) {
	  a = a.pendingLanes & -1073741825;
	  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}

	function Xc(a, b) {
	  switch (a) {
	    case 15:
	      return 1;

	    case 14:
	      return 2;

	    case 12:
	      return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;

	    case 10:
	      return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;

	    case 8:
	      return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;

	    case 2:
	      return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
	  }

	  throw Error(y$2(358, a));
	}

	function Yc(a) {
	  return a & -a;
	}

	function Zc(a) {
	  for (var b = [], c = 0; 31 > c; c++) b.push(a);

	  return b;
	}

	function $c(a, b, c) {
	  a.pendingLanes |= b;
	  var d = b - 1;
	  a.suspendedLanes &= d;
	  a.pingedLanes &= d;
	  a = a.eventTimes;
	  b = 31 - Vc(b);
	  a[b] = c;
	}

	var Vc = Math.clz32 ? Math.clz32 : ad,
	    bd = Math.log,
	    cd = Math.LN2;

	function ad(a) {
	  return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
	}

	var dd = scheduler.unstable_UserBlockingPriority,
	    ed = scheduler.unstable_runWithPriority,
	    fd = !0;

	function gd(a, b, c, d) {
	  Kb || Ib();
	  var e = hd,
	      f = Kb;
	  Kb = !0;

	  try {
	    Hb(e, a, b, c, d);
	  } finally {
	    (Kb = f) || Mb();
	  }
	}

	function id(a, b, c, d) {
	  ed(dd, hd.bind(null, a, b, c, d));
	}

	function hd(a, b, c, d) {
	  if (fd) {
	    var e;
	    if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a)) a = rc(null, a, b, c, d), jc.push(a);else {
	      var f = yc(a, b, c, d);
	      if (null === f) e && sc(a, d);else {
	        if (e) {
	          if (-1 < qc.indexOf(a)) {
	            a = rc(f, a, b, c, d);
	            jc.push(a);
	            return;
	          }

	          if (uc(f, a, b, c, d)) return;
	          sc(a, d);
	        }

	        jd(a, b, d, null, c);
	      }
	    }
	  }
	}

	function yc(a, b, c, d) {
	  var e = xb(d);
	  e = wc(e);

	  if (null !== e) {
	    var f = Zb(e);
	    if (null === f) e = null;else {
	      var g = f.tag;

	      if (13 === g) {
	        e = $b(f);
	        if (null !== e) return e;
	        e = null;
	      } else if (3 === g) {
	        if (f.stateNode.hydrate) return 3 === f.tag ? f.stateNode.containerInfo : null;
	        e = null;
	      } else f !== e && (e = null);
	    }
	  }

	  jd(a, b, d, e, c);
	  return null;
	}

	var kd = null,
	    ld = null,
	    md = null;

	function nd() {
	  if (md) return md;
	  var a,
	      b = ld,
	      c = b.length,
	      d,
	      e = "value" in kd ? kd.value : kd.textContent,
	      f = e.length;

	  for (a = 0; a < c && b[a] === e[a]; a++);

	  var g = c - a;

	  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);

	  return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}

	function od(a) {
	  var b = a.keyCode;
	  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	  10 === a && (a = 13);
	  return 32 <= a || 13 === a ? a : 0;
	}

	function pd() {
	  return !0;
	}

	function qd() {
	  return !1;
	}

	function rd(a) {
	  function b(b, d, e, f, g) {
	    this._reactName = b;
	    this._targetInst = e;
	    this.type = d;
	    this.nativeEvent = f;
	    this.target = g;
	    this.currentTarget = null;

	    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);

	    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
	    this.isPropagationStopped = qd;
	    return this;
	  }

	  objectAssign(b.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = !0;
	      var a = this.nativeEvent;
	      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
	    },
	    stopPropagation: function () {
	      var a = this.nativeEvent;
	      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
	    },
	    persist: function () {},
	    isPersistent: pd
	  });
	  return b;
	}

	var sd = {
	  eventPhase: 0,
	  bubbles: 0,
	  cancelable: 0,
	  timeStamp: function (a) {
	    return a.timeStamp || Date.now();
	  },
	  defaultPrevented: 0,
	  isTrusted: 0
	},
	    td = rd(sd),
	    ud = objectAssign({}, sd, {
	  view: 0,
	  detail: 0
	}),
	    vd = rd(ud),
	    wd,
	    xd,
	    yd,
	    Ad = objectAssign({}, ud, {
	  screenX: 0,
	  screenY: 0,
	  clientX: 0,
	  clientY: 0,
	  pageX: 0,
	  pageY: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  altKey: 0,
	  metaKey: 0,
	  getModifierState: zd,
	  button: 0,
	  buttons: 0,
	  relatedTarget: function (a) {
	    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
	  },
	  movementX: function (a) {
	    if ("movementX" in a) return a.movementX;
	    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
	    return wd;
	  },
	  movementY: function (a) {
	    return "movementY" in a ? a.movementY : xd;
	  }
	}),
	    Bd = rd(Ad),
	    Cd = objectAssign({}, Ad, {
	  dataTransfer: 0
	}),
	    Dd = rd(Cd),
	    Ed = objectAssign({}, ud, {
	  relatedTarget: 0
	}),
	    Fd = rd(Ed),
	    Gd = objectAssign({}, sd, {
	  animationName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}),
	    Hd = rd(Gd),
	    Id = objectAssign({}, sd, {
	  clipboardData: function (a) {
	    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	  }
	}),
	    Jd = rd(Id),
	    Kd = objectAssign({}, sd, {
	  data: 0
	}),
	    Ld = rd(Kd),
	    Md = {
	  Esc: "Escape",
	  Spacebar: " ",
	  Left: "ArrowLeft",
	  Up: "ArrowUp",
	  Right: "ArrowRight",
	  Down: "ArrowDown",
	  Del: "Delete",
	  Win: "OS",
	  Menu: "ContextMenu",
	  Apps: "ContextMenu",
	  Scroll: "ScrollLock",
	  MozPrintableKey: "Unidentified"
	},
	    Nd = {
	  8: "Backspace",
	  9: "Tab",
	  12: "Clear",
	  13: "Enter",
	  16: "Shift",
	  17: "Control",
	  18: "Alt",
	  19: "Pause",
	  20: "CapsLock",
	  27: "Escape",
	  32: " ",
	  33: "PageUp",
	  34: "PageDown",
	  35: "End",
	  36: "Home",
	  37: "ArrowLeft",
	  38: "ArrowUp",
	  39: "ArrowRight",
	  40: "ArrowDown",
	  45: "Insert",
	  46: "Delete",
	  112: "F1",
	  113: "F2",
	  114: "F3",
	  115: "F4",
	  116: "F5",
	  117: "F6",
	  118: "F7",
	  119: "F8",
	  120: "F9",
	  121: "F10",
	  122: "F11",
	  123: "F12",
	  144: "NumLock",
	  145: "ScrollLock",
	  224: "Meta"
	},
	    Od = {
	  Alt: "altKey",
	  Control: "ctrlKey",
	  Meta: "metaKey",
	  Shift: "shiftKey"
	};

	function Pd(a) {
	  var b = this.nativeEvent;
	  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}

	function zd() {
	  return Pd;
	}

	var Qd = objectAssign({}, ud, {
	  key: function (a) {
	    if (a.key) {
	      var b = Md[a.key] || a.key;
	      if ("Unidentified" !== b) return b;
	    }

	    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
	  },
	  code: 0,
	  location: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  altKey: 0,
	  metaKey: 0,
	  repeat: 0,
	  locale: 0,
	  getModifierState: zd,
	  charCode: function (a) {
	    return "keypress" === a.type ? od(a) : 0;
	  },
	  keyCode: function (a) {
	    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	  },
	  which: function (a) {
	    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	  }
	}),
	    Rd = rd(Qd),
	    Sd = objectAssign({}, Ad, {
	  pointerId: 0,
	  width: 0,
	  height: 0,
	  pressure: 0,
	  tangentialPressure: 0,
	  tiltX: 0,
	  tiltY: 0,
	  twist: 0,
	  pointerType: 0,
	  isPrimary: 0
	}),
	    Td = rd(Sd),
	    Ud = objectAssign({}, ud, {
	  touches: 0,
	  targetTouches: 0,
	  changedTouches: 0,
	  altKey: 0,
	  metaKey: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  getModifierState: zd
	}),
	    Vd = rd(Ud),
	    Wd = objectAssign({}, sd, {
	  propertyName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}),
	    Xd = rd(Wd),
	    Yd = objectAssign({}, Ad, {
	  deltaX: function (a) {
	    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	  },
	  deltaY: function (a) {
	    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	  },
	  deltaZ: 0,
	  deltaMode: 0
	}),
	    Zd = rd(Yd),
	    $d = [9, 13, 27, 32],
	    ae$1 = fa && "CompositionEvent" in window,
	    be = null;
	fa && "documentMode" in document && (be = document.documentMode);
	var ce$1 = fa && "TextEvent" in window && !be,
	    de = fa && (!ae$1 || be && 8 < be && 11 >= be),
	    ee$1 = String.fromCharCode(32),
	    fe$1 = !1;

	function ge(a, b) {
	  switch (a) {
	    case "keyup":
	      return -1 !== $d.indexOf(b.keyCode);

	    case "keydown":
	      return 229 !== b.keyCode;

	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return !0;

	    default:
	      return !1;
	  }
	}

	function he$1(a) {
	  a = a.detail;
	  return "object" === typeof a && "data" in a ? a.data : null;
	}

	var ie$1 = !1;

	function je(a, b) {
	  switch (a) {
	    case "compositionend":
	      return he$1(b);

	    case "keypress":
	      if (32 !== b.which) return null;
	      fe$1 = !0;
	      return ee$1;

	    case "textInput":
	      return a = b.data, a === ee$1 && fe$1 ? null : a;

	    default:
	      return null;
	  }
	}

	function ke(a, b) {
	  if (ie$1) return "compositionend" === a || !ae$1 && ge(a, b) ? (a = nd(), md = ld = kd = null, ie$1 = !1, a) : null;

	  switch (a) {
	    case "paste":
	      return null;

	    case "keypress":
	      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	        if (b.char && 1 < b.char.length) return b.char;
	        if (b.which) return String.fromCharCode(b.which);
	      }

	      return null;

	    case "compositionend":
	      return de && "ko" !== b.locale ? null : b.data;

	    default:
	      return null;
	  }
	}

	var le$1 = {
	  color: !0,
	  date: !0,
	  datetime: !0,
	  "datetime-local": !0,
	  email: !0,
	  month: !0,
	  number: !0,
	  password: !0,
	  range: !0,
	  search: !0,
	  tel: !0,
	  text: !0,
	  time: !0,
	  url: !0,
	  week: !0
	};

	function me(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return "input" === b ? !!le$1[a.type] : "textarea" === b ? !0 : !1;
	}

	function ne$1(a, b, c, d) {
	  Eb(d);
	  b = oe$1(b, "onChange");
	  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
	    event: c,
	    listeners: b
	  }));
	}

	var pe = null,
	    qe = null;

	function re$1(a) {
	  se$1(a, 0);
	}

	function te$1(a) {
	  var b = ue$1(a);
	  if (Wa(b)) return a;
	}

	function ve$1(a, b) {
	  if ("change" === a) return b;
	}

	var we = !1;

	if (fa) {
	  var xe;

	  if (fa) {
	    var ye = ("oninput" in document);

	    if (!ye) {
	      var ze = document.createElement("div");
	      ze.setAttribute("oninput", "return;");
	      ye = "function" === typeof ze.oninput;
	    }

	    xe = ye;
	  } else xe = !1;

	  we = xe && (!document.documentMode || 9 < document.documentMode);
	}

	function Ae() {
	  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}

	function Be(a) {
	  if ("value" === a.propertyName && te$1(qe)) {
	    var b = [];
	    ne$1(b, qe, a, xb(a));
	    a = re$1;
	    if (Kb) a(b);else {
	      Kb = !0;

	      try {
	        Gb(a, b);
	      } finally {
	        Kb = !1, Mb();
	      }
	    }
	  }
	}

	function Ce(a, b, c) {
	  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}

	function De(a) {
	  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te$1(qe);
	}

	function Ee(a, b) {
	  if ("click" === a) return te$1(b);
	}

	function Fe(a, b) {
	  if ("input" === a || "change" === a) return te$1(b);
	}

	function Ge(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}

	var He = "function" === typeof Object.is ? Object.is : Ge,
	    Ie = Object.prototype.hasOwnProperty;

	function Je(a, b) {
	  if (He(a, b)) return !0;
	  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	  var c = Object.keys(a),
	      d = Object.keys(b);
	  if (c.length !== d.length) return !1;

	  for (d = 0; d < c.length; d++) if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]])) return !1;

	  return !0;
	}

	function Ke(a) {
	  for (; a && a.firstChild;) a = a.firstChild;

	  return a;
	}

	function Le(a, b) {
	  var c = Ke(a);
	  a = 0;

	  for (var d; c;) {
	    if (3 === c.nodeType) {
	      d = a + c.textContent.length;
	      if (a <= b && d >= b) return {
	        node: c,
	        offset: b - a
	      };
	      a = d;
	    }

	    a: {
	      for (; c;) {
	        if (c.nextSibling) {
	          c = c.nextSibling;
	          break a;
	        }

	        c = c.parentNode;
	      }

	      c = void 0;
	    }

	    c = Ke(c);
	  }
	}

	function Me(a, b) {
	  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}

	function Ne() {
	  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
	    try {
	      var c = "string" === typeof b.contentWindow.location.href;
	    } catch (d) {
	      c = !1;
	    }

	    if (c) a = b.contentWindow;else break;
	    b = Xa(a.document);
	  }

	  return b;
	}

	function Oe(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}

	var Pe = fa && "documentMode" in document && 11 >= document.documentMode,
	    Qe = null,
	    Re = null,
	    Se = null,
	    Te = !1;

	function Ue(a, b, c) {
	  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {
	    start: d.selectionStart,
	    end: d.selectionEnd
	  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	    anchorNode: d.anchorNode,
	    anchorOffset: d.anchorOffset,
	    focusNode: d.focusNode,
	    focusOffset: d.focusOffset
	  }), Se && Je(Se, d) || (Se = d, d = oe$1(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	    event: b,
	    listeners: d
	  }), b.target = Qe)));
	}

	Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
	Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
	Pc(Oc, 2);

	for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++) Nc.set(Ve[We], 0);

	ea("onMouseEnter", ["mouseout", "mouseover"]);
	ea("onMouseLeave", ["mouseout", "mouseover"]);
	ea("onPointerEnter", ["pointerout", "pointerover"]);
	ea("onPointerLeave", ["pointerout", "pointerover"]);
	da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	    Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));

	function Ze(a, b, c) {
	  var d = a.type || "unknown-event";
	  a.currentTarget = c;
	  Yb(d, b, void 0, a);
	  a.currentTarget = null;
	}

	function se$1(a, b) {
	  b = 0 !== (b & 4);

	  for (var c = 0; c < a.length; c++) {
	    var d = a[c],
	        e = d.event;
	    d = d.listeners;

	    a: {
	      var f = void 0;
	      if (b) for (var g = d.length - 1; 0 <= g; g--) {
	        var h = d[g],
	            k = h.instance,
	            l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        Ze(e, h, l);
	        f = k;
	      } else for (g = 0; g < d.length; g++) {
	        h = d[g];
	        k = h.instance;
	        l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        Ze(e, h, l);
	        f = k;
	      }
	    }
	  }

	  if (Ub) throw a = Vb, Ub = !1, Vb = null, a;
	}

	function G$1(a, b) {
	  var c = $e(b),
	      d = a + "__bubble";
	  c.has(d) || (af(b, a, 2, !1), c.add(d));
	}

	var bf = "_reactListening" + Math.random().toString(36).slice(2);

	function cf(a) {
	  a[bf] || (a[bf] = !0, ba.forEach(function (b) {
	    Ye.has(b) || df(b, !1, a, null);
	    df(b, !0, a, null);
	  }));
	}

	function df(a, b, c, d) {
	  var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
	      f = c;
	  "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);

	  if (null !== d && !b && Ye.has(a)) {
	    if ("scroll" !== a) return;
	    e |= 2;
	    f = d;
	  }

	  var g = $e(f),
	      h = a + "__" + (b ? "capture" : "bubble");
	  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
	}

	function af(a, b, c, d) {
	  var e = Nc.get(b);

	  switch (void 0 === e ? 2 : e) {
	    case 0:
	      e = gd;
	      break;

	    case 1:
	      e = id;
	      break;

	    default:
	      e = hd;
	  }

	  c = e.bind(null, b, c, a);
	  e = void 0;
	  !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
	  d ? void 0 !== e ? a.addEventListener(b, c, {
	    capture: !0,
	    passive: e
	  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
	    passive: e
	  }) : a.addEventListener(b, c, !1);
	}

	function jd(a, b, c, d, e) {
	  var f = d;
	  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
	    if (null === d) return;
	    var g = d.tag;

	    if (3 === g || 4 === g) {
	      var h = d.stateNode.containerInfo;
	      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
	      if (4 === g) for (g = d.return; null !== g;) {
	        var k = g.tag;
	        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
	        g = g.return;
	      }

	      for (; null !== h;) {
	        g = wc(h);
	        if (null === g) return;
	        k = g.tag;

	        if (5 === k || 6 === k) {
	          d = f = g;
	          continue a;
	        }

	        h = h.parentNode;
	      }
	    }

	    d = d.return;
	  }
	  Nb(function () {
	    var d = f,
	        e = xb(c),
	        g = [];

	    a: {
	      var h = Mc.get(a);

	      if (void 0 !== h) {
	        var k = td,
	            x = a;

	        switch (a) {
	          case "keypress":
	            if (0 === od(c)) break a;

	          case "keydown":
	          case "keyup":
	            k = Rd;
	            break;

	          case "focusin":
	            x = "focus";
	            k = Fd;
	            break;

	          case "focusout":
	            x = "blur";
	            k = Fd;
	            break;

	          case "beforeblur":
	          case "afterblur":
	            k = Fd;
	            break;

	          case "click":
	            if (2 === c.button) break a;

	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            k = Bd;
	            break;

	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            k = Dd;
	            break;

	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            k = Vd;
	            break;

	          case Ic:
	          case Jc:
	          case Kc:
	            k = Hd;
	            break;

	          case Lc:
	            k = Xd;
	            break;

	          case "scroll":
	            k = vd;
	            break;

	          case "wheel":
	            k = Zd;
	            break;

	          case "copy":
	          case "cut":
	          case "paste":
	            k = Jd;
	            break;

	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            k = Td;
	        }

	        var w = 0 !== (b & 4),
	            z = !w && "scroll" === a,
	            u = w ? null !== h ? h + "Capture" : null : h;
	        w = [];

	        for (var t = d, q; null !== t;) {
	          q = t;
	          var v = q.stateNode;
	          5 === q.tag && null !== v && (q = v, null !== u && (v = Ob(t, u), null != v && w.push(ef(t, v, q))));
	          if (z) break;
	          t = t.return;
	        }

	        0 < w.length && (h = new k(h, x, null, c, e), g.push({
	          event: h,
	          listeners: w
	        }));
	      }
	    }

	    if (0 === (b & 7)) {
	      a: {
	        h = "mouseover" === a || "pointerover" === a;
	        k = "mouseout" === a || "pointerout" === a;
	        if (h && 0 === (b & 16) && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff])) break a;

	        if (k || h) {
	          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;

	          if (k) {
	            if (x = c.relatedTarget || c.toElement, k = d, x = x ? wc(x) : null, null !== x && (z = Zb(x), x !== z || 5 !== x.tag && 6 !== x.tag)) x = null;
	          } else k = null, x = d;

	          if (k !== x) {
	            w = Bd;
	            v = "onMouseLeave";
	            u = "onMouseEnter";
	            t = "mouse";
	            if ("pointerout" === a || "pointerover" === a) w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
	            z = null == k ? h : ue$1(k);
	            q = null == x ? h : ue$1(x);
	            h = new w(v, t + "leave", k, c, e);
	            h.target = z;
	            h.relatedTarget = q;
	            v = null;
	            wc(e) === d && (w = new w(u, t + "enter", x, c, e), w.target = q, w.relatedTarget = z, v = w);
	            z = v;
	            if (k && x) b: {
	              w = k;
	              u = x;
	              t = 0;

	              for (q = w; q; q = gf(q)) t++;

	              q = 0;

	              for (v = u; v; v = gf(v)) q++;

	              for (; 0 < t - q;) w = gf(w), t--;

	              for (; 0 < q - t;) u = gf(u), q--;

	              for (; t--;) {
	                if (w === u || null !== u && w === u.alternate) break b;
	                w = gf(w);
	                u = gf(u);
	              }

	              w = null;
	            } else w = null;
	            null !== k && hf(g, h, k, w, !1);
	            null !== x && null !== z && hf(g, z, x, w, !0);
	          }
	        }
	      }

	      a: {
	        h = d ? ue$1(d) : window;
	        k = h.nodeName && h.nodeName.toLowerCase();
	        if ("select" === k || "input" === k && "file" === h.type) var J = ve$1;else if (me(h)) {
	          if (we) J = Fe;else {
	            J = De;
	            var K = Ce;
	          }
	        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (J = Ee);

	        if (J && (J = J(a, d))) {
	          ne$1(g, J, c, e);
	          break a;
	        }

	        K && K(a, h, d);
	        "focusout" === a && (K = h._wrapperState) && K.controlled && "number" === h.type && bb(h, "number", h.value);
	      }

	      K = d ? ue$1(d) : window;

	      switch (a) {
	        case "focusin":
	          if (me(K) || "true" === K.contentEditable) Qe = K, Re = d, Se = null;
	          break;

	        case "focusout":
	          Se = Re = Qe = null;
	          break;

	        case "mousedown":
	          Te = !0;
	          break;

	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          Te = !1;
	          Ue(g, c, e);
	          break;

	        case "selectionchange":
	          if (Pe) break;

	        case "keydown":
	        case "keyup":
	          Ue(g, c, e);
	      }

	      var Q;
	      if (ae$1) b: {
	        switch (a) {
	          case "compositionstart":
	            var L = "onCompositionStart";
	            break b;

	          case "compositionend":
	            L = "onCompositionEnd";
	            break b;

	          case "compositionupdate":
	            L = "onCompositionUpdate";
	            break b;
	        }

	        L = void 0;
	      } else ie$1 ? ge(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
	      L && (de && "ko" !== c.locale && (ie$1 || "onCompositionStart" !== L ? "onCompositionEnd" === L && ie$1 && (Q = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = !0)), K = oe$1(d, L), 0 < K.length && (L = new Ld(L, a, null, c, e), g.push({
	        event: L,
	        listeners: K
	      }), Q ? L.data = Q : (Q = he$1(c), null !== Q && (L.data = Q))));
	      if (Q = ce$1 ? je(a, c) : ke(a, c)) d = oe$1(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	        event: e,
	        listeners: d
	      }), e.data = Q);
	    }

	    se$1(g, b);
	  });
	}

	function ef(a, b, c) {
	  return {
	    instance: a,
	    listener: b,
	    currentTarget: c
	  };
	}

	function oe$1(a, b) {
	  for (var c = b + "Capture", d = []; null !== a;) {
	    var e = a,
	        f = e.stateNode;
	    5 === e.tag && null !== f && (e = f, f = Ob(a, c), null != f && d.unshift(ef(a, f, e)), f = Ob(a, b), null != f && d.push(ef(a, f, e)));
	    a = a.return;
	  }

	  return d;
	}

	function gf(a) {
	  if (null === a) return null;

	  do a = a.return; while (a && 5 !== a.tag);

	  return a ? a : null;
	}

	function hf(a, b, c, d, e) {
	  for (var f = b._reactName, g = []; null !== c && c !== d;) {
	    var h = c,
	        k = h.alternate,
	        l = h.stateNode;
	    if (null !== k && k === d) break;
	    5 === h.tag && null !== l && (h = l, e ? (k = Ob(c, f), null != k && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), null != k && g.push(ef(c, k, h))));
	    c = c.return;
	  }

	  0 !== g.length && a.push({
	    event: b,
	    listeners: g
	  });
	}

	function jf() {}

	var kf = null,
	    lf = null;

	function mf(a, b) {
	  switch (a) {
	    case "button":
	    case "input":
	    case "select":
	    case "textarea":
	      return !!b.autoFocus;
	  }

	  return !1;
	}

	function nf(a, b) {
	  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}

	var of = "function" === typeof setTimeout ? setTimeout : void 0,
	    pf = "function" === typeof clearTimeout ? clearTimeout : void 0;

	function qf(a) {
	  1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
	}

	function rf(a) {
	  for (; null != a; a = a.nextSibling) {
	    var b = a.nodeType;
	    if (1 === b || 3 === b) break;
	  }

	  return a;
	}

	function sf(a) {
	  a = a.previousSibling;

	  for (var b = 0; a;) {
	    if (8 === a.nodeType) {
	      var c = a.data;

	      if ("$" === c || "$!" === c || "$?" === c) {
	        if (0 === b) return a;
	        b--;
	      } else "/$" === c && b++;
	    }

	    a = a.previousSibling;
	  }

	  return null;
	}

	var tf = 0;

	function uf(a) {
	  return {
	    $$typeof: Ga,
	    toString: a,
	    valueOf: a
	  };
	}

	var vf = Math.random().toString(36).slice(2),
	    wf = "__reactFiber$" + vf,
	    xf = "__reactProps$" + vf,
	    ff = "__reactContainer$" + vf,
	    yf = "__reactEvents$" + vf;

	function wc(a) {
	  var b = a[wf];
	  if (b) return b;

	  for (var c = a.parentNode; c;) {
	    if (b = c[ff] || c[wf]) {
	      c = b.alternate;
	      if (null !== b.child || null !== c && null !== c.child) for (a = sf(a); null !== a;) {
	        if (c = a[wf]) return c;
	        a = sf(a);
	      }
	      return b;
	    }

	    a = c;
	    c = a.parentNode;
	  }

	  return null;
	}

	function Cb(a) {
	  a = a[wf] || a[ff];
	  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}

	function ue$1(a) {
	  if (5 === a.tag || 6 === a.tag) return a.stateNode;
	  throw Error(y$2(33));
	}

	function Db(a) {
	  return a[xf] || null;
	}

	function $e(a) {
	  var b = a[yf];
	  void 0 === b && (b = a[yf] = new Set());
	  return b;
	}

	var zf = [],
	    Af = -1;

	function Bf(a) {
	  return {
	    current: a
	  };
	}

	function H$1(a) {
	  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
	}

	function I$1(a, b) {
	  Af++;
	  zf[Af] = a.current;
	  a.current = b;
	}

	var Cf = {},
	    M$1 = Bf(Cf),
	    N$1 = Bf(!1),
	    Df = Cf;

	function Ef(a, b) {
	  var c = a.type.contextTypes;
	  if (!c) return Cf;
	  var d = a.stateNode;
	  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	  var e = {},
	      f;

	  for (f in c) e[f] = b[f];

	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	  return e;
	}

	function Ff(a) {
	  a = a.childContextTypes;
	  return null !== a && void 0 !== a;
	}

	function Gf() {
	  H$1(N$1);
	  H$1(M$1);
	}

	function Hf(a, b, c) {
	  if (M$1.current !== Cf) throw Error(y$2(168));
	  I$1(M$1, b);
	  I$1(N$1, c);
	}

	function If(a, b, c) {
	  var d = a.stateNode;
	  a = b.childContextTypes;
	  if ("function" !== typeof d.getChildContext) return c;
	  d = d.getChildContext();

	  for (var e in d) if (!(e in a)) throw Error(y$2(108, Ra(b) || "Unknown", e));

	  return objectAssign({}, c, d);
	}

	function Jf(a) {
	  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
	  Df = M$1.current;
	  I$1(M$1, a);
	  I$1(N$1, N$1.current);
	  return !0;
	}

	function Kf(a, b, c) {
	  var d = a.stateNode;
	  if (!d) throw Error(y$2(169));
	  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H$1(N$1), H$1(M$1), I$1(M$1, a)) : H$1(N$1);
	  I$1(N$1, c);
	}

	var Lf = null,
	    Mf = null,
	    Nf = scheduler.unstable_runWithPriority,
	    Of = scheduler.unstable_scheduleCallback,
	    Pf = scheduler.unstable_cancelCallback,
	    Qf = scheduler.unstable_shouldYield,
	    Rf = scheduler.unstable_requestPaint,
	    Sf = scheduler.unstable_now,
	    Tf = scheduler.unstable_getCurrentPriorityLevel,
	    Uf = scheduler.unstable_ImmediatePriority,
	    Vf = scheduler.unstable_UserBlockingPriority,
	    Wf = scheduler.unstable_NormalPriority,
	    Xf = scheduler.unstable_LowPriority,
	    Yf = scheduler.unstable_IdlePriority,
	    Zf = {},
	    $f = void 0 !== Rf ? Rf : function () {},
	    ag = null,
	    bg = null,
	    cg = !1,
	    dg = Sf(),
	    O$1 = 1E4 > dg ? Sf : function () {
	  return Sf() - dg;
	};

	function eg() {
	  switch (Tf()) {
	    case Uf:
	      return 99;

	    case Vf:
	      return 98;

	    case Wf:
	      return 97;

	    case Xf:
	      return 96;

	    case Yf:
	      return 95;

	    default:
	      throw Error(y$2(332));
	  }
	}

	function fg(a) {
	  switch (a) {
	    case 99:
	      return Uf;

	    case 98:
	      return Vf;

	    case 97:
	      return Wf;

	    case 96:
	      return Xf;

	    case 95:
	      return Yf;

	    default:
	      throw Error(y$2(332));
	  }
	}

	function gg(a, b) {
	  a = fg(a);
	  return Nf(a, b);
	}

	function hg(a, b, c) {
	  a = fg(a);
	  return Of(a, b, c);
	}

	function ig() {
	  if (null !== bg) {
	    var a = bg;
	    bg = null;
	    Pf(a);
	  }

	  jg();
	}

	function jg() {
	  if (!cg && null !== ag) {
	    cg = !0;
	    var a = 0;

	    try {
	      var b = ag;
	      gg(99, function () {
	        for (; a < b.length; a++) {
	          var c = b[a];

	          do c = c(!0); while (null !== c);
	        }
	      });
	      ag = null;
	    } catch (c) {
	      throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
	    } finally {
	      cg = !1;
	    }
	  }
	}

	var kg = ra.ReactCurrentBatchConfig;

	function lg(a, b) {
	  if (a && a.defaultProps) {
	    b = objectAssign({}, b);
	    a = a.defaultProps;

	    for (var c in a) void 0 === b[c] && (b[c] = a[c]);

	    return b;
	  }

	  return b;
	}

	var mg = Bf(null),
	    ng = null,
	    og = null,
	    pg = null;

	function qg() {
	  pg = og = ng = null;
	}

	function rg(a) {
	  var b = mg.current;
	  H$1(mg);
	  a.type._context._currentValue = b;
	}

	function sg(a, b) {
	  for (; null !== a;) {
	    var c = a.alternate;
	    if ((a.childLanes & b) === b) {
	      if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
	    } else a.childLanes |= b, null !== c && (c.childLanes |= b);
	    a = a.return;
	  }
	}

	function tg(a, b) {
	  ng = a;
	  pg = og = null;
	  a = a.dependencies;
	  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = !0), a.firstContext = null);
	}

	function vg(a, b) {
	  if (pg !== a && !1 !== b && 0 !== b) {
	    if ("number" !== typeof b || 1073741823 === b) pg = a, b = 1073741823;
	    b = {
	      context: a,
	      observedBits: b,
	      next: null
	    };

	    if (null === og) {
	      if (null === ng) throw Error(y$2(308));
	      og = b;
	      ng.dependencies = {
	        lanes: 0,
	        firstContext: b,
	        responders: null
	      };
	    } else og = og.next = b;
	  }

	  return a._currentValue;
	}

	var wg = !1;

	function xg(a) {
	  a.updateQueue = {
	    baseState: a.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: {
	      pending: null
	    },
	    effects: null
	  };
	}

	function yg(a, b) {
	  a = a.updateQueue;
	  b.updateQueue === a && (b.updateQueue = {
	    baseState: a.baseState,
	    firstBaseUpdate: a.firstBaseUpdate,
	    lastBaseUpdate: a.lastBaseUpdate,
	    shared: a.shared,
	    effects: a.effects
	  });
	}

	function zg(a, b) {
	  return {
	    eventTime: a,
	    lane: b,
	    tag: 0,
	    payload: null,
	    callback: null,
	    next: null
	  };
	}

	function Ag(a, b) {
	  a = a.updateQueue;

	  if (null !== a) {
	    a = a.shared;
	    var c = a.pending;
	    null === c ? b.next = b : (b.next = c.next, c.next = b);
	    a.pending = b;
	  }
	}

	function Bg(a, b) {
	  var c = a.updateQueue,
	      d = a.alternate;

	  if (null !== d && (d = d.updateQueue, c === d)) {
	    var e = null,
	        f = null;
	    c = c.firstBaseUpdate;

	    if (null !== c) {
	      do {
	        var g = {
	          eventTime: c.eventTime,
	          lane: c.lane,
	          tag: c.tag,
	          payload: c.payload,
	          callback: c.callback,
	          next: null
	        };
	        null === f ? e = f = g : f = f.next = g;
	        c = c.next;
	      } while (null !== c);

	      null === f ? e = f = b : f = f.next = b;
	    } else e = f = b;

	    c = {
	      baseState: d.baseState,
	      firstBaseUpdate: e,
	      lastBaseUpdate: f,
	      shared: d.shared,
	      effects: d.effects
	    };
	    a.updateQueue = c;
	    return;
	  }

	  a = c.lastBaseUpdate;
	  null === a ? c.firstBaseUpdate = b : a.next = b;
	  c.lastBaseUpdate = b;
	}

	function Cg(a, b, c, d) {
	  var e = a.updateQueue;
	  wg = !1;
	  var f = e.firstBaseUpdate,
	      g = e.lastBaseUpdate,
	      h = e.shared.pending;

	  if (null !== h) {
	    e.shared.pending = null;
	    var k = h,
	        l = k.next;
	    k.next = null;
	    null === g ? f = l : g.next = l;
	    g = k;
	    var n = a.alternate;

	    if (null !== n) {
	      n = n.updateQueue;
	      var A = n.lastBaseUpdate;
	      A !== g && (null === A ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
	    }
	  }

	  if (null !== f) {
	    A = e.baseState;
	    g = 0;
	    n = l = k = null;

	    do {
	      h = f.lane;
	      var p = f.eventTime;

	      if ((d & h) === h) {
	        null !== n && (n = n.next = {
	          eventTime: p,
	          lane: 0,
	          tag: f.tag,
	          payload: f.payload,
	          callback: f.callback,
	          next: null
	        });

	        a: {
	          var C = a,
	              x = f;
	          h = b;
	          p = c;

	          switch (x.tag) {
	            case 1:
	              C = x.payload;

	              if ("function" === typeof C) {
	                A = C.call(p, A, h);
	                break a;
	              }

	              A = C;
	              break a;

	            case 3:
	              C.flags = C.flags & -4097 | 64;

	            case 0:
	              C = x.payload;
	              h = "function" === typeof C ? C.call(p, A, h) : C;
	              if (null === h || void 0 === h) break a;
	              A = objectAssign({}, A, h);
	              break a;

	            case 2:
	              wg = !0;
	          }
	        }

	        null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
	      } else p = {
	        eventTime: p,
	        lane: h,
	        tag: f.tag,
	        payload: f.payload,
	        callback: f.callback,
	        next: null
	      }, null === n ? (l = n = p, k = A) : n = n.next = p, g |= h;

	      f = f.next;
	      if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
	    } while (1);

	    null === n && (k = A);
	    e.baseState = k;
	    e.firstBaseUpdate = l;
	    e.lastBaseUpdate = n;
	    Dg |= g;
	    a.lanes = g;
	    a.memoizedState = A;
	  }
	}

	function Eg(a, b, c) {
	  a = b.effects;
	  b.effects = null;
	  if (null !== a) for (b = 0; b < a.length; b++) {
	    var d = a[b],
	        e = d.callback;

	    if (null !== e) {
	      d.callback = null;
	      d = c;
	      if ("function" !== typeof e) throw Error(y$2(191, e));
	      e.call(d);
	    }
	  }
	}

	var Fg = new react.Component().refs;

	function Gg(a, b, c, d) {
	  b = a.memoizedState;
	  c = c(d, b);
	  c = null === c || void 0 === c ? b : objectAssign({}, b, c);
	  a.memoizedState = c;
	  0 === a.lanes && (a.updateQueue.baseState = c);
	}

	var Kg = {
	  isMounted: function (a) {
	    return (a = a._reactInternals) ? Zb(a) === a : !1;
	  },
	  enqueueSetState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	        e = Ig(a),
	        f = zg(d, e);
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueReplaceState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	        e = Ig(a),
	        f = zg(d, e);
	    f.tag = 1;
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueForceUpdate: function (a, b) {
	    a = a._reactInternals;
	    var c = Hg(),
	        d = Ig(a),
	        e = zg(c, d);
	    e.tag = 2;
	    void 0 !== b && null !== b && (e.callback = b);
	    Ag(a, e);
	    Jg(a, d, c);
	  }
	};

	function Lg(a, b, c, d, e, f, g) {
	  a = a.stateNode;
	  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : !0;
	}

	function Mg(a, b, c) {
	  var d = !1,
	      e = Cf;
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? f = vg(f) : (e = Ff(b) ? Df : M$1.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
	  b = new b(c, f);
	  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	  b.updater = Kg;
	  a.stateNode = b;
	  b._reactInternals = a;
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	  return b;
	}

	function Ng(a, b, c, d) {
	  a = b.state;
	  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
	}

	function Og(a, b, c, d) {
	  var e = a.stateNode;
	  e.props = c;
	  e.state = a.memoizedState;
	  e.refs = Fg;
	  xg(a);
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? e.context = vg(f) : (f = Ff(b) ? Df : M$1.current, e.context = Ef(a, f));
	  Cg(a, c, e, d);
	  e.state = a.memoizedState;
	  f = b.getDerivedStateFromProps;
	  "function" === typeof f && (Gg(a, b, f, c), e.state = a.memoizedState);
	  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
	  "function" === typeof e.componentDidMount && (a.flags |= 4);
	}

	var Pg = Array.isArray;

	function Qg(a, b, c) {
	  a = c.ref;

	  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	    if (c._owner) {
	      c = c._owner;

	      if (c) {
	        if (1 !== c.tag) throw Error(y$2(309));
	        var d = c.stateNode;
	      }

	      if (!d) throw Error(y$2(147, a));
	      var e = "" + a;
	      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

	      b = function (a) {
	        var b = d.refs;
	        b === Fg && (b = d.refs = {});
	        null === a ? delete b[e] : b[e] = a;
	      };

	      b._stringRef = e;
	      return b;
	    }

	    if ("string" !== typeof a) throw Error(y$2(284));
	    if (!c._owner) throw Error(y$2(290, a));
	  }

	  return a;
	}

	function Rg(a, b) {
	  if ("textarea" !== a.type) throw Error(y$2(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
	}

	function Sg(a) {
	  function b(b, c) {
	    if (a) {
	      var d = b.lastEffect;
	      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
	      c.nextEffect = null;
	      c.flags = 8;
	    }
	  }

	  function c(c, d) {
	    if (!a) return null;

	    for (; null !== d;) b(c, d), d = d.sibling;

	    return null;
	  }

	  function d(a, b) {
	    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;

	    return a;
	  }

	  function e(a, b) {
	    a = Tg(a, b);
	    a.index = 0;
	    a.sibling = null;
	    return a;
	  }

	  function f(b, c, d) {
	    b.index = d;
	    if (!a) return c;
	    d = b.alternate;
	    if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
	    b.flags = 2;
	    return c;
	  }

	  function g(b) {
	    a && null === b.alternate && (b.flags = 2);
	    return b;
	  }

	  function h(a, b, c, d) {
	    if (null === b || 6 !== b.tag) return b = Ug(c, a.mode, d), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }

	  function k(a, b, c, d) {
	    if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Qg(a, b, c), d.return = a, d;
	    d = Vg(c.type, c.key, c.props, null, a.mode, d);
	    d.ref = Qg(a, b, c);
	    d.return = a;
	    return d;
	  }

	  function l(a, b, c, d) {
	    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Wg(c, a.mode, d), b.return = a, b;
	    b = e(b, c.children || []);
	    b.return = a;
	    return b;
	  }

	  function n(a, b, c, d, f) {
	    if (null === b || 7 !== b.tag) return b = Xg(c, a.mode, d, f), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }

	  function A(a, b, c) {
	    if ("string" === typeof b || "number" === typeof b) return b = Ug("" + b, a.mode, c), b.return = a, b;

	    if ("object" === typeof b && null !== b) {
	      switch (b.$$typeof) {
	        case sa:
	          return c = Vg(b.type, b.key, b.props, null, a.mode, c), c.ref = Qg(a, null, b), c.return = a, c;

	        case ta:
	          return b = Wg(b, a.mode, c), b.return = a, b;
	      }

	      if (Pg(b) || La(b)) return b = Xg(b, a.mode, c, null), b.return = a, b;
	      Rg(a, b);
	    }

	    return null;
	  }

	  function p(a, b, c, d) {
	    var e = null !== b ? b.key : null;
	    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

	    if ("object" === typeof c && null !== c) {
	      switch (c.$$typeof) {
	        case sa:
	          return c.key === e ? c.type === ua ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

	        case ta:
	          return c.key === e ? l(a, b, c, d) : null;
	      }

	      if (Pg(c) || La(c)) return null !== e ? null : n(a, b, c, d, null);
	      Rg(a, c);
	    }

	    return null;
	  }

	  function C(a, b, c, d, e) {
	    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

	    if ("object" === typeof d && null !== d) {
	      switch (d.$$typeof) {
	        case sa:
	          return a = a.get(null === d.key ? c : d.key) || null, d.type === ua ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

	        case ta:
	          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	      }

	      if (Pg(d) || La(d)) return a = a.get(c) || null, n(b, a, d, e, null);
	      Rg(b, d);
	    }

	    return null;
	  }

	  function x(e, g, h, k) {
	    for (var l = null, t = null, u = g, z = g = 0, q = null; null !== u && z < h.length; z++) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var n = p(e, u, h[z], k);

	      if (null === n) {
	        null === u && (u = q);
	        break;
	      }

	      a && u && null === n.alternate && b(e, u);
	      g = f(n, g, z);
	      null === t ? l = n : t.sibling = n;
	      t = n;
	      u = q;
	    }

	    if (z === h.length) return c(e, u), l;

	    if (null === u) {
	      for (; z < h.length; z++) u = A(e, h[z], k), null !== u && (g = f(u, g, z), null === t ? l = u : t.sibling = u, t = u);

	      return l;
	    }

	    for (u = d(e, u); z < h.length; z++) q = C(u, e, z, h[z], k), null !== q && (a && null !== q.alternate && u.delete(null === q.key ? z : q.key), g = f(q, g, z), null === t ? l = q : t.sibling = q, t = q);

	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }

	  function w(e, g, h, k) {
	    var l = La(h);
	    if ("function" !== typeof l) throw Error(y$2(150));
	    h = l.call(h);
	    if (null == h) throw Error(y$2(151));

	    for (var t = l = null, u = g, z = g = 0, q = null, n = h.next(); null !== u && !n.done; z++, n = h.next()) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var w = p(e, u, n.value, k);

	      if (null === w) {
	        null === u && (u = q);
	        break;
	      }

	      a && u && null === w.alternate && b(e, u);
	      g = f(w, g, z);
	      null === t ? l = w : t.sibling = w;
	      t = w;
	      u = q;
	    }

	    if (n.done) return c(e, u), l;

	    if (null === u) {
	      for (; !n.done; z++, n = h.next()) n = A(e, n.value, k), null !== n && (g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);

	      return l;
	    }

	    for (u = d(e, u); !n.done; z++, n = h.next()) n = C(u, e, z, n.value, k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? z : n.key), g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);

	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }

	  return function (a, d, f, h) {
	    var k = "object" === typeof f && null !== f && f.type === ua && null === f.key;
	    k && (f = f.props.children);
	    var l = "object" === typeof f && null !== f;
	    if (l) switch (f.$$typeof) {
	      case sa:
	        a: {
	          l = f.key;

	          for (k = d; null !== k;) {
	            if (k.key === l) {
	              switch (k.tag) {
	                case 7:
	                  if (f.type === ua) {
	                    c(a, k.sibling);
	                    d = e(k, f.props.children);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }

	                  break;

	                default:
	                  if (k.elementType === f.type) {
	                    c(a, k.sibling);
	                    d = e(k, f.props);
	                    d.ref = Qg(a, k, f);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }

	              }

	              c(a, k);
	              break;
	            } else b(a, k);

	            k = k.sibling;
	          }

	          f.type === ua ? (d = Xg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Vg(f.type, f.key, f.props, null, a.mode, h), h.ref = Qg(a, d, f), h.return = a, a = h);
	        }

	        return g(a);

	      case ta:
	        a: {
	          for (k = f.key; null !== d;) {
	            if (d.key === k) {
	              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                c(a, d.sibling);
	                d = e(d, f.children || []);
	                d.return = a;
	                a = d;
	                break a;
	              } else {
	                c(a, d);
	                break;
	              }
	            } else b(a, d);
	            d = d.sibling;
	          }

	          d = Wg(f, a.mode, h);
	          d.return = a;
	          a = d;
	        }

	        return g(a);
	    }
	    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Ug(f, a.mode, h), d.return = a, a = d), g(a);
	    if (Pg(f)) return x(a, d, f, h);
	    if (La(f)) return w(a, d, f, h);
	    l && Rg(a, f);
	    if ("undefined" === typeof f && !k) switch (a.tag) {
	      case 1:
	      case 22:
	      case 0:
	      case 11:
	      case 15:
	        throw Error(y$2(152, Ra(a.type) || "Component"));
	    }
	    return c(a, d);
	  };
	}

	var Yg = Sg(!0),
	    Zg = Sg(!1),
	    $g = {},
	    ah = Bf($g),
	    bh = Bf($g),
	    ch = Bf($g);

	function dh(a) {
	  if (a === $g) throw Error(y$2(174));
	  return a;
	}

	function eh(a, b) {
	  I$1(ch, b);
	  I$1(bh, a);
	  I$1(ah, $g);
	  a = b.nodeType;

	  switch (a) {
	    case 9:
	    case 11:
	      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
	      break;

	    default:
	      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
	  }

	  H$1(ah);
	  I$1(ah, b);
	}

	function fh() {
	  H$1(ah);
	  H$1(bh);
	  H$1(ch);
	}

	function gh(a) {
	  dh(ch.current);
	  var b = dh(ah.current);
	  var c = mb(b, a.type);
	  b !== c && (I$1(bh, a), I$1(ah, c));
	}

	function hh(a) {
	  bh.current === a && (H$1(ah), H$1(bh));
	}

	var P$1 = Bf(0);

	function ih(a) {
	  for (var b = a; null !== b;) {
	    if (13 === b.tag) {
	      var c = b.memoizedState;
	      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	      if (0 !== (b.flags & 64)) return b;
	    } else if (null !== b.child) {
	      b.child.return = b;
	      b = b.child;
	      continue;
	    }

	    if (b === a) break;

	    for (; null === b.sibling;) {
	      if (null === b.return || b.return === a) return null;
	      b = b.return;
	    }

	    b.sibling.return = b.return;
	    b = b.sibling;
	  }

	  return null;
	}

	var jh = null,
	    kh = null,
	    lh = !1;

	function mh(a, b) {
	  var c = nh(5, null, null, 0);
	  c.elementType = "DELETED";
	  c.type = "DELETED";
	  c.stateNode = b;
	  c.return = a;
	  c.flags = 8;
	  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
	}

	function oh(a, b) {
	  switch (a.tag) {
	    case 5:
	      var c = a.type;
	      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	      return null !== b ? (a.stateNode = b, !0) : !1;

	    case 6:
	      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

	    case 13:
	      return !1;

	    default:
	      return !1;
	  }
	}

	function ph(a) {
	  if (lh) {
	    var b = kh;

	    if (b) {
	      var c = b;

	      if (!oh(a, b)) {
	        b = rf(c.nextSibling);

	        if (!b || !oh(a, b)) {
	          a.flags = a.flags & -1025 | 2;
	          lh = !1;
	          jh = a;
	          return;
	        }

	        mh(jh, c);
	      }

	      jh = a;
	      kh = rf(b.firstChild);
	    } else a.flags = a.flags & -1025 | 2, lh = !1, jh = a;
	  }
	}

	function qh(a) {
	  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;

	  jh = a;
	}

	function rh(a) {
	  if (a !== jh) return !1;
	  if (!lh) return qh(a), lh = !0, !1;
	  var b = a.type;
	  if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps)) for (b = kh; b;) mh(a, b), b = rf(b.nextSibling);
	  qh(a);

	  if (13 === a.tag) {
	    a = a.memoizedState;
	    a = null !== a ? a.dehydrated : null;
	    if (!a) throw Error(y$2(317));

	    a: {
	      a = a.nextSibling;

	      for (b = 0; a;) {
	        if (8 === a.nodeType) {
	          var c = a.data;

	          if ("/$" === c) {
	            if (0 === b) {
	              kh = rf(a.nextSibling);
	              break a;
	            }

	            b--;
	          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	        }

	        a = a.nextSibling;
	      }

	      kh = null;
	    }
	  } else kh = jh ? rf(a.stateNode.nextSibling) : null;

	  return !0;
	}

	function sh() {
	  kh = jh = null;
	  lh = !1;
	}

	var th = [];

	function uh() {
	  for (var a = 0; a < th.length; a++) th[a]._workInProgressVersionPrimary = null;

	  th.length = 0;
	}

	var vh = ra.ReactCurrentDispatcher,
	    wh = ra.ReactCurrentBatchConfig,
	    xh = 0,
	    R$1 = null,
	    S$1 = null,
	    T$1 = null,
	    yh = !1,
	    zh = !1;

	function Ah() {
	  throw Error(y$2(321));
	}

	function Bh(a, b) {
	  if (null === b) return !1;

	  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;

	  return !0;
	}

	function Ch(a, b, c, d, e, f) {
	  xh = f;
	  R$1 = b;
	  b.memoizedState = null;
	  b.updateQueue = null;
	  b.lanes = 0;
	  vh.current = null === a || null === a.memoizedState ? Dh : Eh;
	  a = c(d, e);

	  if (zh) {
	    f = 0;

	    do {
	      zh = !1;
	      if (!(25 > f)) throw Error(y$2(301));
	      f += 1;
	      T$1 = S$1 = null;
	      b.updateQueue = null;
	      vh.current = Fh;
	      a = c(d, e);
	    } while (zh);
	  }

	  vh.current = Gh;
	  b = null !== S$1 && null !== S$1.next;
	  xh = 0;
	  T$1 = S$1 = R$1 = null;
	  yh = !1;
	  if (b) throw Error(y$2(300));
	  return a;
	}

	function Hh() {
	  var a = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === T$1 ? R$1.memoizedState = T$1 = a : T$1 = T$1.next = a;
	  return T$1;
	}

	function Ih() {
	  if (null === S$1) {
	    var a = R$1.alternate;
	    a = null !== a ? a.memoizedState : null;
	  } else a = S$1.next;

	  var b = null === T$1 ? R$1.memoizedState : T$1.next;
	  if (null !== b) T$1 = b, S$1 = a;else {
	    if (null === a) throw Error(y$2(310));
	    S$1 = a;
	    a = {
	      memoizedState: S$1.memoizedState,
	      baseState: S$1.baseState,
	      baseQueue: S$1.baseQueue,
	      queue: S$1.queue,
	      next: null
	    };
	    null === T$1 ? R$1.memoizedState = T$1 = a : T$1 = T$1.next = a;
	  }
	  return T$1;
	}

	function Jh(a, b) {
	  return "function" === typeof b ? b(a) : b;
	}

	function Kh(a) {
	  var b = Ih(),
	      c = b.queue;
	  if (null === c) throw Error(y$2(311));
	  c.lastRenderedReducer = a;
	  var d = S$1,
	      e = d.baseQueue,
	      f = c.pending;

	  if (null !== f) {
	    if (null !== e) {
	      var g = e.next;
	      e.next = f.next;
	      f.next = g;
	    }

	    d.baseQueue = e = f;
	    c.pending = null;
	  }

	  if (null !== e) {
	    e = e.next;
	    d = d.baseState;
	    var h = g = f = null,
	        k = e;

	    do {
	      var l = k.lane;
	      if ((xh & l) === l) null !== h && (h = h.next = {
	        lane: 0,
	        action: k.action,
	        eagerReducer: k.eagerReducer,
	        eagerState: k.eagerState,
	        next: null
	      }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
	        var n = {
	          lane: l,
	          action: k.action,
	          eagerReducer: k.eagerReducer,
	          eagerState: k.eagerState,
	          next: null
	        };
	        null === h ? (g = h = n, f = d) : h = h.next = n;
	        R$1.lanes |= l;
	        Dg |= l;
	      }
	      k = k.next;
	    } while (null !== k && k !== e);

	    null === h ? f = d : h.next = g;
	    He(d, b.memoizedState) || (ug = !0);
	    b.memoizedState = d;
	    b.baseState = f;
	    b.baseQueue = h;
	    c.lastRenderedState = d;
	  }

	  return [b.memoizedState, c.dispatch];
	}

	function Lh(a) {
	  var b = Ih(),
	      c = b.queue;
	  if (null === c) throw Error(y$2(311));
	  c.lastRenderedReducer = a;
	  var d = c.dispatch,
	      e = c.pending,
	      f = b.memoizedState;

	  if (null !== e) {
	    c.pending = null;
	    var g = e = e.next;

	    do f = a(f, g.action), g = g.next; while (g !== e);

	    He(f, b.memoizedState) || (ug = !0);
	    b.memoizedState = f;
	    null === b.baseQueue && (b.baseState = f);
	    c.lastRenderedState = f;
	  }

	  return [f, d];
	}

	function Mh(a, b, c) {
	  var d = b._getVersion;
	  d = d(b._source);
	  var e = b._workInProgressVersionPrimary;
	  if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (xh & a) === a) b._workInProgressVersionPrimary = d, th.push(b);
	  if (a) return c(b._source);
	  th.push(b);
	  throw Error(y$2(350));
	}

	function Nh(a, b, c, d) {
	  var e = U$1;
	  if (null === e) throw Error(y$2(349));
	  var f = b._getVersion,
	      g = f(b._source),
	      h = vh.current,
	      k = h.useState(function () {
	    return Mh(e, b, c);
	  }),
	      l = k[1],
	      n = k[0];
	  k = T$1;
	  var A = a.memoizedState,
	      p = A.refs,
	      C = p.getSnapshot,
	      x = A.source;
	  A = A.subscribe;
	  var w = R$1;
	  a.memoizedState = {
	    refs: p,
	    source: b,
	    subscribe: d
	  };
	  h.useEffect(function () {
	    p.getSnapshot = c;
	    p.setSnapshot = l;
	    var a = f(b._source);

	    if (!He(g, a)) {
	      a = c(b._source);
	      He(n, a) || (l(a), a = Ig(w), e.mutableReadLanes |= a & e.pendingLanes);
	      a = e.mutableReadLanes;
	      e.entangledLanes |= a;

	      for (var d = e.entanglements, h = a; 0 < h;) {
	        var k = 31 - Vc(h),
	            v = 1 << k;
	        d[k] |= a;
	        h &= ~v;
	      }
	    }
	  }, [c, b, d]);
	  h.useEffect(function () {
	    return d(b._source, function () {
	      var a = p.getSnapshot,
	          c = p.setSnapshot;

	      try {
	        c(a(b._source));
	        var d = Ig(w);
	        e.mutableReadLanes |= d & e.pendingLanes;
	      } catch (q) {
	        c(function () {
	          throw q;
	        });
	      }
	    });
	  }, [b, d]);
	  He(C, c) && He(x, b) && He(A, d) || (a = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: n
	  }, a.dispatch = l = Oh.bind(null, R$1, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
	  return n;
	}

	function Ph(a, b, c) {
	  var d = Ih();
	  return Nh(d, a, b, c);
	}

	function Qh(a) {
	  var b = Hh();
	  "function" === typeof a && (a = a());
	  b.memoizedState = b.baseState = a;
	  a = b.queue = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: a
	  };
	  a = a.dispatch = Oh.bind(null, R$1, a);
	  return [b.memoizedState, a];
	}

	function Rh(a, b, c, d) {
	  a = {
	    tag: a,
	    create: b,
	    destroy: c,
	    deps: d,
	    next: null
	  };
	  b = R$1.updateQueue;
	  null === b ? (b = {
	    lastEffect: null
	  }, R$1.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	  return a;
	}

	function Sh(a) {
	  var b = Hh();
	  a = {
	    current: a
	  };
	  return b.memoizedState = a;
	}

	function Th() {
	  return Ih().memoizedState;
	}

	function Uh(a, b, c, d) {
	  var e = Hh();
	  R$1.flags |= a;
	  e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
	}

	function Vh(a, b, c, d) {
	  var e = Ih();
	  d = void 0 === d ? null : d;
	  var f = void 0;

	  if (null !== S$1) {
	    var g = S$1.memoizedState;
	    f = g.destroy;

	    if (null !== d && Bh(d, g.deps)) {
	      Rh(b, c, f, d);
	      return;
	    }
	  }

	  R$1.flags |= a;
	  e.memoizedState = Rh(1 | b, c, f, d);
	}

	function Wh(a, b) {
	  return Uh(516, 4, a, b);
	}

	function Xh(a, b) {
	  return Vh(516, 4, a, b);
	}

	function Yh(a, b) {
	  return Vh(4, 2, a, b);
	}

	function Zh(a, b) {
	  if ("function" === typeof b) return a = a(), b(a), function () {
	    b(null);
	  };
	  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	    b.current = null;
	  };
	}

	function $h(a, b, c) {
	  c = null !== c && void 0 !== c ? c.concat([a]) : null;
	  return Vh(4, 2, Zh.bind(null, b, a), c);
	}

	function ai() {}

	function bi(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  c.memoizedState = [a, b];
	  return a;
	}

	function ci(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  a = a();
	  c.memoizedState = [a, b];
	  return a;
	}

	function di(a, b) {
	  var c = eg();
	  gg(98 > c ? 98 : c, function () {
	    a(!0);
	  });
	  gg(97 < c ? 97 : c, function () {
	    var c = wh.transition;
	    wh.transition = 1;

	    try {
	      a(!1), b();
	    } finally {
	      wh.transition = c;
	    }
	  });
	}

	function Oh(a, b, c) {
	  var d = Hg(),
	      e = Ig(a),
	      f = {
	    lane: e,
	    action: c,
	    eagerReducer: null,
	    eagerState: null,
	    next: null
	  },
	      g = b.pending;
	  null === g ? f.next = f : (f.next = g.next, g.next = f);
	  b.pending = f;
	  g = a.alternate;
	  if (a === R$1 || null !== g && g === R$1) zh = yh = !0;else {
	    if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
	      var h = b.lastRenderedState,
	          k = g(h, c);
	      f.eagerReducer = g;
	      f.eagerState = k;
	      if (He(k, h)) return;
	    } catch (l) {} finally {}
	    Jg(a, e, d);
	  }
	}

	var Gh = {
	  readContext: vg,
	  useCallback: Ah,
	  useContext: Ah,
	  useEffect: Ah,
	  useImperativeHandle: Ah,
	  useLayoutEffect: Ah,
	  useMemo: Ah,
	  useReducer: Ah,
	  useRef: Ah,
	  useState: Ah,
	  useDebugValue: Ah,
	  useDeferredValue: Ah,
	  useTransition: Ah,
	  useMutableSource: Ah,
	  useOpaqueIdentifier: Ah,
	  unstable_isNewReconciler: !1
	},
	    Dh = {
	  readContext: vg,
	  useCallback: function (a, b) {
	    Hh().memoizedState = [a, void 0 === b ? null : b];
	    return a;
	  },
	  useContext: vg,
	  useEffect: Wh,
	  useImperativeHandle: function (a, b, c) {
	    c = null !== c && void 0 !== c ? c.concat([a]) : null;
	    return Uh(4, 2, Zh.bind(null, b, a), c);
	  },
	  useLayoutEffect: function (a, b) {
	    return Uh(4, 2, a, b);
	  },
	  useMemo: function (a, b) {
	    var c = Hh();
	    b = void 0 === b ? null : b;
	    a = a();
	    c.memoizedState = [a, b];
	    return a;
	  },
	  useReducer: function (a, b, c) {
	    var d = Hh();
	    b = void 0 !== c ? c(b) : b;
	    d.memoizedState = d.baseState = b;
	    a = d.queue = {
	      pending: null,
	      dispatch: null,
	      lastRenderedReducer: a,
	      lastRenderedState: b
	    };
	    a = a.dispatch = Oh.bind(null, R$1, a);
	    return [d.memoizedState, a];
	  },
	  useRef: Sh,
	  useState: Qh,
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Qh(a),
	        c = b[0],
	        d = b[1];
	    Wh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Qh(!1),
	        b = a[0];
	    a = di.bind(null, a[1]);
	    Sh(a);
	    return [a, b];
	  },
	  useMutableSource: function (a, b, c) {
	    var d = Hh();
	    d.memoizedState = {
	      refs: {
	        getSnapshot: b,
	        setSnapshot: null
	      },
	      source: a,
	      subscribe: c
	    };
	    return Nh(d, a, b, c);
	  },
	  useOpaqueIdentifier: function () {
	    if (lh) {
	      var a = !1,
	          b = uf(function () {
	        a || (a = !0, c("r:" + (tf++).toString(36)));
	        throw Error(y$2(355));
	      }),
	          c = Qh(b)[1];
	      0 === (R$1.mode & 2) && (R$1.flags |= 516, Rh(5, function () {
	        c("r:" + (tf++).toString(36));
	      }, void 0, null));
	      return b;
	    }

	    b = "r:" + (tf++).toString(36);
	    Qh(b);
	    return b;
	  },
	  unstable_isNewReconciler: !1
	},
	    Eh = {
	  readContext: vg,
	  useCallback: bi,
	  useContext: vg,
	  useEffect: Xh,
	  useImperativeHandle: $h,
	  useLayoutEffect: Yh,
	  useMemo: ci,
	  useReducer: Kh,
	  useRef: Th,
	  useState: function () {
	    return Kh(Jh);
	  },
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Kh(Jh),
	        c = b[0],
	        d = b[1];
	    Xh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Kh(Jh)[0];
	    return [Th().current, a];
	  },
	  useMutableSource: Ph,
	  useOpaqueIdentifier: function () {
	    return Kh(Jh)[0];
	  },
	  unstable_isNewReconciler: !1
	},
	    Fh = {
	  readContext: vg,
	  useCallback: bi,
	  useContext: vg,
	  useEffect: Xh,
	  useImperativeHandle: $h,
	  useLayoutEffect: Yh,
	  useMemo: ci,
	  useReducer: Lh,
	  useRef: Th,
	  useState: function () {
	    return Lh(Jh);
	  },
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Lh(Jh),
	        c = b[0],
	        d = b[1];
	    Xh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Lh(Jh)[0];
	    return [Th().current, a];
	  },
	  useMutableSource: Ph,
	  useOpaqueIdentifier: function () {
	    return Lh(Jh)[0];
	  },
	  unstable_isNewReconciler: !1
	},
	    ei = ra.ReactCurrentOwner,
	    ug = !1;

	function fi(a, b, c, d) {
	  b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
	}

	function gi(a, b, c, d, e) {
	  c = c.render;
	  var f = b.ref;
	  tg(b, e);
	  d = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, d, e);
	  return b.child;
	}

	function ii(a, b, c, d, e, f) {
	  if (null === a) {
	    var g = c.type;
	    if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
	    a = Vg(c.type, null, d, b, b.mode, f);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }

	  g = a.child;
	  if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je, c(e, d) && a.ref === b.ref)) return hi(a, b, f);
	  b.flags |= 1;
	  a = Tg(g, d);
	  a.ref = b.ref;
	  a.return = b;
	  return b.child = a;
	}

	function ki(a, b, c, d, e, f) {
	  if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref) if (ug = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (ug = !0);else return b.lanes = a.lanes, hi(a, b, f);
	  return li(a, b, c, d, f);
	}

	function mi(a, b, c) {
	  var d = b.pendingProps,
	      e = d.children,
	      f = null !== a ? a.memoizedState : null;
	  if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
	    if (0 === (b.mode & 4)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	      baseLanes: a
	    }, ni(b, a), null;
	  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
	  fi(a, b, e, c);
	  return b.child;
	}

	function oi(a, b) {
	  var c = b.ref;
	  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
	}

	function li(a, b, c, d, e) {
	  var f = Ff(c) ? Df : M$1.current;
	  f = Ef(b, f);
	  tg(b, e);
	  c = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, c, e);
	  return b.child;
	}

	function pi(a, b, c, d, e) {
	  if (Ff(c)) {
	    var f = !0;
	    Jf(b);
	  } else f = !1;

	  tg(b, e);
	  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = !0;else if (null === a) {
	    var g = b.stateNode,
	        h = b.memoizedProps;
	    g.props = h;
	    var k = g.context,
	        l = c.contextType;
	    "object" === typeof l && null !== l ? l = vg(l) : (l = Ff(c) ? Df : M$1.current, l = Ef(b, l));
	    var n = c.getDerivedStateFromProps,
	        A = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
	    A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Ng(b, g, d, l);
	    wg = !1;
	    var p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    k = b.memoizedState;
	    h !== d || p !== k || N$1.current || wg ? ("function" === typeof n && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
	  } else {
	    g = b.stateNode;
	    yg(a, b);
	    h = b.memoizedProps;
	    l = b.type === b.elementType ? h : lg(b.type, h);
	    g.props = l;
	    A = b.pendingProps;
	    p = g.context;
	    k = c.contextType;
	    "object" === typeof k && null !== k ? k = vg(k) : (k = Ff(c) ? Df : M$1.current, k = Ef(b, k));
	    var C = c.getDerivedStateFromProps;
	    (n = "function" === typeof C || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A || p !== k) && Ng(b, g, d, k);
	    wg = !1;
	    p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    var x = b.memoizedState;
	    h !== A || p !== x || N$1.current || wg ? ("function" === typeof C && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
	  }
	  return qi(a, b, c, d, f, e);
	}

	function qi(a, b, c, d, e, f) {
	  oi(a, b);
	  var g = 0 !== (b.flags & 64);
	  if (!d && !g) return e && Kf(b, c, !1), hi(a, b, f);
	  d = b.stateNode;
	  ei.current = b;
	  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	  b.flags |= 1;
	  null !== a && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
	  b.memoizedState = d.state;
	  e && Kf(b, c, !0);
	  return b.child;
	}

	function ri(a) {
	  var b = a.stateNode;
	  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, !1);
	  eh(a, b.containerInfo);
	}

	var si = {
	  dehydrated: null,
	  retryLane: 0
	};

	function ti(a, b, c) {
	  var d = b.pendingProps,
	      e = P$1.current,
	      f = !1,
	      g;
	  (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
	  g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
	  I$1(P$1, e & 1);

	  if (null === a) {
	    void 0 !== d.fallback && ph(b);
	    a = d.children;
	    e = d.fallback;
	    if (f) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, a;
	    if ("number" === typeof d.unstable_expectedLoadTime) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, b.lanes = 33554432, a;
	    c = vi({
	      mode: "visible",
	      children: a
	    }, b.mode, c, null);
	    c.return = b;
	    return b.child = c;
	  }

	  if (null !== a.memoizedState) {
	    if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	      baseLanes: c
	    } : {
	      baseLanes: e.baseLanes | c
	    }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	    c = xi(a, b, d.children, c);
	    b.memoizedState = null;
	    return c;
	  }

	  if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	    baseLanes: c
	  } : {
	    baseLanes: e.baseLanes | c
	  }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	  c = xi(a, b, d.children, c);
	  b.memoizedState = null;
	  return c;
	}

	function ui(a, b, c, d) {
	  var e = a.mode,
	      f = a.child;
	  b = {
	    mode: "hidden",
	    children: b
	  };
	  0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
	  c = Xg(c, e, d, null);
	  f.return = a;
	  c.return = a;
	  f.sibling = c;
	  a.child = f;
	  return c;
	}

	function xi(a, b, c, d) {
	  var e = a.child;
	  a = e.sibling;
	  c = Tg(e, {
	    mode: "visible",
	    children: c
	  });
	  0 === (b.mode & 2) && (c.lanes = d);
	  c.return = b;
	  c.sibling = null;
	  null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
	  return b.child = c;
	}

	function wi(a, b, c, d, e) {
	  var f = b.mode,
	      g = a.child;
	  a = g.sibling;
	  var h = {
	    mode: "hidden",
	    children: c
	  };
	  0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
	  null !== a ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
	  d.return = b;
	  c.return = b;
	  c.sibling = d;
	  b.child = c;
	  return d;
	}

	function yi(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  sg(a.return, b);
	}

	function zi(a, b, c, d, e, f) {
	  var g = a.memoizedState;
	  null === g ? a.memoizedState = {
	    isBackwards: b,
	    rendering: null,
	    renderingStartTime: 0,
	    last: d,
	    tail: c,
	    tailMode: e,
	    lastEffect: f
	  } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
	}

	function Ai(a, b, c) {
	  var d = b.pendingProps,
	      e = d.revealOrder,
	      f = d.tail;
	  fi(a, b, d.children, c);
	  d = P$1.current;
	  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
	    if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
	      if (13 === a.tag) null !== a.memoizedState && yi(a, c);else if (19 === a.tag) yi(a, c);else if (null !== a.child) {
	        a.child.return = a;
	        a = a.child;
	        continue;
	      }
	      if (a === b) break a;

	      for (; null === a.sibling;) {
	        if (null === a.return || a.return === b) break a;
	        a = a.return;
	      }

	      a.sibling.return = a.return;
	      a = a.sibling;
	    }
	    d &= 1;
	  }
	  I$1(P$1, d);
	  if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
	    case "forwards":
	      c = b.child;

	      for (e = null; null !== c;) a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;

	      c = e;
	      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	      zi(b, !1, e, c, f, b.lastEffect);
	      break;

	    case "backwards":
	      c = null;
	      e = b.child;

	      for (b.child = null; null !== e;) {
	        a = e.alternate;

	        if (null !== a && null === ih(a)) {
	          b.child = e;
	          break;
	        }

	        a = e.sibling;
	        e.sibling = c;
	        c = e;
	        e = a;
	      }

	      zi(b, !0, c, null, f, b.lastEffect);
	      break;

	    case "together":
	      zi(b, !1, null, null, void 0, b.lastEffect);
	      break;

	    default:
	      b.memoizedState = null;
	  }
	  return b.child;
	}

	function hi(a, b, c) {
	  null !== a && (b.dependencies = a.dependencies);
	  Dg |= b.lanes;

	  if (0 !== (c & b.childLanes)) {
	    if (null !== a && b.child !== a.child) throw Error(y$2(153));

	    if (null !== b.child) {
	      a = b.child;
	      c = Tg(a, a.pendingProps);
	      b.child = c;

	      for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;

	      c.sibling = null;
	    }

	    return b.child;
	  }

	  return null;
	}

	var Bi, Ci, Di, Ei;

	Bi = function (a, b) {
	  for (var c = b.child; null !== c;) {
	    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }
	    if (c === b) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	};

	Ci = function () {};

	Di = function (a, b, c, d) {
	  var e = a.memoizedProps;

	  if (e !== d) {
	    a = b.stateNode;
	    dh(ah.current);
	    var f = null;

	    switch (c) {
	      case "input":
	        e = Ya(a, e);
	        d = Ya(a, d);
	        f = [];
	        break;

	      case "option":
	        e = eb(a, e);
	        d = eb(a, d);
	        f = [];
	        break;

	      case "select":
	        e = objectAssign({}, e, {
	          value: void 0
	        });
	        d = objectAssign({}, d, {
	          value: void 0
	        });
	        f = [];
	        break;

	      case "textarea":
	        e = gb(a, e);
	        d = gb(a, d);
	        f = [];
	        break;

	      default:
	        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
	    }

	    vb(c, d);
	    var g;
	    c = null;

	    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	      var h = e[l];

	      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));

	    for (l in d) {
	      var k = d[l];
	      h = null != e ? e[l] : void 0;
	      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
	        if (h) {
	          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");

	          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	        } else c || (f || (f = []), f.push(l, c)), c = k;
	      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ca.hasOwnProperty(l) ? (null != k && "onScroll" === l && G$1("scroll", a), f || h === k || (f = [])) : "object" === typeof k && null !== k && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
	    }

	    c && (f = f || []).push("style", c);
	    var l = f;
	    if (b.updateQueue = l) b.flags |= 4;
	  }
	};

	Ei = function (a, b, c, d) {
	  c !== d && (b.flags |= 4);
	};

	function Fi(a, b) {
	  if (!lh) switch (a.tailMode) {
	    case "hidden":
	      b = a.tail;

	      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;

	      null === c ? a.tail = null : c.sibling = null;
	      break;

	    case "collapsed":
	      c = a.tail;

	      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;

	      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	  }
	}

	function Gi(a, b, c) {
	  var d = b.pendingProps;

	  switch (b.tag) {
	    case 2:
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return null;

	    case 1:
	      return Ff(b.type) && Gf(), null;

	    case 3:
	      fh();
	      H$1(N$1);
	      H$1(M$1);
	      uh();
	      d = b.stateNode;
	      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	      if (null === a || null === a.child) rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
	      Ci(b);
	      return null;

	    case 5:
	      hh(b);
	      var e = dh(ch.current);
	      c = b.type;
	      if (null !== a && null != b.stateNode) Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
	        if (!d) {
	          if (null === b.stateNode) throw Error(y$2(166));
	          return null;
	        }

	        a = dh(ah.current);

	        if (rh(b)) {
	          d = b.stateNode;
	          c = b.type;
	          var f = b.memoizedProps;
	          d[wf] = b;
	          d[xf] = f;

	          switch (c) {
	            case "dialog":
	              G$1("cancel", d);
	              G$1("close", d);
	              break;

	            case "iframe":
	            case "object":
	            case "embed":
	              G$1("load", d);
	              break;

	            case "video":
	            case "audio":
	              for (a = 0; a < Xe.length; a++) G$1(Xe[a], d);

	              break;

	            case "source":
	              G$1("error", d);
	              break;

	            case "img":
	            case "image":
	            case "link":
	              G$1("error", d);
	              G$1("load", d);
	              break;

	            case "details":
	              G$1("toggle", d);
	              break;

	            case "input":
	              Za(d, f);
	              G$1("invalid", d);
	              break;

	            case "select":
	              d._wrapperState = {
	                wasMultiple: !!f.multiple
	              };
	              G$1("invalid", d);
	              break;

	            case "textarea":
	              hb(d, f), G$1("invalid", d);
	          }

	          vb(c, f);
	          a = null;

	          for (var g in f) f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = ["children", e]) : "number" === typeof e && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G$1("scroll", d));

	          switch (c) {
	            case "input":
	              Va(d);
	              cb(d, f, !0);
	              break;

	            case "textarea":
	              Va(d);
	              jb(d);
	              break;

	            case "select":
	            case "option":
	              break;

	            default:
	              "function" === typeof f.onClick && (d.onclick = jf);
	          }

	          d = a;
	          b.updateQueue = d;
	          null !== d && (b.flags |= 4);
	        } else {
	          g = 9 === e.nodeType ? e : e.ownerDocument;
	          a === kb.html && (a = lb(c));
	          a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	            is: d.is
	          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	          a[wf] = b;
	          a[xf] = d;
	          Bi(a, b, !1, !1);
	          b.stateNode = a;
	          g = wb(c, d);

	          switch (c) {
	            case "dialog":
	              G$1("cancel", a);
	              G$1("close", a);
	              e = d;
	              break;

	            case "iframe":
	            case "object":
	            case "embed":
	              G$1("load", a);
	              e = d;
	              break;

	            case "video":
	            case "audio":
	              for (e = 0; e < Xe.length; e++) G$1(Xe[e], a);

	              e = d;
	              break;

	            case "source":
	              G$1("error", a);
	              e = d;
	              break;

	            case "img":
	            case "image":
	            case "link":
	              G$1("error", a);
	              G$1("load", a);
	              e = d;
	              break;

	            case "details":
	              G$1("toggle", a);
	              e = d;
	              break;

	            case "input":
	              Za(a, d);
	              e = Ya(a, d);
	              G$1("invalid", a);
	              break;

	            case "option":
	              e = eb(a, d);
	              break;

	            case "select":
	              a._wrapperState = {
	                wasMultiple: !!d.multiple
	              };
	              e = objectAssign({}, d, {
	                value: void 0
	              });
	              G$1("invalid", a);
	              break;

	            case "textarea":
	              hb(a, d);
	              e = gb(a, d);
	              G$1("invalid", a);
	              break;

	            default:
	              e = d;
	          }

	          vb(c, e);
	          var h = e;

	          for (f in h) if (h.hasOwnProperty(f)) {
	            var k = h[f];
	            "style" === f ? tb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && ob(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && pb(a, k) : "number" === typeof k && pb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ca.hasOwnProperty(f) ? null != k && "onScroll" === f && G$1("scroll", a) : null != k && qa(a, f, k, g));
	          }

	          switch (c) {
	            case "input":
	              Va(a);
	              cb(a, d, !1);
	              break;

	            case "textarea":
	              Va(a);
	              jb(a);
	              break;

	            case "option":
	              null != d.value && a.setAttribute("value", "" + Sa(d.value));
	              break;

	            case "select":
	              a.multiple = !!d.multiple;
	              f = d.value;
	              null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
	              break;

	            default:
	              "function" === typeof e.onClick && (a.onclick = jf);
	          }

	          mf(c, d) && (b.flags |= 4);
	        }

	        null !== b.ref && (b.flags |= 128);
	      }
	      return null;

	    case 6:
	      if (a && null != b.stateNode) Ei(a, b, a.memoizedProps, d);else {
	        if ("string" !== typeof d && null === b.stateNode) throw Error(y$2(166));
	        c = dh(ch.current);
	        dh(ah.current);
	        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
	      }
	      return null;

	    case 13:
	      H$1(P$1);
	      d = b.memoizedState;
	      if (0 !== (b.flags & 64)) return b.lanes = c, b;
	      d = null !== d;
	      c = !1;
	      null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
	      if (d && !c && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P$1.current & 1)) 0 === V$1 && (V$1 = 3);else {
	        if (0 === V$1 || 3 === V$1) V$1 = 4;
	        null === U$1 || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U$1, W$1);
	      }
	      if (d || c) b.flags |= 4;
	      return null;

	    case 4:
	      return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;

	    case 10:
	      return rg(b), null;

	    case 17:
	      return Ff(b.type) && Gf(), null;

	    case 19:
	      H$1(P$1);
	      d = b.memoizedState;
	      if (null === d) return null;
	      f = 0 !== (b.flags & 64);
	      g = d.rendering;
	      if (null === g) {
	        if (f) Fi(d, !1);else {
	          if (0 !== V$1 || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
	            g = ih(a);

	            if (null !== g) {
	              b.flags |= 64;
	              Fi(d, !1);
	              f = g.updateQueue;
	              null !== f && (b.updateQueue = f, b.flags |= 4);
	              null === d.lastEffect && (b.firstEffect = null);
	              b.lastEffect = d.lastEffect;
	              d = c;

	              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                lanes: a.lanes,
	                firstContext: a.firstContext
	              }), c = c.sibling;

	              I$1(P$1, P$1.current & 1 | 2);
	              return b.child;
	            }

	            a = a.sibling;
	          }
	          null !== d.tail && O$1() > Ji && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        }
	      } else {
	        if (!f) if (a = ih(g), null !== a) {
	          if (b.flags |= 64, f = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, !0), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
	        } else 2 * O$1() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
	      }
	      return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O$1(), c.sibling = null, b = P$1.current, I$1(P$1, f ? b & 1 | 2 : b & 1), c) : null;

	    case 23:
	    case 24:
	      return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
	  }

	  throw Error(y$2(156, b.tag));
	}

	function Li(a) {
	  switch (a.tag) {
	    case 1:
	      Ff(a.type) && Gf();
	      var b = a.flags;
	      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

	    case 3:
	      fh();
	      H$1(N$1);
	      H$1(M$1);
	      uh();
	      b = a.flags;
	      if (0 !== (b & 64)) throw Error(y$2(285));
	      a.flags = b & -4097 | 64;
	      return a;

	    case 5:
	      return hh(a), null;

	    case 13:
	      return H$1(P$1), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

	    case 19:
	      return H$1(P$1), null;

	    case 4:
	      return fh(), null;

	    case 10:
	      return rg(a), null;

	    case 23:
	    case 24:
	      return Ki(), null;

	    default:
	      return null;
	  }
	}

	function Mi(a, b) {
	  try {
	    var c = "",
	        d = b;

	    do c += Qa(d), d = d.return; while (d);

	    var e = c;
	  } catch (f) {
	    e = "\nError generating stack: " + f.message + "\n" + f.stack;
	  }

	  return {
	    value: a,
	    source: b,
	    stack: e
	  };
	}

	function Ni(a, b) {
	  try {
	    console.error(b.value);
	  } catch (c) {
	    setTimeout(function () {
	      throw c;
	    });
	  }
	}

	var Oi = "function" === typeof WeakMap ? WeakMap : Map;

	function Pi(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  c.payload = {
	    element: null
	  };
	  var d = b.value;

	  c.callback = function () {
	    Qi || (Qi = !0, Ri = d);
	    Ni(a, b);
	  };

	  return c;
	}

	function Si(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  var d = a.type.getDerivedStateFromError;

	  if ("function" === typeof d) {
	    var e = b.value;

	    c.payload = function () {
	      Ni(a, b);
	      return d(e);
	    };
	  }

	  var f = a.stateNode;
	  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	    "function" !== typeof d && (null === Ti ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
	    var c = b.stack;
	    this.componentDidCatch(b.value, {
	      componentStack: null !== c ? c : ""
	    });
	  });
	  return c;
	}

	var Ui = "function" === typeof WeakSet ? WeakSet : Set;

	function Vi(a) {
	  var b = a.ref;
	  if (null !== b) if ("function" === typeof b) try {
	    b(null);
	  } catch (c) {
	    Wi(a, c);
	  } else b.current = null;
	}

	function Xi(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      return;

	    case 1:
	      if (b.flags & 256 && null !== a) {
	        var c = a.memoizedProps,
	            d = a.memoizedState;
	        a = b.stateNode;
	        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
	        a.__reactInternalSnapshotBeforeUpdate = b;
	      }

	      return;

	    case 3:
	      b.flags & 256 && qf(b.stateNode.containerInfo);
	      return;

	    case 5:
	    case 6:
	    case 4:
	    case 17:
	      return;
	  }

	  throw Error(y$2(163));
	}

	function Yi(a, b, c) {
	  switch (c.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;

	      if (null !== b) {
	        a = b = b.next;

	        do {
	          if (3 === (a.tag & 3)) {
	            var d = a.create;
	            a.destroy = d();
	          }

	          a = a.next;
	        } while (a !== b);
	      }

	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;

	      if (null !== b) {
	        a = b = b.next;

	        do {
	          var e = a;
	          d = e.next;
	          e = e.tag;
	          0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
	          a = d;
	        } while (a !== b);
	      }

	      return;

	    case 1:
	      a = c.stateNode;
	      c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
	      b = c.updateQueue;
	      null !== b && Eg(c, b, a);
	      return;

	    case 3:
	      b = c.updateQueue;

	      if (null !== b) {
	        a = null;
	        if (null !== c.child) switch (c.child.tag) {
	          case 5:
	            a = c.child.stateNode;
	            break;

	          case 1:
	            a = c.child.stateNode;
	        }
	        Eg(c, b, a);
	      }

	      return;

	    case 5:
	      a = c.stateNode;
	      null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
	      return;

	    case 6:
	      return;

	    case 4:
	      return;

	    case 12:
	      return;

	    case 13:
	      null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
	      return;

	    case 19:
	    case 17:
	    case 20:
	    case 21:
	    case 23:
	    case 24:
	      return;
	  }

	  throw Error(y$2(163));
	}

	function aj(a, b) {
	  for (var c = a;;) {
	    if (5 === c.tag) {
	      var d = c.stateNode;
	      if (b) d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";else {
	        d = c.stateNode;
	        var e = c.memoizedProps.style;
	        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
	        d.style.display = sb("display", e);
	      }
	    } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }

	    if (c === a) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === a) return;
	      c = c.return;
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}

	function bj(a, b) {
	  if (Mf && "function" === typeof Mf.onCommitFiberUnmount) try {
	    Mf.onCommitFiberUnmount(Lf, b);
	  } catch (f) {}

	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      a = b.updateQueue;

	      if (null !== a && (a = a.lastEffect, null !== a)) {
	        var c = a = a.next;

	        do {
	          var d = c,
	              e = d.destroy;
	          d = d.tag;
	          if (void 0 !== e) if (0 !== (d & 4)) Zi(b, c);else {
	            d = b;

	            try {
	              e();
	            } catch (f) {
	              Wi(d, f);
	            }
	          }
	          c = c.next;
	        } while (c !== a);
	      }

	      break;

	    case 1:
	      Vi(b);
	      a = b.stateNode;
	      if ("function" === typeof a.componentWillUnmount) try {
	        a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
	      } catch (f) {
	        Wi(b, f);
	      }
	      break;

	    case 5:
	      Vi(b);
	      break;

	    case 4:
	      cj(a, b);
	  }
	}

	function dj(a) {
	  a.alternate = null;
	  a.child = null;
	  a.dependencies = null;
	  a.firstEffect = null;
	  a.lastEffect = null;
	  a.memoizedProps = null;
	  a.memoizedState = null;
	  a.pendingProps = null;
	  a.return = null;
	  a.updateQueue = null;
	}

	function ej(a) {
	  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}

	function fj(a) {
	  a: {
	    for (var b = a.return; null !== b;) {
	      if (ej(b)) break a;
	      b = b.return;
	    }

	    throw Error(y$2(160));
	  }

	  var c = b;
	  b = c.stateNode;

	  switch (c.tag) {
	    case 5:
	      var d = !1;
	      break;

	    case 3:
	      b = b.containerInfo;
	      d = !0;
	      break;

	    case 4:
	      b = b.containerInfo;
	      d = !0;
	      break;

	    default:
	      throw Error(y$2(161));
	  }

	  c.flags & 16 && (pb(b, ""), c.flags &= -17);

	  a: b: for (c = a;;) {
	    for (; null === c.sibling;) {
	      if (null === c.return || ej(c.return)) {
	        c = null;
	        break a;
	      }

	      c = c.return;
	    }

	    c.sibling.return = c.return;

	    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
	      if (c.flags & 2) continue b;
	      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
	    }

	    if (!(c.flags & 2)) {
	      c = c.stateNode;
	      break a;
	    }
	  }

	  d ? gj(a, c, b) : hj(a, c, b);
	}

	function gj(a, b, c) {
	  var d = a.tag,
	      e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));else if (4 !== d && (a = a.child, null !== a)) for (gj(a, b, c), a = a.sibling; null !== a;) gj(a, b, c), a = a.sibling;
	}

	function hj(a, b, c) {
	  var d = a.tag,
	      e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (hj(a, b, c), a = a.sibling; null !== a;) hj(a, b, c), a = a.sibling;
	}

	function cj(a, b) {
	  for (var c = b, d = !1, e, f;;) {
	    if (!d) {
	      d = c.return;

	      a: for (;;) {
	        if (null === d) throw Error(y$2(160));
	        e = d.stateNode;

	        switch (d.tag) {
	          case 5:
	            f = !1;
	            break a;

	          case 3:
	            e = e.containerInfo;
	            f = !0;
	            break a;

	          case 4:
	            e = e.containerInfo;
	            f = !0;
	            break a;
	        }

	        d = d.return;
	      }

	      d = !0;
	    }

	    if (5 === c.tag || 6 === c.tag) {
	      a: for (var g = a, h = c, k = h;;) if (bj(g, k), null !== k.child && 4 !== k.tag) k.child.return = k, k = k.child;else {
	        if (k === h) break a;

	        for (; null === k.sibling;) {
	          if (null === k.return || k.return === h) break a;
	          k = k.return;
	        }

	        k.sibling.return = k.return;
	        k = k.sibling;
	      }

	      f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
	    } else if (4 === c.tag) {
	      if (null !== c.child) {
	        e = c.stateNode.containerInfo;
	        f = !0;
	        c.child.return = c;
	        c = c.child;
	        continue;
	      }
	    } else if (bj(a, c), null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }

	    if (c === b) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	      4 === c.tag && (d = !1);
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}

	function ij(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      var c = b.updateQueue;
	      c = null !== c ? c.lastEffect : null;

	      if (null !== c) {
	        var d = c = c.next;

	        do 3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next; while (d !== c);
	      }

	      return;

	    case 1:
	      return;

	    case 5:
	      c = b.stateNode;

	      if (null != c) {
	        d = b.memoizedProps;
	        var e = null !== a ? a.memoizedProps : d;
	        a = b.type;
	        var f = b.updateQueue;
	        b.updateQueue = null;

	        if (null !== f) {
	          c[xf] = d;
	          "input" === a && "radio" === d.type && null != d.name && $a(c, d);
	          wb(a, e);
	          b = wb(a, d);

	          for (e = 0; e < f.length; e += 2) {
	            var g = f[e],
	                h = f[e + 1];
	            "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
	          }

	          switch (a) {
	            case "input":
	              ab(c, d);
	              break;

	            case "textarea":
	              ib(c, d);
	              break;

	            case "select":
	              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? fb(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, !0) : fb(c, !!d.multiple, d.multiple ? [] : "", !1));
	          }
	        }
	      }

	      return;

	    case 6:
	      if (null === b.stateNode) throw Error(y$2(162));
	      b.stateNode.nodeValue = b.memoizedProps;
	      return;

	    case 3:
	      c = b.stateNode;
	      c.hydrate && (c.hydrate = !1, Cc(c.containerInfo));
	      return;

	    case 12:
	      return;

	    case 13:
	      null !== b.memoizedState && (jj = O$1(), aj(b.child, !0));
	      kj(b);
	      return;

	    case 19:
	      kj(b);
	      return;

	    case 17:
	      return;

	    case 23:
	    case 24:
	      aj(b, null !== b.memoizedState);
	      return;
	  }

	  throw Error(y$2(163));
	}

	function kj(a) {
	  var b = a.updateQueue;

	  if (null !== b) {
	    a.updateQueue = null;
	    var c = a.stateNode;
	    null === c && (c = a.stateNode = new Ui());
	    b.forEach(function (b) {
	      var d = lj.bind(null, a, b);
	      c.has(b) || (c.add(b), b.then(d, d));
	    });
	  }
	}

	function mj(a, b) {
	  return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
	}

	var nj = Math.ceil,
	    oj = ra.ReactCurrentDispatcher,
	    pj = ra.ReactCurrentOwner,
	    X = 0,
	    U$1 = null,
	    Y$1 = null,
	    W$1 = 0,
	    qj = 0,
	    rj = Bf(0),
	    V$1 = 0,
	    sj = null,
	    tj = 0,
	    Dg = 0,
	    Hi = 0,
	    uj = 0,
	    vj = null,
	    jj = 0,
	    Ji = Infinity;

	function wj() {
	  Ji = O$1() + 500;
	}

	var Z = null,
	    Qi = !1,
	    Ri = null,
	    Ti = null,
	    xj = !1,
	    yj = null,
	    zj = 90,
	    Aj = [],
	    Bj = [],
	    Cj = null,
	    Dj = 0,
	    Ej = null,
	    Fj = -1,
	    Gj = 0,
	    Hj = 0,
	    Ij = null,
	    Jj = !1;

	function Hg() {
	  return 0 !== (X & 48) ? O$1() : -1 !== Fj ? Fj : Fj = O$1();
	}

	function Ig(a) {
	  a = a.mode;
	  if (0 === (a & 2)) return 1;
	  if (0 === (a & 4)) return 99 === eg() ? 1 : 2;
	  0 === Gj && (Gj = tj);

	  if (0 !== kg.transition) {
	    0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
	    a = Gj;
	    var b = 4186112 & ~Hj;
	    b &= -b;
	    0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
	    return b;
	  }

	  a = eg();
	  0 !== (X & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
	  return a;
	}

	function Jg(a, b, c) {
	  if (50 < Dj) throw Dj = 0, Ej = null, Error(y$2(185));
	  a = Kj(a, b);
	  if (null === a) return null;
	  $c(a, b, c);
	  a === U$1 && (Hi |= b, 4 === V$1 && Ii(a, W$1));
	  var d = eg();
	  1 === b ? 0 !== (X & 8) && 0 === (X & 48) ? Lj(a) : (Mj(a, c), 0 === X && (wj(), ig())) : (0 === (X & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
	  vj = a;
	}

	function Kj(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  c = a;

	  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;

	  return 3 === c.tag ? c.stateNode : null;
	}

	function Mj(a, b) {
	  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
	    var h = 31 - Vc(g),
	        k = 1 << h,
	        l = f[h];

	    if (-1 === l) {
	      if (0 === (k & d) || 0 !== (k & e)) {
	        l = b;
	        Rc(k);
	        var n = F$1;
	        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
	      }
	    } else l <= b && (a.expiredLanes |= k);

	    g &= ~k;
	  }

	  d = Uc(a, a === U$1 ? W$1 : 0);
	  b = F$1;
	  if (0 === d) null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);else {
	    if (null !== c) {
	      if (a.callbackPriority === b) return;
	      c !== Zf && Pf(c);
	    }

	    15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
	    a.callbackPriority = b;
	    a.callbackNode = c;
	  }
	}

	function Nj(a) {
	  Fj = -1;
	  Hj = Gj = 0;
	  if (0 !== (X & 48)) throw Error(y$2(327));
	  var b = a.callbackNode;
	  if (Oj() && a.callbackNode !== b) return null;
	  var c = Uc(a, a === U$1 ? W$1 : 0);
	  if (0 === c) return null;
	  var d = c;
	  var e = X;
	  X |= 16;
	  var f = Pj();
	  if (U$1 !== a || W$1 !== d) wj(), Qj(a, d);

	  do try {
	    Rj();
	    break;
	  } catch (h) {
	    Sj(a, h);
	  } while (1);

	  qg();
	  oj.current = f;
	  X = e;
	  null !== Y$1 ? d = 0 : (U$1 = null, W$1 = 0, d = V$1);
	  if (0 !== (tj & Hi)) Qj(a, 0);else if (0 !== d) {
	    2 === d && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
	    if (1 === d) throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O$1()), b;
	    a.finishedWork = a.current.alternate;
	    a.finishedLanes = c;

	    switch (d) {
	      case 0:
	      case 1:
	        throw Error(y$2(345));

	      case 2:
	        Uj(a);
	        break;

	      case 3:
	        Ii(a, c);

	        if ((c & 62914560) === c && (d = jj + 500 - O$1(), 10 < d)) {
	          if (0 !== Uc(a, 0)) break;
	          e = a.suspendedLanes;

	          if ((e & c) !== c) {
	            Hg();
	            a.pingedLanes |= a.suspendedLanes & e;
	            break;
	          }

	          a.timeoutHandle = of(Uj.bind(null, a), d);
	          break;
	        }

	        Uj(a);
	        break;

	      case 4:
	        Ii(a, c);
	        if ((c & 4186112) === c) break;
	        d = a.eventTimes;

	        for (e = -1; 0 < c;) {
	          var g = 31 - Vc(c);
	          f = 1 << g;
	          g = d[g];
	          g > e && (e = g);
	          c &= ~f;
	        }

	        c = e;
	        c = O$1() - c;
	        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;

	        if (10 < c) {
	          a.timeoutHandle = of(Uj.bind(null, a), c);
	          break;
	        }

	        Uj(a);
	        break;

	      case 5:
	        Uj(a);
	        break;

	      default:
	        throw Error(y$2(329));
	    }
	  }
	  Mj(a, O$1());
	  return a.callbackNode === b ? Nj.bind(null, a) : null;
	}

	function Ii(a, b) {
	  b &= ~uj;
	  b &= ~Hi;
	  a.suspendedLanes |= b;
	  a.pingedLanes &= ~b;

	  for (a = a.expirationTimes; 0 < b;) {
	    var c = 31 - Vc(b),
	        d = 1 << c;
	    a[c] = -1;
	    b &= ~d;
	  }
	}

	function Lj(a) {
	  if (0 !== (X & 48)) throw Error(y$2(327));
	  Oj();

	  if (a === U$1 && 0 !== (a.expiredLanes & W$1)) {
	    var b = W$1;
	    var c = Tj(a, b);
	    0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
	  } else b = Uc(a, 0), c = Tj(a, b);

	  0 !== a.tag && 2 === c && (X |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
	  if (1 === c) throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O$1()), c;
	  a.finishedWork = a.current.alternate;
	  a.finishedLanes = b;
	  Uj(a);
	  Mj(a, O$1());
	  return null;
	}

	function Vj() {
	  if (null !== Cj) {
	    var a = Cj;
	    Cj = null;
	    a.forEach(function (a) {
	      a.expiredLanes |= 24 & a.pendingLanes;
	      Mj(a, O$1());
	    });
	  }

	  ig();
	}

	function Wj(a, b) {
	  var c = X;
	  X |= 1;

	  try {
	    return a(b);
	  } finally {
	    X = c, 0 === X && (wj(), ig());
	  }
	}

	function Xj(a, b) {
	  var c = X;
	  X &= -2;
	  X |= 8;

	  try {
	    return a(b);
	  } finally {
	    X = c, 0 === X && (wj(), ig());
	  }
	}

	function ni(a, b) {
	  I$1(rj, qj);
	  qj |= b;
	  tj |= b;
	}

	function Ki() {
	  qj = rj.current;
	  H$1(rj);
	}

	function Qj(a, b) {
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  var c = a.timeoutHandle;
	  -1 !== c && (a.timeoutHandle = -1, pf(c));
	  if (null !== Y$1) for (c = Y$1.return; null !== c;) {
	    var d = c;

	    switch (d.tag) {
	      case 1:
	        d = d.type.childContextTypes;
	        null !== d && void 0 !== d && Gf();
	        break;

	      case 3:
	        fh();
	        H$1(N$1);
	        H$1(M$1);
	        uh();
	        break;

	      case 5:
	        hh(d);
	        break;

	      case 4:
	        fh();
	        break;

	      case 13:
	        H$1(P$1);
	        break;

	      case 19:
	        H$1(P$1);
	        break;

	      case 10:
	        rg(d);
	        break;

	      case 23:
	      case 24:
	        Ki();
	    }

	    c = c.return;
	  }
	  U$1 = a;
	  Y$1 = Tg(a.current, null);
	  W$1 = qj = tj = b;
	  V$1 = 0;
	  sj = null;
	  uj = Hi = Dg = 0;
	}

	function Sj(a, b) {
	  do {
	    var c = Y$1;

	    try {
	      qg();
	      vh.current = Gh;

	      if (yh) {
	        for (var d = R$1.memoizedState; null !== d;) {
	          var e = d.queue;
	          null !== e && (e.pending = null);
	          d = d.next;
	        }

	        yh = !1;
	      }

	      xh = 0;
	      T$1 = S$1 = R$1 = null;
	      zh = !1;
	      pj.current = null;

	      if (null === c || null === c.return) {
	        V$1 = 1;
	        sj = b;
	        Y$1 = null;
	        break;
	      }

	      a: {
	        var f = a,
	            g = c.return,
	            h = c,
	            k = b;
	        b = W$1;
	        h.flags |= 2048;
	        h.firstEffect = h.lastEffect = null;

	        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	          var l = k;

	          if (0 === (h.mode & 2)) {
	            var n = h.alternate;
	            n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
	          }

	          var A = 0 !== (P$1.current & 1),
	              p = g;

	          do {
	            var C;

	            if (C = 13 === p.tag) {
	              var x = p.memoizedState;
	              if (null !== x) C = null !== x.dehydrated ? !0 : !1;else {
	                var w = p.memoizedProps;
	                C = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : A ? !1 : !0;
	              }
	            }

	            if (C) {
	              var z = p.updateQueue;

	              if (null === z) {
	                var u = new Set();
	                u.add(l);
	                p.updateQueue = u;
	              } else z.add(l);

	              if (0 === (p.mode & 2)) {
	                p.flags |= 64;
	                h.flags |= 16384;
	                h.flags &= -2981;
	                if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
	                  var t = zg(-1, 1);
	                  t.tag = 2;
	                  Ag(h, t);
	                }
	                h.lanes |= 1;
	                break a;
	              }

	              k = void 0;
	              h = b;
	              var q = f.pingCache;
	              null === q ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), void 0 === k && (k = new Set(), q.set(l, k)));

	              if (!k.has(h)) {
	                k.add(h);
	                var v = Yj.bind(null, f, l, h);
	                l.then(v, v);
	              }

	              p.flags |= 4096;
	              p.lanes = b;
	              break a;
	            }

	            p = p.return;
	          } while (null !== p);

	          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
	        }

	        5 !== V$1 && (V$1 = 2);
	        k = Mi(k, h);
	        p = g;

	        do {
	          switch (p.tag) {
	            case 3:
	              f = k;
	              p.flags |= 4096;
	              b &= -b;
	              p.lanes |= b;
	              var J = Pi(p, f, b);
	              Bg(p, J);
	              break a;

	            case 1:
	              f = k;
	              var K = p.type,
	                  Q = p.stateNode;

	              if (0 === (p.flags & 64) && ("function" === typeof K.getDerivedStateFromError || null !== Q && "function" === typeof Q.componentDidCatch && (null === Ti || !Ti.has(Q)))) {
	                p.flags |= 4096;
	                b &= -b;
	                p.lanes |= b;
	                var L = Si(p, f, b);
	                Bg(p, L);
	                break a;
	              }

	          }

	          p = p.return;
	        } while (null !== p);
	      }

	      Zj(c);
	    } catch (va) {
	      b = va;
	      Y$1 === c && null !== c && (Y$1 = c = c.return);
	      continue;
	    }

	    break;
	  } while (1);
	}

	function Pj() {
	  var a = oj.current;
	  oj.current = Gh;
	  return null === a ? Gh : a;
	}

	function Tj(a, b) {
	  var c = X;
	  X |= 16;
	  var d = Pj();
	  U$1 === a && W$1 === b || Qj(a, b);

	  do try {
	    ak();
	    break;
	  } catch (e) {
	    Sj(a, e);
	  } while (1);

	  qg();
	  X = c;
	  oj.current = d;
	  if (null !== Y$1) throw Error(y$2(261));
	  U$1 = null;
	  W$1 = 0;
	  return V$1;
	}

	function ak() {
	  for (; null !== Y$1;) bk(Y$1);
	}

	function Rj() {
	  for (; null !== Y$1 && !Qf();) bk(Y$1);
	}

	function bk(a) {
	  var b = ck(a.alternate, a, qj);
	  a.memoizedProps = a.pendingProps;
	  null === b ? Zj(a) : Y$1 = b;
	  pj.current = null;
	}

	function Zj(a) {
	  var b = a;

	  do {
	    var c = b.alternate;
	    a = b.return;

	    if (0 === (b.flags & 2048)) {
	      c = Gi(c, b, qj);

	      if (null !== c) {
	        Y$1 = c;
	        return;
	      }

	      c = b;

	      if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
	        for (var d = 0, e = c.child; null !== e;) d |= e.lanes | e.childLanes, e = e.sibling;

	        c.childLanes = d;
	      }

	      null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
	    } else {
	      c = Li(b);

	      if (null !== c) {
	        c.flags &= 2047;
	        Y$1 = c;
	        return;
	      }

	      null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
	    }

	    b = b.sibling;

	    if (null !== b) {
	      Y$1 = b;
	      return;
	    }

	    Y$1 = b = a;
	  } while (null !== b);

	  0 === V$1 && (V$1 = 5);
	}

	function Uj(a) {
	  var b = eg();
	  gg(99, dk.bind(null, a, b));
	  return null;
	}

	function dk(a, b) {
	  do Oj(); while (null !== yj);

	  if (0 !== (X & 48)) throw Error(y$2(327));
	  var c = a.finishedWork;
	  if (null === c) return null;
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  if (c === a.current) throw Error(y$2(177));
	  a.callbackNode = null;
	  var d = c.lanes | c.childLanes,
	      e = d,
	      f = a.pendingLanes & ~e;
	  a.pendingLanes = e;
	  a.suspendedLanes = 0;
	  a.pingedLanes = 0;
	  a.expiredLanes &= e;
	  a.mutableReadLanes &= e;
	  a.entangledLanes &= e;
	  e = a.entanglements;

	  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
	    var k = 31 - Vc(f),
	        l = 1 << k;
	    e[k] = 0;
	    g[k] = -1;
	    h[k] = -1;
	    f &= ~l;
	  }

	  null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
	  a === U$1 && (Y$1 = U$1 = null, W$1 = 0);
	  1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;

	  if (null !== d) {
	    e = X;
	    X |= 32;
	    pj.current = null;
	    kf = fd;
	    g = Ne();

	    if (Oe(g)) {
	      if ("selectionStart" in g) h = {
	        start: g.selectionStart,
	        end: g.selectionEnd
	      };else a: if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount) {
	        h = l.anchorNode;
	        f = l.anchorOffset;
	        k = l.focusNode;
	        l = l.focusOffset;

	        try {
	          h.nodeType, k.nodeType;
	        } catch (va) {
	          h = null;
	          break a;
	        }

	        var n = 0,
	            A = -1,
	            p = -1,
	            C = 0,
	            x = 0,
	            w = g,
	            z = null;

	        b: for (;;) {
	          for (var u;;) {
	            w !== h || 0 !== f && 3 !== w.nodeType || (A = n + f);
	            w !== k || 0 !== l && 3 !== w.nodeType || (p = n + l);
	            3 === w.nodeType && (n += w.nodeValue.length);
	            if (null === (u = w.firstChild)) break;
	            z = w;
	            w = u;
	          }

	          for (;;) {
	            if (w === g) break b;
	            z === h && ++C === f && (A = n);
	            z === k && ++x === l && (p = n);
	            if (null !== (u = w.nextSibling)) break;
	            w = z;
	            z = w.parentNode;
	          }

	          w = u;
	        }

	        h = -1 === A || -1 === p ? null : {
	          start: A,
	          end: p
	        };
	      } else h = null;
	      h = h || {
	        start: 0,
	        end: 0
	      };
	    } else h = null;

	    lf = {
	      focusedElem: g,
	      selectionRange: h
	    };
	    fd = !1;
	    Ij = null;
	    Jj = !1;
	    Z = d;

	    do try {
	      ek();
	    } catch (va) {
	      if (null === Z) throw Error(y$2(330));
	      Wi(Z, va);
	      Z = Z.nextEffect;
	    } while (null !== Z);

	    Ij = null;
	    Z = d;

	    do try {
	      for (g = a; null !== Z;) {
	        var t = Z.flags;
	        t & 16 && pb(Z.stateNode, "");

	        if (t & 128) {
	          var q = Z.alternate;

	          if (null !== q) {
	            var v = q.ref;
	            null !== v && ("function" === typeof v ? v(null) : v.current = null);
	          }
	        }

	        switch (t & 1038) {
	          case 2:
	            fj(Z);
	            Z.flags &= -3;
	            break;

	          case 6:
	            fj(Z);
	            Z.flags &= -3;
	            ij(Z.alternate, Z);
	            break;

	          case 1024:
	            Z.flags &= -1025;
	            break;

	          case 1028:
	            Z.flags &= -1025;
	            ij(Z.alternate, Z);
	            break;

	          case 4:
	            ij(Z.alternate, Z);
	            break;

	          case 8:
	            h = Z;
	            cj(g, h);
	            var J = h.alternate;
	            dj(h);
	            null !== J && dj(J);
	        }

	        Z = Z.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z) throw Error(y$2(330));
	      Wi(Z, va);
	      Z = Z.nextEffect;
	    } while (null !== Z);

	    v = lf;
	    q = Ne();
	    t = v.focusedElem;
	    g = v.selectionRange;

	    if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
	      null !== g && Oe(t) && (q = g.start, v = g.end, void 0 === v && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = void 0 === g.end ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (1 !== v.rangeCount || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
	      q = [];

	      for (v = t; v = v.parentNode;) 1 === v.nodeType && q.push({
	        element: v,
	        left: v.scrollLeft,
	        top: v.scrollTop
	      });

	      "function" === typeof t.focus && t.focus();

	      for (t = 0; t < q.length; t++) v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
	    }

	    fd = !!kf;
	    lf = kf = null;
	    a.current = c;
	    Z = d;

	    do try {
	      for (t = a; null !== Z;) {
	        var K = Z.flags;
	        K & 36 && Yi(t, Z.alternate, Z);

	        if (K & 128) {
	          q = void 0;
	          var Q = Z.ref;

	          if (null !== Q) {
	            var L = Z.stateNode;

	            switch (Z.tag) {
	              case 5:
	                q = L;
	                break;

	              default:
	                q = L;
	            }

	            "function" === typeof Q ? Q(q) : Q.current = q;
	          }
	        }

	        Z = Z.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z) throw Error(y$2(330));
	      Wi(Z, va);
	      Z = Z.nextEffect;
	    } while (null !== Z);

	    Z = null;
	    $f();
	    X = e;
	  } else a.current = c;

	  if (xj) xj = !1, yj = a, zj = b;else for (Z = d; null !== Z;) b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
	  d = a.pendingLanes;
	  0 === d && (Ti = null);
	  1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
	  c = c.stateNode;
	  if (Mf && "function" === typeof Mf.onCommitFiberRoot) try {
	    Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
	  } catch (va) {}
	  Mj(a, O$1());
	  if (Qi) throw Qi = !1, a = Ri, Ri = null, a;
	  if (0 !== (X & 8)) return null;
	  ig();
	  return null;
	}

	function ek() {
	  for (; null !== Z;) {
	    var a = Z.alternate;
	    Jj || null === Ij || (0 !== (Z.flags & 8) ? dc(Z, Ij) && (Jj = !0) : 13 === Z.tag && mj(a, Z) && dc(Z, Ij) && (Jj = !0));
	    var b = Z.flags;
	    0 !== (b & 256) && Xi(a, Z);
	    0 === (b & 512) || xj || (xj = !0, hg(97, function () {
	      Oj();
	      return null;
	    }));
	    Z = Z.nextEffect;
	  }
	}

	function Oj() {
	  if (90 !== zj) {
	    var a = 97 < zj ? 97 : zj;
	    zj = 90;
	    return gg(a, fk);
	  }

	  return !1;
	}

	function $i(a, b) {
	  Aj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}

	function Zi(a, b) {
	  Bj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}

	function fk() {
	  if (null === yj) return !1;
	  var a = yj;
	  yj = null;
	  if (0 !== (X & 48)) throw Error(y$2(331));
	  var b = X;
	  X |= 32;
	  var c = Bj;
	  Bj = [];

	  for (var d = 0; d < c.length; d += 2) {
	    var e = c[d],
	        f = c[d + 1],
	        g = e.destroy;
	    e.destroy = void 0;
	    if ("function" === typeof g) try {
	      g();
	    } catch (k) {
	      if (null === f) throw Error(y$2(330));
	      Wi(f, k);
	    }
	  }

	  c = Aj;
	  Aj = [];

	  for (d = 0; d < c.length; d += 2) {
	    e = c[d];
	    f = c[d + 1];

	    try {
	      var h = e.create;
	      e.destroy = h();
	    } catch (k) {
	      if (null === f) throw Error(y$2(330));
	      Wi(f, k);
	    }
	  }

	  for (h = a.current.firstEffect; null !== h;) a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;

	  X = b;
	  ig();
	  return !0;
	}

	function gk(a, b, c) {
	  b = Mi(c, b);
	  b = Pi(a, b, 1);
	  Ag(a, b);
	  b = Hg();
	  a = Kj(a, 1);
	  null !== a && ($c(a, 1, b), Mj(a, b));
	}

	function Wi(a, b) {
	  if (3 === a.tag) gk(a, a, b);else for (var c = a.return; null !== c;) {
	    if (3 === c.tag) {
	      gk(c, a, b);
	      break;
	    } else if (1 === c.tag) {
	      var d = c.stateNode;

	      if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
	        a = Mi(b, a);
	        var e = Si(c, a, 1);
	        Ag(c, e);
	        e = Hg();
	        c = Kj(c, 1);
	        if (null !== c) $c(c, 1, e), Mj(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) try {
	          d.componentDidCatch(b, a);
	        } catch (f) {}
	        break;
	      }
	    }

	    c = c.return;
	  }
	}

	function Yj(a, b, c) {
	  var d = a.pingCache;
	  null !== d && d.delete(b);
	  b = Hg();
	  a.pingedLanes |= a.suspendedLanes & c;
	  U$1 === a && (W$1 & c) === c && (4 === V$1 || 3 === V$1 && (W$1 & 62914560) === W$1 && 500 > O$1() - jj ? Qj(a, 0) : uj |= c);
	  Mj(a, b);
	}

	function lj(a, b) {
	  var c = a.stateNode;
	  null !== c && c.delete(b);
	  b = 0;
	  0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
	  c = Hg();
	  a = Kj(a, b);
	  null !== a && ($c(a, b, c), Mj(a, c));
	}

	var ck;

	ck = function (a, b, c) {
	  var d = b.lanes;
	  if (null !== a) {
	    if (a.memoizedProps !== b.pendingProps || N$1.current) ug = !0;else if (0 !== (c & d)) ug = 0 !== (a.flags & 16384) ? !0 : !1;else {
	      ug = !1;

	      switch (b.tag) {
	        case 3:
	          ri(b);
	          sh();
	          break;

	        case 5:
	          gh(b);
	          break;

	        case 1:
	          Ff(b.type) && Jf(b);
	          break;

	        case 4:
	          eh(b, b.stateNode.containerInfo);
	          break;

	        case 10:
	          d = b.memoizedProps.value;
	          var e = b.type._context;
	          I$1(mg, e._currentValue);
	          e._currentValue = d;
	          break;

	        case 13:
	          if (null !== b.memoizedState) {
	            if (0 !== (c & b.child.childLanes)) return ti(a, b, c);
	            I$1(P$1, P$1.current & 1);
	            b = hi(a, b, c);
	            return null !== b ? b.sibling : null;
	          }

	          I$1(P$1, P$1.current & 1);
	          break;

	        case 19:
	          d = 0 !== (c & b.childLanes);

	          if (0 !== (a.flags & 64)) {
	            if (d) return Ai(a, b, c);
	            b.flags |= 64;
	          }

	          e = b.memoizedState;
	          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	          I$1(P$1, P$1.current);
	          if (d) break;else return null;

	        case 23:
	        case 24:
	          return b.lanes = 0, mi(a, b, c);
	      }

	      return hi(a, b, c);
	    }
	  } else ug = !1;
	  b.lanes = 0;

	  switch (b.tag) {
	    case 2:
	      d = b.type;
	      null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	      a = b.pendingProps;
	      e = Ef(b, M$1.current);
	      tg(b, c);
	      e = Ch(null, b, d, a, e, c);
	      b.flags |= 1;

	      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
	        b.tag = 1;
	        b.memoizedState = null;
	        b.updateQueue = null;

	        if (Ff(d)) {
	          var f = !0;
	          Jf(b);
	        } else f = !1;

	        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
	        xg(b);
	        var g = d.getDerivedStateFromProps;
	        "function" === typeof g && Gg(b, d, g, a);
	        e.updater = Kg;
	        b.stateNode = e;
	        e._reactInternals = b;
	        Og(b, d, a, c);
	        b = qi(null, b, d, !0, f, c);
	      } else b.tag = 0, fi(null, b, e, c), b = b.child;

	      return b;

	    case 16:
	      e = b.elementType;

	      a: {
	        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	        a = b.pendingProps;
	        f = e._init;
	        e = f(e._payload);
	        b.type = e;
	        f = b.tag = hk(e);
	        a = lg(e, a);

	        switch (f) {
	          case 0:
	            b = li(null, b, e, a, c);
	            break a;

	          case 1:
	            b = pi(null, b, e, a, c);
	            break a;

	          case 11:
	            b = gi(null, b, e, a, c);
	            break a;

	          case 14:
	            b = ii(null, b, e, lg(e.type, a), d, c);
	            break a;
	        }

	        throw Error(y$2(306, e, ""));
	      }

	      return b;

	    case 0:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);

	    case 1:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);

	    case 3:
	      ri(b);
	      d = b.updateQueue;
	      if (null === a || null === d) throw Error(y$2(282));
	      d = b.pendingProps;
	      e = b.memoizedState;
	      e = null !== e ? e.element : null;
	      yg(a, b);
	      Cg(b, d, null, c);
	      d = b.memoizedState.element;
	      if (d === e) sh(), b = hi(a, b, c);else {
	        e = b.stateNode;
	        if (f = e.hydrate) kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = !0;

	        if (f) {
	          a = e.mutableSourceEagerHydrationData;
	          if (null != a) for (e = 0; e < a.length; e += 2) f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
	          c = Zg(b, null, d, c);

	          for (b.child = c; c;) c.flags = c.flags & -3 | 1024, c = c.sibling;
	        } else fi(a, b, d, c), sh();

	        b = b.child;
	      }
	      return b;

	    case 5:
	      return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;

	    case 6:
	      return null === a && ph(b), null;

	    case 13:
	      return ti(a, b, c);

	    case 4:
	      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;

	    case 11:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);

	    case 7:
	      return fi(a, b, b.pendingProps, c), b.child;

	    case 8:
	      return fi(a, b, b.pendingProps.children, c), b.child;

	    case 12:
	      return fi(a, b, b.pendingProps.children, c), b.child;

	    case 10:
	      a: {
	        d = b.type._context;
	        e = b.pendingProps;
	        g = b.memoizedProps;
	        f = e.value;
	        var h = b.type._context;
	        I$1(mg, h._currentValue);
	        h._currentValue = f;
	        if (null !== g) if (h = g.value, f = He(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
	          if (g.children === e.children && !N$1.current) {
	            b = hi(a, b, c);
	            break a;
	          }
	        } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
	          var k = h.dependencies;

	          if (null !== k) {
	            g = h.child;

	            for (var l = k.firstContext; null !== l;) {
	              if (l.context === d && 0 !== (l.observedBits & f)) {
	                1 === h.tag && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
	                h.lanes |= c;
	                l = h.alternate;
	                null !== l && (l.lanes |= c);
	                sg(h.return, c);
	                k.lanes |= c;
	                break;
	              }

	              l = l.next;
	            }
	          } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

	          if (null !== g) g.return = h;else for (g = h; null !== g;) {
	            if (g === b) {
	              g = null;
	              break;
	            }

	            h = g.sibling;

	            if (null !== h) {
	              h.return = g.return;
	              g = h;
	              break;
	            }

	            g = g.return;
	          }
	          h = g;
	        }
	        fi(a, b, e.children, c);
	        b = b.child;
	      }

	      return b;

	    case 9:
	      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;

	    case 14:
	      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);

	    case 15:
	      return ki(a, b, b.type, b.pendingProps, d, c);

	    case 17:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = !0, Jf(b)) : a = !1, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, !0, a, c);

	    case 19:
	      return Ai(a, b, c);

	    case 23:
	      return mi(a, b, c);

	    case 24:
	      return mi(a, b, c);
	  }

	  throw Error(y$2(156, b.tag));
	};

	function ik(a, b, c, d) {
	  this.tag = a;
	  this.key = c;
	  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	  this.index = 0;
	  this.ref = null;
	  this.pendingProps = b;
	  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = d;
	  this.flags = 0;
	  this.lastEffect = this.firstEffect = this.nextEffect = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}

	function nh(a, b, c, d) {
	  return new ik(a, b, c, d);
	}

	function ji(a) {
	  a = a.prototype;
	  return !(!a || !a.isReactComponent);
	}

	function hk(a) {
	  if ("function" === typeof a) return ji(a) ? 1 : 0;

	  if (void 0 !== a && null !== a) {
	    a = a.$$typeof;
	    if (a === Aa) return 11;
	    if (a === Da) return 14;
	  }

	  return 2;
	}

	function Tg(a, b) {
	  var c = a.alternate;
	  null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
	  c.childLanes = a.childLanes;
	  c.lanes = a.lanes;
	  c.child = a.child;
	  c.memoizedProps = a.memoizedProps;
	  c.memoizedState = a.memoizedState;
	  c.updateQueue = a.updateQueue;
	  b = a.dependencies;
	  c.dependencies = null === b ? null : {
	    lanes: b.lanes,
	    firstContext: b.firstContext
	  };
	  c.sibling = a.sibling;
	  c.index = a.index;
	  c.ref = a.ref;
	  return c;
	}

	function Vg(a, b, c, d, e, f) {
	  var g = 2;
	  d = a;
	  if ("function" === typeof a) ji(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	    case ua:
	      return Xg(c.children, e, f, b);

	    case Ha:
	      g = 8;
	      e |= 16;
	      break;

	    case wa:
	      g = 8;
	      e |= 1;
	      break;

	    case xa:
	      return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;

	    case Ba:
	      return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;

	    case Ca:
	      return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;

	    case Ia:
	      return vi(c, e, f, b);

	    case Ja:
	      return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;

	    default:
	      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	        case ya:
	          g = 10;
	          break a;

	        case za:
	          g = 9;
	          break a;

	        case Aa:
	          g = 11;
	          break a;

	        case Da:
	          g = 14;
	          break a;

	        case Ea:
	          g = 16;
	          d = null;
	          break a;

	        case Fa:
	          g = 22;
	          break a;
	      }
	      throw Error(y$2(130, null == a ? a : typeof a, ""));
	  }
	  b = nh(g, c, b, e);
	  b.elementType = a;
	  b.type = d;
	  b.lanes = f;
	  return b;
	}

	function Xg(a, b, c, d) {
	  a = nh(7, a, d, b);
	  a.lanes = c;
	  return a;
	}

	function vi(a, b, c, d) {
	  a = nh(23, a, d, b);
	  a.elementType = Ia;
	  a.lanes = c;
	  return a;
	}

	function Ug(a, b, c) {
	  a = nh(6, a, null, b);
	  a.lanes = c;
	  return a;
	}

	function Wg(a, b, c) {
	  b = nh(4, null !== a.children ? a.children : [], a.key, b);
	  b.lanes = c;
	  b.stateNode = {
	    containerInfo: a.containerInfo,
	    pendingChildren: null,
	    implementation: a.implementation
	  };
	  return b;
	}

	function jk(a, b, c) {
	  this.tag = b;
	  this.containerInfo = a;
	  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.pendingContext = this.context = null;
	  this.hydrate = c;
	  this.callbackNode = null;
	  this.callbackPriority = 0;
	  this.eventTimes = Zc(0);
	  this.expirationTimes = Zc(-1);
	  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	  this.entanglements = Zc(0);
	  this.mutableSourceEagerHydrationData = null;
	}

	function kk(a, b, c) {
	  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: ta,
	    key: null == d ? null : "" + d,
	    children: a,
	    containerInfo: b,
	    implementation: c
	  };
	}

	function lk(a, b, c, d) {
	  var e = b.current,
	      f = Hg(),
	      g = Ig(e);

	  a: if (c) {
	    c = c._reactInternals;

	    b: {
	      if (Zb(c) !== c || 1 !== c.tag) throw Error(y$2(170));
	      var h = c;

	      do {
	        switch (h.tag) {
	          case 3:
	            h = h.stateNode.context;
	            break b;

	          case 1:
	            if (Ff(h.type)) {
	              h = h.stateNode.__reactInternalMemoizedMergedChildContext;
	              break b;
	            }

	        }

	        h = h.return;
	      } while (null !== h);

	      throw Error(y$2(171));
	    }

	    if (1 === c.tag) {
	      var k = c.type;

	      if (Ff(k)) {
	        c = If(c, k, h);
	        break a;
	      }
	    }

	    c = h;
	  } else c = Cf;

	  null === b.context ? b.context = c : b.pendingContext = c;
	  b = zg(f, g);
	  b.payload = {
	    element: a
	  };
	  d = void 0 === d ? null : d;
	  null !== d && (b.callback = d);
	  Ag(e, b);
	  Jg(e, g, f);
	  return g;
	}

	function mk(a) {
	  a = a.current;
	  if (!a.child) return null;

	  switch (a.child.tag) {
	    case 5:
	      return a.child.stateNode;

	    default:
	      return a.child.stateNode;
	  }
	}

	function nk(a, b) {
	  a = a.memoizedState;

	  if (null !== a && null !== a.dehydrated) {
	    var c = a.retryLane;
	    a.retryLane = 0 !== c && c < b ? c : b;
	  }
	}

	function ok(a, b) {
	  nk(a, b);
	  (a = a.alternate) && nk(a, b);
	}

	function pk() {
	  return null;
	}

	function qk(a, b, c) {
	  var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
	  c = new jk(a, b, null != c && !0 === c.hydrate);
	  b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
	  c.current = b;
	  b.stateNode = c;
	  xg(b);
	  a[ff] = c.current;
	  cf(8 === a.nodeType ? a.parentNode : a);
	  if (d) for (a = 0; a < d.length; a++) {
	    b = d[a];
	    var e = b._getVersion;
	    e = e(b._source);
	    null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
	  }
	  this._internalRoot = c;
	}

	qk.prototype.render = function (a) {
	  lk(a, this._internalRoot, null, null);
	};

	qk.prototype.unmount = function () {
	  var a = this._internalRoot,
	      b = a.containerInfo;
	  lk(null, a, null, function () {
	    b[ff] = null;
	  });
	};

	function rk(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}

	function sk(a, b) {
	  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
	  if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
	  return new qk(a, 0, b ? {
	    hydrate: !0
	  } : void 0);
	}

	function tk(a, b, c, d, e) {
	  var f = c._reactRootContainer;

	  if (f) {
	    var g = f._internalRoot;

	    if ("function" === typeof e) {
	      var h = e;

	      e = function () {
	        var a = mk(g);
	        h.call(a);
	      };
	    }

	    lk(b, g, a, e);
	  } else {
	    f = c._reactRootContainer = sk(c, d);
	    g = f._internalRoot;

	    if ("function" === typeof e) {
	      var k = e;

	      e = function () {
	        var a = mk(g);
	        k.call(a);
	      };
	    }

	    Xj(function () {
	      lk(b, g, a, e);
	    });
	  }

	  return mk(g);
	}

	ec = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 4, b);
	    ok(a, 4);
	  }
	};

	fc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 67108864, b);
	    ok(a, 67108864);
	  }
	};

	gc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg(),
	        c = Ig(a);
	    Jg(a, c, b);
	    ok(a, c);
	  }
	};

	hc = function (a, b) {
	  return b();
	};

	yb = function (a, b, c) {
	  switch (b) {
	    case "input":
	      ab(a, c);
	      b = c.name;

	      if ("radio" === c.type && null != b) {
	        for (c = a; c.parentNode;) c = c.parentNode;

	        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

	        for (b = 0; b < c.length; b++) {
	          var d = c[b];

	          if (d !== a && d.form === a.form) {
	            var e = Db(d);
	            if (!e) throw Error(y$2(90));
	            Wa(d);
	            ab(d, e);
	          }
	        }
	      }

	      break;

	    case "textarea":
	      ib(a, c);
	      break;

	    case "select":
	      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
	  }
	};

	Gb = Wj;

	Hb = function (a, b, c, d, e) {
	  var f = X;
	  X |= 4;

	  try {
	    return gg(98, a.bind(null, b, c, d, e));
	  } finally {
	    X = f, 0 === X && (wj(), ig());
	  }
	};

	Ib = function () {
	  0 === (X & 49) && (Vj(), Oj());
	};

	Jb = function (a, b) {
	  var c = X;
	  X |= 2;

	  try {
	    return a(b);
	  } finally {
	    X = c, 0 === X && (wj(), ig());
	  }
	};

	function uk(a, b) {
	  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (!rk(b)) throw Error(y$2(200));
	  return kk(a, b, null, c);
	}

	var vk = {
	  Events: [Cb, ue$1, Db, Eb, Fb, Oj, {
	    current: !1
	  }]
	},
	    wk = {
	  findFiberByHostInstance: wc,
	  bundleType: 0,
	  version: "17.0.2",
	  rendererPackageName: "react-dom"
	};
	var xk = {
	  bundleType: wk.bundleType,
	  version: wk.version,
	  rendererPackageName: wk.rendererPackageName,
	  rendererConfig: wk.rendererConfig,
	  overrideHookState: null,
	  overrideHookStateDeletePath: null,
	  overrideHookStateRenamePath: null,
	  overrideProps: null,
	  overridePropsDeletePath: null,
	  overridePropsRenamePath: null,
	  setSuspenseHandler: null,
	  scheduleUpdate: null,
	  currentDispatcherRef: ra.ReactCurrentDispatcher,
	  findHostInstanceByFiber: function (a) {
	    a = cc(a);
	    return null === a ? null : a.stateNode;
	  },
	  findFiberByHostInstance: wk.findFiberByHostInstance || pk,
	  findHostInstancesForRefresh: null,
	  scheduleRefresh: null,
	  scheduleRoot: null,
	  setRefreshHandler: null,
	  getCurrentFiber: null
	};

	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!yk.isDisabled && yk.supportsFiber) try {
	    Lf = yk.inject(xk), Mf = yk;
	  } catch (a) {}
	}

	var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
	var createPortal = uk;

	var findDOMNode = function (a) {
	  if (null == a) return null;
	  if (1 === a.nodeType) return a;
	  var b = a._reactInternals;

	  if (void 0 === b) {
	    if ("function" === typeof a.render) throw Error(y$2(188));
	    throw Error(y$2(268, Object.keys(a)));
	  }

	  a = cc(b);
	  a = null === a ? null : a.stateNode;
	  return a;
	};

	var flushSync = function (a, b) {
	  var c = X;
	  if (0 !== (c & 48)) return a(b);
	  X |= 1;

	  try {
	    if (a) return gg(99, a.bind(null, b));
	  } finally {
	    X = c, ig();
	  }
	};

	var hydrate = function (a, b, c) {
	  if (!rk(b)) throw Error(y$2(200));
	  return tk(null, a, b, !0, c);
	};

	var render$1 = function (a, b, c) {
	  if (!rk(b)) throw Error(y$2(200));
	  return tk(null, a, b, !1, c);
	};

	var unmountComponentAtNode = function (a) {
	  if (!rk(a)) throw Error(y$2(40));
	  return a._reactRootContainer ? (Xj(function () {
	    tk(null, null, a, !1, function () {
	      a._reactRootContainer = null;
	      a[ff] = null;
	    });
	  }), !0) : !1;
	};

	var unstable_batchedUpdates = Wj;

	var unstable_createPortal = function (a, b) {
	  return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
	};

	var unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
	  if (!rk(c)) throw Error(y$2(200));
	  if (null == a || void 0 === a._reactInternals) throw Error(y$2(38));
	  return tk(a, b, c, !1, d);
	};

	var version = "17.0.2";
	var reactDom_production_min = {
	  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	  createPortal: createPortal,
	  findDOMNode: findDOMNode,
	  flushSync: flushSync,
	  hydrate: hydrate,
	  render: render$1,
	  unmountComponentAtNode: unmountComponentAtNode,
	  unstable_batchedUpdates: unstable_batchedUpdates,
	  unstable_createPortal: unstable_createPortal,
	  unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
	  version: version
	};

	/** @license React v0.20.2
	 * scheduler-tracing.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var b$1 = 0;
	var __interactionsRef = null;
	var __subscriberRef = null;

	var unstable_clear = function (a) {
	  return a();
	};

	var unstable_getCurrent = function () {
	  return null;
	};

	var unstable_getThreadID = function () {
	  return ++b$1;
	};

	var unstable_subscribe = function () {};

	var unstable_trace = function (a, d, c) {
	  return c();
	};

	var unstable_unsubscribe = function () {};

	var unstable_wrap = function (a) {
	  return a;
	};

	var schedulerTracing_production_min = {
	  __interactionsRef: __interactionsRef,
	  __subscriberRef: __subscriberRef,
	  unstable_clear: unstable_clear,
	  unstable_getCurrent: unstable_getCurrent,
	  unstable_getThreadID: unstable_getThreadID,
	  unstable_subscribe: unstable_subscribe,
	  unstable_trace: unstable_trace,
	  unstable_unsubscribe: unstable_unsubscribe,
	  unstable_wrap: unstable_wrap
	};

	createCommonjsModule(function (module, exports) {
	});

	createCommonjsModule(function (module) {

	  {
	    module.exports = schedulerTracing_production_min;
	  }
	});

	createCommonjsModule(function (module, exports) {
	});

	var reactDom = createCommonjsModule(function (module) {

	  function checkDCE() {
	    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
	      return;
	    }

	    try {
	      // Verify that the code above has been dead code eliminated (DCE'd).
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	    } catch (err) {
	      // DevTools shouldn't crash React, no matter what.
	      // We should still report in case we break this code.
	      console.error(err);
	    }
	  }

	  {
	    // DCE check should happen before ReactDOM bundle executes so that
	    // DevTools can report bad minification during injection.
	    checkDCE();
	    module.exports = reactDom_production_min;
	  }
	});

	// We currently assume that these two elements will be found.
	// Might be worth implementing checking in the future.
	let reactMount = document.getElementById('MSFS_REACT_MOUNT');
	/**
	 * Returns the render target which React mounts onto
	 */

	const getRenderTarget = () => reactMount;
	/**
	 * Returns the root element which receives `update` events
	 */

	const getRootElement = () => {
	  var _reactMount;

	  if ((_reactMount = reactMount) !== null && _reactMount !== void 0 && _reactMount.parentElement) {
	    return reactMount.parentElement;
	  }

	  throw new Error('Could not find rootElement');
	};

	var defineProperty$1 = createCommonjsModule(function (module) {
	  function _defineProperty(obj, key, value) {
	    if (key in obj) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    } else {
	      obj[key] = value;
	    }

	    return obj;
	  }

	  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	var _defineProperty$1 = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$1);

	const useUpdate = handler => {
	  // Logic based on https://usehooks.com/useEventListener/
	  const savedHandler = react.useRef(handler);
	  react.useEffect(() => {
	    savedHandler.current = handler;
	  }, [handler]);
	  react.useEffect(() => {
	    const wrappedHandler = event => {
	      savedHandler.current(event.detail);
	    };

	    getRootElement().addEventListener('update', wrappedHandler);
	    return () => {
	      getRootElement().removeEventListener('update', wrappedHandler);
	    };
	  });
	};

	var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {

	  var g = 60103;
	  exports.Fragment = 60107;

	  if ("function" === typeof Symbol && Symbol.for) {
	    var h = Symbol.for;
	    g = h("react.element");
	    exports.Fragment = h("react.fragment");
	  }

	  var m = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	      n = Object.prototype.hasOwnProperty,
	      p = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };

	  function q(c, a, k) {
	    var b,
	        d = {},
	        e = null,
	        l = null;
	    void 0 !== k && (e = "" + k);
	    void 0 !== a.key && (e = "" + a.key);
	    void 0 !== a.ref && (l = a.ref);

	    for (b in a) n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);

	    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
	    return {
	      $$typeof: g,
	      type: c,
	      key: e,
	      ref: l,
	      props: d,
	      _owner: m.current
	    };
	  }

	  exports.jsx = q;
	  exports.jsxs = q;
	});

	createCommonjsModule(function (module, exports) {
	});

	var jsxRuntime = createCommonjsModule(function (module) {

	  {
	    module.exports = reactJsxRuntime_production_min;
	  }
	});

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	const normalizeUnitName = unit => {
	  switch (unit) {
	    case 'bool':
	    case 'Bool':
	    case 'boolean':
	    case 'Boolean':
	      return 'bool';

	    case 'number':
	    case 'Number':
	      return 'number';

	    case 'Degrees':
	    case 'degree':
	      return 'degree';

	    case 'Percent':
	    case 'percent':
	      return 'percent';

	    case 'Feet':
	    case 'feet':
	    case 'feets':
	    case 'Feets':
	      return 'feet';

	    case 'Knots':
	    case 'knots':
	      return 'knots';

	    case 'Meters':
	      return 'Meter';

	    default:
	      return unit;
	  }
	};

	const errorCallback = () => {
	  throw Error('useSimVar was called in a React tree with no SimVarProvider');
	};

	const context = /*#__PURE__*/react.createContext({
	  retrieve: errorCallback,
	  update: errorCallback,
	  register: errorCallback,
	  unregister: errorCallback
	});
	const {
	  Provider: InternalProvider
	} = context;

	// this can also be replaced once /typings are available

	/**
	 * This component provides the basic functionality for the useSimVar hooks.
	 * By keeping the last known SimVar values inside this provider, we're
	 * effectively caching each SimVar, so that there is no additional overhead when
	 * using multiple useSimVar hooks for the same SimVar.
	 * For improved performance, this component will only trigger renders when the
	 * "update" custom event is emitted through an instrument.
	 */
	const SimVarProvider = ({
	  children
	}) => {
	  const listeners = react.useRef({});
	  const [cache, setCache] = react.useState({});
	  useUpdate(deltaTime => {
	    const stateUpdates = {};

	    for (const [key, intervals] of Object.entries(listeners.current)) {
	      // First, let's check if there are any listeners at all
	      if (!intervals.length) {
	        continue;
	      } // The refresh time is given by the *smallest* maximum update
	      // interval.


	      const threshold = Math.min(...intervals);
	      const lastUpdatedAgo = (cache[key] ? cache[key].lastUpdatedAgo || 0 : 0) + deltaTime;

	      if (lastUpdatedAgo >= threshold) {
	        // At this point, as we haven't updated this SimVar recently, we
	        // need to fetch the latest value from the simulator and store
	        // it.
	        const [name, rawUnit] = key.split('/');
	        const unit = normalizeUnitName(rawUnit);
	        stateUpdates[key] = {
	          value: name.startsWith('_GLOBAL_') ? SimVar.GetGlobalVarValue(name.substr(8), unit) : SimVar.GetSimVarValue(name, unit),
	          lastUpdatedAgo: lastUpdatedAgo % threshold
	        };
	      } else {
	        // Otherwise, just increment lastUpdatedAgo.
	        stateUpdates[key] = {
	          lastUpdatedAgo
	        };
	      }
	    }

	    setCache(oldCache => {
	      const newCache = {};

	      for (const [key, update] of Object.entries(stateUpdates)) {
	        newCache[key] = _objectSpread(_objectSpread({}, oldCache[key]), update);
	      }

	      return _objectSpread(_objectSpread({}, oldCache), newCache);
	    });
	  });

	  const getKey = (name, unit, global) => "".concat(global ? '_GLOBAL_' : '').concat(name, "/").concat(normalizeUnitName(unit));
	  /**
	   * This function will be called by the SimVar hooks through the context and
	   * retrieves the appropriate SimVar value from the cache if it exists, and
	   * retrieve it from the simulator otherwise.
	   * @param name The SimVar to update.
	   * @param unit The unit of the SimVar to update.
	   * @param force Whether to always bypass the cache and always retrieve it
	   * from the simulator.
	   */


	  const retrieve = (name, unit, force, global) => {
	    const key = getKey(name, unit, global || false);

	    if (cache[key] && !force) {
	      return cache[key].value;
	    }

	    const value = global ? SimVar.GetGlobalVarValue(name, unit) : SimVar.GetSimVarValue(name, unit);
	    setCache(oldCache => _objectSpread(_objectSpread({}, oldCache), {}, {
	      [key]: {
	        value,
	        lastUpdatedAgo: 0
	      }
	    }));
	    return value;
	  };
	  /**
	   * This function will be called by the SimVar hooks through the context and
	   * updates the appropriate SimVar for the specific unit with the supplied
	   * value.
	   * @param name The SimVar to update.
	   * @param unit The unit of the SimVar to update.
	   * @param value {*|(function(*): *)} Either the new value for the
	   * SimVar, or an update function that takes the old value and returns an
	   * updated value.
	   * @param proxy If the SimVar used to set the SimVar is different from the
	   * SimVar used to retrieve it, set this parameter to the SimVar for the set
	   * operation.
	   */


	  const update = (name, unit, value, proxy) => {
	    const key = getKey(name, unit, false);
	    setCache(oldCache => {
	      const newValue = typeof value === 'function' ? value(oldCache[key].value) : value;
	      SimVar.SetSimVarValue(proxy || name, unit, newValue);
	      return _objectSpread(_objectSpread({}, oldCache), {}, {
	        [key]: {
	          value: newValue,
	          lastUpdatedAgo: 0
	        }
	      });
	    });
	  };
	  /**
	   * This function will be called by the useSimVar hook through the context
	   * and ensures the SimVar with the supplied name and unit will be updated
	   * every maxStaleness.
	   */


	  const register = (name, unit, maxStaleness, global) => {
	    const key = getKey(name, unit, global);

	    if (!listeners.current[key]) {
	      listeners.current[key] = [];
	    }

	    listeners.current[key].push(maxStaleness || 0);
	  };
	  /**
	   * This function will be called by the useSimVar hook through the context
	   * and notifies us that there is one listener less for this specific SimVar
	   * and unit combination.
	   */


	  const unregister = (name, unit, maxStaleness, global) => {
	    const key = getKey(name, unit, global);
	    const old = listeners.current[key];

	    if (!Array.isArray(old) || old.length === 0) {
	      throw new Error('Attempted to unregisterHook with no known listener');
	    }

	    if (old.length === 1) {
	      // if we're unregistering the last entry, delete the array...
	      delete listeners.current[key];
	    } else {
	      // ...otherwise, filter out the first occurence of this value
	      const index = listeners.current[key].indexOf(maxStaleness || 0); // splice removes in-place, so an assignment would be wrong here as the return value is the removed element

	      listeners.current[key].splice(index, 1);
	    }
	  };

	  return /*#__PURE__*/jsxRuntime.jsx(InternalProvider, {
	    value: {
	      retrieve,
	      update,
	      register,
	      unregister
	    },
	    children: children
	  });
	};
	/**
	 * The useSimVar hook provides an easy way to read and write SimVars from React.
	 *
	 * It's signature is similar to useState and it regularly refreshes the SimVar
	 * to ensure your React component stays in sync with the SimVar being modified
	 * from outside your component (like from other components, XML or SimConnect).
	 *
	 * You may optionally specify the maximum refresh interval. If the same SimVar
	 * is used in multiple places, this hook will automatically deduplicate those
	 * for maximum performance, rather than fetching the SimVar multiple times.
	 * Setting the SimVar will instantly cause it to be updated in all other places
	 * within the same React tree.
	 *
	 * @param name The name of the SimVar.
	 * @param unit The unit of the SimVar.
	 * @param maxStaleness The maximum time in milliseconds that may elapse before
	 * the next render will cause a SimVar refresh from the simulator. This
	 * parameter is only an upper bound! If another hook requests the same SimVar
	 * with a lower maxStaleness, this hook will also benefit from that and refresh
	 * the value more often.
	 *
	 * @example
	 * // the return value is the value itself and a setter, similar to useState
	 * const [v1, setV1] = useSimVar('L:AIRLINER_V1_SPEED', 'Knots');
	 *
	 * @example
	 * // only refresh the SimVar every 500ms (unless this SimVar is lower elsewhere)
	 * const [lightsTest] = useSimVar('L:XMLVAR_LTS_Test', 'Bool', 500);
	 *
	 * @returns {[*, (function(*): void)]}
	 *
	 * @see {@link useSplitSimVar} if your SimVar is set through a K event
	 * @see {@link useInteractionSimVar} if you emit an H event whenever your SimVar changes
	 * @see {@link useGlobalVar} if you have a Global Var instead
	 */


	const useSimVar = (name, unit, maxStaleness = 0) => {
	  const value = useSimVarValue(name, unit, maxStaleness);
	  const setter = useSimVarSetter(name, unit);
	  return [value, setter];
	};
	/**
	 * This is an internal hook that exposes the internal value for a SimVar only.
	 * You will usually want to useSimVar instead. Don't use this unless you know
	 * what you're doing and writing your own hook.
	 */

	const useSimVarValue = (name, unit, maxStaleness) => {
	  const contextValue = react.useContext(context);
	  react.useEffect(() => {
	    // This part of useEffect will be called whenever either:
	    // - the component has just mounted, or
	    // - one the parameters below (name, unit, maxStaleness) has changed.
	    // In these cases, we want to register our current parameters with the
	    // SimVarProvider that we access through the context.
	    contextValue.register(name, unit, maxStaleness, false);
	    return () => {
	      // This part of useEffect will be called whenever either:
	      // - one of the parameters below (name, unit, maxStaleness) is about
	      //   to change, or
	      // - the component is about to unmount
	      // In these cases, we want to unregister our current parameters from
	      // the SimVar provider, that we again access through the context.
	      contextValue.unregister(name, unit, maxStaleness, false);
	    };
	  }, [name, unit, maxStaleness]);
	  return contextValue.retrieve(name, unit);
	};
	/**
	 * This is an internal hook that exposes the internal setter for a SimVar only.
	 * You will usually want to useSimVar instead. Don't use this unless you know
	 * what you're doing and writing your own hook.
	 */

	const useSimVarSetter = (name, unit, proxy) => {
	  const contextValue = react.useContext(context);
	  return value => contextValue.update(name, unit, value, proxy);
	};

	const render = Slot => {
	  reactDom.render( /*#__PURE__*/jsxRuntime.jsx(SimVarProvider, {
	    children: Slot
	  }), getRenderTarget());
	};

	const Home = () => {
	  return /*#__PURE__*/jsxRuntime.jsx("div", {
	    className: "homeContainer"
	  });
	};

	function _extends$1() {
	  _extends$1 = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends$1.apply(this, arguments);
	}

	/**
	 * Actions represent the type of change to a location value.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
	 */

	var Action;

	(function (Action) {
	  /**
	   * A POP indicates a change to an arbitrary index in the history stack, such
	   * as a back or forward navigation. It does not describe the direction of the
	   * navigation, only that the current index changed.
	   *
	   * Note: This is the default action for newly created history objects.
	   */
	  Action["Pop"] = "POP";
	  /**
	   * A PUSH indicates a new entry being added to the history stack, such as when
	   * a link is clicked and a new page loads. When this happens, all subsequent
	   * entries in the stack are lost.
	   */

	  Action["Push"] = "PUSH";
	  /**
	   * A REPLACE indicates the entry at the current index in the history stack
	   * being replaced by a new one.
	   */

	  Action["Replace"] = "REPLACE";
	})(Action || (Action = {}));

	var readOnly = function (obj) {
	  return obj;
	};
	/**
	 * Memory history stores the current location in memory. It is designed for use
	 * in stateful non-browser environments like tests and React Native.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
	 */


	function createMemoryHistory(options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var _options3 = options,
	      _options3$initialEntr = _options3.initialEntries,
	      initialEntries = _options3$initialEntr === void 0 ? ['/'] : _options3$initialEntr,
	      initialIndex = _options3.initialIndex;
	  var entries = initialEntries.map(function (entry) {
	    var location = readOnly(_extends$1({
	      pathname: '/',
	      search: '',
	      hash: '',
	      state: null,
	      key: createKey()
	    }, typeof entry === 'string' ? parsePath(entry) : entry));
	    return location;
	  });
	  var index = clamp$3(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
	  var action = Action.Pop;
	  var location = entries[index];
	  var listeners = createEvents();
	  var blockers = createEvents();

	  function createHref(to) {
	    return typeof to === 'string' ? to : createPath(to);
	  }

	  function getNextLocation(to, state) {
	    if (state === void 0) {
	      state = null;
	    }

	    return readOnly(_extends$1({
	      pathname: location.pathname,
	      search: '',
	      hash: ''
	    }, typeof to === 'string' ? parsePath(to) : to, {
	      state: state,
	      key: createKey()
	    }));
	  }

	  function allowTx(action, location, retry) {
	    return !blockers.length || (blockers.call({
	      action: action,
	      location: location,
	      retry: retry
	    }), false);
	  }

	  function applyTx(nextAction, nextLocation) {
	    action = nextAction;
	    location = nextLocation;
	    listeners.call({
	      action: action,
	      location: location
	    });
	  }

	  function push(to, state) {
	    var nextAction = Action.Push;
	    var nextLocation = getNextLocation(to, state);

	    function retry() {
	      push(to, state);
	    }

	    if (allowTx(nextAction, nextLocation, retry)) {
	      index += 1;
	      entries.splice(index, entries.length, nextLocation);
	      applyTx(nextAction, nextLocation);
	    }
	  }

	  function replace(to, state) {
	    var nextAction = Action.Replace;
	    var nextLocation = getNextLocation(to, state);

	    function retry() {
	      replace(to, state);
	    }

	    if (allowTx(nextAction, nextLocation, retry)) {
	      entries[index] = nextLocation;
	      applyTx(nextAction, nextLocation);
	    }
	  }

	  function go(delta) {
	    var nextIndex = clamp$3(index + delta, 0, entries.length - 1);
	    var nextAction = Action.Pop;
	    var nextLocation = entries[nextIndex];

	    function retry() {
	      go(delta);
	    }

	    if (allowTx(nextAction, nextLocation, retry)) {
	      index = nextIndex;
	      applyTx(nextAction, nextLocation);
	    }
	  }

	  var history = {
	    get index() {
	      return index;
	    },

	    get action() {
	      return action;
	    },

	    get location() {
	      return location;
	    },

	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    back: function back() {
	      go(-1);
	    },
	    forward: function forward() {
	      go(1);
	    },
	    listen: function listen(listener) {
	      return listeners.push(listener);
	    },
	    block: function block(blocker) {
	      return blockers.push(blocker);
	    }
	  };
	  return history;
	} ////////////////////////////////////////////////////////////////////////////////
	// UTILS
	////////////////////////////////////////////////////////////////////////////////


	function clamp$3(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	}

	function createEvents() {
	  var handlers = [];
	  return {
	    get length() {
	      return handlers.length;
	    },

	    push: function push(fn) {
	      handlers.push(fn);
	      return function () {
	        handlers = handlers.filter(function (handler) {
	          return handler !== fn;
	        });
	      };
	    },
	    call: function call(arg) {
	      handlers.forEach(function (fn) {
	        return fn && fn(arg);
	      });
	    }
	  };
	}

	function createKey() {
	  return Math.random().toString(36).substr(2, 8);
	}
	/**
	 * Creates a string URL path from the given pathname, search, and hash components.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
	 */


	function createPath(_ref) {
	  var _ref$pathname = _ref.pathname,
	      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
	      _ref$search = _ref.search,
	      search = _ref$search === void 0 ? '' : _ref$search,
	      _ref$hash = _ref.hash,
	      hash = _ref$hash === void 0 ? '' : _ref$hash;
	  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
	  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
	  return pathname;
	}
	/**
	 * Parses a string URL path into its separate pathname, search, and hash components.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
	 */


	function parsePath(path) {
	  var parsedPath = {};

	  if (path) {
	    var hashIndex = path.indexOf('#');

	    if (hashIndex >= 0) {
	      parsedPath.hash = path.substr(hashIndex);
	      path = path.substr(0, hashIndex);
	    }

	    var searchIndex = path.indexOf('?');

	    if (searchIndex >= 0) {
	      parsedPath.search = path.substr(searchIndex);
	      path = path.substr(0, searchIndex);
	    }

	    if (path) {
	      parsedPath.pathname = path;
	    }
	  }

	  return parsedPath;
	}

	/**
	 * React Router v6.0.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	function invariant(cond, message) {
	  if (!cond) throw new Error(message);
	}
	// CONTEXT
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * A Navigator is a "location changer"; it's how you get to different locations.
	 *
	 * Every history instance conforms to the Navigator interface, but the
	 * distinction is useful primarily when it comes to the low-level <Router> API
	 * where both the location and a navigator must be provided separately in order
	 * to avoid "tearing" that may occur in a suspense-enabled app if the action
	 * and/or location were to be read directly from the history instance.
	 */


	const NavigationContext = /*#__PURE__*/react.createContext(null);

	const LocationContext = /*#__PURE__*/react.createContext(null);

	const RouteContext = /*#__PURE__*/react.createContext({
	  outlet: null,
	  matches: []
	});
	// COMPONENTS
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * A <Router> that stores all entries in memory.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
	 */


	function MemoryRouter(_ref) {
	  let {
	    basename,
	    children,
	    initialEntries,
	    initialIndex
	  } = _ref;
	  let historyRef = react.useRef();

	  if (historyRef.current == null) {
	    historyRef.current = createMemoryHistory({
	      initialEntries,
	      initialIndex
	    });
	  }

	  let history = historyRef.current;
	  let [state, setState] = react.useState({
	    action: history.action,
	    location: history.location
	  });
	  react.useLayoutEffect(() => history.listen(setState), [history]);
	  return /*#__PURE__*/react.createElement(Router, {
	    basename: basename,
	    children: children,
	    location: state.location,
	    navigationType: state.action,
	    navigator: history
	  });
	}
	/**
	 * Renders the child route's element, if there is one.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#outlet
	 */


	function Outlet(_props) {
	  return useOutlet();
	}
	/**
	 * Declares an element that should be rendered at a certain URL path.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#route
	 */


	function Route(_props) {
	  invariant(false);
	}
	/**
	 * Provides location context for the rest of the app.
	 *
	 * Note: You usually won't render a <Router> directly. Instead, you'll render a
	 * router that is more specific to your environment such as a <BrowserRouter>
	 * in web browsers or a <StaticRouter> for server rendering.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#router
	 */


	function Router(_ref3) {
	  let {
	    basename: basenameProp = "/",
	    children = null,
	    location: locationProp,
	    navigationType = Action.Pop,
	    navigator,
	    static: staticProp = false
	  } = _ref3;
	  !!useInRouterContext() ? invariant(false) : void 0;
	  let basename = normalizePathname(basenameProp);
	  let navigationContext = react.useMemo(() => ({
	    basename,
	    navigator,
	    static: staticProp
	  }), [basename, navigator, staticProp]);

	  if (typeof locationProp === "string") {
	    locationProp = parsePath(locationProp);
	  }

	  let {
	    pathname = "/",
	    search = "",
	    hash = "",
	    state = null,
	    key = "default"
	  } = locationProp;
	  let location = react.useMemo(() => {
	    let trailingPathname = stripBasename(pathname, basename);

	    if (trailingPathname == null) {
	      return null;
	    }

	    return {
	      pathname: trailingPathname,
	      search,
	      hash,
	      state,
	      key
	    };
	  }, [basename, pathname, search, hash, state, key]);

	  if (location == null) {
	    return null;
	  }

	  return /*#__PURE__*/react.createElement(NavigationContext.Provider, {
	    value: navigationContext
	  }, /*#__PURE__*/react.createElement(LocationContext.Provider, {
	    children: children,
	    value: {
	      location,
	      navigationType
	    }
	  }));
	}
	/**
	 * A container for a nested tree of <Route> elements that renders the branch
	 * that best matches the current location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#routes
	 */


	function Routes(_ref4) {
	  let {
	    children,
	    location
	  } = _ref4;
	  return useRoutes(createRoutesFromChildren(children), location);
	} ///////////////////////////////////////////////////////////////////////////////
	// HOOKS
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * Returns the full href for the given "to" value. This is useful for building
	 * custom links that are also accessible and preserve right-click behavior.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#usehref
	 */


	function useHref(to) {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    basename,
	    navigator
	  } = react.useContext(NavigationContext);
	  let {
	    hash,
	    pathname,
	    search
	  } = useResolvedPath(to);
	  let joinedPathname = pathname;

	  if (basename !== "/") {
	    let toPathname = getToPathname(to);
	    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
	    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
	  }

	  return navigator.createHref({
	    pathname: joinedPathname,
	    search,
	    hash
	  });
	}
	/**
	 * Returns true if this component is a descendant of a <Router>.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
	 */


	function useInRouterContext() {
	  return react.useContext(LocationContext) != null;
	}
	/**
	 * Returns the current location object, which represents the current URL in web
	 * browsers.
	 *
	 * Note: If you're using this it may mean you're doing some of your own
	 * "routing" in your app, and we'd like to know what your use case is. We may
	 * be able to provide something higher-level to better suit your needs.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#uselocation
	 */


	function useLocation() {
	  !useInRouterContext() ? invariant(false) : void 0;
	  return react.useContext(LocationContext).location;
	}
	/**
	 * The interface for the navigate() function returned from useNavigate().
	 */

	/**
	 * Returns an imperative method for changing the location. Used by <Link>s, but
	 * may also be used by other elements to change the location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
	 */


	function useNavigate() {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    basename,
	    navigator
	  } = react.useContext(NavigationContext);
	  let {
	    matches
	  } = react.useContext(RouteContext);
	  let {
	    pathname: locationPathname
	  } = useLocation();
	  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
	  let activeRef = react.useRef(false);
	  react.useEffect(() => {
	    activeRef.current = true;
	  });
	  let navigate = react.useCallback(function (to, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    if (!activeRef.current) return;

	    if (typeof to === "number") {
	      navigator.go(to);
	      return;
	    }

	    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

	    if (basename !== "/") {
	      path.pathname = joinPaths([basename, path.pathname]);
	    }

	    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
	  }, [basename, navigator, routePathnamesJson, locationPathname]);
	  return navigate;
	}
	/**
	 * Returns the element for the child route at this level of the route
	 * hierarchy. Used internally by <Outlet> to render child routes.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
	 */


	function useOutlet() {
	  return react.useContext(RouteContext).outlet;
	}
	/**
	 * Resolves the pathname of the given `to` value against the current location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
	 */


	function useResolvedPath(to) {
	  let {
	    matches
	  } = react.useContext(RouteContext);
	  let {
	    pathname: locationPathname
	  } = useLocation();
	  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
	  return react.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
	}
	/**
	 * Returns the element of the route that matched the current location, prepared
	 * with the correct context to render the remainder of the route tree. Route
	 * elements in the tree must render an <Outlet> to render their child route's
	 * element.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#useroutes
	 */


	function useRoutes(routes, locationArg) {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    matches: parentMatches
	  } = react.useContext(RouteContext);
	  let routeMatch = parentMatches[parentMatches.length - 1];
	  let parentParams = routeMatch ? routeMatch.params : {};
	  routeMatch ? routeMatch.pathname : "/";
	  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
	  routeMatch && routeMatch.route;

	  let locationFromContext = useLocation();
	  let location;

	  if (locationArg) {
	    var _parsedLocationArg$pa;

	    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
	    location = parsedLocationArg;
	  } else {
	    location = locationFromContext;
	  }

	  let pathname = location.pathname || "/";
	  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
	  let matches = matchRoutes(routes, {
	    pathname: remainingPathname
	  });

	  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
	    params: Object.assign({}, parentParams, match.params),
	    pathname: joinPaths([parentPathnameBase, match.pathname]),
	    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
	  })), parentMatches);
	} ///////////////////////////////////////////////////////////////////////////////
	// UTILS
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * Creates a route config from a React "children" object, which is usually
	 * either a `<Route>` element or an array of them. Used internally by
	 * `<Routes>` to create a route config from its children.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
	 */


	function createRoutesFromChildren(children) {
	  let routes = [];
	  react.Children.forEach(children, element => {
	    if (! /*#__PURE__*/react.isValidElement(element)) {
	      // Ignore non-elements. This allows people to more easily inline
	      // conditionals in their route config.
	      return;
	    }

	    if (element.type === react.Fragment) {
	      // Transparently support React.Fragment and its children.
	      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
	      return;
	    }

	    !(element.type === Route) ? invariant(false) : void 0;
	    let route = {
	      caseSensitive: element.props.caseSensitive,
	      element: element.props.element,
	      index: element.props.index,
	      path: element.props.path
	    };

	    if (element.props.children) {
	      route.children = createRoutesFromChildren(element.props.children);
	    }

	    routes.push(route);
	  });
	  return routes;
	}
	/**
	 * A RouteMatch contains info about how a route matched a URL.
	 */

	/**
	 * Matches the given routes to a location and returns the match data.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
	 */


	function matchRoutes(routes, locationArg, basename) {
	  if (basename === void 0) {
	    basename = "/";
	  }

	  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	  let pathname = stripBasename(location.pathname || "/", basename);

	  if (pathname == null) {
	    return null;
	  }

	  let branches = flattenRoutes(routes);
	  rankRouteBranches(branches);
	  let matches = null;

	  for (let i = 0; matches == null && i < branches.length; ++i) {
	    matches = matchRouteBranch(branches[i], routes, pathname);
	  }

	  return matches;
	}

	function flattenRoutes(routes, branches, parentsMeta, parentPath) {
	  if (branches === void 0) {
	    branches = [];
	  }

	  if (parentsMeta === void 0) {
	    parentsMeta = [];
	  }

	  if (parentPath === void 0) {
	    parentPath = "";
	  }

	  routes.forEach((route, index) => {
	    let meta = {
	      relativePath: route.path || "",
	      caseSensitive: route.caseSensitive === true,
	      childrenIndex: index
	    };

	    if (meta.relativePath.startsWith("/")) {
	      !meta.relativePath.startsWith(parentPath) ? invariant(false) : void 0;
	      meta.relativePath = meta.relativePath.slice(parentPath.length);
	    }

	    let path = joinPaths([parentPath, meta.relativePath]);
	    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
	    // route tree depth-first and child routes appear before their parents in
	    // the "flattened" version.

	    if (route.children && route.children.length > 0) {
	      !(route.index !== true) ? invariant(false) : void 0;
	      flattenRoutes(route.children, branches, routesMeta, path);
	    } // Routes without a path shouldn't ever match by themselves unless they are
	    // index routes, so don't add them to the list of possible branches.


	    if (route.path == null && !route.index) {
	      return;
	    }

	    branches.push({
	      path,
	      score: computeScore(path, route.index),
	      routesMeta
	    });
	  });
	  return branches;
	}

	function rankRouteBranches(branches) {
	  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
	  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
	}

	const paramRe = /^:\w+$/;
	const dynamicSegmentValue = 3;
	const indexRouteValue = 2;
	const emptySegmentValue = 1;
	const staticSegmentValue = 10;
	const splatPenalty = -2;

	const isSplat = s => s === "*";

	function computeScore(path, index) {
	  let segments = path.split("/");
	  let initialScore = segments.length;

	  if (segments.some(isSplat)) {
	    initialScore += splatPenalty;
	  }

	  if (index) {
	    initialScore += indexRouteValue;
	  }

	  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
	}

	function compareIndexes(a, b) {
	  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
	  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
	  // first. This allows people to have fine-grained control over the matching
	  // behavior by simply putting routes with identical paths in the order they
	  // want them tried.
	  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
	  // so they sort equally.
	  0;
	}

	function matchRouteBranch(branch, // TODO: attach original route object inside routesMeta so we don't need this arg
	routesArg, pathname) {
	  let routes = routesArg;
	  let {
	    routesMeta
	  } = branch;
	  let matchedParams = {};
	  let matchedPathname = "/";
	  let matches = [];

	  for (let i = 0; i < routesMeta.length; ++i) {
	    let meta = routesMeta[i];
	    let end = i === routesMeta.length - 1;
	    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
	    let match = matchPath({
	      path: meta.relativePath,
	      caseSensitive: meta.caseSensitive,
	      end
	    }, remainingPathname);
	    if (!match) return null;
	    Object.assign(matchedParams, match.params);
	    let route = routes[meta.childrenIndex];
	    matches.push({
	      params: matchedParams,
	      pathname: joinPaths([matchedPathname, match.pathname]),
	      pathnameBase: joinPaths([matchedPathname, match.pathnameBase]),
	      route
	    });

	    if (match.pathnameBase !== "/") {
	      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
	    }

	    routes = route.children;
	  }

	  return matches;
	}

	function _renderMatches(matches, parentMatches) {
	  if (parentMatches === void 0) {
	    parentMatches = [];
	  }

	  if (matches == null) return null;
	  return matches.reduceRight((outlet, match, index) => {
	    return /*#__PURE__*/react.createElement(RouteContext.Provider, {
	      children: match.route.element !== undefined ? match.route.element : /*#__PURE__*/react.createElement(Outlet, null),
	      value: {
	        outlet,
	        matches: parentMatches.concat(matches.slice(0, index + 1))
	      }
	    });
	  }, null);
	}
	/**
	 * A PathPattern is used to match on some portion of a URL pathname.
	 */

	/**
	 * Performs pattern matching on a URL pathname and returns information about
	 * the match.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#matchpath
	 */


	function matchPath(pattern, pathname) {
	  if (typeof pattern === "string") {
	    pattern = {
	      path: pattern,
	      caseSensitive: false,
	      end: true
	    };
	  }

	  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
	  let match = pathname.match(matcher);
	  if (!match) return null;
	  let matchedPathname = match[0];
	  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
	  let captureGroups = match.slice(1);
	  let params = paramNames.reduce((memo, paramName, index) => {
	    // We need to compute the pathnameBase here using the raw splat value
	    // instead of using params["*"] later because it will be decoded then
	    if (paramName === "*") {
	      let splatValue = captureGroups[index] || "";
	      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
	    }

	    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "");
	    return memo;
	  }, {});
	  return {
	    params,
	    pathname: matchedPathname,
	    pathnameBase,
	    pattern
	  };
	}

	function compilePath(path, caseSensitive, end) {
	  if (caseSensitive === void 0) {
	    caseSensitive = false;
	  }

	  if (end === void 0) {
	    end = true;
	  }
	  let paramNames = [];
	  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
	  .replace(/^\/*/, "/") // Make sure it has a leading /
	  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
	  .replace(/:(\w+)/g, (_, paramName) => {
	    paramNames.push(paramName);
	    return "([^\\/]+)";
	  });

	  if (path.endsWith("*")) {
	    paramNames.push("*");
	    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
	    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
	  } else {
	    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
	    : // Otherwise, at least match a word boundary. This restricts parent
	    // routes to matching only their own words and nothing more, e.g. parent
	    // route "/home" should not match "/home2".
	    "(?:\\b|$)";
	  }

	  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
	  return [matcher, paramNames];
	}

	function safelyDecodeURIComponent(value, paramName) {
	  try {
	    return decodeURIComponent(value);
	  } catch (error) {
	    return value;
	  }
	}
	/**
	 * Returns a resolved path object relative to the given pathname.
	 *
	 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
	 */


	function resolvePath(to, fromPathname) {
	  if (fromPathname === void 0) {
	    fromPathname = "/";
	  }

	  let {
	    pathname: toPathname,
	    search = "",
	    hash = ""
	  } = typeof to === "string" ? parsePath(to) : to;
	  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
	  return {
	    pathname,
	    search: normalizeSearch(search),
	    hash: normalizeHash(hash)
	  };
	}

	function resolvePathname(relativePath, fromPathname) {
	  let segments = fromPathname.replace(/\/+$/, "").split("/");
	  let relativeSegments = relativePath.split("/");
	  relativeSegments.forEach(segment => {
	    if (segment === "..") {
	      // Keep the root "" segment so the pathname starts at /
	      if (segments.length > 1) segments.pop();
	    } else if (segment !== ".") {
	      segments.push(segment);
	    }
	  });
	  return segments.length > 1 ? segments.join("/") : "/";
	}

	function resolveTo(toArg, routePathnames, locationPathname) {
	  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
	  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
	  // route context. This is explained in `Note on `<Link to>` values` in our
	  // migration guide from v5 as a means of disambiguation between `to` values
	  // that begin with `/` and those that do not. However, this is problematic for
	  // `to` values that do not provide a pathname. `to` can simply be a search or
	  // hash string, in which case we should assume that the navigation is relative
	  // to the current location's pathname and *not* the route pathname.

	  let from;

	  if (toPathname == null) {
	    from = locationPathname;
	  } else {
	    let routePathnameIndex = routePathnames.length - 1;

	    if (toPathname.startsWith("..")) {
	      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
	      // URL segment".  This is a key difference from how <a href> works and a
	      // major reason we call this a "to" value instead of a "href".

	      while (toSegments[0] === "..") {
	        toSegments.shift();
	        routePathnameIndex -= 1;
	      }

	      to.pathname = toSegments.join("/");
	    } // If there are more ".." segments than parent routes, resolve relative to
	    // the root / URL.


	    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	  }

	  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

	  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
	    path.pathname += "/";
	  }

	  return path;
	}

	function getToPathname(to) {
	  // Empty strings should be treated the same as / paths
	  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
	}

	function stripBasename(pathname, basename) {
	  if (basename === "/") return pathname;

	  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
	    return null;
	  }

	  let nextChar = pathname.charAt(basename.length);

	  if (nextChar && nextChar !== "/") {
	    // pathname does not start with basename/
	    return null;
	  }

	  return pathname.slice(basename.length) || "/";
	}

	const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");

	const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

	const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

	const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash; ///////////////////////////////////////////////////////////////////////////////

	/**
	 * React Router DOM v6.0.2
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose$1(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	const _excluded$i = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
	      _excluded2$1 = ["aria-current", "caseSensitive", "className", "end", "style", "to"];

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	/**
	 * The public API for rendering a history-aware <a>.
	 */


	const Link = /*#__PURE__*/react.forwardRef(function LinkWithRef(_ref3, ref) {
	  let {
	    onClick,
	    reloadDocument,
	    replace = false,
	    state,
	    target,
	    to
	  } = _ref3,
	      rest = _objectWithoutPropertiesLoose$1(_ref3, _excluded$i);

	  let href = useHref(to);
	  let internalOnClick = useLinkClickHandler(to, {
	    replace,
	    state,
	    target
	  });

	  function handleClick(event) {
	    if (onClick) onClick(event);

	    if (!event.defaultPrevented && !reloadDocument) {
	      internalOnClick(event);
	    }
	  }

	  return (
	    /*#__PURE__*/
	    // eslint-disable-next-line jsx-a11y/anchor-has-content
	    react.createElement("a", _extends({}, rest, {
	      href: href,
	      onClick: handleClick,
	      ref: ref,
	      target: target
	    }))
	  );
	});
	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */


	const NavLink = /*#__PURE__*/react.forwardRef(function NavLinkWithRef(_ref4, ref) {
	  let {
	    "aria-current": ariaCurrentProp = "page",
	    caseSensitive = false,
	    className: classNameProp = "",
	    end = false,
	    style: styleProp,
	    to
	  } = _ref4,
	      rest = _objectWithoutPropertiesLoose$1(_ref4, _excluded2$1);

	  let location = useLocation();
	  let path = useResolvedPath(to);
	  let locationPathname = location.pathname;
	  let toPathname = path.pathname;

	  if (!caseSensitive) {
	    locationPathname = locationPathname.toLowerCase();
	    toPathname = toPathname.toLowerCase();
	  }

	  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
	  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
	  let className;

	  if (typeof classNameProp === "function") {
	    className = classNameProp({
	      isActive
	    });
	  } else {
	    // If the className prop is not a function, we use a default `active`
	    // class for <NavLink />s that are active. In v5 `active` was the default
	    // value for `activeClassName`, but we are removing that API and can still
	    // use the old default behavior for a cleaner upgrade path and keep the
	    // simple styling rules working as they currently do.
	    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
	  }

	  let style = typeof styleProp === "function" ? styleProp({
	    isActive
	  }) : styleProp;
	  return /*#__PURE__*/react.createElement(Link, _extends({}, rest, {
	    "aria-current": ariaCurrent,
	    className: className,
	    ref: ref,
	    style: style,
	    to: to
	  }));
	});
	// HOOKS
	////////////////////////////////////////////////////////////////////////////////

	/**
	 * Handles the click behavior for router `<Link>` components. This is useful if
	 * you need to create custom `<Link>` components with the same click behavior we
	 * use in our exported `<Link>`.
	 */


	function useLinkClickHandler(to, _temp) {
	  let {
	    target,
	    replace: replaceProp,
	    state
	  } = _temp === void 0 ? {} : _temp;
	  let navigate = useNavigate();
	  let location = useLocation();
	  let path = useResolvedPath(to);
	  return react.useCallback(event => {
	    if (event.button === 0 && ( // Ignore everything but left clicks
	    !target || target === "_self") && // Let browser handle "target=_blank" etc.
	    !isModifiedEvent(event) // Ignore clicks with modifier keys
	    ) {
	      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
	      // a push, so do the same here.

	      let replace = !!replaceProp || createPath(location) === createPath(path);
	      navigate(to, {
	        replace,
	        state
	      });
	    }
	  }, [location, navigate, path, replaceProp, state, target, to]);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var b = "function" === typeof Symbol && Symbol.for,
	    c$1 = b ? Symbol.for("react.element") : 60103,
	    d$1 = b ? Symbol.for("react.portal") : 60106,
	    e$1 = b ? Symbol.for("react.fragment") : 60107,
	    f = b ? Symbol.for("react.strict_mode") : 60108,
	    g$1 = b ? Symbol.for("react.profiler") : 60114,
	    h = b ? Symbol.for("react.provider") : 60109,
	    k$1 = b ? Symbol.for("react.context") : 60110,
	    l = b ? Symbol.for("react.async_mode") : 60111,
	    m$1 = b ? Symbol.for("react.concurrent_mode") : 60111,
	    n$1 = b ? Symbol.for("react.forward_ref") : 60112,
	    p$1 = b ? Symbol.for("react.suspense") : 60113,
	    q$1 = b ? Symbol.for("react.suspense_list") : 60120,
	    r$1 = b ? Symbol.for("react.memo") : 60115,
	    t$1 = b ? Symbol.for("react.lazy") : 60116,
	    v = b ? Symbol.for("react.block") : 60121,
	    w = b ? Symbol.for("react.fundamental") : 60117,
	    x$1 = b ? Symbol.for("react.responder") : 60118,
	    y$1 = b ? Symbol.for("react.scope") : 60119;

	function z$1(a) {
	  if ("object" === typeof a && null !== a) {
	    var u = a.$$typeof;

	    switch (u) {
	      case c$1:
	        switch (a = a.type, a) {
	          case l:
	          case m$1:
	          case e$1:
	          case g$1:
	          case f:
	          case p$1:
	            return a;

	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k$1:
	              case n$1:
	              case t$1:
	              case r$1:
	              case h:
	                return a;

	              default:
	                return u;
	            }

	        }

	      case d$1:
	        return u;
	    }
	  }
	}

	function A$1(a) {
	  return z$1(a) === m$1;
	}

	var AsyncMode = l;
	var ConcurrentMode = m$1;
	var ContextConsumer = k$1;
	var ContextProvider = h;
	var Element = c$1;
	var ForwardRef = n$1;
	var Fragment = e$1;
	var Lazy = t$1;
	var Memo = r$1;
	var Portal = d$1;
	var Profiler = g$1;
	var StrictMode = f;
	var Suspense = p$1;

	var isAsyncMode = function (a) {
	  return A$1(a) || z$1(a) === l;
	};

	var isConcurrentMode = A$1;

	var isContextConsumer = function (a) {
	  return z$1(a) === k$1;
	};

	var isContextProvider = function (a) {
	  return z$1(a) === h;
	};

	var isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === c$1;
	};

	var isForwardRef = function (a) {
	  return z$1(a) === n$1;
	};

	var isFragment = function (a) {
	  return z$1(a) === e$1;
	};

	var isLazy = function (a) {
	  return z$1(a) === t$1;
	};

	var isMemo = function (a) {
	  return z$1(a) === r$1;
	};

	var isPortal = function (a) {
	  return z$1(a) === d$1;
	};

	var isProfiler = function (a) {
	  return z$1(a) === g$1;
	};

	var isStrictMode = function (a) {
	  return z$1(a) === f;
	};

	var isSuspense = function (a) {
	  return z$1(a) === p$1;
	};

	var isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e$1 || a === m$1 || a === g$1 || a === f || a === p$1 || a === q$1 || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r$1 || a.$$typeof === h || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w || a.$$typeof === x$1 || a.$$typeof === y$1 || a.$$typeof === v);
	};

	var typeOf = z$1;
	var reactIs_production_min = {
	  AsyncMode: AsyncMode,
	  ConcurrentMode: ConcurrentMode,
	  ContextConsumer: ContextConsumer,
	  ContextProvider: ContextProvider,
	  Element: Element,
	  ForwardRef: ForwardRef,
	  Fragment: Fragment,
	  Lazy: Lazy,
	  Memo: Memo,
	  Portal: Portal,
	  Profiler: Profiler,
	  StrictMode: StrictMode,
	  Suspense: Suspense,
	  isAsyncMode: isAsyncMode,
	  isConcurrentMode: isConcurrentMode,
	  isContextConsumer: isContextConsumer,
	  isContextProvider: isContextProvider,
	  isElement: isElement,
	  isForwardRef: isForwardRef,
	  isFragment: isFragment,
	  isLazy: isLazy,
	  isMemo: isMemo,
	  isPortal: isPortal,
	  isProfiler: isProfiler,
	  isStrictMode: isStrictMode,
	  isSuspense: isSuspense,
	  isValidElementType: isValidElementType,
	  typeOf: typeOf
	};

	createCommonjsModule(function (module, exports) {
	});

	var reactIs = createCommonjsModule(function (module) {

	  {
	    module.exports = reactIs_production_min;
	  }
	});

	function toVal(mix) {
	  var k,
	      y,
	      str = '';

	  if (typeof mix === 'string' || typeof mix === 'number') {
	    str += mix;
	  } else if (typeof mix === 'object') {
	    if (Array.isArray(mix)) {
	      for (k = 0; k < mix.length; k++) {
	        if (mix[k]) {
	          if (y = toVal(mix[k])) {
	            str && (str += ' ');
	            str += y;
	          }
	        }
	      }
	    } else {
	      for (k in mix) {
	        if (mix[k]) {
	          str && (str += ' ');
	          str += k;
	        }
	      }
	    }
	  }

	  return str;
	}

	function clsx () {
	  var i = 0,
	      tmp,
	      x,
	      str = '';

	  while (i < arguments.length) {
	    if (tmp = arguments[i++]) {
	      if (x = toVal(tmp)) {
	        str && (str += ' ');
	        str += x;
	      }
	    }
	  }

	  return str;
	}

	function isPlainObject$1(item) {
	  return item !== null && typeof item === 'object' && item.constructor === Object;
	}
	function deepmerge$1(target, source, options = {
	  clone: true
	}) {
	  const output = options.clone ? _extends$1({}, target) : target;

	  if (isPlainObject$1(target) && isPlainObject$1(source)) {
	    Object.keys(source).forEach(key => {
	      // Avoid prototype pollution
	      if (key === '__proto__') {
	        return;
	      }

	      if (isPlainObject$1(source[key]) && key in target && isPlainObject$1(target[key])) {
	        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
	        output[key] = deepmerge$1(target[key], source[key], options);
	      } else {
	        output[key] = source[key];
	      }
	    });
	  }

	  return output;
	}

	/**
	 * WARNING: Don't import this directly.
	 * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
	 * @param {number} code
	 */
	function formatMuiErrorMessage$1(code) {
	  // Apply babel-plugin-transform-template-literals in loose mode
	  // loose mode is safe iff we're concatenating primitives
	  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

	  /* eslint-disable prefer-template */
	  let url = 'https://mui.com/production-error/?code=' + code;

	  for (let i = 1; i < arguments.length; i += 1) {
	    // rest params over-transpile for this case
	    // eslint-disable-next-line prefer-rest-params
	    url += '&args[]=' + encodeURIComponent(arguments[i]);
	  }

	  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
	  /* eslint-enable prefer-template */
	}

	//
	// A strict capitalization should uppercase the first letter of each word in the sentence.
	// We only handle the first word.

	function capitalize$1(string) {
	  if (typeof string !== 'string') {
	    throw new Error(formatMuiErrorMessage$1(7));
	  }

	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}

	/**
	 * TODO v5: consider making it private
	 *
	 * passes {value} to {ref}
	 *
	 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
	 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
	 * https://github.com/mui/material-ui/issues/13539
	 *
	 * Useful if you want to expose the ref of an inner component to the public API
	 * while still using it inside the component.
	 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
	 */
	function setRef(ref, value) {
	  if (typeof ref === 'function') {
	    ref(value);
	  } else if (ref) {
	    ref.current = value;
	  }
	}

	const useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
	var useEnhancedEffect$1 = useEnhancedEffect;

	/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
	function useControlled({
	  controlled,
	  default: defaultProp,
	  name,
	  state = 'value'
	}) {
	  // isControlled is ignored in the hook dependency lists as it should never change.
	  const {
	    current: isControlled
	  } = react.useRef(controlled !== undefined);
	  const [valueState, setValue] = react.useState(defaultProp);
	  const value = isControlled ? controlled : valueState;

	  const setValueIfUncontrolled = react.useCallback(newValue => {
	    if (!isControlled) {
	      setValue(newValue);
	    }
	  }, []);
	  return [value, setValueIfUncontrolled];
	}

	/**
	 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
	 */

	function useEventCallback(fn) {
	  const ref = react.useRef(fn);
	  useEnhancedEffect$1(() => {
	    ref.current = fn;
	  });
	  return react.useCallback((...args) => // @ts-expect-error hide `this`
	  // tslint:disable-next-line:ban-comma-operator
	  (0, ref.current)(...args), []);
	}

	function useForkRef(refA, refB) {
	  /**
	   * This will create a new function if the ref props change and are defined.
	   * This means react will call the old forkRef with `null` and the new forkRef
	   * with the ref. Cleanup naturally emerges from this behavior.
	   */
	  return react.useMemo(() => {
	    if (refA == null && refB == null) {
	      return null;
	    }

	    return refValue => {
	      setRef(refA, refValue);
	      setRef(refB, refValue);
	    };
	  }, [refA, refB]);
	}

	// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
	let hadKeyboardEvent = true;
	let hadFocusVisibleRecently = false;
	let hadFocusVisibleRecentlyTimeout;
	const inputTypesWhitelist = {
	  text: true,
	  search: true,
	  url: true,
	  tel: true,
	  email: true,
	  password: true,
	  number: true,
	  date: true,
	  month: true,
	  week: true,
	  time: true,
	  datetime: true,
	  'datetime-local': true
	};
	/**
	 * Computes whether the given element should automatically trigger the
	 * `focus-visible` class being added, i.e. whether it should always match
	 * `:focus-visible` when focused.
	 * @param {Element} node
	 * @returns {boolean}
	 */

	function focusTriggersKeyboardModality(node) {
	  const {
	    type,
	    tagName
	  } = node;

	  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
	    return true;
	  }

	  if (tagName === 'TEXTAREA' && !node.readOnly) {
	    return true;
	  }

	  if (node.isContentEditable) {
	    return true;
	  }

	  return false;
	}
	/**
	 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
	 * If the most recent user interaction was via the keyboard;
	 * and the key press did not include a meta, alt/option, or control key;
	 * then the modality is keyboard. Otherwise, the modality is not keyboard.
	 * @param {KeyboardEvent} event
	 */


	function handleKeyDown(event) {
	  if (event.metaKey || event.altKey || event.ctrlKey) {
	    return;
	  }

	  hadKeyboardEvent = true;
	}
	/**
	 * If at any point a user clicks with a pointing device, ensure that we change
	 * the modality away from keyboard.
	 * This avoids the situation where a user presses a key on an already focused
	 * element, and then clicks on a different element, focusing it with a
	 * pointing device, while we still think we're in keyboard modality.
	 */


	function handlePointerDown() {
	  hadKeyboardEvent = false;
	}

	function handleVisibilityChange() {
	  if (this.visibilityState === 'hidden') {
	    // If the tab becomes active again, the browser will handle calling focus
	    // on the element (Safari actually calls it twice).
	    // If this tab change caused a blur on an element with focus-visible,
	    // re-apply the class when the user switches back to the tab.
	    if (hadFocusVisibleRecently) {
	      hadKeyboardEvent = true;
	    }
	  }
	}

	function prepare(doc) {
	  doc.addEventListener('keydown', handleKeyDown, true);
	  doc.addEventListener('mousedown', handlePointerDown, true);
	  doc.addEventListener('pointerdown', handlePointerDown, true);
	  doc.addEventListener('touchstart', handlePointerDown, true);
	  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
	}

	function isFocusVisible(event) {
	  const {
	    target
	  } = event;

	  try {
	    return target.matches(':focus-visible');
	  } catch (error) {// Browsers not implementing :focus-visible will throw a SyntaxError.
	    // We use our own heuristic for those browsers.
	    // Rethrow might be better if it's not the expected error but do we really
	    // want to crash if focus-visible malfunctioned?
	  } // No need for validFocusTarget check. The user does that by attaching it to
	  // focusable events only.


	  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
	}

	function useIsFocusVisible() {
	  const ref = react.useCallback(node => {
	    if (node != null) {
	      prepare(node.ownerDocument);
	    }
	  }, []);
	  const isFocusVisibleRef = react.useRef(false);
	  /**
	   * Should be called if a blur event is fired
	   */

	  function handleBlurVisible() {
	    // checking against potential state variable does not suffice if we focus and blur synchronously.
	    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
	    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
	    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
	    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
	    if (isFocusVisibleRef.current) {
	      // To detect a tab/window switch, we look for a blur event followed
	      // rapidly by a visibility change.
	      // If we don't see a visibility change within 100ms, it's probably a
	      // regular focus change.
	      hadFocusVisibleRecently = true;
	      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
	      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
	        hadFocusVisibleRecently = false;
	      }, 100);
	      isFocusVisibleRef.current = false;
	      return true;
	    }

	    return false;
	  }
	  /**
	   * Should be called if a blur event is fired
	   */


	  function handleFocusVisible(event) {
	    if (isFocusVisible(event)) {
	      isFocusVisibleRef.current = true;
	      return true;
	    }

	    return false;
	  }

	  return {
	    isFocusVisibleRef,
	    onFocus: handleFocusVisible,
	    onBlur: handleBlurVisible,
	    ref
	  };
	}

	const visuallyHidden = {
	  border: 0,
	  clip: 'rect(0 0 0 0)',
	  height: '1px',
	  margin: -1,
	  overflow: 'hidden',
	  padding: 0,
	  position: 'absolute',
	  whiteSpace: 'nowrap',
	  width: '1px'
	};
	var visuallyHidden$1 = visuallyHidden;

	/**
	 * Add keys, values of `defaultProps` that does not exist in `props`
	 * @param {object} defaultProps
	 * @param {object} props
	 * @returns {object} resolved props
	 */

	function resolveProps(defaultProps, props) {
	  const output = _extends$1({}, props);

	  Object.keys(defaultProps).forEach(propName => {
	    if (output[propName] === undefined) {
	      output[propName] = defaultProps[propName];
	    }
	  });
	  return output;
	}

	/**
	 * Determines if a given element is a DOM element name (i.e. not a React component).
	 */
	function isHostComponent(element) {
	  return typeof element === 'string';
	}

	/**
	 * Appends the ownerState object to the props, merging with the existing one if necessary.
	 *
	 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` are not applied.
	 * @param existingProps Props of the element.
	 * @param ownerState
	 */

	function appendOwnerState(elementType, existingProps = {}, ownerState) {
	  if (isHostComponent(elementType)) {
	    return existingProps;
	  }

	  return _extends$1({}, existingProps, {
	    ownerState: _extends$1({}, existingProps.ownerState, ownerState)
	  });
	}

	function composeClasses(slots, getUtilityClass, classes) {
	  const output = {};
	  Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
	  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
	  slot => {
	    output[slot] = slots[slot].reduce((acc, key) => {
	      if (key) {
	        if (classes && classes[key]) {
	          acc.push(classes[key]);
	        }

	        acc.push(getUtilityClass(key));
	      }

	      return acc;
	    }, []).join(' ');
	  });
	  return output;
	}

	const defaultGenerator = componentName => componentName;

	const createClassNameGenerator = () => {
	  let generate = defaultGenerator;
	  return {
	    configure(generator) {
	      generate = generator;
	    },

	    generate(componentName) {
	      return generate(componentName);
	    },

	    reset() {
	      generate = defaultGenerator;
	    }

	  };
	};

	const ClassNameGenerator = createClassNameGenerator();
	var ClassNameGenerator$1 = ClassNameGenerator;

	const globalStateClassesMapping = {
	  active: 'Mui-active',
	  checked: 'Mui-checked',
	  completed: 'Mui-completed',
	  disabled: 'Mui-disabled',
	  error: 'Mui-error',
	  expanded: 'Mui-expanded',
	  focused: 'Mui-focused',
	  focusVisible: 'Mui-focusVisible',
	  required: 'Mui-required',
	  selected: 'Mui-selected'
	};
	function generateUtilityClass(componentName, slot) {
	  const globalStateClass = globalStateClassesMapping[slot];
	  return globalStateClass || "".concat(ClassNameGenerator$1.generate(componentName), "-").concat(slot);
	}

	function generateUtilityClasses(componentName, slots) {
	  const result = {};
	  slots.forEach(slot => {
	    result[slot] = generateUtilityClass(componentName, slot);
	  });
	  return result;
	}

	function getSliderUtilityClass(slot) {
	  return generateUtilityClass('MuiSlider', slot);
	}
	const sliderUnstyledClasses = generateUtilityClasses('MuiSlider', ['root', 'active', 'focusVisible', 'disabled', 'dragging', 'marked', 'vertical', 'trackInverted', 'trackFalse', 'rail', 'track', 'mark', 'markActive', 'markLabel', 'markLabelActive', 'thumb', 'valueLabel', 'valueLabelOpen', 'valueLabelCircle', 'valueLabelLabel']);
	var sliderUnstyledClasses$1 = sliderUnstyledClasses;

	const useValueLabelClasses = props => {
	  const {
	    open
	  } = props;
	  const utilityClasses = {
	    offset: clsx(open && sliderUnstyledClasses$1.valueLabelOpen),
	    circle: sliderUnstyledClasses$1.valueLabelCircle,
	    label: sliderUnstyledClasses$1.valueLabelLabel
	  };
	  return utilityClasses;
	};
	/**
	 * @ignore - internal component.
	 */


	function SliderValueLabelUnstyled(props) {
	  const {
	    children,
	    className,
	    value,
	    theme
	  } = props;
	  const classes = useValueLabelClasses(props);
	  return /*#__PURE__*/react.cloneElement(children, {
	    className: clsx(children.props.className)
	  }, /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
	    children: [children.props.children, /*#__PURE__*/jsxRuntime.jsx("span", {
	      className: clsx(classes.offset, className),
	      theme: theme,
	      "aria-hidden": true,
	      children: /*#__PURE__*/jsxRuntime.jsx("span", {
	        className: classes.circle,
	        children: /*#__PURE__*/jsxRuntime.jsx("span", {
	          className: classes.label,
	          children: value
	        })
	      })
	    })]
	  }));
	}

	const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;

	function asc(a, b) {
	  return a - b;
	}

	function clamp$2(value, min, max) {
	  if (value == null) {
	    return min;
	  }

	  return Math.min(Math.max(min, value), max);
	}

	function findClosest(values, currentValue) {
	  var _values$reduce;

	  const {
	    index: closestIndex
	  } = (_values$reduce = values.reduce((acc, value, index) => {
	    const distance = Math.abs(currentValue - value);

	    if (acc === null || distance < acc.distance || distance === acc.distance) {
	      return {
	        distance,
	        index
	      };
	    }

	    return acc;
	  }, null)) != null ? _values$reduce : {};
	  return closestIndex;
	}

	function trackFinger(event, touchId) {
	  // The event is TouchEvent
	  if (touchId.current !== undefined && event.changedTouches) {
	    const touchEvent = event;

	    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
	      const touch = touchEvent.changedTouches[i];

	      if (touch.identifier === touchId.current) {
	        return {
	          x: touch.clientX,
	          y: touch.clientY
	        };
	      }
	    }

	    return false;
	  } // The event is MouseEvent


	  return {
	    x: event.clientX,
	    y: event.clientY
	  };
	}

	function valueToPercent(value, min, max) {
	  return (value - min) * 100 / (max - min);
	}

	function percentToValue(percent, min, max) {
	  return (max - min) * percent + min;
	}

	function getDecimalPrecision(num) {
	  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
	  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
	  if (Math.abs(num) < 1) {
	    const parts = num.toExponential().split('e-');
	    const matissaDecimalPart = parts[0].split('.')[1];
	    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
	  }

	  const decimalPart = num.toString().split('.')[1];
	  return decimalPart ? decimalPart.length : 0;
	}

	function roundValueToStep(value, step, min) {
	  const nearest = Math.round((value - min) / step) * step + min;
	  return Number(nearest.toFixed(getDecimalPrecision(step)));
	}

	function setValueIndex({
	  values,
	  newValue,
	  index
	}) {
	  const output = values.slice();
	  output[index] = newValue;
	  return output.sort(asc);
	}

	function focusThumb({
	  sliderRef,
	  activeIndex,
	  setActive
	}) {
	  var _sliderRef$current, _doc$activeElement;

	  const doc = ownerDocument(sliderRef.current);

	  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null ? void 0 : (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute('data-index')) !== activeIndex) {
	    var _sliderRef$current2;

	    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.querySelector("[type=\"range\"][data-index=\"".concat(activeIndex, "\"]")).focus();
	  }

	  if (setActive) {
	    setActive(activeIndex);
	  }
	}

	const axisProps = {
	  horizontal: {
	    offset: percent => ({
	      left: "".concat(percent, "%")
	    }),
	    leap: percent => ({
	      width: "".concat(percent, "%")
	    })
	  },
	  'horizontal-reverse': {
	    offset: percent => ({
	      right: "".concat(percent, "%")
	    }),
	    leap: percent => ({
	      width: "".concat(percent, "%")
	    })
	  },
	  vertical: {
	    offset: percent => ({
	      bottom: "".concat(percent, "%")
	    }),
	    leap: percent => ({
	      height: "".concat(percent, "%")
	    })
	  }
	};
	const Identity$1 = x => x; // TODO: remove support for Safari < 13.
	// https://caniuse.com/#search=touch-action
	//
	// Safari, on iOS, supports touch action since v13.
	// Over 80% of the iOS phones are compatible
	// in August 2020.
	// Utilizing the CSS.supports method to check if touch-action is supported.
	// Since CSS.supports is supported on all but Edge@12 and IE and touch-action
	// is supported on both Edge@12 and IE if CSS.supports is not available that means that
	// touch-action will be supported

	let cachedSupportsTouchActionNone;

	function doesSupportTouchActionNone() {
	  if (cachedSupportsTouchActionNone === undefined) {
	    if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
	      cachedSupportsTouchActionNone = CSS.supports('touch-action', 'none');
	    } else {
	      cachedSupportsTouchActionNone = true;
	    }
	  }

	  return cachedSupportsTouchActionNone;
	}

	function useSlider(props) {
	  const {
	    ref,
	    'aria-labelledby': ariaLabelledby,
	    defaultValue,
	    disableSwap = false,
	    disabled = false,
	    marks: marksProp = false,
	    max = 100,
	    min = 0,
	    name,
	    onChange,
	    onChangeCommitted,
	    orientation = 'horizontal',
	    scale = Identity$1,
	    step = 1,
	    tabIndex,
	    value: valueProp,
	    isRtl = false
	  } = props;
	  const touchId = react.useRef(); // We can't use the :active browser pseudo-classes.
	  // - The active state isn't triggered when clicking on the rail.
	  // - The active state isn't transferred when inversing a range slider.

	  const [active, setActive] = react.useState(-1);
	  const [open, setOpen] = react.useState(-1);
	  const [dragging, setDragging] = react.useState(false);
	  const moveCount = react.useRef(0);
	  const [valueDerived, setValueState] = useControlled({
	    controlled: valueProp,
	    default: defaultValue != null ? defaultValue : min,
	    name: 'Slider'
	  });

	  const handleChange = onChange && ((event, value, thumbIndex) => {
	    // Redefine target to allow name and value to be read.
	    // This allows seamless integration with the most popular form libraries.
	    // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
	    // Clone the event to not override `target` of the original event.
	    const nativeEvent = event.nativeEvent || event; // @ts-ignore The nativeEvent is function, not object

	    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
	    Object.defineProperty(clonedEvent, 'target', {
	      writable: true,
	      value: {
	        value,
	        name
	      }
	    });
	    onChange(clonedEvent, value, thumbIndex);
	  });

	  const range = Array.isArray(valueDerived);
	  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
	  values = values.map(value => clamp$2(value, min, max));
	  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
	    value: min + step * index
	  })) : marksProp || [];
	  const marksValues = marks.map(mark => mark.value);
	  const {
	    isFocusVisibleRef,
	    onBlur: handleBlurVisible,
	    onFocus: handleFocusVisible,
	    ref: focusVisibleRef
	  } = useIsFocusVisible();
	  const [focusVisible, setFocusVisible] = react.useState(-1);
	  const sliderRef = react.useRef();
	  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
	  const handleRef = useForkRef(ref, handleFocusRef);

	  const createHandleHiddenInputFocus = otherHandlers => event => {
	    var _otherHandlers$onFocu;

	    const index = Number(event.currentTarget.getAttribute('data-index'));
	    handleFocusVisible(event);

	    if (isFocusVisibleRef.current === true) {
	      setFocusVisible(index);
	    }

	    setOpen(index);
	    otherHandlers == null ? void 0 : (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
	  };

	  const createHandleHiddenInputBlur = otherHandlers => event => {
	    var _otherHandlers$onBlur;

	    handleBlurVisible(event);

	    if (isFocusVisibleRef.current === false) {
	      setFocusVisible(-1);
	    }

	    setOpen(-1);
	    otherHandlers == null ? void 0 : (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
	  };

	  useEnhancedEffect$1(() => {
	    if (disabled && sliderRef.current.contains(document.activeElement)) {
	      var _document$activeEleme; // This is necessary because Firefox and Safari will keep focus
	      // on a disabled element:
	      // https://codesandbox.io/s/mui-pr-22247-forked-h151h?file=/src/App.js
	      // @ts-ignore


	      (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.blur();
	    }
	  }, [disabled]);

	  if (disabled && active !== -1) {
	    setActive(-1);
	  }

	  if (disabled && focusVisible !== -1) {
	    setFocusVisible(-1);
	  }

	  const createHandleHiddenInputChange = otherHandlers => event => {
	    var _otherHandlers$onChan;

	    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event);
	    const index = Number(event.currentTarget.getAttribute('data-index'));
	    const value = values[index];
	    const marksIndex = marksValues.indexOf(value); // @ts-ignore

	    let newValue = event.target.valueAsNumber;

	    if (marks && step == null) {
	      newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
	    }

	    newValue = clamp$2(newValue, min, max);

	    if (marks && step == null) {
	      const currentMarkIndex = marksValues.indexOf(values[index]);
	      newValue = newValue < values[index] ? marksValues[currentMarkIndex - 1] : marksValues[currentMarkIndex + 1];
	    }

	    if (range) {
	      // Bound the new value to the thumb's neighbours.
	      if (disableSwap) {
	        newValue = clamp$2(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
	      }

	      const previousValue = newValue;
	      newValue = setValueIndex({
	        values,
	        newValue,
	        index
	      });
	      let activeIndex = index; // Potentially swap the index if needed.

	      if (!disableSwap) {
	        activeIndex = newValue.indexOf(previousValue);
	      }

	      focusThumb({
	        sliderRef,
	        activeIndex
	      });
	    }

	    setValueState(newValue);
	    setFocusVisible(index);

	    if (handleChange) {
	      handleChange(event, newValue, index);
	    }

	    if (onChangeCommitted) {
	      onChangeCommitted(event, newValue);
	    }
	  };

	  const previousIndex = react.useRef();
	  let axis = orientation;

	  if (isRtl && orientation === 'horizontal') {
	    axis += '-reverse';
	  }

	  const getFingerNewValue = ({
	    finger,
	    move = false,
	    values: values2
	  }) => {
	    const {
	      current: slider
	    } = sliderRef;
	    const {
	      width,
	      height,
	      bottom,
	      left
	    } = slider.getBoundingClientRect();
	    let percent;

	    if (axis.indexOf('vertical') === 0) {
	      percent = (bottom - finger.y) / height;
	    } else {
	      percent = (finger.x - left) / width;
	    }

	    if (axis.indexOf('-reverse') !== -1) {
	      percent = 1 - percent;
	    }

	    let newValue;
	    newValue = percentToValue(percent, min, max);

	    if (step) {
	      newValue = roundValueToStep(newValue, step, min);
	    } else {
	      const closestIndex = findClosest(marksValues, newValue);
	      newValue = marksValues[closestIndex];
	    }

	    newValue = clamp$2(newValue, min, max);
	    let activeIndex = 0;

	    if (range) {
	      if (!move) {
	        activeIndex = findClosest(values2, newValue);
	      } else {
	        activeIndex = previousIndex.current;
	      } // Bound the new value to the thumb's neighbours.


	      if (disableSwap) {
	        newValue = clamp$2(newValue, values2[activeIndex - 1] || -Infinity, values2[activeIndex + 1] || Infinity);
	      }

	      const previousValue = newValue;
	      newValue = setValueIndex({
	        values: values2,
	        newValue,
	        index: activeIndex
	      }); // Potentially swap the index if needed.

	      if (!(disableSwap && move)) {
	        activeIndex = newValue.indexOf(previousValue);
	        previousIndex.current = activeIndex;
	      }
	    }

	    return {
	      newValue,
	      activeIndex
	    };
	  };

	  const handleTouchMove = useEventCallback(nativeEvent => {
	    const finger = trackFinger(nativeEvent, touchId);

	    if (!finger) {
	      return;
	    }

	    moveCount.current += 1; // Cancel move in case some other element consumed a mouseup event and it was not fired.
	    // @ts-ignore buttons doesn't not exists on touch event

	    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
	      // eslint-disable-next-line @typescript-eslint/no-use-before-define
	      handleTouchEnd(nativeEvent);
	      return;
	    }

	    const {
	      newValue,
	      activeIndex
	    } = getFingerNewValue({
	      finger,
	      move: true,
	      values
	    });
	    focusThumb({
	      sliderRef,
	      activeIndex,
	      setActive
	    });
	    setValueState(newValue);

	    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
	      setDragging(true);
	    }

	    if (handleChange) {
	      handleChange(nativeEvent, newValue, activeIndex);
	    }
	  });
	  const handleTouchEnd = useEventCallback(nativeEvent => {
	    const finger = trackFinger(nativeEvent, touchId);
	    setDragging(false);

	    if (!finger) {
	      return;
	    }

	    const {
	      newValue
	    } = getFingerNewValue({
	      finger,
	      values
	    });
	    setActive(-1);

	    if (nativeEvent.type === 'touchend') {
	      setOpen(-1);
	    }

	    if (onChangeCommitted) {
	      onChangeCommitted(nativeEvent, newValue);
	    }

	    touchId.current = undefined; // eslint-disable-next-line @typescript-eslint/no-use-before-define

	    stopListening();
	  });
	  const handleTouchStart = useEventCallback(nativeEvent => {
	    if (disabled) {
	      return;
	    } // If touch-action: none; is not supported we need to prevent the scroll manually.


	    if (!doesSupportTouchActionNone()) {
	      nativeEvent.preventDefault();
	    }

	    const touch = nativeEvent.changedTouches[0];

	    if (touch != null) {
	      // A number that uniquely identifies the current finger in the touch session.
	      touchId.current = touch.identifier;
	    }

	    const finger = trackFinger(nativeEvent, touchId);

	    if (finger !== false) {
	      const {
	        newValue,
	        activeIndex
	      } = getFingerNewValue({
	        finger,
	        values
	      });
	      focusThumb({
	        sliderRef,
	        activeIndex,
	        setActive
	      });
	      setValueState(newValue);

	      if (handleChange) {
	        handleChange(nativeEvent, newValue, activeIndex);
	      }
	    }

	    moveCount.current = 0;
	    const doc = ownerDocument(sliderRef.current);
	    doc.addEventListener('touchmove', handleTouchMove);
	    doc.addEventListener('touchend', handleTouchEnd);
	  });
	  const stopListening = react.useCallback(() => {
	    const doc = ownerDocument(sliderRef.current);
	    doc.removeEventListener('mousemove', handleTouchMove);
	    doc.removeEventListener('mouseup', handleTouchEnd);
	    doc.removeEventListener('touchmove', handleTouchMove);
	    doc.removeEventListener('touchend', handleTouchEnd);
	  }, [handleTouchEnd, handleTouchMove]);
	  react.useEffect(() => {
	    const {
	      current: slider
	    } = sliderRef;
	    slider.addEventListener('touchstart', handleTouchStart, {
	      passive: doesSupportTouchActionNone()
	    });
	    return () => {
	      // @ts-ignore
	      slider.removeEventListener('touchstart', handleTouchStart, {
	        passive: doesSupportTouchActionNone()
	      });
	      stopListening();
	    };
	  }, [stopListening, handleTouchStart]);
	  react.useEffect(() => {
	    if (disabled) {
	      stopListening();
	    }
	  }, [disabled, stopListening]);

	  const createHandleMouseDown = otherHandlers => event => {
	    var _otherHandlers$onMous;

	    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);

	    if (disabled) {
	      return;
	    }

	    if (event.defaultPrevented) {
	      return;
	    } // Only handle left clicks


	    if (event.button !== 0) {
	      return;
	    } // Avoid text selection


	    event.preventDefault();
	    const finger = trackFinger(event, touchId);

	    if (finger !== false) {
	      const {
	        newValue,
	        activeIndex
	      } = getFingerNewValue({
	        finger,
	        values
	      });
	      focusThumb({
	        sliderRef,
	        activeIndex,
	        setActive
	      });
	      setValueState(newValue);

	      if (handleChange) {
	        handleChange(event, newValue, activeIndex);
	      }
	    }

	    moveCount.current = 0;
	    const doc = ownerDocument(sliderRef.current);
	    doc.addEventListener('mousemove', handleTouchMove);
	    doc.addEventListener('mouseup', handleTouchEnd);
	  };

	  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
	  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

	  const getRootProps = otherHandlers => {
	    const ownEventHandlers = {
	      onMouseDown: createHandleMouseDown(otherHandlers || {})
	    };

	    const mergedEventHandlers = _extends$1({}, otherHandlers, ownEventHandlers);

	    return _extends$1({
	      ref: handleRef
	    }, mergedEventHandlers);
	  };

	  const createHandleMouseOver = otherHandlers => event => {
	    var _otherHandlers$onMous2;

	    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
	    const index = Number(event.currentTarget.getAttribute('data-index'));
	    setOpen(index);
	  };

	  const createHandleMouseLeave = otherHandlers => event => {
	    var _otherHandlers$onMous3;

	    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
	    setOpen(-1);
	  };

	  const getThumbProps = otherHandlers => {
	    const ownEventHandlers = {
	      onMouseOver: createHandleMouseOver(otherHandlers || {}),
	      onMouseLeave: createHandleMouseLeave(otherHandlers || {})
	    };

	    const mergedEventHandlers = _extends$1({}, otherHandlers, ownEventHandlers);

	    return _extends$1({}, mergedEventHandlers);
	  };

	  const getHiddenInputProps = otherHandlers => {
	    const ownEventHandlers = {
	      onChange: createHandleHiddenInputChange(otherHandlers || {}),
	      onFocus: createHandleHiddenInputFocus(otherHandlers || {}),
	      onBlur: createHandleHiddenInputBlur(otherHandlers || {})
	    };

	    const mergedEventHandlers = _extends$1({}, otherHandlers, ownEventHandlers);

	    return _extends$1({
	      tabIndex,
	      'aria-labelledby': ariaLabelledby,
	      'aria-orientation': orientation,
	      'aria-valuemax': scale(max),
	      'aria-valuemin': scale(min),
	      name,
	      type: 'range',
	      min: props.min,
	      max: props.max,
	      step: props.step,
	      disabled
	    }, mergedEventHandlers, {
	      style: _extends$1({}, visuallyHidden$1, {
	        direction: isRtl ? 'rtl' : 'ltr',
	        // So that VoiceOver's focus indicator matches the thumb's dimensions
	        width: '100%',
	        height: '100%'
	      })
	    });
	  };

	  return {
	    axis,
	    axisProps,
	    getRootProps,
	    getHiddenInputProps,
	    getThumbProps,
	    dragging,
	    marks,
	    values,
	    active,
	    focusVisible,
	    open,
	    range,
	    trackOffset,
	    trackLeap
	  };
	}

	const _excluded$h = ["aria-label", "aria-valuetext", "className", "component", "classes", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps"];

	const Identity = x => x;

	const useUtilityClasses$4 = ownerState => {
	  const {
	    disabled,
	    dragging,
	    marked,
	    orientation,
	    track,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', disabled && 'disabled', dragging && 'dragging', marked && 'marked', orientation === 'vertical' && 'vertical', track === 'inverted' && 'trackInverted', track === false && 'trackFalse'],
	    rail: ['rail'],
	    track: ['track'],
	    mark: ['mark'],
	    markActive: ['markActive'],
	    markLabel: ['markLabel'],
	    markLabelActive: ['markLabelActive'],
	    valueLabel: ['valueLabel'],
	    thumb: ['thumb', disabled && 'disabled'],
	    active: ['active'],
	    disabled: ['disabled'],
	    focusVisible: ['focusVisible']
	  };
	  return composeClasses(slots, getSliderUtilityClass, classes);
	};

	const Forward = ({
	  children
	}) => children;

	const SliderUnstyled = /*#__PURE__*/react.forwardRef(function SliderUnstyled(props, ref) {
	  var _ref, _components$Rail, _components$Track, _components$Thumb, _components$ValueLabe, _components$Mark, _components$MarkLabel;

	  const {
	    'aria-label': ariaLabel,
	    'aria-valuetext': ariaValuetext,
	    className,
	    component,
	    classes: classesProp,
	    disableSwap = false,
	    disabled = false,
	    getAriaLabel,
	    getAriaValueText,
	    marks: marksProp = false,
	    max = 100,
	    min = 0,
	    onMouseDown,
	    orientation = 'horizontal',
	    scale = Identity,
	    step = 1,
	    track = 'normal',
	    valueLabelDisplay = 'off',
	    valueLabelFormat = Identity,
	    isRtl = false,
	    components = {},
	    componentsProps = {}
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$h); // all props with defaults
	  // consider extracting to hook an reusing the lint rule for the varints


	  const ownerState = _extends$1({}, props, {
	    mark: marksProp,
	    classes: classesProp,
	    disabled,
	    isRtl,
	    max,
	    min,
	    orientation,
	    scale,
	    step,
	    track,
	    valueLabelDisplay,
	    valueLabelFormat
	  });

	  const {
	    axisProps,
	    getRootProps,
	    getHiddenInputProps,
	    getThumbProps,
	    open,
	    active,
	    axis,
	    range,
	    focusVisible,
	    dragging,
	    marks,
	    values,
	    trackOffset,
	    trackLeap
	  } = useSlider(_extends$1({}, ownerState, {
	    ref
	  }));
	  ownerState.marked = marks.length > 0 && marks.some(mark => mark.label);
	  ownerState.dragging = dragging;
	  const Root = (_ref = component != null ? component : components.Root) != null ? _ref : 'span';
	  const rootProps = appendOwnerState(Root, _extends$1({}, other, componentsProps.root), ownerState);
	  const Rail = (_components$Rail = components.Rail) != null ? _components$Rail : 'span';
	  const railProps = appendOwnerState(Rail, componentsProps.rail, ownerState);
	  const Track = (_components$Track = components.Track) != null ? _components$Track : 'span';
	  const trackProps = appendOwnerState(Track, componentsProps.track, ownerState);

	  const trackStyle = _extends$1({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));

	  const Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : 'span';
	  const thumbProps = appendOwnerState(Thumb, componentsProps.thumb, ownerState);
	  const ValueLabel = (_components$ValueLabe = components.ValueLabel) != null ? _components$ValueLabe : SliderValueLabelUnstyled;
	  const valueLabelProps = appendOwnerState(ValueLabel, componentsProps.valueLabel, ownerState);
	  const Mark = (_components$Mark = components.Mark) != null ? _components$Mark : 'span';
	  const markProps = appendOwnerState(Mark, componentsProps.mark, ownerState);
	  const MarkLabel = (_components$MarkLabel = components.MarkLabel) != null ? _components$MarkLabel : 'span';
	  const markLabelProps = appendOwnerState(MarkLabel, componentsProps.markLabel, ownerState);
	  const Input = components.Input || 'input';
	  const inputProps = appendOwnerState(Input, componentsProps.input, ownerState);
	  const hiddenInputProps = getHiddenInputProps();
	  const classes = useUtilityClasses$4(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsxs(Root, _extends$1({}, rootProps, getRootProps({
	    onMouseDown
	  }), {
	    className: clsx(classes.root, rootProps.className, className),
	    children: [/*#__PURE__*/jsxRuntime.jsx(Rail, _extends$1({}, railProps, {
	      className: clsx(classes.rail, railProps.className)
	    })), /*#__PURE__*/jsxRuntime.jsx(Track, _extends$1({}, trackProps, {
	      className: clsx(classes.track, trackProps.className),
	      style: _extends$1({}, trackStyle, trackProps.style)
	    })), marks.map((mark, index) => {
	      const percent = valueToPercent(mark.value, min, max);
	      const style = axisProps[axis].offset(percent);
	      let markActive;

	      if (track === false) {
	        markActive = values.indexOf(mark.value) !== -1;
	      } else {
	        markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
	      }

	      return /*#__PURE__*/jsxRuntime.jsxs(react.Fragment, {
	        children: [/*#__PURE__*/jsxRuntime.jsx(Mark, _extends$1({
	          "data-index": index
	        }, markProps, !isHostComponent(Mark) && {
	          markActive
	        }, {
	          style: _extends$1({}, style, markProps.style),
	          className: clsx(classes.mark, markProps.className, markActive && classes.markActive)
	        })), mark.label != null ? /*#__PURE__*/jsxRuntime.jsx(MarkLabel, _extends$1({
	          "aria-hidden": true,
	          "data-index": index
	        }, markLabelProps, !isHostComponent(MarkLabel) && {
	          markLabelActive: markActive
	        }, {
	          style: _extends$1({}, style, markLabelProps.style),
	          className: clsx(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
	          children: mark.label
	        })) : null]
	      }, mark.value);
	    }), values.map((value, index) => {
	      const percent = valueToPercent(value, min, max);
	      const style = axisProps[axis].offset(percent);
	      const ValueLabelComponent = valueLabelDisplay === 'off' ? Forward : ValueLabel;
	      return /*#__PURE__*/jsxRuntime.jsx(react.Fragment, {
	        children: /*#__PURE__*/jsxRuntime.jsx(ValueLabelComponent, _extends$1({}, !isHostComponent(ValueLabelComponent) && {
	          valueLabelFormat,
	          valueLabelDisplay,
	          value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
	          index,
	          open: open === index || active === index || valueLabelDisplay === 'on',
	          disabled
	        }, valueLabelProps, {
	          className: clsx(classes.valueLabel, valueLabelProps.className),
	          children: /*#__PURE__*/jsxRuntime.jsx(Thumb, _extends$1({
	            "data-index": index
	          }, thumbProps, getThumbProps(), {
	            className: clsx(classes.thumb, thumbProps.className, active === index && classes.active, focusVisible === index && classes.focusVisible)
	          }, !isHostComponent(Thumb) && {
	            ownerState: _extends$1({}, ownerState, thumbProps.ownerState)
	          }, {
	            style: _extends$1({}, style, {
	              pointerEvents: disableSwap && active !== index ? 'none' : undefined
	            }, thumbProps.style),
	            children: /*#__PURE__*/jsxRuntime.jsx(Input, _extends$1({}, hiddenInputProps, {
	              "data-index": index,
	              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
	              "aria-valuenow": scale(value),
	              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
	              value: values[index]
	            }, !isHostComponent(Input) && {
	              ownerState: _extends$1({}, ownerState, inputProps.ownerState)
	            }, inputProps, {
	              style: _extends$1({}, hiddenInputProps.style, inputProps.style)
	            }))
	          }))
	        }))
	      }, index);
	    })]
	  }));
	});
	var SliderUnstyled$1 = SliderUnstyled;

	createCommonjsModule(function (module) {
	  function _extends() {
	    module.exports = _extends = Object.assign || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	    return _extends.apply(this, arguments);
	  }

	  module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	function memoize$2(fn) {
	  var cache = Object.create(null);
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

	var isPropValid = /* #__PURE__ */memoize$2(function (prop) {
	  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
	  /* o */
	  && prop.charCodeAt(1) === 110
	  /* n */
	  && prop.charCodeAt(2) < 91;
	}
	/* Z+1 */
	);

	/*

	Based off glamor's StyleSheet, thanks Sunil ❤️

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance

	// usage

	import { StyleSheet } from '@emotion/sheet'

	let styleSheet = new StyleSheet({ key: '', container: document.head })

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox

	  /* istanbul ignore next */


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}

	function createStyleElement(options) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', options.key);

	  if (options.nonce !== undefined) {
	    tag.setAttribute('nonce', options.nonce);
	  }

	  tag.appendChild(document.createTextNode(''));
	  tag.setAttribute('data-s', '');
	  return tag;
	}

	var StyleSheet$1 = /*#__PURE__*/function () {
	  function StyleSheet(options) {
	    var _this = this;

	    this._insertTag = function (tag) {
	      var before;

	      if (_this.tags.length === 0) {
	        if (_this.insertionPoint) {
	          before = _this.insertionPoint.nextSibling;
	        } else if (_this.prepend) {
	          before = _this.container.firstChild;
	        } else {
	          before = _this.before;
	        }
	      } else {
	        before = _this.tags[_this.tags.length - 1].nextSibling;
	      }

	      _this.container.insertBefore(tag, before);

	      _this.tags.push(tag);
	    };

	    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
	    this.tags = [];
	    this.ctr = 0;
	    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

	    this.key = options.key;
	    this.container = options.container;
	    this.prepend = options.prepend;
	    this.insertionPoint = options.insertionPoint;
	    this.before = null;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.hydrate = function hydrate(nodes) {
	    nodes.forEach(this._insertTag);
	  };

	  _proto.insert = function insert(rule) {
	    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
	    // it's 1 in dev because we insert source maps that map a single rule to a location
	    // and you can only have one source map per style tag
	    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
	      this._insertTag(createStyleElement(this));
	    }

	    var tag = this.tags[this.tags.length - 1];

	    if (this.isSpeedy) {
	      var sheet = sheetForTag(tag);

	      try {
	        // this is the ultrafast version, works across browsers
	        // the big drawback is that the css won't be editable in devtools
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	      }
	    } else {
	      tag.appendChild(document.createTextNode(rule));
	    }

	    this.ctr++;
	  };

	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode && tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0;
	  };

	  return StyleSheet;
	}();

	var e = "-ms-";
	var r = "-moz-";
	var a = "-webkit-";
	var c = "comm";
	var n = "rule";
	var t = "decl";
	var i = "@import";
	var p = "@keyframes";
	var k = Math.abs;
	var d = String.fromCharCode;
	var g = Object.assign;

	function m(e, r) {
	  return (((r << 2 ^ z(e, 0)) << 2 ^ z(e, 1)) << 2 ^ z(e, 2)) << 2 ^ z(e, 3);
	}

	function x(e) {
	  return e.trim();
	}

	function y(e, r) {
	  return (e = r.exec(e)) ? e[0] : e;
	}

	function j(e, r, a) {
	  return e.replace(r, a);
	}

	function C(e, r) {
	  return e.indexOf(r);
	}

	function z(e, r) {
	  return e.charCodeAt(r) | 0;
	}

	function A(e, r, a) {
	  return e.slice(r, a);
	}

	function O(e) {
	  return e.length;
	}

	function M(e) {
	  return e.length;
	}

	function S(e, r) {
	  return r.push(e), e;
	}

	function q(e, r) {
	  return e.map(r).join("");
	}

	var B = 1;
	var D = 1;
	var E = 0;
	var F = 0;
	var G = 0;
	var H = "";

	function I(e, r, a, c, n, t, s) {
	  return {
	    value: e,
	    root: r,
	    parent: a,
	    type: c,
	    props: n,
	    children: t,
	    line: B,
	    column: D,
	    length: s,
	    return: ""
	  };
	}

	function J(e, r) {
	  return g(I("", null, null, "", null, null, 0), e, {
	    length: -e.length
	  }, r);
	}

	function K() {
	  return G;
	}

	function L() {
	  G = F > 0 ? z(H, --F) : 0;
	  if (D--, G === 10) D = 1, B--;
	  return G;
	}

	function N() {
	  G = F < E ? z(H, F++) : 0;
	  if (D++, G === 10) D = 1, B++;
	  return G;
	}

	function P() {
	  return z(H, F);
	}

	function Q() {
	  return F;
	}

	function R(e, r) {
	  return A(H, e, r);
	}

	function T(e) {
	  switch (e) {
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

	function U(e) {
	  return B = D = 1, E = O(H = e), F = 0, [];
	}

	function V(e) {
	  return H = "", e;
	}

	function W(e) {
	  return x(R(F - 1, ee(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
	}

	function Y(e) {
	  while (G = P()) if (G < 33) N();else break;

	  return T(e) > 2 || T(G) > 3 ? "" : " ";
	}

	function _$1(e, r) {
	  while (--r && N()) if (G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97) break;

	  return R(e, Q() + (r < 6 && P() == 32 && N() == 32));
	}

	function ee(e) {
	  while (N()) switch (G) {
	    case e:
	      return F;

	    case 34:
	    case 39:
	      if (e !== 34 && e !== 39) ee(G);
	      break;

	    case 40:
	      if (e === 41) ee(e);
	      break;

	    case 92:
	      N();
	      break;
	  }

	  return F;
	}

	function re(e, r) {
	  while (N()) if (e + G === 47 + 10) break;else if (e + G === 42 + 42 && P() === 47) break;

	  return "/*" + R(r, F - 1) + "*" + d(e === 47 ? e : N());
	}

	function ae(e) {
	  while (!T(P())) N();

	  return R(e, F);
	}

	function ce(e) {
	  return V(ne("", null, null, null, [""], e = U(e), 0, [0], e));
	}

	function ne(e, r, a, c, n, t, s, u, i) {
	  var f = 0;
	  var o = 0;
	  var l = s;
	  var v = 0;
	  var h = 0;
	  var p = 0;
	  var b = 1;
	  var w = 1;
	  var $ = 1;
	  var k = 0;
	  var g = "";
	  var m = n;
	  var x = t;
	  var y = c;
	  var z = g;

	  while (w) switch (p = k, k = N()) {
	    case 40:
	      if (p != 108 && z.charCodeAt(l - 1) == 58) {
	        if (C(z += j(W(k), "&", "&\f"), "&\f") != -1) $ = -1;
	        break;
	      }

	    case 34:
	    case 39:
	    case 91:
	      z += W(k);
	      break;

	    case 9:
	    case 10:
	    case 13:
	    case 32:
	      z += Y(p);
	      break;

	    case 92:
	      z += _$1(Q() - 1, 7);
	      continue;

	    case 47:
	      switch (P()) {
	        case 42:
	        case 47:
	          S(se(re(N(), Q()), r, a), i);
	          break;

	        default:
	          z += "/";
	      }

	      break;

	    case 123 * b:
	      u[f++] = O(z) * $;

	    case 125 * b:
	    case 59:
	    case 0:
	      switch (k) {
	        case 0:
	        case 125:
	          w = 0;

	        case 59 + o:
	          if (h > 0 && O(z) - l) S(h > 32 ? ue(z + ";", c, a, l - 1) : ue(j(z, " ", "") + ";", c, a, l - 2), i);
	          break;

	        case 59:
	          z += ";";

	        default:
	          S(y = te(z, r, a, f, o, n, u, g, m = [], x = [], l), t);
	          if (k === 123) if (o === 0) ne(z, r, y, y, m, t, l, u, x);else switch (v) {
	            case 100:
	            case 109:
	            case 115:
	              ne(e, y, y, c && S(te(e, y, y, 0, 0, n, u, g, n, m = [], l), x), n, x, l, u, c ? m : x);
	              break;

	            default:
	              ne(z, y, y, y, [""], x, 0, u, x);
	          }
	      }

	      f = o = h = 0, b = $ = 1, g = z = "", l = s;
	      break;

	    case 58:
	      l = 1 + O(z), h = p;

	    default:
	      if (b < 1) if (k == 123) --b;else if (k == 125 && b++ == 0 && L() == 125) continue;

	      switch (z += d(k), k * b) {
	        case 38:
	          $ = o > 0 ? 1 : (z += "\f", -1);
	          break;

	        case 44:
	          u[f++] = (O(z) - 1) * $, $ = 1;
	          break;

	        case 64:
	          if (P() === 45) z += W(N());
	          v = P(), o = l = O(g = z += ae(Q())), k++;
	          break;

	        case 45:
	          if (p === 45 && O(z) == 2) b = 0;
	      }

	  }

	  return t;
	}

	function te(e, r, a, c, t, s, u, i, f, o, l) {
	  var v = t - 1;
	  var h = t === 0 ? s : [""];
	  var p = M(h);

	  for (var b = 0, w = 0, $ = 0; b < c; ++b) for (var d = 0, g = A(e, v + 1, v = k(w = u[b])), m = e; d < p; ++d) if (m = x(w > 0 ? h[d] + " " + g : j(g, /&\f/g, h[d]))) f[$++] = m;

	  return I(e, r, a, t === 0 ? n : i, f, o, l);
	}

	function se(e, r, a) {
	  return I(e, r, a, c, d(K()), A(e, 2, -2), 0);
	}

	function ue(e, r, a, c) {
	  return I(e, r, a, t, A(e, 0, c), A(e, c + 1, -1), c);
	}

	function ie(c, n) {
	  switch (m(c, n)) {
	    case 5103:
	      return a + "print-" + c + c;

	    case 5737:
	    case 4201:
	    case 3177:
	    case 3433:
	    case 1641:
	    case 4457:
	    case 2921:
	    case 5572:
	    case 6356:
	    case 5844:
	    case 3191:
	    case 6645:
	    case 3005:
	    case 6391:
	    case 5879:
	    case 5623:
	    case 6135:
	    case 4599:
	    case 4855:
	    case 4215:
	    case 6389:
	    case 5109:
	    case 5365:
	    case 5621:
	    case 3829:
	      return a + c + c;

	    case 5349:
	    case 4246:
	    case 4810:
	    case 6968:
	    case 2756:
	      return a + c + r + c + e + c + c;

	    case 6828:
	    case 4268:
	      return a + c + e + c + c;

	    case 6165:
	      return a + c + e + "flex-" + c + c;

	    case 5187:
	      return a + c + j(c, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c;

	    case 5443:
	      return a + c + e + "flex-item-" + j(c, /flex-|-self/, "") + c;

	    case 4675:
	      return a + c + e + "flex-line-pack" + j(c, /align-content|flex-|-self/, "") + c;

	    case 5548:
	      return a + c + e + j(c, "shrink", "negative") + c;

	    case 5292:
	      return a + c + e + j(c, "basis", "preferred-size") + c;

	    case 6060:
	      return a + "box-" + j(c, "-grow", "") + a + c + e + j(c, "grow", "positive") + c;

	    case 4554:
	      return a + j(c, /([^-])(transform)/g, "$1" + a + "$2") + c;

	    case 6187:
	      return j(j(j(c, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c, "") + c;

	    case 5495:
	    case 3959:
	      return j(c, /(image-set\([^]*)/, a + "$1" + "$`$1");

	    case 4968:
	      return j(j(c, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c + c;

	    case 4095:
	    case 3583:
	    case 4068:
	    case 2532:
	      return j(c, /(.+)-inline(.+)/, a + "$1$2") + c;

	    case 8116:
	    case 7059:
	    case 5753:
	    case 5535:
	    case 5445:
	    case 5701:
	    case 4933:
	    case 4677:
	    case 5533:
	    case 5789:
	    case 5021:
	    case 4765:
	      if (O(c) - 1 - n > 6) switch (z(c, n + 1)) {
	        case 109:
	          if (z(c, n + 4) !== 45) break;

	        case 102:
	          return j(c, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (z(c, n + 3) == 108 ? "$3" : "$2-$3")) + c;

	        case 115:
	          return ~C(c, "stretch") ? ie(j(c, "stretch", "fill-available"), n) + c : c;
	      }
	      break;

	    case 4949:
	      if (z(c, n + 1) !== 115) break;

	    case 6444:
	      switch (z(c, O(c) - 3 - (~C(c, "!important") && 10))) {
	        case 107:
	          return j(c, ":", ":" + a) + c;

	        case 101:
	          return j(c, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z(c, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + c;
	      }

	      break;

	    case 5936:
	      switch (z(c, n + 11)) {
	        case 114:
	          return a + c + e + j(c, /[svh]\w+-[tblr]{2}/, "tb") + c;

	        case 108:
	          return a + c + e + j(c, /[svh]\w+-[tblr]{2}/, "tb-rl") + c;

	        case 45:
	          return a + c + e + j(c, /[svh]\w+-[tblr]{2}/, "lr") + c;
	      }

	      return a + c + e + c + c;
	  }

	  return c;
	}

	function fe(e, r) {
	  var a = "";
	  var c = M(e);

	  for (var n = 0; n < c; n++) a += r(e[n], n, e, r) || "";

	  return a;
	}

	function oe(e, r, a, s) {
	  switch (e.type) {
	    case i:
	    case t:
	      return e.return = e.return || e.value;

	    case c:
	      return "";

	    case p:
	      return e.return = e.value + "{" + fe(e.children, s) + "}";

	    case n:
	      e.value = e.props.join(",");
	  }

	  return O(a = fe(e.children, s)) ? e.return = e.value + "{" + a + "}" : "";
	}

	function le(e) {
	  var r = M(e);
	  return function (a, c, n, t) {
	    var s = "";

	    for (var u = 0; u < r; u++) s += e[u](a, c, n, t) || "";

	    return s;
	  };
	}

	function ve(e) {
	  return function (r) {
	    if (!r.root) if (r = r.return) e(r);
	  };
	}

	function he(c, s, u, i) {
	  if (c.length > -1) if (!c.return) switch (c.type) {
	    case t:
	      c.return = ie(c.value, c.length);
	      break;

	    case p:
	      return fe([J(c, {
	        value: j(c.value, "@", "@" + a)
	      })], i);

	    case n:
	      if (c.length) return q(c.props, function (n) {
	        switch (y(n, /(::plac\w+|:read-\w+)/)) {
	          case ":read-only":
	          case ":read-write":
	            return fe([J(c, {
	              props: [j(n, /:(read-\w+)/, ":" + r + "$1")]
	            })], i);

	          case "::placeholder":
	            return fe([J(c, {
	              props: [j(n, /:(plac\w+)/, ":" + a + "input-$1")]
	            }), J(c, {
	              props: [j(n, /:(plac\w+)/, ":" + r + "$1")]
	            }), J(c, {
	              props: [j(n, /:(plac\w+)/, e + "input-$1")]
	            })], i);
	        }

	        return "";
	      });
	  }
	}

	var weakMemoize = function weakMemoize(func) {
	  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
	  var cache = new WeakMap();
	  return function (arg) {
	    if (cache.has(arg)) {
	      // $FlowFixMe
	      return cache.get(arg);
	    }

	    var ret = func(arg);
	    cache.set(arg, ret);
	    return ret;
	  };
	};

	var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
	  var previous = 0;
	  var character = 0;

	  while (true) {
	    previous = character;
	    character = P(); // &\f

	    if (previous === 38 && character === 12) {
	      points[index] = 1;
	    }

	    if (T(character)) {
	      break;
	    }

	    N();
	  }

	  return R(begin, F);
	};

	var toRules = function toRules(parsed, points) {
	  // pretend we've started with a comma
	  var index = -1;
	  var character = 44;

	  do {
	    switch (T(character)) {
	      case 0:
	        // &\f
	        if (character === 38 && P() === 12) {
	          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
	          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
	          // and when it should just concatenate the outer and inner selectors
	          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
	          points[index] = 1;
	        }

	        parsed[index] += identifierWithPointTracking(F - 1, points, index);
	        break;

	      case 2:
	        parsed[index] += W(character);
	        break;

	      case 4:
	        // comma
	        if (character === 44) {
	          // colon
	          parsed[++index] = P() === 58 ? '&\f' : '';
	          points[index] = parsed[index].length;
	          break;
	        }

	      // fallthrough

	      default:
	        parsed[index] += d(character);
	    }
	  } while (character = N());

	  return parsed;
	};

	var getRules = function getRules(value, points) {
	  return V(toRules(U(value), points));
	}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


	var fixedElements = /* #__PURE__ */new WeakMap();

	var compat = function compat(element) {
	  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
	  // negative .length indicates that this rule has been already prefixed
	  element.length < 1) {
	    return;
	  }

	  var value = element.value,
	      parent = element.parent;
	  var isImplicitRule = element.column === parent.column && element.line === parent.line;

	  while (parent.type !== 'rule') {
	    parent = parent.parent;
	    if (!parent) return;
	  } // short-circuit for the simplest case


	  if (element.props.length === 1 && value.charCodeAt(0) !== 58
	  /* colon */
	  && !fixedElements.get(parent)) {
	    return;
	  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
	  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


	  if (isImplicitRule) {
	    return;
	  }

	  fixedElements.set(element, true);
	  var points = [];
	  var rules = getRules(value, points);
	  var parentRules = parent.props;

	  for (var i = 0, k = 0; i < rules.length; i++) {
	    for (var j = 0; j < parentRules.length; j++, k++) {
	      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	    }
	  }
	};

	var removeLabel = function removeLabel(element) {
	  if (element.type === 'decl') {
	    var value = element.value;

	    if ( // charcode for l
	    value.charCodeAt(0) === 108 && // charcode for b
	    value.charCodeAt(2) === 98) {
	      // this ignores label
	      element["return"] = '';
	      element.value = '';
	    }
	  }
	};

	var isBrowser$4 = typeof document !== 'undefined';
	var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
	  return memoize$2(function () {
	    var cache = {};
	    return function (name) {
	      return cache[name];
	    };
	  });
	});
	var defaultStylisPlugins = [he];

	var createCache = function createCache(options) {
	  var key = options.key;

	  if (isBrowser$4 && key === 'css') {
	    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
	    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
	    // note this very very intentionally targets all style elements regardless of the key to ensure
	    // that creating a cache works inside of render of a React component

	    Array.prototype.forEach.call(ssrStyles, function (node) {
	      // we want to only move elements which have a space in the data-emotion attribute value
	      // because that indicates that it is an Emotion 11 server-side rendered style elements
	      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
	      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
	      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
	      // will not result in the Emotion 10 styles being destroyed
	      var dataEmotionAttribute = node.getAttribute('data-emotion');

	      if (dataEmotionAttribute.indexOf(' ') === -1) {
	        return;
	      }

	      document.head.appendChild(node);
	      node.setAttribute('data-s', '');
	    });
	  }

	  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

	  var inserted = {}; // $FlowFixMe

	  var container;
	  var nodesToHydrate = [];

	  if (isBrowser$4) {
	    container = options.container || document.head;
	    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
	    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
	    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
	      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

	      for (var i = 1; i < attrib.length; i++) {
	        inserted[attrib[i]] = true;
	      }

	      nodesToHydrate.push(node);
	    });
	  }

	  var _insert;

	  var omnipresentPlugins = [compat, removeLabel];

	  if (isBrowser$4) {
	    var currentSheet;
	    var finalizingPlugins = [oe, ve(function (rule) {
	      currentSheet.insert(rule);
	    })];
	    var serializer = le(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

	    var stylis = function stylis(styles) {
	      return fe(ce(styles), serializer);
	    };

	    _insert = function insert(selector, serialized, sheet, shouldCache) {
	      currentSheet = sheet;

	      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

	      if (shouldCache) {
	        cache.inserted[serialized.name] = true;
	      }
	    };
	  } else {
	    var _finalizingPlugins = [oe];

	    var _serializer = le(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

	    var _stylis = function _stylis(styles) {
	      return fe(ce(styles), _serializer);
	    }; // $FlowFixMe


	    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

	    var getRules = function getRules(selector, serialized) {
	      var name = serialized.name;

	      if (serverStylisCache[name] === undefined) {
	        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
	      }

	      return serverStylisCache[name];
	    };

	    _insert = function _insert(selector, serialized, sheet, shouldCache) {
	      var name = serialized.name;
	      var rules = getRules(selector, serialized);

	      if (cache.compat === undefined) {
	        // in regular mode, we don't set the styles on the inserted cache
	        // since we don't need to and that would be wasting memory
	        // we return them so that they are rendered in a style tag
	        if (shouldCache) {
	          cache.inserted[name] = true;
	        }

	        return rules;
	      } else {
	        // in compat mode, we put the styles on the inserted cache so
	        // that emotion-server can pull out the styles
	        // except when we don't want to cache it which was in Global but now
	        // is nowhere but we don't want to do a major right now
	        // and just in case we're going to leave the case here
	        // it's also not affecting client side bundle size
	        // so it's really not a big deal
	        if (shouldCache) {
	          cache.inserted[name] = rules;
	        } else {
	          return rules;
	        }
	      }
	    };
	  }

	  var cache = {
	    key: key,
	    sheet: new StyleSheet$1({
	      key: key,
	      container: container,
	      nonce: options.nonce,
	      speedy: options.speedy,
	      prepend: options.prepend,
	      insertionPoint: options.insertionPoint
	    }),
	    nonce: options.nonce,
	    inserted: inserted,
	    registered: {},
	    insert: _insert
	  };
	  cache.sheet.hydrate(nodesToHydrate);
	  return cache;
	};

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */


	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;

	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	var isBrowser$3 = typeof document !== 'undefined';

	function getRegisteredStyles(registered, registeredStyles, classNames) {
	  var rawClassName = '';
	  classNames.split(' ').forEach(function (className) {
	    if (registered[className] !== undefined) {
	      registeredStyles.push(registered[className] + ";");
	    } else {
	      rawClassName += className + " ";
	    }
	  });
	  return rawClassName;
	}

	var registerStyles = function registerStyles(cache, serialized, isStringTag) {
	  var className = cache.key + "-" + serialized.name;

	  if ( // we only need to add the styles to the registered cache if the
	  // class name could be used further down
	  // the tree but if it's a string tag, we know it won't
	  // so we don't have to add it to registered cache.
	  // this improves memory usage since we can avoid storing the whole style string
	  (isStringTag === false || // we need to always store it if we're in compat mode and
	  // in node since emotion-server relies on whether a style is in
	  // the registered cache to know whether a style is global or not
	  // also, note that this check will be dead code eliminated in the browser
	  isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
	    cache.registered[className] = serialized.styles;
	  }
	};

	var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	  registerStyles(cache, serialized, isStringTag);
	  var className = cache.key + "-" + serialized.name;

	  if (cache.inserted[serialized.name] === undefined) {
	    var stylesForSSR = '';
	    var current = serialized;

	    do {
	      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

	      if (!isBrowser$3 && maybeStyles !== undefined) {
	        stylesForSSR += maybeStyles;
	      }

	      current = current.next;
	    } while (current !== undefined);

	    if (!isBrowser$3 && stylesForSSR.length !== 0) {
	      return stylesForSSR;
	    }
	  }
	};

	/* eslint-disable */
	// Inspired by https://github.com/garycourt/murmurhash-js
	// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
	function murmur2(str) {
	  // 'm' and 'r' are mixing constants generated offline.
	  // They're not really 'magic', they just happen to work well.
	  // const m = 0x5bd1e995;
	  // const r = 24;
	  // Initialize the hash
	  var h = 0; // Mix 4 bytes at a time into the hash

	  var k,
	      i = 0,
	      len = str.length;

	  for (; len >= 4; ++i, len -= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
	    k ^=
	    /* k >>> r: */
	    k >>> 24;
	    h =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
	    /* Math.imul(h, m): */
	    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Handle the last few bytes of the input array


	  switch (len) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h =
	      /* Math.imul(h, m): */
	      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Do a few final mixes of the hash to ensure the last few
	  // bytes are well-incorporated.


	  h ^= h >>> 13;
	  h =
	  /* Math.imul(h, m): */
	  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  return ((h ^ h >>> 15) >>> 0).toString(36);
	}

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

	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

	var isCustomProperty = function isCustomProperty(property) {
	  return property.charCodeAt(1) === 45;
	};

	var isProcessableValue = function isProcessableValue(value) {
	  return value != null && typeof value !== 'boolean';
	};

	var processStyleName = /* #__PURE__ */memoize$2(function (styleName) {
	  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});

	var processStyleValue = function processStyleValue(key, value) {
	  switch (key) {
	    case 'animation':
	    case 'animationName':
	      {
	        if (typeof value === 'string') {
	          return value.replace(animationRegex, function (match, p1, p2) {
	            cursor = {
	              name: p1,
	              styles: p2,
	              next: cursor
	            };
	            return p1;
	          });
	        }
	      }
	  }

	  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
	    return value + 'px';
	  }

	  return value;
	};

	function handleInterpolation(mergedProps, registered, interpolation) {
	  if (interpolation == null) {
	    return '';
	  }

	  if (interpolation.__emotion_styles !== undefined) {

	    return interpolation;
	  }

	  switch (typeof interpolation) {
	    case 'boolean':
	      {
	        return '';
	      }

	    case 'object':
	      {
	        if (interpolation.anim === 1) {
	          cursor = {
	            name: interpolation.name,
	            styles: interpolation.styles,
	            next: cursor
	          };
	          return interpolation.name;
	        }

	        if (interpolation.styles !== undefined) {
	          var next = interpolation.next;

	          if (next !== undefined) {
	            // not the most efficient thing ever but this is a pretty rare case
	            // and there will be very few iterations of this generally
	            while (next !== undefined) {
	              cursor = {
	                name: next.name,
	                styles: next.styles,
	                next: cursor
	              };
	              next = next.next;
	            }
	          }

	          var styles = interpolation.styles + ";";

	          return styles;
	        }

	        return createStringFromObject(mergedProps, registered, interpolation);
	      }

	    case 'function':
	      {
	        if (mergedProps !== undefined) {
	          var previousCursor = cursor;
	          var result = interpolation(mergedProps);
	          cursor = previousCursor;
	          return handleInterpolation(mergedProps, registered, result);
	        }

	        break;
	      }
	  } // finalize string values (regular strings and functions interpolated into css calls)


	  if (registered == null) {
	    return interpolation;
	  }

	  var cached = registered[interpolation];
	  return cached !== undefined ? cached : interpolation;
	}

	function createStringFromObject(mergedProps, registered, obj) {
	  var string = '';

	  if (Array.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	    }
	  } else {
	    for (var _key in obj) {
	      var value = obj[_key];

	      if (typeof value !== 'object') {
	        if (registered != null && registered[value] !== undefined) {
	          string += _key + "{" + registered[value] + "}";
	        } else if (isProcessableValue(value)) {
	          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
	        }
	      } else {
	        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
	          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
	        }

	        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
	          for (var _i = 0; _i < value.length; _i++) {
	            if (isProcessableValue(value[_i])) {
	              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
	            }
	          }
	        } else {
	          var interpolated = handleInterpolation(mergedProps, registered, value);

	          switch (_key) {
	            case 'animation':
	            case 'animationName':
	              {
	                string += processStyleName(_key) + ":" + interpolated + ";";
	                break;
	              }

	            default:
	              {

	                string += _key + "{" + interpolated + "}";
	              }
	          }
	        }
	      }
	    }
	  }

	  return string;
	}

	var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
	// keyframes are stored on the SerializedStyles object as a linked list


	var cursor;

	var serializeStyles = function serializeStyles(args, registered, mergedProps) {
	  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
	    return args[0];
	  }

	  var stringMode = true;
	  var styles = '';
	  cursor = undefined;
	  var strings = args[0];

	  if (strings == null || strings.raw === undefined) {
	    stringMode = false;
	    styles += handleInterpolation(mergedProps, registered, strings);
	  } else {

	    styles += strings[0];
	  } // we start at 1 since we've already handled the first arg


	  for (var i = 1; i < args.length; i++) {
	    styles += handleInterpolation(mergedProps, registered, args[i]);

	    if (stringMode) {

	      styles += strings[i];
	    }
	  }


	  labelPattern.lastIndex = 0;
	  var identifierName = '';
	  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

	  while ((match = labelPattern.exec(styles)) !== null) {
	    identifierName += '-' + // $FlowFixMe we know it's not null
	    match[1];
	  }

	  var name = murmur2(styles) + identifierName;

	  return {
	    name: name,
	    styles: styles,
	    next: cursor
	  };
	};

	var isBrowser$2 = typeof document !== 'undefined';
	var EmotionCacheContext = /* #__PURE__ */react.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
	// because this module is primarily intended for the browser and node
	// but it's also required in react native and similar environments sometimes
	// and we could have a special build just for that
	// but this is much easier and the native packages
	// might use a different theme context in the future anyway
	typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
	  key: 'css'
	}) : null);

	EmotionCacheContext.Provider;

	var withEmotionCache = function withEmotionCache(func) {
	  // $FlowFixMe
	  return /*#__PURE__*/react.forwardRef(function (props, ref) {
	    // the cache will never be null in the browser
	    var cache = react.useContext(EmotionCacheContext);
	    return func(props, cache, ref);
	  });
	};

	if (!isBrowser$2) {
	  withEmotionCache = function withEmotionCache(func) {
	    return function (props) {
	      var cache = react.useContext(EmotionCacheContext);

	      if (cache === null) {
	        // yes, we're potentially creating this on every render
	        // it doesn't actually matter though since it's only on the server
	        // so there will only every be a single render
	        // that could change in the future because of suspense and etc. but for now,
	        // this works and i don't want to optimise for a future thing that we aren't sure about
	        cache = createCache({
	          key: 'css'
	        });
	        return /*#__PURE__*/react.createElement(EmotionCacheContext.Provider, {
	          value: cache
	        }, func(props, cache));
	      } else {
	        return func(props, cache);
	      }
	    };
	  };
	}

	var ThemeContext$4 = /* #__PURE__ */react.createContext({});
	React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
	  create();
	};

	React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : react.useLayoutEffect;

	function css$1() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return serializeStyles(args);
	}

	var keyframes = function keyframes() {
	  var insertable = css$1.apply(void 0, arguments);
	  var name = "animation-" + insertable.name; // $FlowFixMe

	  return {
	    name: name,
	    styles: "@keyframes " + name + "{" + insertable.styles + "}",
	    anim: 1,
	    toString: function toString() {
	      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
	    }
	  };
	};

	var testOmitPropsOnStringTag = isPropValid;

	var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
	  return key !== 'theme';
	};

	var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
	  return typeof tag === 'string' && // 96 is one less than the char code
	  // for "a" so this is checking that
	  // it's a lowercase character
	  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
	};

	var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
	  var shouldForwardProp;

	  if (options) {
	    var optionsShouldForwardProp = options.shouldForwardProp;
	    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
	      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
	    } : optionsShouldForwardProp;
	  }

	  if (typeof shouldForwardProp !== 'function' && isReal) {
	    shouldForwardProp = tag.__emotion_forwardProp;
	  }

	  return shouldForwardProp;
	};

	var isBrowser$1 = typeof document !== 'undefined';
	var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
	  create();
	};

	function useInsertionEffectMaybe(create) {
	  if (!isBrowser$1) {
	    return create();
	  }

	  useInsertionEffect(create);
	}
	var isBrowser$1$1 = typeof document !== 'undefined';

	var Insertion = function Insertion(_ref) {
	  var cache = _ref.cache,
	      serialized = _ref.serialized,
	      isStringTag = _ref.isStringTag;
	  registerStyles(cache, serialized, isStringTag);
	  var rules = useInsertionEffectMaybe(function () {
	    return insertStyles(cache, serialized, isStringTag);
	  });

	  if (!isBrowser$1$1 && rules !== undefined) {
	    var _ref2;

	    var serializedNames = serialized.name;
	    var next = serialized.next;

	    while (next !== undefined) {
	      serializedNames += ' ' + next.name;
	      next = next.next;
	    }

	    return /*#__PURE__*/react.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
	      __html: rules
	    }, _ref2.nonce = cache.sheet.nonce, _ref2));
	  }

	  return null;
	};

	var createStyled$1 = function createStyled(tag, options) {

	  var isReal = tag.__emotion_real === tag;
	  var baseTag = isReal && tag.__emotion_base || tag;
	  var identifierName;
	  var targetClassName;

	  if (options !== undefined) {
	    identifierName = options.label;
	    targetClassName = options.target;
	  }

	  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
	  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
	  var shouldUseAs = !defaultShouldForwardProp('as');
	  return function () {
	    var args = arguments;
	    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

	    if (identifierName !== undefined) {
	      styles.push("label:" + identifierName + ";");
	    }

	    if (args[0] == null || args[0].raw === undefined) {
	      styles.push.apply(styles, args);
	    } else {

	      styles.push(args[0][0]);
	      var len = args.length;
	      var i = 1;

	      for (; i < len; i++) {

	        styles.push(args[i], args[0][i]);
	      }
	    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


	    var Styled = withEmotionCache(function (props, cache, ref) {
	      var FinalTag = shouldUseAs && props.as || baseTag;
	      var className = '';
	      var classInterpolations = [];
	      var mergedProps = props;

	      if (props.theme == null) {
	        mergedProps = {};

	        for (var key in props) {
	          mergedProps[key] = props[key];
	        }

	        mergedProps.theme = react.useContext(ThemeContext$4);
	      }

	      if (typeof props.className === 'string') {
	        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
	      } else if (props.className != null) {
	        className = props.className + " ";
	      }

	      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
	      className += cache.key + "-" + serialized.name;

	      if (targetClassName !== undefined) {
	        className += " " + targetClassName;
	      }

	      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
	      var newProps = {};

	      for (var _key in props) {
	        if (shouldUseAs && _key === 'as') continue;

	        if ( // $FlowFixMe
	        finalShouldForwardProp(_key)) {
	          newProps[_key] = props[_key];
	        }
	      }

	      newProps.className = className;
	      newProps.ref = ref;
	      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Insertion, {
	        cache: cache,
	        serialized: serialized,
	        isStringTag: typeof FinalTag === 'string'
	      }), /*#__PURE__*/react.createElement(FinalTag, newProps));
	    });
	    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
	    Styled.defaultProps = tag.defaultProps;
	    Styled.__emotion_real = Styled;
	    Styled.__emotion_base = baseTag;
	    Styled.__emotion_styles = styles;
	    Styled.__emotion_forwardProp = shouldForwardProp;
	    Object.defineProperty(Styled, 'toString', {
	      value: function value() {
	        if (targetClassName === undefined && "production" !== 'production') {
	          return 'NO_COMPONENT_SELECTOR';
	        } // $FlowFixMe: coerce undefined to string


	        return "." + targetClassName;
	      }
	    });

	    Styled.withComponent = function (nextTag, nextOptions) {
	      return createStyled(nextTag, _extends$1({}, options, nextOptions, {
	        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
	      })).apply(void 0, styles);
	    };

	    return Styled;
	  };
	};

	var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	var newStyled = createStyled$1.bind();
	tags.forEach(function (tagName) {
	  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
	  newStyled[tagName] = newStyled(tagName);
	});
	var emStyled = newStyled;

	/** @license MUI v5.6.1
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	function styled$2(tag, options) {
	  const stylesFactory = emStyled(tag, options);

	  return stylesFactory;
	}

	function merge(acc, item) {
	  if (!item) {
	    return acc;
	  }

	  return deepmerge$1(acc, item, {
	    clone: false // No need to clone deep, it's way faster.

	  });
	}

	// For instance with the first breakpoint xs: [xs, sm[.

	const values$1 = {
	  xs: 0,
	  // phone
	  sm: 600,
	  // tablet
	  md: 900,
	  // small laptop
	  lg: 1200,
	  // desktop
	  xl: 1536 // large screen

	};
	const defaultBreakpoints = {
	  // Sorted ASC by size. That's important.
	  // It can't be configured as it's used statically for propTypes.
	  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
	  up: key => "@media (min-width:".concat(values$1[key], "px)")
	};
	function handleBreakpoints(props, propValue, styleFromPropValue) {
	  const theme = props.theme || {};

	  if (Array.isArray(propValue)) {
	    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
	    return propValue.reduce((acc, item, index) => {
	      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
	      return acc;
	    }, {});
	  }

	  if (typeof propValue === 'object') {
	    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
	    return Object.keys(propValue).reduce((acc, breakpoint) => {
	      // key is breakpoint
	      if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
	        const mediaKey = themeBreakpoints.up(breakpoint);
	        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
	      } else {
	        const cssKey = breakpoint;
	        acc[cssKey] = propValue[cssKey];
	      }

	      return acc;
	    }, {});
	  }

	  const output = styleFromPropValue(propValue);
	  return output;
	}

	function createEmptyBreakpointObject(breakpointsInput = {}) {
	  var _breakpointsInput$key;

	  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
	    const breakpointStyleKey = breakpointsInput.up(key);
	    acc[breakpointStyleKey] = {};
	    return acc;
	  }, {});
	  return breakpointsInOrder || {};
	}
	function removeUnusedBreakpoints(breakpointKeys, style) {
	  return breakpointKeys.reduce((acc, key) => {
	    const breakpointOutput = acc[key];
	    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;

	    if (isBreakpointUnused) {
	      delete acc[key];
	    }

	    return acc;
	  }, style);
	}
	// [1,2,3] => {xs: true, sm: true, md: true}
	// {xs: 1, sm: 2, md: 3} => {xs: true, sm: true, md: true}

	function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
	  // fixed value
	  if (typeof breakpointValues !== 'object') {
	    return {};
	  }

	  const base = {};
	  const breakpointsKeys = Object.keys(themeBreakpoints);

	  if (Array.isArray(breakpointValues)) {
	    breakpointsKeys.forEach((breakpoint, i) => {
	      if (i < breakpointValues.length) {
	        base[breakpoint] = true;
	      }
	    });
	  } else {
	    breakpointsKeys.forEach(breakpoint => {
	      if (breakpointValues[breakpoint] != null) {
	        base[breakpoint] = true;
	      }
	    });
	  }

	  return base;
	}
	function resolveBreakpointValues({
	  values: breakpointValues,
	  breakpoints: themeBreakpoints,
	  base: customBase
	}) {
	  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
	  const keys = Object.keys(base);

	  if (keys.length === 0) {
	    return breakpointValues;
	  }

	  let previous;
	  return keys.reduce((acc, breakpoint, i) => {
	    if (Array.isArray(breakpointValues)) {
	      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
	      previous = i;
	    } else {
	      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous] || breakpointValues;
	      previous = breakpoint;
	    }

	    return acc;
	  }, {});
	}

	function getPath(obj, path) {
	  if (!path || typeof path !== 'string') {
	    return null;
	  } // Check if CSS variables are used


	  if (obj && obj.vars) {
	    const val = "vars.".concat(path).split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);

	    if (val != null) {
	      return val;
	    }
	  }

	  return path.split('.').reduce((acc, item) => {
	    if (acc && acc[item] != null) {
	      return acc[item];
	    }

	    return null;
	  }, obj);
	}

	function getValue$1(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
	  let value;

	  if (typeof themeMapping === 'function') {
	    value = themeMapping(propValueFinal);
	  } else if (Array.isArray(themeMapping)) {
	    value = themeMapping[propValueFinal] || userValue;
	  } else {
	    value = getPath(themeMapping, propValueFinal) || userValue;
	  }

	  if (transform) {
	    value = transform(value);
	  }

	  return value;
	}

	function style$3(options) {
	  const {
	    prop,
	    cssProperty = options.prop,
	    themeKey,
	    transform
	  } = options;

	  const fn = props => {
	    if (props[prop] == null) {
	      return null;
	    }

	    const propValue = props[prop];
	    const theme = props.theme;
	    const themeMapping = getPath(theme, themeKey) || {};

	    const styleFromPropValue = propValueFinal => {
	      let value = getValue$1(themeMapping, transform, propValueFinal);

	      if (propValueFinal === value && typeof propValueFinal === 'string') {
	        // Haven't found value
	        value = getValue$1(themeMapping, transform, "".concat(prop).concat(propValueFinal === 'default' ? '' : capitalize$1(propValueFinal)), propValueFinal);
	      }

	      if (cssProperty === false) {
	        return value;
	      }

	      return {
	        [cssProperty]: value
	      };
	    };

	    return handleBreakpoints(props, propValue, styleFromPropValue);
	  };

	  fn.propTypes = {};
	  fn.filterProps = [prop];
	  return fn;
	}

	function compose(...styles) {
	  const handlers = styles.reduce((acc, style) => {
	    style.filterProps.forEach(prop => {
	      acc[prop] = style;
	    });
	    return acc;
	  }, {});

	  const fn = props => {
	    return Object.keys(props).reduce((acc, prop) => {
	      if (handlers[prop]) {
	        return merge(acc, handlers[prop](props));
	      }

	      return acc;
	    }, {});
	  };

	  fn.propTypes = {};
	  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
	  return fn;
	}

	function memoize$1(fn) {
	  const cache = {};
	  return arg => {
	    if (cache[arg] === undefined) {
	      cache[arg] = fn(arg);
	    }

	    return cache[arg];
	  };
	}

	const properties = {
	  m: 'margin',
	  p: 'padding'
	};
	const directions = {
	  t: 'Top',
	  r: 'Right',
	  b: 'Bottom',
	  l: 'Left',
	  x: ['Left', 'Right'],
	  y: ['Top', 'Bottom']
	};
	const aliases = {
	  marginX: 'mx',
	  marginY: 'my',
	  paddingX: 'px',
	  paddingY: 'py'
	}; // memoize() impact:
	// From 300,000 ops/sec
	// To 350,000 ops/sec

	const getCssProperties = memoize$1(prop => {
	  // It's not a shorthand notation.
	  if (prop.length > 2) {
	    if (aliases[prop]) {
	      prop = aliases[prop];
	    } else {
	      return [prop];
	    }
	  }

	  const [a, b] = prop.split('');
	  const property = properties[a];
	  const direction = directions[b] || '';
	  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
	});
	const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
	const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
	const spacingKeys = [...marginKeys, ...paddingKeys];
	function createUnaryUnit(theme, themeKey, defaultValue, propName) {
	  var _getPath;

	  const themeSpacing = (_getPath = getPath(theme, themeKey)) != null ? _getPath : defaultValue;

	  if (typeof themeSpacing === 'number') {
	    return abs => {
	      if (typeof abs === 'string') {
	        return abs;
	      }

	      return themeSpacing * abs;
	    };
	  }

	  if (Array.isArray(themeSpacing)) {
	    return abs => {
	      if (typeof abs === 'string') {
	        return abs;
	      }

	      return themeSpacing[abs];
	    };
	  }

	  if (typeof themeSpacing === 'function') {
	    return themeSpacing;
	  }

	  return () => undefined;
	}
	function createUnarySpacing$1(theme) {
	  return createUnaryUnit(theme, 'spacing', 8);
	}
	function getValue(transformer, propValue) {
	  if (typeof propValue === 'string' || propValue == null) {
	    return propValue;
	  }

	  const abs = Math.abs(propValue);
	  const transformed = transformer(abs);

	  if (propValue >= 0) {
	    return transformed;
	  }

	  if (typeof transformed === 'number') {
	    return -transformed;
	  }

	  return "-".concat(transformed);
	}
	function getStyleFromPropValue(cssProperties, transformer) {
	  return propValue => cssProperties.reduce((acc, cssProperty) => {
	    acc[cssProperty] = getValue(transformer, propValue);
	    return acc;
	  }, {});
	}

	function resolveCssProperty(props, keys, prop, transformer) {
	  // Using a hash computation over an array iteration could be faster, but with only 28 items,
	  // it's doesn't worth the bundle size.
	  if (keys.indexOf(prop) === -1) {
	    return null;
	  }

	  const cssProperties = getCssProperties(prop);
	  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
	  const propValue = props[prop];
	  return handleBreakpoints(props, propValue, styleFromPropValue);
	}

	function style$2(props, keys) {
	  const transformer = createUnarySpacing$1(props.theme);
	  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
	}

	function spacing(props) {
	  return style$2(props, spacingKeys);
	}

	spacing.propTypes = {};
	spacing.filterProps = spacingKeys;

	function getBorder(value) {
	  if (typeof value !== 'number') {
	    return value;
	  }

	  return "".concat(value, "px solid");
	}

	const border = style$3({
	  prop: 'border',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderTop = style$3({
	  prop: 'borderTop',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderRight = style$3({
	  prop: 'borderRight',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderBottom = style$3({
	  prop: 'borderBottom',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderLeft = style$3({
	  prop: 'borderLeft',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderColor = style$3({
	  prop: 'borderColor',
	  themeKey: 'palette'
	});
	const borderTopColor = style$3({
	  prop: 'borderTopColor',
	  themeKey: 'palette'
	});
	const borderRightColor = style$3({
	  prop: 'borderRightColor',
	  themeKey: 'palette'
	});
	const borderBottomColor = style$3({
	  prop: 'borderBottomColor',
	  themeKey: 'palette'
	});
	const borderLeftColor = style$3({
	  prop: 'borderLeftColor',
	  themeKey: 'palette'
	});
	const borderRadius = props => {
	  if (props.borderRadius !== undefined && props.borderRadius !== null) {
	    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);

	    const styleFromPropValue = propValue => ({
	      borderRadius: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
	  }

	  return null;
	};
	borderRadius.propTypes = {};
	borderRadius.filterProps = ['borderRadius'];
	const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
	var borders$1 = borders;

	const displayPrint = style$3({
	  prop: 'displayPrint',
	  cssProperty: false,
	  transform: value => ({
	    '@media print': {
	      display: value
	    }
	  })
	});
	const displayRaw = style$3({
	  prop: 'display'
	});
	const overflow = style$3({
	  prop: 'overflow'
	});
	const textOverflow = style$3({
	  prop: 'textOverflow'
	});
	const visibility = style$3({
	  prop: 'visibility'
	});
	const whiteSpace = style$3({
	  prop: 'whiteSpace'
	});
	var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

	const flexBasis = style$3({
	  prop: 'flexBasis'
	});
	const flexDirection = style$3({
	  prop: 'flexDirection'
	});
	const flexWrap = style$3({
	  prop: 'flexWrap'
	});
	const justifyContent = style$3({
	  prop: 'justifyContent'
	});
	const alignItems = style$3({
	  prop: 'alignItems'
	});
	const alignContent = style$3({
	  prop: 'alignContent'
	});
	const order = style$3({
	  prop: 'order'
	});
	const flex = style$3({
	  prop: 'flex'
	});
	const flexGrow = style$3({
	  prop: 'flexGrow'
	});
	const flexShrink = style$3({
	  prop: 'flexShrink'
	});
	const alignSelf = style$3({
	  prop: 'alignSelf'
	});
	const justifyItems = style$3({
	  prop: 'justifyItems'
	});
	const justifySelf = style$3({
	  prop: 'justifySelf'
	});
	const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
	var flexbox$1 = flexbox;

	const gap = props => {
	  if (props.gap !== undefined && props.gap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

	    const styleFromPropValue = propValue => ({
	      gap: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.gap, styleFromPropValue);
	  }

	  return null;
	};
	gap.propTypes = {};
	gap.filterProps = ['gap'];
	const columnGap = props => {
	  if (props.columnGap !== undefined && props.columnGap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

	    const styleFromPropValue = propValue => ({
	      columnGap: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
	  }

	  return null;
	};
	columnGap.propTypes = {};
	columnGap.filterProps = ['columnGap'];
	const rowGap = props => {
	  if (props.rowGap !== undefined && props.rowGap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

	    const styleFromPropValue = propValue => ({
	      rowGap: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
	  }

	  return null;
	};
	rowGap.propTypes = {};
	rowGap.filterProps = ['rowGap'];
	const gridColumn = style$3({
	  prop: 'gridColumn'
	});
	const gridRow = style$3({
	  prop: 'gridRow'
	});
	const gridAutoFlow = style$3({
	  prop: 'gridAutoFlow'
	});
	const gridAutoColumns = style$3({
	  prop: 'gridAutoColumns'
	});
	const gridAutoRows = style$3({
	  prop: 'gridAutoRows'
	});
	const gridTemplateColumns = style$3({
	  prop: 'gridTemplateColumns'
	});
	const gridTemplateRows = style$3({
	  prop: 'gridTemplateRows'
	});
	const gridTemplateAreas = style$3({
	  prop: 'gridTemplateAreas'
	});
	const gridArea = style$3({
	  prop: 'gridArea'
	});
	const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
	var grid$1 = grid;

	const color = style$3({
	  prop: 'color',
	  themeKey: 'palette'
	});
	const bgcolor = style$3({
	  prop: 'bgcolor',
	  cssProperty: 'backgroundColor',
	  themeKey: 'palette'
	});
	const backgroundColor = style$3({
	  prop: 'backgroundColor',
	  themeKey: 'palette'
	});
	const palette = compose(color, bgcolor, backgroundColor);
	var palette$1 = palette;

	const position = style$3({
	  prop: 'position'
	});
	const zIndex$4 = style$3({
	  prop: 'zIndex',
	  themeKey: 'zIndex'
	});
	const top = style$3({
	  prop: 'top'
	});
	const right = style$3({
	  prop: 'right'
	});
	const bottom = style$3({
	  prop: 'bottom'
	});
	const left = style$3({
	  prop: 'left'
	});
	var positions = compose(position, zIndex$4, top, right, bottom, left);

	const boxShadow = style$3({
	  prop: 'boxShadow',
	  themeKey: 'shadows'
	});
	var shadows$4 = boxShadow;

	function transform$1(value) {
	  return value <= 1 && value !== 0 ? "".concat(value * 100, "%") : value;
	}

	const width = style$3({
	  prop: 'width',
	  transform: transform$1
	});
	const maxWidth = props => {
	  if (props.maxWidth !== undefined && props.maxWidth !== null) {
	    const styleFromPropValue = propValue => {
	      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

	      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values$1[propValue];
	      return {
	        maxWidth: breakpoint || transform$1(propValue)
	      };
	    };

	    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
	  }

	  return null;
	};
	maxWidth.filterProps = ['maxWidth'];
	const minWidth = style$3({
	  prop: 'minWidth',
	  transform: transform$1
	});
	const height = style$3({
	  prop: 'height',
	  transform: transform$1
	});
	const maxHeight = style$3({
	  prop: 'maxHeight',
	  transform: transform$1
	});
	const minHeight = style$3({
	  prop: 'minHeight',
	  transform: transform$1
	});
	style$3({
	  prop: 'size',
	  cssProperty: 'width',
	  transform: transform$1
	});
	style$3({
	  prop: 'size',
	  cssProperty: 'height',
	  transform: transform$1
	});
	const boxSizing = style$3({
	  prop: 'boxSizing'
	});
	const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
	var sizing$1 = sizing;

	const fontFamily = style$3({
	  prop: 'fontFamily',
	  themeKey: 'typography'
	});
	const fontSize = style$3({
	  prop: 'fontSize',
	  themeKey: 'typography'
	});
	const fontStyle = style$3({
	  prop: 'fontStyle',
	  themeKey: 'typography'
	});
	const fontWeight = style$3({
	  prop: 'fontWeight',
	  themeKey: 'typography'
	});
	const letterSpacing = style$3({
	  prop: 'letterSpacing'
	});
	const textTransform = style$3({
	  prop: 'textTransform'
	});
	const lineHeight = style$3({
	  prop: 'lineHeight'
	});
	const textAlign = style$3({
	  prop: 'textAlign'
	});
	const typographyVariant = style$3({
	  prop: 'typography',
	  cssProperty: false,
	  themeKey: 'typography'
	});
	const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
	var typography$1 = typography;

	const filterPropsMapping = {
	  borders: borders$1.filterProps,
	  display: display.filterProps,
	  flexbox: flexbox$1.filterProps,
	  grid: grid$1.filterProps,
	  positions: positions.filterProps,
	  palette: palette$1.filterProps,
	  shadows: shadows$4.filterProps,
	  sizing: sizing$1.filterProps,
	  spacing: spacing.filterProps,
	  typography: typography$1.filterProps
	};
	const styleFunctionMapping = {
	  borders: borders$1,
	  display,
	  flexbox: flexbox$1,
	  grid: grid$1,
	  positions,
	  palette: palette$1,
	  shadows: shadows$4,
	  sizing: sizing$1,
	  spacing,
	  typography: typography$1
	};
	const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
	  filterPropsMapping[styleFnName].forEach(propName => {
	    acc[propName] = styleFunctionMapping[styleFnName];
	  });
	  return acc;
	}, {});

	function objectsHaveSameKeys(...objects) {
	  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
	  const union = new Set(allKeys);
	  return objects.every(object => union.size === Object.keys(object).length);
	}

	function callIfFn(maybeFn, arg) {
	  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
	} // eslint-disable-next-line @typescript-eslint/naming-convention


	function unstable_createStyleFunctionSx(styleFunctionMapping$1 = styleFunctionMapping) {
	  const propToStyleFunction = Object.keys(styleFunctionMapping$1).reduce((acc, styleFnName) => {
	    styleFunctionMapping$1[styleFnName].filterProps.forEach(propName => {
	      acc[propName] = styleFunctionMapping$1[styleFnName];
	    });
	    return acc;
	  }, {});

	  function getThemeValue(prop, value, theme) {
	    const inputProps = {
	      [prop]: value,
	      theme
	    };
	    const styleFunction = propToStyleFunction[prop];
	    return styleFunction ? styleFunction(inputProps) : {
	      [prop]: value
	    };
	  }

	  function styleFunctionSx(props) {
	    const {
	      sx,
	      theme = {}
	    } = props || {};

	    if (!sx) {
	      return null; // emotion & styled-components will neglect null
	    }
	    /*
	     * Receive `sxInput` as object or callback
	     * and then recursively check keys & values to create media query object styles.
	     * (the result will be used in `styled`)
	     */


	    function traverse(sxInput) {
	      let sxObject = sxInput;

	      if (typeof sxInput === 'function') {
	        sxObject = sxInput(theme);
	      } else if (typeof sxInput !== 'object') {
	        // value
	        return sxInput;
	      }

	      if (!sxObject) {
	        return null;
	      }

	      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
	      const breakpointsKeys = Object.keys(emptyBreakpoints);
	      let css = emptyBreakpoints;
	      Object.keys(sxObject).forEach(styleKey => {
	        const value = callIfFn(sxObject[styleKey], theme);

	        if (value !== null && value !== undefined) {
	          if (typeof value === 'object') {
	            if (propToStyleFunction[styleKey]) {
	              css = merge(css, getThemeValue(styleKey, value, theme));
	            } else {
	              const breakpointsValues = handleBreakpoints({
	                theme
	              }, value, x => ({
	                [styleKey]: x
	              }));

	              if (objectsHaveSameKeys(breakpointsValues, value)) {
	                css[styleKey] = styleFunctionSx({
	                  sx: value,
	                  theme
	                });
	              } else {
	                css = merge(css, breakpointsValues);
	              }
	            }
	          } else {
	            css = merge(css, getThemeValue(styleKey, value, theme));
	          }
	        }
	      });
	      return removeUnusedBreakpoints(breakpointsKeys, css);
	    }

	    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
	  }

	  return styleFunctionSx;
	}
	const styleFunctionSx = unstable_createStyleFunctionSx();
	styleFunctionSx.filterProps = ['sx'];
	var defaultStyleFunctionSx = styleFunctionSx;

	const _excluded$g = ["sx"];

	const splitProps = props => {
	  const result = {
	    systemProps: {},
	    otherProps: {}
	  };
	  Object.keys(props).forEach(prop => {
	    if (propToStyleFunction[prop]) {
	      result.systemProps[prop] = props[prop];
	    } else {
	      result.otherProps[prop] = props[prop];
	    }
	  });
	  return result;
	};

	function extendSxProp(props) {
	  const {
	    sx: inSx
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$g);

	  const {
	    systemProps,
	    otherProps
	  } = splitProps(other);
	  let finalSx;

	  if (Array.isArray(inSx)) {
	    finalSx = [systemProps, ...inSx];
	  } else if (typeof inSx === 'function') {
	    finalSx = (...args) => {
	      const result = inSx(...args);

	      if (!isPlainObject$1(result)) {
	        return systemProps;
	      }

	      return _extends$1({}, systemProps, result);
	    };
	  } else {
	    finalSx = _extends$1({}, systemProps, inSx);
	  }

	  return _extends$1({}, otherProps, {
	    sx: finalSx
	  });
	}

	const _excluded$f = ["values", "unit", "step"]; // Sorted ASC by size. That's important.

	const sortBreakpointsValues = values => {
	  const breakpointsAsArray = Object.keys(values).map(key => ({
	    key,
	    val: values[key]
	  })) || []; // Sort in ascending order

	  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
	  return breakpointsAsArray.reduce((acc, obj) => {
	    return _extends$1({}, acc, {
	      [obj.key]: obj.val
	    });
	  }, {});
	}; // Keep in mind that @media is inclusive by the CSS specification.


	function createBreakpoints$1(breakpoints) {
	  const {
	    // The breakpoint **start** at this value.
	    // For instance with the first breakpoint xs: [xs, sm).
	    values = {
	      xs: 0,
	      // phone
	      sm: 600,
	      // tablet
	      md: 900,
	      // small laptop
	      lg: 1200,
	      // desktop
	      xl: 1536 // large screen

	    },
	    unit = 'px',
	    step = 5
	  } = breakpoints,
	        other = _objectWithoutPropertiesLoose(breakpoints, _excluded$f);

	  const sortedValues = sortBreakpointsValues(values);
	  const keys = Object.keys(sortedValues);

	  function up(key) {
	    const value = typeof values[key] === 'number' ? values[key] : key;
	    return "@media (min-width:".concat(value).concat(unit, ")");
	  }

	  function down(key) {
	    const value = typeof values[key] === 'number' ? values[key] : key;
	    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
	  }

	  function between(start, end) {
	    const endIndex = keys.indexOf(end);
	    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100).concat(unit, ")");
	  }

	  function only(key) {
	    if (keys.indexOf(key) + 1 < keys.length) {
	      return between(key, keys[keys.indexOf(key) + 1]);
	    }

	    return up(key);
	  }

	  function not(key) {
	    // handle first and last key separately, for better readability
	    const keyIndex = keys.indexOf(key);

	    if (keyIndex === 0) {
	      return up(keys[1]);
	    }

	    if (keyIndex === keys.length - 1) {
	      return down(keys[keyIndex]);
	    }

	    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
	  }

	  return _extends$1({
	    keys,
	    values: sortedValues,
	    up,
	    down,
	    between,
	    only,
	    not,
	    unit
	  }, other);
	}

	const shape$2 = {
	  borderRadius: 4
	};
	var shape$3 = shape$2;

	/* tslint:enable:unified-signatures */

	function createSpacing$1(spacingInput = 8) {
	  // Already transformed.
	  if (spacingInput.mui) {
	    return spacingInput;
	  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
	  // Smaller components, such as icons, can align to a 4dp grid.
	  // https://material.io/design/layout/understanding-layout.html#usage


	  const transform = createUnarySpacing$1({
	    spacing: spacingInput
	  });

	  const spacing = (...argsInput) => {

	    const args = argsInput.length === 0 ? [1] : argsInput;
	    return args.map(argument => {
	      const output = transform(argument);
	      return typeof output === 'number' ? "".concat(output, "px") : output;
	    }).join(' ');
	  };

	  spacing.mui = true;
	  return spacing;
	}

	const _excluded$e = ["breakpoints", "palette", "spacing", "shape"];

	function createTheme$2(options = {}, ...args) {
	  const {
	    breakpoints: breakpointsInput = {},
	    palette: paletteInput = {},
	    spacing: spacingInput,
	    shape: shapeInput = {}
	  } = options,
	        other = _objectWithoutPropertiesLoose(options, _excluded$e);

	  const breakpoints = createBreakpoints$1(breakpointsInput);
	  const spacing = createSpacing$1(spacingInput);
	  let muiTheme = deepmerge$1({
	    breakpoints,
	    direction: 'ltr',
	    components: {},
	    // Inject component definitions.
	    palette: _extends$1({
	      mode: 'light'
	    }, paletteInput),
	    spacing,
	    shape: _extends$1({}, shape$3, shapeInput)
	  }, other);
	  muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);
	  return muiTheme;
	}

	const ThemeContext$2 = /*#__PURE__*/react.createContext(null);

	var ThemeContext$3 = ThemeContext$2;

	function useTheme$4() {
	  const theme = react.useContext(ThemeContext$3);

	  return theme;
	}

	function isObjectEmpty(obj) {
	  return Object.keys(obj).length === 0;
	}

	function useTheme$3(defaultTheme = null) {
	  const contextTheme = useTheme$4();
	  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
	}

	const systemDefaultTheme$1 = createTheme$2();

	function useTheme$2(defaultTheme = systemDefaultTheme$1) {
	  return useTheme$3(defaultTheme);
	}

	const _excluded$d = ["className", "component"];
	function createBox(options = {}) {
	  const {
	    defaultTheme,
	    defaultClassName = 'MuiBox-root',
	    generateClassName,
	    styleFunctionSx = defaultStyleFunctionSx
	  } = options;
	  const BoxRoot = styled$2('div')(styleFunctionSx);
	  const Box = /*#__PURE__*/react.forwardRef(function Box(inProps, ref) {
	    const theme = useTheme$2(defaultTheme);

	    const _extendSxProp = extendSxProp(inProps),
	          {
	      className,
	      component = 'div'
	    } = _extendSxProp,
	          other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded$d);

	    return /*#__PURE__*/jsxRuntime.jsx(BoxRoot, _extends$1({
	      as: component,
	      ref: ref,
	      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
	      theme: theme
	    }, other));
	  });
	  return Box;
	}

	const _excluded$c = ["variant"];

	function isEmpty$1(string) {
	  return string.length === 0;
	}
	/**
	 * Generates string classKey based on the properties provided. It starts with the
	 * variant if defined, and then it appends all other properties in alphabetical order.
	 * @param {object} props - the properties for which the classKey should be created.
	 */


	function propsToClassKey(props) {
	  const {
	    variant
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$c);

	  let classKey = variant || '';
	  Object.keys(other).sort().forEach(key => {
	    if (key === 'color') {
	      classKey += isEmpty$1(classKey) ? props[key] : capitalize$1(props[key]);
	    } else {
	      classKey += "".concat(isEmpty$1(classKey) ? key : capitalize$1(key)).concat(capitalize$1(props[key].toString()));
	    }
	  });
	  return classKey;
	}

	const _excluded$b = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
	      _excluded2 = ["theme"],
	      _excluded3 = ["theme"];

	function isEmpty(obj) {
	  return Object.keys(obj).length === 0;
	}

	const getStyleOverrides = (name, theme) => {
	  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
	    return theme.components[name].styleOverrides;
	  }

	  return null;
	};

	const getVariantStyles = (name, theme) => {
	  let variants = [];

	  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
	    variants = theme.components[name].variants;
	  }

	  const variantsStyles = {};
	  variants.forEach(definition => {
	    const key = propsToClassKey(definition.props);
	    variantsStyles[key] = definition.style;
	  });
	  return variantsStyles;
	};

	const variantsResolver = (props, styles, theme, name) => {
	  var _theme$components, _theme$components$nam;

	  const {
	    ownerState = {}
	  } = props;
	  const variantsStyles = [];
	  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

	  if (themeVariants) {
	    themeVariants.forEach(themeVariant => {
	      let isMatch = true;
	      Object.keys(themeVariant.props).forEach(key => {
	        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
	          isMatch = false;
	        }
	      });

	      if (isMatch) {
	        variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
	      }
	    });
	  }

	  return variantsStyles;
	}; // Update /system/styled/#api in case if this changes


	function shouldForwardProp(prop) {
	  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
	}
	const systemDefaultTheme = createTheme$2();

	function createStyled(input = {}) {
	  const {
	    defaultTheme = systemDefaultTheme,
	    rootShouldForwardProp = shouldForwardProp,
	    slotShouldForwardProp = shouldForwardProp,
	    styleFunctionSx = defaultStyleFunctionSx
	  } = input;
	  return (tag, inputOptions = {}) => {
	    const {
	      name: componentName,
	      slot: componentSlot,
	      skipVariantsResolver: inputSkipVariantsResolver,
	      skipSx: inputSkipSx,
	      overridesResolver
	    } = inputOptions,
	          options = _objectWithoutPropertiesLoose(inputOptions, _excluded$b); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


	    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
	    const skipSx = inputSkipSx || false;
	    let label;

	    let shouldForwardPropOption = shouldForwardProp;

	    if (componentSlot === 'Root') {
	      shouldForwardPropOption = rootShouldForwardProp;
	    } else if (componentSlot) {
	      // any other slot specified
	      shouldForwardPropOption = slotShouldForwardProp;
	    }

	    const defaultStyledResolver = styled$2(tag, _extends$1({
	      shouldForwardProp: shouldForwardPropOption,
	      label
	    }, options));

	    const muiStyledResolver = (styleArg, ...expressions) => {
	      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
	        // On the server emotion doesn't use React.forwardRef for creating components, so the created
	        // component stays as a function. This condition makes sure that we do not interpolate functions
	        // which are basically components used as a selectors.
	        // eslint-disable-next-line no-underscore-dangle
	        return typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg ? _ref => {
	          let {
	            theme: themeInput
	          } = _ref,
	              other = _objectWithoutPropertiesLoose(_ref, _excluded2);

	          return stylesArg(_extends$1({
	            theme: isEmpty(themeInput) ? defaultTheme : themeInput
	          }, other));
	        } : stylesArg;
	      }) : [];
	      let transformedStyleArg = styleArg;

	      if (componentName && overridesResolver) {
	        expressionsWithDefaultTheme.push(props => {
	          const theme = isEmpty(props.theme) ? defaultTheme : props.theme;
	          const styleOverrides = getStyleOverrides(componentName, theme);

	          if (styleOverrides) {
	            const resolvedStyleOverrides = {};
	            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
	              resolvedStyleOverrides[slotKey] = typeof slotStyle === 'function' ? slotStyle(props) : slotStyle;
	            });
	            return overridesResolver(props, resolvedStyleOverrides);
	          }

	          return null;
	        });
	      }

	      if (componentName && !skipVariantsResolver) {
	        expressionsWithDefaultTheme.push(props => {
	          const theme = isEmpty(props.theme) ? defaultTheme : props.theme;
	          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
	        });
	      }

	      if (!skipSx) {
	        expressionsWithDefaultTheme.push(props => {
	          const theme = isEmpty(props.theme) ? defaultTheme : props.theme;
	          return styleFunctionSx(_extends$1({}, props, {
	            theme
	          }));
	        });
	      }

	      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

	      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
	        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

	        transformedStyleArg = [...styleArg, ...placeholders];
	        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
	      } else if (typeof styleArg === 'function' && // On the server emotion doesn't use React.forwardRef for creating components, so the created
	      // component stays as a function. This condition makes sure that we do not interpolate functions
	      // which are basically components used as a selectors.
	      // eslint-disable-next-line no-underscore-dangle
	      styleArg.__emotion_real !== styleArg) {
	        // If the type is function, we need to define the default theme.
	        transformedStyleArg = _ref2 => {
	          let {
	            theme: themeInput
	          } = _ref2,
	              other = _objectWithoutPropertiesLoose(_ref2, _excluded3);

	          return styleArg(_extends$1({
	            theme: isEmpty(themeInput) ? defaultTheme : themeInput
	          }, other));
	        };
	      }

	      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

	      return Component;
	    };

	    if (defaultStyledResolver.withConfig) {
	      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
	    }

	    return muiStyledResolver;
	  };
	}

	function getThemeProps$1(params) {
	  const {
	    theme,
	    name,
	    props
	  } = params;

	  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
	    return props;
	  }

	  return resolveProps(theme.components[name].defaultProps, props);
	}

	function useThemeProps$1({
	  props,
	  name,
	  defaultTheme
	}) {
	  const theme = useTheme$2(defaultTheme);
	  const mergedProps = getThemeProps$1({
	    theme,
	    name,
	    props
	  });
	  return mergedProps;
	}

	/**
	 * Returns a number whose value is limited to the given range.
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */

	function clamp$1(value, min = 0, max = 1) {

	  return Math.min(Math.max(min, value), max);
	}
	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 * @returns {string} A CSS rgb color string
	 */


	function hexToRgb$1(color) {
	  color = color.slice(1);
	  const re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
	  let colors = color.match(re);

	  if (colors && colors[0].length === 1) {
	    colors = colors.map(n => n + n);
	  }

	  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map((n, index) => {
	    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
	  }).join(', '), ")") : '';
	}
	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {object} - A MUI color object: {type: string, values: number[]}
	 */


	function decomposeColor$1(color) {
	  // Idempotent
	  if (color.type) {
	    return color;
	  }

	  if (color.charAt(0) === '#') {
	    return decomposeColor$1(hexToRgb$1(color));
	  }

	  const marker = color.indexOf('(');
	  const type = color.substring(0, marker);

	  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
	    throw new Error(formatMuiErrorMessage$1(9, color));
	  }

	  let values = color.substring(marker + 1, color.length - 1);
	  let colorSpace;

	  if (type === 'color') {
	    values = values.split(' ');
	    colorSpace = values.shift();

	    if (values.length === 4 && values[3].charAt(0) === '/') {
	      values[3] = values[3].slice(1);
	    }

	    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
	      throw new Error(formatMuiErrorMessage$1(10, colorSpace));
	    }
	  } else {
	    values = values.split(',');
	  }

	  values = values.map(value => parseFloat(value));
	  return {
	    type,
	    values,
	    colorSpace
	  };
	}
	/**
	 * Converts a color object with type and values to a string.
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */

	function recomposeColor$1(color) {
	  const {
	    type,
	    colorSpace
	  } = color;
	  let {
	    values
	  } = color;

	  if (type.indexOf('rgb') !== -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
	  } else if (type.indexOf('hsl') !== -1) {
	    values[1] = "".concat(values[1], "%");
	    values[2] = "".concat(values[2], "%");
	  }

	  if (type.indexOf('color') !== -1) {
	    values = "".concat(colorSpace, " ").concat(values.join(' '));
	  } else {
	    values = "".concat(values.join(', '));
	  }

	  return "".concat(type, "(").concat(values, ")");
	}
	/**
	 * Converts a color from hsl format to rgb format.
	 * @param {string} color - HSL color values
	 * @returns {string} rgb color values
	 */

	function hslToRgb$1(color) {
	  color = decomposeColor$1(color);
	  const {
	    values
	  } = color;
	  const h = values[0];
	  const s = values[1] / 100;
	  const l = values[2] / 100;
	  const a = s * Math.min(l, 1 - l);

	  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

	  let type = 'rgb';
	  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

	  if (color.type === 'hsla') {
	    type += 'a';
	    rgb.push(values[3]);
	  }

	  return recomposeColor$1({
	    type,
	    values: rgb
	  });
	}
	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */

	function getLuminance$1(color) {
	  color = decomposeColor$1(color);
	  let rgb = color.type === 'hsl' ? decomposeColor$1(hslToRgb$1(color)).values : color.values;
	  rgb = rgb.map(val => {
	    if (color.type !== 'color') {
	      val /= 255; // normalized
	    }

	    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
	  }); // Truncate at 3 digits

	  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
	}
	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21.
	 */

	function getContrastRatio$1(foreground, background) {
	  const lumA = getLuminance$1(foreground);
	  const lumB = getLuminance$1(background);
	  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
	}
	/**
	 * Sets the absolute transparency of a color.
	 * Any existing alpha values are overwritten.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @param {number} value - value to set the alpha channel to in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function alpha(color, value) {
	  color = decomposeColor$1(color);
	  value = clamp$1(value);

	  if (color.type === 'rgb' || color.type === 'hsl') {
	    color.type += 'a';
	  }

	  if (color.type === 'color') {
	    color.values[3] = "/".concat(value);
	  } else {
	    color.values[3] = value;
	  }

	  return recomposeColor$1(color);
	}
	/**
	 * Darkens a color.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function darken$1(color, coefficient) {
	  color = decomposeColor$1(color);
	  coefficient = clamp$1(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
	    for (let i = 0; i < 3; i += 1) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }

	  return recomposeColor$1(color);
	}
	/**
	 * Lightens a color.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function lighten$1(color, coefficient) {
	  color = decomposeColor$1(color);
	  coefficient = clamp$1(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') !== -1) {
	    for (let i = 0; i < 3; i += 1) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  } else if (color.type.indexOf('color') !== -1) {
	    for (let i = 0; i < 3; i += 1) {
	      color.values[i] += (1 - color.values[i]) * coefficient;
	    }
	  }

	  return recomposeColor$1(color);
	}

	function createMixins$1(breakpoints, spacing, mixins) {
	  return _extends$1({
	    toolbar: {
	      minHeight: 56,
	      ["".concat(breakpoints.up('xs'), " and (orientation: landscape)")]: {
	        minHeight: 48
	      },
	      [breakpoints.up('sm')]: {
	        minHeight: 64
	      }
	    }
	  }, mixins);
	}

	const common$2 = {
	  black: '#000',
	  white: '#fff'
	};
	var common$3 = common$2;

	const grey$2 = {
	  50: '#fafafa',
	  100: '#f5f5f5',
	  200: '#eeeeee',
	  300: '#e0e0e0',
	  400: '#bdbdbd',
	  500: '#9e9e9e',
	  600: '#757575',
	  700: '#616161',
	  800: '#424242',
	  900: '#212121',
	  A100: '#f5f5f5',
	  A200: '#eeeeee',
	  A400: '#bdbdbd',
	  A700: '#616161'
	};
	var grey$3 = grey$2;

	const purple = {
	  50: '#f3e5f5',
	  100: '#e1bee7',
	  200: '#ce93d8',
	  300: '#ba68c8',
	  400: '#ab47bc',
	  500: '#9c27b0',
	  600: '#8e24aa',
	  700: '#7b1fa2',
	  800: '#6a1b9a',
	  900: '#4a148c',
	  A100: '#ea80fc',
	  A200: '#e040fb',
	  A400: '#d500f9',
	  A700: '#aa00ff'
	};
	var purple$1 = purple;

	const red$2 = {
	  50: '#ffebee',
	  100: '#ffcdd2',
	  200: '#ef9a9a',
	  300: '#e57373',
	  400: '#ef5350',
	  500: '#f44336',
	  600: '#e53935',
	  700: '#d32f2f',
	  800: '#c62828',
	  900: '#b71c1c',
	  A100: '#ff8a80',
	  A200: '#ff5252',
	  A400: '#ff1744',
	  A700: '#d50000'
	};
	var red$3 = red$2;

	const orange$2 = {
	  50: '#fff3e0',
	  100: '#ffe0b2',
	  200: '#ffcc80',
	  300: '#ffb74d',
	  400: '#ffa726',
	  500: '#ff9800',
	  600: '#fb8c00',
	  700: '#f57c00',
	  800: '#ef6c00',
	  900: '#e65100',
	  A100: '#ffd180',
	  A200: '#ffab40',
	  A400: '#ff9100',
	  A700: '#ff6d00'
	};
	var orange$3 = orange$2;

	const blue$2 = {
	  50: '#e3f2fd',
	  100: '#bbdefb',
	  200: '#90caf9',
	  300: '#64b5f6',
	  400: '#42a5f5',
	  500: '#2196f3',
	  600: '#1e88e5',
	  700: '#1976d2',
	  800: '#1565c0',
	  900: '#0d47a1',
	  A100: '#82b1ff',
	  A200: '#448aff',
	  A400: '#2979ff',
	  A700: '#2962ff'
	};
	var blue$3 = blue$2;

	const lightBlue = {
	  50: '#e1f5fe',
	  100: '#b3e5fc',
	  200: '#81d4fa',
	  300: '#4fc3f7',
	  400: '#29b6f6',
	  500: '#03a9f4',
	  600: '#039be5',
	  700: '#0288d1',
	  800: '#0277bd',
	  900: '#01579b',
	  A100: '#80d8ff',
	  A200: '#40c4ff',
	  A400: '#00b0ff',
	  A700: '#0091ea'
	};
	var lightBlue$1 = lightBlue;

	const green$2 = {
	  50: '#e8f5e9',
	  100: '#c8e6c9',
	  200: '#a5d6a7',
	  300: '#81c784',
	  400: '#66bb6a',
	  500: '#4caf50',
	  600: '#43a047',
	  700: '#388e3c',
	  800: '#2e7d32',
	  900: '#1b5e20',
	  A100: '#b9f6ca',
	  A200: '#69f0ae',
	  A400: '#00e676',
	  A700: '#00c853'
	};
	var green$3 = green$2;

	const _excluded$a = ["mode", "contrastThreshold", "tonalOffset"];
	const light$1 = {
	  // The colors used to style the text.
	  text: {
	    // The most important text.
	    primary: 'rgba(0, 0, 0, 0.87)',
	    // Secondary text.
	    secondary: 'rgba(0, 0, 0, 0.6)',
	    // Disabled text have even lower visual prominence.
	    disabled: 'rgba(0, 0, 0, 0.38)'
	  },
	  // The color used to divide different elements.
	  divider: 'rgba(0, 0, 0, 0.12)',
	  // The background colors used to style the surfaces.
	  // Consistency between these values is important.
	  background: {
	    paper: common$3.white,
	    default: common$3.white
	  },
	  // The colors used to style the action elements.
	  action: {
	    // The color of an active action like an icon button.
	    active: 'rgba(0, 0, 0, 0.54)',
	    // The color of an hovered action.
	    hover: 'rgba(0, 0, 0, 0.04)',
	    hoverOpacity: 0.04,
	    // The color of a selected action.
	    selected: 'rgba(0, 0, 0, 0.08)',
	    selectedOpacity: 0.08,
	    // The color of a disabled action.
	    disabled: 'rgba(0, 0, 0, 0.26)',
	    // The background color of a disabled action.
	    disabledBackground: 'rgba(0, 0, 0, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(0, 0, 0, 0.12)',
	    focusOpacity: 0.12,
	    activatedOpacity: 0.12
	  }
	};
	const dark$1 = {
	  text: {
	    primary: common$3.white,
	    secondary: 'rgba(255, 255, 255, 0.7)',
	    disabled: 'rgba(255, 255, 255, 0.5)',
	    icon: 'rgba(255, 255, 255, 0.5)'
	  },
	  divider: 'rgba(255, 255, 255, 0.12)',
	  background: {
	    paper: '#121212',
	    default: '#121212'
	  },
	  action: {
	    active: common$3.white,
	    hover: 'rgba(255, 255, 255, 0.08)',
	    hoverOpacity: 0.08,
	    selected: 'rgba(255, 255, 255, 0.16)',
	    selectedOpacity: 0.16,
	    disabled: 'rgba(255, 255, 255, 0.3)',
	    disabledBackground: 'rgba(255, 255, 255, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(255, 255, 255, 0.12)',
	    focusOpacity: 0.12,
	    activatedOpacity: 0.24
	  }
	};

	function addLightOrDark$1(intent, direction, shade, tonalOffset) {
	  const tonalOffsetLight = tonalOffset.light || tonalOffset;
	  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

	  if (!intent[direction]) {
	    if (intent.hasOwnProperty(shade)) {
	      intent[direction] = intent[shade];
	    } else if (direction === 'light') {
	      intent.light = lighten$1(intent.main, tonalOffsetLight);
	    } else if (direction === 'dark') {
	      intent.dark = darken$1(intent.main, tonalOffsetDark);
	    }
	  }
	}

	function getDefaultPrimary(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: blue$3[200],
	      light: blue$3[50],
	      dark: blue$3[400]
	    };
	  }

	  return {
	    main: blue$3[700],
	    light: blue$3[400],
	    dark: blue$3[800]
	  };
	}

	function getDefaultSecondary(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: purple$1[200],
	      light: purple$1[50],
	      dark: purple$1[400]
	    };
	  }

	  return {
	    main: purple$1[500],
	    light: purple$1[300],
	    dark: purple$1[700]
	  };
	}

	function getDefaultError(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: red$3[500],
	      light: red$3[300],
	      dark: red$3[700]
	    };
	  }

	  return {
	    main: red$3[700],
	    light: red$3[400],
	    dark: red$3[800]
	  };
	}

	function getDefaultInfo(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: lightBlue$1[400],
	      light: lightBlue$1[300],
	      dark: lightBlue$1[700]
	    };
	  }

	  return {
	    main: lightBlue$1[700],
	    light: lightBlue$1[500],
	    dark: lightBlue$1[900]
	  };
	}

	function getDefaultSuccess(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: green$3[400],
	      light: green$3[300],
	      dark: green$3[700]
	    };
	  }

	  return {
	    main: green$3[800],
	    light: green$3[500],
	    dark: green$3[900]
	  };
	}

	function getDefaultWarning(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: orange$3[400],
	      light: orange$3[300],
	      dark: orange$3[700]
	    };
	  }

	  return {
	    main: '#ed6c02',
	    // closest to orange[800] that pass 3:1.
	    light: orange$3[500],
	    dark: orange$3[900]
	  };
	}

	function createPalette$1(palette) {
	  const {
	    mode = 'light',
	    contrastThreshold = 3,
	    tonalOffset = 0.2
	  } = palette,
	        other = _objectWithoutPropertiesLoose(palette, _excluded$a);

	  const primary = palette.primary || getDefaultPrimary(mode);
	  const secondary = palette.secondary || getDefaultSecondary(mode);
	  const error = palette.error || getDefaultError(mode);
	  const info = palette.info || getDefaultInfo(mode);
	  const success = palette.success || getDefaultSuccess(mode);
	  const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
	  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
	  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

	  function getContrastText(background) {
	    const contrastText = getContrastRatio$1(background, dark$1.text.primary) >= contrastThreshold ? dark$1.text.primary : light$1.text.primary;

	    return contrastText;
	  }

	  const augmentColor = ({
	    color,
	    name,
	    mainShade = 500,
	    lightShade = 300,
	    darkShade = 700
	  }) => {
	    color = _extends$1({}, color);

	    if (!color.main && color[mainShade]) {
	      color.main = color[mainShade];
	    }

	    if (!color.hasOwnProperty('main')) {
	      throw new Error(formatMuiErrorMessage$1(11, name ? " (".concat(name, ")") : '', mainShade));
	    }

	    if (typeof color.main !== 'string') {
	      throw new Error(formatMuiErrorMessage$1(12, name ? " (".concat(name, ")") : '', JSON.stringify(color.main)));
	    }

	    addLightOrDark$1(color, 'light', lightShade, tonalOffset);
	    addLightOrDark$1(color, 'dark', darkShade, tonalOffset);

	    if (!color.contrastText) {
	      color.contrastText = getContrastText(color.main);
	    }

	    return color;
	  };

	  const modes = {
	    dark: dark$1,
	    light: light$1
	  };

	  const paletteOutput = deepmerge$1(_extends$1({
	    // A collection of common colors.
	    common: common$3,
	    // The palette mode, can be light or dark.
	    mode,
	    // The colors used to represent primary interface elements for a user.
	    primary: augmentColor({
	      color: primary,
	      name: 'primary'
	    }),
	    // The colors used to represent secondary interface elements for a user.
	    secondary: augmentColor({
	      color: secondary,
	      name: 'secondary',
	      mainShade: 'A400',
	      lightShade: 'A200',
	      darkShade: 'A700'
	    }),
	    // The colors used to represent interface elements that the user should be made aware of.
	    error: augmentColor({
	      color: error,
	      name: 'error'
	    }),
	    // The colors used to represent potentially dangerous actions or important messages.
	    warning: augmentColor({
	      color: warning,
	      name: 'warning'
	    }),
	    // The colors used to present information to the user that is neutral and not necessarily important.
	    info: augmentColor({
	      color: info,
	      name: 'info'
	    }),
	    // The colors used to indicate the successful completion of an action that user triggered.
	    success: augmentColor({
	      color: success,
	      name: 'success'
	    }),
	    // The grey colors.
	    grey: grey$3,
	    // Used by `getContrastText()` to maximize the contrast between
	    // the background and the text.
	    contrastThreshold,
	    // Takes a background color and returns the text color that maximizes the contrast.
	    getContrastText,
	    // Generate a rich color object.
	    augmentColor,
	    // Used by the functions below to shift a color's luminance by approximately
	    // two indexes within its tonal palette.
	    // E.g., shift from Red 500 to Red 300 or Red 700.
	    tonalOffset
	  }, modes[mode]), other);
	  return paletteOutput;
	}

	const _excluded$9 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

	function round$1(value) {
	  return Math.round(value * 1e5) / 1e5;
	}

	const caseAllCaps$1 = {
	  textTransform: 'uppercase'
	};
	const defaultFontFamily$1 = '"Roboto", "Helvetica", "Arial", sans-serif';
	/**
	 * @see @link{https://material.io/design/typography/the-type-system.html}
	 * @see @link{https://material.io/design/typography/understanding-typography.html}
	 */

	function createTypography$1(palette, typography) {
	  const _ref = typeof typography === 'function' ? typography(palette) : typography,
	        {
	    fontFamily = defaultFontFamily$1,
	    // The default font size of the Material Specification.
	    fontSize = 14,
	    // px
	    fontWeightLight = 300,
	    fontWeightRegular = 400,
	    fontWeightMedium = 500,
	    fontWeightBold = 700,
	    // Tell MUI what's the font-size on the html element.
	    // 16px is the default font-size used by browsers.
	    htmlFontSize = 16,
	    // Apply the CSS properties to all the variants.
	    allVariants,
	    pxToRem: pxToRem2
	  } = _ref,
	        other = _objectWithoutPropertiesLoose(_ref, _excluded$9);

	  const coef = fontSize / 14;

	  const pxToRem = pxToRem2 || (size => "".concat(size / htmlFontSize * coef, "rem"));

	  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends$1({
	    fontFamily,
	    fontWeight,
	    fontSize: pxToRem(size),
	    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
	    lineHeight
	  }, fontFamily === defaultFontFamily$1 ? {
	    letterSpacing: "".concat(round$1(letterSpacing / size), "em")
	  } : {}, casing, allVariants);

	  const variants = {
	    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
	    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
	    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
	    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
	    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
	    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
	    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
	    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
	    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
	    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
	    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps$1),
	    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
	    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps$1)
	  };
	  return deepmerge$1(_extends$1({
	    htmlFontSize,
	    pxToRem,
	    fontFamily,
	    fontSize,
	    fontWeightLight,
	    fontWeightRegular,
	    fontWeightMedium,
	    fontWeightBold
	  }, variants), other, {
	    clone: false // No need to clone deep

	  });
	}

	const shadowKeyUmbraOpacity$1 = 0.2;
	const shadowKeyPenumbraOpacity$1 = 0.14;
	const shadowAmbientShadowOpacity$1 = 0.12;

	function createShadow$1(...px) {
	  return ["".concat(px[0], "px ").concat(px[1], "px ").concat(px[2], "px ").concat(px[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity$1, ")"), "".concat(px[4], "px ").concat(px[5], "px ").concat(px[6], "px ").concat(px[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity$1, ")"), "".concat(px[8], "px ").concat(px[9], "px ").concat(px[10], "px ").concat(px[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity$1, ")")].join(',');
	} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


	const shadows$2 = ['none', createShadow$1(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow$1(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow$1(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow$1(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow$1(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow$1(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow$1(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow$1(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow$1(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow$1(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow$1(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow$1(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow$1(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow$1(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow$1(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow$1(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow$1(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow$1(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow$1(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow$1(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow$1(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow$1(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow$1(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow$1(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
	var shadows$3 = shadows$2;

	const _excluded$8 = ["duration", "easing", "delay"]; // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
	// to learn the context in which each easing should be used.

	const easing$1 = {
	  // This is the most common easing curve.
	  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
	  // Objects enter the screen at full velocity from off-screen and
	  // slowly decelerate to a resting point.
	  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
	  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
	  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
	  // The sharp curve is used by objects that may return to the screen at any time.
	  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
	}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
	// to learn when use what timing

	const duration$1 = {
	  shortest: 150,
	  shorter: 200,
	  short: 250,
	  // most basic recommended timing
	  standard: 300,
	  // this is to be used in complex animations
	  complex: 375,
	  // recommended when something is entering screen
	  enteringScreen: 225,
	  // recommended when something is leaving screen
	  leavingScreen: 195
	};

	function formatMs$1(milliseconds) {
	  return "".concat(Math.round(milliseconds), "ms");
	}

	function getAutoHeightDuration(height) {
	  if (!height) {
	    return 0;
	  }

	  const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

	  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
	}

	function createTransitions(inputTransitions) {
	  const mergedEasing = _extends$1({}, easing$1, inputTransitions.easing);

	  const mergedDuration = _extends$1({}, duration$1, inputTransitions.duration);

	  const create = (props = ['all'], options = {}) => {
	    const {
	      duration: durationOption = mergedDuration.standard,
	      easing: easingOption = mergedEasing.easeInOut,
	      delay = 0
	    } = options;
	          _objectWithoutPropertiesLoose(options, _excluded$8);

	    return (Array.isArray(props) ? props : [props]).map(animatedProp => "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs$1(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs$1(delay))).join(',');
	  };

	  return _extends$1({
	    getAutoHeightDuration,
	    create
	  }, inputTransitions, {
	    easing: mergedEasing,
	    duration: mergedDuration
	  });
	}

	// We need to centralize the zIndex definitions as they work
	// like global values in the browser.
	const zIndex$2 = {
	  mobileStepper: 1000,
	  fab: 1050,
	  speedDial: 1050,
	  appBar: 1100,
	  drawer: 1200,
	  modal: 1300,
	  snackbar: 1400,
	  tooltip: 1500
	};
	var zIndex$3 = zIndex$2;

	const _excluded$7 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

	function createTheme$1(options = {}, ...args) {
	  const {
	    mixins: mixinsInput = {},
	    palette: paletteInput = {},
	    transitions: transitionsInput = {},
	    typography: typographyInput = {}
	  } = options,
	        other = _objectWithoutPropertiesLoose(options, _excluded$7);

	  const palette = createPalette$1(paletteInput);
	  const systemTheme = createTheme$2(options);
	  let muiTheme = deepmerge$1(systemTheme, {
	    mixins: createMixins$1(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
	    palette,
	    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
	    shadows: shadows$3.slice(),
	    typography: createTypography$1(palette, typographyInput),
	    transitions: createTransitions(transitionsInput),
	    zIndex: _extends$1({}, zIndex$3)
	  });
	  muiTheme = deepmerge$1(muiTheme, other);
	  muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);

	  return muiTheme;
	}

	const defaultTheme$3 = createTheme$1();
	var defaultTheme$4 = defaultTheme$3;

	const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
	const slotShouldForwardProp = shouldForwardProp;
	const styled = createStyled({
	  defaultTheme: defaultTheme$4,
	  rootShouldForwardProp
	});
	var styled$1 = styled;

	function useThemeProps({
	  props,
	  name
	}) {
	  return useThemeProps$1({
	    props,
	    name,
	    defaultTheme: defaultTheme$4
	  });
	}

	var taggedTemplateLiteral = createCommonjsModule(function (module) {
	  function _taggedTemplateLiteral(strings, raw) {
	    if (!raw) {
	      raw = strings.slice(0);
	    }

	    return Object.freeze(Object.defineProperties(strings, {
	      raw: {
	        value: Object.freeze(raw)
	      }
	    }));
	  }

	  module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	var _taggedTemplateLiteral = /*@__PURE__*/getDefaultExportFromCjs(taggedTemplateLiteral);

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  _setPrototypeOf(subClass, superClass);
	}

	var TransitionGroupContext = /*#__PURE__*/react.createContext(null);

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */

	function getChildMapping(children, mapFn) {
	  var mapper = function mapper(child) {
	    return mapFn && /*#__PURE__*/react.isValidElement(child) ? mapFn(child) : child;
	  };

	  var result = Object.create(null);
	  if (children) react.Children.map(children, function (c) {
	    return c;
	  }).forEach(function (child) {
	    // run the map function here instead so that the key is the computed one
	    result[child.key] = mapper(child);
	  });
	  return result;
	}
	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */

	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};

	  function getValueForKey(key) {
	    return key in next ? next[key] : prev[key];
	  } // For each key of `next`, the list of keys to insert before that key in
	  // the combined list


	  var nextKeysPending = Object.create(null);
	  var pendingKeys = [];

	  for (var prevKey in prev) {
	    if (prevKey in next) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }

	  var i;
	  var childMapping = {};

	  for (var nextKey in next) {
	    if (nextKeysPending[nextKey]) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }

	    childMapping[nextKey] = getValueForKey(nextKey);
	  } // Finally, add the keys which didn't appear before any key in `next`


	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }

	  return childMapping;
	}

	function getProp(child, prop, props) {
	  return props[prop] != null ? props[prop] : child.props[prop];
	}

	function getInitialChildMapping(props, onExited) {
	  return getChildMapping(props.children, function (child) {
	    return /*#__PURE__*/react.cloneElement(child, {
	      onExited: onExited.bind(null, child),
	      in: true,
	      appear: getProp(child, 'appear', props),
	      enter: getProp(child, 'enter', props),
	      exit: getProp(child, 'exit', props)
	    });
	  });
	}
	function getNextChildMapping(nextProps, prevChildMapping, onExited) {
	  var nextChildMapping = getChildMapping(nextProps.children);
	  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
	  Object.keys(children).forEach(function (key) {
	    var child = children[key];
	    if (! /*#__PURE__*/react.isValidElement(child)) return;
	    var hasPrev = (key in prevChildMapping);
	    var hasNext = (key in nextChildMapping);
	    var prevChild = prevChildMapping[key];
	    var isLeaving = /*#__PURE__*/react.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

	    if (hasNext && (!hasPrev || isLeaving)) {
	      // console.log('entering', key)
	      children[key] = /*#__PURE__*/react.cloneElement(child, {
	        onExited: onExited.bind(null, child),
	        in: true,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    } else if (!hasNext && hasPrev && !isLeaving) {
	      // item is old (exiting)
	      // console.log('leaving', key)
	      children[key] = /*#__PURE__*/react.cloneElement(child, {
	        in: false
	      });
	    } else if (hasNext && hasPrev && /*#__PURE__*/react.isValidElement(prevChild)) {
	      // item hasn't changed transition states
	      // copy over the last transition props;
	      // console.log('unchanged', key)
	      children[key] = /*#__PURE__*/react.cloneElement(child, {
	        onExited: onExited.bind(null, child),
	        in: prevChild.props.in,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    }
	  });
	  return children;
	}

	var values = Object.values || function (obj) {
	  return Object.keys(obj).map(function (k) {
	    return obj[k];
	  });
	};

	var defaultProps = {
	  component: 'div',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	};
	/**
	 * The `<TransitionGroup>` component manages a set of transition components
	 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
	 * components, `<TransitionGroup>` is a state machine for managing the mounting
	 * and unmounting of components over time.
	 *
	 * Consider the example below. As items are removed or added to the TodoList the
	 * `in` prop is toggled automatically by the `<TransitionGroup>`.
	 *
	 * Note that `<TransitionGroup>`  does not define any animation behavior!
	 * Exactly _how_ a list item animates is up to the individual transition
	 * component. This means you can mix and match animations across different list
	 * items.
	 */

	var TransitionGroup = /*#__PURE__*/function (_React$Component) {
	  _inheritsLoose(TransitionGroup, _React$Component);

	  function TransitionGroup(props, context) {
	    var _this;

	    _this = _React$Component.call(this, props, context) || this;

	    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


	    _this.state = {
	      contextValue: {
	        isMounting: true
	      },
	      handleExited: handleExited,
	      firstRender: true
	    };
	    return _this;
	  }

	  var _proto = TransitionGroup.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	    this.setState({
	      contextValue: {
	        isMounting: false
	      }
	    });
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };

	  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
	    var prevChildMapping = _ref.children,
	        handleExited = _ref.handleExited,
	        firstRender = _ref.firstRender;
	    return {
	      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
	      firstRender: false
	    };
	  } // node is `undefined` when user provided `nodeRef` prop
	  ;

	  _proto.handleExited = function handleExited(child, node) {
	    var currentChildMapping = getChildMapping(this.props.children);
	    if (child.key in currentChildMapping) return;

	    if (child.props.onExited) {
	      child.props.onExited(node);
	    }

	    if (this.mounted) {
	      this.setState(function (state) {
	        var children = _extends$1({}, state.children);

	        delete children[child.key];
	        return {
	          children: children
	        };
	      });
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        Component = _this$props.component,
	        childFactory = _this$props.childFactory,
	        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

	    var contextValue = this.state.contextValue;
	    var children = values(this.state.children).map(childFactory);
	    delete props.appear;
	    delete props.enter;
	    delete props.exit;

	    if (Component === null) {
	      return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
	        value: contextValue
	      }, children);
	    }

	    return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
	      value: contextValue
	    }, /*#__PURE__*/react.createElement(Component, props, children));
	  };

	  return TransitionGroup;
	}(react.Component);

	TransitionGroup.propTypes = {};
	TransitionGroup.defaultProps = defaultProps;
	var TransitionGroup$1 = TransitionGroup;

	function Ripple(props) {
	  const {
	    className,
	    classes,
	    pulsate = false,
	    rippleX,
	    rippleY,
	    rippleSize,
	    in: inProp,
	    onExited,
	    timeout
	  } = props;
	  const [leaving, setLeaving] = react.useState(false);
	  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
	  const rippleStyles = {
	    width: rippleSize,
	    height: rippleSize,
	    top: -(rippleSize / 2) + rippleY,
	    left: -(rippleSize / 2) + rippleX
	  };
	  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);

	  if (!inProp && !leaving) {
	    setLeaving(true);
	  }

	  react.useEffect(() => {
	    if (!inProp && onExited != null) {
	      // react-transition-group#onExited
	      const timeoutId = setTimeout(onExited, timeout);
	      return () => {
	        clearTimeout(timeoutId);
	      };
	    }

	    return undefined;
	  }, [onExited, inProp, timeout]);
	  return /*#__PURE__*/jsxRuntime.jsx("span", {
	    className: rippleClassName,
	    style: rippleStyles,
	    children: /*#__PURE__*/jsxRuntime.jsx("span", {
	      className: childClassName
	    })
	  });
	}

	const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
	var touchRippleClasses$1 = touchRippleClasses;

	var _templateObject, _templateObject2, _templateObject3, _templateObject4;
	const _excluded$6 = ["center", "classes", "className"];

	let _ = t => t,
	    _t,
	    _t2,
	    _t3,
	    _t4;
	const DURATION = 550;
	const DELAY_RIPPLE = 80;
	const enterKeyframe = keyframes(_t || (_t = _(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))));
	const exitKeyframe = keyframes(_t2 || (_t2 = _(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))));
	const pulsateKeyframe = keyframes(_t3 || (_t3 = _(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))));
	const TouchRippleRoot = styled$1('span', {
	  name: 'MuiTouchRipple',
	  slot: 'Root'
	})({
	  overflow: 'hidden',
	  pointerEvents: 'none',
	  position: 'absolute',
	  zIndex: 0,
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0,
	  borderRadius: 'inherit'
	}); // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
	// in string templates. Do not convert these styles in JS object as it will break.

	const TouchRippleRipple = styled$1(Ripple, {
	  name: 'MuiTouchRipple',
	  slot: 'Ripple'
	})(_t4 || (_t4 = _(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: absolute;\n\n  &.", " {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  &.", " {\n    animation-duration: ", "ms;\n  }\n\n  & .", " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .", " {\n    opacity: 0;\n    animation-name: ", ";\n    animation-duration: ", "ms;\n    animation-timing-function: ", ";\n  }\n\n  & .", " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ", ";\n    animation-duration: 2500ms;\n    animation-timing-function: ", ";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"])))), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
	  theme
	}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
	  theme
	}) => theme.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
	  theme
	}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
	  theme
	}) => theme.transitions.easing.easeInOut);
	/**
	 * @ignore - internal component.
	 *
	 * TODO v5: Make private
	 */

	const TouchRipple = /*#__PURE__*/react.forwardRef(function TouchRipple(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiTouchRipple'
	  });

	  const {
	    center: centerProp = false,
	    classes = {},
	    className
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$6);

	  const [ripples, setRipples] = react.useState([]);
	  const nextKey = react.useRef(0);
	  const rippleCallback = react.useRef(null);
	  react.useEffect(() => {
	    if (rippleCallback.current) {
	      rippleCallback.current();
	      rippleCallback.current = null;
	    }
	  }, [ripples]); // Used to filter out mouse emulated events on mobile.

	  const ignoringMouseDown = react.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
	  // We don't want to display the ripple for touch scroll events.

	  const startTimer = react.useRef(null); // This is the hook called once the previous timeout is ready.

	  const startTimerCommit = react.useRef(null);
	  const container = react.useRef(null);
	  react.useEffect(() => {
	    return () => {
	      clearTimeout(startTimer.current);
	    };
	  }, []);
	  const startCommit = react.useCallback(params => {
	    const {
	      pulsate,
	      rippleX,
	      rippleY,
	      rippleSize,
	      cb
	    } = params;
	    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntime.jsx(TouchRippleRipple, {
	      classes: {
	        ripple: clsx(classes.ripple, touchRippleClasses$1.ripple),
	        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses$1.rippleVisible),
	        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses$1.ripplePulsate),
	        child: clsx(classes.child, touchRippleClasses$1.child),
	        childLeaving: clsx(classes.childLeaving, touchRippleClasses$1.childLeaving),
	        childPulsate: clsx(classes.childPulsate, touchRippleClasses$1.childPulsate)
	      },
	      timeout: DURATION,
	      pulsate: pulsate,
	      rippleX: rippleX,
	      rippleY: rippleY,
	      rippleSize: rippleSize
	    }, nextKey.current)]);
	    nextKey.current += 1;
	    rippleCallback.current = cb;
	  }, [classes]);
	  const start = react.useCallback((event = {}, options = {}, cb) => {
	    const {
	      pulsate = false,
	      center = centerProp || options.pulsate,
	      fakeElement = false // For test purposes

	    } = options;

	    if (event.type === 'mousedown' && ignoringMouseDown.current) {
	      ignoringMouseDown.current = false;
	      return;
	    }

	    if (event.type === 'touchstart') {
	      ignoringMouseDown.current = true;
	    }

	    const element = fakeElement ? null : container.current;
	    const rect = element ? element.getBoundingClientRect() : {
	      width: 0,
	      height: 0,
	      left: 0,
	      top: 0
	    }; // Get the size of the ripple

	    let rippleX;
	    let rippleY;
	    let rippleSize;

	    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
	      rippleX = Math.round(rect.width / 2);
	      rippleY = Math.round(rect.height / 2);
	    } else {
	      const {
	        clientX,
	        clientY
	      } = event.touches ? event.touches[0] : event;
	      rippleX = Math.round(clientX - rect.left);
	      rippleY = Math.round(clientY - rect.top);
	    }

	    if (center) {
	      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size is even.

	      if (rippleSize % 2 === 0) {
	        rippleSize += 1;
	      }
	    } else {
	      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
	      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
	      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
	    } // Touche devices


	    if (event.touches) {
	      // check that this isn't another touchstart due to multitouch
	      // otherwise we will only clear a single timer when unmounting while two
	      // are running
	      if (startTimerCommit.current === null) {
	        // Prepare the ripple effect.
	        startTimerCommit.current = () => {
	          startCommit({
	            pulsate,
	            rippleX,
	            rippleY,
	            rippleSize,
	            cb
	          });
	        }; // Delay the execution of the ripple effect.


	        startTimer.current = setTimeout(() => {
	          if (startTimerCommit.current) {
	            startTimerCommit.current();
	            startTimerCommit.current = null;
	          }
	        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
	      }
	    } else {
	      startCommit({
	        pulsate,
	        rippleX,
	        rippleY,
	        rippleSize,
	        cb
	      });
	    }
	  }, [centerProp, startCommit]);
	  const pulsate = react.useCallback(() => {
	    start({}, {
	      pulsate: true
	    });
	  }, [start]);
	  const stop = react.useCallback((event, cb) => {
	    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
	    // We still want to show ripple effect.

	    if (event.type === 'touchend' && startTimerCommit.current) {
	      startTimerCommit.current();
	      startTimerCommit.current = null;
	      startTimer.current = setTimeout(() => {
	        stop(event, cb);
	      });
	      return;
	    }

	    startTimerCommit.current = null;
	    setRipples(oldRipples => {
	      if (oldRipples.length > 0) {
	        return oldRipples.slice(1);
	      }

	      return oldRipples;
	    });
	    rippleCallback.current = cb;
	  }, []);
	  react.useImperativeHandle(ref, () => ({
	    pulsate,
	    start,
	    stop
	  }), [pulsate, start, stop]);
	  return /*#__PURE__*/jsxRuntime.jsx(TouchRippleRoot, _extends$1({
	    className: clsx(classes.root, touchRippleClasses$1.root, className),
	    ref: container
	  }, other, {
	    children: /*#__PURE__*/jsxRuntime.jsx(TransitionGroup$1, {
	      component: null,
	      exit: true,
	      children: ripples
	    })
	  }));
	});
	var TouchRipple$1 = TouchRipple;

	function getButtonBaseUtilityClass(slot) {
	  return generateUtilityClass('MuiButtonBase', slot);
	}
	const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
	var buttonBaseClasses$1 = buttonBaseClasses;

	const _excluded$5 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];

	const useUtilityClasses$3 = ownerState => {
	  const {
	    disabled,
	    focusVisible,
	    focusVisibleClassName,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
	  };
	  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);

	  if (focusVisible && focusVisibleClassName) {
	    composedClasses.root += " ".concat(focusVisibleClassName);
	  }

	  return composedClasses;
	};

	const ButtonBaseRoot = styled$1('button', {
	  name: 'MuiButtonBase',
	  slot: 'Root',
	  overridesResolver: (props, styles) => styles.root
	})({
	  display: 'inline-flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  position: 'relative',
	  boxSizing: 'border-box',
	  WebkitTapHighlightColor: 'transparent',
	  backgroundColor: 'transparent',
	  // Reset default value
	  // We disable the focus ring for mouse, touch and keyboard users.
	  outline: 0,
	  border: 0,
	  margin: 0,
	  // Remove the margin in Safari
	  borderRadius: 0,
	  padding: 0,
	  // Remove the padding in Firefox
	  cursor: 'pointer',
	  userSelect: 'none',
	  verticalAlign: 'middle',
	  MozAppearance: 'none',
	  // Reset
	  WebkitAppearance: 'none',
	  // Reset
	  textDecoration: 'none',
	  // So we take precedent over the style of a native <a /> element.
	  color: 'inherit',
	  '&::-moz-focus-inner': {
	    borderStyle: 'none' // Remove Firefox dotted outline.

	  },
	  ["&.".concat(buttonBaseClasses$1.disabled)]: {
	    pointerEvents: 'none',
	    // Disable link interactions
	    cursor: 'default'
	  },
	  '@media print': {
	    colorAdjust: 'exact'
	  }
	});
	/**
	 * `ButtonBase` contains as few styles as possible.
	 * It aims to be a simple building block for creating a button.
	 * It contains a load of style reset and some focus/ripple logic.
	 */

	const ButtonBase = /*#__PURE__*/react.forwardRef(function ButtonBase(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiButtonBase'
	  });

	  const {
	    action,
	    centerRipple = false,
	    children,
	    className,
	    component = 'button',
	    disabled = false,
	    disableRipple = false,
	    disableTouchRipple = false,
	    focusRipple = false,
	    LinkComponent = 'a',
	    onBlur,
	    onClick,
	    onContextMenu,
	    onDragLeave,
	    onFocus,
	    onFocusVisible,
	    onKeyDown,
	    onKeyUp,
	    onMouseDown,
	    onMouseLeave,
	    onMouseUp,
	    onTouchEnd,
	    onTouchMove,
	    onTouchStart,
	    tabIndex = 0,
	    TouchRippleProps,
	    touchRippleRef,
	    type
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$5);

	  const buttonRef = react.useRef(null);
	  const rippleRef = react.useRef(null);
	  const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
	  const {
	    isFocusVisibleRef,
	    onFocus: handleFocusVisible,
	    onBlur: handleBlurVisible,
	    ref: focusVisibleRef
	  } = useIsFocusVisible();
	  const [focusVisible, setFocusVisible] = react.useState(false);

	  if (disabled && focusVisible) {
	    setFocusVisible(false);
	  }

	  react.useImperativeHandle(action, () => ({
	    focusVisible: () => {
	      setFocusVisible(true);
	      buttonRef.current.focus();
	    }
	  }), []);
	  const [mountedState, setMountedState] = react.useState(false);
	  react.useEffect(() => {
	    setMountedState(true);
	  }, []);
	  const enableTouchRipple = mountedState && !disableRipple && !disabled;
	  react.useEffect(() => {
	    if (focusVisible && focusRipple && !disableRipple && mountedState) {
	      rippleRef.current.pulsate();
	    }
	  }, [disableRipple, focusRipple, focusVisible, mountedState]);

	  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
	    return useEventCallback(event => {
	      if (eventCallback) {
	        eventCallback(event);
	      }

	      const ignore = skipRippleAction;

	      if (!ignore && rippleRef.current) {
	        rippleRef.current[rippleAction](event);
	      }

	      return true;
	    });
	  }

	  const handleMouseDown = useRippleHandler('start', onMouseDown);
	  const handleContextMenu = useRippleHandler('stop', onContextMenu);
	  const handleDragLeave = useRippleHandler('stop', onDragLeave);
	  const handleMouseUp = useRippleHandler('stop', onMouseUp);
	  const handleMouseLeave = useRippleHandler('stop', event => {
	    if (focusVisible) {
	      event.preventDefault();
	    }

	    if (onMouseLeave) {
	      onMouseLeave(event);
	    }
	  });
	  const handleTouchStart = useRippleHandler('start', onTouchStart);
	  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
	  const handleTouchMove = useRippleHandler('stop', onTouchMove);
	  const handleBlur = useRippleHandler('stop', event => {
	    handleBlurVisible(event);

	    if (isFocusVisibleRef.current === false) {
	      setFocusVisible(false);
	    }

	    if (onBlur) {
	      onBlur(event);
	    }
	  }, false);
	  const handleFocus = useEventCallback(event => {
	    // Fix for https://github.com/facebook/react/issues/7769
	    if (!buttonRef.current) {
	      buttonRef.current = event.currentTarget;
	    }

	    handleFocusVisible(event);

	    if (isFocusVisibleRef.current === true) {
	      setFocusVisible(true);

	      if (onFocusVisible) {
	        onFocusVisible(event);
	      }
	    }

	    if (onFocus) {
	      onFocus(event);
	    }
	  });

	  const isNonNativeButton = () => {
	    const button = buttonRef.current;
	    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
	  };
	  /**
	   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
	   */


	  const keydownRef = react.useRef(false);
	  const handleKeyDown = useEventCallback(event => {
	    // Check if key is already down to avoid repeats being counted as multiple activations
	    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
	      keydownRef.current = true;
	      rippleRef.current.stop(event, () => {
	        rippleRef.current.start(event);
	      });
	    }

	    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
	      event.preventDefault();
	    }

	    if (onKeyDown) {
	      onKeyDown(event);
	    } // Keyboard accessibility for non interactive elements


	    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
	      event.preventDefault();

	      if (onClick) {
	        onClick(event);
	      }
	    }
	  });
	  const handleKeyUp = useEventCallback(event => {
	    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
	    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
	    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
	      keydownRef.current = false;
	      rippleRef.current.stop(event, () => {
	        rippleRef.current.pulsate(event);
	      });
	    }

	    if (onKeyUp) {
	      onKeyUp(event);
	    } // Keyboard accessibility for non interactive elements


	    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
	      onClick(event);
	    }
	  });
	  let ComponentProp = component;

	  if (ComponentProp === 'button' && (other.href || other.to)) {
	    ComponentProp = LinkComponent;
	  }

	  const buttonProps = {};

	  if (ComponentProp === 'button') {
	    buttonProps.type = type === undefined ? 'button' : type;
	    buttonProps.disabled = disabled;
	  } else {
	    if (!other.href && !other.to) {
	      buttonProps.role = 'button';
	    }

	    if (disabled) {
	      buttonProps['aria-disabled'] = disabled;
	    }
	  }

	  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
	  const handleRef = useForkRef(ref, handleOwnRef);

	  const ownerState = _extends$1({}, props, {
	    centerRipple,
	    component,
	    disabled,
	    disableRipple,
	    disableTouchRipple,
	    focusRipple,
	    tabIndex,
	    focusVisible
	  });

	  const classes = useUtilityClasses$3(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsxs(ButtonBaseRoot, _extends$1({
	    as: ComponentProp,
	    className: clsx(classes.root, className),
	    ownerState: ownerState,
	    onBlur: handleBlur,
	    onClick: onClick,
	    onContextMenu: handleContextMenu,
	    onFocus: handleFocus,
	    onKeyDown: handleKeyDown,
	    onKeyUp: handleKeyUp,
	    onMouseDown: handleMouseDown,
	    onMouseLeave: handleMouseLeave,
	    onMouseUp: handleMouseUp,
	    onDragLeave: handleDragLeave,
	    onTouchEnd: handleTouchEnd,
	    onTouchMove: handleTouchMove,
	    onTouchStart: handleTouchStart,
	    ref: handleRef,
	    tabIndex: disabled ? -1 : tabIndex,
	    type: type
	  }, buttonProps, other, {
	    children: [children, enableTouchRipple ?
	    /*#__PURE__*/

	    /* TouchRipple is only needed client-side, x2 boost on the server. */
	    jsxRuntime.jsx(TouchRipple$1, _extends$1({
	      ref: handleRippleRef,
	      center: centerRipple
	    }, TouchRippleProps)) : null]
	  }));
	});
	var ButtonBase$1 = ButtonBase;

	function getButtonUtilityClass(slot) {
	  return generateUtilityClass('MuiButton', slot);
	}
	const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);
	var buttonClasses$1 = buttonClasses;

	/**
	 * @ignore - internal component.
	 */

	const ButtonGroupContext = /*#__PURE__*/react.createContext({});

	var ButtonGroupContext$1 = ButtonGroupContext;

	const _excluded$4 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];

	const useUtilityClasses$2 = ownerState => {
	  const {
	    color,
	    disableElevation,
	    fullWidth,
	    size,
	    variant,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', variant, "".concat(variant).concat(capitalize$1(color)), "size".concat(capitalize$1(size)), "".concat(variant, "Size").concat(capitalize$1(size)), color === 'inherit' && 'colorInherit', disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
	    label: ['label'],
	    startIcon: ['startIcon', "iconSize".concat(capitalize$1(size))],
	    endIcon: ['endIcon', "iconSize".concat(capitalize$1(size))]
	  };
	  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
	  return _extends$1({}, classes, composedClasses);
	};

	const commonIconStyles = ownerState => _extends$1({}, ownerState.size === 'small' && {
	  '& > *:nth-of-type(1)': {
	    fontSize: 18
	  }
	}, ownerState.size === 'medium' && {
	  '& > *:nth-of-type(1)': {
	    fontSize: 20
	  }
	}, ownerState.size === 'large' && {
	  '& > *:nth-of-type(1)': {
	    fontSize: 22
	  }
	});

	const ButtonRoot = styled$1(ButtonBase$1, {
	  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
	  name: 'MuiButton',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, styles[ownerState.variant], styles["".concat(ownerState.variant).concat(capitalize$1(ownerState.color))], styles["size".concat(capitalize$1(ownerState.size))], styles["".concat(ownerState.variant, "Size").concat(capitalize$1(ownerState.size))], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
	  }
	})(({
	  theme,
	  ownerState
	}) => {
	  var _theme$palette$getCon, _theme$palette;

	  return _extends$1({}, theme.typography.button, {
	    minWidth: 64,
	    padding: '6px 16px',
	    borderRadius: (theme.vars || theme).shape.borderRadius,
	    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
	      duration: theme.transitions.duration.short
	    }),
	    '&:hover': _extends$1({
	      textDecoration: 'none',
	      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        backgroundColor: 'transparent'
	      }
	    }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
	      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        backgroundColor: 'transparent'
	      }
	    }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
	      border: "1px solid ".concat((theme.vars || theme).palette[ownerState.color].main),
	      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        backgroundColor: 'transparent'
	      }
	    }, ownerState.variant === 'contained' && {
	      backgroundColor: (theme.vars || theme).palette.grey.A100,
	      boxShadow: (theme.vars || theme).shadows[4],
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        boxShadow: (theme.vars || theme).shadows[2],
	        backgroundColor: (theme.vars || theme).palette.grey[300]
	      }
	    }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
	      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
	      // Reset on touch devices, it doesn't add specificity
	      '@media (hover: none)': {
	        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
	      }
	    }),
	    '&:active': _extends$1({}, ownerState.variant === 'contained' && {
	      boxShadow: (theme.vars || theme).shadows[8]
	    }),
	    ["&.".concat(buttonClasses$1.focusVisible)]: _extends$1({}, ownerState.variant === 'contained' && {
	      boxShadow: (theme.vars || theme).shadows[6]
	    }),
	    ["&.".concat(buttonClasses$1.disabled)]: _extends$1({
	      color: (theme.vars || theme).palette.action.disabled
	    }, ownerState.variant === 'outlined' && {
	      border: "1px solid ".concat((theme.vars || theme).palette.action.disabledBackground)
	    }, ownerState.variant === 'outlined' && ownerState.color === 'secondary' && {
	      border: "1px solid ".concat((theme.vars || theme).palette.action.disabled)
	    }, ownerState.variant === 'contained' && {
	      color: (theme.vars || theme).palette.action.disabled,
	      boxShadow: (theme.vars || theme).shadows[0],
	      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
	    })
	  }, ownerState.variant === 'text' && {
	    padding: '6px 8px'
	  }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
	    color: (theme.vars || theme).palette[ownerState.color].main
	  }, ownerState.variant === 'outlined' && {
	    padding: '5px 15px',
	    border: '1px solid currentColor'
	  }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
	    color: (theme.vars || theme).palette[ownerState.color].main,
	    border: theme.vars ? "1px solid rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / 0.5)") : "1px solid ".concat(alpha(theme.palette[ownerState.color].main, 0.5))
	  }, ownerState.variant === 'contained' && {
	    color: theme.vars ? // this is safe because grey does not change between default light/dark mode
	    theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
	    backgroundColor: (theme.vars || theme).palette.grey[300],
	    boxShadow: (theme.vars || theme).shadows[2]
	  }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
	    color: (theme.vars || theme).palette[ownerState.color].contrastText,
	    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
	  }, ownerState.color === 'inherit' && {
	    color: 'inherit',
	    borderColor: 'currentColor'
	  }, ownerState.size === 'small' && ownerState.variant === 'text' && {
	    padding: '4px 5px',
	    fontSize: theme.typography.pxToRem(13)
	  }, ownerState.size === 'large' && ownerState.variant === 'text' && {
	    padding: '8px 11px',
	    fontSize: theme.typography.pxToRem(15)
	  }, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
	    padding: '3px 9px',
	    fontSize: theme.typography.pxToRem(13)
	  }, ownerState.size === 'large' && ownerState.variant === 'outlined' && {
	    padding: '7px 21px',
	    fontSize: theme.typography.pxToRem(15)
	  }, ownerState.size === 'small' && ownerState.variant === 'contained' && {
	    padding: '4px 10px',
	    fontSize: theme.typography.pxToRem(13)
	  }, ownerState.size === 'large' && ownerState.variant === 'contained' && {
	    padding: '8px 22px',
	    fontSize: theme.typography.pxToRem(15)
	  }, ownerState.fullWidth && {
	    width: '100%'
	  });
	}, ({
	  ownerState
	}) => ownerState.disableElevation && {
	  boxShadow: 'none',
	  '&:hover': {
	    boxShadow: 'none'
	  },
	  ["&.".concat(buttonClasses$1.focusVisible)]: {
	    boxShadow: 'none'
	  },
	  '&:active': {
	    boxShadow: 'none'
	  },
	  ["&.".concat(buttonClasses$1.disabled)]: {
	    boxShadow: 'none'
	  }
	});
	const ButtonStartIcon = styled$1('span', {
	  name: 'MuiButton',
	  slot: 'StartIcon',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.startIcon, styles["iconSize".concat(capitalize$1(ownerState.size))]];
	  }
	})(({
	  ownerState
	}) => _extends$1({
	  display: 'inherit',
	  marginRight: 8,
	  marginLeft: -4
	}, ownerState.size === 'small' && {
	  marginLeft: -2
	}, commonIconStyles(ownerState)));
	const ButtonEndIcon = styled$1('span', {
	  name: 'MuiButton',
	  slot: 'EndIcon',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.endIcon, styles["iconSize".concat(capitalize$1(ownerState.size))]];
	  }
	})(({
	  ownerState
	}) => _extends$1({
	  display: 'inherit',
	  marginRight: -4,
	  marginLeft: 8
	}, ownerState.size === 'small' && {
	  marginRight: -2
	}, commonIconStyles(ownerState)));
	const Button = /*#__PURE__*/react.forwardRef(function Button(inProps, ref) {
	  // props priority: `inProps` > `contextProps` > `themeDefaultProps`
	  const contextProps = react.useContext(ButtonGroupContext$1);
	  const resolvedProps = resolveProps(contextProps, inProps);
	  const props = useThemeProps({
	    props: resolvedProps,
	    name: 'MuiButton'
	  });

	  const {
	    children,
	    color = 'primary',
	    component = 'button',
	    className,
	    disabled = false,
	    disableElevation = false,
	    disableFocusRipple = false,
	    endIcon: endIconProp,
	    focusVisibleClassName,
	    fullWidth = false,
	    size = 'medium',
	    startIcon: startIconProp,
	    type,
	    variant = 'text'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$4);

	  const ownerState = _extends$1({}, props, {
	    color,
	    component,
	    disabled,
	    disableElevation,
	    disableFocusRipple,
	    fullWidth,
	    size,
	    type,
	    variant
	  });

	  const classes = useUtilityClasses$2(ownerState);

	  const startIcon = startIconProp && /*#__PURE__*/jsxRuntime.jsx(ButtonStartIcon, {
	    className: classes.startIcon,
	    ownerState: ownerState,
	    children: startIconProp
	  });

	  const endIcon = endIconProp && /*#__PURE__*/jsxRuntime.jsx(ButtonEndIcon, {
	    className: classes.endIcon,
	    ownerState: ownerState,
	    children: endIconProp
	  });

	  return /*#__PURE__*/jsxRuntime.jsxs(ButtonRoot, _extends$1({
	    ownerState: ownerState,
	    className: clsx(className, contextProps.className),
	    component: component,
	    disabled: disabled,
	    focusRipple: !disableFocusRipple,
	    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
	    ref: ref,
	    type: type
	  }, other, {
	    classes: classes,
	    children: [startIcon, children, endIcon]
	  }));
	});
	var Button$1 = Button;

	const ButtonBar = () => {
	  return /*#__PURE__*/jsxRuntime.jsx("g", {
	    children: /*#__PURE__*/jsxRuntime.jsxs("div", {
	      className: "ButtonBarContainer",
	      children: [/*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Home"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Aircraft",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Aircraft"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/PDF",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Manual"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Map",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Map"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Browser",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Browser"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(NavLink, {
	        style: {
	          textDecoration: 'none'
	        },
	        to: "/Settings",
	        className: isActive => 'BottomButton' + (isActive ? 'ButtomButtonActive' : ''),
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          variant: "contained",
	          children: "Settings"
	        })
	      })]
	    })
	  });
	};

	function useTheme$1() {
	  const theme = useTheme$2(defaultTheme$4);

	  return theme;
	}

	const defaultTheme$2 = createTheme$1();
	const Box = createBox({
	  defaultTheme: defaultTheme$2,
	  defaultClassName: 'MuiBox-root',
	  generateClassName: ClassNameGenerator$1.generate
	});
	var Box$1 = Box;

	const Map$1 = () => {
	  react.useState('Windy');

	  return /*#__PURE__*/jsxRuntime.jsx("g", {
	    children: /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	      sx: {
	        position: 'absolute',
	        backgroundColor: 'white',
	        left: '0',
	        top: '0',
	        width: 1040,
	        height: 750
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	        sx: {
	          position: 'absolute',
	          backgroundColor: 'white',
	          left: '0',
	          top: '0',
	          width: 1040,
	          height: 750
	        },
	        children: /*#__PURE__*/jsxRuntime.jsx("iframe", {
	          width: "1040",
	          height: "750",
	          src: "https://opentopomap.org/#map=6/38.505/-84.639"
	        })
	      })
	    })
	  });
	};

	function getTypographyUtilityClass(slot) {
	  return generateUtilityClass('MuiTypography', slot);
	}
	generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

	const _excluded$3 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];

	const useUtilityClasses$1 = ownerState => {
	  const {
	    align,
	    gutterBottom,
	    noWrap,
	    paragraph,
	    variant,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', variant, ownerState.align !== 'inherit' && "align".concat(capitalize$1(align)), gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
	  };
	  return composeClasses(slots, getTypographyUtilityClass, classes);
	};

	const TypographyRoot = styled$1('span', {
	  name: 'MuiTypography',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles["align".concat(capitalize$1(ownerState.align))], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$1({
	  margin: 0
	}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
	  textAlign: ownerState.align
	}, ownerState.noWrap && {
	  overflow: 'hidden',
	  textOverflow: 'ellipsis',
	  whiteSpace: 'nowrap'
	}, ownerState.gutterBottom && {
	  marginBottom: '0.35em'
	}, ownerState.paragraph && {
	  marginBottom: 16
	}));
	const defaultVariantMapping$1 = {
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  subtitle1: 'h6',
	  subtitle2: 'h6',
	  body1: 'p',
	  body2: 'p',
	  inherit: 'p'
	}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

	const colorTransformations = {
	  primary: 'primary.main',
	  textPrimary: 'text.primary',
	  secondary: 'secondary.main',
	  textSecondary: 'text.secondary',
	  error: 'error.main'
	};

	const transformDeprecatedColors = color => {
	  return colorTransformations[color] || color;
	};

	const Typography$2 = /*#__PURE__*/react.forwardRef(function Typography(inProps, ref) {
	  const themeProps = useThemeProps({
	    props: inProps,
	    name: 'MuiTypography'
	  });
	  const color = transformDeprecatedColors(themeProps.color);
	  const props = extendSxProp(_extends$1({}, themeProps, {
	    color
	  }));

	  const {
	    align = 'inherit',
	    className,
	    component,
	    gutterBottom = false,
	    noWrap = false,
	    paragraph = false,
	    variant = 'body1',
	    variantMapping = defaultVariantMapping$1
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$3);

	  const ownerState = _extends$1({}, props, {
	    align,
	    color,
	    className,
	    component,
	    gutterBottom,
	    noWrap,
	    paragraph,
	    variant,
	    variantMapping
	  });

	  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping$1[variant]) || 'span';
	  const classes = useUtilityClasses$1(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(TypographyRoot, _extends$1({
	    as: Component,
	    ref: ref,
	    ownerState: ownerState,
	    className: clsx(classes.root, className)
	  }, other));
	});
	var Typography$3 = Typography$2;

	const shouldSpreadAdditionalProps = Slot => {
	  return !Slot || !isHostComponent(Slot);
	};

	var shouldSpreadAdditionalProps$1 = shouldSpreadAdditionalProps;

	function getContainerUtilityClass(slot) {
	  return generateUtilityClass('MuiContainer', slot);
	}
	generateUtilityClasses('MuiContainer', ['root', 'disableGutters', 'fixed', 'maxWidthXs', 'maxWidthSm', 'maxWidthMd', 'maxWidthLg', 'maxWidthXl']);

	const _excluded$2 = ["className", "component", "disableGutters", "fixed", "maxWidth"];

	const useUtilityClasses = ownerState => {
	  const {
	    classes,
	    fixed,
	    disableGutters,
	    maxWidth
	  } = ownerState;
	  const slots = {
	    root: ['root', maxWidth && "maxWidth".concat(capitalize$1(String(maxWidth))), fixed && 'fixed', disableGutters && 'disableGutters']
	  };
	  return composeClasses(slots, getContainerUtilityClass, classes);
	};

	const ContainerRoot = styled$1('div', {
	  name: 'MuiContainer',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, styles["maxWidth".concat(capitalize$1(String(ownerState.maxWidth)))], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$1({
	  width: '100%',
	  marginLeft: 'auto',
	  boxSizing: 'border-box',
	  marginRight: 'auto',
	  display: 'block'
	}, !ownerState.disableGutters && {
	  paddingLeft: theme.spacing(2),
	  paddingRight: theme.spacing(2),
	  [theme.breakpoints.up('sm')]: {
	    paddingLeft: theme.spacing(3),
	    paddingRight: theme.spacing(3)
	  }
	}), ({
	  theme,
	  ownerState
	}) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
	  const value = theme.breakpoints.values[breakpoint];

	  if (value !== 0) {
	    acc[theme.breakpoints.up(breakpoint)] = {
	      maxWidth: "".concat(value).concat(theme.breakpoints.unit)
	    };
	  }

	  return acc;
	}, {}), ({
	  theme,
	  ownerState
	}) => _extends$1({}, ownerState.maxWidth === 'xs' && {
	  [theme.breakpoints.up('xs')]: {
	    maxWidth: Math.max(theme.breakpoints.values.xs, 444)
	  }
	}, ownerState.maxWidth && ownerState.maxWidth !== 'xs' && {
	  [theme.breakpoints.up(ownerState.maxWidth)]: {
	    maxWidth: "".concat(theme.breakpoints.values[ownerState.maxWidth]).concat(theme.breakpoints.unit)
	  }
	}));
	const Container = /*#__PURE__*/react.forwardRef(function Container(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiContainer'
	  });

	  const {
	    className,
	    component = 'div',
	    disableGutters = false,
	    fixed = false,
	    maxWidth = 'lg'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$2);

	  const ownerState = _extends$1({}, props, {
	    component,
	    disableGutters,
	    fixed,
	    maxWidth
	  });

	  const classes = useUtilityClasses(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(ContainerRoot, _extends$1({
	    as: component,
	    ownerState: ownerState,
	    className: clsx(classes.root, className),
	    ref: ref
	  }, other));
	});
	var Container$1 = Container;

	const _excluded$1 = ["component", "components", "componentsProps", "color", "size"];
	const sliderClasses = _extends$1({}, sliderUnstyledClasses$1, generateUtilityClasses('MuiSlider', ['colorPrimary', 'colorSecondary', 'thumbColorPrimary', 'thumbColorSecondary', 'sizeSmall', 'thumbSizeSmall']));
	const SliderRoot = styled$1('span', {
	  name: 'MuiSlider',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    const marks = ownerState.marksProp === true && ownerState.step !== null ? [...Array(Math.floor((ownerState.max - ownerState.min) / ownerState.step) + 1)].map((_, index) => ({
	      value: ownerState.min + ownerState.step * index
	    })) : ownerState.marksProp || [];
	    const marked = marks.length > 0 && marks.some(mark => mark.label);
	    return [styles.root, styles["color".concat(capitalize$1(ownerState.color))], ownerState.size !== 'medium' && styles["size".concat(capitalize$1(ownerState.size))], marked && styles.marked, ownerState.orientation === 'vertical' && styles.vertical, ownerState.track === 'inverted' && styles.trackInverted, ownerState.track === false && styles.trackFalse];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$1({
	  borderRadius: 12,
	  boxSizing: 'content-box',
	  display: 'inline-block',
	  position: 'relative',
	  cursor: 'pointer',
	  touchAction: 'none',
	  color: theme.palette[ownerState.color].main,
	  WebkitTapHighlightColor: 'transparent'
	}, ownerState.orientation === 'horizontal' && _extends$1({
	  height: 4,
	  width: '100%',
	  padding: '13px 0',
	  // The primary input mechanism of the device includes a pointing device of limited accuracy.
	  '@media (pointer: coarse)': {
	    // Reach 42px touch target, about ~8mm on screen.
	    padding: '20px 0'
	  }
	}, ownerState.size === 'small' && {
	  height: 2
	}, ownerState.marked && {
	  marginBottom: 20
	}), ownerState.orientation === 'vertical' && _extends$1({
	  height: '100%',
	  width: 4,
	  padding: '0 13px',
	  // The primary input mechanism of the device includes a pointing device of limited accuracy.
	  '@media (pointer: coarse)': {
	    // Reach 42px touch target, about ~8mm on screen.
	    padding: '0 20px'
	  }
	}, ownerState.size === 'small' && {
	  width: 2
	}, ownerState.marked && {
	  marginRight: 44
	}), {
	  '@media print': {
	    colorAdjust: 'exact'
	  },
	  ["&.".concat(sliderClasses.disabled)]: {
	    pointerEvents: 'none',
	    cursor: 'default',
	    color: theme.palette.grey[400]
	  },
	  ["&.".concat(sliderClasses.dragging)]: {
	    ["& .".concat(sliderClasses.thumb, ", & .").concat(sliderClasses.track)]: {
	      transition: 'none'
	    }
	  }
	}));
	const SliderRail = styled$1('span', {
	  name: 'MuiSlider',
	  slot: 'Rail',
	  overridesResolver: (props, styles) => styles.rail
	})(({
	  ownerState
	}) => _extends$1({
	  display: 'block',
	  position: 'absolute',
	  borderRadius: 'inherit',
	  backgroundColor: 'currentColor',
	  opacity: 0.38
	}, ownerState.orientation === 'horizontal' && {
	  width: '100%',
	  height: 'inherit',
	  top: '50%',
	  transform: 'translateY(-50%)'
	}, ownerState.orientation === 'vertical' && {
	  height: '100%',
	  width: 'inherit',
	  left: '50%',
	  transform: 'translateX(-50%)'
	}, ownerState.track === 'inverted' && {
	  opacity: 1
	}));
	const SliderTrack = styled$1('span', {
	  name: 'MuiSlider',
	  slot: 'Track',
	  overridesResolver: (props, styles) => styles.track
	})(({
	  theme,
	  ownerState
	}) => {
	  const color = // Same logic as the LinearProgress track color
	  theme.palette.mode === 'light' ? lighten$1(theme.palette[ownerState.color].main, 0.62) : darken$1(theme.palette[ownerState.color].main, 0.5);
	  return _extends$1({
	    display: 'block',
	    position: 'absolute',
	    borderRadius: 'inherit',
	    border: '1px solid currentColor',
	    backgroundColor: 'currentColor',
	    transition: theme.transitions.create(['left', 'width', 'bottom', 'height'], {
	      duration: theme.transitions.duration.shortest
	    })
	  }, ownerState.size === 'small' && {
	    border: 'none'
	  }, ownerState.orientation === 'horizontal' && {
	    height: 'inherit',
	    top: '50%',
	    transform: 'translateY(-50%)'
	  }, ownerState.orientation === 'vertical' && {
	    width: 'inherit',
	    left: '50%',
	    transform: 'translateX(-50%)'
	  }, ownerState.track === false && {
	    display: 'none'
	  }, ownerState.track === 'inverted' && {
	    backgroundColor: color,
	    borderColor: color
	  });
	});
	const SliderThumb = styled$1('span', {
	  name: 'MuiSlider',
	  slot: 'Thumb',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.thumb, styles["thumbColor".concat(capitalize$1(ownerState.color))], ownerState.size !== 'medium' && styles["thumbSize".concat(capitalize$1(ownerState.size))]];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$1({
	  position: 'absolute',
	  width: 20,
	  height: 20,
	  boxSizing: 'border-box',
	  borderRadius: '50%',
	  outline: 0,
	  backgroundColor: 'currentColor',
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  transition: theme.transitions.create(['box-shadow', 'left', 'bottom'], {
	    duration: theme.transitions.duration.shortest
	  })
	}, ownerState.size === 'small' && {
	  width: 12,
	  height: 12
	}, ownerState.orientation === 'horizontal' && {
	  top: '50%',
	  transform: 'translate(-50%, -50%)'
	}, ownerState.orientation === 'vertical' && {
	  left: '50%',
	  transform: 'translate(-50%, 50%)'
	}, {
	  '&:before': _extends$1({
	    position: 'absolute',
	    content: '""',
	    borderRadius: 'inherit',
	    width: '100%',
	    height: '100%',
	    boxShadow: theme.shadows[2]
	  }, ownerState.size === 'small' && {
	    boxShadow: 'none'
	  }),
	  '&::after': {
	    position: 'absolute',
	    content: '""',
	    borderRadius: '50%',
	    // 42px is the hit target
	    width: 42,
	    height: 42,
	    top: '50%',
	    left: '50%',
	    transform: 'translate(-50%, -50%)'
	  },
	  ["&:hover, &.".concat(sliderClasses.focusVisible)]: {
	    boxShadow: "0px 0px 0px 8px ".concat(alpha(theme.palette[ownerState.color].main, 0.16)),
	    '@media (hover: none)': {
	      boxShadow: 'none'
	    }
	  },
	  ["&.".concat(sliderClasses.active)]: {
	    boxShadow: "0px 0px 0px 14px ".concat(alpha(theme.palette[ownerState.color].main, 0.16))
	  },
	  ["&.".concat(sliderClasses.disabled)]: {
	    '&:hover': {
	      boxShadow: 'none'
	    }
	  }
	}));
	const SliderValueLabel = styled$1(SliderValueLabelUnstyled, {
	  name: 'MuiSlider',
	  slot: 'ValueLabel',
	  overridesResolver: (props, styles) => styles.valueLabel
	})(({
	  theme,
	  ownerState
	}) => _extends$1({
	  ["&.".concat(sliderClasses.valueLabelOpen)]: {
	    transform: 'translateY(-100%) scale(1)'
	  },
	  zIndex: 1,
	  whiteSpace: 'nowrap'
	}, theme.typography.body2, {
	  fontWeight: 500,
	  transition: theme.transitions.create(['transform'], {
	    duration: theme.transitions.duration.shortest
	  }),
	  top: -10,
	  transformOrigin: 'bottom center',
	  transform: 'translateY(-100%) scale(0)',
	  position: 'absolute',
	  backgroundColor: theme.palette.grey[600],
	  borderRadius: 2,
	  color: theme.palette.common.white,
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  padding: '0.25rem 0.75rem'
	}, ownerState.size === 'small' && {
	  fontSize: theme.typography.pxToRem(12),
	  padding: '0.25rem 0.5rem'
	}, {
	  '&:before': {
	    position: 'absolute',
	    content: '""',
	    width: 8,
	    height: 8,
	    bottom: 0,
	    left: '50%',
	    transform: 'translate(-50%, 50%) rotate(45deg)',
	    backgroundColor: 'inherit'
	  }
	}));
	const SliderMark = styled$1('span', {
	  name: 'MuiSlider',
	  slot: 'Mark',
	  shouldForwardProp: prop => slotShouldForwardProp(prop) && prop !== 'markActive',
	  overridesResolver: (props, styles) => styles.mark
	})(({
	  theme,
	  ownerState,
	  markActive
	}) => _extends$1({
	  position: 'absolute',
	  width: 2,
	  height: 2,
	  borderRadius: 1,
	  backgroundColor: 'currentColor'
	}, ownerState.orientation === 'horizontal' && {
	  top: '50%',
	  transform: 'translate(-1px, -50%)'
	}, ownerState.orientation === 'vertical' && {
	  left: '50%',
	  transform: 'translate(-50%, 1px)'
	}, markActive && {
	  backgroundColor: theme.palette.background.paper,
	  opacity: 0.8
	}));
	const SliderMarkLabel = styled$1('span', {
	  name: 'MuiSlider',
	  slot: 'MarkLabel',
	  shouldForwardProp: prop => slotShouldForwardProp(prop) && prop !== 'markLabelActive',
	  overridesResolver: (props, styles) => styles.markLabel
	})(({
	  theme,
	  ownerState,
	  markLabelActive
	}) => _extends$1({}, theme.typography.body2, {
	  color: theme.palette.text.secondary,
	  position: 'absolute',
	  whiteSpace: 'nowrap'
	}, ownerState.orientation === 'horizontal' && {
	  top: 30,
	  transform: 'translateX(-50%)',
	  '@media (pointer: coarse)': {
	    top: 40
	  }
	}, ownerState.orientation === 'vertical' && {
	  left: 36,
	  transform: 'translateY(50%)',
	  '@media (pointer: coarse)': {
	    left: 44
	  }
	}, markLabelActive && {
	  color: theme.palette.text.primary
	}));

	const extendUtilityClasses = ownerState => {
	  const {
	    color,
	    size,
	    classes = {}
	  } = ownerState;
	  return _extends$1({}, classes, {
	    root: clsx(classes.root, getSliderUtilityClass("color".concat(capitalize$1(color))), classes["color".concat(capitalize$1(color))], size && [getSliderUtilityClass("size".concat(capitalize$1(size))), classes["size".concat(capitalize$1(size))]]),
	    thumb: clsx(classes.thumb, getSliderUtilityClass("thumbColor".concat(capitalize$1(color))), classes["thumbColor".concat(capitalize$1(color))], size && [getSliderUtilityClass("thumbSize".concat(capitalize$1(size))), classes["thumbSize".concat(capitalize$1(size))]])
	  });
	};

	const Slider = /*#__PURE__*/react.forwardRef(function Slider(inputProps, ref) {
	  var _componentsProps$root, _componentsProps$thum, _componentsProps$trac, _componentsProps$valu;

	  const props = useThemeProps({
	    props: inputProps,
	    name: 'MuiSlider'
	  });
	  const theme = useTheme$1();
	  const isRtl = theme.direction === 'rtl';

	  const {
	    // eslint-disable-next-line react/prop-types
	    component = 'span',
	    components = {},
	    componentsProps = {},
	    color = 'primary',
	    size = 'medium'
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded$1);

	  const ownerState = _extends$1({}, props, {
	    color,
	    size
	  });

	  const classes = extendUtilityClasses(ownerState);
	  return /*#__PURE__*/jsxRuntime.jsx(SliderUnstyled$1, _extends$1({}, other, {
	    isRtl: isRtl,
	    components: _extends$1({
	      Root: SliderRoot,
	      Rail: SliderRail,
	      Track: SliderTrack,
	      Thumb: SliderThumb,
	      ValueLabel: SliderValueLabel,
	      Mark: SliderMark,
	      MarkLabel: SliderMarkLabel
	    }, components),
	    componentsProps: _extends$1({}, componentsProps, {
	      root: _extends$1({}, componentsProps.root, shouldSpreadAdditionalProps$1(components.Root) && {
	        as: component,
	        ownerState: _extends$1({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState, {
	          color,
	          size
	        })
	      }),
	      thumb: _extends$1({}, componentsProps.thumb, shouldSpreadAdditionalProps$1(components.Thumb) && {
	        ownerState: _extends$1({}, (_componentsProps$thum = componentsProps.thumb) == null ? void 0 : _componentsProps$thum.ownerState, {
	          color,
	          size
	        })
	      }),
	      track: _extends$1({}, componentsProps.track, shouldSpreadAdditionalProps$1(components.Track) && {
	        ownerState: _extends$1({}, (_componentsProps$trac = componentsProps.track) == null ? void 0 : _componentsProps$trac.ownerState, {
	          color,
	          size
	        })
	      }),
	      valueLabel: _extends$1({}, componentsProps.valueLabel, shouldSpreadAdditionalProps$1(components.ValueLabel) && {
	        ownerState: _extends$1({}, (_componentsProps$valu = componentsProps.valueLabel) == null ? void 0 : _componentsProps$valu.ownerState, {
	          color,
	          size
	        })
	      })
	    }),
	    classes: classes,
	    ref: ref
	  }));
	});
	var Slider$1 = Slider;

	const _excluded = ["component", "direction", "spacing", "divider", "children"];

	function joinChildren(children, separator) {
	  const childrenArray = react.Children.toArray(children).filter(Boolean);
	  return childrenArray.reduce((output, child, index) => {
	    output.push(child);

	    if (index < childrenArray.length - 1) {
	      output.push( /*#__PURE__*/react.cloneElement(separator, {
	        key: "separator-".concat(index)
	      }));
	    }

	    return output;
	  }, []);
	}

	const getSideFromDirection = direction => {
	  return {
	    row: 'Left',
	    'row-reverse': 'Right',
	    column: 'Top',
	    'column-reverse': 'Bottom'
	  }[direction];
	};

	const style$1 = ({
	  ownerState,
	  theme
	}) => {
	  let styles = _extends$1({
	    display: 'flex'
	  }, handleBreakpoints({
	    theme
	  }, resolveBreakpointValues({
	    values: ownerState.direction,
	    breakpoints: theme.breakpoints.values
	  }), propValue => ({
	    flexDirection: propValue
	  })));

	  if (ownerState.spacing) {
	    const transformer = createUnarySpacing$1(theme);
	    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
	      if (ownerState.spacing[breakpoint] != null || ownerState.direction[breakpoint] != null) {
	        acc[breakpoint] = true;
	      }

	      return acc;
	    }, {});
	    const directionValues = resolveBreakpointValues({
	      values: ownerState.direction,
	      base
	    });
	    const spacingValues = resolveBreakpointValues({
	      values: ownerState.spacing,
	      base
	    });

	    const styleFromPropValue = (propValue, breakpoint) => {
	      return {
	        '& > :not(style) + :not(style)': {
	          margin: 0,
	          ["margin".concat(getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction))]: getValue(transformer, propValue)
	        }
	      };
	    };

	    styles = deepmerge$1(styles, handleBreakpoints({
	      theme
	    }, spacingValues, styleFromPropValue));
	  }

	  return styles;
	};
	const StackRoot = styled$1('div', {
	  name: 'MuiStack',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    return [styles.root];
	  }
	})(style$1);
	const Stack = /*#__PURE__*/react.forwardRef(function Stack(inProps, ref) {
	  const themeProps = useThemeProps({
	    props: inProps,
	    name: 'MuiStack'
	  });
	  const props = extendSxProp(themeProps);

	  const {
	    component = 'div',
	    direction = 'column',
	    spacing = 0,
	    divider,
	    children
	  } = props,
	        other = _objectWithoutPropertiesLoose(props, _excluded);

	  const ownerState = {
	    direction,
	    spacing
	  };
	  return /*#__PURE__*/jsxRuntime.jsx(StackRoot, _extends$1({
	    as: component,
	    ownerState: ownerState,
	    ref: ref
	  }, other, {
	    children: divider ? joinChildren(children, divider) : children
	  }));
	});
	var Stack$1 = Stack;

	const Airctaft = () => {
	  let [removeTags, setremoveTags] = useSimVar('L:C17_RBF_TAGS', 'bool');
	  let [rearDoorL, setRearDoorL] = useSimVar('L:C17_PARA_L', 'bool');
	  let [rearDoorR, setRearDoorR] = useSimVar('L:C17_PARA_R', 'bool');
	  let [CargoDoor, setCargoDoor] = useSimVar('L:C17_CargoDoor_POS', 'enum');
	  let [ARSlipway, setARSlipway] = useSimVar('L:C17_UARRSI_Slipway', 'bool');
	  let [EnteranceDoor, setEnteranceDoor] = useSimVar('L:C17_Crew_Enterance', 'bool');

	  const handleChange = (event, newValue) => {
	    setCargoDoor(newValue);
	  };

	  return /*#__PURE__*/jsxRuntime.jsx("div", {
	    className: "aircraftContainer",
	    children: /*#__PURE__*/jsxRuntime.jsxs(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 1040,
	        height: 810,
	        backgroundImage: 'url(/Images/C17_Home.png)',
	        backgroundPosition: 'right',
	        backgroundSize: '80%',
	        backgroundRepeat: 'no-repeat',
	        borderRadius: 4,
	        left: 5,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'flex',
	        textAlign: 'center',
	        fontSize: 14
	      },
	      children: [/*#__PURE__*/jsxRuntime.jsx("h1", {
	        style: {
	          marginLeft: 15,
	          color: '#1B93FF'
	        },
	        children: "Aircraft Customization"
	      }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	        sx: {
	          position: 'absolute',
	          width: 200,
	          height: 200,
	          backgroundColor: '16161E',
	          borderRadius: 4,
	          left: 15,
	          top: 520,
	          boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	          color: '#1B93FF',
	          justifyContent: 'center',
	          display: 'flex',
	          flexDirection: 'column',
	          textAlign: 'center',
	          alignItems: 'center',
	          fontSize: 14
	        },
	        children: /*#__PURE__*/jsxRuntime.jsx(Container$1, {
	          maxWidth: "sm",
	          children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	            onClick: () => setremoveTags(!removeTags),
	            size: "small",
	            variant: "contained",
	            color: removeTags ? 'error' : 'success',
	            children: "Cones & Covers"
	          })
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	        sx: {
	          position: 'absolute',
	          width: 110,
	          height: 35,
	          backgroundColor: '16161E',
	          borderRadius: 1.5,
	          left: 300,
	          top: 389,
	          boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	          color: '#1B93FF',
	          justifyContent: 'center',
	          display: 'flex',
	          flexDirection: 'column',
	          textAlign: 'center',
	          alignItems: 'center',
	          fontSize: 14
	        },
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: () => setARSlipway(!ARSlipway),
	          size: "small",
	          variant: "contained",
	          color: ARSlipway ? 'error' : 'success',
	          children: "A/R Slipway"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	        sx: {
	          position: 'absolute',
	          width: 110,
	          height: 35,
	          backgroundColor: '16161E',
	          borderRadius: 1,
	          left: 360,
	          top: 455,
	          boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	          color: '#1B93FF',
	          justifyContent: 'center',
	          display: 'flex',
	          flexDirection: 'column',
	          textAlign: 'center',
	          alignItems: 'center',
	          fontSize: 14
	        },
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: () => setEnteranceDoor(!EnteranceDoor),
	          size: "small",
	          variant: "contained",
	          color: EnteranceDoor ? 'error' : 'success',
	          children: "crew door"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	        sx: {
	          position: 'absolute',
	          width: 79,
	          height: 52,
	          backgroundColor: '16161E',
	          borderRadius: 1,
	          left: 740,
	          top: 280,
	          boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	          color: '#1B93FF',
	          justifyContent: 'center',
	          display: 'flex',
	          flexDirection: 'column',
	          textAlign: 'center',
	          alignItems: 'center',
	          fontSize: 14
	        },
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: () => setRearDoorR(!rearDoorR),
	          color: rearDoorR ? 'error' : 'success',
	          size: "small",
	          variant: "contained",
	          children: "Para Door R"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	        sx: {
	          position: 'absolute',
	          width: 79,
	          height: 52,
	          backgroundColor: '16161E',
	          borderRadius: 1,
	          left: 740,
	          top: 480,
	          boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	          color: '#1B93FF',
	          justifyContent: 'center',
	          display: 'flex',
	          flexDirection: 'column',
	          textAlign: 'center',
	          alignItems: 'center',
	          fontSize: 14
	        },
	        children: /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	          onClick: () => setRearDoorL(!rearDoorL),
	          color: rearDoorL ? 'error' : 'success',
	          size: "small",
	          variant: "contained",
	          children: "para Door L"
	        })
	      }), /*#__PURE__*/jsxRuntime.jsxs(Box$1, {
	        sx: {
	          position: 'absolute',
	          width: 250,
	          height: 90,
	          backgroundColor: '16161E',
	          borderRadius: 1,
	          left: 740,
	          top: 360,
	          boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	          color: '#1B93FF',
	          justifyContent: 'center',
	          display: 'flex',
	          flexDirection: 'column',
	          textAlign: 'center',
	          alignItems: 'center',
	          fontSize: 14
	        },
	        children: [/*#__PURE__*/jsxRuntime.jsx(Typography$3, {
	          id: "input-slider",
	          gutterBottom: true,
	          children: "Cargo Bay Position"
	        }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	          sx: {
	            width: 200,
	            height: 135
	          },
	          children: /*#__PURE__*/jsxRuntime.jsx(Slider$1, {
	            "aria-labelledby": "brightness",
	            value: CargoDoor,
	            onChange: handleChange,
	            step: 50
	          })
	        })]
	      })]
	    })
	  });
	};

	const Browser = () => {
	  return /*#__PURE__*/jsxRuntime.jsx("iframe", {
	    width: "2080",
	    height: "1620",
	    src: "https://www.bing.com/",
	    frameBorder: "0"
	  });
	};

	const EfbPower = ({
	  localVar,
	  children
	}) => {
	  const [isOn] = useSimVar("L:".concat(localVar), 'bool');
	  if (isOn) return null;else return /*#__PURE__*/jsxRuntime.jsx("div", {
	    children: children
	  });
	};

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = _objectWithoutPropertiesLoose(source, excluded);
	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _typeof$1(obj) {
	  "@babel/helpers - typeof";

	  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof$1(obj);
	}

	function isPlainObject(item) {
	  return item && _typeof$1(item) === 'object' && item.constructor === Object;
	}
	function deepmerge(target, source) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
	    clone: true
	  };
	  var output = options.clone ? _extends$1({}, target) : target;

	  if (isPlainObject(target) && isPlainObject(source)) {
	    Object.keys(source).forEach(function (key) {
	      // Avoid prototype pollution
	      if (key === '__proto__') {
	        return;
	      }

	      if (isPlainObject(source[key]) && key in target) {
	        output[key] = deepmerge(target[key], source[key], options);
	      } else {
	        output[key] = source[key];
	      }
	    });
	  }

	  return output;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	/**
	 * WARNING: Don't import this directly.
	 * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
	 * @param {number} code
	 */
	function formatMuiErrorMessage(code) {
	  // Apply babel-plugin-transform-template-literals in loose mode
	  // loose mode is safe iff we're concatenating primitives
	  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

	  /* eslint-disable prefer-template */
	  var url = 'https://mui.com/production-error/?code=' + code;

	  for (var i = 1; i < arguments.length; i += 1) {
	    // rest params over-transpile for this case
	    // eslint-disable-next-line prefer-rest-params
	    url += '&args[]=' + encodeURIComponent(arguments[i]);
	  }

	  return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
	  /* eslint-enable prefer-template */
	}

	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

	/**
	 * This is the list of the style rule name we use as drop in replacement for the built-in
	 * pseudo classes (:checked, :disabled, :focused, etc.).
	 *
	 * Why do they exist in the first place?
	 * These classes are used at a specificity of 2.
	 * It allows them to override previously definied styles as well as
	 * being untouched by simple user overrides.
	 */

	var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
	// When new generator function is created, rule counter is reset.
	// We need to reset the rule counter for SSR for each request.
	//
	// It's inspired by
	// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

	function createGenerateClassName() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _options$disableGloba = options.disableGlobal,
	      disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
	      _options$productionPr = options.productionPrefix,
	      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
	      _options$seed = options.seed,
	      seed = _options$seed === void 0 ? '' : _options$seed;
	  var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
	  var ruleCounter = 0;

	  var getNextCounterId = function getNextCounterId() {
	    ruleCounter += 1;

	    return ruleCounter;
	  };

	  return function (rule, styleSheet) {
	    var name = styleSheet.options.name; // Is a global static MUI style?

	    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
	      // We can use a shorthand class name, we never use the keys to style the components.
	      if (pseudoClasses.indexOf(rule.key) !== -1) {
	        return "Mui-".concat(rule.key);
	      }

	      var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

	      if (!styleSheet.options.theme[nested] || seed !== '') {
	        return prefix;
	      }

	      return "".concat(prefix, "-").concat(getNextCounterId());
	    }

	    {
	      return "".concat(seedPrefix).concat(productionPrefix).concat(getNextCounterId());
	    }
	  };
	}

	/* eslint-disable no-restricted-syntax */
	function getThemeProps(params) {
	  var theme = params.theme,
	      name = params.name,
	      props = params.props;

	  if (!theme || !theme.props || !theme.props[name]) {
	    return props;
	  } // Resolve default props, code borrow from React source.
	  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


	  var defaultProps = theme.props[name];
	  var propName;

	  for (propName in defaultProps) {
	    if (props[propName] === undefined) {
	      props[propName] = defaultProps[propName];
	    }
	  }

	  return props;
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	var plainObjectConstrurctor = {}.constructor;

	function cloneStyle(style) {
	  if (style == null || typeof style !== 'object') return style;
	  if (Array.isArray(style)) return style.map(cloneStyle);
	  if (style.constructor !== plainObjectConstrurctor) return style;
	  var newStyle = {};

	  for (var name in style) {
	    newStyle[name] = cloneStyle(style[name]);
	  }

	  return newStyle;
	}
	/**
	 * Create a rule instance.
	 */


	function createRule(name, decl, options) {
	  if (name === void 0) {
	    name = 'unnamed';
	  }

	  var jss = options.jss;
	  var declCopy = cloneStyle(decl);
	  var rule = jss.plugins.onCreateRule(name, declCopy, options);
	  if (rule) return rule; // It is an at-rule and it has no instance.

	  if (name[0] === '@') ;

	  return null;
	}

	var join = function join(value, by) {
	  var result = '';

	  for (var i = 0; i < value.length; i++) {
	    // Remove !important from the value, it will be readded later.
	    if (value[i] === '!important') break;
	    if (result) result += by;
	    result += value[i];
	  }

	  return result;
	};
	/**
	 * Converts JSS array value to a CSS string.
	 *
	 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
	 * `border: ['1px', '2px']` > `border: 1px, 2px;`
	 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
	 * `color: ['red', !important]` > `color: red !important;`
	 */


	var toCssValue = function toCssValue(value, ignoreImportant) {
	  if (ignoreImportant === void 0) {
	    ignoreImportant = false;
	  }

	  if (!Array.isArray(value)) return value;
	  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

	  if (Array.isArray(value[0])) {
	    for (var i = 0; i < value.length; i++) {
	      if (value[i] === '!important') break;
	      if (cssValue) cssValue += ', ';
	      cssValue += join(value[i], ' ');
	    }
	  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


	  if (!ignoreImportant && value[value.length - 1] === '!important') {
	    cssValue += ' !important';
	  }

	  return cssValue;
	};

	function getWhitespaceSymbols(options) {
	  if (options && options.format === false) {
	    return {
	      linebreak: '',
	      space: ''
	    };
	  }

	  return {
	    linebreak: '\n',
	    space: ' '
	  };
	}
	/**
	 * Indent a string.
	 * http://jsperf.com/array-join-vs-for
	 */


	function indentStr(str, indent) {
	  var result = '';

	  for (var index = 0; index < indent; index++) {
	    result += '  ';
	  }

	  return result + str;
	}
	/**
	 * Converts a Rule to CSS string.
	 */


	function toCss(selector, style, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var result = '';
	  if (!style) return result;
	  var _options = options,
	      _options$indent = _options.indent,
	      indent = _options$indent === void 0 ? 0 : _options$indent;
	  var fallbacks = style.fallbacks;

	  if (options.format === false) {
	    indent = -Infinity;
	  }

	  var _getWhitespaceSymbols = getWhitespaceSymbols(options),
	      linebreak = _getWhitespaceSymbols.linebreak,
	      space = _getWhitespaceSymbols.space;

	  if (selector) indent++; // Apply fallbacks first.

	  if (fallbacks) {
	    // Array syntax {fallbacks: [{prop: value}]}
	    if (Array.isArray(fallbacks)) {
	      for (var index = 0; index < fallbacks.length; index++) {
	        var fallback = fallbacks[index];

	        for (var prop in fallback) {
	          var value = fallback[prop];

	          if (value != null) {
	            if (result) result += linebreak;
	            result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
	          }
	        }
	      }
	    } else {
	      // Object syntax {fallbacks: {prop: value}}
	      for (var _prop in fallbacks) {
	        var _value = fallbacks[_prop];

	        if (_value != null) {
	          if (result) result += linebreak;
	          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
	        }
	      }
	    }
	  }

	  for (var _prop2 in style) {
	    var _value2 = style[_prop2];

	    if (_value2 != null && _prop2 !== 'fallbacks') {
	      if (result) result += linebreak;
	      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
	    }
	  } // Allow empty style in this case, because properties will be added dynamically.


	  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

	  if (!selector) return result;
	  indent--;
	  if (result) result = "" + linebreak + result + linebreak;
	  return indentStr("" + selector + space + "{" + result, indent) + indentStr('}', indent);
	}

	var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
	var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;

	var escape = function (str) {
	  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
	};

	var BaseStyleRule = /*#__PURE__*/function () {
	  function BaseStyleRule(key, style, options) {
	    this.type = 'style';
	    this.isProcessed = false;
	    var sheet = options.sheet,
	        Renderer = options.Renderer;
	    this.key = key;
	    this.options = options;
	    this.style = style;
	    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
	  }
	  /**
	   * Get or set a style property.
	   */


	  var _proto = BaseStyleRule.prototype;

	  _proto.prop = function prop(name, value, options) {
	    // It's a getter.
	    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

	    var force = options ? options.force : false;
	    if (!force && this.style[name] === value) return this;
	    var newValue = value;

	    if (!options || options.process !== false) {
	      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
	    }

	    var isEmpty = newValue == null || newValue === false;
	    var isDefined = (name in this.style); // Value is empty and wasn't defined before.

	    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

	    var remove = isEmpty && isDefined;
	    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

	    if (this.renderable && this.renderer) {
	      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
	      return this;
	    }

	    var sheet = this.options.sheet;

	    if (sheet && sheet.attached) ;

	    return this;
	  };

	  return BaseStyleRule;
	}();

	var StyleRule = /*#__PURE__*/function (_BaseStyleRule) {
	  _inheritsLoose(StyleRule, _BaseStyleRule);

	  function StyleRule(key, style, options) {
	    var _this;

	    _this = _BaseStyleRule.call(this, key, style, options) || this;
	    var selector = options.selector,
	        scoped = options.scoped,
	        sheet = options.sheet,
	        generateId = options.generateId;

	    if (selector) {
	      _this.selectorText = selector;
	    } else if (scoped !== false) {
	      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
	      _this.selectorText = "." + escape(_this.id);
	    }

	    return _this;
	  }
	  /**
	   * Set selector string.
	   * Attention: use this with caution. Most browsers didn't implement
	   * selectorText setter, so this may result in rerendering of entire Style Sheet.
	   */


	  var _proto2 = StyleRule.prototype;
	  /**
	   * Apply rule to an element inline.
	   */

	  _proto2.applyTo = function applyTo(renderable) {
	    var renderer = this.renderer;

	    if (renderer) {
	      var json = this.toJSON();

	      for (var prop in json) {
	        renderer.setProperty(renderable, prop, json[prop]);
	      }
	    }

	    return this;
	  }
	  /**
	   * Returns JSON representation of the rule.
	   * Fallbacks are not supported.
	   * Useful for inline styles.
	   */
	  ;

	  _proto2.toJSON = function toJSON() {
	    var json = {};

	    for (var prop in this.style) {
	      var value = this.style[prop];
	      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
	    }

	    return json;
	  }
	  /**
	   * Generates a CSS string.
	   */
	  ;

	  _proto2.toString = function toString(options) {
	    var sheet = this.options.sheet;
	    var link = sheet ? sheet.options.link : false;
	    var opts = link ? _extends$1({}, options, {
	      allowEmpty: true
	    }) : options;
	    return toCss(this.selectorText, this.style, opts);
	  };

	  _createClass(StyleRule, [{
	    key: "selector",
	    set: function set(selector) {
	      if (selector === this.selectorText) return;
	      this.selectorText = selector;
	      var renderer = this.renderer,
	          renderable = this.renderable;
	      if (!renderable || !renderer) return;
	      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

	      if (!hasChanged) {
	        renderer.replaceRule(renderable, this);
	      }
	    }
	    /**
	     * Get selector string.
	     */
	    ,
	    get: function get() {
	      return this.selectorText;
	    }
	  }]);

	  return StyleRule;
	}(BaseStyleRule);

	var pluginStyleRule = {
	  onCreateRule: function onCreateRule(key, style, options) {
	    if (key[0] === '@' || options.parent && options.parent.type === 'keyframes') {
	      return null;
	    }

	    return new StyleRule(key, style, options);
	  }
	};
	var defaultToStringOptions = {
	  indent: 1,
	  children: true
	};
	var atRegExp = /@([\w-]+)/;
	/**
	 * Conditional rule for @media, @supports
	 */

	var ConditionalRule = /*#__PURE__*/function () {
	  function ConditionalRule(key, styles, options) {
	    this.type = 'conditional';
	    this.isProcessed = false;
	    this.key = key;
	    var atMatch = key.match(atRegExp);
	    this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

	    this.query = options.name || "@" + this.at;
	    this.options = options;
	    this.rules = new RuleList(_extends$1({}, options, {
	      parent: this
	    }));

	    for (var name in styles) {
	      this.rules.add(name, styles[name]);
	    }

	    this.rules.process();
	  }
	  /**
	   * Get a rule.
	   */


	  var _proto = ConditionalRule.prototype;

	  _proto.getRule = function getRule(name) {
	    return this.rules.get(name);
	  }
	  /**
	   * Get index of a rule.
	   */
	  ;

	  _proto.indexOf = function indexOf(rule) {
	    return this.rules.indexOf(rule);
	  }
	  /**
	   * Create and register rule, run plugins.
	   */
	  ;

	  _proto.addRule = function addRule(name, style, options) {
	    var rule = this.rules.add(name, style, options);
	    if (!rule) return null;
	    this.options.jss.plugins.onProcessRule(rule);
	    return rule;
	  }
	  /**
	   * Replace rule, run plugins.
	   */
	  ;

	  _proto.replaceRule = function replaceRule(name, style, options) {
	    var newRule = this.rules.replace(name, style, options);
	    if (newRule) this.options.jss.plugins.onProcessRule(newRule);
	    return newRule;
	  }
	  /**
	   * Generates a CSS string.
	   */
	  ;

	  _proto.toString = function toString(options) {
	    if (options === void 0) {
	      options = defaultToStringOptions;
	    }

	    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
	        linebreak = _getWhitespaceSymbols.linebreak;

	    if (options.indent == null) options.indent = defaultToStringOptions.indent;
	    if (options.children == null) options.children = defaultToStringOptions.children;

	    if (options.children === false) {
	      return this.query + " {}";
	    }

	    var children = this.rules.toString(options);
	    return children ? this.query + " {" + linebreak + children + linebreak + "}" : '';
	  };

	  return ConditionalRule;
	}();

	var keyRegExp = /@media|@supports\s+/;
	var pluginConditionalRule = {
	  onCreateRule: function onCreateRule(key, styles, options) {
	    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
	  }
	};
	var defaultToStringOptions$1 = {
	  indent: 1,
	  children: true
	};
	var nameRegExp = /@keyframes\s+([\w-]+)/;
	/**
	 * Rule for @keyframes
	 */

	var KeyframesRule = /*#__PURE__*/function () {
	  function KeyframesRule(key, frames, options) {
	    this.type = 'keyframes';
	    this.at = '@keyframes';
	    this.isProcessed = false;
	    var nameMatch = key.match(nameRegExp);

	    if (nameMatch && nameMatch[1]) {
	      this.name = nameMatch[1];
	    } else {
	      this.name = 'noname';
	    }

	    this.key = this.type + "-" + this.name;
	    this.options = options;
	    var scoped = options.scoped,
	        sheet = options.sheet,
	        generateId = options.generateId;
	    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
	    this.rules = new RuleList(_extends$1({}, options, {
	      parent: this
	    }));

	    for (var name in frames) {
	      this.rules.add(name, frames[name], _extends$1({}, options, {
	        parent: this
	      }));
	    }

	    this.rules.process();
	  }
	  /**
	   * Generates a CSS string.
	   */


	  var _proto = KeyframesRule.prototype;

	  _proto.toString = function toString(options) {
	    if (options === void 0) {
	      options = defaultToStringOptions$1;
	    }

	    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
	        linebreak = _getWhitespaceSymbols.linebreak;

	    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
	    if (options.children == null) options.children = defaultToStringOptions$1.children;

	    if (options.children === false) {
	      return this.at + " " + this.id + " {}";
	    }

	    var children = this.rules.toString(options);
	    if (children) children = "" + linebreak + children + linebreak;
	    return this.at + " " + this.id + " {" + children + "}";
	  };

	  return KeyframesRule;
	}();

	var keyRegExp$1 = /@keyframes\s+/;
	var refRegExp$1 = /\$([\w-]+)/g;

	var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
	  if (typeof val === 'string') {
	    return val.replace(refRegExp$1, function (match, name) {
	      if (name in keyframes) {
	        return keyframes[name];
	      }
	      return match;
	    });
	  }

	  return val;
	};
	/**
	 * Replace the reference for a animation name.
	 */


	var replaceRef = function replaceRef(style, prop, keyframes) {
	  var value = style[prop];
	  var refKeyframe = findReferencedKeyframe(value, keyframes);

	  if (refKeyframe !== value) {
	    style[prop] = refKeyframe;
	  }
	};

	var pluginKeyframesRule = {
	  onCreateRule: function onCreateRule(key, frames, options) {
	    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
	  },
	  // Animation name ref replacer.
	  onProcessStyle: function onProcessStyle(style, rule, sheet) {
	    if (rule.type !== 'style' || !sheet) return style;
	    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
	    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
	    return style;
	  },
	  onChangeValue: function onChangeValue(val, prop, rule) {
	    var sheet = rule.options.sheet;

	    if (!sheet) {
	      return val;
	    }

	    switch (prop) {
	      case 'animation':
	        return findReferencedKeyframe(val, sheet.keyframes);

	      case 'animation-name':
	        return findReferencedKeyframe(val, sheet.keyframes);

	      default:
	        return val;
	    }
	  }
	};

	var KeyframeRule = /*#__PURE__*/function (_BaseStyleRule) {
	  _inheritsLoose(KeyframeRule, _BaseStyleRule);

	  function KeyframeRule() {
	    return _BaseStyleRule.apply(this, arguments) || this;
	  }

	  var _proto = KeyframeRule.prototype;
	  /**
	   * Generates a CSS string.
	   */

	  _proto.toString = function toString(options) {
	    var sheet = this.options.sheet;
	    var link = sheet ? sheet.options.link : false;
	    var opts = link ? _extends$1({}, options, {
	      allowEmpty: true
	    }) : options;
	    return toCss(this.key, this.style, opts);
	  };

	  return KeyframeRule;
	}(BaseStyleRule);

	var pluginKeyframeRule = {
	  onCreateRule: function onCreateRule(key, style, options) {
	    if (options.parent && options.parent.type === 'keyframes') {
	      return new KeyframeRule(key, style, options);
	    }

	    return null;
	  }
	};

	var FontFaceRule = /*#__PURE__*/function () {
	  function FontFaceRule(key, style, options) {
	    this.type = 'font-face';
	    this.at = '@font-face';
	    this.isProcessed = false;
	    this.key = key;
	    this.style = style;
	    this.options = options;
	  }
	  /**
	   * Generates a CSS string.
	   */


	  var _proto = FontFaceRule.prototype;

	  _proto.toString = function toString(options) {
	    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
	        linebreak = _getWhitespaceSymbols.linebreak;

	    if (Array.isArray(this.style)) {
	      var str = '';

	      for (var index = 0; index < this.style.length; index++) {
	        str += toCss(this.at, this.style[index]);
	        if (this.style[index + 1]) str += linebreak;
	      }

	      return str;
	    }

	    return toCss(this.at, this.style, options);
	  };

	  return FontFaceRule;
	}();

	var keyRegExp$2 = /@font-face/;
	var pluginFontFaceRule = {
	  onCreateRule: function onCreateRule(key, style, options) {
	    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
	  }
	};

	var ViewportRule = /*#__PURE__*/function () {
	  function ViewportRule(key, style, options) {
	    this.type = 'viewport';
	    this.at = '@viewport';
	    this.isProcessed = false;
	    this.key = key;
	    this.style = style;
	    this.options = options;
	  }
	  /**
	   * Generates a CSS string.
	   */


	  var _proto = ViewportRule.prototype;

	  _proto.toString = function toString(options) {
	    return toCss(this.key, this.style, options);
	  };

	  return ViewportRule;
	}();

	var pluginViewportRule = {
	  onCreateRule: function onCreateRule(key, style, options) {
	    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
	  }
	};

	var SimpleRule = /*#__PURE__*/function () {
	  function SimpleRule(key, value, options) {
	    this.type = 'simple';
	    this.isProcessed = false;
	    this.key = key;
	    this.value = value;
	    this.options = options;
	  }
	  /**
	   * Generates a CSS string.
	   */
	  // eslint-disable-next-line no-unused-vars


	  var _proto = SimpleRule.prototype;

	  _proto.toString = function toString(options) {
	    if (Array.isArray(this.value)) {
	      var str = '';

	      for (var index = 0; index < this.value.length; index++) {
	        str += this.key + " " + this.value[index] + ";";
	        if (this.value[index + 1]) str += '\n';
	      }

	      return str;
	    }

	    return this.key + " " + this.value + ";";
	  };

	  return SimpleRule;
	}();

	var keysMap = {
	  '@charset': true,
	  '@import': true,
	  '@namespace': true
	};
	var pluginSimpleRule = {
	  onCreateRule: function onCreateRule(key, value, options) {
	    return key in keysMap ? new SimpleRule(key, value, options) : null;
	  }
	};
	var plugins$1 = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
	var defaultUpdateOptions = {
	  process: true
	};
	var forceUpdateOptions = {
	  force: true,
	  process: true
	  /**
	   * Contains rules objects and allows adding/removing etc.
	   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
	   */

	};

	var RuleList = /*#__PURE__*/function () {
	  // Rules registry for access by .get() method.
	  // It contains the same rule registered by name and by selector.
	  // Original styles object.
	  // Used to ensure correct rules order.
	  function RuleList(options) {
	    this.map = {};
	    this.raw = {};
	    this.index = [];
	    this.counter = 0;
	    this.options = options;
	    this.classes = options.classes;
	    this.keyframes = options.keyframes;
	  }
	  /**
	   * Create and register rule.
	   *
	   * Will not render after Style Sheet was rendered the first time.
	   */


	  var _proto = RuleList.prototype;

	  _proto.add = function add(name, decl, ruleOptions) {
	    var _this$options = this.options,
	        parent = _this$options.parent,
	        sheet = _this$options.sheet,
	        jss = _this$options.jss,
	        Renderer = _this$options.Renderer,
	        generateId = _this$options.generateId,
	        scoped = _this$options.scoped;

	    var options = _extends$1({
	      classes: this.classes,
	      parent: parent,
	      sheet: sheet,
	      jss: jss,
	      Renderer: Renderer,
	      generateId: generateId,
	      scoped: scoped,
	      name: name,
	      keyframes: this.keyframes,
	      selector: undefined
	    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
	    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
	    // we need to make the key unique within this RuleList instance scope.


	    var key = name;

	    if (name in this.raw) {
	      key = name + "-d" + this.counter++;
	    } // We need to save the original decl before creating the rule
	    // because cache plugin needs to use it as a key to return a cached rule.


	    this.raw[key] = decl;

	    if (key in this.classes) {
	      // E.g. rules inside of @media container
	      options.selector = "." + escape(this.classes[key]);
	    }

	    var rule = createRule(key, decl, options);
	    if (!rule) return null;
	    this.register(rule);
	    var index = options.index === undefined ? this.index.length : options.index;
	    this.index.splice(index, 0, rule);
	    return rule;
	  }
	  /**
	   * Replace rule.
	   * Create a new rule and remove old one instead of overwriting
	   * because we want to invoke onCreateRule hook to make plugins work.
	   */
	  ;

	  _proto.replace = function replace(name, decl, ruleOptions) {
	    var oldRule = this.get(name);
	    var oldIndex = this.index.indexOf(oldRule);

	    if (oldRule) {
	      this.remove(oldRule);
	    }

	    var options = ruleOptions;
	    if (oldIndex !== -1) options = _extends$1({}, ruleOptions, {
	      index: oldIndex
	    });
	    return this.add(name, decl, options);
	  }
	  /**
	   * Get a rule by name or selector.
	   */
	  ;

	  _proto.get = function get(nameOrSelector) {
	    return this.map[nameOrSelector];
	  }
	  /**
	   * Delete a rule.
	   */
	  ;

	  _proto.remove = function remove(rule) {
	    this.unregister(rule);
	    delete this.raw[rule.key];
	    this.index.splice(this.index.indexOf(rule), 1);
	  }
	  /**
	   * Get index of a rule.
	   */
	  ;

	  _proto.indexOf = function indexOf(rule) {
	    return this.index.indexOf(rule);
	  }
	  /**
	   * Run `onProcessRule()` plugins on every rule.
	   */
	  ;

	  _proto.process = function process() {
	    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
	    // we end up with very hard-to-track-down side effects.

	    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
	  }
	  /**
	   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
	   */
	  ;

	  _proto.register = function register(rule) {
	    this.map[rule.key] = rule;

	    if (rule instanceof StyleRule) {
	      this.map[rule.selector] = rule;
	      if (rule.id) this.classes[rule.key] = rule.id;
	    } else if (rule instanceof KeyframesRule && this.keyframes) {
	      this.keyframes[rule.name] = rule.id;
	    }
	  }
	  /**
	   * Unregister a rule.
	   */
	  ;

	  _proto.unregister = function unregister(rule) {
	    delete this.map[rule.key];

	    if (rule instanceof StyleRule) {
	      delete this.map[rule.selector];
	      delete this.classes[rule.key];
	    } else if (rule instanceof KeyframesRule) {
	      delete this.keyframes[rule.name];
	    }
	  }
	  /**
	   * Update the function values with a new data.
	   */
	  ;

	  _proto.update = function update() {
	    var name;
	    var data;
	    var options;

	    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
	      name = arguments.length <= 0 ? undefined : arguments[0];
	      data = arguments.length <= 1 ? undefined : arguments[1];
	      options = arguments.length <= 2 ? undefined : arguments[2];
	    } else {
	      data = arguments.length <= 0 ? undefined : arguments[0];
	      options = arguments.length <= 1 ? undefined : arguments[1];
	      name = null;
	    }

	    if (name) {
	      this.updateOne(this.get(name), data, options);
	    } else {
	      for (var index = 0; index < this.index.length; index++) {
	        this.updateOne(this.index[index], data, options);
	      }
	    }
	  }
	  /**
	   * Execute plugins, update rule props.
	   */
	  ;

	  _proto.updateOne = function updateOne(rule, data, options) {
	    if (options === void 0) {
	      options = defaultUpdateOptions;
	    }

	    var _this$options2 = this.options,
	        plugins = _this$options2.jss.plugins,
	        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

	    if (rule.rules instanceof RuleList) {
	      rule.rules.update(data, options);
	      return;
	    }

	    var style = rule.style;
	    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

	    if (options.process && style && style !== rule.style) {
	      // We need to run the plugins in case new `style` relies on syntax plugins.
	      plugins.onProcessStyle(rule.style, rule, sheet); // Update and add props.

	      for (var prop in rule.style) {
	        var nextValue = rule.style[prop];
	        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
	        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

	        if (nextValue !== prevValue) {
	          rule.prop(prop, nextValue, forceUpdateOptions);
	        }
	      } // Remove props.


	      for (var _prop in style) {
	        var _nextValue = rule.style[_prop];
	        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
	        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

	        if (_nextValue == null && _nextValue !== _prevValue) {
	          rule.prop(_prop, null, forceUpdateOptions);
	        }
	      }
	    }
	  }
	  /**
	   * Convert rules to a CSS string.
	   */
	  ;

	  _proto.toString = function toString(options) {
	    var str = '';
	    var sheet = this.options.sheet;
	    var link = sheet ? sheet.options.link : false;

	    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
	        linebreak = _getWhitespaceSymbols.linebreak;

	    for (var index = 0; index < this.index.length; index++) {
	      var rule = this.index[index];
	      var css = rule.toString(options); // No need to render an empty rule.

	      if (!css && !link) continue;
	      if (str) str += linebreak;
	      str += css;
	    }

	    return str;
	  };

	  return RuleList;
	}();

	var StyleSheet = /*#__PURE__*/function () {
	  function StyleSheet(styles, options) {
	    this.attached = false;
	    this.deployed = false;
	    this.classes = {};
	    this.keyframes = {};
	    this.options = _extends$1({}, options, {
	      sheet: this,
	      parent: this,
	      classes: this.classes,
	      keyframes: this.keyframes
	    });

	    if (options.Renderer) {
	      this.renderer = new options.Renderer(this);
	    }

	    this.rules = new RuleList(this.options);

	    for (var name in styles) {
	      this.rules.add(name, styles[name]);
	    }

	    this.rules.process();
	  }
	  /**
	   * Attach renderable to the render tree.
	   */


	  var _proto = StyleSheet.prototype;

	  _proto.attach = function attach() {
	    if (this.attached) return this;
	    if (this.renderer) this.renderer.attach();
	    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

	    if (!this.deployed) this.deploy();
	    return this;
	  }
	  /**
	   * Remove renderable from render tree.
	   */
	  ;

	  _proto.detach = function detach() {
	    if (!this.attached) return this;
	    if (this.renderer) this.renderer.detach();
	    this.attached = false;
	    return this;
	  }
	  /**
	   * Add a rule to the current stylesheet.
	   * Will insert a rule also after the stylesheet has been rendered first time.
	   */
	  ;

	  _proto.addRule = function addRule(name, decl, options) {
	    var queue = this.queue; // Plugins can create rules.
	    // In order to preserve the right order, we need to queue all `.addRule` calls,
	    // which happen after the first `rules.add()` call.

	    if (this.attached && !queue) this.queue = [];
	    var rule = this.rules.add(name, decl, options);
	    if (!rule) return null;
	    this.options.jss.plugins.onProcessRule(rule);

	    if (this.attached) {
	      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
	      // It will be inserted all together when .attach is called.

	      if (queue) queue.push(rule);else {
	        this.insertRule(rule);

	        if (this.queue) {
	          this.queue.forEach(this.insertRule, this);
	          this.queue = undefined;
	        }
	      }
	      return rule;
	    } // We can't add rules to a detached style node.
	    // We will redeploy the sheet once user will attach it.


	    this.deployed = false;
	    return rule;
	  }
	  /**
	   * Replace a rule in the current stylesheet.
	   */
	  ;

	  _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
	    var oldRule = this.rules.get(nameOrSelector);
	    if (!oldRule) return this.addRule(nameOrSelector, decl, options);
	    var newRule = this.rules.replace(nameOrSelector, decl, options);

	    if (newRule) {
	      this.options.jss.plugins.onProcessRule(newRule);
	    }

	    if (this.attached) {
	      if (!this.deployed) return newRule; // Don't replace / delete rule directly if there is no stringified version yet.
	      // It will be inserted all together when .attach is called.

	      if (this.renderer) {
	        if (!newRule) {
	          this.renderer.deleteRule(oldRule);
	        } else if (oldRule.renderable) {
	          this.renderer.replaceRule(oldRule.renderable, newRule);
	        }
	      }

	      return newRule;
	    } // We can't replace rules to a detached style node.
	    // We will redeploy the sheet once user will attach it.


	    this.deployed = false;
	    return newRule;
	  }
	  /**
	   * Insert rule into the StyleSheet
	   */
	  ;

	  _proto.insertRule = function insertRule(rule) {
	    if (this.renderer) {
	      this.renderer.insertRule(rule);
	    }
	  }
	  /**
	   * Create and add rules.
	   * Will render also after Style Sheet was rendered the first time.
	   */
	  ;

	  _proto.addRules = function addRules(styles, options) {
	    var added = [];

	    for (var name in styles) {
	      var rule = this.addRule(name, styles[name], options);
	      if (rule) added.push(rule);
	    }

	    return added;
	  }
	  /**
	   * Get a rule by name or selector.
	   */
	  ;

	  _proto.getRule = function getRule(nameOrSelector) {
	    return this.rules.get(nameOrSelector);
	  }
	  /**
	   * Delete a rule by name.
	   * Returns `true`: if rule has been deleted from the DOM.
	   */
	  ;

	  _proto.deleteRule = function deleteRule(name) {
	    var rule = typeof name === 'object' ? name : this.rules.get(name);

	    if (!rule || // Style sheet was created without link: true and attached, in this case we
	    // won't be able to remove the CSS rule from the DOM.
	    this.attached && !rule.renderable) {
	      return false;
	    }

	    this.rules.remove(rule);

	    if (this.attached && rule.renderable && this.renderer) {
	      return this.renderer.deleteRule(rule.renderable);
	    }

	    return true;
	  }
	  /**
	   * Get index of a rule.
	   */
	  ;

	  _proto.indexOf = function indexOf(rule) {
	    return this.rules.indexOf(rule);
	  }
	  /**
	   * Deploy pure CSS string to a renderable.
	   */
	  ;

	  _proto.deploy = function deploy() {
	    if (this.renderer) this.renderer.deploy();
	    this.deployed = true;
	    return this;
	  }
	  /**
	   * Update the function values with a new data.
	   */
	  ;

	  _proto.update = function update() {
	    var _this$rules;

	    (_this$rules = this.rules).update.apply(_this$rules, arguments);

	    return this;
	  }
	  /**
	   * Updates a single rule.
	   */
	  ;

	  _proto.updateOne = function updateOne(rule, data, options) {
	    this.rules.updateOne(rule, data, options);
	    return this;
	  }
	  /**
	   * Convert rules to a CSS string.
	   */
	  ;

	  _proto.toString = function toString(options) {
	    return this.rules.toString(options);
	  };

	  return StyleSheet;
	}();

	var PluginsRegistry = /*#__PURE__*/function () {
	  function PluginsRegistry() {
	    this.plugins = {
	      internal: [],
	      external: []
	    };
	    this.registry = {};
	  }

	  var _proto = PluginsRegistry.prototype;
	  /**
	   * Call `onCreateRule` hooks and return an object if returned by a hook.
	   */

	  _proto.onCreateRule = function onCreateRule(name, decl, options) {
	    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
	      var rule = this.registry.onCreateRule[i](name, decl, options);
	      if (rule) return rule;
	    }

	    return null;
	  }
	  /**
	   * Call `onProcessRule` hooks.
	   */
	  ;

	  _proto.onProcessRule = function onProcessRule(rule) {
	    if (rule.isProcessed) return;
	    var sheet = rule.options.sheet;

	    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
	      this.registry.onProcessRule[i](rule, sheet);
	    }

	    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
	    rule.isProcessed = true;
	  }
	  /**
	   * Call `onProcessStyle` hooks.
	   */
	  ;

	  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
	    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
	      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
	    }
	  }
	  /**
	   * Call `onProcessSheet` hooks.
	   */
	  ;

	  _proto.onProcessSheet = function onProcessSheet(sheet) {
	    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
	      this.registry.onProcessSheet[i](sheet);
	    }
	  }
	  /**
	   * Call `onUpdate` hooks.
	   */
	  ;

	  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
	    for (var i = 0; i < this.registry.onUpdate.length; i++) {
	      this.registry.onUpdate[i](data, rule, sheet, options);
	    }
	  }
	  /**
	   * Call `onChangeValue` hooks.
	   */
	  ;

	  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
	    var processedValue = value;

	    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
	      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
	    }

	    return processedValue;
	  }
	  /**
	   * Register a plugin.
	   */
	  ;

	  _proto.use = function use(newPlugin, options) {
	    if (options === void 0) {
	      options = {
	        queue: 'external'
	      };
	    }

	    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

	    if (plugins.indexOf(newPlugin) !== -1) {
	      return;
	    }

	    plugins.push(newPlugin);
	    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
	      for (var name in plugin) {
	        if (name in registry) {
	          registry[name].push(plugin[name]);
	        }
	      }

	      return registry;
	    }, {
	      onCreateRule: [],
	      onProcessRule: [],
	      onProcessStyle: [],
	      onProcessSheet: [],
	      onChangeValue: [],
	      onUpdate: []
	    });
	  };

	  return PluginsRegistry;
	}();
	/**
	 * Sheets registry to access all instances in one place.
	 */


	var SheetsRegistry = /*#__PURE__*/function () {
	  function SheetsRegistry() {
	    this.registry = [];
	  }

	  var _proto = SheetsRegistry.prototype;
	  /**
	   * Register a Style Sheet.
	   */

	  _proto.add = function add(sheet) {
	    var registry = this.registry;
	    var index = sheet.options.index;
	    if (registry.indexOf(sheet) !== -1) return;

	    if (registry.length === 0 || index >= this.index) {
	      registry.push(sheet);
	      return;
	    } // Find a position.


	    for (var i = 0; i < registry.length; i++) {
	      if (registry[i].options.index > index) {
	        registry.splice(i, 0, sheet);
	        return;
	      }
	    }
	  }
	  /**
	   * Reset the registry.
	   */
	  ;

	  _proto.reset = function reset() {
	    this.registry = [];
	  }
	  /**
	   * Remove a Style Sheet.
	   */
	  ;

	  _proto.remove = function remove(sheet) {
	    var index = this.registry.indexOf(sheet);
	    this.registry.splice(index, 1);
	  }
	  /**
	   * Convert all attached sheets to a CSS string.
	   */
	  ;

	  _proto.toString = function toString(_temp) {
	    var _ref = _temp === void 0 ? {} : _temp,
	        attached = _ref.attached,
	        options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

	    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
	        linebreak = _getWhitespaceSymbols.linebreak;

	    var css = '';

	    for (var i = 0; i < this.registry.length; i++) {
	      var sheet = this.registry[i];

	      if (attached != null && sheet.attached !== attached) {
	        continue;
	      }

	      if (css) css += linebreak;
	      css += sheet.toString(options);
	    }

	    return css;
	  };

	  _createClass(SheetsRegistry, [{
	    key: "index",

	    /**
	     * Current highest index number.
	     */
	    get: function get() {
	      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
	    }
	  }]);

	  return SheetsRegistry;
	}();
	/**
	 * This is a global sheets registry. Only DomRenderer will add sheets to it.
	 * On the server one should use an own SheetsRegistry instance and add the
	 * sheets to it, because you need to make sure to create a new registry for
	 * each request in order to not leak sheets across requests.
	 */


	var sheets = new SheetsRegistry();
	/* eslint-disable */

	/**
	 * Now that `globalThis` is available on most platforms
	 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
	 * we check for `globalThis` first. `globalThis` is necessary for jss
	 * to run in Agoric's secure version of JavaScript (SES). Under SES,
	 * `globalThis` exists, but `window`, `self`, and `Function('return
	 * this')()` are all undefined for security reasons.
	 *
	 * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	 */

	var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();
	var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
	if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
	// the current version with just one short number and use it for classes generation
	// we use a counter. Also it is more accurate, because user can manually reevaluate
	// the module.

	var moduleId = globalThis$1[ns]++;
	/**
	 * Returns a function which generates unique class names based on counters.
	 * When new generator function is created, rule counter is reseted.
	 * We need to reset the rule counter for SSR for each request.
	 */

	var createGenerateId = function createGenerateId(options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var ruleCounter = 0;

	  var generateId = function generateId(rule, sheet) {
	    ruleCounter += 1;

	    var jssId = '';
	    var prefix = '';

	    if (sheet) {
	      if (sheet.options.classNamePrefix) {
	        prefix = sheet.options.classNamePrefix;
	      }

	      if (sheet.options.jss.id != null) {
	        jssId = String(sheet.options.jss.id);
	      }
	    }

	    if (options.minify) {
	      // Using "c" because a number can't be the first char in a class name.
	      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
	    }

	    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
	  };

	  return generateId;
	};
	/**
	 * Cache the value from the first time a function is called.
	 */


	var memoize = function memoize(fn) {
	  var value;
	  return function () {
	    if (!value) value = fn();
	    return value;
	  };
	};
	/**
	 * Get a style property value.
	 */


	var getPropertyValue = function getPropertyValue(cssRule, prop) {
	  try {
	    // Support CSSTOM.
	    if (cssRule.attributeStyleMap) {
	      return cssRule.attributeStyleMap.get(prop);
	    }

	    return cssRule.style.getPropertyValue(prop);
	  } catch (err) {
	    // IE may throw if property is unknown.
	    return '';
	  }
	};
	/**
	 * Set a style property.
	 */


	var setProperty = function setProperty(cssRule, prop, value) {
	  try {
	    var cssValue = value;

	    if (Array.isArray(value)) {
	      cssValue = toCssValue(value, true);

	      if (value[value.length - 1] === '!important') {
	        cssRule.style.setProperty(prop, cssValue, 'important');
	        return true;
	      }
	    } // Support CSSTOM.


	    if (cssRule.attributeStyleMap) {
	      cssRule.attributeStyleMap.set(prop, cssValue);
	    } else {
	      cssRule.style.setProperty(prop, cssValue);
	    }
	  } catch (err) {
	    // IE may throw if property is unknown.
	    return false;
	  }

	  return true;
	};
	/**
	 * Remove a style property.
	 */


	var removeProperty = function removeProperty(cssRule, prop) {
	  try {
	    // Support CSSTOM.
	    if (cssRule.attributeStyleMap) {
	      cssRule.attributeStyleMap.delete(prop);
	    } else {
	      cssRule.style.removeProperty(prop);
	    }
	  } catch (err) {
	  }
	};
	/**
	 * Set the selector.
	 */


	var setSelector = function setSelector(cssRule, selectorText) {
	  cssRule.selectorText = selectorText; // Return false if setter was not successful.
	  // Currently works in chrome only.

	  return cssRule.selectorText === selectorText;
	};
	/**
	 * Gets the `head` element upon the first call and caches it.
	 * We assume it can't be null.
	 */


	var getHead = memoize(function () {
	  return document.querySelector('head');
	});
	/**
	 * Find attached sheet with an index higher than the passed one.
	 */

	function findHigherSheet(registry, options) {
	  for (var i = 0; i < registry.length; i++) {
	    var sheet = registry[i];

	    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
	      return sheet;
	    }
	  }

	  return null;
	}
	/**
	 * Find attached sheet with the highest index.
	 */


	function findHighestSheet(registry, options) {
	  for (var i = registry.length - 1; i >= 0; i--) {
	    var sheet = registry[i];

	    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
	      return sheet;
	    }
	  }

	  return null;
	}
	/**
	 * Find a comment with "jss" inside.
	 */


	function findCommentNode(text) {
	  var head = getHead();

	  for (var i = 0; i < head.childNodes.length; i++) {
	    var node = head.childNodes[i];

	    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
	      return node;
	    }
	  }

	  return null;
	}
	/**
	 * Find a node before which we can insert the sheet.
	 */


	function findPrevNode(options) {
	  var registry = sheets.registry;

	  if (registry.length > 0) {
	    // Try to insert before the next higher sheet.
	    var sheet = findHigherSheet(registry, options);

	    if (sheet && sheet.renderer) {
	      return {
	        parent: sheet.renderer.element.parentNode,
	        node: sheet.renderer.element
	      };
	    } // Otherwise insert after the last attached.


	    sheet = findHighestSheet(registry, options);

	    if (sheet && sheet.renderer) {
	      return {
	        parent: sheet.renderer.element.parentNode,
	        node: sheet.renderer.element.nextSibling
	      };
	    }
	  } // Try to find a comment placeholder if registry is empty.


	  var insertionPoint = options.insertionPoint;

	  if (insertionPoint && typeof insertionPoint === 'string') {
	    var comment = findCommentNode(insertionPoint);

	    if (comment) {
	      return {
	        parent: comment.parentNode,
	        node: comment.nextSibling
	      };
	    } // If user specifies an insertion point and it can't be found in the document -
	  }

	  return false;
	}
	/**
	 * Insert style element into the DOM.
	 */


	function insertStyle(style, options) {
	  var insertionPoint = options.insertionPoint;
	  var nextNode = findPrevNode(options);

	  if (nextNode !== false && nextNode.parent) {
	    nextNode.parent.insertBefore(style, nextNode.node);
	    return;
	  } // Works with iframes and any node types.


	  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
	    var insertionPointElement = insertionPoint;
	    var parentNode = insertionPointElement.parentNode;
	    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
	    return;
	  }

	  getHead().appendChild(style);
	}
	/**
	 * Read jss nonce setting from the page if the user has set it.
	 */


	var getNonce = memoize(function () {
	  var node = document.querySelector('meta[property="csp-nonce"]');
	  return node ? node.getAttribute('content') : null;
	});

	var _insertRule = function insertRule(container, rule, index) {
	  try {
	    if ('insertRule' in container) {
	      container.insertRule(rule, index);
	    } // Keyframes rule.
	    else if ('appendRule' in container) {
	      container.appendRule(rule);
	    }
	  } catch (err) {
	    return false;
	  }

	  return container.cssRules[index];
	};

	var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
	  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

	  if (index === undefined || index > maxIndex) {
	    // eslint-disable-next-line no-param-reassign
	    return maxIndex;
	  }

	  return index;
	};

	var createStyle = function createStyle() {
	  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
	  // insert rules after we insert the style tag.
	  // It seems to kick-off the source order specificity algorithm.

	  el.textContent = '\n';
	  return el;
	};

	var DomRenderer = /*#__PURE__*/function () {
	  // Will be empty if link: true option is not set, because
	  // it is only for use together with insertRule API.
	  function DomRenderer(sheet) {
	    this.getPropertyValue = getPropertyValue;
	    this.setProperty = setProperty;
	    this.removeProperty = removeProperty;
	    this.setSelector = setSelector;
	    this.hasInsertedRules = false;
	    this.cssRules = []; // There is no sheet when the renderer is used from a standalone StyleRule.

	    if (sheet) sheets.add(sheet);
	    this.sheet = sheet;

	    var _ref = this.sheet ? this.sheet.options : {},
	        media = _ref.media,
	        meta = _ref.meta,
	        element = _ref.element;

	    this.element = element || createStyle();
	    this.element.setAttribute('data-jss', '');
	    if (media) this.element.setAttribute('media', media);
	    if (meta) this.element.setAttribute('data-meta', meta);
	    var nonce = getNonce();
	    if (nonce) this.element.setAttribute('nonce', nonce);
	  }
	  /**
	   * Insert style element into render tree.
	   */


	  var _proto = DomRenderer.prototype;

	  _proto.attach = function attach() {
	    // In the case the element node is external and it is already in the DOM.
	    if (this.element.parentNode || !this.sheet) return;
	    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
	    // most browsers create a new CSSStyleSheet, except of all IEs.

	    var deployed = Boolean(this.sheet && this.sheet.deployed);

	    if (this.hasInsertedRules && deployed) {
	      this.hasInsertedRules = false;
	      this.deploy();
	    }
	  }
	  /**
	   * Remove style element from render tree.
	   */
	  ;

	  _proto.detach = function detach() {
	    if (!this.sheet) return;
	    var parentNode = this.element.parentNode;
	    if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
	    // Though IE will keep them and we need a consistent behavior.

	    if (this.sheet.options.link) {
	      this.cssRules = [];
	      this.element.textContent = '\n';
	    }
	  }
	  /**
	   * Inject CSS string into element.
	   */
	  ;

	  _proto.deploy = function deploy() {
	    var sheet = this.sheet;
	    if (!sheet) return;

	    if (sheet.options.link) {
	      this.insertRules(sheet.rules);
	      return;
	    }

	    this.element.textContent = "\n" + sheet.toString() + "\n";
	  }
	  /**
	   * Insert RuleList into an element.
	   */
	  ;

	  _proto.insertRules = function insertRules(rules, nativeParent) {
	    for (var i = 0; i < rules.index.length; i++) {
	      this.insertRule(rules.index[i], i, nativeParent);
	    }
	  }
	  /**
	   * Insert a rule into element.
	   */
	  ;

	  _proto.insertRule = function insertRule(rule, index, nativeParent) {
	    if (nativeParent === void 0) {
	      nativeParent = this.element.sheet;
	    }

	    if (rule.rules) {
	      var parent = rule;
	      var latestNativeParent = nativeParent;

	      if (rule.type === 'conditional' || rule.type === 'keyframes') {
	        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


	        latestNativeParent = _insertRule(nativeParent, parent.toString({
	          children: false
	        }), _insertionIndex);

	        if (latestNativeParent === false) {
	          return false;
	        }

	        this.refCssRule(rule, _insertionIndex, latestNativeParent);
	      }

	      this.insertRules(parent.rules, latestNativeParent);
	      return latestNativeParent;
	    }

	    var ruleStr = rule.toString();
	    if (!ruleStr) return false;
	    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

	    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

	    if (nativeRule === false) {
	      return false;
	    }

	    this.hasInsertedRules = true;
	    this.refCssRule(rule, insertionIndex, nativeRule);
	    return nativeRule;
	  };

	  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
	    rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
	    // like rules inside media queries or keyframes

	    if (rule.options.parent instanceof StyleSheet) {
	      this.cssRules.splice(index, 0, cssRule);
	    }
	  }
	  /**
	   * Delete a rule.
	   */
	  ;

	  _proto.deleteRule = function deleteRule(cssRule) {
	    var sheet = this.element.sheet;
	    var index = this.indexOf(cssRule);
	    if (index === -1) return false;
	    sheet.deleteRule(index);
	    this.cssRules.splice(index, 1);
	    return true;
	  }
	  /**
	   * Get index of a CSS Rule.
	   */
	  ;

	  _proto.indexOf = function indexOf(cssRule) {
	    return this.cssRules.indexOf(cssRule);
	  }
	  /**
	   * Generate a new CSS rule and replace the existing one.
	   */
	  ;

	  _proto.replaceRule = function replaceRule(cssRule, rule) {
	    var index = this.indexOf(cssRule);
	    if (index === -1) return false;
	    this.element.sheet.deleteRule(index);
	    this.cssRules.splice(index, 1);
	    return this.insertRule(rule, index);
	  }
	  /**
	   * Get all rules elements.
	   */
	  ;

	  _proto.getRules = function getRules() {
	    return this.element.sheet.cssRules;
	  };

	  return DomRenderer;
	}();

	var instanceCounter = 0;

	var Jss = /*#__PURE__*/function () {
	  function Jss(options) {
	    this.id = instanceCounter++;
	    this.version = "10.9.0";
	    this.plugins = new PluginsRegistry();
	    this.options = {
	      id: {
	        minify: false
	      },
	      createGenerateId: createGenerateId,
	      Renderer: isBrowser ? DomRenderer : null,
	      plugins: []
	    };
	    this.generateId = createGenerateId({
	      minify: false
	    });

	    for (var i = 0; i < plugins$1.length; i++) {
	      this.plugins.use(plugins$1[i], {
	        queue: 'internal'
	      });
	    }

	    this.setup(options);
	  }
	  /**
	   * Prepares various options, applies plugins.
	   * Should not be used twice on the same instance, because there is no plugins
	   * deduplication logic.
	   */


	  var _proto = Jss.prototype;

	  _proto.setup = function setup(options) {
	    if (options === void 0) {
	      options = {};
	    }

	    if (options.createGenerateId) {
	      this.options.createGenerateId = options.createGenerateId;
	    }

	    if (options.id) {
	      this.options.id = _extends$1({}, this.options.id, options.id);
	    }

	    if (options.createGenerateId || options.id) {
	      this.generateId = this.options.createGenerateId(this.options.id);
	    }

	    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

	    if ('Renderer' in options) {
	      this.options.Renderer = options.Renderer;
	    } // eslint-disable-next-line prefer-spread


	    if (options.plugins) this.use.apply(this, options.plugins);
	    return this;
	  }
	  /**
	   * Create a Style Sheet.
	   */
	  ;

	  _proto.createStyleSheet = function createStyleSheet(styles, options) {
	    if (options === void 0) {
	      options = {};
	    }

	    var _options = options,
	        index = _options.index;

	    if (typeof index !== 'number') {
	      index = sheets.index === 0 ? 0 : sheets.index + 1;
	    }

	    var sheet = new StyleSheet(styles, _extends$1({}, options, {
	      jss: this,
	      generateId: options.generateId || this.generateId,
	      insertionPoint: this.options.insertionPoint,
	      Renderer: this.options.Renderer,
	      index: index
	    }));
	    this.plugins.onProcessSheet(sheet);
	    return sheet;
	  }
	  /**
	   * Detach the Style Sheet and remove it from the registry.
	   */
	  ;

	  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
	    sheet.detach();
	    sheets.remove(sheet);
	    return this;
	  }
	  /**
	   * Create a rule without a Style Sheet.
	   * [Deprecated] will be removed in the next major version.
	   */
	  ;

	  _proto.createRule = function createRule$1(name, style, options) {
	    if (style === void 0) {
	      style = {};
	    }

	    if (options === void 0) {
	      options = {};
	    } // Enable rule without name for inline styles.


	    if (typeof name === 'object') {
	      return this.createRule(undefined, name, style);
	    }

	    var ruleOptions = _extends$1({}, options, {
	      name: name,
	      jss: this,
	      Renderer: this.options.Renderer
	    });

	    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
	    if (!ruleOptions.classes) ruleOptions.classes = {};
	    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};
	    var rule = createRule(name, style, ruleOptions);
	    if (rule) this.plugins.onProcessRule(rule);
	    return rule;
	  }
	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   */
	  ;

	  _proto.use = function use() {
	    var _this = this;

	    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
	      plugins[_key] = arguments[_key];
	    }

	    plugins.forEach(function (plugin) {
	      _this.plugins.use(plugin);
	    });
	    return this;
	  };

	  return Jss;
	}();

	var createJss = function createJss(options) {
	  return new Jss(options);
	};
	/**
	* Export a constant indicating if this browser has CSSTOM support.
	* https://developers.google.com/web/updates/2018/03/cssom
	*/


	var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;
	/**
	 * Extracts a styles object with only props that contain function values.
	 */

	function getDynamicStyles(styles) {
	  var to = null;

	  for (var key in styles) {
	    var value = styles[key];
	    var type = typeof value;

	    if (type === 'function') {
	      if (!to) to = {};
	      to[key] = value;
	    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
	      var extracted = getDynamicStyles(value);

	      if (extracted) {
	        if (!to) to = {};
	        to[key] = extracted;
	      }
	    }
	  }

	  return to;
	}
	/**
	 * A better abstraction over CSS.
	 *
	 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
	 * @website https://github.com/cssinjs/jss
	 * @license MIT
	 */


	createJss();

	var now = Date.now();
	var fnValuesNs = "fnValues" + now;
	var fnRuleNs = "fnStyle" + ++now;

	var functionPlugin = function functionPlugin() {
	  return {
	    onCreateRule: function onCreateRule(name, decl, options) {
	      if (typeof decl !== 'function') return null;
	      var rule = createRule(name, {}, options);
	      rule[fnRuleNs] = decl;
	      return rule;
	    },
	    onProcessStyle: function onProcessStyle(style, rule) {
	      // We need to extract function values from the declaration, so that we can keep core unaware of them.
	      // We need to do that only once.
	      // We don't need to extract functions on each style update, since this can happen only once.
	      // We don't support function values inside of function rules.
	      if (fnValuesNs in rule || fnRuleNs in rule) return style;
	      var fnValues = {};

	      for (var prop in style) {
	        var value = style[prop];
	        if (typeof value !== 'function') continue;
	        delete style[prop];
	        fnValues[prop] = value;
	      }

	      rule[fnValuesNs] = fnValues;
	      return style;
	    },
	    onUpdate: function onUpdate(data, rule, sheet, options) {
	      var styleRule = rule;
	      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
	      // will be returned from that function.

	      if (fnRule) {
	        // Empty object will remove all currently defined props
	        // in case function rule returns a falsy value.
	        styleRule.style = fnRule(data) || {};
	      }

	      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

	      if (fnValues) {
	        for (var _prop in fnValues) {
	          styleRule.prop(_prop, fnValues[_prop](data), options);
	        }
	      }
	    }
	  };
	};

	var functions = functionPlugin;

	var at = '@global';
	var atPrefix = '@global ';

	var GlobalContainerRule = /*#__PURE__*/function () {
	  function GlobalContainerRule(key, styles, options) {
	    this.type = 'global';
	    this.at = at;
	    this.isProcessed = false;
	    this.key = key;
	    this.options = options;
	    this.rules = new RuleList(_extends$1({}, options, {
	      parent: this
	    }));

	    for (var selector in styles) {
	      this.rules.add(selector, styles[selector]);
	    }

	    this.rules.process();
	  }
	  /**
	   * Get a rule.
	   */


	  var _proto = GlobalContainerRule.prototype;

	  _proto.getRule = function getRule(name) {
	    return this.rules.get(name);
	  }
	  /**
	   * Create and register rule, run plugins.
	   */
	  ;

	  _proto.addRule = function addRule(name, style, options) {
	    var rule = this.rules.add(name, style, options);
	    if (rule) this.options.jss.plugins.onProcessRule(rule);
	    return rule;
	  }
	  /**
	   * Replace rule, run plugins.
	   */
	  ;

	  _proto.replaceRule = function replaceRule(name, style, options) {
	    var newRule = this.rules.replace(name, style, options);
	    if (newRule) this.options.jss.plugins.onProcessRule(newRule);
	    return newRule;
	  }
	  /**
	   * Get index of a rule.
	   */
	  ;

	  _proto.indexOf = function indexOf(rule) {
	    return this.rules.indexOf(rule);
	  }
	  /**
	   * Generates a CSS string.
	   */
	  ;

	  _proto.toString = function toString(options) {
	    return this.rules.toString(options);
	  };

	  return GlobalContainerRule;
	}();

	var GlobalPrefixedRule = /*#__PURE__*/function () {
	  function GlobalPrefixedRule(key, style, options) {
	    this.type = 'global';
	    this.at = at;
	    this.isProcessed = false;
	    this.key = key;
	    this.options = options;
	    var selector = key.substr(atPrefix.length);
	    this.rule = options.jss.createRule(selector, style, _extends$1({}, options, {
	      parent: this
	    }));
	  }

	  var _proto2 = GlobalPrefixedRule.prototype;

	  _proto2.toString = function toString(options) {
	    return this.rule ? this.rule.toString(options) : '';
	  };

	  return GlobalPrefixedRule;
	}();

	var separatorRegExp$1 = /\s*,\s*/g;

	function addScope(selector, scope) {
	  var parts = selector.split(separatorRegExp$1);
	  var scoped = '';

	  for (var i = 0; i < parts.length; i++) {
	    scoped += scope + " " + parts[i].trim();
	    if (parts[i + 1]) scoped += ', ';
	  }

	  return scoped;
	}

	function handleNestedGlobalContainerRule(rule, sheet) {
	  var options = rule.options,
	      style = rule.style;
	  var rules = style ? style[at] : null;
	  if (!rules) return;

	  for (var name in rules) {
	    sheet.addRule(name, rules[name], _extends$1({}, options, {
	      selector: addScope(name, rule.selector)
	    }));
	  }

	  delete style[at];
	}

	function handlePrefixedGlobalRule(rule, sheet) {
	  var options = rule.options,
	      style = rule.style;

	  for (var prop in style) {
	    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
	    var selector = addScope(prop.substr(at.length), rule.selector);
	    sheet.addRule(selector, style[prop], _extends$1({}, options, {
	      selector: selector
	    }));
	    delete style[prop];
	  }
	}
	/**
	 * Convert nested rules to separate, remove them from original styles.
	 */


	function jssGlobal() {
	  function onCreateRule(name, styles, options) {
	    if (!name) return null;

	    if (name === at) {
	      return new GlobalContainerRule(name, styles, options);
	    }

	    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
	      return new GlobalPrefixedRule(name, styles, options);
	    }

	    var parent = options.parent;

	    if (parent) {
	      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
	        options.scoped = false;
	      }
	    }

	    if (!options.selector && options.scoped === false) {
	      options.selector = name;
	    }

	    return null;
	  }

	  function onProcessRule(rule, sheet) {
	    if (rule.type !== 'style' || !sheet) return;
	    handleNestedGlobalContainerRule(rule, sheet);
	    handlePrefixedGlobalRule(rule, sheet);
	  }

	  return {
	    onCreateRule: onCreateRule,
	    onProcessRule: onProcessRule
	  };
	}

	var separatorRegExp = /\s*,\s*/g;
	var parentRegExp = /&/g;
	var refRegExp = /\$([\w-]+)/g;
	/**
	 * Convert nested rules to separate, remove them from original styles.
	 */

	function jssNested() {
	  // Get a function to be used for $ref replacement.
	  function getReplaceRef(container, sheet) {
	    return function (match, key) {
	      var rule = container.getRule(key) || sheet && sheet.getRule(key);

	      if (rule) {
	        return rule.selector;
	      }
	      return key;
	    };
	  }

	  function replaceParentRefs(nestedProp, parentProp) {
	    var parentSelectors = parentProp.split(separatorRegExp);
	    var nestedSelectors = nestedProp.split(separatorRegExp);
	    var result = '';

	    for (var i = 0; i < parentSelectors.length; i++) {
	      var parent = parentSelectors[i];

	      for (var j = 0; j < nestedSelectors.length; j++) {
	        var nested = nestedSelectors[j];
	        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

	        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
	      }
	    }

	    return result;
	  }

	  function getOptions(rule, container, prevOptions) {
	    // Options has been already created, now we only increase index.
	    if (prevOptions) return _extends$1({}, prevOptions, {
	      index: prevOptions.index + 1
	    });
	    var nestingLevel = rule.options.nestingLevel;
	    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

	    var options = _extends$1({}, rule.options, {
	      nestingLevel: nestingLevel,
	      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

	    });

	    delete options.name;
	    return options;
	  }

	  function onProcessStyle(style, rule, sheet) {
	    if (rule.type !== 'style') return style;
	    var styleRule = rule;
	    var container = styleRule.options.parent;
	    var options;
	    var replaceRef;

	    for (var prop in style) {
	      var isNested = prop.indexOf('&') !== -1;
	      var isNestedConditional = prop[0] === '@';
	      if (!isNested && !isNestedConditional) continue;
	      options = getOptions(styleRule, container, options);

	      if (isNested) {
	        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
	        // all nested rules within the sheet.

	        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

	        selector = selector.replace(refRegExp, replaceRef);
	        var name = styleRule.key + "-" + prop;

	        if ('replaceRule' in container) {
	          // for backward compatibility
	          container.replaceRule(name, style[prop], _extends$1({}, options, {
	            selector: selector
	          }));
	        } else {
	          container.addRule(name, style[prop], _extends$1({}, options, {
	            selector: selector
	          }));
	        }
	      } else if (isNestedConditional) {
	        // Place conditional right after the parent rule to ensure right ordering.
	        container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
	          selector: styleRule.selector
	        });
	      }

	      delete style[prop];
	    }

	    return style;
	  }

	  return {
	    onProcessStyle: onProcessStyle
	  };
	}

	/* eslint-disable no-var, prefer-template */
	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache$2 = {};

	function toHyphenLower(match) {
	  return '-' + match.toLowerCase();
	}

	function hyphenateStyleName(name) {
	  if (cache$2.hasOwnProperty(name)) {
	    return cache$2[name];
	  }

	  var hName = name.replace(uppercasePattern, toHyphenLower);
	  return cache$2[name] = msPattern.test(hName) ? '-' + hName : hName;
	}

	/**
	 * Convert camel cased property names to dash separated.
	 */

	function convertCase(style) {
	  var converted = {};

	  for (var prop in style) {
	    var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
	    converted[key] = style[prop];
	  }

	  if (style.fallbacks) {
	    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
	  }

	  return converted;
	}
	/**
	 * Allow camel cased property names by converting them back to dasherized.
	 */


	function camelCase() {
	  function onProcessStyle(style) {
	    if (Array.isArray(style)) {
	      // Handle rules like @font-face, which can have multiple styles in an array
	      for (var index = 0; index < style.length; index++) {
	        style[index] = convertCase(style[index]);
	      }

	      return style;
	    }

	    return convertCase(style);
	  }

	  function onChangeValue(value, prop, rule) {
	    if (prop.indexOf('--') === 0) {
	      return value;
	    }

	    var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

	    if (prop === hyphenatedProp) return value;
	    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

	    return null;
	  }

	  return {
	    onProcessStyle: onProcessStyle,
	    onChangeValue: onChangeValue
	  };
	}

	var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
	var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
	var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
	/**
	 * Generated jss-plugin-default-unit CSS property units
	 */

	var defaultUnits = {
	  // Animation properties
	  'animation-delay': ms,
	  'animation-duration': ms,
	  // Background properties
	  'background-position': px,
	  'background-position-x': px,
	  'background-position-y': px,
	  'background-size': px,
	  // Border Properties
	  border: px,
	  'border-bottom': px,
	  'border-bottom-left-radius': px,
	  'border-bottom-right-radius': px,
	  'border-bottom-width': px,
	  'border-left': px,
	  'border-left-width': px,
	  'border-radius': px,
	  'border-right': px,
	  'border-right-width': px,
	  'border-top': px,
	  'border-top-left-radius': px,
	  'border-top-right-radius': px,
	  'border-top-width': px,
	  'border-width': px,
	  'border-block': px,
	  'border-block-end': px,
	  'border-block-end-width': px,
	  'border-block-start': px,
	  'border-block-start-width': px,
	  'border-block-width': px,
	  'border-inline': px,
	  'border-inline-end': px,
	  'border-inline-end-width': px,
	  'border-inline-start': px,
	  'border-inline-start-width': px,
	  'border-inline-width': px,
	  'border-start-start-radius': px,
	  'border-start-end-radius': px,
	  'border-end-start-radius': px,
	  'border-end-end-radius': px,
	  // Margin properties
	  margin: px,
	  'margin-bottom': px,
	  'margin-left': px,
	  'margin-right': px,
	  'margin-top': px,
	  'margin-block': px,
	  'margin-block-end': px,
	  'margin-block-start': px,
	  'margin-inline': px,
	  'margin-inline-end': px,
	  'margin-inline-start': px,
	  // Padding properties
	  padding: px,
	  'padding-bottom': px,
	  'padding-left': px,
	  'padding-right': px,
	  'padding-top': px,
	  'padding-block': px,
	  'padding-block-end': px,
	  'padding-block-start': px,
	  'padding-inline': px,
	  'padding-inline-end': px,
	  'padding-inline-start': px,
	  // Mask properties
	  'mask-position-x': px,
	  'mask-position-y': px,
	  'mask-size': px,
	  // Width and height properties
	  height: px,
	  width: px,
	  'min-height': px,
	  'max-height': px,
	  'min-width': px,
	  'max-width': px,
	  // Position properties
	  bottom: px,
	  left: px,
	  top: px,
	  right: px,
	  inset: px,
	  'inset-block': px,
	  'inset-block-end': px,
	  'inset-block-start': px,
	  'inset-inline': px,
	  'inset-inline-end': px,
	  'inset-inline-start': px,
	  // Shadow properties
	  'box-shadow': px,
	  'text-shadow': px,
	  // Column properties
	  'column-gap': px,
	  'column-rule': px,
	  'column-rule-width': px,
	  'column-width': px,
	  // Font and text properties
	  'font-size': px,
	  'font-size-delta': px,
	  'letter-spacing': px,
	  'text-decoration-thickness': px,
	  'text-indent': px,
	  'text-stroke': px,
	  'text-stroke-width': px,
	  'word-spacing': px,
	  // Motion properties
	  motion: px,
	  'motion-offset': px,
	  // Outline properties
	  outline: px,
	  'outline-offset': px,
	  'outline-width': px,
	  // Perspective properties
	  perspective: px,
	  'perspective-origin-x': percent,
	  'perspective-origin-y': percent,
	  // Transform properties
	  'transform-origin': percent,
	  'transform-origin-x': percent,
	  'transform-origin-y': percent,
	  'transform-origin-z': percent,
	  // Transition properties
	  'transition-delay': ms,
	  'transition-duration': ms,
	  // Alignment properties
	  'vertical-align': px,
	  'flex-basis': px,
	  // Some random properties
	  'shape-margin': px,
	  size: px,
	  gap: px,
	  // Grid properties
	  grid: px,
	  'grid-gap': px,
	  'row-gap': px,
	  'grid-row-gap': px,
	  'grid-column-gap': px,
	  'grid-template-rows': px,
	  'grid-template-columns': px,
	  'grid-auto-rows': px,
	  'grid-auto-columns': px,
	  // Not existing properties.
	  // Used to avoid issues with jss-plugin-expand integration.
	  'box-shadow-x': px,
	  'box-shadow-y': px,
	  'box-shadow-blur': px,
	  'box-shadow-spread': px,
	  'font-line-height': px,
	  'text-shadow-x': px,
	  'text-shadow-y': px,
	  'text-shadow-blur': px
	};
	/**
	 * Clones the object and adds a camel cased property version.
	 */

	function addCamelCasedVersion(obj) {
	  var regExp = /(-[a-z])/g;

	  var replace = function replace(str) {
	    return str[1].toUpperCase();
	  };

	  var newObj = {};

	  for (var key in obj) {
	    newObj[key] = obj[key];
	    newObj[key.replace(regExp, replace)] = obj[key];
	  }

	  return newObj;
	}

	var units = addCamelCasedVersion(defaultUnits);
	/**
	 * Recursive deep style passing function
	 */

	function iterate(prop, value, options) {
	  if (value == null) return value;

	  if (Array.isArray(value)) {
	    for (var i = 0; i < value.length; i++) {
	      value[i] = iterate(prop, value[i], options);
	    }
	  } else if (typeof value === 'object') {
	    if (prop === 'fallbacks') {
	      for (var innerProp in value) {
	        value[innerProp] = iterate(innerProp, value[innerProp], options);
	      }
	    } else {
	      for (var _innerProp in value) {
	        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
	      }
	    } // eslint-disable-next-line no-restricted-globals

	  } else if (typeof value === 'number' && isNaN(value) === false) {
	    var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

	    if (unit && !(value === 0 && unit === px)) {
	      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
	    }

	    return value.toString();
	  }

	  return value;
	}
	/**
	 * Add unit to numeric values.
	 */


	function defaultUnit(options) {
	  if (options === void 0) {
	    options = {};
	  }

	  var camelCasedOptions = addCamelCasedVersion(options);

	  function onProcessStyle(style, rule) {
	    if (rule.type !== 'style') return style;

	    for (var prop in style) {
	      style[prop] = iterate(prop, style[prop], camelCasedOptions);
	    }

	    return style;
	  }

	  function onChangeValue(value, prop) {
	    return iterate(prop, value, camelCasedOptions);
	  }

	  return {
	    onProcessStyle: onProcessStyle,
	    onChangeValue: onChangeValue
	  };
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}

	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}

	var js = '';
	var css = '';
	var vendor = '';
	var browser = '';
	var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

	if (isBrowser) {
	  // Order matters. We need to check Webkit the last one because
	  // other vendors use to add Webkit prefixes to some properties
	  var jsCssMap = {
	    Moz: '-moz-',
	    ms: '-ms-',
	    O: '-o-',
	    Webkit: '-webkit-'
	  };

	  var _document$createEleme = document.createElement('p'),
	      style = _document$createEleme.style;

	  var testProp = 'Transform';

	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      js = key;
	      css = jsCssMap[key];
	      break;
	    }
	  } // Correctly detect the Edge browser.


	  if (js === 'Webkit' && 'msHyphens' in style) {
	    js = 'ms';
	    css = jsCssMap.ms;
	    browser = 'edge';
	  } // Correctly detect the Safari browser.


	  if (js === 'Webkit' && '-apple-trailing-word' in style) {
	    vendor = 'apple';
	  }
	}
	/**
	 * Vendor prefix string for the current browser.
	 *
	 * @type {{js: String, css: String, vendor: String, browser: String}}
	 * @api public
	 */


	var prefix = {
	  js: js,
	  css: css,
	  vendor: vendor,
	  browser: browser,
	  isTouch: isTouch
	};
	/**
	 * Test if a keyframe at-rule should be prefixed or not
	 *
	 * @param {String} vendor prefix string for the current browser.
	 * @return {String}
	 * @api public
	 */

	function supportedKeyframes(key) {
	  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
	  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
	  // https://caniuse.com/#search=keyframes

	  if (prefix.js === 'ms') return key;
	  return "@" + prefix.css + "keyframes" + key.substr(10);
	} // https://caniuse.com/#search=appearance


	var appearence = {
	  noPrefill: ['appearance'],
	  supportedProperty: function supportedProperty(prop) {
	    if (prop !== 'appearance') return false;
	    if (prefix.js === 'ms') return "-webkit-" + prop;
	    return prefix.css + prop;
	  }
	}; // https://caniuse.com/#search=color-adjust

	var colorAdjust = {
	  noPrefill: ['color-adjust'],
	  supportedProperty: function supportedProperty(prop) {
	    if (prop !== 'color-adjust') return false;
	    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
	    return prop;
	  }
	};
	var regExp = /[-\s]+(.)?/g;
	/**
	 * Replaces the letter with the capital letter
	 *
	 * @param {String} match
	 * @param {String} c
	 * @return {String}
	 * @api private
	 */

	function toUpper(match, c) {
	  return c ? c.toUpperCase() : '';
	}
	/**
	 * Convert dash separated strings to camel-cased.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */


	function camelize(str) {
	  return str.replace(regExp, toUpper);
	}
	/**
	 * Convert dash separated strings to pascal cased.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */


	function pascalize(str) {
	  return camelize("-" + str);
	} // but we can use a longhand property instead.
	// https://caniuse.com/#search=mask


	var mask = {
	  noPrefill: ['mask'],
	  supportedProperty: function supportedProperty(prop, style) {
	    if (!/^mask/.test(prop)) return false;

	    if (prefix.js === 'Webkit') {
	      var longhand = 'mask-image';

	      if (camelize(longhand) in style) {
	        return prop;
	      }

	      if (prefix.js + pascalize(longhand) in style) {
	        return prefix.css + prop;
	      }
	    }

	    return prop;
	  }
	}; // https://caniuse.com/#search=text-orientation

	var textOrientation = {
	  noPrefill: ['text-orientation'],
	  supportedProperty: function supportedProperty(prop) {
	    if (prop !== 'text-orientation') return false;

	    if (prefix.vendor === 'apple' && !prefix.isTouch) {
	      return prefix.css + prop;
	    }

	    return prop;
	  }
	}; // https://caniuse.com/#search=transform

	var transform = {
	  noPrefill: ['transform'],
	  supportedProperty: function supportedProperty(prop, style, options) {
	    if (prop !== 'transform') return false;

	    if (options.transform) {
	      return prop;
	    }

	    return prefix.css + prop;
	  }
	}; // https://caniuse.com/#search=transition

	var transition = {
	  noPrefill: ['transition'],
	  supportedProperty: function supportedProperty(prop, style, options) {
	    if (prop !== 'transition') return false;

	    if (options.transition) {
	      return prop;
	    }

	    return prefix.css + prop;
	  }
	}; // https://caniuse.com/#search=writing-mode

	var writingMode = {
	  noPrefill: ['writing-mode'],
	  supportedProperty: function supportedProperty(prop) {
	    if (prop !== 'writing-mode') return false;

	    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
	      return prefix.css + prop;
	    }

	    return prop;
	  }
	}; // https://caniuse.com/#search=user-select

	var userSelect = {
	  noPrefill: ['user-select'],
	  supportedProperty: function supportedProperty(prop) {
	    if (prop !== 'user-select') return false;

	    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
	      return prefix.css + prop;
	    }

	    return prop;
	  }
	}; // https://caniuse.com/#search=multicolumn
	// https://github.com/postcss/autoprefixer/issues/491
	// https://github.com/postcss/autoprefixer/issues/177

	var breakPropsOld = {
	  supportedProperty: function supportedProperty(prop, style) {
	    if (!/^break-/.test(prop)) return false;

	    if (prefix.js === 'Webkit') {
	      var jsProp = "WebkitColumn" + pascalize(prop);
	      return jsProp in style ? prefix.css + "column-" + prop : false;
	    }

	    if (prefix.js === 'Moz') {
	      var _jsProp = "page" + pascalize(prop);

	      return _jsProp in style ? "page-" + prop : false;
	    }

	    return false;
	  }
	}; // See https://github.com/postcss/autoprefixer/issues/324.

	var inlineLogicalOld = {
	  supportedProperty: function supportedProperty(prop, style) {
	    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
	    if (prefix.js === 'Moz') return prop;
	    var newProp = prop.replace('-inline', '');
	    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
	  }
	}; // Camelization is required because we can't test using.
	// CSS syntax for e.g. in FF.

	var unprefixed = {
	  supportedProperty: function supportedProperty(prop, style) {
	    return camelize(prop) in style ? prop : false;
	  }
	};
	var prefixed = {
	  supportedProperty: function supportedProperty(prop, style) {
	    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

	    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

	    if (prop[0] === '-' && prop[1] === '-') return prop;
	    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

	    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
	    return false;
	  }
	}; // https://caniuse.com/#search=scroll-snap

	var scrollSnap = {
	  supportedProperty: function supportedProperty(prop) {
	    if (prop.substring(0, 11) !== 'scroll-snap') return false;

	    if (prefix.js === 'ms') {
	      return "" + prefix.css + prop;
	    }

	    return prop;
	  }
	}; // https://caniuse.com/#search=overscroll-behavior

	var overscrollBehavior = {
	  supportedProperty: function supportedProperty(prop) {
	    if (prop !== 'overscroll-behavior') return false;

	    if (prefix.js === 'ms') {
	      return prefix.css + "scroll-chaining";
	    }

	    return prop;
	  }
	};
	var propMap = {
	  'flex-grow': 'flex-positive',
	  'flex-shrink': 'flex-negative',
	  'flex-basis': 'flex-preferred-size',
	  'justify-content': 'flex-pack',
	  order: 'flex-order',
	  'align-items': 'flex-align',
	  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

	}; // Support old flex spec from 2012.

	var flex2012 = {
	  supportedProperty: function supportedProperty(prop, style) {
	    var newProp = propMap[prop];
	    if (!newProp) return false;
	    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
	  }
	};
	var propMap$1 = {
	  flex: 'box-flex',
	  'flex-grow': 'box-flex',
	  'flex-direction': ['box-orient', 'box-direction'],
	  order: 'box-ordinal-group',
	  'align-items': 'box-align',
	  'flex-flow': ['box-orient', 'box-direction'],
	  'justify-content': 'box-pack'
	};
	var propKeys = Object.keys(propMap$1);

	var prefixCss = function prefixCss(p) {
	  return prefix.css + p;
	}; // Support old flex spec from 2009.


	var flex2009 = {
	  supportedProperty: function supportedProperty(prop, style, _ref) {
	    var multiple = _ref.multiple;

	    if (propKeys.indexOf(prop) > -1) {
	      var newProp = propMap$1[prop];

	      if (!Array.isArray(newProp)) {
	        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
	      }

	      if (!multiple) return false;

	      for (var i = 0; i < newProp.length; i++) {
	        if (!(prefix.js + pascalize(newProp[0]) in style)) {
	          return false;
	        }
	      }

	      return newProp.map(prefixCss);
	    }

	    return false;
	  }
	}; // plugins = [
	//   ...plugins,
	//    breakPropsOld,
	//    inlineLogicalOld,
	//    unprefixed,
	//    prefixed,
	//    scrollSnap,
	//    flex2012,
	//    flex2009
	// ]
	// Plugins without 'noPrefill' value, going last.
	// 'flex-*' plugins should be at the bottom.
	// 'flex2009' going after 'flex2012'.
	// 'prefixed' going after 'unprefixed'

	var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
	var propertyDetectors = plugins.filter(function (p) {
	  return p.supportedProperty;
	}).map(function (p) {
	  return p.supportedProperty;
	});
	var noPrefill = plugins.filter(function (p) {
	  return p.noPrefill;
	}).reduce(function (a, p) {
	  a.push.apply(a, _toConsumableArray(p.noPrefill));
	  return a;
	}, []);
	var el;
	var cache = {};

	if (isBrowser) {
	  el = document.createElement('p'); // We test every property on vendor prefix requirement.
	  // Once tested, result is cached. It gives us up to 70% perf boost.
	  // http://jsperf.com/element-style-object-access-vs-plain-object
	  //
	  // Prefill cache with known css properties to reduce amount of
	  // properties we need to feature test at runtime.
	  // http://davidwalsh.name/vendor-prefix

	  var computed = window.getComputedStyle(document.documentElement, '');

	  for (var key$1 in computed) {
	    // eslint-disable-next-line no-restricted-globals
	    if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
	  } // Properties that cannot be correctly detected using the
	  // cache prefill method.


	  noPrefill.forEach(function (x) {
	    return delete cache[x];
	  });
	}
	/**
	 * Test if a property is supported, returns supported property with vendor
	 * prefix if required. Returns `false` if not supported.
	 *
	 * @param {String} prop dash separated
	 * @param {Object} [options]
	 * @return {String|Boolean}
	 * @api public
	 */


	function supportedProperty(prop, options) {
	  if (options === void 0) {
	    options = {};
	  } // For server-side rendering.


	  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

	  if (cache[prop] != null) {
	    return cache[prop];
	  } // Check if 'transition' or 'transform' natively supported in browser.


	  if (prop === 'transition' || prop === 'transform') {
	    options[prop] = prop in el.style;
	  } // Find a plugin for current prefix property.


	  for (var i = 0; i < propertyDetectors.length; i++) {
	    cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

	    if (cache[prop]) break;
	  } // Reset styles for current property.
	  // Firefox can even throw an error for invalid properties, e.g., "0".


	  try {
	    el.style[prop] = '';
	  } catch (err) {
	    return false;
	  }

	  return cache[prop];
	}

	var cache$1 = {};
	var transitionProperties = {
	  transition: 1,
	  'transition-property': 1,
	  '-webkit-transition': 1,
	  '-webkit-transition-property': 1
	};
	var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
	var el$1;
	/**
	 * Returns prefixed value transition/transform if needed.
	 *
	 * @param {String} match
	 * @param {String} p1
	 * @param {String} p2
	 * @return {String}
	 * @api private
	 */

	function prefixTransitionCallback(match, p1, p2) {
	  if (p1 === 'var') return 'var';
	  if (p1 === 'all') return 'all';
	  if (p2 === 'all') return ', all';
	  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
	  if (!prefixedValue) return p1 || p2;
	  return prefixedValue;
	}

	if (isBrowser) el$1 = document.createElement('p');
	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */

	function supportedValue(property, value) {
	  // For server-side rendering.
	  var prefixedValue = value;
	  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
	  // We want only prefixable values here.
	  // eslint-disable-next-line no-restricted-globals

	  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
	    return prefixedValue;
	  } // Create cache key for current value.


	  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

	  if (cache$1[cacheKey] != null) {
	    return cache$1[cacheKey];
	  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


	  try {
	    // Test value as it is.
	    el$1.style[property] = prefixedValue;
	  } catch (err) {
	    // Return false if value not supported.
	    cache$1[cacheKey] = false;
	    return false;
	  } // If 'transition' or 'transition-property' property.


	  if (transitionProperties[property]) {
	    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
	  } else if (el$1.style[property] === '') {
	    // Value with a vendor prefix.
	    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

	    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

	    el$1.style[property] = prefixedValue; // Return false if value not supported.

	    if (el$1.style[property] === '') {
	      cache$1[cacheKey] = false;
	      return false;
	    }
	  } // Reset styles for current property.


	  el$1.style[property] = ''; // Write current value to cache.

	  cache$1[cacheKey] = prefixedValue;
	  return cache$1[cacheKey];
	}

	/**
	 * Add vendor prefix to a property name when needed.
	 */

	function jssVendorPrefixer() {
	  function onProcessRule(rule) {
	    if (rule.type === 'keyframes') {
	      var atRule = rule;
	      atRule.at = supportedKeyframes(atRule.at);
	    }
	  }

	  function prefixStyle(style) {
	    for (var prop in style) {
	      var value = style[prop];

	      if (prop === 'fallbacks' && Array.isArray(value)) {
	        style[prop] = value.map(prefixStyle);
	        continue;
	      }

	      var changeProp = false;
	      var supportedProp = supportedProperty(prop);
	      if (supportedProp && supportedProp !== prop) changeProp = true;
	      var changeValue = false;
	      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
	      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

	      if (changeProp || changeValue) {
	        if (changeProp) delete style[prop];
	        style[supportedProp || prop] = supportedValue$1 || value;
	      }
	    }

	    return style;
	  }

	  function onProcessStyle(style, rule) {
	    if (rule.type !== 'style') return style;
	    return prefixStyle(style);
	  }

	  function onChangeValue(value, prop) {
	    return supportedValue(prop, toCssValue(value)) || value;
	  }

	  return {
	    onProcessRule: onProcessRule,
	    onProcessStyle: onProcessStyle,
	    onChangeValue: onChangeValue
	  };
	}

	/**
	 * Sort props by length.
	 */
	function jssPropsSort() {
	  var sort = function sort(prop0, prop1) {
	    if (prop0.length === prop1.length) {
	      return prop0 > prop1 ? 1 : -1;
	    }

	    return prop0.length - prop1.length;
	  };

	  return {
	    onProcessStyle: function onProcessStyle(style, rule) {
	      if (rule.type !== 'style') return style;
	      var newStyle = {};
	      var props = Object.keys(style).sort(sort);

	      for (var i = 0; i < props.length; i++) {
	        newStyle[props[i]] = style[props[i]];
	      }

	      return newStyle;
	    }
	  };
	}

	function jssPreset() {
	  return {
	    plugins: [functions(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
	    // This way, we can get a performance boost.
	    // In the documentation, we are using `autoprefixer` to solve this problem.
	    typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
	  };
	}

	function mergeClasses() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var baseClasses = options.baseClasses,
	      newClasses = options.newClasses;
	      options.Component;

	  if (!newClasses) {
	    return baseClasses;
	  }

	  var nextClasses = _extends$1({}, baseClasses);

	  Object.keys(newClasses).forEach(function (key) {

	    if (newClasses[key]) {
	      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
	    }
	  });
	  return nextClasses;
	}

	// Used https://github.com/thinkloop/multi-key-cache as inspiration
	var multiKeyStore = {
	  set: function set(cache, key1, key2, value) {
	    var subCache = cache.get(key1);

	    if (!subCache) {
	      subCache = new Map();
	      cache.set(key1, subCache);
	    }

	    subCache.set(key2, value);
	  },
	  get: function get(cache, key1, key2) {
	    var subCache = cache.get(key1);
	    return subCache ? subCache.get(key2) : undefined;
	  },
	  delete: function _delete(cache, key1, key2) {
	    var subCache = cache.get(key1);
	    subCache.delete(key2);
	  }
	};
	var multiKeyStore$1 = multiKeyStore;

	var ThemeContext = /*#__PURE__*/react.createContext(null);

	var ThemeContext$1 = ThemeContext;

	function useTheme() {
	  var theme = react.useContext(ThemeContext$1);

	  return theme;
	}

	var jss = createJss(jssPreset()); // Use a singleton or the provided one by the context.
	//
	// The counter-based approach doesn't tolerate any mistake.
	// It's much safer to use the same counter everywhere.

	var generateClassName = createGenerateClassName(); // Exported for test purposes

	var sheetsManager = new Map();
	var defaultOptions = {
	  disableGeneration: false,
	  generateClassName: generateClassName,
	  jss: jss,
	  sheetsCache: null,
	  sheetsManager: sheetsManager,
	  sheetsRegistry: null
	};
	var StylesContext = /*#__PURE__*/react.createContext(defaultOptions);

	/* eslint-disable import/prefer-default-export */
	// Global index counter to preserve source order.
	// We create the style sheet during the creation of the component,
	// children are handled after the parents, so the order of style elements would be parent->child.
	// It is a problem though when a parent passes a className
	// which needs to override any child's styles.
	// StyleSheet of the child has a higher specificity, because of the source order.
	// So our solution is to render sheets them in the reverse order child->sheet, so
	// that parent has a higher specificity.
	var indexCounter = -1e9;
	function increment() {
	  indexCounter += 1;

	  return indexCounter;
	}

	// We use the same empty object to ref count the styles that don't need a theme object.
	var noopTheme = {};
	var noopTheme$1 = noopTheme;

	function getStylesCreator(stylesOrCreator) {
	  var themingEnabled = typeof stylesOrCreator === 'function';

	  return {
	    create: function create(theme, name) {
	      var styles;

	      try {
	        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
	      } catch (err) {

	        throw err;
	      }

	      if (!name || !theme.overrides || !theme.overrides[name]) {
	        return styles;
	      }

	      var overrides = theme.overrides[name];

	      var stylesWithOverrides = _extends$1({}, styles);

	      Object.keys(overrides).forEach(function (key) {

	        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
	      });
	      return stylesWithOverrides;
	    },
	    options: {}
	  };
	}

	function getClasses(_ref, classes, Component) {
	  var state = _ref.state,
	      stylesOptions = _ref.stylesOptions;

	  if (stylesOptions.disableGeneration) {
	    return classes || {};
	  }

	  if (!state.cacheClasses) {
	    state.cacheClasses = {
	      // Cache for the finalized classes value.
	      value: null,
	      // Cache for the last used classes prop pointer.
	      lastProp: null,
	      // Cache for the last used rendered classes pointer.
	      lastJSS: {}
	    };
	  } // Tracks if either the rendered classes or classes prop has changed,
	  // requiring the generation of a new finalized classes object.


	  var generate = false;

	  if (state.classes !== state.cacheClasses.lastJSS) {
	    state.cacheClasses.lastJSS = state.classes;
	    generate = true;
	  }

	  if (classes !== state.cacheClasses.lastProp) {
	    state.cacheClasses.lastProp = classes;
	    generate = true;
	  }

	  if (generate) {
	    state.cacheClasses.value = mergeClasses({
	      baseClasses: state.cacheClasses.lastJSS,
	      newClasses: classes,
	      Component: Component
	    });
	  }

	  return state.cacheClasses.value;
	}

	function attach(_ref2, props) {
	  var state = _ref2.state,
	      theme = _ref2.theme,
	      stylesOptions = _ref2.stylesOptions,
	      stylesCreator = _ref2.stylesCreator,
	      name = _ref2.name;

	  if (stylesOptions.disableGeneration) {
	    return;
	  }

	  var sheetManager = multiKeyStore$1.get(stylesOptions.sheetsManager, stylesCreator, theme);

	  if (!sheetManager) {
	    sheetManager = {
	      refs: 0,
	      staticSheet: null,
	      dynamicStyles: null
	    };
	    multiKeyStore$1.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
	  }

	  var options = _extends$1({}, stylesCreator.options, stylesOptions, {
	    theme: theme,
	    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
	  });

	  options.generateId = options.serverGenerateClassName || options.generateClassName;
	  var sheetsRegistry = stylesOptions.sheetsRegistry;

	  if (sheetManager.refs === 0) {
	    var staticSheet;

	    if (stylesOptions.sheetsCache) {
	      staticSheet = multiKeyStore$1.get(stylesOptions.sheetsCache, stylesCreator, theme);
	    }

	    var styles = stylesCreator.create(theme, name);

	    if (!staticSheet) {
	      staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends$1({
	        link: false
	      }, options));
	      staticSheet.attach();

	      if (stylesOptions.sheetsCache) {
	        multiKeyStore$1.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
	      }
	    }

	    if (sheetsRegistry) {
	      sheetsRegistry.add(staticSheet);
	    }

	    sheetManager.staticSheet = staticSheet;
	    sheetManager.dynamicStyles = getDynamicStyles(styles);
	  }

	  if (sheetManager.dynamicStyles) {
	    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends$1({
	      link: true
	    }, options));
	    dynamicSheet.update(props);
	    dynamicSheet.attach();
	    state.dynamicSheet = dynamicSheet;
	    state.classes = mergeClasses({
	      baseClasses: sheetManager.staticSheet.classes,
	      newClasses: dynamicSheet.classes
	    });

	    if (sheetsRegistry) {
	      sheetsRegistry.add(dynamicSheet);
	    }
	  } else {
	    state.classes = sheetManager.staticSheet.classes;
	  }

	  sheetManager.refs += 1;
	}

	function update(_ref3, props) {
	  var state = _ref3.state;

	  if (state.dynamicSheet) {
	    state.dynamicSheet.update(props);
	  }
	}

	function detach(_ref4) {
	  var state = _ref4.state,
	      theme = _ref4.theme,
	      stylesOptions = _ref4.stylesOptions,
	      stylesCreator = _ref4.stylesCreator;

	  if (stylesOptions.disableGeneration) {
	    return;
	  }

	  var sheetManager = multiKeyStore$1.get(stylesOptions.sheetsManager, stylesCreator, theme);
	  sheetManager.refs -= 1;
	  var sheetsRegistry = stylesOptions.sheetsRegistry;

	  if (sheetManager.refs === 0) {
	    multiKeyStore$1.delete(stylesOptions.sheetsManager, stylesCreator, theme);
	    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

	    if (sheetsRegistry) {
	      sheetsRegistry.remove(sheetManager.staticSheet);
	    }
	  }

	  if (state.dynamicSheet) {
	    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

	    if (sheetsRegistry) {
	      sheetsRegistry.remove(state.dynamicSheet);
	    }
	  }
	}

	function useSynchronousEffect(func, values) {
	  var key = react.useRef([]);
	  var output; // Store "generation" key. Just returns a new object every time

	  var currentKey = react.useMemo(function () {
	    return {};
	  }, values); // eslint-disable-line react-hooks/exhaustive-deps
	  // "the first render", or "memo dropped the value"

	  if (key.current !== currentKey) {
	    key.current = currentKey;
	    output = func();
	  }

	  react.useEffect(function () {
	    return function () {
	      if (output) {
	        output();
	      }
	    };
	  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
	  );
	}

	function makeStyles(stylesOrCreator) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var name = options.name,
	      classNamePrefixOption = options.classNamePrefix,
	      Component = options.Component,
	      _options$defaultTheme = options.defaultTheme,
	      defaultTheme = _options$defaultTheme === void 0 ? noopTheme$1 : _options$defaultTheme,
	      stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

	  var stylesCreator = getStylesCreator(stylesOrCreator);
	  var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
	  stylesCreator.options = {
	    index: increment(),
	    name: name,
	    meta: classNamePrefix,
	    classNamePrefix: classNamePrefix
	  };

	  var useStyles = function useStyles() {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var theme = useTheme() || defaultTheme;

	    var stylesOptions = _extends$1({}, react.useContext(StylesContext), stylesOptions2);

	    var instance = react.useRef();
	    var shouldUpdate = react.useRef();
	    useSynchronousEffect(function () {
	      var current = {
	        name: name,
	        state: {},
	        stylesCreator: stylesCreator,
	        stylesOptions: stylesOptions,
	        theme: theme
	      };
	      attach(current, props);
	      shouldUpdate.current = false;
	      instance.current = current;
	      return function () {
	        detach(current);
	      };
	    }, [theme, stylesCreator]);
	    react.useEffect(function () {
	      if (shouldUpdate.current) {
	        update(instance.current, props);
	      }

	      shouldUpdate.current = true;
	    });
	    var classes = getClasses(instance.current, props.classes, Component);

	    return classes;
	  };

	  return useStyles;
	}

	// It does not modify the component passed to it;
	// instead, it returns a new component, with a `classes` property.

	var withStyles$1 = function withStyles(stylesOrCreator) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return function (Component) {
	    var defaultTheme = options.defaultTheme,
	        _options$withTheme = options.withTheme,
	        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
	        name = options.name,
	        stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);

	    var classNamePrefix = name;

	    var useStyles = makeStyles(stylesOrCreator, _extends$1({
	      defaultTheme: defaultTheme,
	      Component: Component,
	      name: name || Component.displayName,
	      classNamePrefix: classNamePrefix
	    }, stylesOptions));
	    var WithStyles = /*#__PURE__*/react.forwardRef(function WithStyles(props, ref) {
	      props.classes;
	          var innerRef = props.innerRef,
	          other = _objectWithoutProperties(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
	      // the actual props Component might receive due to merging with defaultProps.
	      // So copying it here would give us the same result in the wrapper as well.


	      var classes = useStyles(_extends$1({}, Component.defaultProps, props));
	      var theme;
	      var more = other;

	      if (typeof name === 'string' || withTheme) {
	        // name and withTheme are invariant in the outer scope
	        // eslint-disable-next-line react-hooks/rules-of-hooks
	        theme = useTheme() || defaultTheme;

	        if (name) {
	          more = getThemeProps({
	            theme: theme,
	            name: name,
	            props: other
	          });
	        } // Provide the theme to the wrapped component.
	        // So we don't have to use the `withTheme()` Higher-order Component.


	        if (withTheme && !more.theme) {
	          more.theme = theme;
	        }
	      }

	      return /*#__PURE__*/react.createElement(Component, _extends$1({
	        ref: innerRef || ref,
	        classes: classes
	      }, more));
	    });

	    hoistNonReactStatics_cjs(WithStyles, Component);

	    return WithStyles;
	  };
	};

	var withStylesWithoutDefault = withStyles$1;

	// It can't be configured as it's used statically for propTypes.

	var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

	function createBreakpoints(breakpoints) {
	  var _breakpoints$values = breakpoints.values,
	      values = _breakpoints$values === void 0 ? {
	    xs: 0,
	    sm: 600,
	    md: 960,
	    lg: 1280,
	    xl: 1920
	  } : _breakpoints$values,
	      _breakpoints$unit = breakpoints.unit,
	      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
	      _breakpoints$step = breakpoints.step,
	      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
	      other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);

	  function up(key) {
	    var value = typeof values[key] === 'number' ? values[key] : key;
	    return "@media (min-width:".concat(value).concat(unit, ")");
	  }

	  function down(key) {
	    var endIndex = keys.indexOf(key) + 1;
	    var upperbound = values[keys[endIndex]];

	    if (endIndex === keys.length) {
	      // xl down applies to all sizes
	      return up('xs');
	    }

	    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
	    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
	  }

	  function between(start, end) {
	    var endIndex = keys.indexOf(end);

	    if (endIndex === keys.length - 1) {
	      return up(start);
	    }

	    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
	  }

	  function only(key) {
	    return between(key, key);
	  }

	  function width(key) {

	    return values[key];
	  }

	  return _extends$1({
	    keys: keys,
	    values: values,
	    up: up,
	    down: down,
	    between: between,
	    only: only,
	    width: width
	  }, other);
	}

	function createMixins(breakpoints, spacing, mixins) {
	  var _toolbar;

	  return _extends$1({
	    gutters: function gutters() {
	      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
	      return _extends$1({
	        paddingLeft: spacing(2),
	        paddingRight: spacing(2)
	      }, styles, _defineProperty({}, breakpoints.up('sm'), _extends$1({
	        paddingLeft: spacing(3),
	        paddingRight: spacing(3)
	      }, styles[breakpoints.up('sm')])));
	    },
	    toolbar: (_toolbar = {
	      minHeight: 56
	    }, _defineProperty(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
	      minHeight: 48
	    }), _defineProperty(_toolbar, breakpoints.up('sm'), {
	      minHeight: 64
	    }), _toolbar)
	  }, mixins);
	}

	var common = {
	  black: '#000',
	  white: '#fff'
	};
	var common$1 = common;

	var grey = {
	  50: '#fafafa',
	  100: '#f5f5f5',
	  200: '#eeeeee',
	  300: '#e0e0e0',
	  400: '#bdbdbd',
	  500: '#9e9e9e',
	  600: '#757575',
	  700: '#616161',
	  800: '#424242',
	  900: '#212121',
	  A100: '#d5d5d5',
	  A200: '#aaaaaa',
	  A400: '#303030',
	  A700: '#616161'
	};
	var grey$1 = grey;

	var indigo = {
	  50: '#e8eaf6',
	  100: '#c5cae9',
	  200: '#9fa8da',
	  300: '#7986cb',
	  400: '#5c6bc0',
	  500: '#3f51b5',
	  600: '#3949ab',
	  700: '#303f9f',
	  800: '#283593',
	  900: '#1a237e',
	  A100: '#8c9eff',
	  A200: '#536dfe',
	  A400: '#3d5afe',
	  A700: '#304ffe'
	};
	var indigo$1 = indigo;

	var pink = {
	  50: '#fce4ec',
	  100: '#f8bbd0',
	  200: '#f48fb1',
	  300: '#f06292',
	  400: '#ec407a',
	  500: '#e91e63',
	  600: '#d81b60',
	  700: '#c2185b',
	  800: '#ad1457',
	  900: '#880e4f',
	  A100: '#ff80ab',
	  A200: '#ff4081',
	  A400: '#f50057',
	  A700: '#c51162'
	};
	var pink$1 = pink;

	var red = {
	  50: '#ffebee',
	  100: '#ffcdd2',
	  200: '#ef9a9a',
	  300: '#e57373',
	  400: '#ef5350',
	  500: '#f44336',
	  600: '#e53935',
	  700: '#d32f2f',
	  800: '#c62828',
	  900: '#b71c1c',
	  A100: '#ff8a80',
	  A200: '#ff5252',
	  A400: '#ff1744',
	  A700: '#d50000'
	};
	var red$1 = red;

	var orange = {
	  50: '#fff3e0',
	  100: '#ffe0b2',
	  200: '#ffcc80',
	  300: '#ffb74d',
	  400: '#ffa726',
	  500: '#ff9800',
	  600: '#fb8c00',
	  700: '#f57c00',
	  800: '#ef6c00',
	  900: '#e65100',
	  A100: '#ffd180',
	  A200: '#ffab40',
	  A400: '#ff9100',
	  A700: '#ff6d00'
	};
	var orange$1 = orange;

	var blue = {
	  50: '#e3f2fd',
	  100: '#bbdefb',
	  200: '#90caf9',
	  300: '#64b5f6',
	  400: '#42a5f5',
	  500: '#2196f3',
	  600: '#1e88e5',
	  700: '#1976d2',
	  800: '#1565c0',
	  900: '#0d47a1',
	  A100: '#82b1ff',
	  A200: '#448aff',
	  A400: '#2979ff',
	  A700: '#2962ff'
	};
	var blue$1 = blue;

	var green = {
	  50: '#e8f5e9',
	  100: '#c8e6c9',
	  200: '#a5d6a7',
	  300: '#81c784',
	  400: '#66bb6a',
	  500: '#4caf50',
	  600: '#43a047',
	  700: '#388e3c',
	  800: '#2e7d32',
	  900: '#1b5e20',
	  A100: '#b9f6ca',
	  A200: '#69f0ae',
	  A400: '#00e676',
	  A700: '#00c853'
	};
	var green$1 = green;

	/* eslint-disable no-use-before-define */

	/**
	 * Returns a number whose value is limited to the given range.
	 *
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */

	function clamp(value) {
	  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	  return Math.min(Math.max(min, value), max);
	}
	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 *
	 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 * @returns {string} A CSS rgb color string
	 */


	function hexToRgb(color) {
	  color = color.substr(1);
	  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
	  var colors = color.match(re);

	  if (colors && colors[0].length === 1) {
	    colors = colors.map(function (n) {
	      return n + n;
	    });
	  }

	  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
	    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
	  }).join(', '), ")") : '';
	}
	/**
	 * Converts a color from hsl format to rgb format.
	 *
	 * @param {string} color - HSL color values
	 * @returns {string} rgb color values
	 */

	function hslToRgb(color) {
	  color = decomposeColor(color);
	  var _color = color,
	      values = _color.values;
	  var h = values[0];
	  var s = values[1] / 100;
	  var l = values[2] / 100;
	  var a = s * Math.min(l, 1 - l);

	  var f = function f(n) {
	    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
	    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	  };

	  var type = 'rgb';
	  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

	  if (color.type === 'hsla') {
	    type += 'a';
	    rgb.push(values[3]);
	  }

	  return recomposeColor({
	    type: type,
	    values: rgb
	  });
	}
	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {object} - A MUI color object: {type: string, values: number[]}
	 */

	function decomposeColor(color) {
	  // Idempotent
	  if (color.type) {
	    return color;
	  }

	  if (color.charAt(0) === '#') {
	    return decomposeColor(hexToRgb(color));
	  }

	  var marker = color.indexOf('(');
	  var type = color.substring(0, marker);

	  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
	    throw new Error(formatMuiErrorMessage(3, color));
	  }

	  var values = color.substring(marker + 1, color.length - 1).split(',');
	  values = values.map(function (value) {
	    return parseFloat(value);
	  });
	  return {
	    type: type,
	    values: values
	  };
	}
	/**
	 * Converts a color object with type and values to a string.
	 *
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */

	function recomposeColor(color) {
	  var type = color.type;
	  var values = color.values;

	  if (type.indexOf('rgb') !== -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    values = values.map(function (n, i) {
	      return i < 3 ? parseInt(n, 10) : n;
	    });
	  } else if (type.indexOf('hsl') !== -1) {
	    values[1] = "".concat(values[1], "%");
	    values[2] = "".concat(values[2], "%");
	  }

	  return "".concat(type, "(").concat(values.join(', '), ")");
	}
	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 *
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21.
	 */

	function getContrastRatio(foreground, background) {
	  var lumA = getLuminance(foreground);
	  var lumB = getLuminance(background);
	  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
	}
	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */

	function getLuminance(color) {
	  color = decomposeColor(color);
	  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
	  rgb = rgb.map(function (val) {
	    val /= 255; // normalized

	    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	  }); // Truncate at 3 digits

	  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
	}
	/**
	 * Darkens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function darken(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') !== -1) {
	    for (var i = 0; i < 3; i += 1) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }

	  return recomposeColor(color);
	}
	/**
	 * Lightens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function lighten(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') !== -1) {
	    for (var i = 0; i < 3; i += 1) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  }

	  return recomposeColor(color);
	}

	var light = {
	  // The colors used to style the text.
	  text: {
	    // The most important text.
	    primary: 'rgba(0, 0, 0, 0.87)',
	    // Secondary text.
	    secondary: 'rgba(0, 0, 0, 0.54)',
	    // Disabled text have even lower visual prominence.
	    disabled: 'rgba(0, 0, 0, 0.38)',
	    // Text hints.
	    hint: 'rgba(0, 0, 0, 0.38)'
	  },
	  // The color used to divide different elements.
	  divider: 'rgba(0, 0, 0, 0.12)',
	  // The background colors used to style the surfaces.
	  // Consistency between these values is important.
	  background: {
	    paper: common$1.white,
	    default: grey$1[50]
	  },
	  // The colors used to style the action elements.
	  action: {
	    // The color of an active action like an icon button.
	    active: 'rgba(0, 0, 0, 0.54)',
	    // The color of an hovered action.
	    hover: 'rgba(0, 0, 0, 0.04)',
	    hoverOpacity: 0.04,
	    // The color of a selected action.
	    selected: 'rgba(0, 0, 0, 0.08)',
	    selectedOpacity: 0.08,
	    // The color of a disabled action.
	    disabled: 'rgba(0, 0, 0, 0.26)',
	    // The background color of a disabled action.
	    disabledBackground: 'rgba(0, 0, 0, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(0, 0, 0, 0.12)',
	    focusOpacity: 0.12,
	    activatedOpacity: 0.12
	  }
	};
	var dark = {
	  text: {
	    primary: common$1.white,
	    secondary: 'rgba(255, 255, 255, 0.7)',
	    disabled: 'rgba(255, 255, 255, 0.5)',
	    hint: 'rgba(255, 255, 255, 0.5)',
	    icon: 'rgba(255, 255, 255, 0.5)'
	  },
	  divider: 'rgba(255, 255, 255, 0.12)',
	  background: {
	    paper: grey$1[800],
	    default: '#303030'
	  },
	  action: {
	    active: common$1.white,
	    hover: 'rgba(255, 255, 255, 0.08)',
	    hoverOpacity: 0.08,
	    selected: 'rgba(255, 255, 255, 0.16)',
	    selectedOpacity: 0.16,
	    disabled: 'rgba(255, 255, 255, 0.3)',
	    disabledBackground: 'rgba(255, 255, 255, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(255, 255, 255, 0.12)',
	    focusOpacity: 0.12,
	    activatedOpacity: 0.24
	  }
	};

	function addLightOrDark(intent, direction, shade, tonalOffset) {
	  var tonalOffsetLight = tonalOffset.light || tonalOffset;
	  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

	  if (!intent[direction]) {
	    if (intent.hasOwnProperty(shade)) {
	      intent[direction] = intent[shade];
	    } else if (direction === 'light') {
	      intent.light = lighten(intent.main, tonalOffsetLight);
	    } else if (direction === 'dark') {
	      intent.dark = darken(intent.main, tonalOffsetDark);
	    }
	  }
	}

	function createPalette(palette) {
	  var _palette$primary = palette.primary,
	      primary = _palette$primary === void 0 ? {
	    light: indigo$1[300],
	    main: indigo$1[500],
	    dark: indigo$1[700]
	  } : _palette$primary,
	      _palette$secondary = palette.secondary,
	      secondary = _palette$secondary === void 0 ? {
	    light: pink$1.A200,
	    main: pink$1.A400,
	    dark: pink$1.A700
	  } : _palette$secondary,
	      _palette$error = palette.error,
	      error = _palette$error === void 0 ? {
	    light: red$1[300],
	    main: red$1[500],
	    dark: red$1[700]
	  } : _palette$error,
	      _palette$warning = palette.warning,
	      warning = _palette$warning === void 0 ? {
	    light: orange$1[300],
	    main: orange$1[500],
	    dark: orange$1[700]
	  } : _palette$warning,
	      _palette$info = palette.info,
	      info = _palette$info === void 0 ? {
	    light: blue$1[300],
	    main: blue$1[500],
	    dark: blue$1[700]
	  } : _palette$info,
	      _palette$success = palette.success,
	      success = _palette$success === void 0 ? {
	    light: green$1[300],
	    main: green$1[500],
	    dark: green$1[700]
	  } : _palette$success,
	      _palette$type = palette.type,
	      type = _palette$type === void 0 ? 'light' : _palette$type,
	      _palette$contrastThre = palette.contrastThreshold,
	      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
	      _palette$tonalOffset = palette.tonalOffset,
	      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
	      other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
	  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
	  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


	  function getContrastText(background) {
	    var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

	    return contrastText;
	  }

	  var augmentColor = function augmentColor(color) {
	    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
	    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
	    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
	    color = _extends$1({}, color);

	    if (!color.main && color[mainShade]) {
	      color.main = color[mainShade];
	    }

	    if (!color.main) {
	      throw new Error(formatMuiErrorMessage(4, mainShade));
	    }

	    if (typeof color.main !== 'string') {
	      throw new Error(formatMuiErrorMessage(5, JSON.stringify(color.main)));
	    }

	    addLightOrDark(color, 'light', lightShade, tonalOffset);
	    addLightOrDark(color, 'dark', darkShade, tonalOffset);

	    if (!color.contrastText) {
	      color.contrastText = getContrastText(color.main);
	    }

	    return color;
	  };

	  var types = {
	    dark: dark,
	    light: light
	  };

	  var paletteOutput = deepmerge(_extends$1({
	    // A collection of common colors.
	    common: common$1,
	    // The palette type, can be light or dark.
	    type: type,
	    // The colors used to represent primary interface elements for a user.
	    primary: augmentColor(primary),
	    // The colors used to represent secondary interface elements for a user.
	    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
	    // The colors used to represent interface elements that the user should be made aware of.
	    error: augmentColor(error),
	    // The colors used to represent potentially dangerous actions or important messages.
	    warning: augmentColor(warning),
	    // The colors used to present information to the user that is neutral and not necessarily important.
	    info: augmentColor(info),
	    // The colors used to indicate the successful completion of an action that user triggered.
	    success: augmentColor(success),
	    // The grey colors.
	    grey: grey$1,
	    // Used by `getContrastText()` to maximize the contrast between
	    // the background and the text.
	    contrastThreshold: contrastThreshold,
	    // Takes a background color and returns the text color that maximizes the contrast.
	    getContrastText: getContrastText,
	    // Generate a rich color object.
	    augmentColor: augmentColor,
	    // Used by the functions below to shift a color's luminance by approximately
	    // two indexes within its tonal palette.
	    // E.g., shift from Red 500 to Red 300 or Red 700.
	    tonalOffset: tonalOffset
	  }, types[type]), other);
	  return paletteOutput;
	}

	function round(value) {
	  return Math.round(value * 1e5) / 1e5;
	}

	function roundWithDeprecationWarning(value) {

	  return round(value);
	}

	var caseAllCaps = {
	  textTransform: 'uppercase'
	};
	var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
	/**
	 * @see @link{https://material.io/design/typography/the-type-system.html}
	 * @see @link{https://material.io/design/typography/understanding-typography.html}
	 */

	function createTypography(palette, typography) {
	  var _ref = typeof typography === 'function' ? typography(palette) : typography,
	      _ref$fontFamily = _ref.fontFamily,
	      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
	      _ref$fontSize = _ref.fontSize,
	      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
	      _ref$fontWeightLight = _ref.fontWeightLight,
	      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
	      _ref$fontWeightRegula = _ref.fontWeightRegular,
	      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
	      _ref$fontWeightMedium = _ref.fontWeightMedium,
	      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
	      _ref$fontWeightBold = _ref.fontWeightBold,
	      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
	      _ref$htmlFontSize = _ref.htmlFontSize,
	      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
	      allVariants = _ref.allVariants,
	      pxToRem2 = _ref.pxToRem,
	      other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

	  var coef = fontSize / 14;

	  var pxToRem = pxToRem2 || function (size) {
	    return "".concat(size / htmlFontSize * coef, "rem");
	  };

	  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
	    return _extends$1({
	      fontFamily: fontFamily,
	      fontWeight: fontWeight,
	      fontSize: pxToRem(size),
	      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
	      lineHeight: lineHeight
	    }, fontFamily === defaultFontFamily ? {
	      letterSpacing: "".concat(round(letterSpacing / size), "em")
	    } : {}, casing, allVariants);
	  };

	  var variants = {
	    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
	    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
	    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
	    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
	    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
	    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
	    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
	    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
	    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
	    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
	    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
	    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
	    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
	  };
	  return deepmerge(_extends$1({
	    htmlFontSize: htmlFontSize,
	    pxToRem: pxToRem,
	    round: roundWithDeprecationWarning,
	    // TODO v5: remove
	    fontFamily: fontFamily,
	    fontSize: fontSize,
	    fontWeightLight: fontWeightLight,
	    fontWeightRegular: fontWeightRegular,
	    fontWeightMedium: fontWeightMedium,
	    fontWeightBold: fontWeightBold
	  }, variants), other, {
	    clone: false // No need to clone deep

	  });
	}

	var shadowKeyUmbraOpacity = 0.2;
	var shadowKeyPenumbraOpacity = 0.14;
	var shadowAmbientShadowOpacity = 0.12;

	function createShadow() {
	  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
	} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


	var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
	var shadows$1 = shadows;

	var shape = {
	  borderRadius: 4
	};
	var shape$1 = shape;

	function createUnarySpacing(theme) {
	  var themeSpacing = theme.spacing || 8;

	  if (typeof themeSpacing === 'number') {
	    return function (abs) {

	      return themeSpacing * abs;
	    };
	  }

	  if (Array.isArray(themeSpacing)) {
	    return function (abs) {

	      return themeSpacing[abs];
	    };
	  }

	  if (typeof themeSpacing === 'function') {
	    return themeSpacing;
	  }

	  return function () {
	    return undefined;
	  };
	}

	function createSpacing() {
	  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8; // Already transformed.

	  if (spacingInput.mui) {
	    return spacingInput;
	  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
	  // Smaller components, such as icons and type, can align to a 4dp grid.
	  // https://material.io/design/layout/understanding-layout.html#usage


	  var transform = createUnarySpacing({
	    spacing: spacingInput
	  });

	  var spacing = function spacing() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (args.length === 0) {
	      return transform(1);
	    }

	    if (args.length === 1) {
	      return transform(args[0]);
	    }

	    return args.map(function (argument) {
	      if (typeof argument === 'string') {
	        return argument;
	      }

	      var output = transform(argument);
	      return typeof output === 'number' ? "".concat(output, "px") : output;
	    }).join(' ');
	  }; // Backward compatibility, to remove in v5.


	  Object.defineProperty(spacing, 'unit', {
	    get: function get() {

	      return spacingInput;
	    }
	  });
	  spacing.mui = true;
	  return spacing;
	}

	// to learn the context in which each easing should be used.

	var easing = {
	  // This is the most common easing curve.
	  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
	  // Objects enter the screen at full velocity from off-screen and
	  // slowly decelerate to a resting point.
	  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
	  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
	  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
	  // The sharp curve is used by objects that may return to the screen at any time.
	  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
	}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
	// to learn when use what timing

	var duration = {
	  shortest: 150,
	  shorter: 200,
	  short: 250,
	  // most basic recommended timing
	  standard: 300,
	  // this is to be used in complex animations
	  complex: 375,
	  // recommended when something is entering screen
	  enteringScreen: 225,
	  // recommended when something is leaving screen
	  leavingScreen: 195
	};

	function formatMs(milliseconds) {
	  return "".concat(Math.round(milliseconds), "ms");
	}
	/**
	 * @param {string|Array} props
	 * @param {object} param
	 * @param {string} param.prop
	 * @param {number} param.duration
	 * @param {string} param.easing
	 * @param {number} param.delay
	 */


	var transitions = {
	  easing: easing,
	  duration: duration,
	  create: function create() {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var _options$duration = options.duration,
	        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
	        _options$easing = options.easing,
	        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
	        _options$delay = options.delay,
	        delay = _options$delay === void 0 ? 0 : _options$delay;
	        _objectWithoutProperties(options, ["duration", "easing", "delay"]);

	    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
	      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
	    }).join(',');
	  },
	  getAutoHeightDuration: function getAutoHeightDuration(height) {
	    if (!height) {
	      return 0;
	    }

	    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

	    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
	  }
	};

	// We need to centralize the zIndex definitions as they work
	// like global values in the browser.
	var zIndex = {
	  mobileStepper: 1000,
	  speedDial: 1050,
	  appBar: 1100,
	  drawer: 1200,
	  modal: 1300,
	  snackbar: 1400,
	  tooltip: 1500
	};
	var zIndex$1 = zIndex;

	function createTheme() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var _options$breakpoints = options.breakpoints,
	      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
	      _options$mixins = options.mixins,
	      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
	      _options$palette = options.palette,
	      paletteInput = _options$palette === void 0 ? {} : _options$palette,
	      spacingInput = options.spacing,
	      _options$typography = options.typography,
	      typographyInput = _options$typography === void 0 ? {} : _options$typography,
	      other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

	  var palette = createPalette(paletteInput);
	  var breakpoints = createBreakpoints(breakpointsInput);
	  var spacing = createSpacing(spacingInput);
	  var muiTheme = deepmerge({
	    breakpoints: breakpoints,
	    direction: 'ltr',
	    mixins: createMixins(breakpoints, spacing, mixinsInput),
	    overrides: {},
	    // Inject custom styles
	    palette: palette,
	    props: {},
	    // Provide default props
	    shadows: shadows$1,
	    typography: createTypography(palette, typographyInput),
	    spacing: spacing,
	    shape: shape$1,
	    transitions: transitions,
	    zIndex: zIndex$1
	  }, other);

	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  muiTheme = args.reduce(function (acc, argument) {
	    return deepmerge(acc, argument);
	  }, muiTheme);

	  return muiTheme;
	}

	var defaultTheme = createTheme();
	var defaultTheme$1 = defaultTheme;

	function withStyles(stylesOrCreator, options) {
	  return withStylesWithoutDefault(stylesOrCreator, _extends$1({
	    defaultTheme: defaultTheme$1
	  }, options));
	}

	//
	// A strict capitalization should uppercase the first letter of each word a the sentence.
	// We only handle the first word.

	function capitalize(string) {
	  if (typeof string !== 'string') {
	    throw new Error(formatMuiErrorMessage(7));
	  }

	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

	var styles = function styles(theme) {
	  return {
	    /* Styles applied to the root element. */
	    root: {
	      margin: 0
	    },

	    /* Styles applied to the root element if `variant="body2"`. */
	    body2: theme.typography.body2,

	    /* Styles applied to the root element if `variant="body1"`. */
	    body1: theme.typography.body1,

	    /* Styles applied to the root element if `variant="caption"`. */
	    caption: theme.typography.caption,

	    /* Styles applied to the root element if `variant="button"`. */
	    button: theme.typography.button,

	    /* Styles applied to the root element if `variant="h1"`. */
	    h1: theme.typography.h1,

	    /* Styles applied to the root element if `variant="h2"`. */
	    h2: theme.typography.h2,

	    /* Styles applied to the root element if `variant="h3"`. */
	    h3: theme.typography.h3,

	    /* Styles applied to the root element if `variant="h4"`. */
	    h4: theme.typography.h4,

	    /* Styles applied to the root element if `variant="h5"`. */
	    h5: theme.typography.h5,

	    /* Styles applied to the root element if `variant="h6"`. */
	    h6: theme.typography.h6,

	    /* Styles applied to the root element if `variant="subtitle1"`. */
	    subtitle1: theme.typography.subtitle1,

	    /* Styles applied to the root element if `variant="subtitle2"`. */
	    subtitle2: theme.typography.subtitle2,

	    /* Styles applied to the root element if `variant="overline"`. */
	    overline: theme.typography.overline,

	    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
	    srOnly: {
	      position: 'absolute',
	      height: 1,
	      width: 1,
	      overflow: 'hidden'
	    },

	    /* Styles applied to the root element if `align="left"`. */
	    alignLeft: {
	      textAlign: 'left'
	    },

	    /* Styles applied to the root element if `align="center"`. */
	    alignCenter: {
	      textAlign: 'center'
	    },

	    /* Styles applied to the root element if `align="right"`. */
	    alignRight: {
	      textAlign: 'right'
	    },

	    /* Styles applied to the root element if `align="justify"`. */
	    alignJustify: {
	      textAlign: 'justify'
	    },

	    /* Styles applied to the root element if `nowrap={true}`. */
	    noWrap: {
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      whiteSpace: 'nowrap'
	    },

	    /* Styles applied to the root element if `gutterBottom={true}`. */
	    gutterBottom: {
	      marginBottom: '0.35em'
	    },

	    /* Styles applied to the root element if `paragraph={true}`. */
	    paragraph: {
	      marginBottom: 16
	    },

	    /* Styles applied to the root element if `color="inherit"`. */
	    colorInherit: {
	      color: 'inherit'
	    },

	    /* Styles applied to the root element if `color="primary"`. */
	    colorPrimary: {
	      color: theme.palette.primary.main
	    },

	    /* Styles applied to the root element if `color="secondary"`. */
	    colorSecondary: {
	      color: theme.palette.secondary.main
	    },

	    /* Styles applied to the root element if `color="textPrimary"`. */
	    colorTextPrimary: {
	      color: theme.palette.text.primary
	    },

	    /* Styles applied to the root element if `color="textSecondary"`. */
	    colorTextSecondary: {
	      color: theme.palette.text.secondary
	    },

	    /* Styles applied to the root element if `color="error"`. */
	    colorError: {
	      color: theme.palette.error.main
	    },

	    /* Styles applied to the root element if `display="inline"`. */
	    displayInline: {
	      display: 'inline'
	    },

	    /* Styles applied to the root element if `display="block"`. */
	    displayBlock: {
	      display: 'block'
	    }
	  };
	};
	var defaultVariantMapping = {
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  subtitle1: 'h6',
	  subtitle2: 'h6',
	  body1: 'p',
	  body2: 'p'
	};
	var Typography = /*#__PURE__*/react.forwardRef(function Typography(props, ref) {
	  var _props$align = props.align,
	      align = _props$align === void 0 ? 'inherit' : _props$align,
	      classes = props.classes,
	      className = props.className,
	      _props$color = props.color,
	      color = _props$color === void 0 ? 'initial' : _props$color,
	      component = props.component,
	      _props$display = props.display,
	      display = _props$display === void 0 ? 'initial' : _props$display,
	      _props$gutterBottom = props.gutterBottom,
	      gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
	      _props$noWrap = props.noWrap,
	      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
	      _props$paragraph = props.paragraph,
	      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
	      _props$variant = props.variant,
	      variant = _props$variant === void 0 ? 'body1' : _props$variant,
	      _props$variantMapping = props.variantMapping,
	      variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
	      other = _objectWithoutProperties(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

	  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
	  return /*#__PURE__*/react.createElement(Component, _extends$1({
	    className: clsx(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat(capitalize(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat(capitalize(align))], display !== 'initial' && classes["display".concat(capitalize(display))]),
	    ref: ref
	  }, other));
	});
	var Typography$1 = withStyles(styles, {
	  name: 'MuiTypography'
	})(Typography);

	const Settings = () => {
	  const [brightnessEFB, setbrightnessEFB] = useSimVar('L:C17_EFB_Brightness', 'enum');

	  const handleChange = (event, newValue) => {
	    setbrightnessEFB(newValue);
	  };

	  return /*#__PURE__*/jsxRuntime.jsx("div", {
	    className: "settingsContainer",
	    children: /*#__PURE__*/jsxRuntime.jsxs(Box$1, {
	      sx: {
	        position: 'absolute',
	        width: 500,
	        height: 300,
	        backgroundColor: '16161E',
	        borderRadius: 4,
	        left: 300,
	        boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
	        color: '#1B93FF',
	        justifyContent: 'center',
	        display: 'block',
	        flexDirection: 'collumn',
	        textAlign: 'center',
	        alignItems: 'center',
	        fontSize: 14
	      },
	      children: [/*#__PURE__*/jsxRuntime.jsx("h1", {
	        style: {
	          marginTop: 5
	        },
	        children: "Settings"
	      }), /*#__PURE__*/jsxRuntime.jsxs(Stack$1, {
	        spacing: 1,
	        children: [/*#__PURE__*/jsxRuntime.jsx(Typography$1, {
	          id: "continuous-slider",
	          gutterBottom: true,
	          children: "EFB Brightness"
	        }), /*#__PURE__*/jsxRuntime.jsx(Box$1, {
	          sx: {
	            marginTop: 30,
	            borderRadius: 4,
	            width: 400,
	            height: 200,
	            left: 50,
	            textAlign: 'center',
	            alignItems: 'center',
	            position: 'absolute',
	            justifyContent: 'center'
	          },
	          children: /*#__PURE__*/jsxRuntime.jsx(Slider$1, {
	            "aria-labelledby": "brightness",
	            value: brightnessEFB,
	            onChange: handleChange
	          })
	        })]
	      })]
	    })
	  });
	};

	const GetImageFromPDF = props => {
	  let page1Src = "/Images/FM/DeltaSim C17 FLIGHT MANUAL-".concat(String(props.page).padStart(2, '0'), ".png");
	  let page2Src = "/Images/FM/DeltaSim C17 FLIGHT MANUAL-".concat(String(props.page + 1).padStart(2, '0'), ".png");
	  return /*#__PURE__*/jsxRuntime.jsxs("div", {
	    style: {
	      paddingTop: '30px',
	      display: 'flex'
	    },
	    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
	      style: {
	        flex: 1
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx("img", {
	        className: "".concat(props.invertColors ? 'invert' : ''),
	        src: page1Src,
	        alt: "Page ".concat(props.page),
	        style: {
	          maxWidth: '100%'
	        }
	      })
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      style: {
	        flex: 1
	      },
	      children: /*#__PURE__*/jsxRuntime.jsx("img", {
	        className: "".concat(props.invertColors ? 'invert' : ''),
	        src: page2Src,
	        alt: "Page ".concat(props.page + 1),
	        style: {
	          maxWidth: '100%'
	        }
	      })
	    })]
	  });
	};

	const Bookmarks = props => {
	  const [bookmarkMenu, setBookmarkMenu] = react.useState(false);
	  return /*#__PURE__*/jsxRuntime.jsxs("div", {
	    style: {
	      position: 'absolute',
	      top: '30%'
	    },
	    children: [/*#__PURE__*/jsxRuntime.jsx(Button$1, {
	      children: "Bookmarks"
	    }), /*#__PURE__*/jsxRuntime.jsx("div", {
	      className: "dropdown ".concat(bookmarkMenu ? 'shown' : 'hidden'),
	      children: /*#__PURE__*/jsxRuntime.jsx("ul", {
	        children: props.pages.map((pages, index) => /*#__PURE__*/jsxRuntime.jsx("li", {
	          onClick: () => props.navigateTo(pages),
	          children: pages
	        }, index))
	      })
	    })]
	  });
	};

	const MANUAL = () => {
	  const [currentPage, setCurrentPage] = react.useState(1);
	  const [_, forceReRender] = react.useReducer(x => x + 1, 0);
	  const [bookmarks, setBookmarks] = react.useState(() => {
	    const saved = localStorage.getItem('bookmarks');
	    const initalValue = JSON.parse(saved);
	    return initalValue || [];
	  });
	  const [invert, setInvert] = react.useState(false);
	  const totalPages = 68; // Total number of images

	  const navigateToPage = pageNumber => {
	    if (pageNumber >= 1 && pageNumber <= totalPages) {
	      setCurrentPage(pageNumber);
	    }
	  };

	  const handleNextPage = () => {
	    navigateToPage(currentPage + 2);
	  };

	  const handleInvert = () => {
	    setInvert(!invert);
	  };

	  const handlePreviousPage = () => {
	    navigateToPage(currentPage - 2);
	  };

	  const bookmarkPageAdd = page => {
	    if (bookmarks.includes(page)) {
	      console.log('already a bookmark');
	      return;
	    }

	    let prev = bookmarks;
	    prev.push(page);
	    setBookmarks(prev);
	    forceReRender();
	  };

	  const bookmarkPageRemove = page => {
	    if (bookmarks.length == 0) {
	      bookmarks.shift();
	      return;
	    }

	    const index = bookmarks.indexOf(page);
	    bookmarks.splice(index, 1);
	    setBookmarks(bookmarks);
	    forceReRender();
	  };

	  react.useEffect(() => {
	    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	  }, [bookmarks]);
	  return /*#__PURE__*/jsxRuntime.jsxs("div", {
	    className: "PDFContainer",
	    children: [/*#__PURE__*/jsxRuntime.jsx(GetImageFromPDF, {
	      invertColors: invert,
	      page: currentPage
	    }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	      size: "small",
	      className: "previousPage",
	      variant: "contained",
	      onClick: handlePreviousPage,
	      children: "<"
	    }), /*#__PURE__*/jsxRuntime.jsxs("div", {
	      className: "pageDisplay",
	      children: ["Page ", currentPage, " and ", currentPage + 1, " of ", totalPages]
	    }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	      size: "small",
	      className: "nextPage",
	      variant: "contained",
	      onClick: handleNextPage,
	      children: ">"
	    }), /*#__PURE__*/jsxRuntime.jsx(Button$1, {
	      className: "invertButton",
	      variant: "contained",
	      onClick: handleInvert,
	      children: "Invert Colors"
	    }), /*#__PURE__*/jsxRuntime.jsxs(Button$1, {
	      onClick: () => bookmarks.includes(currentPage) ? bookmarkPageRemove(currentPage) : bookmarkPageAdd(currentPage),
	      children: [bookmarks.includes(currentPage) ? 'Remove' : 'Add', " Bookmark"]
	    }), /*#__PURE__*/jsxRuntime.jsx(Bookmarks, {
	      navigateTo: navigateToPage,
	      pages: bookmarks
	    })]
	  });
	};

	const C17EFB = () => {
	  return /*#__PURE__*/jsxRuntime.jsx(MemoryRouter, {
	    children: /*#__PURE__*/jsxRuntime.jsx(EfbPower, {
	      localVar: "C17_EFB_PWR",
	      children: /*#__PURE__*/jsxRuntime.jsxs("div", {
	        className: "EFBContainer",
	        children: [/*#__PURE__*/jsxRuntime.jsxs(Routes, {
	          children: [/*#__PURE__*/jsxRuntime.jsx(Route, {
	            path: "/",
	            element: /*#__PURE__*/jsxRuntime.jsx(Home, {})
	          }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	            path: "/Aircraft",
	            element: /*#__PURE__*/jsxRuntime.jsx(Airctaft, {})
	          }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	            path: "/Browser",
	            element: /*#__PURE__*/jsxRuntime.jsx(Browser, {})
	          }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	            path: "/PDF",
	            element: /*#__PURE__*/jsxRuntime.jsx(MANUAL, {})
	          }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	            path: "/Map",
	            element: /*#__PURE__*/jsxRuntime.jsx(Map$1, {})
	          }), /*#__PURE__*/jsxRuntime.jsx(Route, {
	            path: "/Settings",
	            element: /*#__PURE__*/jsxRuntime.jsx(Settings, {})
	          })]
	        }), /*#__PURE__*/jsxRuntime.jsx(ButtonBar, {})]
	      })
	    })
	  });
	};

	render( /*#__PURE__*/jsxRuntime.jsx(C17EFB, {}));

})();
