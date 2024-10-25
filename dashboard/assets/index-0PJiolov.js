function rC(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function iy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var sy = { exports: {} },
  ll = {},
  ay = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ji = Symbol.for("react.element"),
  oC = Symbol.for("react.portal"),
  iC = Symbol.for("react.fragment"),
  sC = Symbol.for("react.strict_mode"),
  aC = Symbol.for("react.profiler"),
  lC = Symbol.for("react.provider"),
  uC = Symbol.for("react.context"),
  cC = Symbol.for("react.forward_ref"),
  fC = Symbol.for("react.suspense"),
  dC = Symbol.for("react.memo"),
  hC = Symbol.for("react.lazy"),
  Mh = Symbol.iterator;
function mC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mh && e[Mh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ly = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  uy = Object.assign,
  cy = {};
function No(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cy),
    (this.updater = n || ly);
}
No.prototype.isReactComponent = {};
No.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
No.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fy() {}
fy.prototype = No.prototype;
function Pf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cy),
    (this.updater = n || ly);
}
var Mf = (Pf.prototype = new fy());
Mf.constructor = Pf;
uy(Mf, No.prototype);
Mf.isPureReactComponent = !0;
var Nh = Array.isArray,
  dy = Object.prototype.hasOwnProperty,
  Nf = { current: null },
  hy = { key: !0, ref: !0, __self: !0, __source: !0 };
function my(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      dy.call(t, r) && !hy.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ji,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Nf.current,
  };
}
function pC(e, t) {
  return {
    $$typeof: Ji,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Rf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ji;
}
function gC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Rh = /\/+/g;
function Hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gC("" + e.key)
    : t.toString(36);
}
function qs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ji:
          case oC:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Hl(s, 0) : r),
      Nh(o)
        ? ((n = ""),
          e != null && (n = e.replace(Rh, "$&/") + "/"),
          qs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Rf(o) &&
            (o = pC(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Rh, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Nh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Hl(i, a);
      s += qs(i, t, n, l, o);
    }
  else if (((l = mC(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Hl(i, a++)), (s += qs(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function vs(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    qs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function yC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ze = { current: null },
  Qs = { transition: null },
  vC = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: Qs,
    ReactCurrentOwner: Nf,
  };
function py() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = {
  map: vs,
  forEach: function (e, t, n) {
    vs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Rf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
H.Component = No;
H.Fragment = iC;
H.Profiler = aC;
H.PureComponent = Pf;
H.StrictMode = sC;
H.Suspense = fC;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vC;
H.act = py;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = uy({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Nf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      dy.call(t, l) &&
        !hy.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ji, type: e.type, key: o, ref: i, props: r, _owner: s };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: uC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lC, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = my;
H.createFactory = function (e) {
  var t = my.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: cC, render: e };
};
H.isValidElement = Rf;
H.lazy = function (e) {
  return { $$typeof: hC, _payload: { _status: -1, _result: e }, _init: yC };
};
H.memo = function (e, t) {
  return { $$typeof: dC, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Qs.transition;
  Qs.transition = {};
  try {
    e();
  } finally {
    Qs.transition = t;
  }
};
H.unstable_act = py;
H.useCallback = function (e, t) {
  return ze.current.useCallback(e, t);
};
H.useContext = function (e) {
  return ze.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return ze.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return ze.current.useEffect(e, t);
};
H.useId = function () {
  return ze.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return ze.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return ze.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return ze.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return ze.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return ze.current.useRef(e);
};
H.useState = function (e) {
  return ze.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return ze.current.useTransition();
};
H.version = "18.3.1";
ay.exports = H;
var g = ay.exports;
const Yt = iy(g),
  gy = rC({ __proto__: null, default: Yt }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wC = g,
  xC = Symbol.for("react.element"),
  SC = Symbol.for("react.fragment"),
  CC = Object.prototype.hasOwnProperty,
  EC = wC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  TC = { key: !0, ref: !0, __self: !0, __source: !0 };
function yy(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) CC.call(t, r) && !TC.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: xC,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: EC.current,
  };
}
ll.Fragment = SC;
ll.jsx = yy;
ll.jsxs = yy;
sy.exports = ll;
var C = sy.exports,
  qu = {},
  vy = { exports: {} },
  st = {},
  wy = { exports: {} },
  xy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, N) {
    var D = M.length;
    M.push(N);
    e: for (; 0 < D; ) {
      var V = (D - 1) >>> 1,
        X = M[V];
      if (0 < o(X, N)) (M[V] = N), (M[D] = X), (D = V);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var N = M[0],
      D = M.pop();
    if (D !== N) {
      M[0] = D;
      e: for (var V = 0, X = M.length, Ft = X >>> 1; V < Ft; ) {
        var Qe = 2 * (V + 1) - 1,
          mn = M[Qe],
          Fe = Qe + 1,
          We = M[Fe];
        if (0 > o(mn, D))
          Fe < X && 0 > o(We, mn)
            ? ((M[V] = We), (M[Fe] = D), (V = Fe))
            : ((M[V] = mn), (M[Qe] = D), (V = Qe));
        else if (Fe < X && 0 > o(We, D)) (M[V] = We), (M[Fe] = D), (V = Fe);
        else break e;
      }
    }
    return N;
  }
  function o(M, N) {
    var D = M.sortIndex - N.sortIndex;
    return D !== 0 ? D : M.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    y = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(M) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= M)
        r(u), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = n(u);
    }
  }
  function S(M) {
    if (((v = !1), w(M), !y))
      if (n(l) !== null) (y = !0), $(E);
      else {
        var N = n(u);
        N !== null && U(S, N.startTime - M);
      }
  }
  function E(M, N) {
    (y = !1), v && ((v = !1), m(T), (T = -1)), (h = !0);
    var D = d;
    try {
      for (
        w(N), f = n(l);
        f !== null && (!(f.expirationTime > N) || (M && !j()));

      ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var X = V(f.expirationTime <= N);
          (N = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(l) && r(l),
            w(N);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Ft = !0;
      else {
        var Qe = n(u);
        Qe !== null && U(S, Qe.startTime - N), (Ft = !1);
      }
      return Ft;
    } finally {
      (f = null), (d = D), (h = !1);
    }
  }
  var P = !1,
    k = null,
    T = -1,
    b = 5,
    A = -1;
  function j() {
    return !(e.unstable_now() - A < b);
  }
  function L() {
    if (k !== null) {
      var M = e.unstable_now();
      A = M;
      var N = !0;
      try {
        N = k(!0, M);
      } finally {
        N ? G() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var G;
  if (typeof p == "function")
    G = function () {
      p(L);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      ce = W.port2;
    (W.port1.onmessage = L),
      (G = function () {
        ce.postMessage(null);
      });
  } else
    G = function () {
      x(L, 0);
    };
  function $(M) {
    (k = M), P || ((P = !0), G());
  }
  function U(M, N) {
    T = x(function () {
      M(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || h || ((y = !0), $(E));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (b = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = d;
      }
      var D = d;
      d = N;
      try {
        return M();
      } finally {
        d = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, N) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var D = d;
      d = M;
      try {
        return N();
      } finally {
        d = D;
      }
    }),
    (e.unstable_scheduleCallback = function (M, N, D) {
      var V = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? V + D : V))
          : (D = V),
        M)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = D + X),
        (M = {
          id: c++,
          callback: N,
          priorityLevel: M,
          startTime: D,
          expirationTime: X,
          sortIndex: -1,
        }),
        D > V
          ? ((M.sortIndex = D),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (v ? (m(T), (T = -1)) : (v = !0), U(S, D - V)))
          : ((M.sortIndex = X), t(l, M), y || h || ((y = !0), $(E))),
        M
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (M) {
      var N = d;
      return function () {
        var D = d;
        d = N;
        try {
          return M.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    });
})(xy);
wy.exports = xy;
var kC = wy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var PC = g,
  ot = kC;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Sy = new Set(),
  Ti = {};
function Tr(e, t) {
  po(e, t), po(e + "Capture", t);
}
function po(e, t) {
  for (Ti[e] = t, e = 0; e < t.length; e++) Sy.add(t[e]);
}
var sn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Qu = Object.prototype.hasOwnProperty,
  MC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ah = {},
  Oh = {};
function NC(e) {
  return Qu.call(Oh, e)
    ? !0
    : Qu.call(Ah, e)
      ? !1
      : MC.test(e)
        ? (Oh[e] = !0)
        : ((Ah[e] = !0), !1);
}
function RC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function AC(e, t, n, r) {
  if (t === null || typeof t > "u" || RC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ue(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new Ue(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Pe[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Pe[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Pe[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Pe[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Pe[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Pe[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Af = /[\-:]([a-z])/g;
function Of(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Af, Of);
    Pe[t] = new Ue(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Af, Of);
    Pe[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Af, Of);
  Pe[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Pe[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Ue(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Pe[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bf(e, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (AC(t, n, o, r) && (n = null),
    r || o === null
      ? NC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hn = PC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ws = Symbol.for("react.element"),
  jr = Symbol.for("react.portal"),
  zr = Symbol.for("react.fragment"),
  Df = Symbol.for("react.strict_mode"),
  Xu = Symbol.for("react.profiler"),
  Cy = Symbol.for("react.provider"),
  Ey = Symbol.for("react.context"),
  If = Symbol.for("react.forward_ref"),
  Ju = Symbol.for("react.suspense"),
  ec = Symbol.for("react.suspense_list"),
  Lf = Symbol.for("react.memo"),
  En = Symbol.for("react.lazy"),
  Ty = Symbol.for("react.offscreen"),
  bh = Symbol.iterator;
function Wo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bh && e[bh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Gl;
function ni(e) {
  if (Gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gl = (t && t[1]) || "";
    }
  return (
    `
` +
    Gl +
    e
  );
}
var Kl = !1;
function Yl(e, t) {
  if (!e || Kl) return "";
  Kl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Kl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ni(e) : "";
}
function OC(e) {
  switch (e.tag) {
    case 5:
      return ni(e.type);
    case 16:
      return ni("Lazy");
    case 13:
      return ni("Suspense");
    case 19:
      return ni("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yl(e.type, !1)), e;
    case 11:
      return (e = Yl(e.type.render, !1)), e;
    case 1:
      return (e = Yl(e.type, !0)), e;
    default:
      return "";
  }
}
function tc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zr:
      return "Fragment";
    case jr:
      return "Portal";
    case Xu:
      return "Profiler";
    case Df:
      return "StrictMode";
    case Ju:
      return "Suspense";
    case ec:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ey:
        return (e.displayName || "Context") + ".Consumer";
      case Cy:
        return (e._context.displayName || "Context") + ".Provider";
      case If:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Lf:
        return (
          (t = e.displayName || null), t !== null ? t : tc(e.type) || "Memo"
        );
      case En:
        (t = e._payload), (e = e._init);
        try {
          return tc(e(t));
        } catch {}
    }
  return null;
}
function bC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return tc(t);
    case 8:
      return t === Df ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Bn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ky(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function DC(e) {
  var t = ky(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xs(e) {
  e._valueTracker || (e._valueTracker = DC(e));
}
function Py(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ky(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function wa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function nc(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Dh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Bn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function My(e, t) {
  (t = t.checked), t != null && bf(e, "checked", t, !1);
}
function rc(e, t) {
  My(e, t);
  var n = Bn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? oc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && oc(e, t.type, Bn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ih(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function oc(e, t, n) {
  (t !== "number" || wa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ri = Array.isArray;
function ro(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ic(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Lh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (ri(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Bn(n) };
}
function Ny(e, t) {
  var n = Bn(t.value),
    r = Bn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Fh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ry(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function sc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ry(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ss,
  Ay = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ss = Ss || document.createElement("div"),
          Ss.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ss.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ki(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fi = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
    strokeWidth: !0,
  },
  IC = ["Webkit", "ms", "Moz", "O"];
Object.keys(fi).forEach(function (e) {
  IC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fi[t] = fi[e]);
  });
});
function Oy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (fi.hasOwnProperty(e) && fi[e])
      ? ("" + t).trim()
      : t + "px";
}
function by(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Oy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var LC = ue(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function ac(e, t) {
  if (t) {
    if (LC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function lc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var uc = null;
function Ff(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var cc = null,
  oo = null,
  io = null;
function _h(e) {
  if ((e = ns(e))) {
    if (typeof cc != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = hl(t)), cc(e.stateNode, e.type, t));
  }
}
function Dy(e) {
  oo ? (io ? io.push(e) : (io = [e])) : (oo = e);
}
function Iy() {
  if (oo) {
    var e = oo,
      t = io;
    if (((io = oo = null), _h(e), t)) for (e = 0; e < t.length; e++) _h(t[e]);
  }
}
function Ly(e, t) {
  return e(t);
}
function Fy() {}
var Zl = !1;
function _y(e, t, n) {
  if (Zl) return e(t, n);
  Zl = !0;
  try {
    return Ly(e, t, n);
  } finally {
    (Zl = !1), (oo !== null || io !== null) && (Fy(), Iy());
  }
}
function Pi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var fc = !1;
if (sn)
  try {
    var Ho = {};
    Object.defineProperty(Ho, "passive", {
      get: function () {
        fc = !0;
      },
    }),
      window.addEventListener("test", Ho, Ho),
      window.removeEventListener("test", Ho, Ho);
  } catch {
    fc = !1;
  }
function FC(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var di = !1,
  xa = null,
  Sa = !1,
  dc = null,
  _C = {
    onError: function (e) {
      (di = !0), (xa = e);
    },
  };
function VC(e, t, n, r, o, i, s, a, l) {
  (di = !1), (xa = null), FC.apply(_C, arguments);
}
function jC(e, t, n, r, o, i, s, a, l) {
  if ((VC.apply(this, arguments), di)) {
    if (di) {
      var u = xa;
      (di = !1), (xa = null);
    } else throw Error(R(198));
    Sa || ((Sa = !0), (dc = u));
  }
}
function kr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Vh(e) {
  if (kr(e) !== e) throw Error(R(188));
}
function zC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = kr(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Vh(o), e;
        if (i === r) return Vh(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function jy(e) {
  return (e = zC(e)), e !== null ? zy(e) : null;
}
function zy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uy = ot.unstable_scheduleCallback,
  jh = ot.unstable_cancelCallback,
  UC = ot.unstable_shouldYield,
  BC = ot.unstable_requestPaint,
  pe = ot.unstable_now,
  $C = ot.unstable_getCurrentPriorityLevel,
  _f = ot.unstable_ImmediatePriority,
  By = ot.unstable_UserBlockingPriority,
  Ca = ot.unstable_NormalPriority,
  WC = ot.unstable_LowPriority,
  $y = ot.unstable_IdlePriority,
  ul = null,
  Ut = null;
function HC(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function")
    try {
      Ut.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Nt = Math.clz32 ? Math.clz32 : YC,
  GC = Math.log,
  KC = Math.LN2;
function YC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((GC(e) / KC) | 0)) | 0;
}
var Cs = 64,
  Es = 4194304;
function oi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ea(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = oi(a)) : ((i &= s), i !== 0 && (r = oi(i)));
  } else (s = n & ~o), s !== 0 ? (r = oi(s)) : i !== 0 && (r = oi(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Nt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function ZC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qC(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Nt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = ZC(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function hc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Wy() {
  var e = Cs;
  return (Cs <<= 1), !(Cs & 4194240) && (Cs = 64), e;
}
function ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function es(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Nt(t)),
    (e[t] = n);
}
function QC(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Nt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Vf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Nt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var J = 0;
function Hy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gy,
  jf,
  Ky,
  Yy,
  Zy,
  mc = !1,
  Ts = [],
  bn = null,
  Dn = null,
  In = null,
  Mi = new Map(),
  Ni = new Map(),
  Pn = [],
  XC =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function zh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bn = null;
      break;
    case "dragenter":
    case "dragleave":
      Dn = null;
      break;
    case "mouseover":
    case "mouseout":
      In = null;
      break;
    case "pointerover":
    case "pointerout":
      Mi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ni.delete(t.pointerId);
  }
}
function Go(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ns(t)), t !== null && jf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function JC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (bn = Go(bn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Dn = Go(Dn, e, t, n, r, o)), !0;
    case "mouseover":
      return (In = Go(In, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Mi.set(i, Go(Mi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ni.set(i, Go(Ni.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function qy(e) {
  var t = ur(e.target);
  if (t !== null) {
    var n = kr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vy(n)), t !== null)) {
          (e.blockedOn = t),
            Zy(e.priority, function () {
              Ky(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (uc = r), n.target.dispatchEvent(r), (uc = null);
    } else return (t = ns(n)), t !== null && jf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Uh(e, t, n) {
  Xs(e) && n.delete(t);
}
function eE() {
  (mc = !1),
    bn !== null && Xs(bn) && (bn = null),
    Dn !== null && Xs(Dn) && (Dn = null),
    In !== null && Xs(In) && (In = null),
    Mi.forEach(Uh),
    Ni.forEach(Uh);
}
function Ko(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    mc ||
      ((mc = !0),
      ot.unstable_scheduleCallback(ot.unstable_NormalPriority, eE)));
}
function Ri(e) {
  function t(o) {
    return Ko(o, e);
  }
  if (0 < Ts.length) {
    Ko(Ts[0], e);
    for (var n = 1; n < Ts.length; n++) {
      var r = Ts[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    bn !== null && Ko(bn, e),
      Dn !== null && Ko(Dn, e),
      In !== null && Ko(In, e),
      Mi.forEach(t),
      Ni.forEach(t),
      n = 0;
    n < Pn.length;
    n++
  )
    (r = Pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pn.length && ((n = Pn[0]), n.blockedOn === null); )
    qy(n), n.blockedOn === null && Pn.shift();
}
var so = hn.ReactCurrentBatchConfig,
  Ta = !0;
function tE(e, t, n, r) {
  var o = J,
    i = so.transition;
  so.transition = null;
  try {
    (J = 1), zf(e, t, n, r);
  } finally {
    (J = o), (so.transition = i);
  }
}
function nE(e, t, n, r) {
  var o = J,
    i = so.transition;
  so.transition = null;
  try {
    (J = 4), zf(e, t, n, r);
  } finally {
    (J = o), (so.transition = i);
  }
}
function zf(e, t, n, r) {
  if (Ta) {
    var o = pc(e, t, n, r);
    if (o === null) su(e, t, r, ka, n), zh(e, r);
    else if (JC(o, e, t, n, r)) r.stopPropagation();
    else if ((zh(e, r), t & 4 && -1 < XC.indexOf(e))) {
      for (; o !== null; ) {
        var i = ns(o);
        if (
          (i !== null && Gy(i),
          (i = pc(e, t, n, r)),
          i === null && su(e, t, r, ka, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else su(e, t, r, null, n);
  }
}
var ka = null;
function pc(e, t, n, r) {
  if (((ka = null), (e = Ff(r)), (e = ur(e)), e !== null))
    if (((t = kr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ka = e), null;
}
function Qy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($C()) {
        case _f:
          return 1;
        case By:
          return 4;
        case Ca:
        case WC:
          return 16;
        case $y:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rn = null,
  Uf = null,
  Js = null;
function Xy() {
  if (Js) return Js;
  var e,
    t = Uf,
    n = t.length,
    r,
    o = "value" in Rn ? Rn.value : Rn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Js = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ea(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ks() {
  return !0;
}
function Bh() {
  return !1;
}
function at(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ks
        : Bh),
      (this.isPropagationStopped = Bh),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ks));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ks));
      },
      persist: function () {},
      isPersistent: ks,
    }),
    t
  );
}
var Ro = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bf = at(Ro),
  ts = ue({}, Ro, { view: 0, detail: 0 }),
  rE = at(ts),
  Ql,
  Xl,
  Yo,
  cl = ue({}, ts, {
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
    getModifierState: $f,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Yo &&
            (Yo && e.type === "mousemove"
              ? ((Ql = e.screenX - Yo.screenX), (Xl = e.screenY - Yo.screenY))
              : (Xl = Ql = 0),
            (Yo = e)),
          Ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xl;
    },
  }),
  $h = at(cl),
  oE = ue({}, cl, { dataTransfer: 0 }),
  iE = at(oE),
  sE = ue({}, ts, { relatedTarget: 0 }),
  Jl = at(sE),
  aE = ue({}, Ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lE = at(aE),
  uE = ue({}, Ro, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cE = at(uE),
  fE = ue({}, Ro, { data: 0 }),
  Wh = at(fE),
  dE = {
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
    MozPrintableKey: "Unidentified",
  },
  hE = {
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
    224: "Meta",
  },
  mE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mE[e]) ? !!t[e] : !1;
}
function $f() {
  return pE;
}
var gE = ue({}, ts, {
    key: function (e) {
      if (e.key) {
        var t = dE[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ea(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? hE[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $f,
    charCode: function (e) {
      return e.type === "keypress" ? ea(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ea(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  yE = at(gE),
  vE = ue({}, cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Hh = at(vE),
  wE = ue({}, ts, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $f,
  }),
  xE = at(wE),
  SE = ue({}, Ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  CE = at(SE),
  EE = ue({}, cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  TE = at(EE),
  kE = [9, 13, 27, 32],
  Wf = sn && "CompositionEvent" in window,
  hi = null;
sn && "documentMode" in document && (hi = document.documentMode);
var PE = sn && "TextEvent" in window && !hi,
  Jy = sn && (!Wf || (hi && 8 < hi && 11 >= hi)),
  Gh = " ",
  Kh = !1;
function ev(e, t) {
  switch (e) {
    case "keyup":
      return kE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function tv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ur = !1;
function ME(e, t) {
  switch (e) {
    case "compositionend":
      return tv(t);
    case "keypress":
      return t.which !== 32 ? null : ((Kh = !0), Gh);
    case "textInput":
      return (e = t.data), e === Gh && Kh ? null : e;
    default:
      return null;
  }
}
function NE(e, t) {
  if (Ur)
    return e === "compositionend" || (!Wf && ev(e, t))
      ? ((e = Xy()), (Js = Uf = Rn = null), (Ur = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var RE = {
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
  week: !0,
};
function Yh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!RE[e.type] : t === "textarea";
}
function nv(e, t, n, r) {
  Dy(r),
    (t = Pa(t, "onChange")),
    0 < t.length &&
      ((n = new Bf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var mi = null,
  Ai = null;
function AE(e) {
  hv(e, 0);
}
function fl(e) {
  var t = Wr(e);
  if (Py(t)) return e;
}
function OE(e, t) {
  if (e === "change") return t;
}
var rv = !1;
if (sn) {
  var eu;
  if (sn) {
    var tu = "oninput" in document;
    if (!tu) {
      var Zh = document.createElement("div");
      Zh.setAttribute("oninput", "return;"),
        (tu = typeof Zh.oninput == "function");
    }
    eu = tu;
  } else eu = !1;
  rv = eu && (!document.documentMode || 9 < document.documentMode);
}
function qh() {
  mi && (mi.detachEvent("onpropertychange", ov), (Ai = mi = null));
}
function ov(e) {
  if (e.propertyName === "value" && fl(Ai)) {
    var t = [];
    nv(t, Ai, e, Ff(e)), _y(AE, t);
  }
}
function bE(e, t, n) {
  e === "focusin"
    ? (qh(), (mi = t), (Ai = n), mi.attachEvent("onpropertychange", ov))
    : e === "focusout" && qh();
}
function DE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fl(Ai);
}
function IE(e, t) {
  if (e === "click") return fl(t);
}
function LE(e, t) {
  if (e === "input" || e === "change") return fl(t);
}
function FE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var At = typeof Object.is == "function" ? Object.is : FE;
function Oi(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Qu.call(t, o) || !At(e[o], t[o])) return !1;
  }
  return !0;
}
function Qh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xh(e, t) {
  var n = Qh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Qh(n);
  }
}
function iv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? iv(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sv() {
  for (var e = window, t = wa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = wa(e.document);
  }
  return t;
}
function Hf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function _E(e) {
  var t = sv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    iv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Xh(n, i));
        var s = Xh(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var VE = sn && "documentMode" in document && 11 >= document.documentMode,
  Br = null,
  gc = null,
  pi = null,
  yc = !1;
function Jh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yc ||
    Br == null ||
    Br !== wa(r) ||
    ((r = Br),
    "selectionStart" in r && Hf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (pi && Oi(pi, r)) ||
      ((pi = r),
      (r = Pa(gc, "onSelect")),
      0 < r.length &&
        ((t = new Bf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Br))));
}
function Ps(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $r = {
    animationend: Ps("Animation", "AnimationEnd"),
    animationiteration: Ps("Animation", "AnimationIteration"),
    animationstart: Ps("Animation", "AnimationStart"),
    transitionend: Ps("Transition", "TransitionEnd"),
  },
  nu = {},
  av = {};
sn &&
  ((av = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $r.animationend.animation,
    delete $r.animationiteration.animation,
    delete $r.animationstart.animation),
  "TransitionEvent" in window || delete $r.transitionend.transition);
function dl(e) {
  if (nu[e]) return nu[e];
  if (!$r[e]) return e;
  var t = $r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in av) return (nu[e] = t[n]);
  return e;
}
var lv = dl("animationend"),
  uv = dl("animationiteration"),
  cv = dl("animationstart"),
  fv = dl("transitionend"),
  dv = new Map(),
  em =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Qn(e, t) {
  dv.set(e, t), Tr(t, [e]);
}
for (var ru = 0; ru < em.length; ru++) {
  var ou = em[ru],
    jE = ou.toLowerCase(),
    zE = ou[0].toUpperCase() + ou.slice(1);
  Qn(jE, "on" + zE);
}
Qn(lv, "onAnimationEnd");
Qn(uv, "onAnimationIteration");
Qn(cv, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(fv, "onTransitionEnd");
po("onMouseEnter", ["mouseout", "mouseover"]);
po("onMouseLeave", ["mouseout", "mouseover"]);
po("onPointerEnter", ["pointerout", "pointerover"]);
po("onPointerLeave", ["pointerout", "pointerover"]);
Tr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Tr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Tr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Tr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ii =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  UE = new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));
function tm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), jC(r, t, void 0, e), (e.currentTarget = null);
}
function hv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          tm(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          tm(o, a, u), (i = l);
        }
    }
  }
  if (Sa) throw ((e = dc), (Sa = !1), (dc = null), e);
}
function re(e, t) {
  var n = t[Cc];
  n === void 0 && (n = t[Cc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (mv(t, e, 2, !1), n.add(r));
}
function iu(e, t, n) {
  var r = 0;
  t && (r |= 4), mv(n, e, r, t);
}
var Ms = "_reactListening" + Math.random().toString(36).slice(2);
function bi(e) {
  if (!e[Ms]) {
    (e[Ms] = !0),
      Sy.forEach(function (n) {
        n !== "selectionchange" && (UE.has(n) || iu(n, !1, e), iu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ms] || ((t[Ms] = !0), iu("selectionchange", !1, t));
  }
}
function mv(e, t, n, r) {
  switch (Qy(t)) {
    case 1:
      var o = tE;
      break;
    case 4:
      o = nE;
      break;
    default:
      o = zf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !fc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function su(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = ur(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  _y(function () {
    var u = i,
      c = Ff(n),
      f = [];
    e: {
      var d = dv.get(e);
      if (d !== void 0) {
        var h = Bf,
          y = e;
        switch (e) {
          case "keypress":
            if (ea(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = yE;
            break;
          case "focusin":
            (y = "focus"), (h = Jl);
            break;
          case "focusout":
            (y = "blur"), (h = Jl);
            break;
          case "beforeblur":
          case "afterblur":
            h = Jl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = $h;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = iE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = xE;
            break;
          case lv:
          case uv:
          case cv:
            h = lE;
            break;
          case fv:
            h = CE;
            break;
          case "scroll":
            h = rE;
            break;
          case "wheel":
            h = TE;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = cE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Hh;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          m = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p = u, w; p !== null; ) {
          w = p;
          var S = w.stateNode;
          if (
            (w.tag === 5 &&
              S !== null &&
              ((w = S),
              m !== null && ((S = Pi(p, m)), S != null && v.push(Di(p, S, w)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((d = new h(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          d &&
            n !== uc &&
            (y = n.relatedTarget || n.fromElement) &&
            (ur(y) || y[an]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          h
            ? ((y = n.relatedTarget || n.toElement),
              (h = u),
              (y = y ? ur(y) : null),
              y !== null &&
                ((x = kr(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = u)),
          h !== y)
        ) {
          if (
            ((v = $h),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Hh),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (x = h == null ? d : Wr(h)),
            (w = y == null ? d : Wr(y)),
            (d = new v(S, p + "leave", h, n, c)),
            (d.target = x),
            (d.relatedTarget = w),
            (S = null),
            ur(c) === u &&
              ((v = new v(m, p + "enter", y, n, c)),
              (v.target = w),
              (v.relatedTarget = x),
              (S = v)),
            (x = S),
            h && y)
          )
            t: {
              for (v = h, m = y, p = 0, w = v; w; w = Or(w)) p++;
              for (w = 0, S = m; S; S = Or(S)) w++;
              for (; 0 < p - w; ) (v = Or(v)), p--;
              for (; 0 < w - p; ) (m = Or(m)), w--;
              for (; p--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = Or(v)), (m = Or(m));
              }
              v = null;
            }
          else v = null;
          h !== null && nm(f, d, h, v, !1),
            y !== null && x !== null && nm(f, x, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Wr(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var E = OE;
        else if (Yh(d))
          if (rv) E = LE;
          else {
            E = DE;
            var P = bE;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = IE);
        if (E && (E = E(e, u))) {
          nv(f, E, n, c);
          break e;
        }
        P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            oc(d, "number", d.value);
      }
      switch (((P = u ? Wr(u) : window), e)) {
        case "focusin":
          (Yh(P) || P.contentEditable === "true") &&
            ((Br = P), (gc = u), (pi = null));
          break;
        case "focusout":
          pi = gc = Br = null;
          break;
        case "mousedown":
          yc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yc = !1), Jh(f, n, c);
          break;
        case "selectionchange":
          if (VE) break;
        case "keydown":
        case "keyup":
          Jh(f, n, c);
      }
      var k;
      if (Wf)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Ur
          ? ev(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Jy &&
          n.locale !== "ko" &&
          (Ur || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Ur && (k = Xy())
            : ((Rn = c),
              (Uf = "value" in Rn ? Rn.value : Rn.textContent),
              (Ur = !0))),
        (P = Pa(u, T)),
        0 < P.length &&
          ((T = new Wh(T, e, null, n, c)),
          f.push({ event: T, listeners: P }),
          k ? (T.data = k) : ((k = tv(n)), k !== null && (T.data = k)))),
        (k = PE ? ME(e, n) : NE(e, n)) &&
          ((u = Pa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Wh("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    hv(f, t);
  });
}
function Di(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Pi(e, n)),
      i != null && r.unshift(Di(e, i, o)),
      (i = Pi(e, t)),
      i != null && r.push(Di(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Or(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Pi(n, i)), l != null && s.unshift(Di(n, l, a)))
        : o || ((l = Pi(n, i)), l != null && s.push(Di(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var BE = /\r\n?/g,
  $E = /\u0000|\uFFFD/g;
function rm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      BE,
      `
`,
    )
    .replace($E, "");
}
function Ns(e, t, n) {
  if (((t = rm(t)), rm(e) !== t && n)) throw Error(R(425));
}
function Ma() {}
var vc = null,
  wc = null;
function xc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Sc = typeof setTimeout == "function" ? setTimeout : void 0,
  WE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  om = typeof Promise == "function" ? Promise : void 0,
  HE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof om < "u"
        ? function (e) {
            return om.resolve(null).then(e).catch(GE);
          }
        : Sc;
function GE(e) {
  setTimeout(function () {
    throw e;
  });
}
function au(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ri(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ri(t);
}
function Ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function im(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ao = Math.random().toString(36).slice(2),
  jt = "__reactFiber$" + Ao,
  Ii = "__reactProps$" + Ao,
  an = "__reactContainer$" + Ao,
  Cc = "__reactEvents$" + Ao,
  KE = "__reactListeners$" + Ao,
  YE = "__reactHandles$" + Ao;
function ur(e) {
  var t = e[jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[an] || n[jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = im(e); e !== null; ) {
          if ((n = e[jt])) return n;
          e = im(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ns(e) {
  return (
    (e = e[jt] || e[an]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function hl(e) {
  return e[Ii] || null;
}
var Ec = [],
  Hr = -1;
function Xn(e) {
  return { current: e };
}
function oe(e) {
  0 > Hr || ((e.current = Ec[Hr]), (Ec[Hr] = null), Hr--);
}
function te(e, t) {
  Hr++, (Ec[Hr] = e.current), (e.current = t);
}
var $n = {},
  Le = Xn($n),
  Ke = Xn(!1),
  yr = $n;
function go(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function Na() {
  oe(Ke), oe(Le);
}
function sm(e, t, n) {
  if (Le.current !== $n) throw Error(R(168));
  te(Le, t), te(Ke, n);
}
function pv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, bC(e) || "Unknown", o));
  return ue({}, n, r);
}
function Ra(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $n),
    (yr = Le.current),
    te(Le, e),
    te(Ke, Ke.current),
    !0
  );
}
function am(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = pv(e, t, yr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(Ke),
      oe(Le),
      te(Le, e))
    : oe(Ke),
    te(Ke, n);
}
var qt = null,
  ml = !1,
  lu = !1;
function gv(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function ZE(e) {
  (ml = !0), gv(e);
}
function Jn() {
  if (!lu && qt !== null) {
    lu = !0;
    var e = 0,
      t = J;
    try {
      var n = qt;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qt = null), (ml = !1);
    } catch (o) {
      throw (qt !== null && (qt = qt.slice(e + 1)), Uy(_f, Jn), o);
    } finally {
      (J = t), (lu = !1);
    }
  }
  return null;
}
var Gr = [],
  Kr = 0,
  Aa = null,
  Oa = 0,
  dt = [],
  ht = 0,
  vr = null,
  Qt = 1,
  Xt = "";
function ir(e, t) {
  (Gr[Kr++] = Oa), (Gr[Kr++] = Aa), (Aa = e), (Oa = t);
}
function yv(e, t, n) {
  (dt[ht++] = Qt), (dt[ht++] = Xt), (dt[ht++] = vr), (vr = e);
  var r = Qt;
  e = Xt;
  var o = 32 - Nt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Nt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Qt = (1 << (32 - Nt(t) + o)) | (n << o) | r),
      (Xt = i + e);
  } else (Qt = (1 << i) | (n << o) | r), (Xt = e);
}
function Gf(e) {
  e.return !== null && (ir(e, 1), yv(e, 1, 0));
}
function Kf(e) {
  for (; e === Aa; )
    (Aa = Gr[--Kr]), (Gr[Kr] = null), (Oa = Gr[--Kr]), (Gr[Kr] = null);
  for (; e === vr; )
    (vr = dt[--ht]),
      (dt[ht] = null),
      (Xt = dt[--ht]),
      (dt[ht] = null),
      (Qt = dt[--ht]),
      (dt[ht] = null);
}
var tt = null,
  et = null,
  ie = !1,
  Pt = null;
function vv(e, t) {
  var n = mt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (et = Ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = vr !== null ? { id: Qt, overflow: Xt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = mt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tt = e),
            (et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Tc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function kc(e) {
  if (ie) {
    var t = et;
    if (t) {
      var n = t;
      if (!lm(e, t)) {
        if (Tc(e)) throw Error(R(418));
        t = Ln(n.nextSibling);
        var r = tt;
        t && lm(e, t)
          ? vv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (tt = e));
      }
    } else {
      if (Tc(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (tt = e);
    }
  }
}
function um(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function Rs(e) {
  if (e !== tt) return !1;
  if (!ie) return um(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xc(e.type, e.memoizedProps))),
    t && (t = et))
  ) {
    if (Tc(e)) throw (wv(), Error(R(418)));
    for (; t; ) vv(e, t), (t = Ln(t.nextSibling));
  }
  if ((um(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = Ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? Ln(e.stateNode.nextSibling) : null;
  return !0;
}
function wv() {
  for (var e = et; e; ) e = Ln(e.nextSibling);
}
function yo() {
  (et = tt = null), (ie = !1);
}
function Yf(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
var qE = hn.ReactCurrentBatchConfig;
function Zo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function As(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function cm(e) {
  var t = e._init;
  return t(e._payload);
}
function xv(e) {
  function t(m, p) {
    if (e) {
      var w = m.deletions;
      w === null ? ((m.deletions = [p]), (m.flags |= 16)) : w.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = jn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, w) {
    return (
      (m.index = w),
      e
        ? ((w = m.alternate),
          w !== null
            ? ((w = w.index), w < p ? ((m.flags |= 2), p) : w)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, w, S) {
    return p === null || p.tag !== 6
      ? ((p = pu(w, m.mode, S)), (p.return = m), p)
      : ((p = o(p, w)), (p.return = m), p);
  }
  function l(m, p, w, S) {
    var E = w.type;
    return E === zr
      ? c(m, p, w.props.children, S, w.key)
      : p !== null &&
          (p.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === En &&
              cm(E) === p.type))
        ? ((S = o(p, w.props)), (S.ref = Zo(m, p, w)), (S.return = m), S)
        : ((S = aa(w.type, w.key, w.props, null, m.mode, S)),
          (S.ref = Zo(m, p, w)),
          (S.return = m),
          S);
  }
  function u(m, p, w, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== w.containerInfo ||
      p.stateNode.implementation !== w.implementation
      ? ((p = gu(w, m.mode, S)), (p.return = m), p)
      : ((p = o(p, w.children || [])), (p.return = m), p);
  }
  function c(m, p, w, S, E) {
    return p === null || p.tag !== 7
      ? ((p = pr(w, m.mode, S, E)), (p.return = m), p)
      : ((p = o(p, w)), (p.return = m), p);
  }
  function f(m, p, w) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = pu("" + p, m.mode, w)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ws:
          return (
            (w = aa(p.type, p.key, p.props, null, m.mode, w)),
            (w.ref = Zo(m, null, p)),
            (w.return = m),
            w
          );
        case jr:
          return (p = gu(p, m.mode, w)), (p.return = m), p;
        case En:
          var S = p._init;
          return f(m, S(p._payload), w);
      }
      if (ri(p) || Wo(p))
        return (p = pr(p, m.mode, w, null)), (p.return = m), p;
      As(m, p);
    }
    return null;
  }
  function d(m, p, w, S) {
    var E = p !== null ? p.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return E !== null ? null : a(m, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ws:
          return w.key === E ? l(m, p, w, S) : null;
        case jr:
          return w.key === E ? u(m, p, w, S) : null;
        case En:
          return (E = w._init), d(m, p, E(w._payload), S);
      }
      if (ri(w) || Wo(w)) return E !== null ? null : c(m, p, w, S, null);
      As(m, w);
    }
    return null;
  }
  function h(m, p, w, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(w) || null), a(p, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ws:
          return (m = m.get(S.key === null ? w : S.key) || null), l(p, m, S, E);
        case jr:
          return (m = m.get(S.key === null ? w : S.key) || null), u(p, m, S, E);
        case En:
          var P = S._init;
          return h(m, p, w, P(S._payload), E);
      }
      if (ri(S) || Wo(S)) return (m = m.get(w) || null), c(p, m, S, E, null);
      As(p, S);
    }
    return null;
  }
  function y(m, p, w, S) {
    for (
      var E = null, P = null, k = p, T = (p = 0), b = null;
      k !== null && T < w.length;
      T++
    ) {
      k.index > T ? ((b = k), (k = null)) : (b = k.sibling);
      var A = d(m, k, w[T], S);
      if (A === null) {
        k === null && (k = b);
        break;
      }
      e && k && A.alternate === null && t(m, k),
        (p = i(A, p, T)),
        P === null ? (E = A) : (P.sibling = A),
        (P = A),
        (k = b);
    }
    if (T === w.length) return n(m, k), ie && ir(m, T), E;
    if (k === null) {
      for (; T < w.length; T++)
        (k = f(m, w[T], S)),
          k !== null &&
            ((p = i(k, p, T)), P === null ? (E = k) : (P.sibling = k), (P = k));
      return ie && ir(m, T), E;
    }
    for (k = r(m, k); T < w.length; T++)
      (b = h(k, m, T, w[T], S)),
        b !== null &&
          (e && b.alternate !== null && k.delete(b.key === null ? T : b.key),
          (p = i(b, p, T)),
          P === null ? (E = b) : (P.sibling = b),
          (P = b));
    return (
      e &&
        k.forEach(function (j) {
          return t(m, j);
        }),
      ie && ir(m, T),
      E
    );
  }
  function v(m, p, w, S) {
    var E = Wo(w);
    if (typeof E != "function") throw Error(R(150));
    if (((w = E.call(w)), w == null)) throw Error(R(151));
    for (
      var P = (E = null), k = p, T = (p = 0), b = null, A = w.next();
      k !== null && !A.done;
      T++, A = w.next()
    ) {
      k.index > T ? ((b = k), (k = null)) : (b = k.sibling);
      var j = d(m, k, A.value, S);
      if (j === null) {
        k === null && (k = b);
        break;
      }
      e && k && j.alternate === null && t(m, k),
        (p = i(j, p, T)),
        P === null ? (E = j) : (P.sibling = j),
        (P = j),
        (k = b);
    }
    if (A.done) return n(m, k), ie && ir(m, T), E;
    if (k === null) {
      for (; !A.done; T++, A = w.next())
        (A = f(m, A.value, S)),
          A !== null &&
            ((p = i(A, p, T)), P === null ? (E = A) : (P.sibling = A), (P = A));
      return ie && ir(m, T), E;
    }
    for (k = r(m, k); !A.done; T++, A = w.next())
      (A = h(k, m, T, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? T : A.key),
          (p = i(A, p, T)),
          P === null ? (E = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        k.forEach(function (L) {
          return t(m, L);
        }),
      ie && ir(m, T),
      E
    );
  }
  function x(m, p, w, S) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === zr &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case ws:
          e: {
            for (var E = w.key, P = p; P !== null; ) {
              if (P.key === E) {
                if (((E = w.type), E === zr)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (p = o(P, w.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === En &&
                    cm(E) === P.type)
                ) {
                  n(m, P.sibling),
                    (p = o(P, w.props)),
                    (p.ref = Zo(m, P, w)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            w.type === zr
              ? ((p = pr(w.props.children, m.mode, S, w.key)),
                (p.return = m),
                (m = p))
              : ((S = aa(w.type, w.key, w.props, null, m.mode, S)),
                (S.ref = Zo(m, p, w)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case jr:
          e: {
            for (P = w.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === w.containerInfo &&
                  p.stateNode.implementation === w.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, w.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = gu(w, m.mode, S)), (p.return = m), (m = p);
          }
          return s(m);
        case En:
          return (P = w._init), x(m, p, P(w._payload), S);
      }
      if (ri(w)) return y(m, p, w, S);
      if (Wo(w)) return v(m, p, w, S);
      As(m, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, w)), (p.return = m), (m = p))
          : (n(m, p), (p = pu(w, m.mode, S)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return x;
}
var vo = xv(!0),
  Sv = xv(!1),
  ba = Xn(null),
  Da = null,
  Yr = null,
  Zf = null;
function qf() {
  Zf = Yr = Da = null;
}
function Qf(e) {
  var t = ba.current;
  oe(ba), (e._currentValue = t);
}
function Pc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ao(e, t) {
  (Da = e),
    (Zf = Yr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null));
}
function wt(e) {
  var t = e._currentValue;
  if (Zf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yr === null)) {
      if (Da === null) throw Error(R(308));
      (Yr = e), (Da.dependencies = { lanes: 0, firstContext: e });
    } else Yr = Yr.next = e;
  return t;
}
var cr = null;
function Xf(e) {
  cr === null ? (cr = [e]) : cr.push(e);
}
function Cv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Xf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    ln(e, r)
  );
}
function ln(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Tn = !1;
function Jf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ev(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function en(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Fn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      ln(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Xf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    ln(e, n)
  );
}
function ta(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vf(e, n);
  }
}
function fm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ia(e, t, n, r) {
  var o = e.updateQueue;
  Tn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var d = a.lane,
        h = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (h = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(h, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(h, f, d) : y),
                d == null)
              )
                break e;
              f = ue({}, f, d);
              break e;
            case 2:
              Tn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = f)) : (c = c.next = h),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (xr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function dm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var rs = {},
  Bt = Xn(rs),
  Li = Xn(rs),
  Fi = Xn(rs);
function fr(e) {
  if (e === rs) throw Error(R(174));
  return e;
}
function ed(e, t) {
  switch ((te(Fi, t), te(Li, e), te(Bt, rs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : sc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = sc(t, e));
  }
  oe(Bt), te(Bt, t);
}
function wo() {
  oe(Bt), oe(Li), oe(Fi);
}
function Tv(e) {
  fr(Fi.current);
  var t = fr(Bt.current),
    n = sc(t, e.type);
  t !== n && (te(Li, e), te(Bt, n));
}
function td(e) {
  Li.current === e && (oe(Bt), oe(Li));
}
var se = Xn(0);
function La(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var uu = [];
function nd() {
  for (var e = 0; e < uu.length; e++)
    uu[e]._workInProgressVersionPrimary = null;
  uu.length = 0;
}
var na = hn.ReactCurrentDispatcher,
  cu = hn.ReactCurrentBatchConfig,
  wr = 0,
  le = null,
  we = null,
  Se = null,
  Fa = !1,
  gi = !1,
  _i = 0,
  QE = 0;
function Me() {
  throw Error(R(321));
}
function rd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!At(e[n], t[n])) return !1;
  return !0;
}
function od(e, t, n, r, o, i) {
  if (
    ((wr = i),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (na.current = e === null || e.memoizedState === null ? tT : nT),
    (e = n(r, o)),
    gi)
  ) {
    i = 0;
    do {
      if (((gi = !1), (_i = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (Se = we = null),
        (t.updateQueue = null),
        (na.current = rT),
        (e = n(r, o));
    } while (gi);
  }
  if (
    ((na.current = _a),
    (t = we !== null && we.next !== null),
    (wr = 0),
    (Se = we = le = null),
    (Fa = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function id() {
  var e = _i !== 0;
  return (_i = 0), e;
}
function Vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (le.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function xt() {
  if (we === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = Se === null ? le.memoizedState : Se.next;
  if (t !== null) (Se = t), (we = e);
  else {
    if (e === null) throw Error(R(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      Se === null ? (le.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function Vi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fu(e) {
  var t = xt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = we,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((wr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (le.lanes |= c),
          (xr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      At(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (le.lanes |= i), (xr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function du(e) {
  var t = xt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    At(i, t.memoizedState) || (Ge = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function kv() {}
function Pv(e, t) {
  var n = le,
    r = xt(),
    o = t(),
    i = !At(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ge = !0)),
    (r = r.queue),
    sd(Rv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ji(9, Nv.bind(null, n, r, o, t), void 0, null),
      Ce === null)
    )
      throw Error(R(349));
    wr & 30 || Mv(n, t, o);
  }
  return o;
}
function Mv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Nv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Av(t) && Ov(e);
}
function Rv(e, t, n) {
  return n(function () {
    Av(t) && Ov(e);
  });
}
function Av(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !At(e, n);
  } catch {
    return !0;
  }
}
function Ov(e) {
  var t = ln(e, 1);
  t !== null && Rt(t, e, 1, -1);
}
function hm(e) {
  var t = Vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = eT.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function ji(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bv() {
  return xt().memoizedState;
}
function ra(e, t, n, r) {
  var o = Vt();
  (le.flags |= e),
    (o.memoizedState = ji(1 | t, n, void 0, r === void 0 ? null : r));
}
function pl(e, t, n, r) {
  var o = xt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (we !== null) {
    var s = we.memoizedState;
    if (((i = s.destroy), r !== null && rd(r, s.deps))) {
      o.memoizedState = ji(t, n, i, r);
      return;
    }
  }
  (le.flags |= e), (o.memoizedState = ji(1 | t, n, i, r));
}
function mm(e, t) {
  return ra(8390656, 8, e, t);
}
function sd(e, t) {
  return pl(2048, 8, e, t);
}
function Dv(e, t) {
  return pl(4, 2, e, t);
}
function Iv(e, t) {
  return pl(4, 4, e, t);
}
function Lv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Fv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), pl(4, 4, Lv.bind(null, t, e), n)
  );
}
function ad() {}
function _v(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Vv(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jv(e, t, n) {
  return wr & 21
    ? (At(n, t) || ((n = Wy()), (le.lanes |= n), (xr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
}
function XE(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = cu.transition;
  cu.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (cu.transition = r);
  }
}
function zv() {
  return xt().memoizedState;
}
function JE(e, t, n) {
  var r = Vn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Uv(e))
  )
    Bv(t, n);
  else if (((n = Cv(e, t, n, r)), n !== null)) {
    var o = je();
    Rt(n, e, r, o), $v(n, t, r);
  }
}
function eT(e, t, n) {
  var r = Vn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Uv(e)) Bv(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), At(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Xf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Cv(e, t, o, r)),
      n !== null && ((o = je()), Rt(n, e, r, o), $v(n, t, r));
  }
}
function Uv(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function Bv(e, t) {
  gi = Fa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function $v(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vf(e, n);
  }
}
var _a = {
    readContext: wt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  tT = {
    readContext: wt,
    useCallback: function (e, t) {
      return (Vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wt,
    useEffect: mm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ra(4194308, 4, Lv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ra(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ra(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = JE.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hm,
    useDebugValue: ad,
    useDeferredValue: function (e) {
      return (Vt().memoizedState = e);
    },
    useTransition: function () {
      var e = hm(!1),
        t = e[0];
      return (e = XE.bind(null, e[1])), (Vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        o = Vt();
      if (ie) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(R(349));
        wr & 30 || Mv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        mm(Rv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ji(9, Nv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Vt(),
        t = Ce.identifierPrefix;
      if (ie) {
        var n = Xt,
          r = Qt;
        (n = (r & ~(1 << (32 - Nt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _i++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = QE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nT = {
    readContext: wt,
    useCallback: _v,
    useContext: wt,
    useEffect: sd,
    useImperativeHandle: Fv,
    useInsertionEffect: Dv,
    useLayoutEffect: Iv,
    useMemo: Vv,
    useReducer: fu,
    useRef: bv,
    useState: function () {
      return fu(Vi);
    },
    useDebugValue: ad,
    useDeferredValue: function (e) {
      var t = xt();
      return jv(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = fu(Vi)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: kv,
    useSyncExternalStore: Pv,
    useId: zv,
    unstable_isNewReconciler: !1,
  },
  rT = {
    readContext: wt,
    useCallback: _v,
    useContext: wt,
    useEffect: sd,
    useImperativeHandle: Fv,
    useInsertionEffect: Dv,
    useLayoutEffect: Iv,
    useMemo: Vv,
    useReducer: du,
    useRef: bv,
    useState: function () {
      return du(Vi);
    },
    useDebugValue: ad,
    useDeferredValue: function (e) {
      var t = xt();
      return we === null ? (t.memoizedState = e) : jv(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = du(Vi)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: kv,
    useSyncExternalStore: Pv,
    useId: zv,
    unstable_isNewReconciler: !1,
  };
function Tt(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Mc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? kr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = Vn(e),
      i = en(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Fn(e, i, o)),
      t !== null && (Rt(t, e, o, r), ta(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = Vn(e),
      i = en(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Fn(e, i, o)),
      t !== null && (Rt(t, e, o, r), ta(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = Vn(e),
      o = en(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Fn(e, o, r)),
      t !== null && (Rt(t, e, r, n), ta(t, e, r));
  },
};
function pm(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Oi(n, r) || !Oi(o, i)
        : !0
  );
}
function Wv(e, t, n) {
  var r = !1,
    o = $n,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = wt(i))
      : ((o = Ye(t) ? yr : Le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? go(e, o) : $n)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function gm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gl.enqueueReplaceState(t, t.state, null);
}
function Nc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Jf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = wt(i))
    : ((i = Ye(t) ? yr : Le.current), (o.context = go(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Mc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && gl.enqueueReplaceState(o, o.state, null),
      Ia(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function xo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += OC(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function hu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Rc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var oT = typeof WeakMap == "function" ? WeakMap : Map;
function Hv(e, t, n) {
  (n = en(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ja || ((ja = !0), (jc = r)), Rc(e, t);
    }),
    n
  );
}
function Gv(e, t, n) {
  (n = en(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Rc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Rc(e, t),
          typeof r != "function" &&
            (_n === null ? (_n = new Set([this])) : _n.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ym(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new oT();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = vT.bind(null, e, t, n)), t.then(e, e));
}
function vm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wm(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = en(-1, 1)), (t.tag = 2), Fn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var iT = hn.ReactCurrentOwner,
  Ge = !1;
function _e(e, t, n, r) {
  t.child = e === null ? Sv(t, null, n, r) : vo(t, e.child, n, r);
}
function xm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ao(t, o),
    (r = od(e, t, n, r, i, o)),
    (n = id()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        un(e, t, o))
      : (ie && n && Gf(t), (t.flags |= 1), _e(e, t, r, o), t.child)
  );
}
function Sm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !pd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Kv(e, t, i, r, o))
      : ((e = aa(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Oi), n(s, r) && e.ref === t.ref)
    )
      return un(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = jn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Kv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Oi(i, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ge = !0);
      else return (t.lanes = e.lanes), un(e, t, o);
  }
  return Ac(e, t, n, r, o);
}
function Yv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(qr, Xe),
        (Xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(qr, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        te(qr, Xe),
        (Xe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(qr, Xe),
      (Xe |= r);
  return _e(e, t, o, n), t.child;
}
function Zv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ac(e, t, n, r, o) {
  var i = Ye(n) ? yr : Le.current;
  return (
    (i = go(t, i)),
    ao(t, o),
    (n = od(e, t, n, r, i, o)),
    (r = id()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        un(e, t, o))
      : (ie && r && Gf(t), (t.flags |= 1), _e(e, t, n, o), t.child)
  );
}
function Cm(e, t, n, r, o) {
  if (Ye(n)) {
    var i = !0;
    Ra(t);
  } else i = !1;
  if ((ao(t, o), t.stateNode === null))
    oa(e, t), Wv(t, n, r), Nc(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = wt(u))
      : ((u = Ye(n) ? yr : Le.current), (u = go(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && gm(t, s, r, u)),
      (Tn = !1);
    var d = t.memoizedState;
    (s.state = d),
      Ia(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || Ke.current || Tn
        ? (typeof c == "function" && (Mc(t, n, c, r), (l = t.memoizedState)),
          (a = Tn || pm(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Ev(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Tt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = wt(l))
        : ((l = Ye(n) ? yr : Le.current), (l = go(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && gm(t, s, r, l)),
      (Tn = !1),
      (d = t.memoizedState),
      (s.state = d),
      Ia(t, r, s, o);
    var y = t.memoizedState;
    a !== f || d !== y || Ke.current || Tn
      ? (typeof h == "function" && (Mc(t, n, h, r), (y = t.memoizedState)),
        (u = Tn || pm(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Oc(e, t, n, r, i, o);
}
function Oc(e, t, n, r, o, i) {
  Zv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && am(t, n, !1), un(e, t, i);
  (r = t.stateNode), (iT.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = vo(t, e.child, null, i)), (t.child = vo(t, null, a, i)))
      : _e(e, t, a, i),
    (t.memoizedState = r.state),
    o && am(t, n, !0),
    t.child
  );
}
function qv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sm(e, t.context, !1),
    ed(e, t.containerInfo);
}
function Em(e, t, n, r, o) {
  return yo(), Yf(o), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var bc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Dc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qv(e, t, n) {
  var r = t.pendingProps,
    o = se.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    te(se, o & 1),
    e === null)
  )
    return (
      kc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = wl(s, r, 0, null)),
              (e = pr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Dc(n)),
              (t.memoizedState = bc),
              e)
            : ld(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return sT(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = jn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = jn(a, i)) : ((i = pr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Dc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = bc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = jn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ld(e, t) {
  return (
    (t = wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Os(e, t, n, r) {
  return (
    r !== null && Yf(r),
    vo(t, e.child, null, n),
    (e = ld(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hu(Error(R(422)))), Os(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = wl({ mode: "visible", children: r.children }, o, 0, null)),
          (i = pr(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && vo(t, e.child, null, s),
          (t.child.memoizedState = Dc(s)),
          (t.memoizedState = bc),
          i);
  if (!(t.mode & 1)) return Os(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(R(419))), (r = hu(i, r, void 0)), Os(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ge || a)) {
    if (((r = Ce), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), ln(e, o), Rt(r, e, o, -1));
    }
    return md(), (r = hu(Error(R(421)))), Os(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wT.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (et = Ln(o.nextSibling)),
      (tt = t),
      (ie = !0),
      (Pt = null),
      e !== null &&
        ((dt[ht++] = Qt),
        (dt[ht++] = Xt),
        (dt[ht++] = vr),
        (Qt = e.id),
        (Xt = e.overflow),
        (vr = t)),
      (t = ld(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Tm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pc(e.return, t, n);
}
function mu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Xv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((_e(e, t, r.children, n), (r = se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tm(e, n, t);
        else if (e.tag === 19) Tm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((te(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && La(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          mu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && La(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        mu(t, !0, n, null, i);
        break;
      case "together":
        mu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function oa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function un(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (xr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = jn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function aT(e, t, n) {
  switch (t.tag) {
    case 3:
      qv(t), yo();
      break;
    case 5:
      Tv(t);
      break;
    case 1:
      Ye(t.type) && Ra(t);
      break;
    case 4:
      ed(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      te(ba, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Qv(e, t, n)
            : (te(se, se.current & 1),
              (e = un(e, t, n)),
              e !== null ? e.sibling : null);
      te(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        te(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yv(e, t, n);
  }
  return un(e, t, n);
}
var Jv, Ic, e0, t0;
Jv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ic = function () {};
e0 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), fr(Bt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = nc(e, o)), (r = nc(e, r)), (i = []);
        break;
      case "select":
        (o = ue({}, o, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ic(e, o)), (r = ic(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ma);
    }
    ac(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ti.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ti.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && re("scroll", e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
t0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qo(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function lT(e, t, n) {
  var r = t.pendingProps;
  switch ((Kf(t), t.tag)) {
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
      return Ne(t), null;
    case 1:
      return Ye(t.type) && Na(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wo(),
        oe(Ke),
        oe(Le),
        nd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Rs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Pt !== null && (Bc(Pt), (Pt = null)))),
        Ic(e, t),
        Ne(t),
        null
      );
    case 5:
      td(t);
      var o = fr(Fi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        e0(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ne(t), null;
        }
        if (((e = fr(Bt.current)), Rs(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[jt] = t), (r[Ii] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ii.length; o++) re(ii[o], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re("error", r), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              Dh(r, i), re("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                re("invalid", r);
              break;
            case "textarea":
              Lh(r, i), re("invalid", r);
          }
          ac(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ns(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ns(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Ti.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              xs(r), Ih(r, i, !0);
              break;
            case "textarea":
              xs(r), Fh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ma);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ry(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[jt] = t),
            (e[Ii] = r),
            Jv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = lc(n, r)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ii.length; o++) re(ii[o], e);
                o = r;
                break;
              case "source":
                re("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (o = r);
                break;
              case "details":
                re("toggle", e), (o = r);
                break;
              case "input":
                Dh(e, r), (o = nc(e, r)), re("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ue({}, r, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                Lh(e, r), (o = ic(e, r)), re("invalid", e);
                break;
              default:
                o = r;
            }
            ac(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? by(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Ay(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && ki(e, l)
                        : typeof l == "number" && ki(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Ti.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && re("scroll", e)
                          : l != null && bf(e, i, l, s));
              }
            switch (n) {
              case "input":
                xs(e), Ih(e, r, !1);
                break;
              case "textarea":
                xs(e), Fh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ro(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ro(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ma);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) t0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = fr(Fi.current)), fr(Bt.current), Rs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[jt] = t),
            (i = r.nodeValue !== n) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ns(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ns(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[jt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (oe(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && et !== null && t.mode & 1 && !(t.flags & 128))
          wv(), yo(), (t.flags |= 98560), (i = !1);
        else if (((i = Rs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[jt] = t;
          } else
            yo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (i = !1);
        } else Pt !== null && (Bc(Pt), (Pt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? xe === 0 && (xe = 3) : md())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        wo(), Ic(e, t), e === null && bi(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return Qf(t.type._context), Ne(t), null;
    case 17:
      return Ye(t.type) && Na(), Ne(t), null;
    case 19:
      if ((oe(se), (i = t.memoizedState), i === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) qo(i, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = La(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    qo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            pe() > So &&
            ((t.flags |= 128), (r = !0), qo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = La(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ie)
            )
              return Ne(t), null;
          } else
            2 * pe() - i.renderingStartTime > So &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = pe()),
          (t.sibling = null),
          (n = se.current),
          te(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        hd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function uT(e, t) {
  switch ((Kf(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && Na(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wo(),
        oe(Ke),
        oe(Le),
        nd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return td(t), null;
    case 13:
      if (
        (oe(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        yo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(se), null;
    case 4:
      return wo(), null;
    case 10:
      return Qf(t.type._context), null;
    case 22:
    case 23:
      return hd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bs = !1,
  Oe = !1,
  cT = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Zr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function Lc(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var km = !1;
function fT(e, t) {
  if (((vc = Ta), (e = sv()), Hf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wc = { focusedElem: e, selectionRange: n }, Ta = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    x = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Tt(t.type, v),
                      x,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (S) {
          he(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (y = km), (km = !1), y;
}
function yi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Lc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Fc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function n0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), n0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[jt], delete t[Ii], delete t[Cc], delete t[KE], delete t[YE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function r0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || r0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _c(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ma));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_c(e, t, n), e = e.sibling; e !== null; ) _c(e, t, n), (e = e.sibling);
}
function Vc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vc(e, t, n), e = e.sibling; e !== null; ) Vc(e, t, n), (e = e.sibling);
}
var Ee = null,
  kt = !1;
function pn(e, t, n) {
  for (n = n.child; n !== null; ) o0(e, t, n), (n = n.sibling);
}
function o0(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function")
    try {
      Ut.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || Zr(n, t);
    case 6:
      var r = Ee,
        o = kt;
      (Ee = null),
        pn(e, t, n),
        (Ee = r),
        (kt = o),
        Ee !== null &&
          (kt
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null &&
        (kt
          ? ((e = Ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? au(e.parentNode, n)
              : e.nodeType === 1 && au(e, n),
            Ri(e))
          : au(Ee, n.stateNode));
      break;
    case 4:
      (r = Ee),
        (o = kt),
        (Ee = n.stateNode.containerInfo),
        (kt = !0),
        pn(e, t, n),
        (Ee = r),
        (kt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Lc(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      pn(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (Zr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          he(n, t, a);
        }
      pn(e, t, n);
      break;
    case 21:
      pn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), pn(e, t, n), (Oe = r))
        : pn(e, t, n);
      break;
    default:
      pn(e, t, n);
  }
}
function Mm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new cT()),
      t.forEach(function (r) {
        var o = xT.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ee = a.stateNode), (kt = !1);
              break e;
            case 3:
              (Ee = a.stateNode.containerInfo), (kt = !0);
              break e;
            case 4:
              (Ee = a.stateNode.containerInfo), (kt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ee === null) throw Error(R(160));
        o0(i, s, o), (Ee = null), (kt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        he(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) i0(t, e), (t = t.sibling);
}
function i0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((St(t, e), _t(e), r & 4)) {
        try {
          yi(3, e, e.return), yl(3, e);
        } catch (v) {
          he(e, e.return, v);
        }
        try {
          yi(5, e, e.return);
        } catch (v) {
          he(e, e.return, v);
        }
      }
      break;
    case 1:
      St(t, e), _t(e), r & 512 && n !== null && Zr(n, n.return);
      break;
    case 5:
      if (
        (St(t, e),
        _t(e),
        r & 512 && n !== null && Zr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ki(o, "");
        } catch (v) {
          he(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && My(o, i),
              lc(a, s);
            var u = lc(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? by(o, f)
                : c === "dangerouslySetInnerHTML"
                  ? Ay(o, f)
                  : c === "children"
                    ? ki(o, f)
                    : bf(o, c, f, u);
            }
            switch (a) {
              case "input":
                rc(o, i);
                break;
              case "textarea":
                Ny(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? ro(o, !!i.multiple, h, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ro(o, !!i.multiple, i.defaultValue, !0)
                      : ro(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ii] = i;
          } catch (v) {
            he(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((St(t, e), _t(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          he(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (St(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ri(t.containerInfo);
        } catch (v) {
          he(e, e.return, v);
        }
      break;
    case 4:
      St(t, e), _t(e);
      break;
    case 13:
      St(t, e),
        _t(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (fd = pe())),
        r & 4 && Mm(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (u = Oe) || c), St(t, e), (Oe = u)) : St(t, e),
        _t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (f = I = c; I !== null; ) {
              switch (((d = I), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yi(4, d, d.return);
                  break;
                case 1:
                  Zr(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      he(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Zr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Rm(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (I = h)) : Rm(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Oy("display", s)));
              } catch (v) {
                he(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                he(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      St(t, e), _t(e), r & 4 && Mm(e);
      break;
    case 21:
      break;
    default:
      St(t, e), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (r0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ki(o, ""), (r.flags &= -33));
          var i = Pm(e);
          Vc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Pm(e);
          _c(e, a, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      he(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dT(e, t, n) {
  (I = e), s0(e);
}
function s0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || bs;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Oe;
        a = bs;
        var u = Oe;
        if (((bs = s), (Oe = l) && !u))
          for (I = o; I !== null; )
            (s = I),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Am(o)
                : l !== null
                  ? ((l.return = s), (I = l))
                  : Am(o);
        for (; i !== null; ) (I = i), s0(i), (i = i.sibling);
        (I = o), (bs = a), (Oe = u);
      }
      Nm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : Nm(e);
  }
}
function Nm(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && dm(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                dm(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ri(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Oe || (t.flags & 512 && Fc(t));
      } catch (d) {
        he(t, t.return, d);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Rm(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Am(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yl(4, t);
          } catch (l) {
            he(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              he(t, o, l);
            }
          }
          var i = t.return;
          try {
            Fc(t);
          } catch (l) {
            he(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Fc(t);
          } catch (l) {
            he(t, s, l);
          }
      }
    } catch (l) {
      he(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (I = a);
      break;
    }
    I = t.return;
  }
}
var hT = Math.ceil,
  Va = hn.ReactCurrentDispatcher,
  ud = hn.ReactCurrentOwner,
  yt = hn.ReactCurrentBatchConfig,
  Z = 0,
  Ce = null,
  ye = null,
  ke = 0,
  Xe = 0,
  qr = Xn(0),
  xe = 0,
  zi = null,
  xr = 0,
  vl = 0,
  cd = 0,
  vi = null,
  He = null,
  fd = 0,
  So = 1 / 0,
  Zt = null,
  ja = !1,
  jc = null,
  _n = null,
  Ds = !1,
  An = null,
  za = 0,
  wi = 0,
  zc = null,
  ia = -1,
  sa = 0;
function je() {
  return Z & 6 ? pe() : ia !== -1 ? ia : (ia = pe());
}
function Vn(e) {
  return e.mode & 1
    ? Z & 2 && ke !== 0
      ? ke & -ke
      : qE.transition !== null
        ? (sa === 0 && (sa = Wy()), sa)
        : ((e = J),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qy(e.type))),
          e)
    : 1;
}
function Rt(e, t, n, r) {
  if (50 < wi) throw ((wi = 0), (zc = null), Error(R(185)));
  es(e, n, r),
    (!(Z & 2) || e !== Ce) &&
      (e === Ce && (!(Z & 2) && (vl |= n), xe === 4 && Mn(e, ke)),
      Ze(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((So = pe() + 500), ml && Jn()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  qC(e, t);
  var r = Ea(e, e === Ce ? ke : 0);
  if (r === 0)
    n !== null && jh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && jh(n), t === 1))
      e.tag === 0 ? ZE(Om.bind(null, e)) : gv(Om.bind(null, e)),
        HE(function () {
          !(Z & 6) && Jn();
        }),
        (n = null);
    else {
      switch (Hy(r)) {
        case 1:
          n = _f;
          break;
        case 4:
          n = By;
          break;
        case 16:
          n = Ca;
          break;
        case 536870912:
          n = $y;
          break;
        default:
          n = Ca;
      }
      n = m0(n, a0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function a0(e, t) {
  if (((ia = -1), (sa = 0), Z & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (lo() && e.callbackNode !== n) return null;
  var r = Ea(e, e === Ce ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ua(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var i = u0();
    (Ce !== e || ke !== t) && ((Zt = null), (So = pe() + 500), mr(e, t));
    do
      try {
        gT();
        break;
      } catch (a) {
        l0(e, a);
      }
    while (!0);
    qf(),
      (Va.current = i),
      (Z = o),
      ye !== null ? (t = 0) : ((Ce = null), (ke = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = hc(e)), o !== 0 && ((r = o), (t = Uc(e, o)))), t === 1)
    )
      throw ((n = zi), mr(e, 0), Mn(e, r), Ze(e, pe()), n);
    if (t === 6) Mn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !mT(o) &&
          ((t = Ua(e, r)),
          t === 2 && ((i = hc(e)), i !== 0 && ((r = i), (t = Uc(e, i)))),
          t === 1))
      )
        throw ((n = zi), mr(e, 0), Mn(e, r), Ze(e, pe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          sr(e, He, Zt);
          break;
        case 3:
          if (
            (Mn(e, r), (r & 130023424) === r && ((t = fd + 500 - pe()), 10 < t))
          ) {
            if (Ea(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Sc(sr.bind(null, e, He, Zt), t);
            break;
          }
          sr(e, He, Zt);
          break;
        case 4:
          if ((Mn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Nt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * hT(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Sc(sr.bind(null, e, He, Zt), r);
            break;
          }
          sr(e, He, Zt);
          break;
        case 5:
          sr(e, He, Zt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ze(e, pe()), e.callbackNode === n ? a0.bind(null, e) : null;
}
function Uc(e, t) {
  var n = vi;
  return (
    e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256),
    (e = Ua(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && Bc(t)),
    e
  );
}
function Bc(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function mT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!At(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Mn(e, t) {
  for (
    t &= ~cd,
      t &= ~vl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Nt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Om(e) {
  if (Z & 6) throw Error(R(327));
  lo();
  var t = Ea(e, 0);
  if (!(t & 1)) return Ze(e, pe()), null;
  var n = Ua(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hc(e);
    r !== 0 && ((t = r), (n = Uc(e, r)));
  }
  if (n === 1) throw ((n = zi), mr(e, 0), Mn(e, t), Ze(e, pe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sr(e, He, Zt),
    Ze(e, pe()),
    null
  );
}
function dd(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((So = pe() + 500), ml && Jn());
  }
}
function Sr(e) {
  An !== null && An.tag === 0 && !(Z & 6) && lo();
  var t = Z;
  Z |= 1;
  var n = yt.transition,
    r = J;
  try {
    if (((yt.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (yt.transition = n), (Z = t), !(Z & 6) && Jn();
  }
}
function hd() {
  (Xe = qr.current), oe(qr);
}
function mr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), WE(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((Kf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Na();
          break;
        case 3:
          wo(), oe(Ke), oe(Le), nd();
          break;
        case 5:
          td(r);
          break;
        case 4:
          wo();
          break;
        case 13:
          oe(se);
          break;
        case 19:
          oe(se);
          break;
        case 10:
          Qf(r.type._context);
          break;
        case 22:
        case 23:
          hd();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ye = e = jn(e.current, null)),
    (ke = Xe = t),
    (xe = 0),
    (zi = null),
    (cd = vl = xr = 0),
    (He = vi = null),
    cr !== null)
  ) {
    for (t = 0; t < cr.length; t++)
      if (((n = cr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    cr = null;
  }
  return e;
}
function l0(e, t) {
  do {
    var n = ye;
    try {
      if ((qf(), (na.current = _a), Fa)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Fa = !1;
      }
      if (
        ((wr = 0),
        (Se = we = le = null),
        (gi = !1),
        (_i = 0),
        (ud.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (zi = t), (ye = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ke),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = vm(s);
          if (h !== null) {
            (h.flags &= -257),
              wm(h, s, a, i, t),
              h.mode & 1 && ym(i, u, t),
              (t = h),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ym(i, u, t), md();
              break e;
            }
            l = Error(R(426));
          }
        } else if (ie && a.mode & 1) {
          var x = vm(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              wm(x, s, a, i, t),
              Yf(xo(l, a));
            break e;
          }
        }
        (i = l = xo(l, a)),
          xe !== 4 && (xe = 2),
          vi === null ? (vi = [i]) : vi.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Hv(i, l, t);
              fm(i, m);
              break e;
            case 1:
              a = l;
              var p = i.type,
                w = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (_n === null || !_n.has(w))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Gv(i, a, t);
                fm(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      f0(n);
    } catch (E) {
      (t = E), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function u0() {
  var e = Va.current;
  return (Va.current = _a), e === null ? _a : e;
}
function md() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Ce === null || (!(xr & 268435455) && !(vl & 268435455)) || Mn(Ce, ke);
}
function Ua(e, t) {
  var n = Z;
  Z |= 2;
  var r = u0();
  (Ce !== e || ke !== t) && ((Zt = null), mr(e, t));
  do
    try {
      pT();
      break;
    } catch (o) {
      l0(e, o);
    }
  while (!0);
  if ((qf(), (Z = n), (Va.current = r), ye !== null)) throw Error(R(261));
  return (Ce = null), (ke = 0), xe;
}
function pT() {
  for (; ye !== null; ) c0(ye);
}
function gT() {
  for (; ye !== null && !UC(); ) c0(ye);
}
function c0(e) {
  var t = h0(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? f0(e) : (ye = t),
    (ud.current = null);
}
function f0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = uT(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ye = null);
        return;
      }
    } else if (((n = lT(n, t, Xe)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function sr(e, t, n) {
  var r = J,
    o = yt.transition;
  try {
    (yt.transition = null), (J = 1), yT(e, t, n, r);
  } finally {
    (yt.transition = o), (J = r);
  }
  return null;
}
function yT(e, t, n, r) {
  do lo();
  while (An !== null);
  if (Z & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (QC(e, i),
    e === Ce && ((ye = Ce = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ds ||
      ((Ds = !0),
      m0(Ca, function () {
        return lo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = yt.transition), (yt.transition = null);
    var s = J;
    J = 1;
    var a = Z;
    (Z |= 4),
      (ud.current = null),
      fT(e, n),
      i0(n, e),
      _E(wc),
      (Ta = !!vc),
      (wc = vc = null),
      (e.current = n),
      dT(n),
      BC(),
      (Z = a),
      (J = s),
      (yt.transition = i);
  } else e.current = n;
  if (
    (Ds && ((Ds = !1), (An = e), (za = o)),
    (i = e.pendingLanes),
    i === 0 && (_n = null),
    HC(n.stateNode),
    Ze(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ja) throw ((ja = !1), (e = jc), (jc = null), e);
  return (
    za & 1 && e.tag !== 0 && lo(),
    (i = e.pendingLanes),
    i & 1 ? (e === zc ? wi++ : ((wi = 0), (zc = e))) : (wi = 0),
    Jn(),
    null
  );
}
function lo() {
  if (An !== null) {
    var e = Hy(za),
      t = yt.transition,
      n = J;
    try {
      if (((yt.transition = null), (J = 16 > e ? 16 : e), An === null))
        var r = !1;
      else {
        if (((e = An), (An = null), (za = 0), Z & 6)) throw Error(R(331));
        var o = Z;
        for (Z |= 4, I = e.current; I !== null; ) {
          var i = I,
            s = i.child;
          if (I.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yi(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (I = f);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var d = c.sibling,
                        h = c.return;
                      if ((n0(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (I = d);
                        break;
                      }
                      I = h;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (I = s);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yi(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (I = m);
                break e;
              }
              I = i.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          s = I;
          var w = s.child;
          if (s.subtreeFlags & 2064 && w !== null) (w.return = s), (I = w);
          else
            e: for (s = p; I !== null; ) {
              if (((a = I), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yl(9, a);
                  }
                } catch (E) {
                  he(a, a.return, E);
                }
              if (a === s) {
                I = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (I = S);
                break e;
              }
              I = a.return;
            }
        }
        if (
          ((Z = o), Jn(), Ut && typeof Ut.onPostCommitFiberRoot == "function")
        )
          try {
            Ut.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (yt.transition = t);
    }
  }
  return !1;
}
function bm(e, t, n) {
  (t = xo(n, t)),
    (t = Hv(e, t, 1)),
    (e = Fn(e, t, 1)),
    (t = je()),
    e !== null && (es(e, 1, t), Ze(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) bm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (_n === null || !_n.has(r)))
        ) {
          (e = xo(n, e)),
            (e = Gv(t, e, 1)),
            (t = Fn(t, e, 1)),
            (e = je()),
            t !== null && (es(t, 1, e), Ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vT(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (ke & n) === n &&
      (xe === 4 || (xe === 3 && (ke & 130023424) === ke && 500 > pe() - fd)
        ? mr(e, 0)
        : (cd |= n)),
    Ze(e, t);
}
function d0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Es), (Es <<= 1), !(Es & 130023424) && (Es = 4194304))
      : (t = 1));
  var n = je();
  (e = ln(e, t)), e !== null && (es(e, t, n), Ze(e, n));
}
function wT(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), d0(e, n);
}
function xT(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), d0(e, n);
}
var h0;
h0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ke.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), aT(e, t, n);
      Ge = !!(e.flags & 131072);
    }
  else (Ge = !1), ie && t.flags & 1048576 && yv(t, Oa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      oa(e, t), (e = t.pendingProps);
      var o = go(t, Le.current);
      ao(t, n), (o = od(null, t, r, e, o, n));
      var i = id();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((i = !0), Ra(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Jf(t),
            (o.updater = gl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Nc(t, r, e, n),
            (t = Oc(null, t, r, !0, i, n)))
          : ((t.tag = 0), ie && i && Gf(t), _e(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (oa(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = CT(r)),
          (e = Tt(r, e)),
          o)
        ) {
          case 0:
            t = Ac(null, t, r, e, n);
            break e;
          case 1:
            t = Cm(null, t, r, e, n);
            break e;
          case 11:
            t = xm(null, t, r, e, n);
            break e;
          case 14:
            t = Sm(null, t, r, Tt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tt(r, o)),
        Ac(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tt(r, o)),
        Cm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((qv(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ev(e, t),
          Ia(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = xo(Error(R(423)), t)), (t = Em(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = xo(Error(R(424)), t)), (t = Em(e, t, r, n, o));
            break e;
          } else
            for (
              et = Ln(t.stateNode.containerInfo.firstChild),
                tt = t,
                ie = !0,
                Pt = null,
                n = Sv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yo(), r === o)) {
            t = un(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Tv(t),
        e === null && kc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        xc(r, o) ? (s = null) : i !== null && xc(r, i) && (t.flags |= 32),
        Zv(e, t),
        _e(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && kc(t), null;
    case 13:
      return Qv(e, t, n);
    case 4:
      return (
        ed(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vo(t, null, r, n)) : _e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tt(r, o)),
        xm(e, t, r, o, n)
      );
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          te(ba, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (At(i.value, s)) {
            if (i.children === o.children && !Ke.current) {
              t = un(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = en(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Pc(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Pc(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        _e(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ao(t, n),
        (o = wt(o)),
        (r = r(o)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Tt(r, t.pendingProps)),
        (o = Tt(r.type, o)),
        Sm(e, t, r, o, n)
      );
    case 15:
      return Kv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Tt(r, o)),
        oa(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), Ra(t)) : (e = !1),
        ao(t, n),
        Wv(t, r, o),
        Nc(t, r, o, n),
        Oc(null, t, r, !0, e, n)
      );
    case 19:
      return Xv(e, t, n);
    case 22:
      return Yv(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function m0(e, t) {
  return Uy(e, t);
}
function ST(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function mt(e, t, n, r) {
  return new ST(e, t, n, r);
}
function pd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function CT(e) {
  if (typeof e == "function") return pd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === If)) return 11;
    if (e === Lf) return 14;
  }
  return 2;
}
function jn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = mt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function aa(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) pd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case zr:
        return pr(n.children, o, i, t);
      case Df:
        (s = 8), (o |= 8);
        break;
      case Xu:
        return (
          (e = mt(12, n, t, o | 2)), (e.elementType = Xu), (e.lanes = i), e
        );
      case Ju:
        return (e = mt(13, n, t, o)), (e.elementType = Ju), (e.lanes = i), e;
      case ec:
        return (e = mt(19, n, t, o)), (e.elementType = ec), (e.lanes = i), e;
      case Ty:
        return wl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cy:
              s = 10;
              break e;
            case Ey:
              s = 9;
              break e;
            case If:
              s = 11;
              break e;
            case Lf:
              s = 14;
              break e;
            case En:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = mt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function pr(e, t, n, r) {
  return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function wl(e, t, n, r) {
  return (
    (e = mt(22, e, r, t)),
    (e.elementType = Ty),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function pu(e, t, n) {
  return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function gu(e, t, n) {
  return (
    (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ET(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ql(0)),
    (this.expirationTimes = ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function gd(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new ET(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Jf(i),
    e
  );
}
function TT(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function p0(e) {
  if (!e) return $n;
  e = e._reactInternals;
  e: {
    if (kr(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return pv(e, n, t);
  }
  return t;
}
function g0(e, t, n, r, o, i, s, a, l) {
  return (
    (e = gd(n, r, !0, e, o, i, s, a, l)),
    (e.context = p0(null)),
    (n = e.current),
    (r = je()),
    (o = Vn(n)),
    (i = en(r, o)),
    (i.callback = t ?? null),
    Fn(n, i, o),
    (e.current.lanes = o),
    es(e, o, r),
    Ze(e, r),
    e
  );
}
function xl(e, t, n, r) {
  var o = t.current,
    i = je(),
    s = Vn(o);
  return (
    (n = p0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = en(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Fn(o, t, s)),
    e !== null && (Rt(e, o, s, i), ta(e, o, s)),
    s
  );
}
function Ba(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function yd(e, t) {
  Dm(e, t), (e = e.alternate) && Dm(e, t);
}
function kT() {
  return null;
}
var y0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vd(e) {
  this._internalRoot = e;
}
Sl.prototype.render = vd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  xl(e, t, null, null);
};
Sl.prototype.unmount = vd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sr(function () {
      xl(null, e, null, null);
    }),
      (t[an] = null);
  }
};
function Sl(e) {
  this._internalRoot = e;
}
Sl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Yy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++);
    Pn.splice(n, 0, e), n === 0 && qy(e);
  }
};
function wd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Im() {}
function PT(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ba(s);
        i.call(u);
      };
    }
    var s = g0(t, r, e, 0, null, !1, !1, "", Im);
    return (
      (e._reactRootContainer = s),
      (e[an] = s.current),
      bi(e.nodeType === 8 ? e.parentNode : e),
      Sr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ba(l);
      a.call(u);
    };
  }
  var l = gd(e, 0, !1, null, null, !1, !1, "", Im);
  return (
    (e._reactRootContainer = l),
    (e[an] = l.current),
    bi(e.nodeType === 8 ? e.parentNode : e),
    Sr(function () {
      xl(t, l, n, r);
    }),
    l
  );
}
function El(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Ba(s);
        a.call(l);
      };
    }
    xl(t, s, e, o);
  } else s = PT(n, t, e, o, r);
  return Ba(s);
}
Gy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = oi(t.pendingLanes);
        n !== 0 &&
          (Vf(t, n | 1), Ze(t, pe()), !(Z & 6) && ((So = pe() + 500), Jn()));
      }
      break;
    case 13:
      Sr(function () {
        var r = ln(e, 1);
        if (r !== null) {
          var o = je();
          Rt(r, e, 1, o);
        }
      }),
        yd(e, 1);
  }
};
jf = function (e) {
  if (e.tag === 13) {
    var t = ln(e, 134217728);
    if (t !== null) {
      var n = je();
      Rt(t, e, 134217728, n);
    }
    yd(e, 134217728);
  }
};
Ky = function (e) {
  if (e.tag === 13) {
    var t = Vn(e),
      n = ln(e, t);
    if (n !== null) {
      var r = je();
      Rt(n, e, t, r);
    }
    yd(e, t);
  }
};
Yy = function () {
  return J;
};
Zy = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
cc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((rc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = hl(r);
            if (!o) throw Error(R(90));
            Py(r), rc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ny(e, n);
      break;
    case "select":
      (t = n.value), t != null && ro(e, !!n.multiple, t, !1);
  }
};
Ly = dd;
Fy = Sr;
var MT = { usingClientEntryPoint: !1, Events: [ns, Wr, hl, Dy, Iy, dd] },
  Qo = {
    findFiberByHostInstance: ur,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  NT = {
    bundleType: Qo.bundleType,
    version: Qo.version,
    rendererPackageName: Qo.rendererPackageName,
    rendererConfig: Qo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = jy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qo.findFiberByHostInstance || kT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Is.isDisabled && Is.supportsFiber)
    try {
      (ul = Is.inject(NT)), (Ut = Is);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = MT;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wd(t)) throw Error(R(200));
  return TT(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!wd(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = y0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = gd(e, 1, !1, null, null, n, !1, r, o)),
    (e[an] = t.current),
    bi(e.nodeType === 8 ? e.parentNode : e),
    new vd(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = jy(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return Sr(e);
};
st.hydrate = function (e, t, n) {
  if (!Cl(t)) throw Error(R(200));
  return El(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!wd(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = y0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = g0(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[an] = t.current),
    bi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Sl(t);
};
st.render = function (e, t, n) {
  if (!Cl(t)) throw Error(R(200));
  return El(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!Cl(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Sr(function () {
        El(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[an] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = dd;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cl(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return El(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function v0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0);
    } catch (e) {
      console.error(e);
    }
}
v0(), (vy.exports = st);
var Tl = vy.exports;
const RT = iy(Tl);
var Lm = Tl;
(qu.createRoot = Lm.createRoot), (qu.hydrateRoot = Lm.hydrateRoot);
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ui() {
  return (
    (Ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ui.apply(this, arguments)
  );
}
var On;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(On || (On = {}));
const Fm = "popstate";
function AT(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return $c(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : $a(o);
  }
  return bT(t, n, null, e);
}
function ve(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function w0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function OT() {
  return Math.random().toString(36).substr(2, 8);
}
function _m(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function $c(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ui(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Oo(t) : t,
      { state: n, key: (t && t.key) || r || OT() },
    )
  );
}
function $a(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Oo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function bT(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = On.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Ui({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = On.Pop;
    let x = c(),
      m = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: v.location, delta: m });
  }
  function d(x, m) {
    a = On.Push;
    let p = $c(v.location, x, m);
    u = c() + 1;
    let w = _m(p, u),
      S = v.createHref(p);
    try {
      s.pushState(w, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(S);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function h(x, m) {
    a = On.Replace;
    let p = $c(v.location, x, m);
    u = c();
    let w = _m(p, u),
      S = v.createHref(p);
    s.replaceState(w, "", S),
      i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function y(x) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof x == "string" ? x : $a(x);
    return (
      (p = p.replace(/ $/, "%20")),
      ve(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, m)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Fm, f),
        (l = x),
        () => {
          o.removeEventListener(Fm, f), (l = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: y,
    encodeLocation(x) {
      let m = y(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: h,
    go(x) {
      return s.go(x);
    },
  };
  return v;
}
var Vm;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Vm || (Vm = {}));
function DT(e, t, n) {
  return n === void 0 && (n = "/"), IT(e, t, n, !1);
}
function IT(e, t, n, r) {
  let o = typeof t == "string" ? Oo(t) : t,
    i = xd(o.pathname || "/", n);
  if (i == null) return null;
  let s = x0(e);
  LT(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = GT(i);
    a = WT(s[l], u, r);
  }
  return a;
}
function x0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (ve(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = zn([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (ve(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      x0(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: BT(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of S0(i.path)) o(i, s, l);
    }),
    t
  );
}
function S0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = S0(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function LT(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : $T(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const FT = /^:[\w-]+$/,
  _T = 3,
  VT = 2,
  jT = 1,
  zT = 10,
  UT = -2,
  jm = (e) => e === "*";
function BT(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(jm) && (r += UT),
    t && (r += VT),
    n
      .filter((o) => !jm(o))
      .reduce((o, i) => o + (FT.test(i) ? _T : i === "" ? jT : zT), r)
  );
}
function $T(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function WT(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = zm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      d = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = zm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: zn([i, f.pathname]),
        pathnameBase: qT(zn([i, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (i = zn([i, f.pathnameBase]));
  }
  return s;
}
function zm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = HT(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: h } = c;
      if (d === "*") {
        let v = a[f] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[f];
      return (
        h && !y ? (u[d] = void 0) : (u[d] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function HT(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    w0(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function GT(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      w0(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function xd(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function KT(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Oo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : YT(n, t)) : t,
    search: QT(r),
    hash: XT(o),
  };
}
function YT(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function yu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ZT(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function C0(e, t) {
  let n = ZT(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function E0(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Oo(e))
    : ((o = Ui({}, e)),
      ve(
        !o.pathname || !o.pathname.includes("?"),
        yu("?", "pathname", "search", o),
      ),
      ve(
        !o.pathname || !o.pathname.includes("#"),
        yu("#", "pathname", "hash", o),
      ),
      ve(!o.search || !o.search.includes("#"), yu("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      o.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = KT(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const zn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  qT = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  QT = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  XT = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function JT(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const T0 = ["post", "put", "patch", "delete"];
new Set(T0);
const ek = ["get", ...T0];
new Set(ek);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bi() {
  return (
    (Bi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bi.apply(this, arguments)
  );
}
const Sd = g.createContext(null),
  tk = g.createContext(null),
  Pr = g.createContext(null),
  kl = g.createContext(null),
  Mr = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  k0 = g.createContext(null);
function nk(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  os() || ve(!1);
  let { basename: r, navigator: o } = g.useContext(Pr),
    { hash: i, pathname: s, search: a } = M0(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : zn([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function os() {
  return g.useContext(kl) != null;
}
function is() {
  return os() || ve(!1), g.useContext(kl).location;
}
function P0(e) {
  g.useContext(Pr).static || g.useLayoutEffect(e);
}
function rk() {
  let { isDataRoute: e } = g.useContext(Mr);
  return e ? gk() : ok();
}
function ok() {
  os() || ve(!1);
  let e = g.useContext(Sd),
    { basename: t, future: n, navigator: r } = g.useContext(Pr),
    { matches: o } = g.useContext(Mr),
    { pathname: i } = is(),
    s = JSON.stringify(C0(o, n.v7_relativeSplatPath)),
    a = g.useRef(!1);
  return (
    P0(() => {
      a.current = !0;
    }),
    g.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = E0(u, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : zn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, i, e],
    )
  );
}
function M0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = g.useContext(Pr),
    { matches: o } = g.useContext(Mr),
    { pathname: i } = is(),
    s = JSON.stringify(C0(o, r.v7_relativeSplatPath));
  return g.useMemo(() => E0(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function ik(e, t) {
  return sk(e, t);
}
function sk(e, t, n, r) {
  os() || ve(!1);
  let { navigator: o } = g.useContext(Pr),
    { matches: i } = g.useContext(Mr),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = is(),
    c;
  if (t) {
    var f;
    let x = typeof t == "string" ? Oo(t) : t;
    l === "/" || ((f = x.pathname) != null && f.startsWith(l)) || ve(!1),
      (c = x);
  } else c = u;
  let d = c.pathname || "/",
    h = d;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let y = DT(e, { pathname: h }),
    v = fk(
      y &&
        y.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: zn([
              l,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : zn([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && v
    ? g.createElement(
        kl.Provider,
        {
          value: {
            location: Bi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: On.Pop,
          },
        },
        v,
      )
    : v;
}
function ak() {
  let e = pk(),
    t = JT(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("h2", null, "Unexpected Application Error!"),
    g.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? g.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const lk = g.createElement(ak, null);
class uk extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          Mr.Provider,
          { value: this.props.routeContext },
          g.createElement(k0.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function ck(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = g.useContext(Sd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(Mr.Provider, { value: t }, r)
  );
}
function fk(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    c >= 0 || ve(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: h } = n,
          y =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!h || h[f.route.id] === void 0);
        if (f.route.lazy || y) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let h,
      y = !1,
      v = null,
      x = null;
    n &&
      ((h = a && f.route.id ? a[f.route.id] : void 0),
      (v = f.route.errorElement || lk),
      l &&
        (u < 0 && d === 0
          ? ((y = !0), (x = null))
          : u === d &&
            ((y = !0), (x = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, d + 1)),
      p = () => {
        let w;
        return (
          h
            ? (w = v)
            : y
              ? (w = x)
              : f.route.Component
                ? (w = g.createElement(f.route.Component, null))
                : f.route.element
                  ? (w = f.route.element)
                  : (w = c),
          g.createElement(ck, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? g.createElement(uk, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: h,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var N0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(N0 || {}),
  Wa = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Wa || {});
function dk(e) {
  let t = g.useContext(Sd);
  return t || ve(!1), t;
}
function hk(e) {
  let t = g.useContext(tk);
  return t || ve(!1), t;
}
function mk(e) {
  let t = g.useContext(Mr);
  return t || ve(!1), t;
}
function R0(e) {
  let t = mk(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ve(!1), n.route.id;
}
function pk() {
  var e;
  let t = g.useContext(k0),
    n = hk(Wa.UseRouteError),
    r = R0(Wa.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function gk() {
  let { router: e } = dk(N0.UseNavigateStable),
    t = R0(Wa.UseNavigateStable),
    n = g.useRef(!1);
  return (
    P0(() => {
      n.current = !0;
    }),
    g.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Bi({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function xn(e) {
  ve(!1);
}
function yk(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = On.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  os() && ve(!1);
  let l = t.replace(/^\/*/, "/"),
    u = g.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Bi({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s],
    );
  typeof r == "string" && (r = Oo(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: h = null,
      key: y = "default",
    } = r,
    v = g.useMemo(() => {
      let x = xd(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: d, state: h, key: y },
            navigationType: o,
          };
    }, [l, c, f, d, h, y, o]);
  return v == null
    ? null
    : g.createElement(
        Pr.Provider,
        { value: u },
        g.createElement(kl.Provider, { children: n, value: v }),
      );
}
function vk(e) {
  let { children: t, location: n } = e;
  return ik(Wc(t), n);
}
new Promise(() => {});
function Wc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    g.Children.forEach(e, (r, o) => {
      if (!g.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === g.Fragment) {
        n.push.apply(n, Wc(r.props.children, i));
        return;
      }
      r.type !== xn && ve(!1), !r.props.index || !r.props.children || ve(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Wc(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hc() {
  return (
    (Hc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hc.apply(this, arguments)
  );
}
function wk(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function xk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Sk(e, t) {
  return e.button === 0 && (!t || t === "_self") && !xk(e);
}
const Ck = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Ek = "6";
try {
  window.__reactRouterVersion = Ek;
} catch {}
const Tk = "startTransition",
  Um = gy[Tk];
function kk(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = g.useRef();
  i.current == null && (i.current = AT({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = g.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = g.useCallback(
      (f) => {
        u && Um ? Um(() => l(f)) : l(f);
      },
      [l, u],
    );
  return (
    g.useLayoutEffect(() => s.listen(c), [s, c]),
    g.createElement(yk, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const Pk =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Mk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Nk = g.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      d = wk(t, Ck),
      { basename: h } = g.useContext(Pr),
      y,
      v = !1;
    if (typeof u == "string" && Mk.test(u) && ((y = u), Pk))
      try {
        let w = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u),
          E = xd(S.pathname, h);
        S.origin === w.origin && E != null
          ? (u = E + S.search + S.hash)
          : (v = !0);
      } catch {}
    let x = nk(u, { relative: o }),
      m = Rk(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
        viewTransition: f,
      });
    function p(w) {
      r && r(w), w.defaultPrevented || m(w);
    }
    return g.createElement(
      "a",
      Hc({}, d, { href: y || x, onClick: v || i ? r : p, ref: n, target: l }),
    );
  });
var Bm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Bm || (Bm = {}));
var $m;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})($m || ($m = {}));
function Rk(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = rk(),
    u = is(),
    c = M0(e, { relative: s });
  return g.useCallback(
    (f) => {
      if (Sk(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : $a(u) === $a(c);
        l(e, {
          replace: d,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, o, n, e, i, s, a],
  );
}
const A0 = g.createContext(null),
  Ak = ({ children: e }) => {
    const [t, n] = g.useState(null),
      r = (i) => {
        console.log(i);
      },
      o = () => {
        n(null);
      };
    return C.jsx(A0.Provider, {
      value: { user: t, signin: r, signout: o },
      children: e,
    });
  },
  Ok = () => {
    const e = g.useContext(A0);
    if (!e) throw new Error("useAuth 必须在 AuthProvider 内使用");
    return e;
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bk = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  O0 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Dk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ik = g.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...a
    },
    l,
  ) =>
    g.createElement(
      "svg",
      {
        ref: l,
        ...Dk,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: O0("lucide", o),
        ...a,
      },
      [
        ...s.map(([u, c]) => g.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bo = (e, t) => {
  const n = g.forwardRef(({ className: r, ...o }, i) =>
    g.createElement(Ik, {
      ref: i,
      iconNode: t,
      className: O0(`lucide-${bk(e)}`, r),
      ...o,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lk = bo("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fk = bo("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _k = bo("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vk = bo("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jk = bo("PackagePlus", [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  ["path", { d: "M19 13v6", key: "85cyf1" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h",
    },
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zk = bo("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
function Uk(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Pl(...e) {
  return (t) => e.forEach((n) => Uk(n, t));
}
function qe(...e) {
  return g.useCallback(Pl(...e), e);
}
var Co = g.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = g.Children.toArray(n),
    i = o.find($k);
  if (i) {
    const s = i.props.children,
      a = o.map((l) =>
        l === i
          ? g.Children.count(s) > 1
            ? g.Children.only(null)
            : g.isValidElement(s)
              ? s.props.children
              : null
          : l,
      );
    return C.jsx(Gc, {
      ...r,
      ref: t,
      children: g.isValidElement(s) ? g.cloneElement(s, void 0, a) : null,
    });
  }
  return C.jsx(Gc, { ...r, ref: t, children: n });
});
Co.displayName = "Slot";
var Gc = g.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (g.isValidElement(n)) {
    const o = Hk(n);
    return g.cloneElement(n, { ...Wk(r, n.props), ref: t ? Pl(t, o) : o });
  }
  return g.Children.count(n) > 1 ? g.Children.only(null) : null;
});
Gc.displayName = "SlotClone";
var Bk = ({ children: e }) => C.jsx(C.Fragment, { children: e });
function $k(e) {
  return g.isValidElement(e) && e.type === Bk;
}
function Wk(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...i })
        : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Hk(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function b0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = b0(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Gk() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = b0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Wm = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Hm = Gk,
  Kk = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Hm(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (c === null) return null;
        const d = Wm(c) || Wm(f);
        return o[u][d];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, d] = c;
          return d === void 0 || (u[f] = d), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: d, ...h } = c;
              return Object.entries(h).every((y) => {
                let [v, x] = y;
                return Array.isArray(x)
                  ? x.includes({ ...i, ...a }[v])
                  : { ...i, ...a }[v] === x;
              })
                ? [...u, f, d]
                : u;
            }, []);
    return Hm(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
function D0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = D0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Yk() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = D0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Cd = "-",
  Zk = (e) => {
    const t = Qk(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(Cd);
        return a[0] === "" && a.length !== 1 && a.shift(), I0(a, t) || qk(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  I0 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? I0(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Cd);
    return (s = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Gm = /^\[(.+)\]$/,
  qk = (e) => {
    if (Gm.test(e)) {
      const t = Gm.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Qk = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Jk(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Kc(s, r, i, t);
      }),
      r
    );
  },
  Kc = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Km(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Xk(o)) {
          Kc(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Kc(s, Km(t, i), n, r);
      });
    });
  },
  Km = (e, t) => {
    let n = e;
    return (
      t.split(Cd).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Xk = (e) => e.isThemeGetter,
  Jk = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
                ? Object.fromEntries(
                    Object.entries(i).map(([s, a]) => [t + s, a]),
                  )
                : i,
          );
          return [n, o];
        })
      : e,
  eP = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  L0 = "!",
  tP = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          f;
        for (let x = 0; x < a.length; x++) {
          let m = a[x];
          if (u === 0) {
            if (m === o && (r || a.slice(x, x + i) === t)) {
              l.push(a.slice(c, x)), (c = x + i);
              continue;
            }
            if (m === "/") {
              f = x;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const d = l.length === 0 ? a : a.substring(c),
          h = d.startsWith(L0),
          y = h ? d.substring(1) : d,
          v = f && f > c ? f - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: y,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  nP = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  rP = (e) => ({ cache: eP(e.cacheSize), parseClassName: tP(e), ...Zk(e) }),
  oP = /\s+/,
  iP = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(oP);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: d,
          maybePostfixModifierPosition: h,
        } = n(u);
      let y = !!h,
        v = r(y ? d.substring(0, h) : d);
      if (!v) {
        if (!y) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((v = r(d)), !v)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        y = !1;
      }
      const x = nP(c).join(":"),
        m = f ? x + L0 : x,
        p = m + v;
      if (i.includes(p)) continue;
      i.push(p);
      const w = o(v, y);
      for (let S = 0; S < w.length; ++S) {
        const E = w[S];
        i.push(m + E);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function sP() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = F0(t)) && (r && (r += " "), (r += n));
  return r;
}
const F0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = F0(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function aP(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = rP(u)), (r = n.cache.get), (o = n.cache.set), (i = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = iP(l, n);
    return o(l, c), c;
  }
  return function () {
    return i(sP.apply(null, arguments));
  };
}
const ne = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  _0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  lP = /^\d+\/\d+$/,
  uP = new Set(["px", "full", "screen"]),
  cP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  fP =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  dP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  hP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  mP =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Kt = (e) => uo(e) || uP.has(e) || lP.test(e),
  gn = (e) => Do(e, "length", CP),
  uo = (e) => !!e && !Number.isNaN(Number(e)),
  vu = (e) => Do(e, "number", uo),
  Xo = (e) => !!e && Number.isInteger(Number(e)),
  pP = (e) => e.endsWith("%") && uo(e.slice(0, -1)),
  B = (e) => _0.test(e),
  yn = (e) => cP.test(e),
  gP = new Set(["length", "size", "percentage"]),
  yP = (e) => Do(e, gP, V0),
  vP = (e) => Do(e, "position", V0),
  wP = new Set(["image", "url"]),
  xP = (e) => Do(e, wP, TP),
  SP = (e) => Do(e, "", EP),
  Jo = () => !0,
  Do = (e, t, n) => {
    const r = _0.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  CP = (e) => fP.test(e) && !dP.test(e),
  V0 = () => !1,
  EP = (e) => hP.test(e),
  TP = (e) => mP.test(e),
  kP = () => {
    const e = ne("colors"),
      t = ne("spacing"),
      n = ne("blur"),
      r = ne("brightness"),
      o = ne("borderColor"),
      i = ne("borderRadius"),
      s = ne("borderSpacing"),
      a = ne("borderWidth"),
      l = ne("contrast"),
      u = ne("grayscale"),
      c = ne("hueRotate"),
      f = ne("invert"),
      d = ne("gap"),
      h = ne("gradientColorStops"),
      y = ne("gradientColorStopPositions"),
      v = ne("inset"),
      x = ne("margin"),
      m = ne("opacity"),
      p = ne("padding"),
      w = ne("saturate"),
      S = ne("scale"),
      E = ne("sepia"),
      P = ne("skew"),
      k = ne("space"),
      T = ne("translate"),
      b = () => ["auto", "contain", "none"],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      j = () => ["auto", B, t],
      L = () => [B, t],
      G = () => ["", Kt, gn],
      W = () => ["auto", uo, B],
      ce = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      U = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      M = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      N = () => ["", "0", B],
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [uo, B];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Jo],
        spacing: [Kt, gn],
        blur: ["none", "", yn, B],
        brightness: V(),
        borderColor: [e],
        borderRadius: ["none", "", "full", yn, B],
        borderSpacing: L(),
        borderWidth: G(),
        contrast: V(),
        grayscale: N(),
        hueRotate: V(),
        invert: N(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [pP, gn],
        inset: j(),
        margin: j(),
        opacity: V(),
        padding: L(),
        saturate: V(),
        scale: V(),
        sepia: N(),
        skew: V(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", B] }],
        container: ["container"],
        columns: [{ columns: [yn] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...ce(), B] }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: b() }],
        "overscroll-x": [{ "overscroll-x": b() }],
        "overscroll-y": [{ "overscroll-y": b() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Xo, B] }],
        basis: [{ basis: j() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", B] }],
        grow: [{ grow: N() }],
        shrink: [{ shrink: N() }],
        order: [{ order: ["first", "last", "none", Xo, B] }],
        "grid-cols": [{ "grid-cols": [Jo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Xo, B] }, B] }],
        "col-start": [{ "col-start": W() }],
        "col-end": [{ "col-end": W() }],
        "grid-rows": [{ "grid-rows": [Jo] }],
        "row-start-end": [{ row: ["auto", { span: [Xo, B] }, B] }],
        "row-start": [{ "row-start": W() }],
        "row-end": [{ "row-end": W() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", B] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", B] }],
        gap: [{ gap: [d] }],
        "gap-x": [{ "gap-x": [d] }],
        "gap-y": [{ "gap-y": [d] }],
        "justify-content": [{ justify: ["normal", ...M()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...M(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...M(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", B, t] }],
        "min-w": [{ "min-w": [B, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              B,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [yn] },
              yn,
            ],
          },
        ],
        h: [{ h: [B, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [B, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [B, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", yn, gn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              vu,
            ],
          },
        ],
        "font-family": [{ font: [Jo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              B,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", uo, vu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Kt,
              B,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", B] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", B] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Kt, gn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Kt, B] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              B,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", B] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...ce(), vP] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", yP] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              xP,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [y] }],
        "gradient-via-pos": [{ via: [y] }],
        "gradient-to-pos": [{ to: [y] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [Kt, B] }],
        "outline-w": [{ outline: [Kt, gn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: G() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [Kt, gn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", yn, SP] }],
        "shadow-color": [{ shadow: [Jo] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...U(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": U() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", yn, B] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [w] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [w] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              B,
            ],
          },
        ],
        duration: [{ duration: V() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", B] }],
        delay: [{ delay: V() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", B] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [Xo, B] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              B,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              B,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", B] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Kt, gn, vu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  PP = aP(kP);
function Lt(...e) {
  return PP(Yk(e));
}
const MP = Kk(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Ed = g.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? Co : "button";
      return C.jsx(s, {
        className: Lt(MP({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    },
  );
Ed.displayName = "Button";
function K(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function j0(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = g.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (f) => {
      var m;
      const { scope: d, children: h, ...y } = f,
        v = ((m = d == null ? void 0 : d[e]) == null ? void 0 : m[l]) || a,
        x = g.useMemo(() => y, Object.values(y));
      return C.jsx(v.Provider, { value: x, children: h });
    };
    u.displayName = i + "Provider";
    function c(f, d) {
      var v;
      const h = ((v = d == null ? void 0 : d[e]) == null ? void 0 : v[l]) || a,
        y = g.useContext(h);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => g.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, NP(o, ...t)];
}
function NP(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Ot(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }),
    g.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function z0({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = RP({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    a = Ot(n),
    l = g.useCallback(
      (u) => {
        if (i) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && a(f);
        } else o(u);
      },
      [i, e, o, a],
    );
  return [s, l];
}
function RP({ defaultProp: e, onChange: t }) {
  const n = g.useState(e),
    [r] = n,
    o = g.useRef(r),
    i = Ot(t);
  return (
    g.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var AP = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Be = AP.reduce((e, t) => {
    const n = g.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        a = i ? Co : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        C.jsx(a, { ...s, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function U0(e, t) {
  e && Tl.flushSync(() => e.dispatchEvent(t));
}
function OP(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = g.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: d, children: h, ...y } = f,
        v = (d == null ? void 0 : d[e][l]) || a,
        x = g.useMemo(() => y, Object.values(y));
      return C.jsx(v.Provider, { value: x, children: h });
    }
    function c(f, d) {
      const h = (d == null ? void 0 : d[e][l]) || a,
        y = g.useContext(h);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, c];
  }
  const o = () => {
    const i = n.map((s) => g.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, bP(o, ...t)];
}
function bP(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function B0(e) {
  const t = e + "CollectionProvider",
    [n, r] = OP(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (h) => {
      const { scope: y, children: v } = h,
        x = Yt.useRef(null),
        m = Yt.useRef(new Map()).current;
      return C.jsx(o, { scope: y, itemMap: m, collectionRef: x, children: v });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = Yt.forwardRef((h, y) => {
      const { scope: v, children: x } = h,
        m = i(a, v),
        p = qe(y, m.collectionRef);
      return C.jsx(Co, { ref: p, children: x });
    });
  l.displayName = a;
  const u = e + "CollectionItemSlot",
    c = "data-radix-collection-item",
    f = Yt.forwardRef((h, y) => {
      const { scope: v, children: x, ...m } = h,
        p = Yt.useRef(null),
        w = qe(y, p),
        S = i(u, v);
      return (
        Yt.useEffect(
          () => (
            S.itemMap.set(p, { ref: p, ...m }), () => void S.itemMap.delete(p)
          ),
        ),
        C.jsx(Co, { [c]: "", ref: w, children: x })
      );
    });
  f.displayName = u;
  function d(h) {
    const y = i(e + "CollectionConsumer", h);
    return Yt.useCallback(() => {
      const x = y.collectionRef.current;
      if (!x) return [];
      const m = Array.from(x.querySelectorAll(`[${c}]`));
      return Array.from(y.itemMap.values()).sort(
        (S, E) => m.indexOf(S.ref.current) - m.indexOf(E.ref.current),
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: f }, d, r];
}
var DP = g.createContext(void 0);
function $0(e) {
  const t = g.useContext(DP);
  return e || t || "ltr";
}
function IP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e);
  g.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var LP = "DismissableLayer",
  Yc = "dismissableLayer.update",
  FP = "dismissableLayer.pointerDownOutside",
  _P = "dismissableLayer.focusOutside",
  Ym,
  W0 = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  H0 = g.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = g.useContext(W0),
      [c, f] = g.useState(null),
      d =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = g.useState({}),
      y = qe(t, (k) => f(k)),
      v = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = v.indexOf(x),
      p = c ? v.indexOf(c) : -1,
      w = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = p >= m,
      E = zP((k) => {
        const T = k.target,
          b = [...u.branches].some((A) => A.contains(T));
        !S ||
          b ||
          (o == null || o(k),
          s == null || s(k),
          k.defaultPrevented || a == null || a());
      }, d),
      P = UP((k) => {
        const T = k.target;
        [...u.branches].some((A) => A.contains(T)) ||
          (i == null || i(k),
          s == null || s(k),
          k.defaultPrevented || a == null || a());
      }, d);
    return (
      IP((k) => {
        p === u.layers.size - 1 &&
          (r == null || r(k),
          !k.defaultPrevented && a && (k.preventDefault(), a()));
      }, d),
      g.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ym = d.body.style.pointerEvents),
                (d.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Zm(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (d.body.style.pointerEvents = Ym);
            }
          );
      }, [c, d, n, u]),
      g.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Zm());
        },
        [c, u],
      ),
      g.useEffect(() => {
        const k = () => h({});
        return (
          document.addEventListener(Yc, k),
          () => document.removeEventListener(Yc, k)
        );
      }, []),
      C.jsx(Be.div, {
        ...l,
        ref: y,
        style: {
          pointerEvents: w ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: K(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: K(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: K(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    );
  });
H0.displayName = LP;
var VP = "DismissableLayerBranch",
  jP = g.forwardRef((e, t) => {
    const n = g.useContext(W0),
      r = g.useRef(null),
      o = qe(t, r);
    return (
      g.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      C.jsx(Be.div, { ...e, ref: o })
    );
  });
jP.displayName = VP;
function zP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e),
    r = g.useRef(!1),
    o = g.useRef(() => {});
  return (
    g.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              G0(FP, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function UP(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e),
    r = g.useRef(!1);
  return (
    g.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          G0(_P, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Zm() {
  const e = new CustomEvent(Yc);
  document.dispatchEvent(e);
}
function G0(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? U0(o, i) : o.dispatchEvent(i);
}
var wu = 0;
function BP() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? qm()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? qm()),
      wu++,
      () => {
        wu === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          wu--;
      }
    );
  }, []);
}
function qm() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var xu = "focusScope.autoFocusOnMount",
  Su = "focusScope.autoFocusOnUnmount",
  Qm = { bubbles: !1, cancelable: !0 },
  $P = "FocusScope",
  K0 = g.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, l] = g.useState(null),
      u = Ot(o),
      c = Ot(i),
      f = g.useRef(null),
      d = qe(t, (v) => l(v)),
      h = g.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    g.useEffect(() => {
      if (r) {
        let v = function (w) {
            if (h.paused || !a) return;
            const S = w.target;
            a.contains(S) ? (f.current = S) : Sn(f.current, { select: !0 });
          },
          x = function (w) {
            if (h.paused || !a) return;
            const S = w.relatedTarget;
            S !== null && (a.contains(S) || Sn(f.current, { select: !0 }));
          },
          m = function (w) {
            if (document.activeElement === document.body)
              for (const E of w) E.removedNodes.length > 0 && Sn(a);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", x);
        const p = new MutationObserver(m);
        return (
          a && p.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", x),
              p.disconnect();
          }
        );
      }
    }, [r, a, h.paused]),
      g.useEffect(() => {
        if (a) {
          Jm.add(h);
          const v = document.activeElement;
          if (!a.contains(v)) {
            const m = new CustomEvent(xu, Qm);
            a.addEventListener(xu, u),
              a.dispatchEvent(m),
              m.defaultPrevented ||
                (WP(ZP(Y0(a)), { select: !0 }),
                document.activeElement === v && Sn(a));
          }
          return () => {
            a.removeEventListener(xu, u),
              setTimeout(() => {
                const m = new CustomEvent(Su, Qm);
                a.addEventListener(Su, c),
                  a.dispatchEvent(m),
                  m.defaultPrevented || Sn(v ?? document.body, { select: !0 }),
                  a.removeEventListener(Su, c),
                  Jm.remove(h);
              }, 0);
          };
        }
      }, [a, u, c, h]);
    const y = g.useCallback(
      (v) => {
        if ((!n && !r) || h.paused) return;
        const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          m = document.activeElement;
        if (x && m) {
          const p = v.currentTarget,
            [w, S] = HP(p);
          w && S
            ? !v.shiftKey && m === S
              ? (v.preventDefault(), n && Sn(w, { select: !0 }))
              : v.shiftKey &&
                m === w &&
                (v.preventDefault(), n && Sn(S, { select: !0 }))
            : m === p && v.preventDefault();
        }
      },
      [n, r, h.paused],
    );
    return C.jsx(Be.div, { tabIndex: -1, ...s, ref: d, onKeyDown: y });
  });
K0.displayName = $P;
function WP(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Sn(r, { select: t }), document.activeElement !== n)) return;
}
function HP(e) {
  const t = Y0(e),
    n = Xm(t, e),
    r = Xm(t.reverse(), e);
  return [n, r];
}
function Y0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Xm(e, t) {
  for (const n of e) if (!GP(n, { upTo: t })) return n;
}
function GP(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function KP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Sn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && KP(e) && t && e.select();
  }
}
var Jm = YP();
function YP() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = ep(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = ep(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function ep(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ZP(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Cr =
    globalThis != null && globalThis.document ? g.useLayoutEffect : () => {},
  qP = gy.useId || (() => {}),
  QP = 0;
function Zc(e) {
  const [t, n] = g.useState(qP());
  return (
    Cr(() => {
      n((r) => r ?? String(QP++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const XP = ["top", "right", "bottom", "left"],
  Wn = Math.min,
  Je = Math.max,
  Ha = Math.round,
  Ls = Math.floor,
  Hn = (e) => ({ x: e, y: e }),
  JP = { left: "right", right: "left", bottom: "top", top: "bottom" },
  eM = { start: "end", end: "start" };
function qc(e, t, n) {
  return Je(e, Wn(t, n));
}
function cn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fn(e) {
  return e.split("-")[0];
}
function Io(e) {
  return e.split("-")[1];
}
function Td(e) {
  return e === "x" ? "y" : "x";
}
function kd(e) {
  return e === "y" ? "height" : "width";
}
function Gn(e) {
  return ["top", "bottom"].includes(fn(e)) ? "y" : "x";
}
function Pd(e) {
  return Td(Gn(e));
}
function tM(e, t, n) {
  n === void 0 && (n = !1);
  const r = Io(e),
    o = Pd(e),
    i = kd(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return t.reference[i] > t.floating[i] && (s = Ga(s)), [s, Ga(s)];
}
function nM(e) {
  const t = Ga(e);
  return [Qc(e), t, Qc(t)];
}
function Qc(e) {
  return e.replace(/start|end/g, (t) => eM[t]);
}
function rM(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function oM(e, t, n, r) {
  const o = Io(e);
  let i = rM(fn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Qc)))), i
  );
}
function Ga(e) {
  return e.replace(/left|right|bottom|top/g, (t) => JP[t]);
}
function iM(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Z0(e) {
  return typeof e != "number"
    ? iM(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ka(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function tp(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Gn(t),
    s = Pd(t),
    a = kd(s),
    l = fn(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    d = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: f };
      break;
    case "left":
      h = { x: r.x - o.width, y: f };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Io(t)) {
    case "start":
      h[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += d * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const sM = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: f } = tp(u, r, l),
    d = r,
    h = {},
    y = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: x, fn: m } = a[v],
      {
        x: p,
        y: w,
        data: S,
        reset: E,
      } = await m({
        x: c,
        y: f,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = p ?? c),
      (f = w ?? f),
      (h = { ...h, [x]: { ...h[x], ...S } }),
      E &&
        y <= 50 &&
        (y++,
        typeof E == "object" &&
          (E.placement && (d = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: c, y: f } = tp(u, d, l))),
        (v = -1));
  }
  return { x: c, y: f, placement: d, strategy: o, middlewareData: h };
};
async function $i(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: d = !1,
      padding: h = 0,
    } = cn(t, e),
    y = Z0(h),
    x = a[d ? (f === "floating" ? "reference" : "floating") : f],
    m = Ka(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    p =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    w = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(w)))
      ? (await (i.getScale == null ? void 0 : i.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Ka(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: p,
            offsetParent: w,
            strategy: l,
          })
        : p,
    );
  return {
    top: (m.top - E.top + y.top) / S.y,
    bottom: (E.bottom - m.bottom + y.bottom) / S.y,
    left: (m.left - E.left + y.left) / S.x,
    right: (E.right - m.right + y.right) / S.x,
  };
}
const aM = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = cn(e, t) || {};
      if (u == null) return {};
      const f = Z0(c),
        d = { x: n, y: r },
        h = Pd(o),
        y = kd(h),
        v = await s.getDimensions(u),
        x = h === "y",
        m = x ? "top" : "left",
        p = x ? "bottom" : "right",
        w = x ? "clientHeight" : "clientWidth",
        S = i.reference[y] + i.reference[h] - d[h] - i.floating[y],
        E = d[h] - i.reference[h],
        P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let k = P ? P[w] : 0;
      (!k || !(await (s.isElement == null ? void 0 : s.isElement(P)))) &&
        (k = a.floating[w] || i.floating[y]);
      const T = S / 2 - E / 2,
        b = k / 2 - v[y] / 2 - 1,
        A = Wn(f[m], b),
        j = Wn(f[p], b),
        L = A,
        G = k - v[y] - j,
        W = k / 2 - v[y] / 2 + T,
        ce = qc(L, W, G),
        $ =
          !l.arrow &&
          Io(o) != null &&
          W !== ce &&
          i.reference[y] / 2 - (W < L ? A : j) - v[y] / 2 < 0,
        U = $ ? (W < L ? W - L : W - G) : 0;
      return {
        [h]: d[h] + U,
        data: {
          [h]: ce,
          centerOffset: W - ce - U,
          ...($ && { alignmentOffset: U }),
        },
        reset: $,
      };
    },
  }),
  lM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: d,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: y = "none",
              flipAlignment: v = !0,
              ...x
            } = cn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = fn(o),
            p = Gn(a),
            w = fn(a) === a,
            S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            E = d || (w || !v ? [Ga(a)] : nM(a)),
            P = y !== "none";
          !d && P && E.push(...oM(a, v, y, S));
          const k = [a, ...E],
            T = await $i(t, x),
            b = [];
          let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && b.push(T[m]), f)) {
            const W = tM(o, s, S);
            b.push(T[W[0]], T[W[1]]);
          }
          if (
            ((A = [...A, { placement: o, overflows: b }]),
            !b.every((W) => W <= 0))
          ) {
            var j, L;
            const W = (((j = i.flip) == null ? void 0 : j.index) || 0) + 1,
              ce = k[W];
            if (ce)
              return {
                data: { index: W, overflows: A },
                reset: { placement: ce },
              };
            let $ =
              (L = A.filter((U) => U.overflows[0] <= 0).sort(
                (U, M) => U.overflows[1] - M.overflows[1],
              )[0]) == null
                ? void 0
                : L.placement;
            if (!$)
              switch (h) {
                case "bestFit": {
                  var G;
                  const U =
                    (G = A.filter((M) => {
                      if (P) {
                        const N = Gn(M.placement);
                        return N === p || N === "y";
                      }
                      return !0;
                    })
                      .map((M) => [
                        M.placement,
                        M.overflows
                          .filter((N) => N > 0)
                          .reduce((N, D) => N + D, 0),
                      ])
                      .sort((M, N) => M[1] - N[1])[0]) == null
                      ? void 0
                      : G[0];
                  U && ($ = U);
                  break;
                }
                case "initialPlacement":
                  $ = a;
                  break;
              }
            if (o !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function np(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function rp(e) {
  return XP.some((t) => e[t] >= 0);
}
const uM = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = cn(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await $i(t, { ...o, elementContext: "reference" }),
              s = np(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: rp(s) },
            };
          }
          case "escaped": {
            const i = await $i(t, { ...o, altBoundary: !0 }),
              s = np(i, n.floating);
            return { data: { escapedOffsets: s, escaped: rp(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function cM(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = fn(n),
    a = Io(n),
    l = Gn(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    c = i && l ? -1 : 1,
    f = cn(t, e);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: y,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    a && typeof y == "number" && (h = a === "end" ? y * -1 : y),
    l ? { x: h * c, y: d * u } : { x: d * u, y: h * c }
  );
}
const fM = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            l = await cM(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: i + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  dM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: m, y: p } = x;
                  return { x: m, y: p };
                },
              },
              ...l
            } = cn(e, t),
            u = { x: n, y: r },
            c = await $i(t, l),
            f = Gn(fn(o)),
            d = Td(f);
          let h = u[d],
            y = u[f];
          if (i) {
            const x = d === "y" ? "top" : "left",
              m = d === "y" ? "bottom" : "right",
              p = h + c[x],
              w = h - c[m];
            h = qc(p, h, w);
          }
          if (s) {
            const x = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              p = y + c[x],
              w = y - c[m];
            y = qc(p, y, w);
          }
          const v = a.fn({ ...t, [d]: h, [f]: y });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [d]: i, [f]: s } },
          };
        },
      }
    );
  },
  hM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = cn(e, t),
            c = { x: n, y: r },
            f = Gn(o),
            d = Td(f);
          let h = c[d],
            y = c[f];
          const v = cn(a, t),
            x =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (l) {
            const w = d === "y" ? "height" : "width",
              S = i.reference[d] - i.floating[w] + x.mainAxis,
              E = i.reference[d] + i.reference[w] - x.mainAxis;
            h < S ? (h = S) : h > E && (h = E);
          }
          if (u) {
            var m, p;
            const w = d === "y" ? "width" : "height",
              S = ["top", "left"].includes(fn(o)),
              E =
                i.reference[f] -
                i.floating[w] +
                ((S && ((m = s.offset) == null ? void 0 : m[f])) || 0) +
                (S ? 0 : x.crossAxis),
              P =
                i.reference[f] +
                i.reference[w] +
                (S ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) -
                (S ? x.crossAxis : 0);
            y < E ? (y = E) : y > P && (y = P);
          }
          return { [d]: h, [f]: y };
        },
      }
    );
  },
  mM = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = cn(e, t),
            c = await $i(t, u),
            f = fn(o),
            d = Io(o),
            h = Gn(o) === "y",
            { width: y, height: v } = i.floating;
          let x, m;
          f === "top" || f === "bottom"
            ? ((x = f),
              (m =
                d ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = f), (x = d === "end" ? "top" : "bottom"));
          const p = v - c.top - c.bottom,
            w = y - c.left - c.right,
            S = Wn(v - c[x], p),
            E = Wn(y - c[m], w),
            P = !t.middlewareData.shift;
          let k = S,
            T = E;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = p),
            P && !d)
          ) {
            const A = Je(c.left, 0),
              j = Je(c.right, 0),
              L = Je(c.top, 0),
              G = Je(c.bottom, 0);
            h
              ? (T = y - 2 * (A !== 0 || j !== 0 ? A + j : Je(c.left, c.right)))
              : (k =
                  v - 2 * (L !== 0 || G !== 0 ? L + G : Je(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: T, availableHeight: k });
          const b = await s.getDimensions(a.floating);
          return y !== b.width || v !== b.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ml() {
  return typeof window < "u";
}
function Lo(e) {
  return q0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Gt(e) {
  var t;
  return (t = (q0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function q0(e) {
  return Ml() ? e instanceof Node || e instanceof nt(e).Node : !1;
}
function bt(e) {
  return Ml() ? e instanceof Element || e instanceof nt(e).Element : !1;
}
function Ht(e) {
  return Ml() ? e instanceof HTMLElement || e instanceof nt(e).HTMLElement : !1;
}
function op(e) {
  return !Ml() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof nt(e).ShadowRoot;
}
function ss(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Dt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function pM(e) {
  return ["table", "td", "th"].includes(Lo(e));
}
function Nl(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Md(e) {
  const t = Nd(),
    n = bt(e) ? Dt(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function gM(e) {
  let t = Kn(e);
  for (; Ht(t) && !Eo(t); ) {
    if (Md(t)) return t;
    if (Nl(t)) return null;
    t = Kn(t);
  }
  return null;
}
function Nd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Eo(e) {
  return ["html", "body", "#document"].includes(Lo(e));
}
function Dt(e) {
  return nt(e).getComputedStyle(e);
}
function Rl(e) {
  return bt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Kn(e) {
  if (Lo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (op(e) && e.host) || Gt(e);
  return op(t) ? t.host : t;
}
function Q0(e) {
  const t = Kn(e);
  return Eo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Ht(t) && ss(t)
      ? t
      : Q0(t);
}
function Wi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Q0(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = nt(o);
  if (i) {
    const a = Xc(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ss(o) ? o : [],
      a && n ? Wi(a) : [],
    );
  }
  return t.concat(o, Wi(o, [], n));
}
function Xc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function X0(e) {
  const t = Dt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Ht(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = Ha(n) !== i || Ha(r) !== s;
  return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function Rd(e) {
  return bt(e) ? e : e.contextElement;
}
function co(e) {
  const t = Rd(e);
  if (!Ht(t)) return Hn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = X0(t);
  let s = (i ? Ha(n.width) : n.width) / r,
    a = (i ? Ha(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const yM = Hn(0);
function J0(e) {
  const t = nt(e);
  return !Nd() || !t.visualViewport
    ? yM
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function vM(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== nt(e)) ? !1 : t;
}
function Er(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Rd(e);
  let s = Hn(1);
  t && (r ? bt(r) && (s = co(r)) : (s = co(e)));
  const a = vM(i, n, r) ? J0(i) : Hn(0);
  let l = (o.left + a.x) / s.x,
    u = (o.top + a.y) / s.y,
    c = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const d = nt(i),
      h = r && bt(r) ? nt(r) : r;
    let y = d,
      v = Xc(y);
    for (; v && r && h !== y; ) {
      const x = co(v),
        m = v.getBoundingClientRect(),
        p = Dt(v),
        w = m.left + (v.clientLeft + parseFloat(p.paddingLeft)) * x.x,
        S = m.top + (v.clientTop + parseFloat(p.paddingTop)) * x.y;
      (l *= x.x),
        (u *= x.y),
        (c *= x.x),
        (f *= x.y),
        (l += w),
        (u += S),
        (y = nt(v)),
        (v = Xc(y));
    }
  }
  return Ka({ width: c, height: f, x: l, y: u });
}
function wM(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Gt(r),
    a = t ? Nl(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Hn(1);
  const c = Hn(0),
    f = Ht(r);
  if (
    (f || (!f && !i)) &&
    ((Lo(r) !== "body" || ss(s)) && (l = Rl(r)), Ht(r))
  ) {
    const d = Er(r);
    (u = co(r)), (c.x = d.x + r.clientLeft), (c.y = d.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y,
  };
}
function xM(e) {
  return Array.from(e.getClientRects());
}
function Jc(e, t) {
  const n = Rl(e).scrollLeft;
  return t ? t.left + n : Er(Gt(e)).left + n;
}
function SM(e) {
  const t = Gt(e),
    n = Rl(e),
    r = e.ownerDocument.body,
    o = Je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Jc(e);
  const a = -n.scrollTop;
  return (
    Dt(r).direction === "rtl" && (s += Je(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function CM(e, t) {
  const n = nt(e),
    r = Gt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = Nd();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
function EM(e, t) {
  const n = Er(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Ht(e) ? co(e) : Hn(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    u = r * i.y;
  return { width: s, height: a, x: l, y: u };
}
function ip(e, t, n) {
  let r;
  if (t === "viewport") r = CM(e, n);
  else if (t === "document") r = SM(Gt(e));
  else if (bt(t)) r = EM(t, n);
  else {
    const o = J0(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Ka(r);
}
function ew(e, t) {
  const n = Kn(e);
  return n === t || !bt(n) || Eo(n)
    ? !1
    : Dt(n).position === "fixed" || ew(n, t);
}
function TM(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Wi(e, [], !1).filter((a) => bt(a) && Lo(a) !== "body"),
    o = null;
  const i = Dt(e).position === "fixed";
  let s = i ? Kn(e) : e;
  for (; bt(s) && !Eo(s); ) {
    const a = Dt(s),
      l = Md(s);
    !l && a.position === "fixed" && (o = null),
      (
        i
          ? !l && !o
          : (!l &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ss(s) && !l && ew(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = a),
      (s = Kn(s));
  }
  return t.set(e, r), r;
}
function kM(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Nl(t)
          ? []
          : TM(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce(
      (u, c) => {
        const f = ip(t, c, o);
        return (
          (u.top = Je(f.top, u.top)),
          (u.right = Wn(f.right, u.right)),
          (u.bottom = Wn(f.bottom, u.bottom)),
          (u.left = Je(f.left, u.left)),
          u
        );
      },
      ip(t, a, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function PM(e) {
  const { width: t, height: n } = X0(e);
  return { width: t, height: n };
}
function MM(e, t, n) {
  const r = Ht(t),
    o = Gt(t),
    i = n === "fixed",
    s = Er(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Hn(0);
  if (r || (!r && !i))
    if (((Lo(t) !== "body" || ss(o)) && (a = Rl(t)), r)) {
      const h = Er(t, !0, i, t);
      (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
    } else o && (l.x = Jc(o));
  let u = 0,
    c = 0;
  if (o && !r && !i) {
    const h = o.getBoundingClientRect();
    (c = h.top + a.scrollTop), (u = h.left + a.scrollLeft - Jc(o, h));
  }
  const f = s.left + a.scrollLeft - l.x - u,
    d = s.top + a.scrollTop - l.y - c;
  return { x: f, y: d, width: s.width, height: s.height };
}
function Cu(e) {
  return Dt(e).position === "static";
}
function sp(e, t) {
  if (!Ht(e) || Dt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Gt(e) === n && (n = n.ownerDocument.body), n;
}
function tw(e, t) {
  const n = nt(e);
  if (Nl(e)) return n;
  if (!Ht(e)) {
    let o = Kn(e);
    for (; o && !Eo(o); ) {
      if (bt(o) && !Cu(o)) return o;
      o = Kn(o);
    }
    return n;
  }
  let r = sp(e, t);
  for (; r && pM(r) && Cu(r); ) r = sp(r, t);
  return r && Eo(r) && Cu(r) && !Md(r) ? n : r || gM(e) || n;
}
const NM = async function (e) {
  const t = this.getOffsetParent || tw,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: MM(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function RM(e) {
  return Dt(e).direction === "rtl";
}
const AM = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wM,
  getDocumentElement: Gt,
  getClippingRect: kM,
  getOffsetParent: tw,
  getElementRects: NM,
  getClientRects: xM,
  getDimensions: PM,
  getScale: co,
  isElement: bt,
  isRTL: RM,
};
function OM(e, t) {
  let n = null,
    r;
  const o = Gt(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const { left: u, top: c, width: f, height: d } = e.getBoundingClientRect();
    if ((a || t(), !f || !d)) return;
    const h = Ls(c),
      y = Ls(o.clientWidth - (u + f)),
      v = Ls(o.clientHeight - (c + d)),
      x = Ls(u),
      p = {
        rootMargin: -h + "px " + -y + "px " + -v + "px " + -x + "px",
        threshold: Je(0, Wn(1, l)) || 1,
      };
    let w = !0;
    function S(E) {
      const P = E[0].intersectionRatio;
      if (P !== l) {
        if (!w) return s();
        P
          ? s(!1, P)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...p, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, p);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function bM(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = Rd(e),
    c = o || i ? [...(u ? Wi(u) : []), ...Wi(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n);
  });
  const f = u && a ? OM(u, n) : null;
  let d = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((m) => {
      let [p] = m;
      p &&
        p.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          var w;
          (w = h) == null || w.observe(t);
        }))),
        n();
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let y,
    v = l ? Er(e) : null;
  l && x();
  function x() {
    const m = Er(e);
    v &&
      (m.x !== v.x ||
        m.y !== v.y ||
        m.width !== v.width ||
        m.height !== v.height) &&
      n(),
      (v = m),
      (y = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var m;
      c.forEach((p) => {
        o && p.removeEventListener("scroll", n),
          i && p.removeEventListener("resize", n);
      }),
        f == null || f(),
        (m = h) == null || m.disconnect(),
        (h = null),
        l && cancelAnimationFrame(y);
    }
  );
}
const DM = fM,
  IM = dM,
  LM = lM,
  FM = mM,
  _M = uM,
  ap = aM,
  VM = hM,
  jM = (e, t, n) => {
    const r = new Map(),
      o = { platform: AM, ...n },
      i = { ...o.platform, _c: r };
    return sM(e, t, { ...o, platform: i });
  };
var la = typeof document < "u" ? g.useLayoutEffect : g.useEffect;
function Ya(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ya(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ya(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function nw(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lp(e, t) {
  const n = nw(e);
  return Math.round(t * n) / n;
}
function Eu(e) {
  const t = g.useRef(e);
  return (
    la(() => {
      t.current = e;
    }),
    t
  );
}
function zM(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, f] = g.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [d, h] = g.useState(r);
  Ya(d, r) || h(r);
  const [y, v] = g.useState(null),
    [x, m] = g.useState(null),
    p = g.useCallback((M) => {
      M !== P.current && ((P.current = M), v(M));
    }, []),
    w = g.useCallback((M) => {
      M !== k.current && ((k.current = M), m(M));
    }, []),
    S = i || y,
    E = s || x,
    P = g.useRef(null),
    k = g.useRef(null),
    T = g.useRef(c),
    b = l != null,
    A = Eu(l),
    j = Eu(o),
    L = Eu(u),
    G = g.useCallback(() => {
      if (!P.current || !k.current) return;
      const M = { placement: t, strategy: n, middleware: d };
      j.current && (M.platform = j.current),
        jM(P.current, k.current, M).then((N) => {
          const D = { ...N, isPositioned: L.current !== !1 };
          W.current &&
            !Ya(T.current, D) &&
            ((T.current = D),
            Tl.flushSync(() => {
              f(D);
            }));
        });
    }, [d, t, n, j, L]);
  la(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), f((M) => ({ ...M, isPositioned: !1 })));
  }, [u]);
  const W = g.useRef(!1);
  la(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    [],
  ),
    la(() => {
      if ((S && (P.current = S), E && (k.current = E), S && E)) {
        if (A.current) return A.current(S, E, G);
        G();
      }
    }, [S, E, G, A, b]);
  const ce = g.useMemo(
      () => ({ reference: P, floating: k, setReference: p, setFloating: w }),
      [p, w],
    ),
    $ = g.useMemo(() => ({ reference: S, floating: E }), [S, E]),
    U = g.useMemo(() => {
      const M = { position: n, left: 0, top: 0 };
      if (!$.floating) return M;
      const N = lp($.floating, c.x),
        D = lp($.floating, c.y);
      return a
        ? {
            ...M,
            transform: "translate(" + N + "px, " + D + "px)",
            ...(nw($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: N, top: D };
    }, [n, a, $.floating, c.x, c.y]);
  return g.useMemo(
    () => ({ ...c, update: G, refs: ce, elements: $, floatingStyles: U }),
    [c, G, ce, $, U],
  );
}
const UM = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? ap({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? ap({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  BM = (e, t) => ({ ...DM(e), options: [e, t] }),
  $M = (e, t) => ({ ...IM(e), options: [e, t] }),
  WM = (e, t) => ({ ...VM(e), options: [e, t] }),
  HM = (e, t) => ({ ...LM(e), options: [e, t] }),
  GM = (e, t) => ({ ...FM(e), options: [e, t] }),
  KM = (e, t) => ({ ..._M(e), options: [e, t] }),
  YM = (e, t) => ({ ...UM(e), options: [e, t] });
var ZM = "Arrow",
  rw = g.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return C.jsx(Be.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : C.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
rw.displayName = ZM;
var qM = rw;
function QM(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = g.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: d, children: h, ...y } = f,
        v = (d == null ? void 0 : d[e][l]) || a,
        x = g.useMemo(() => y, Object.values(y));
      return C.jsx(v.Provider, { value: x, children: h });
    }
    function c(f, d) {
      const h = (d == null ? void 0 : d[e][l]) || a,
        y = g.useContext(h);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, c];
  }
  const o = () => {
    const i = n.map((s) => g.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, XM(o, ...t)];
}
function XM(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function JM(e) {
  const [t, n] = g.useState(void 0);
  return (
    Cr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Ad = "Popper",
  [ow, iw] = QM(Ad),
  [eN, sw] = ow(Ad),
  aw = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = g.useState(null);
    return C.jsx(eN, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
aw.displayName = Ad;
var lw = "PopperAnchor",
  uw = g.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = sw(lw, n),
      s = g.useRef(null),
      a = qe(t, s);
    return (
      g.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : C.jsx(Be.div, { ...o, ref: a })
    );
  });
uw.displayName = lw;
var Od = "PopperContent",
  [tN, nN] = ow(Od),
  cw = g.forwardRef((e, t) => {
    var We, Uo, lt, Bo, Th, kh;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: f = "partial",
        hideWhenDetached: d = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: y,
        ...v
      } = e,
      x = sw(Od, n),
      [m, p] = g.useState(null),
      w = qe(t, ($o) => p($o)),
      [S, E] = g.useState(null),
      P = JM(S),
      k = (P == null ? void 0 : P.width) ?? 0,
      T = (P == null ? void 0 : P.height) ?? 0,
      b = r + (i !== "center" ? "-" + i : ""),
      A =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      j = Array.isArray(u) ? u : [u],
      L = j.length > 0,
      G = { padding: A, boundary: j.filter(oN), altBoundary: L },
      {
        refs: W,
        floatingStyles: ce,
        placement: $,
        isPositioned: U,
        middlewareData: M,
      } = zM({
        strategy: "fixed",
        placement: b,
        whileElementsMounted: (...$o) =>
          bM(...$o, { animationFrame: h === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          BM({ mainAxis: o + T, alignmentAxis: s }),
          l &&
            $M({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? WM() : void 0,
              ...G,
            }),
          l && HM({ ...G }),
          GM({
            ...G,
            apply: ({
              elements: $o,
              rects: Ph,
              availableWidth: JS,
              availableHeight: eC,
            }) => {
              const { width: tC, height: nC } = Ph.reference,
                ys = $o.floating.style;
              ys.setProperty("--radix-popper-available-width", `${JS}px`),
                ys.setProperty("--radix-popper-available-height", `${eC}px`),
                ys.setProperty("--radix-popper-anchor-width", `${tC}px`),
                ys.setProperty("--radix-popper-anchor-height", `${nC}px`);
            },
          }),
          S && YM({ element: S, padding: a }),
          iN({ arrowWidth: k, arrowHeight: T }),
          d && KM({ strategy: "referenceHidden", ...G }),
        ],
      }),
      [N, D] = hw($),
      V = Ot(y);
    Cr(() => {
      U && (V == null || V());
    }, [U, V]);
    const X = (We = M.arrow) == null ? void 0 : We.x,
      Ft = (Uo = M.arrow) == null ? void 0 : Uo.y,
      Qe = ((lt = M.arrow) == null ? void 0 : lt.centerOffset) !== 0,
      [mn, Fe] = g.useState();
    return (
      Cr(() => {
        m && Fe(window.getComputedStyle(m).zIndex);
      }, [m]),
      C.jsx("div", {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ce,
          transform: U ? ce.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: mn,
          "--radix-popper-transform-origin": [
            (Bo = M.transformOrigin) == null ? void 0 : Bo.x,
            (Th = M.transformOrigin) == null ? void 0 : Th.y,
          ].join(" "),
          ...(((kh = M.hide) == null ? void 0 : kh.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: C.jsx(tN, {
          scope: n,
          placedSide: N,
          onArrowChange: E,
          arrowX: X,
          arrowY: Ft,
          shouldHideArrow: Qe,
          children: C.jsx(Be.div, {
            "data-side": N,
            "data-align": D,
            ...v,
            ref: w,
            style: { ...v.style, animation: U ? void 0 : "none" },
          }),
        }),
      })
    );
  });
cw.displayName = Od;
var fw = "PopperArrow",
  rN = { top: "bottom", right: "left", bottom: "top", left: "right" },
  dw = g.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = nN(fw, r),
      s = rN[i.placedSide];
    return C.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: C.jsx(qM, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
dw.displayName = fw;
function oN(e) {
  return e !== null;
}
var iN = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, m, p;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, c] = hw(n),
      f = { start: "0%", center: "50%", end: "100%" }[c],
      d = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      h = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
    let y = "",
      v = "";
    return (
      u === "bottom"
        ? ((y = s ? f : `${d}px`), (v = `${-l}px`))
        : u === "top"
          ? ((y = s ? f : `${d}px`), (v = `${r.floating.height + l}px`))
          : u === "right"
            ? ((y = `${-l}px`), (v = s ? f : `${h}px`))
            : u === "left" &&
              ((y = `${r.floating.width + l}px`), (v = s ? f : `${h}px`)),
      { data: { x: y, y: v } }
    );
  },
});
function hw(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var sN = aw,
  aN = uw,
  lN = cw,
  uN = dw,
  cN = "Portal",
  mw = g.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, i] = g.useState(!1);
    Cr(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? RT.createPortal(C.jsx(Be.div, { ...r, ref: t }), s) : null;
  });
mw.displayName = cN;
function fN(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
var as = (e) => {
  const { present: t, children: n } = e,
    r = dN(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n),
    i = qe(r.ref, hN(o));
  return typeof n == "function" || r.isPresent
    ? g.cloneElement(o, { ref: i })
    : null;
};
as.displayName = "Presence";
function dN(e) {
  const [t, n] = g.useState(),
    r = g.useRef({}),
    o = g.useRef(e),
    i = g.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = fN(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    g.useEffect(() => {
      const u = Fs(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    Cr(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const d = i.current,
          h = Fs(u);
        e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(c && d !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    Cr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (h) => {
            const v = Fs(r.current).includes(h.animationName);
            if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
              const x = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                }));
            }
          },
          d = (h) => {
            h.target === t && (i.current = Fs(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: g.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Fs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function hN(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function mN(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = g.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: d, children: h, ...y } = f,
        v = (d == null ? void 0 : d[e][l]) || a,
        x = g.useMemo(() => y, Object.values(y));
      return C.jsx(v.Provider, { value: x, children: h });
    }
    function c(f, d) {
      const h = (d == null ? void 0 : d[e][l]) || a,
        y = g.useContext(h);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, c];
  }
  const o = () => {
    const i = n.map((s) => g.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, pN(o, ...t)];
}
function pN(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Tu = "rovingFocusGroup.onEntryFocus",
  gN = { bubbles: !1, cancelable: !0 },
  Al = "RovingFocusGroup",
  [ef, pw, yN] = B0(Al),
  [vN, gw] = mN(Al, [yN]),
  [wN, xN] = vN(Al),
  yw = g.forwardRef((e, t) =>
    C.jsx(ef.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: C.jsx(ef.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: C.jsx(SN, { ...e, ref: t }),
      }),
    }),
  );
yw.displayName = Al;
var SN = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: u,
        preventScrollOnEntryFocus: c = !1,
        ...f
      } = e,
      d = g.useRef(null),
      h = qe(t, d),
      y = $0(i),
      [v = null, x] = z0({ prop: s, defaultProp: a, onChange: l }),
      [m, p] = g.useState(!1),
      w = Ot(u),
      S = pw(n),
      E = g.useRef(!1),
      [P, k] = g.useState(0);
    return (
      g.useEffect(() => {
        const T = d.current;
        if (T)
          return T.addEventListener(Tu, w), () => T.removeEventListener(Tu, w);
      }, [w]),
      C.jsx(wN, {
        scope: n,
        orientation: r,
        dir: y,
        loop: o,
        currentTabStopId: v,
        onItemFocus: g.useCallback((T) => x(T), [x]),
        onItemShiftTab: g.useCallback(() => p(!0), []),
        onFocusableItemAdd: g.useCallback(() => k((T) => T + 1), []),
        onFocusableItemRemove: g.useCallback(() => k((T) => T - 1), []),
        children: C.jsx(Be.div, {
          tabIndex: m || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: K(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: K(e.onFocus, (T) => {
            const b = !E.current;
            if (T.target === T.currentTarget && b && !m) {
              const A = new CustomEvent(Tu, gN);
              if ((T.currentTarget.dispatchEvent(A), !A.defaultPrevented)) {
                const j = S().filter(($) => $.focusable),
                  L = j.find(($) => $.active),
                  G = j.find(($) => $.id === v),
                  ce = [L, G, ...j].filter(Boolean).map(($) => $.ref.current);
                xw(ce, c);
              }
            }
            E.current = !1;
          }),
          onBlur: K(e.onBlur, () => p(!1)),
        }),
      })
    );
  }),
  vw = "RovingFocusGroupItem",
  ww = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...s
      } = e,
      a = Zc(),
      l = i || a,
      u = xN(vw, n),
      c = u.currentTabStopId === l,
      f = pw(n),
      { onFocusableItemAdd: d, onFocusableItemRemove: h } = u;
    return (
      g.useEffect(() => {
        if (r) return d(), () => h();
      }, [r, d, h]),
      C.jsx(ef.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: C.jsx(Be.span, {
          tabIndex: c ? 0 : -1,
          "data-orientation": u.orientation,
          ...s,
          ref: t,
          onMouseDown: K(e.onMouseDown, (y) => {
            r ? u.onItemFocus(l) : y.preventDefault();
          }),
          onFocus: K(e.onFocus, () => u.onItemFocus(l)),
          onKeyDown: K(e.onKeyDown, (y) => {
            if (y.key === "Tab" && y.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (y.target !== y.currentTarget) return;
            const v = TN(y, u.orientation, u.dir);
            if (v !== void 0) {
              if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
              y.preventDefault();
              let m = f()
                .filter((p) => p.focusable)
                .map((p) => p.ref.current);
              if (v === "last") m.reverse();
              else if (v === "prev" || v === "next") {
                v === "prev" && m.reverse();
                const p = m.indexOf(y.currentTarget);
                m = u.loop ? kN(m, p + 1) : m.slice(p + 1);
              }
              setTimeout(() => xw(m));
            }
          }),
        }),
      })
    );
  });
ww.displayName = vw;
var CN = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function EN(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function TN(e, t, n) {
  const r = EN(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return CN[r];
}
function xw(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function kN(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var PN = yw,
  MN = ww,
  NN = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  br = new WeakMap(),
  _s = new WeakMap(),
  Vs = {},
  ku = 0,
  Sw = function (e) {
    return e && (e.host || Sw(e.parentNode));
  },
  RN = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Sw(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  AN = function (e, t, n, r) {
    var o = RN(t, Array.isArray(e) ? e : [e]);
    Vs[n] || (Vs[n] = new WeakMap());
    var i = Vs[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      u = function (f) {
        !f || a.has(f) || (a.add(f), u(f.parentNode));
      };
    o.forEach(u);
    var c = function (f) {
      !f ||
        l.has(f) ||
        Array.prototype.forEach.call(f.children, function (d) {
          if (a.has(d)) c(d);
          else
            try {
              var h = d.getAttribute(r),
                y = h !== null && h !== "false",
                v = (br.get(d) || 0) + 1,
                x = (i.get(d) || 0) + 1;
              br.set(d, v),
                i.set(d, x),
                s.push(d),
                v === 1 && y && _s.set(d, !0),
                x === 1 && d.setAttribute(n, "true"),
                y || d.setAttribute(r, "true");
            } catch (m) {
              console.error("aria-hidden: cannot operate on ", d, m);
            }
        });
    };
    return (
      c(t),
      a.clear(),
      ku++,
      function () {
        s.forEach(function (f) {
          var d = br.get(f) - 1,
            h = i.get(f) - 1;
          br.set(f, d),
            i.set(f, h),
            d || (_s.has(f) || f.removeAttribute(r), _s.delete(f)),
            h || f.removeAttribute(n);
        }),
          ku--,
          ku ||
            ((br = new WeakMap()),
            (br = new WeakMap()),
            (_s = new WeakMap()),
            (Vs = {}));
      }
    );
  },
  ON = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = NN(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        AN(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  zt = function () {
    return (
      (zt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      zt.apply(this, arguments)
    );
  };
function Cw(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function bN(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var ua = "right-scroll-bar-position",
  ca = "width-before-scroll-bar",
  DN = "with-scroll-bars-hidden",
  IN = "--removed-body-scroll-bar-size";
function Pu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function LN(e, t) {
  var n = g.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var FN = typeof window < "u" ? g.useLayoutEffect : g.useEffect,
  up = new WeakMap();
function _N(e, t) {
  var n = LN(null, function (r) {
    return e.forEach(function (o) {
      return Pu(o, r);
    });
  });
  return (
    FN(
      function () {
        var r = up.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (a) {
            i.has(a) || Pu(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || Pu(a, s);
            });
        }
        up.set(n, e);
      },
      [e],
    ),
    n
  );
}
function VN(e) {
  return e;
}
function jN(e, t) {
  t === void 0 && (t = VN);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function zN(e) {
  e === void 0 && (e = {});
  var t = jN(null);
  return (t.options = zt({ async: !0, ssr: !1 }, e)), t;
}
var Ew = function (e) {
  var t = e.sideCar,
    n = Cw(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return g.createElement(r, zt({}, n));
};
Ew.isSideCarExport = !0;
function UN(e, t) {
  return e.useMedium(t), Ew;
}
var Tw = zN(),
  Mu = function () {},
  Ol = g.forwardRef(function (e, t) {
    var n = g.useRef(null),
      r = g.useState({
        onScrollCapture: Mu,
        onWheelCapture: Mu,
        onTouchMoveCapture: Mu,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      f = e.shards,
      d = e.sideCar,
      h = e.noIsolation,
      y = e.inert,
      v = e.allowPinchZoom,
      x = e.as,
      m = x === void 0 ? "div" : x,
      p = e.gapMode,
      w = Cw(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = d,
      E = _N([n, t]),
      P = zt(zt({}, w), o);
    return g.createElement(
      g.Fragment,
      null,
      c &&
        g.createElement(S, {
          sideCar: Tw,
          removeScrollBar: u,
          shards: f,
          noIsolation: h,
          inert: y,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: p,
        }),
      s
        ? g.cloneElement(g.Children.only(a), zt(zt({}, P), { ref: E }))
        : g.createElement(m, zt({}, P, { className: l, ref: E }), a),
    );
  });
Ol.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ol.classNames = { fullWidth: ca, zeroRight: ua };
var BN = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function $N() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = BN();
  return t && e.setAttribute("nonce", t), e;
}
function WN(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function HN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var GN = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = $N()) && (WN(t, n), HN(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  KN = function () {
    var e = GN();
    return function (t, n) {
      g.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  kw = function () {
    var e = KN(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  YN = { left: 0, top: 0, right: 0, gap: 0 },
  Nu = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  ZN = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Nu(n), Nu(r), Nu(o)];
  },
  qN = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return YN;
    var t = ZN(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  QN = kw(),
  fo = "data-scroll-locked",
  XN = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          DN,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          fo,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          ua,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          ca,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ua, " .")
        .concat(
          ua,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ca, " .")
        .concat(
          ca,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          fo,
          `] {
    `,
        )
        .concat(IN, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  cp = function () {
    var e = parseInt(document.body.getAttribute(fo) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  JN = function () {
    g.useEffect(function () {
      return (
        document.body.setAttribute(fo, (cp() + 1).toString()),
        function () {
          var e = cp() - 1;
          e <= 0
            ? document.body.removeAttribute(fo)
            : document.body.setAttribute(fo, e.toString());
        }
      );
    }, []);
  },
  eR = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    JN();
    var i = g.useMemo(
      function () {
        return qN(o);
      },
      [o],
    );
    return g.createElement(QN, { styles: XN(i, !t, o, n ? "" : "!important") });
  },
  tf = !1;
if (typeof window < "u")
  try {
    var js = Object.defineProperty({}, "passive", {
      get: function () {
        return (tf = !0), !0;
      },
    });
    window.addEventListener("test", js, js),
      window.removeEventListener("test", js, js);
  } catch {
    tf = !1;
  }
var Dr = tf ? { passive: !1 } : !1,
  tR = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Pw = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !tR(e) && n[t] === "visible")
    );
  },
  nR = function (e) {
    return Pw(e, "overflowY");
  },
  rR = function (e) {
    return Pw(e, "overflowX");
  },
  fp = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Mw(e, r);
      if (o) {
        var i = Nw(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  oR = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  iR = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Mw = function (e, t) {
    return e === "v" ? nR(t) : rR(t);
  },
  Nw = function (e, t) {
    return e === "v" ? oR(t) : iR(t);
  },
  sR = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  aR = function (e, t, n, r, o) {
    var i = sR(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      f = 0,
      d = 0;
    do {
      var h = Nw(e, a),
        y = h[0],
        v = h[1],
        x = h[2],
        m = v - x - i * y;
      (y || m) && Mw(e, a) && ((f += m), (d += y)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && (Math.abs(f) < 1 || !o)) || (!c && (Math.abs(d) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  zs = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  dp = function (e) {
    return [e.deltaX, e.deltaY];
  },
  hp = function (e) {
    return e && "current" in e ? e.current : e;
  },
  lR = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  uR = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  cR = 0,
  Ir = [];
function fR(e) {
  var t = g.useRef([]),
    n = g.useRef([0, 0]),
    r = g.useRef(),
    o = g.useState(cR++)[0],
    i = g.useState(kw)[0],
    s = g.useRef(e);
  g.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    g.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = bN([e.lockRef.current], (e.shards || []).map(hp), !0).filter(
            Boolean,
          );
          return (
            v.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = g.useCallback(function (v, x) {
      if (
        ("touches" in v && v.touches.length === 2) ||
        (v.type === "wheel" && v.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var m = zs(v),
        p = n.current,
        w = "deltaX" in v ? v.deltaX : p[0] - m[0],
        S = "deltaY" in v ? v.deltaY : p[1] - m[1],
        E,
        P = v.target,
        k = Math.abs(w) > Math.abs(S) ? "h" : "v";
      if ("touches" in v && k === "h" && P.type === "range") return !1;
      var T = fp(k, P);
      if (!T) return !0;
      if ((T ? (E = k) : ((E = k === "v" ? "h" : "v"), (T = fp(k, P))), !T))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (w || S) && (r.current = E), !E)
      )
        return !0;
      var b = r.current || E;
      return aR(b, x, v, b === "h" ? w : S, !0);
    }, []),
    l = g.useCallback(function (v) {
      var x = v;
      if (!(!Ir.length || Ir[Ir.length - 1] !== i)) {
        var m = "deltaY" in x ? dp(x) : zs(x),
          p = t.current.filter(function (E) {
            return (
              E.name === x.type &&
              (E.target === x.target || x.target === E.shadowParent) &&
              lR(E.delta, m)
            );
          })[0];
        if (p && p.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!p) {
          var w = (s.current.shards || [])
              .map(hp)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(x.target);
              }),
            S = w.length > 0 ? a(x, w[0]) : !s.current.noIsolation;
          S && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = g.useCallback(function (v, x, m, p) {
      var w = { name: v, delta: x, target: m, should: p, shadowParent: dR(m) };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== w;
          });
        }, 1);
    }, []),
    c = g.useCallback(function (v) {
      (n.current = zs(v)), (r.current = void 0);
    }, []),
    f = g.useCallback(function (v) {
      u(v.type, dp(v), v.target, a(v, e.lockRef.current));
    }, []),
    d = g.useCallback(function (v) {
      u(v.type, zs(v), v.target, a(v, e.lockRef.current));
    }, []);
  g.useEffect(function () {
    return (
      Ir.push(i),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: d,
      }),
      document.addEventListener("wheel", l, Dr),
      document.addEventListener("touchmove", l, Dr),
      document.addEventListener("touchstart", c, Dr),
      function () {
        (Ir = Ir.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", l, Dr),
          document.removeEventListener("touchmove", l, Dr),
          document.removeEventListener("touchstart", c, Dr);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    y = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    y ? g.createElement(i, { styles: uR(o) }) : null,
    h ? g.createElement(eR, { gapMode: e.gapMode }) : null,
  );
}
function dR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const hR = UN(Tw, fR);
var Rw = g.forwardRef(function (e, t) {
  return g.createElement(Ol, zt({}, e, { ref: t, sideCar: hR }));
});
Rw.classNames = Ol.classNames;
var nf = ["Enter", " "],
  mR = ["ArrowDown", "PageUp", "Home"],
  Aw = ["ArrowUp", "PageDown", "End"],
  pR = [...mR, ...Aw],
  gR = { ltr: [...nf, "ArrowRight"], rtl: [...nf, "ArrowLeft"] },
  yR = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  ls = "Menu",
  [Hi, vR, wR] = B0(ls),
  [Nr, Ow] = j0(ls, [wR, iw, gw]),
  bl = iw(),
  bw = gw(),
  [xR, Rr] = Nr(ls),
  [SR, us] = Nr(ls),
  Dw = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      a = bl(t),
      [l, u] = g.useState(null),
      c = g.useRef(!1),
      f = Ot(i),
      d = $0(o);
    return (
      g.useEffect(() => {
        const h = () => {
            (c.current = !0),
              document.addEventListener("pointerdown", y, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", y, {
                capture: !0,
                once: !0,
              });
          },
          y = () => (c.current = !1);
        return (
          document.addEventListener("keydown", h, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", h, { capture: !0 }),
              document.removeEventListener("pointerdown", y, { capture: !0 }),
              document.removeEventListener("pointermove", y, { capture: !0 });
          }
        );
      }, []),
      C.jsx(sN, {
        ...a,
        children: C.jsx(xR, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: l,
          onContentChange: u,
          children: C.jsx(SR, {
            scope: t,
            onClose: g.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: c,
            dir: d,
            modal: s,
            children: r,
          }),
        }),
      })
    );
  };
Dw.displayName = ls;
var CR = "MenuAnchor",
  bd = g.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = bl(n);
    return C.jsx(aN, { ...o, ...r, ref: t });
  });
bd.displayName = CR;
var Dd = "MenuPortal",
  [ER, Iw] = Nr(Dd, { forceMount: void 0 }),
  Lw = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = Rr(Dd, t);
    return C.jsx(ER, {
      scope: t,
      forceMount: n,
      children: C.jsx(as, {
        present: n || i.open,
        children: C.jsx(mw, { asChild: !0, container: o, children: r }),
      }),
    });
  };
Lw.displayName = Dd;
var vt = "MenuContent",
  [TR, Id] = Nr(vt),
  Fw = g.forwardRef((e, t) => {
    const n = Iw(vt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Rr(vt, e.__scopeMenu),
      s = us(vt, e.__scopeMenu);
    return C.jsx(Hi.Provider, {
      scope: e.__scopeMenu,
      children: C.jsx(as, {
        present: r || i.open,
        children: C.jsx(Hi.Slot, {
          scope: e.__scopeMenu,
          children: s.modal
            ? C.jsx(kR, { ...o, ref: t })
            : C.jsx(PR, { ...o, ref: t }),
        }),
      }),
    });
  }),
  kR = g.forwardRef((e, t) => {
    const n = Rr(vt, e.__scopeMenu),
      r = g.useRef(null),
      o = qe(t, r);
    return (
      g.useEffect(() => {
        const i = r.current;
        if (i) return ON(i);
      }, []),
      C.jsx(Ld, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: K(e.onFocusOutside, (i) => i.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  PR = g.forwardRef((e, t) => {
    const n = Rr(vt, e.__scopeMenu);
    return C.jsx(Ld, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  Ld = g.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: a,
        onEntryFocus: l,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: f,
        onInteractOutside: d,
        onDismiss: h,
        disableOutsideScroll: y,
        ...v
      } = e,
      x = Rr(vt, n),
      m = us(vt, n),
      p = bl(n),
      w = bw(n),
      S = vR(n),
      [E, P] = g.useState(null),
      k = g.useRef(null),
      T = qe(t, k, x.onContentChange),
      b = g.useRef(0),
      A = g.useRef(""),
      j = g.useRef(0),
      L = g.useRef(null),
      G = g.useRef("right"),
      W = g.useRef(0),
      ce = y ? Rw : g.Fragment,
      $ = y ? { as: Co, allowPinchZoom: !0 } : void 0,
      U = (N) => {
        var We, Uo;
        const D = A.current + N,
          V = S().filter((lt) => !lt.disabled),
          X = document.activeElement,
          Ft =
            (We = V.find((lt) => lt.ref.current === X)) == null
              ? void 0
              : We.textValue,
          Qe = V.map((lt) => lt.textValue),
          mn = VR(Qe, D, Ft),
          Fe =
            (Uo = V.find((lt) => lt.textValue === mn)) == null
              ? void 0
              : Uo.ref.current;
        (function lt(Bo) {
          (A.current = Bo),
            window.clearTimeout(b.current),
            Bo !== "" && (b.current = window.setTimeout(() => lt(""), 1e3));
        })(D),
          Fe && setTimeout(() => Fe.focus());
      };
    g.useEffect(() => () => window.clearTimeout(b.current), []), BP();
    const M = g.useCallback((N) => {
      var V, X;
      return (
        G.current === ((V = L.current) == null ? void 0 : V.side) &&
        zR(N, (X = L.current) == null ? void 0 : X.area)
      );
    }, []);
    return C.jsx(TR, {
      scope: n,
      searchRef: A,
      onItemEnter: g.useCallback(
        (N) => {
          M(N) && N.preventDefault();
        },
        [M],
      ),
      onItemLeave: g.useCallback(
        (N) => {
          var D;
          M(N) || ((D = k.current) == null || D.focus(), P(null));
        },
        [M],
      ),
      onTriggerLeave: g.useCallback(
        (N) => {
          M(N) && N.preventDefault();
        },
        [M],
      ),
      pointerGraceTimerRef: j,
      onPointerGraceIntentChange: g.useCallback((N) => {
        L.current = N;
      }, []),
      children: C.jsx(ce, {
        ...$,
        children: C.jsx(K0, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: K(i, (N) => {
            var D;
            N.preventDefault(),
              (D = k.current) == null || D.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: s,
          children: C.jsx(H0, {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: u,
            onPointerDownOutside: c,
            onFocusOutside: f,
            onInteractOutside: d,
            onDismiss: h,
            children: C.jsx(PN, {
              asChild: !0,
              ...w,
              dir: m.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: E,
              onCurrentTabStopIdChange: P,
              onEntryFocus: K(l, (N) => {
                m.isUsingKeyboardRef.current || N.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: C.jsx(lN, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": Xw(x.open),
                "data-radix-menu-content": "",
                dir: m.dir,
                ...p,
                ...v,
                ref: T,
                style: { outline: "none", ...v.style },
                onKeyDown: K(v.onKeyDown, (N) => {
                  const V =
                      N.target.closest("[data-radix-menu-content]") ===
                      N.currentTarget,
                    X = N.ctrlKey || N.altKey || N.metaKey,
                    Ft = N.key.length === 1;
                  V &&
                    (N.key === "Tab" && N.preventDefault(),
                    !X && Ft && U(N.key));
                  const Qe = k.current;
                  if (N.target !== Qe || !pR.includes(N.key)) return;
                  N.preventDefault();
                  const Fe = S()
                    .filter((We) => !We.disabled)
                    .map((We) => We.ref.current);
                  Aw.includes(N.key) && Fe.reverse(), FR(Fe);
                }),
                onBlur: K(e.onBlur, (N) => {
                  N.currentTarget.contains(N.target) ||
                    (window.clearTimeout(b.current), (A.current = ""));
                }),
                onPointerMove: K(
                  e.onPointerMove,
                  Gi((N) => {
                    const D = N.target,
                      V = W.current !== N.clientX;
                    if (N.currentTarget.contains(D) && V) {
                      const X = N.clientX > W.current ? "right" : "left";
                      (G.current = X), (W.current = N.clientX);
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
Fw.displayName = vt;
var MR = "MenuGroup",
  Fd = g.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return C.jsx(Be.div, { role: "group", ...r, ref: t });
  });
Fd.displayName = MR;
var NR = "MenuLabel",
  _w = g.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return C.jsx(Be.div, { ...r, ref: t });
  });
_w.displayName = NR;
var Za = "MenuItem",
  mp = "menu.itemSelect",
  Dl = g.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = g.useRef(null),
      s = us(Za, e.__scopeMenu),
      a = Id(Za, e.__scopeMenu),
      l = qe(t, i),
      u = g.useRef(!1),
      c = () => {
        const f = i.current;
        if (!n && f) {
          const d = new CustomEvent(mp, { bubbles: !0, cancelable: !0 });
          f.addEventListener(mp, (h) => (r == null ? void 0 : r(h)), {
            once: !0,
          }),
            U0(f, d),
            d.defaultPrevented ? (u.current = !1) : s.onClose();
        }
      };
    return C.jsx(Vw, {
      ...o,
      ref: l,
      disabled: n,
      onClick: K(e.onClick, c),
      onPointerDown: (f) => {
        var d;
        (d = e.onPointerDown) == null || d.call(e, f), (u.current = !0);
      },
      onPointerUp: K(e.onPointerUp, (f) => {
        var d;
        u.current || (d = f.currentTarget) == null || d.click();
      }),
      onKeyDown: K(e.onKeyDown, (f) => {
        const d = a.searchRef.current !== "";
        n ||
          (d && f.key === " ") ||
          (nf.includes(f.key) && (f.currentTarget.click(), f.preventDefault()));
      }),
    });
  });
Dl.displayName = Za;
var Vw = g.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      s = Id(Za, n),
      a = bw(n),
      l = g.useRef(null),
      u = qe(t, l),
      [c, f] = g.useState(!1),
      [d, h] = g.useState("");
    return (
      g.useEffect(() => {
        const y = l.current;
        y && h((y.textContent ?? "").trim());
      }, [i.children]),
      C.jsx(Hi.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? d,
        children: C.jsx(MN, {
          asChild: !0,
          ...a,
          focusable: !r,
          children: C.jsx(Be.div, {
            role: "menuitem",
            "data-highlighted": c ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: K(
              e.onPointerMove,
              Gi((y) => {
                r
                  ? s.onItemLeave(y)
                  : (s.onItemEnter(y),
                    y.defaultPrevented ||
                      y.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: K(
              e.onPointerLeave,
              Gi((y) => s.onItemLeave(y)),
            ),
            onFocus: K(e.onFocus, () => f(!0)),
            onBlur: K(e.onBlur, () => f(!1)),
          }),
        }),
      })
    );
  }),
  RR = "MenuCheckboxItem",
  jw = g.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return C.jsx(Ww, {
      scope: e.__scopeMenu,
      checked: n,
      children: C.jsx(Dl, {
        role: "menuitemcheckbox",
        "aria-checked": qa(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Vd(n),
        onSelect: K(
          o.onSelect,
          () => (r == null ? void 0 : r(qa(n) ? !0 : !n)),
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
jw.displayName = RR;
var zw = "MenuRadioGroup",
  [AR, OR] = Nr(zw, { value: void 0, onValueChange: () => {} }),
  Uw = g.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      i = Ot(r);
    return C.jsx(AR, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: i,
      children: C.jsx(Fd, { ...o, ref: t }),
    });
  });
Uw.displayName = zw;
var Bw = "MenuRadioItem",
  $w = g.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = OR(Bw, e.__scopeMenu),
      i = n === o.value;
    return C.jsx(Ww, {
      scope: e.__scopeMenu,
      checked: i,
      children: C.jsx(Dl, {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Vd(i),
        onSelect: K(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
$w.displayName = Bw;
var _d = "MenuItemIndicator",
  [Ww, bR] = Nr(_d, { checked: !1 }),
  Hw = g.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      i = bR(_d, n);
    return C.jsx(as, {
      present: r || qa(i.checked) || i.checked === !0,
      children: C.jsx(Be.span, { ...o, ref: t, "data-state": Vd(i.checked) }),
    });
  });
Hw.displayName = _d;
var DR = "MenuSeparator",
  Gw = g.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return C.jsx(Be.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t,
    });
  });
Gw.displayName = DR;
var IR = "MenuArrow",
  Kw = g.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = bl(n);
    return C.jsx(uN, { ...o, ...r, ref: t });
  });
Kw.displayName = IR;
var LR = "MenuSub",
  [xF, Yw] = Nr(LR),
  si = "MenuSubTrigger",
  Zw = g.forwardRef((e, t) => {
    const n = Rr(si, e.__scopeMenu),
      r = us(si, e.__scopeMenu),
      o = Yw(si, e.__scopeMenu),
      i = Id(si, e.__scopeMenu),
      s = g.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i,
      u = { __scopeMenu: e.__scopeMenu },
      c = g.useCallback(() => {
        s.current && window.clearTimeout(s.current), (s.current = null);
      }, []);
    return (
      g.useEffect(() => c, [c]),
      g.useEffect(() => {
        const f = a.current;
        return () => {
          window.clearTimeout(f), l(null);
        };
      }, [a, l]),
      C.jsx(bd, {
        asChild: !0,
        ...u,
        children: C.jsx(Vw, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": o.contentId,
          "data-state": Xw(n.open),
          ...e,
          ref: Pl(t, o.onTriggerChange),
          onClick: (f) => {
            var d;
            (d = e.onClick) == null || d.call(e, f),
              !(e.disabled || f.defaultPrevented) &&
                (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
          },
          onPointerMove: K(
            e.onPointerMove,
            Gi((f) => {
              i.onItemEnter(f),
                !f.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !s.current &&
                  (i.onPointerGraceIntentChange(null),
                  (s.current = window.setTimeout(() => {
                    n.onOpenChange(!0), c();
                  }, 100)));
            }),
          ),
          onPointerLeave: K(
            e.onPointerLeave,
            Gi((f) => {
              var h, y;
              c();
              const d =
                (h = n.content) == null ? void 0 : h.getBoundingClientRect();
              if (d) {
                const v = (y = n.content) == null ? void 0 : y.dataset.side,
                  x = v === "right",
                  m = x ? -5 : 5,
                  p = d[x ? "left" : "right"],
                  w = d[x ? "right" : "left"];
                i.onPointerGraceIntentChange({
                  area: [
                    { x: f.clientX + m, y: f.clientY },
                    { x: p, y: d.top },
                    { x: w, y: d.top },
                    { x: w, y: d.bottom },
                    { x: p, y: d.bottom },
                  ],
                  side: v,
                }),
                  window.clearTimeout(a.current),
                  (a.current = window.setTimeout(
                    () => i.onPointerGraceIntentChange(null),
                    300,
                  ));
              } else {
                if ((i.onTriggerLeave(f), f.defaultPrevented)) return;
                i.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: K(e.onKeyDown, (f) => {
            var h;
            const d = i.searchRef.current !== "";
            e.disabled ||
              (d && f.key === " ") ||
              (gR[r.dir].includes(f.key) &&
                (n.onOpenChange(!0),
                (h = n.content) == null || h.focus(),
                f.preventDefault()));
          }),
        }),
      })
    );
  });
Zw.displayName = si;
var qw = "MenuSubContent",
  Qw = g.forwardRef((e, t) => {
    const n = Iw(vt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Rr(vt, e.__scopeMenu),
      s = us(vt, e.__scopeMenu),
      a = Yw(qw, e.__scopeMenu),
      l = g.useRef(null),
      u = qe(t, l);
    return C.jsx(Hi.Provider, {
      scope: e.__scopeMenu,
      children: C.jsx(as, {
        present: r || i.open,
        children: C.jsx(Hi.Slot, {
          scope: e.__scopeMenu,
          children: C.jsx(Ld, {
            id: a.contentId,
            "aria-labelledby": a.triggerId,
            ...o,
            ref: u,
            align: "start",
            side: s.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (c) => {
              var f;
              s.isUsingKeyboardRef.current &&
                ((f = l.current) == null || f.focus()),
                c.preventDefault();
            },
            onCloseAutoFocus: (c) => c.preventDefault(),
            onFocusOutside: K(e.onFocusOutside, (c) => {
              c.target !== a.trigger && i.onOpenChange(!1);
            }),
            onEscapeKeyDown: K(e.onEscapeKeyDown, (c) => {
              s.onClose(), c.preventDefault();
            }),
            onKeyDown: K(e.onKeyDown, (c) => {
              var h;
              const f = c.currentTarget.contains(c.target),
                d = yR[s.dir].includes(c.key);
              f &&
                d &&
                (i.onOpenChange(!1),
                (h = a.trigger) == null || h.focus(),
                c.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Qw.displayName = qw;
function Xw(e) {
  return e ? "open" : "closed";
}
function qa(e) {
  return e === "indeterminate";
}
function Vd(e) {
  return qa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function FR(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function _R(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function VR(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = _R(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function jR(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      l = t[i].y,
      u = t[s].x,
      c = t[s].y;
    l > r != c > r && n < ((u - a) * (r - l)) / (c - l) + a && (o = !o);
  }
  return o;
}
function zR(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return jR(n, t);
}
function Gi(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var UR = Dw,
  BR = bd,
  $R = Lw,
  WR = Fw,
  HR = Fd,
  GR = _w,
  KR = Dl,
  YR = jw,
  ZR = Uw,
  qR = $w,
  QR = Hw,
  XR = Gw,
  JR = Kw,
  eA = Zw,
  tA = Qw,
  jd = "DropdownMenu",
  [nA, SF] = j0(jd, [Ow]),
  $e = Ow(),
  [rA, Jw] = nA(jd),
  ex = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: i,
        onOpenChange: s,
        modal: a = !0,
      } = e,
      l = $e(t),
      u = g.useRef(null),
      [c = !1, f] = z0({ prop: o, defaultProp: i, onChange: s });
    return C.jsx(rA, {
      scope: t,
      triggerId: Zc(),
      triggerRef: u,
      contentId: Zc(),
      open: c,
      onOpenChange: f,
      onOpenToggle: g.useCallback(() => f((d) => !d), [f]),
      modal: a,
      children: C.jsx(UR, {
        ...l,
        open: c,
        onOpenChange: f,
        dir: r,
        modal: a,
        children: n,
      }),
    });
  };
ex.displayName = jd;
var tx = "DropdownMenuTrigger",
  nx = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      i = Jw(tx, n),
      s = $e(n);
    return C.jsx(BR, {
      asChild: !0,
      ...s,
      children: C.jsx(Be.button, {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Pl(t, i.triggerRef),
        onPointerDown: K(e.onPointerDown, (a) => {
          !r &&
            a.button === 0 &&
            a.ctrlKey === !1 &&
            (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: K(e.onKeyDown, (a) => {
          r ||
            (["Enter", " "].includes(a.key) && i.onOpenToggle(),
            a.key === "ArrowDown" && i.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        }),
      }),
    });
  });
nx.displayName = tx;
var oA = "DropdownMenuPortal",
  rx = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = $e(t);
    return C.jsx($R, { ...r, ...n });
  };
rx.displayName = oA;
var ox = "DropdownMenuContent",
  ix = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Jw(ox, n),
      i = $e(n),
      s = g.useRef(!1);
    return C.jsx(WR, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...i,
      ...r,
      ref: t,
      onCloseAutoFocus: K(e.onCloseAutoFocus, (a) => {
        var l;
        s.current || (l = o.triggerRef.current) == null || l.focus(),
          (s.current = !1),
          a.preventDefault();
      }),
      onInteractOutside: K(e.onInteractOutside, (a) => {
        const l = a.detail.originalEvent,
          u = l.button === 0 && l.ctrlKey === !0,
          c = l.button === 2 || u;
        (!o.modal || c) && (s.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
ix.displayName = ox;
var iA = "DropdownMenuGroup",
  sA = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(HR, { ...o, ...r, ref: t });
  });
sA.displayName = iA;
var aA = "DropdownMenuLabel",
  sx = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(GR, { ...o, ...r, ref: t });
  });
sx.displayName = aA;
var lA = "DropdownMenuItem",
  ax = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(KR, { ...o, ...r, ref: t });
  });
ax.displayName = lA;
var uA = "DropdownMenuCheckboxItem",
  lx = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(YR, { ...o, ...r, ref: t });
  });
lx.displayName = uA;
var cA = "DropdownMenuRadioGroup",
  fA = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(ZR, { ...o, ...r, ref: t });
  });
fA.displayName = cA;
var dA = "DropdownMenuRadioItem",
  ux = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(qR, { ...o, ...r, ref: t });
  });
ux.displayName = dA;
var hA = "DropdownMenuItemIndicator",
  cx = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(QR, { ...o, ...r, ref: t });
  });
cx.displayName = hA;
var mA = "DropdownMenuSeparator",
  fx = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(XR, { ...o, ...r, ref: t });
  });
fx.displayName = mA;
var pA = "DropdownMenuArrow",
  gA = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(JR, { ...o, ...r, ref: t });
  });
gA.displayName = pA;
var yA = "DropdownMenuSubTrigger",
  dx = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(eA, { ...o, ...r, ref: t });
  });
dx.displayName = yA;
var vA = "DropdownMenuSubContent",
  hx = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = $e(n);
    return C.jsx(tA, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
hx.displayName = vA;
var wA = ex,
  xA = nx,
  SA = rx,
  mx = ix,
  px = sx,
  gx = ax,
  yx = lx,
  vx = ux,
  wx = cx,
  xx = fx,
  Sx = dx,
  Cx = hx;
const CA = wA,
  EA = xA,
  TA = g.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
    C.jsxs(Sx, {
      ref: o,
      className: Lt(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t && "pl-8",
        e,
      ),
      ...r,
      children: [n, C.jsx(Fk, { className: "ml-auto h-4 w-4" })],
    }),
  );
TA.displayName = Sx.displayName;
const kA = g.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(Cx, {
    ref: n,
    className: Lt(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e,
    ),
    ...t,
  }),
);
kA.displayName = Cx.displayName;
const Ex = g.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  C.jsx(SA, {
    children: C.jsx(mx, {
      ref: r,
      sideOffset: t,
      className: Lt(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  }),
);
Ex.displayName = mx.displayName;
const fa = g.forwardRef(({ className: e, inset: t, ...n }, r) =>
  C.jsx(gx, {
    ref: r,
    className: Lt(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e,
    ),
    ...n,
  }),
);
fa.displayName = gx.displayName;
const PA = g.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  C.jsxs(yx, {
    ref: o,
    className: Lt(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    checked: n,
    ...r,
    children: [
      C.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: C.jsx(wx, { children: C.jsx(Lk, { className: "h-4 w-4" }) }),
      }),
      t,
    ],
  }),
);
PA.displayName = yx.displayName;
const MA = g.forwardRef(({ className: e, children: t, ...n }, r) =>
  C.jsxs(vx, {
    ref: r,
    className: Lt(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...n,
    children: [
      C.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: C.jsx(wx, {
          children: C.jsx(_k, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      t,
    ],
  }),
);
MA.displayName = vx.displayName;
const NA = g.forwardRef(({ className: e, inset: t, ...n }, r) =>
  C.jsx(px, {
    ref: r,
    className: Lt("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n,
  }),
);
NA.displayName = px.displayName;
const RA = g.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(xx, { ref: n, className: Lt("-mx-1 my-1 h-px bg-muted", e), ...t }),
);
RA.displayName = xx.displayName;
const AA = { theme: "system", setTheme: () => null },
  Tx = g.createContext(AA);
function OA({
  children: e,
  defaultTheme: t = "system",
  storageKey: n = "vite-ui-theme",
  ...r
}) {
  const [o, i] = g.useState(() => localStorage.getItem(n) || t);
  g.useEffect(() => {
    const a = window.document.documentElement;
    if ((a.classList.remove("light", "dark"), o === "system")) {
      const l = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      a.classList.add(l);
      return;
    }
    a.classList.add(o);
  }, [o]);
  const s = {
    theme: o,
    setTheme: (a) => {
      localStorage.setItem(n, a), i(a);
    },
  };
  return C.jsx(Tx.Provider, { ...r, value: s, children: e });
}
const bA = () => {
  const e = g.useContext(Tx);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
};
function DA() {
  const { setTheme: e } = bA();
  return C.jsxs(CA, {
    children: [
      C.jsx(EA, {
        asChild: !0,
        children: C.jsxs(Ed, {
          variant: "outline",
          size: "sm",
          className: "rounded-full px-[9px]",
          children: [
            C.jsx(zk, {
              className:
                "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
            }),
            C.jsx(Vk, {
              className:
                "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
            }),
            C.jsx("span", { className: "sr-only", children: "Toggle theme" }),
          ],
        }),
      }),
      C.jsxs(Ex, {
        align: "end",
        children: [
          C.jsx(fa, { onClick: () => e("light"), children: "Light" }),
          C.jsx(fa, { onClick: () => e("dark"), children: "Dark" }),
          C.jsx(fa, { onClick: () => e("system"), children: "System" }),
        ],
      }),
    ],
  });
}
class Ar extends Error {}
class IA extends Ar {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class LA extends Ar {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class FA extends Ar {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class Qr extends Ar {}
class kx extends Ar {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class Ae extends Ar {}
class vn extends Ar {
  constructor() {
    super("Zone is an abstract class");
  }
}
const O = "numeric",
  It = "short",
  rt = "long",
  Qa = { year: O, month: O, day: O },
  Px = { year: O, month: It, day: O },
  _A = { year: O, month: It, day: O, weekday: It },
  Mx = { year: O, month: rt, day: O },
  Nx = { year: O, month: rt, day: O, weekday: rt },
  Rx = { hour: O, minute: O },
  Ax = { hour: O, minute: O, second: O },
  Ox = { hour: O, minute: O, second: O, timeZoneName: It },
  bx = { hour: O, minute: O, second: O, timeZoneName: rt },
  Dx = { hour: O, minute: O, hourCycle: "h23" },
  Ix = { hour: O, minute: O, second: O, hourCycle: "h23" },
  Lx = { hour: O, minute: O, second: O, hourCycle: "h23", timeZoneName: It },
  Fx = { hour: O, minute: O, second: O, hourCycle: "h23", timeZoneName: rt },
  _x = { year: O, month: O, day: O, hour: O, minute: O },
  Vx = { year: O, month: O, day: O, hour: O, minute: O, second: O },
  jx = { year: O, month: It, day: O, hour: O, minute: O },
  zx = { year: O, month: It, day: O, hour: O, minute: O, second: O },
  VA = { year: O, month: It, day: O, weekday: It, hour: O, minute: O },
  Ux = { year: O, month: rt, day: O, hour: O, minute: O, timeZoneName: It },
  Bx = {
    year: O,
    month: rt,
    day: O,
    hour: O,
    minute: O,
    second: O,
    timeZoneName: It,
  },
  $x = {
    year: O,
    month: rt,
    day: O,
    weekday: rt,
    hour: O,
    minute: O,
    timeZoneName: rt,
  },
  Wx = {
    year: O,
    month: rt,
    day: O,
    weekday: rt,
    hour: O,
    minute: O,
    second: O,
    timeZoneName: rt,
  };
class cs {
  get type() {
    throw new vn();
  }
  get name() {
    throw new vn();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new vn();
  }
  offsetName(t, n) {
    throw new vn();
  }
  formatOffset(t, n) {
    throw new vn();
  }
  offset(t) {
    throw new vn();
  }
  equals(t) {
    throw new vn();
  }
  get isValid() {
    throw new vn();
  }
}
let Ru = null;
class Il extends cs {
  static get instance() {
    return Ru === null && (Ru = new Il()), Ru;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: n, locale: r }) {
    return Jx(t, n, r);
  }
  formatOffset(t, n) {
    return xi(this.offset(t), n);
  }
  offset(t) {
    return -new Date(t).getTimezoneOffset();
  }
  equals(t) {
    return t.type === "system";
  }
  get isValid() {
    return !0;
  }
}
let da = {};
function jA(e) {
  return (
    da[e] ||
      (da[e] = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: e,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short",
      })),
    da[e]
  );
}
const zA = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
function UA(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""),
    r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),
    [, o, i, s, a, l, u, c] = r;
  return [s, o, i, a, l, u, c];
}
function BA(e, t) {
  const n = e.formatToParts(t),
    r = [];
  for (let o = 0; o < n.length; o++) {
    const { type: i, value: s } = n[o],
      a = zA[i];
    i === "era" ? (r[a] = s) : z(a) || (r[a] = parseInt(s, 10));
  }
  return r;
}
let Us = {};
class dn extends cs {
  static create(t) {
    return Us[t] || (Us[t] = new dn(t)), Us[t];
  }
  static resetCache() {
    (Us = {}), (da = {});
  }
  static isValidSpecifier(t) {
    return this.isValidZone(t);
  }
  static isValidZone(t) {
    if (!t) return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(t) {
    super(), (this.zoneName = t), (this.valid = dn.isValidZone(t));
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: n, locale: r }) {
    return Jx(t, n, r, this.name);
  }
  formatOffset(t, n) {
    return xi(this.offset(t), n);
  }
  offset(t) {
    const n = new Date(t);
    if (isNaN(n)) return NaN;
    const r = jA(this.name);
    let [o, i, s, a, l, u, c] = r.formatToParts ? BA(r, n) : UA(r, n);
    a === "BC" && (o = -Math.abs(o) + 1);
    const d = Fl({
      year: o,
      month: i,
      day: s,
      hour: l === 24 ? 0 : l,
      minute: u,
      second: c,
      millisecond: 0,
    });
    let h = +n;
    const y = h % 1e3;
    return (h -= y >= 0 ? y : 1e3 + y), (d - h) / (60 * 1e3);
  }
  equals(t) {
    return t.type === "iana" && t.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let pp = {};
function $A(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let r = pp[n];
  return r || ((r = new Intl.ListFormat(e, t)), (pp[n] = r)), r;
}
let rf = {};
function of(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let r = rf[n];
  return r || ((r = new Intl.DateTimeFormat(e, t)), (rf[n] = r)), r;
}
let sf = {};
function WA(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let r = sf[n];
  return r || ((r = new Intl.NumberFormat(e, t)), (sf[n] = r)), r;
}
let af = {};
function HA(e, t = {}) {
  const { base: n, ...r } = t,
    o = JSON.stringify([e, r]);
  let i = af[o];
  return i || ((i = new Intl.RelativeTimeFormat(e, t)), (af[o] = i)), i;
}
let ai = null;
function GA() {
  return ai || ((ai = new Intl.DateTimeFormat().resolvedOptions().locale), ai);
}
let gp = {};
function KA(e) {
  let t = gp[e];
  if (!t) {
    const n = new Intl.Locale(e);
    (t = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo), (gp[e] = t);
  }
  return t;
}
function YA(e) {
  const t = e.indexOf("-x-");
  t !== -1 && (e = e.substring(0, t));
  const n = e.indexOf("-u-");
  if (n === -1) return [e];
  {
    let r, o;
    try {
      (r = of(e).resolvedOptions()), (o = e);
    } catch {
      const l = e.substring(0, n);
      (r = of(l).resolvedOptions()), (o = l);
    }
    const { numberingSystem: i, calendar: s } = r;
    return [o, i, s];
  }
}
function ZA(e, t, n) {
  return (
    (n || t) &&
      (e.includes("-u-") || (e += "-u"),
      n && (e += `-ca-${n}`),
      t && (e += `-nu-${t}`)),
    e
  );
}
function qA(e) {
  const t = [];
  for (let n = 1; n <= 12; n++) {
    const r = _.utc(2009, n, 1);
    t.push(e(r));
  }
  return t;
}
function QA(e) {
  const t = [];
  for (let n = 1; n <= 7; n++) {
    const r = _.utc(2016, 11, 13 + n);
    t.push(e(r));
  }
  return t;
}
function Bs(e, t, n, r) {
  const o = e.listingMode();
  return o === "error" ? null : o === "en" ? n(t) : r(t);
}
function XA(e) {
  return e.numberingSystem && e.numberingSystem !== "latn"
    ? !1
    : e.numberingSystem === "latn" ||
        !e.locale ||
        e.locale.startsWith("en") ||
        new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem ===
          "latn";
}
class JA {
  constructor(t, n, r) {
    (this.padTo = r.padTo || 0), (this.floor = r.floor || !1);
    const { padTo: o, floor: i, ...s } = r;
    if (!n || Object.keys(s).length > 0) {
      const a = { useGrouping: !1, ...r };
      r.padTo > 0 && (a.minimumIntegerDigits = r.padTo), (this.inf = WA(t, a));
    }
  }
  format(t) {
    if (this.inf) {
      const n = this.floor ? Math.floor(t) : t;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(t) : Wd(t, 3);
      return ge(n, this.padTo);
    }
  }
}
class eO {
  constructor(t, n, r) {
    (this.opts = r), (this.originalZone = void 0);
    let o;
    if (this.opts.timeZone) this.dt = t;
    else if (t.zone.type === "fixed") {
      const s = -1 * (t.offset / 60),
        a = s >= 0 ? `Etc/GMT+${s}` : `Etc/GMT${s}`;
      t.offset !== 0 && dn.create(a).valid
        ? ((o = a), (this.dt = t))
        : ((o = "UTC"),
          (this.dt =
            t.offset === 0 ? t : t.setZone("UTC").plus({ minutes: t.offset })),
          (this.originalZone = t.zone));
    } else
      t.zone.type === "system"
        ? (this.dt = t)
        : t.zone.type === "iana"
          ? ((this.dt = t), (o = t.zone.name))
          : ((o = "UTC"),
            (this.dt = t.setZone("UTC").plus({ minutes: t.offset })),
            (this.originalZone = t.zone));
    const i = { ...this.opts };
    (i.timeZone = i.timeZone || o), (this.dtf = of(n, i));
  }
  format() {
    return this.originalZone
      ? this.formatToParts()
          .map(({ value: t }) => t)
          .join("")
      : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const t = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone
      ? t.map((n) => {
          if (n.type === "timeZoneName") {
            const r = this.originalZone.offsetName(this.dt.ts, {
              locale: this.dt.locale,
              format: this.opts.timeZoneName,
            });
            return { ...n, value: r };
          } else return n;
        })
      : t;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class tO {
  constructor(t, n, r) {
    (this.opts = { style: "long", ...r }), !n && Qx() && (this.rtf = HA(t, r));
  }
  format(t, n) {
    return this.rtf
      ? this.rtf.format(t, n)
      : TO(n, t, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(t, n) {
    return this.rtf ? this.rtf.formatToParts(t, n) : [];
  }
}
const nO = { firstDay: 1, minimalDays: 4, weekend: [6, 7] };
class Q {
  static fromOpts(t) {
    return Q.create(
      t.locale,
      t.numberingSystem,
      t.outputCalendar,
      t.weekSettings,
      t.defaultToEN,
    );
  }
  static create(t, n, r, o, i = !1) {
    const s = t || de.defaultLocale,
      a = s || (i ? "en-US" : GA()),
      l = n || de.defaultNumberingSystem,
      u = r || de.defaultOutputCalendar,
      c = lf(o) || de.defaultWeekSettings;
    return new Q(a, l, u, c, s);
  }
  static resetCache() {
    (ai = null), (rf = {}), (sf = {}), (af = {});
  }
  static fromObject({
    locale: t,
    numberingSystem: n,
    outputCalendar: r,
    weekSettings: o,
  } = {}) {
    return Q.create(t, n, r, o);
  }
  constructor(t, n, r, o, i) {
    const [s, a, l] = YA(t);
    (this.locale = s),
      (this.numberingSystem = n || a || null),
      (this.outputCalendar = r || l || null),
      (this.weekSettings = o),
      (this.intl = ZA(this.locale, this.numberingSystem, this.outputCalendar)),
      (this.weekdaysCache = { format: {}, standalone: {} }),
      (this.monthsCache = { format: {}, standalone: {} }),
      (this.meridiemCache = null),
      (this.eraCache = {}),
      (this.specifiedLocale = i),
      (this.fastNumbersCached = null);
  }
  get fastNumbers() {
    return (
      this.fastNumbersCached == null && (this.fastNumbersCached = XA(this)),
      this.fastNumbersCached
    );
  }
  listingMode() {
    const t = this.isEnglish(),
      n =
        (this.numberingSystem === null || this.numberingSystem === "latn") &&
        (this.outputCalendar === null || this.outputCalendar === "gregory");
    return t && n ? "en" : "intl";
  }
  clone(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0
      ? this
      : Q.create(
          t.locale || this.specifiedLocale,
          t.numberingSystem || this.numberingSystem,
          t.outputCalendar || this.outputCalendar,
          lf(t.weekSettings) || this.weekSettings,
          t.defaultToEN || !1,
        );
  }
  redefaultToEN(t = {}) {
    return this.clone({ ...t, defaultToEN: !0 });
  }
  redefaultToSystem(t = {}) {
    return this.clone({ ...t, defaultToEN: !1 });
  }
  months(t, n = !1) {
    return Bs(this, t, n1, () => {
      const r = n ? { month: t, day: "numeric" } : { month: t },
        o = n ? "format" : "standalone";
      return (
        this.monthsCache[o][t] ||
          (this.monthsCache[o][t] = qA((i) => this.extract(i, r, "month"))),
        this.monthsCache[o][t]
      );
    });
  }
  weekdays(t, n = !1) {
    return Bs(this, t, i1, () => {
      const r = n
          ? { weekday: t, year: "numeric", month: "long", day: "numeric" }
          : { weekday: t },
        o = n ? "format" : "standalone";
      return (
        this.weekdaysCache[o][t] ||
          (this.weekdaysCache[o][t] = QA((i) => this.extract(i, r, "weekday"))),
        this.weekdaysCache[o][t]
      );
    });
  }
  meridiems() {
    return Bs(
      this,
      void 0,
      () => s1,
      () => {
        if (!this.meridiemCache) {
          const t = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [
            _.utc(2016, 11, 13, 9),
            _.utc(2016, 11, 13, 19),
          ].map((n) => this.extract(n, t, "dayperiod"));
        }
        return this.meridiemCache;
      },
    );
  }
  eras(t) {
    return Bs(this, t, a1, () => {
      const n = { era: t };
      return (
        this.eraCache[t] ||
          (this.eraCache[t] = [_.utc(-40, 1, 1), _.utc(2017, 1, 1)].map((r) =>
            this.extract(r, n, "era"),
          )),
        this.eraCache[t]
      );
    });
  }
  extract(t, n, r) {
    const o = this.dtFormatter(t, n),
      i = o.formatToParts(),
      s = i.find((a) => a.type.toLowerCase() === r);
    return s ? s.value : null;
  }
  numberFormatter(t = {}) {
    return new JA(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, n = {}) {
    return new eO(t, this.intl, n);
  }
  relFormatter(t = {}) {
    return new tO(this.intl, this.isEnglish(), t);
  }
  listFormatter(t = {}) {
    return $A(this.intl, t);
  }
  isEnglish() {
    return (
      this.locale === "en" ||
      this.locale.toLowerCase() === "en-us" ||
      new Intl.DateTimeFormat(this.intl)
        .resolvedOptions()
        .locale.startsWith("en-us")
    );
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : Xx() ? KA(this.locale) : nO;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(t) {
    return (
      this.locale === t.locale &&
      this.numberingSystem === t.numberingSystem &&
      this.outputCalendar === t.outputCalendar
    );
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}
let Au = null;
class Ve extends cs {
  static get utcInstance() {
    return Au === null && (Au = new Ve(0)), Au;
  }
  static instance(t) {
    return t === 0 ? Ve.utcInstance : new Ve(t);
  }
  static parseSpecifier(t) {
    if (t) {
      const n = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n) return new Ve(_l(n[1], n[2]));
    }
    return null;
  }
  constructor(t) {
    super(), (this.fixed = t);
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${xi(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${xi(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(t, n) {
    return xi(this.fixed, n);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(t) {
    return t.type === "fixed" && t.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class rO extends cs {
  constructor(t) {
    super(), (this.zoneName = t);
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function Nn(e, t) {
  if (z(e) || e === null) return t;
  if (e instanceof cs) return e;
  if (uO(e)) {
    const n = e.toLowerCase();
    return n === "default"
      ? t
      : n === "local" || n === "system"
        ? Il.instance
        : n === "utc" || n === "gmt"
          ? Ve.utcInstance
          : Ve.parseSpecifier(n) || dn.create(e);
  } else
    return Un(e)
      ? Ve.instance(e)
      : typeof e == "object" && "offset" in e && typeof e.offset == "function"
        ? e
        : new rO(e);
}
const zd = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
    latn: "\\d",
  },
  yp = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881],
  },
  oO = zd.hanidec.replace(/[\[|\]]/g, "").split("");
function iO(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = "";
    for (let n = 0; n < e.length; n++) {
      const r = e.charCodeAt(n);
      if (e[n].search(zd.hanidec) !== -1) t += oO.indexOf(e[n]);
      else
        for (const o in yp) {
          const [i, s] = yp[o];
          r >= i && r <= s && (t += r - i);
        }
    }
    return parseInt(t, 10);
  } else return t;
}
let Vr = {};
function sO() {
  Vr = {};
}
function Ct({ numberingSystem: e }, t = "") {
  const n = e || "latn";
  return (
    Vr[n] || (Vr[n] = {}),
    Vr[n][t] || (Vr[n][t] = new RegExp(`${zd[n]}${t}`)),
    Vr[n][t]
  );
}
let vp = () => Date.now(),
  wp = "system",
  xp = null,
  Sp = null,
  Cp = null,
  Ep = 60,
  Tp,
  kp = null;
class de {
  static get now() {
    return vp;
  }
  static set now(t) {
    vp = t;
  }
  static set defaultZone(t) {
    wp = t;
  }
  static get defaultZone() {
    return Nn(wp, Il.instance);
  }
  static get defaultLocale() {
    return xp;
  }
  static set defaultLocale(t) {
    xp = t;
  }
  static get defaultNumberingSystem() {
    return Sp;
  }
  static set defaultNumberingSystem(t) {
    Sp = t;
  }
  static get defaultOutputCalendar() {
    return Cp;
  }
  static set defaultOutputCalendar(t) {
    Cp = t;
  }
  static get defaultWeekSettings() {
    return kp;
  }
  static set defaultWeekSettings(t) {
    kp = lf(t);
  }
  static get twoDigitCutoffYear() {
    return Ep;
  }
  static set twoDigitCutoffYear(t) {
    Ep = t % 100;
  }
  static get throwOnInvalid() {
    return Tp;
  }
  static set throwOnInvalid(t) {
    Tp = t;
  }
  static resetCaches() {
    Q.resetCache(), dn.resetCache(), _.resetCache(), sO();
  }
}
class Mt {
  constructor(t, n) {
    (this.reason = t), (this.explanation = n);
  }
  toMessage() {
    return this.explanation
      ? `${this.reason}: ${this.explanation}`
      : this.reason;
  }
}
const Hx = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  Gx = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function pt(e, t) {
  return new Mt(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`,
  );
}
function Ud(e, t, n) {
  const r = new Date(Date.UTC(e, t - 1, n));
  e < 100 && e >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const o = r.getUTCDay();
  return o === 0 ? 7 : o;
}
function Kx(e, t, n) {
  return n + (fs(e) ? Gx : Hx)[t - 1];
}
function Yx(e, t) {
  const n = fs(e) ? Gx : Hx,
    r = n.findIndex((i) => i < t),
    o = t - n[r];
  return { month: r + 1, day: o };
}
function Bd(e, t) {
  return ((e - t + 7) % 7) + 1;
}
function Xa(e, t = 4, n = 1) {
  const { year: r, month: o, day: i } = e,
    s = Kx(r, o, i),
    a = Bd(Ud(r, o, i), n);
  let l = Math.floor((s - a + 14 - t) / 7),
    u;
  return (
    l < 1
      ? ((u = r - 1), (l = Ki(u, t, n)))
      : l > Ki(r, t, n)
        ? ((u = r + 1), (l = 1))
        : (u = r),
    { weekYear: u, weekNumber: l, weekday: a, ...Vl(e) }
  );
}
function Pp(e, t = 4, n = 1) {
  const { weekYear: r, weekNumber: o, weekday: i } = e,
    s = Bd(Ud(r, 1, t), n),
    a = ho(r);
  let l = o * 7 + i - s - 7 + t,
    u;
  l < 1
    ? ((u = r - 1), (l += ho(u)))
    : l > a
      ? ((u = r + 1), (l -= ho(r)))
      : (u = r);
  const { month: c, day: f } = Yx(u, l);
  return { year: u, month: c, day: f, ...Vl(e) };
}
function Ou(e) {
  const { year: t, month: n, day: r } = e,
    o = Kx(t, n, r);
  return { year: t, ordinal: o, ...Vl(e) };
}
function Mp(e) {
  const { year: t, ordinal: n } = e,
    { month: r, day: o } = Yx(t, n);
  return { year: t, month: r, day: o, ...Vl(e) };
}
function Np(e, t) {
  if (!z(e.localWeekday) || !z(e.localWeekNumber) || !z(e.localWeekYear)) {
    if (!z(e.weekday) || !z(e.weekNumber) || !z(e.weekYear))
      throw new Qr(
        "Cannot mix locale-based week fields with ISO-based week fields",
      );
    return (
      z(e.localWeekday) || (e.weekday = e.localWeekday),
      z(e.localWeekNumber) || (e.weekNumber = e.localWeekNumber),
      z(e.localWeekYear) || (e.weekYear = e.localWeekYear),
      delete e.localWeekday,
      delete e.localWeekNumber,
      delete e.localWeekYear,
      {
        minDaysInFirstWeek: t.getMinDaysInFirstWeek(),
        startOfWeek: t.getStartOfWeek(),
      }
    );
  } else return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function aO(e, t = 4, n = 1) {
  const r = Ll(e.weekYear),
    o = gt(e.weekNumber, 1, Ki(e.weekYear, t, n)),
    i = gt(e.weekday, 1, 7);
  return r
    ? o
      ? i
        ? !1
        : pt("weekday", e.weekday)
      : pt("week", e.weekNumber)
    : pt("weekYear", e.weekYear);
}
function lO(e) {
  const t = Ll(e.year),
    n = gt(e.ordinal, 1, ho(e.year));
  return t ? (n ? !1 : pt("ordinal", e.ordinal)) : pt("year", e.year);
}
function Zx(e) {
  const t = Ll(e.year),
    n = gt(e.month, 1, 12),
    r = gt(e.day, 1, Ja(e.year, e.month));
  return t
    ? n
      ? r
        ? !1
        : pt("day", e.day)
      : pt("month", e.month)
    : pt("year", e.year);
}
function qx(e) {
  const { hour: t, minute: n, second: r, millisecond: o } = e,
    i = gt(t, 0, 23) || (t === 24 && n === 0 && r === 0 && o === 0),
    s = gt(n, 0, 59),
    a = gt(r, 0, 59),
    l = gt(o, 0, 999);
  return i
    ? s
      ? a
        ? l
          ? !1
          : pt("millisecond", o)
        : pt("second", r)
      : pt("minute", n)
    : pt("hour", t);
}
function z(e) {
  return typeof e > "u";
}
function Un(e) {
  return typeof e == "number";
}
function Ll(e) {
  return typeof e == "number" && e % 1 === 0;
}
function uO(e) {
  return typeof e == "string";
}
function cO(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Qx() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Xx() {
  try {
    return (
      typeof Intl < "u" &&
      !!Intl.Locale &&
      ("weekInfo" in Intl.Locale.prototype ||
        "getWeekInfo" in Intl.Locale.prototype)
    );
  } catch {
    return !1;
  }
}
function fO(e) {
  return Array.isArray(e) ? e : [e];
}
function Rp(e, t, n) {
  if (e.length !== 0)
    return e.reduce((r, o) => {
      const i = [t(o), o];
      return r && n(r[0], i[0]) === r[0] ? r : i;
    }, null)[1];
}
function dO(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function To(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function lf(e) {
  if (e == null) return null;
  if (typeof e != "object") throw new Ae("Week settings must be an object");
  if (
    !gt(e.firstDay, 1, 7) ||
    !gt(e.minimalDays, 1, 7) ||
    !Array.isArray(e.weekend) ||
    e.weekend.some((t) => !gt(t, 1, 7))
  )
    throw new Ae("Invalid week settings");
  return {
    firstDay: e.firstDay,
    minimalDays: e.minimalDays,
    weekend: Array.from(e.weekend),
  };
}
function gt(e, t, n) {
  return Ll(e) && e >= t && e <= n;
}
function hO(e, t) {
  return e - t * Math.floor(e / t);
}
function ge(e, t = 2) {
  const n = e < 0;
  let r;
  return (
    n
      ? (r = "-" + ("" + -e).padStart(t, "0"))
      : (r = ("" + e).padStart(t, "0")),
    r
  );
}
function kn(e) {
  if (!(z(e) || e === null || e === "")) return parseInt(e, 10);
}
function nr(e) {
  if (!(z(e) || e === null || e === "")) return parseFloat(e);
}
function $d(e) {
  if (!(z(e) || e === null || e === "")) {
    const t = parseFloat("0." + e) * 1e3;
    return Math.floor(t);
  }
}
function Wd(e, t, n = !1) {
  const r = 10 ** t;
  return (n ? Math.trunc : Math.round)(e * r) / r;
}
function fs(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function ho(e) {
  return fs(e) ? 366 : 365;
}
function Ja(e, t) {
  const n = hO(t - 1, 12) + 1,
    r = e + (t - n) / 12;
  return n === 2
    ? fs(r)
      ? 29
      : 28
    : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Fl(e) {
  let t = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond,
  );
  return (
    e.year < 100 &&
      e.year >= 0 &&
      ((t = new Date(t)), t.setUTCFullYear(e.year, e.month - 1, e.day)),
    +t
  );
}
function Ap(e, t, n) {
  return -Bd(Ud(e, 1, t), n) + t - 1;
}
function Ki(e, t = 4, n = 1) {
  const r = Ap(e, t, n),
    o = Ap(e + 1, t, n);
  return (ho(e) - r + o) / 7;
}
function uf(e) {
  return e > 99 ? e : e > de.twoDigitCutoffYear ? 1900 + e : 2e3 + e;
}
function Jx(e, t, n, r = null) {
  const o = new Date(e),
    i = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
  r && (i.timeZone = r);
  const s = { timeZoneName: t, ...i },
    a = new Intl.DateTimeFormat(n, s)
      .formatToParts(o)
      .find((l) => l.type.toLowerCase() === "timezonename");
  return a ? a.value : null;
}
function _l(e, t) {
  let n = parseInt(e, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(t, 10) || 0,
    o = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + o;
}
function e1(e) {
  const t = Number(e);
  if (typeof e == "boolean" || e === "" || Number.isNaN(t))
    throw new Ae(`Invalid unit value ${e}`);
  return t;
}
function el(e, t) {
  const n = {};
  for (const r in e)
    if (To(e, r)) {
      const o = e[r];
      if (o == null) continue;
      n[t(r)] = e1(o);
    }
  return n;
}
function xi(e, t) {
  const n = Math.trunc(Math.abs(e / 60)),
    r = Math.trunc(Math.abs(e % 60)),
    o = e >= 0 ? "+" : "-";
  switch (t) {
    case "short":
      return `${o}${ge(n, 2)}:${ge(r, 2)}`;
    case "narrow":
      return `${o}${n}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${o}${ge(n, 2)}${ge(r, 2)}`;
    default:
      throw new RangeError(
        `Value format ${t} is out of range for property format`,
      );
  }
}
function Vl(e) {
  return dO(e, ["hour", "minute", "second", "millisecond"]);
}
const mO = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  t1 = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  pO = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function n1(e) {
  switch (e) {
    case "narrow":
      return [...pO];
    case "short":
      return [...t1];
    case "long":
      return [...mO];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];
    default:
      return null;
  }
}
const r1 = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  o1 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  gO = ["M", "T", "W", "T", "F", "S", "S"];
function i1(e) {
  switch (e) {
    case "narrow":
      return [...gO];
    case "short":
      return [...o1];
    case "long":
      return [...r1];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const s1 = ["AM", "PM"],
  yO = ["Before Christ", "Anno Domini"],
  vO = ["BC", "AD"],
  wO = ["B", "A"];
function a1(e) {
  switch (e) {
    case "narrow":
      return [...wO];
    case "short":
      return [...vO];
    case "long":
      return [...yO];
    default:
      return null;
  }
}
function xO(e) {
  return s1[e.hour < 12 ? 0 : 1];
}
function SO(e, t) {
  return i1(t)[e.weekday - 1];
}
function CO(e, t) {
  return n1(t)[e.month - 1];
}
function EO(e, t) {
  return a1(t)[e.year < 0 ? 0 : 1];
}
function TO(e, t, n = "always", r = !1) {
  const o = {
      years: ["year", "yr."],
      quarters: ["quarter", "qtr."],
      months: ["month", "mo."],
      weeks: ["week", "wk."],
      days: ["day", "day", "days"],
      hours: ["hour", "hr."],
      minutes: ["minute", "min."],
      seconds: ["second", "sec."],
    },
    i = ["hours", "minutes", "seconds"].indexOf(e) === -1;
  if (n === "auto" && i) {
    const f = e === "days";
    switch (t) {
      case 1:
        return f ? "tomorrow" : `next ${o[e][0]}`;
      case -1:
        return f ? "yesterday" : `last ${o[e][0]}`;
      case 0:
        return f ? "today" : `this ${o[e][0]}`;
    }
  }
  const s = Object.is(t, -0) || t < 0,
    a = Math.abs(t),
    l = a === 1,
    u = o[e],
    c = r ? (l ? u[1] : u[2] || u[1]) : l ? o[e][0] : e;
  return s ? `${a} ${c} ago` : `in ${a} ${c}`;
}
function Op(e, t) {
  let n = "";
  for (const r of e) r.literal ? (n += r.val) : (n += t(r.val));
  return n;
}
const kO = {
  D: Qa,
  DD: Px,
  DDD: Mx,
  DDDD: Nx,
  t: Rx,
  tt: Ax,
  ttt: Ox,
  tttt: bx,
  T: Dx,
  TT: Ix,
  TTT: Lx,
  TTTT: Fx,
  f: _x,
  ff: jx,
  fff: Ux,
  ffff: $x,
  F: Vx,
  FF: zx,
  FFF: Bx,
  FFFF: Wx,
};
class be {
  static create(t, n = {}) {
    return new be(t, n);
  }
  static parseFormat(t) {
    let n = null,
      r = "",
      o = !1;
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const a = t.charAt(s);
      a === "'"
        ? (r.length > 0 && i.push({ literal: o || /^\s+$/.test(r), val: r }),
          (n = null),
          (r = ""),
          (o = !o))
        : o || a === n
          ? (r += a)
          : (r.length > 0 && i.push({ literal: /^\s+$/.test(r), val: r }),
            (r = a),
            (n = a));
    }
    return r.length > 0 && i.push({ literal: o || /^\s+$/.test(r), val: r }), i;
  }
  static macroTokenToFormatOpts(t) {
    return kO[t];
  }
  constructor(t, n) {
    (this.opts = n), (this.loc = t), (this.systemLoc = null);
  }
  formatWithSystemDefault(t, n) {
    return (
      this.systemLoc === null &&
        (this.systemLoc = this.loc.redefaultToSystem()),
      this.systemLoc.dtFormatter(t, { ...this.opts, ...n }).format()
    );
  }
  dtFormatter(t, n = {}) {
    return this.loc.dtFormatter(t, { ...this.opts, ...n });
  }
  formatDateTime(t, n) {
    return this.dtFormatter(t, n).format();
  }
  formatDateTimeParts(t, n) {
    return this.dtFormatter(t, n).formatToParts();
  }
  formatInterval(t, n) {
    return this.dtFormatter(t.start, n).dtf.formatRange(
      t.start.toJSDate(),
      t.end.toJSDate(),
    );
  }
  resolvedOptions(t, n) {
    return this.dtFormatter(t, n).resolvedOptions();
  }
  num(t, n = 0) {
    if (this.opts.forceSimple) return ge(t, n);
    const r = { ...this.opts };
    return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(t);
  }
  formatDateTimeFromString(t, n) {
    const r = this.loc.listingMode() === "en",
      o = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
      i = (h, y) => this.loc.extract(t, h, y),
      s = (h) =>
        t.isOffsetFixed && t.offset === 0 && h.allowZ
          ? "Z"
          : t.isValid
            ? t.zone.formatOffset(t.ts, h.format)
            : "",
      a = () =>
        r ? xO(t) : i({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      l = (h, y) =>
        r
          ? CO(t, h)
          : i(y ? { month: h } : { month: h, day: "numeric" }, "month"),
      u = (h, y) =>
        r
          ? SO(t, h)
          : i(
              y
                ? { weekday: h }
                : { weekday: h, month: "long", day: "numeric" },
              "weekday",
            ),
      c = (h) => {
        const y = be.macroTokenToFormatOpts(h);
        return y ? this.formatWithSystemDefault(t, y) : h;
      },
      f = (h) => (r ? EO(t, h) : i({ era: h }, "era")),
      d = (h) => {
        switch (h) {
          case "S":
            return this.num(t.millisecond);
          case "u":
          case "SSS":
            return this.num(t.millisecond, 3);
          case "s":
            return this.num(t.second);
          case "ss":
            return this.num(t.second, 2);
          case "uu":
            return this.num(Math.floor(t.millisecond / 10), 2);
          case "uuu":
            return this.num(Math.floor(t.millisecond / 100));
          case "m":
            return this.num(t.minute);
          case "mm":
            return this.num(t.minute, 2);
          case "h":
            return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
          case "hh":
            return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
          case "H":
            return this.num(t.hour);
          case "HH":
            return this.num(t.hour, 2);
          case "Z":
            return s({ format: "narrow", allowZ: this.opts.allowZ });
          case "ZZ":
            return s({ format: "short", allowZ: this.opts.allowZ });
          case "ZZZ":
            return s({ format: "techie", allowZ: this.opts.allowZ });
          case "ZZZZ":
            return t.zone.offsetName(t.ts, {
              format: "short",
              locale: this.loc.locale,
            });
          case "ZZZZZ":
            return t.zone.offsetName(t.ts, {
              format: "long",
              locale: this.loc.locale,
            });
          case "z":
            return t.zoneName;
          case "a":
            return a();
          case "d":
            return o ? i({ day: "numeric" }, "day") : this.num(t.day);
          case "dd":
            return o ? i({ day: "2-digit" }, "day") : this.num(t.day, 2);
          case "c":
            return this.num(t.weekday);
          case "ccc":
            return u("short", !0);
          case "cccc":
            return u("long", !0);
          case "ccccc":
            return u("narrow", !0);
          case "E":
            return this.num(t.weekday);
          case "EEE":
            return u("short", !1);
          case "EEEE":
            return u("long", !1);
          case "EEEEE":
            return u("narrow", !1);
          case "L":
            return o
              ? i({ month: "numeric", day: "numeric" }, "month")
              : this.num(t.month);
          case "LL":
            return o
              ? i({ month: "2-digit", day: "numeric" }, "month")
              : this.num(t.month, 2);
          case "LLL":
            return l("short", !0);
          case "LLLL":
            return l("long", !0);
          case "LLLLL":
            return l("narrow", !0);
          case "M":
            return o ? i({ month: "numeric" }, "month") : this.num(t.month);
          case "MM":
            return o ? i({ month: "2-digit" }, "month") : this.num(t.month, 2);
          case "MMM":
            return l("short", !1);
          case "MMMM":
            return l("long", !1);
          case "MMMMM":
            return l("narrow", !1);
          case "y":
            return o ? i({ year: "numeric" }, "year") : this.num(t.year);
          case "yy":
            return o
              ? i({ year: "2-digit" }, "year")
              : this.num(t.year.toString().slice(-2), 2);
          case "yyyy":
            return o ? i({ year: "numeric" }, "year") : this.num(t.year, 4);
          case "yyyyyy":
            return o ? i({ year: "numeric" }, "year") : this.num(t.year, 6);
          case "G":
            return f("short");
          case "GG":
            return f("long");
          case "GGGGG":
            return f("narrow");
          case "kk":
            return this.num(t.weekYear.toString().slice(-2), 2);
          case "kkkk":
            return this.num(t.weekYear, 4);
          case "W":
            return this.num(t.weekNumber);
          case "WW":
            return this.num(t.weekNumber, 2);
          case "n":
            return this.num(t.localWeekNumber);
          case "nn":
            return this.num(t.localWeekNumber, 2);
          case "ii":
            return this.num(t.localWeekYear.toString().slice(-2), 2);
          case "iiii":
            return this.num(t.localWeekYear, 4);
          case "o":
            return this.num(t.ordinal);
          case "ooo":
            return this.num(t.ordinal, 3);
          case "q":
            return this.num(t.quarter);
          case "qq":
            return this.num(t.quarter, 2);
          case "X":
            return this.num(Math.floor(t.ts / 1e3));
          case "x":
            return this.num(t.ts);
          default:
            return c(h);
        }
      };
    return Op(be.parseFormat(n), d);
  }
  formatDurationFromString(t, n) {
    const r = (l) => {
        switch (l[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      o = (l) => (u) => {
        const c = r(u);
        return c ? this.num(l.get(c), u.length) : u;
      },
      i = be.parseFormat(n),
      s = i.reduce((l, { literal: u, val: c }) => (u ? l : l.concat(c)), []),
      a = t.shiftTo(...s.map(r).filter((l) => l));
    return Op(i, o(a));
  }
}
const l1 =
  /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Fo(...e) {
  const t = e.reduce((n, r) => n + r.source, "");
  return RegExp(`^${t}$`);
}
function _o(...e) {
  return (t) =>
    e
      .reduce(
        ([n, r, o], i) => {
          const [s, a, l] = i(t, o);
          return [{ ...n, ...s }, a || r, l];
        },
        [{}, null, 1],
      )
      .slice(0, 2);
}
function Vo(e, ...t) {
  if (e == null) return [null, null];
  for (const [n, r] of t) {
    const o = n.exec(e);
    if (o) return r(o);
  }
  return [null, null];
}
function u1(...e) {
  return (t, n) => {
    const r = {};
    let o;
    for (o = 0; o < e.length; o++) r[e[o]] = kn(t[n + o]);
    return [r, null, n + o];
  };
}
const c1 = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
  PO = `(?:${c1.source}?(?:\\[(${l1.source})\\])?)?`,
  Hd = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
  f1 = RegExp(`${Hd.source}${PO}`),
  Gd = RegExp(`(?:T${f1.source})?`),
  MO = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
  NO = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
  RO = /(\d{4})-?(\d{3})/,
  AO = u1("weekYear", "weekNumber", "weekDay"),
  OO = u1("year", "ordinal"),
  bO = /(\d{4})-(\d\d)-(\d\d)/,
  d1 = RegExp(`${Hd.source} ?(?:${c1.source}|(${l1.source}))?`),
  DO = RegExp(`(?: ${d1.source})?`);
function mo(e, t, n) {
  const r = e[t];
  return z(r) ? n : kn(r);
}
function IO(e, t) {
  return [
    { year: mo(e, t), month: mo(e, t + 1, 1), day: mo(e, t + 2, 1) },
    null,
    t + 3,
  ];
}
function jo(e, t) {
  return [
    {
      hours: mo(e, t, 0),
      minutes: mo(e, t + 1, 0),
      seconds: mo(e, t + 2, 0),
      milliseconds: $d(e[t + 3]),
    },
    null,
    t + 4,
  ];
}
function ds(e, t) {
  const n = !e[t] && !e[t + 1],
    r = _l(e[t + 1], e[t + 2]),
    o = n ? null : Ve.instance(r);
  return [{}, o, t + 3];
}
function hs(e, t) {
  const n = e[t] ? dn.create(e[t]) : null;
  return [{}, n, t + 1];
}
const LO = RegExp(`^T?${Hd.source}$`),
  FO =
    /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function _O(e) {
  const [t, n, r, o, i, s, a, l, u] = e,
    c = t[0] === "-",
    f = l && l[0] === "-",
    d = (h, y = !1) => (h !== void 0 && (y || (h && c)) ? -h : h);
  return [
    {
      years: d(nr(n)),
      months: d(nr(r)),
      weeks: d(nr(o)),
      days: d(nr(i)),
      hours: d(nr(s)),
      minutes: d(nr(a)),
      seconds: d(nr(l), l === "-0"),
      milliseconds: d($d(u), f),
    },
  ];
}
const VO = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60,
};
function Kd(e, t, n, r, o, i, s) {
  const a = {
    year: t.length === 2 ? uf(kn(t)) : kn(t),
    month: t1.indexOf(n) + 1,
    day: kn(r),
    hour: kn(o),
    minute: kn(i),
  };
  return (
    s && (a.second = kn(s)),
    e && (a.weekday = e.length > 3 ? r1.indexOf(e) + 1 : o1.indexOf(e) + 1),
    a
  );
}
const jO =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function zO(e) {
  const [, t, n, r, o, i, s, a, l, u, c, f] = e,
    d = Kd(t, o, r, n, i, s, a);
  let h;
  return l ? (h = VO[l]) : u ? (h = 0) : (h = _l(c, f)), [d, new Ve(h)];
}
function UO(e) {
  return e
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .trim();
}
const BO =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  $O =
    /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  WO =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function bp(e) {
  const [, t, n, r, o, i, s, a] = e;
  return [Kd(t, o, r, n, i, s, a), Ve.utcInstance];
}
function HO(e) {
  const [, t, n, r, o, i, s, a] = e;
  return [Kd(t, a, n, r, o, i, s), Ve.utcInstance];
}
const GO = Fo(MO, Gd),
  KO = Fo(NO, Gd),
  YO = Fo(RO, Gd),
  ZO = Fo(f1),
  h1 = _o(IO, jo, ds, hs),
  qO = _o(AO, jo, ds, hs),
  QO = _o(OO, jo, ds, hs),
  XO = _o(jo, ds, hs);
function JO(e) {
  return Vo(e, [GO, h1], [KO, qO], [YO, QO], [ZO, XO]);
}
function eb(e) {
  return Vo(UO(e), [jO, zO]);
}
function tb(e) {
  return Vo(e, [BO, bp], [$O, bp], [WO, HO]);
}
function nb(e) {
  return Vo(e, [FO, _O]);
}
const rb = _o(jo);
function ob(e) {
  return Vo(e, [LO, rb]);
}
const ib = Fo(bO, DO),
  sb = Fo(d1),
  ab = _o(jo, ds, hs);
function lb(e) {
  return Vo(e, [ib, h1], [sb, ab]);
}
const Dp = "Invalid Duration",
  m1 = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1e3,
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1e3,
    },
    hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
    minutes: { seconds: 60, milliseconds: 60 * 1e3 },
    seconds: { milliseconds: 1e3 },
  },
  ub = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1e3,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1e3,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1e3,
    },
    ...m1,
  },
  ut = 146097 / 400,
  Lr = 146097 / 4800,
  cb = {
    years: {
      quarters: 4,
      months: 12,
      weeks: ut / 7,
      days: ut,
      hours: ut * 24,
      minutes: ut * 24 * 60,
      seconds: ut * 24 * 60 * 60,
      milliseconds: ut * 24 * 60 * 60 * 1e3,
    },
    quarters: {
      months: 3,
      weeks: ut / 28,
      days: ut / 4,
      hours: (ut * 24) / 4,
      minutes: (ut * 24 * 60) / 4,
      seconds: (ut * 24 * 60 * 60) / 4,
      milliseconds: (ut * 24 * 60 * 60 * 1e3) / 4,
    },
    months: {
      weeks: Lr / 7,
      days: Lr,
      hours: Lr * 24,
      minutes: Lr * 24 * 60,
      seconds: Lr * 24 * 60 * 60,
      milliseconds: Lr * 24 * 60 * 60 * 1e3,
    },
    ...m1,
  },
  dr = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ],
  fb = dr.slice(0).reverse();
function wn(e, t, n = !1) {
  const r = {
    values: n ? t.values : { ...e.values, ...(t.values || {}) },
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
    matrix: t.matrix || e.matrix,
  };
  return new Y(r);
}
function p1(e, t) {
  let n = t.milliseconds ?? 0;
  for (const r of fb.slice(1)) t[r] && (n += t[r] * e[r].milliseconds);
  return n;
}
function Ip(e, t) {
  const n = p1(e, t) < 0 ? -1 : 1;
  dr.reduceRight((r, o) => {
    if (z(t[o])) return r;
    if (r) {
      const i = t[r] * n,
        s = e[o][r],
        a = Math.floor(i / s);
      (t[o] += a * n), (t[r] -= a * s * n);
    }
    return o;
  }, null),
    dr.reduce((r, o) => {
      if (z(t[o])) return r;
      if (r) {
        const i = t[r] % 1;
        (t[r] -= i), (t[o] += i * e[r][o]);
      }
      return o;
    }, null);
}
function db(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) r !== 0 && (t[n] = r);
  return t;
}
class Y {
  constructor(t) {
    const n = t.conversionAccuracy === "longterm" || !1;
    let r = n ? cb : ub;
    t.matrix && (r = t.matrix),
      (this.values = t.values),
      (this.loc = t.loc || Q.create()),
      (this.conversionAccuracy = n ? "longterm" : "casual"),
      (this.invalid = t.invalid || null),
      (this.matrix = r),
      (this.isLuxonDuration = !0);
  }
  static fromMillis(t, n) {
    return Y.fromObject({ milliseconds: t }, n);
  }
  static fromObject(t, n = {}) {
    if (t == null || typeof t != "object")
      throw new Ae(
        `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`,
      );
    return new Y({
      values: el(t, Y.normalizeUnit),
      loc: Q.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix,
    });
  }
  static fromDurationLike(t) {
    if (Un(t)) return Y.fromMillis(t);
    if (Y.isDuration(t)) return t;
    if (typeof t == "object") return Y.fromObject(t);
    throw new Ae(`Unknown duration argument ${t} of type ${typeof t}`);
  }
  static fromISO(t, n) {
    const [r] = nb(t);
    return r
      ? Y.fromObject(r, n)
      : Y.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(t, n) {
    const [r] = ob(t);
    return r
      ? Y.fromObject(r, n)
      : Y.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static invalid(t, n = null) {
    if (!t) throw new Ae("need to specify a reason the Duration is invalid");
    const r = t instanceof Mt ? t : new Mt(t, n);
    if (de.throwOnInvalid) throw new FA(r);
    return new Y({ invalid: r });
  }
  static normalizeUnit(t) {
    const n = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[t && t.toLowerCase()];
    if (!n) throw new kx(t);
    return n;
  }
  static isDuration(t) {
    return (t && t.isLuxonDuration) || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(t, n = {}) {
    const r = { ...n, floor: n.round !== !1 && n.floor !== !1 };
    return this.isValid
      ? be.create(this.loc, r).formatDurationFromString(this, t)
      : Dp;
  }
  toHuman(t = {}) {
    if (!this.isValid) return Dp;
    const n = dr
      .map((r) => {
        const o = this.values[r];
        return z(o)
          ? null
          : this.loc
              .numberFormatter({
                style: "unit",
                unitDisplay: "long",
                ...t,
                unit: r.slice(0, -1),
              })
              .format(o);
      })
      .filter((r) => r);
    return this.loc
      .listFormatter({
        type: "conjunction",
        style: t.listStyle || "narrow",
        ...t,
      })
      .format(n);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid) return null;
    let t = "P";
    return (
      this.years !== 0 && (t += this.years + "Y"),
      (this.months !== 0 || this.quarters !== 0) &&
        (t += this.months + this.quarters * 3 + "M"),
      this.weeks !== 0 && (t += this.weeks + "W"),
      this.days !== 0 && (t += this.days + "D"),
      (this.hours !== 0 ||
        this.minutes !== 0 ||
        this.seconds !== 0 ||
        this.milliseconds !== 0) &&
        (t += "T"),
      this.hours !== 0 && (t += this.hours + "H"),
      this.minutes !== 0 && (t += this.minutes + "M"),
      (this.seconds !== 0 || this.milliseconds !== 0) &&
        (t += Wd(this.seconds + this.milliseconds / 1e3, 3) + "S"),
      t === "P" && (t += "T0S"),
      t
    );
  }
  toISOTime(t = {}) {
    if (!this.isValid) return null;
    const n = this.toMillis();
    return n < 0 || n >= 864e5
      ? null
      : ((t = {
          suppressMilliseconds: !1,
          suppressSeconds: !1,
          includePrefix: !1,
          format: "extended",
          ...t,
          includeOffset: !1,
        }),
        _.fromMillis(n, { zone: "UTC" }).toISOTime(t));
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid
      ? `Duration { values: ${JSON.stringify(this.values)} }`
      : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  toMillis() {
    return this.isValid ? p1(this.matrix, this.values) : NaN;
  }
  valueOf() {
    return this.toMillis();
  }
  plus(t) {
    if (!this.isValid) return this;
    const n = Y.fromDurationLike(t),
      r = {};
    for (const o of dr)
      (To(n.values, o) || To(this.values, o)) &&
        (r[o] = n.get(o) + this.get(o));
    return wn(this, { values: r }, !0);
  }
  minus(t) {
    if (!this.isValid) return this;
    const n = Y.fromDurationLike(t);
    return this.plus(n.negate());
  }
  mapUnits(t) {
    if (!this.isValid) return this;
    const n = {};
    for (const r of Object.keys(this.values)) n[r] = e1(t(this.values[r], r));
    return wn(this, { values: n }, !0);
  }
  get(t) {
    return this[Y.normalizeUnit(t)];
  }
  set(t) {
    if (!this.isValid) return this;
    const n = { ...this.values, ...el(t, Y.normalizeUnit) };
    return wn(this, { values: n });
  }
  reconfigure({
    locale: t,
    numberingSystem: n,
    conversionAccuracy: r,
    matrix: o,
  } = {}) {
    const s = {
      loc: this.loc.clone({ locale: t, numberingSystem: n }),
      matrix: o,
      conversionAccuracy: r,
    };
    return wn(this, s);
  }
  as(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }
  normalize() {
    if (!this.isValid) return this;
    const t = this.toObject();
    return Ip(this.matrix, t), wn(this, { values: t }, !0);
  }
  rescale() {
    if (!this.isValid) return this;
    const t = db(this.normalize().shiftToAll().toObject());
    return wn(this, { values: t }, !0);
  }
  shiftTo(...t) {
    if (!this.isValid) return this;
    if (t.length === 0) return this;
    t = t.map((s) => Y.normalizeUnit(s));
    const n = {},
      r = {},
      o = this.toObject();
    let i;
    for (const s of dr)
      if (t.indexOf(s) >= 0) {
        i = s;
        let a = 0;
        for (const u in r) (a += this.matrix[u][s] * r[u]), (r[u] = 0);
        Un(o[s]) && (a += o[s]);
        const l = Math.trunc(a);
        (n[s] = l), (r[s] = (a * 1e3 - l * 1e3) / 1e3);
      } else Un(o[s]) && (r[s] = o[s]);
    for (const s in r)
      r[s] !== 0 && (n[i] += s === i ? r[s] : r[s] / this.matrix[i][s]);
    return Ip(this.matrix, n), wn(this, { values: n }, !0);
  }
  shiftToAll() {
    return this.isValid
      ? this.shiftTo(
          "years",
          "months",
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds",
        )
      : this;
  }
  negate() {
    if (!this.isValid) return this;
    const t = {};
    for (const n of Object.keys(this.values))
      t[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return wn(this, { values: t }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(t) {
    if (!this.isValid || !t.isValid || !this.loc.equals(t.loc)) return !1;
    function n(r, o) {
      return r === void 0 || r === 0 ? o === void 0 || o === 0 : r === o;
    }
    for (const r of dr) if (!n(this.values[r], t.values[r])) return !1;
    return !0;
  }
}
const Fr = "Invalid Interval";
function hb(e, t) {
  return !e || !e.isValid
    ? fe.invalid("missing or invalid start")
    : !t || !t.isValid
      ? fe.invalid("missing or invalid end")
      : t < e
        ? fe.invalid(
            "end before start",
            `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`,
          )
        : null;
}
class fe {
  constructor(t) {
    (this.s = t.start),
      (this.e = t.end),
      (this.invalid = t.invalid || null),
      (this.isLuxonInterval = !0);
  }
  static invalid(t, n = null) {
    if (!t) throw new Ae("need to specify a reason the Interval is invalid");
    const r = t instanceof Mt ? t : new Mt(t, n);
    if (de.throwOnInvalid) throw new LA(r);
    return new fe({ invalid: r });
  }
  static fromDateTimes(t, n) {
    const r = ei(t),
      o = ei(n),
      i = hb(r, o);
    return i ?? new fe({ start: r, end: o });
  }
  static after(t, n) {
    const r = Y.fromDurationLike(n),
      o = ei(t);
    return fe.fromDateTimes(o, o.plus(r));
  }
  static before(t, n) {
    const r = Y.fromDurationLike(n),
      o = ei(t);
    return fe.fromDateTimes(o.minus(r), o);
  }
  static fromISO(t, n) {
    const [r, o] = (t || "").split("/", 2);
    if (r && o) {
      let i, s;
      try {
        (i = _.fromISO(r, n)), (s = i.isValid);
      } catch {
        s = !1;
      }
      let a, l;
      try {
        (a = _.fromISO(o, n)), (l = a.isValid);
      } catch {
        l = !1;
      }
      if (s && l) return fe.fromDateTimes(i, a);
      if (s) {
        const u = Y.fromISO(o, n);
        if (u.isValid) return fe.after(i, u);
      } else if (l) {
        const u = Y.fromISO(r, n);
        if (u.isValid) return fe.before(a, u);
      }
    }
    return fe.invalid(
      "unparsable",
      `the input "${t}" can't be parsed as ISO 8601`,
    );
  }
  static isInterval(t) {
    return (t && t.isLuxonInterval) || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(t = "milliseconds") {
    return this.isValid ? this.toDuration(t).get(t) : NaN;
  }
  count(t = "milliseconds", n) {
    if (!this.isValid) return NaN;
    const r = this.start.startOf(t, n);
    let o;
    return (
      n != null && n.useLocaleWeeks
        ? (o = this.end.reconfigure({ locale: r.locale }))
        : (o = this.end),
      (o = o.startOf(t, n)),
      Math.floor(o.diff(r, t).get(t)) + (o.valueOf() !== this.end.valueOf())
    );
  }
  hasSame(t) {
    return this.isValid
      ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t)
      : !1;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(t) {
    return this.isValid ? this.s > t : !1;
  }
  isBefore(t) {
    return this.isValid ? this.e <= t : !1;
  }
  contains(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }
  set({ start: t, end: n } = {}) {
    return this.isValid ? fe.fromDateTimes(t || this.s, n || this.e) : this;
  }
  splitAt(...t) {
    if (!this.isValid) return [];
    const n = t
        .map(ei)
        .filter((s) => this.contains(s))
        .sort((s, a) => s.toMillis() - a.toMillis()),
      r = [];
    let { s: o } = this,
      i = 0;
    for (; o < this.e; ) {
      const s = n[i] || this.e,
        a = +s > +this.e ? this.e : s;
      r.push(fe.fromDateTimes(o, a)), (o = a), (i += 1);
    }
    return r;
  }
  splitBy(t) {
    const n = Y.fromDurationLike(t);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0) return [];
    let { s: r } = this,
      o = 1,
      i;
    const s = [];
    for (; r < this.e; ) {
      const a = this.start.plus(n.mapUnits((l) => l * o));
      (i = +a > +this.e ? this.e : a),
        s.push(fe.fromDateTimes(r, i)),
        (r = i),
        (o += 1);
    }
    return s;
  }
  divideEqually(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }
  overlaps(t) {
    return this.e > t.s && this.s < t.e;
  }
  abutsStart(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }
  abutsEnd(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }
  engulfs(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }
  equals(t) {
    return !this.isValid || !t.isValid
      ? !1
      : this.s.equals(t.s) && this.e.equals(t.e);
  }
  intersection(t) {
    if (!this.isValid) return this;
    const n = this.s > t.s ? this.s : t.s,
      r = this.e < t.e ? this.e : t.e;
    return n >= r ? null : fe.fromDateTimes(n, r);
  }
  union(t) {
    if (!this.isValid) return this;
    const n = this.s < t.s ? this.s : t.s,
      r = this.e > t.e ? this.e : t.e;
    return fe.fromDateTimes(n, r);
  }
  static merge(t) {
    const [n, r] = t
      .sort((o, i) => o.s - i.s)
      .reduce(
        ([o, i], s) =>
          i
            ? i.overlaps(s) || i.abutsStart(s)
              ? [o, i.union(s)]
              : [o.concat([i]), s]
            : [o, s],
        [[], null],
      );
    return r && n.push(r), n;
  }
  static xor(t) {
    let n = null,
      r = 0;
    const o = [],
      i = t.map((l) => [
        { time: l.s, type: "s" },
        { time: l.e, type: "e" },
      ]),
      s = Array.prototype.concat(...i),
      a = s.sort((l, u) => l.time - u.time);
    for (const l of a)
      (r += l.type === "s" ? 1 : -1),
        r === 1
          ? (n = l.time)
          : (n && +n != +l.time && o.push(fe.fromDateTimes(n, l.time)),
            (n = null));
    return fe.merge(o);
  }
  difference(...t) {
    return fe
      .xor([this].concat(t))
      .map((n) => this.intersection(n))
      .filter((n) => n && !n.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Fr;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid
      ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`
      : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  toLocaleString(t = Qa, n = {}) {
    return this.isValid
      ? be.create(this.s.loc.clone(n), t).formatInterval(this)
      : Fr;
  }
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Fr;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Fr;
  }
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : Fr;
  }
  toFormat(t, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${n}${this.e.toFormat(t)}` : Fr;
  }
  toDuration(t, n) {
    return this.isValid
      ? this.e.diff(this.s, t, n)
      : Y.invalid(this.invalidReason);
  }
  mapEndpoints(t) {
    return fe.fromDateTimes(t(this.s), t(this.e));
  }
}
class $s {
  static hasDST(t = de.defaultZone) {
    const n = _.now().setZone(t).set({ month: 12 });
    return !t.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  static isValidIANAZone(t) {
    return dn.isValidZone(t);
  }
  static normalizeZone(t) {
    return Nn(t, de.defaultZone);
  }
  static getStartOfWeek({ locale: t = null, locObj: n = null } = {}) {
    return (n || Q.create(t)).getStartOfWeek();
  }
  static getMinimumDaysInFirstWeek({
    locale: t = null,
    locObj: n = null,
  } = {}) {
    return (n || Q.create(t)).getMinDaysInFirstWeek();
  }
  static getWeekendWeekdays({ locale: t = null, locObj: n = null } = {}) {
    return (n || Q.create(t)).getWeekendDays().slice();
  }
  static months(
    t = "long",
    {
      locale: n = null,
      numberingSystem: r = null,
      locObj: o = null,
      outputCalendar: i = "gregory",
    } = {},
  ) {
    return (o || Q.create(n, r, i)).months(t);
  }
  static monthsFormat(
    t = "long",
    {
      locale: n = null,
      numberingSystem: r = null,
      locObj: o = null,
      outputCalendar: i = "gregory",
    } = {},
  ) {
    return (o || Q.create(n, r, i)).months(t, !0);
  }
  static weekdays(
    t = "long",
    { locale: n = null, numberingSystem: r = null, locObj: o = null } = {},
  ) {
    return (o || Q.create(n, r, null)).weekdays(t);
  }
  static weekdaysFormat(
    t = "long",
    { locale: n = null, numberingSystem: r = null, locObj: o = null } = {},
  ) {
    return (o || Q.create(n, r, null)).weekdays(t, !0);
  }
  static meridiems({ locale: t = null } = {}) {
    return Q.create(t).meridiems();
  }
  static eras(t = "short", { locale: n = null } = {}) {
    return Q.create(n, null, "gregory").eras(t);
  }
  static features() {
    return { relative: Qx(), localeWeek: Xx() };
  }
}
function Lp(e, t) {
  const n = (o) => o.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(),
    r = n(t) - n(e);
  return Math.floor(Y.fromMillis(r).as("days"));
}
function mb(e, t, n) {
  const r = [
      ["years", (l, u) => u.year - l.year],
      ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
      ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
      [
        "weeks",
        (l, u) => {
          const c = Lp(l, u);
          return (c - (c % 7)) / 7;
        },
      ],
      ["days", Lp],
    ],
    o = {},
    i = e;
  let s, a;
  for (const [l, u] of r)
    n.indexOf(l) >= 0 &&
      ((s = l),
      (o[l] = u(e, t)),
      (a = i.plus(o)),
      a > t
        ? (o[l]--, (e = i.plus(o)), e > t && ((a = e), o[l]--, (e = i.plus(o))))
        : (e = a));
  return [e, o, a, s];
}
function pb(e, t, n, r) {
  let [o, i, s, a] = mb(e, t, n);
  const l = t - o,
    u = n.filter(
      (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0,
    );
  u.length === 0 &&
    (s < t && (s = o.plus({ [a]: 1 })),
    s !== o && (i[a] = (i[a] || 0) + l / (s - o)));
  const c = Y.fromObject(i, r);
  return u.length > 0
    ? Y.fromMillis(l, r)
        .shiftTo(...u)
        .plus(c)
    : c;
}
const gb = "missing Intl.DateTimeFormat.formatToParts support";
function q(e, t = (n) => n) {
  return { regex: e, deser: ([n]) => t(iO(n)) };
}
const yb = " ",
  g1 = `[ ${yb}]`,
  y1 = new RegExp(g1, "g");
function vb(e) {
  return e.replace(/\./g, "\\.?").replace(y1, g1);
}
function Fp(e) {
  return e.replace(/\./g, "").replace(y1, " ").toLowerCase();
}
function Et(e, t) {
  return e === null
    ? null
    : {
        regex: RegExp(e.map(vb).join("|")),
        deser: ([n]) => e.findIndex((r) => Fp(n) === Fp(r)) + t,
      };
}
function _p(e, t) {
  return { regex: e, deser: ([, n, r]) => _l(n, r), groups: t };
}
function Ws(e) {
  return { regex: e, deser: ([t]) => t };
}
function wb(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function xb(e, t) {
  const n = Ct(t),
    r = Ct(t, "{2}"),
    o = Ct(t, "{3}"),
    i = Ct(t, "{4}"),
    s = Ct(t, "{6}"),
    a = Ct(t, "{1,2}"),
    l = Ct(t, "{1,3}"),
    u = Ct(t, "{1,6}"),
    c = Ct(t, "{1,9}"),
    f = Ct(t, "{2,4}"),
    d = Ct(t, "{4,6}"),
    h = (x) => ({ regex: RegExp(wb(x.val)), deser: ([m]) => m, literal: !0 }),
    v = ((x) => {
      if (e.literal) return h(x);
      switch (x.val) {
        case "G":
          return Et(t.eras("short"), 0);
        case "GG":
          return Et(t.eras("long"), 0);
        case "y":
          return q(u);
        case "yy":
          return q(f, uf);
        case "yyyy":
          return q(i);
        case "yyyyy":
          return q(d);
        case "yyyyyy":
          return q(s);
        case "M":
          return q(a);
        case "MM":
          return q(r);
        case "MMM":
          return Et(t.months("short", !0), 1);
        case "MMMM":
          return Et(t.months("long", !0), 1);
        case "L":
          return q(a);
        case "LL":
          return q(r);
        case "LLL":
          return Et(t.months("short", !1), 1);
        case "LLLL":
          return Et(t.months("long", !1), 1);
        case "d":
          return q(a);
        case "dd":
          return q(r);
        case "o":
          return q(l);
        case "ooo":
          return q(o);
        case "HH":
          return q(r);
        case "H":
          return q(a);
        case "hh":
          return q(r);
        case "h":
          return q(a);
        case "mm":
          return q(r);
        case "m":
          return q(a);
        case "q":
          return q(a);
        case "qq":
          return q(r);
        case "s":
          return q(a);
        case "ss":
          return q(r);
        case "S":
          return q(l);
        case "SSS":
          return q(o);
        case "u":
          return Ws(c);
        case "uu":
          return Ws(a);
        case "uuu":
          return q(n);
        case "a":
          return Et(t.meridiems(), 0);
        case "kkkk":
          return q(i);
        case "kk":
          return q(f, uf);
        case "W":
          return q(a);
        case "WW":
          return q(r);
        case "E":
        case "c":
          return q(n);
        case "EEE":
          return Et(t.weekdays("short", !1), 1);
        case "EEEE":
          return Et(t.weekdays("long", !1), 1);
        case "ccc":
          return Et(t.weekdays("short", !0), 1);
        case "cccc":
          return Et(t.weekdays("long", !0), 1);
        case "Z":
        case "ZZ":
          return _p(new RegExp(`([+-]${a.source})(?::(${r.source}))?`), 2);
        case "ZZZ":
          return _p(new RegExp(`([+-]${a.source})(${r.source})?`), 2);
        case "z":
          return Ws(/[a-z_+-/]{1,256}?/i);
        case " ":
          return Ws(/[^\S\n\r]/);
        default:
          return h(x);
      }
    })(e) || { invalidReason: gb };
  return (v.token = e), v;
}
const Sb = {
  year: { "2-digit": "yy", numeric: "yyyyy" },
  month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
  day: { numeric: "d", "2-digit": "dd" },
  weekday: { short: "EEE", long: "EEEE" },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: { numeric: "h", "2-digit": "hh" },
  hour24: { numeric: "H", "2-digit": "HH" },
  minute: { numeric: "m", "2-digit": "mm" },
  second: { numeric: "s", "2-digit": "ss" },
  timeZoneName: { long: "ZZZZZ", short: "ZZZ" },
};
function Cb(e, t, n) {
  const { type: r, value: o } = e;
  if (r === "literal") {
    const l = /^\s+$/.test(o);
    return { literal: !l, val: l ? " " : o };
  }
  const i = t[r];
  let s = r;
  r === "hour" &&
    (t.hour12 != null
      ? (s = t.hour12 ? "hour12" : "hour24")
      : t.hourCycle != null
        ? t.hourCycle === "h11" || t.hourCycle === "h12"
          ? (s = "hour12")
          : (s = "hour24")
        : (s = n.hour12 ? "hour12" : "hour24"));
  let a = Sb[s];
  if ((typeof a == "object" && (a = a[i]), a)) return { literal: !1, val: a };
}
function Eb(e) {
  return [
    `^${e.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`,
    e,
  ];
}
function Tb(e, t, n) {
  const r = e.match(t);
  if (r) {
    const o = {};
    let i = 1;
    for (const s in n)
      if (To(n, s)) {
        const a = n[s],
          l = a.groups ? a.groups + 1 : 1;
        !a.literal &&
          a.token &&
          (o[a.token.val[0]] = a.deser(r.slice(i, i + l))),
          (i += l);
      }
    return [r, o];
  } else return [r, {}];
}
function kb(e) {
  const t = (i) => {
    switch (i) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let n = null,
    r;
  return (
    z(e.z) || (n = dn.create(e.z)),
    z(e.Z) || (n || (n = new Ve(e.Z)), (r = e.Z)),
    z(e.q) || (e.M = (e.q - 1) * 3 + 1),
    z(e.h) ||
      (e.h < 12 && e.a === 1
        ? (e.h += 12)
        : e.h === 12 && e.a === 0 && (e.h = 0)),
    e.G === 0 && e.y && (e.y = -e.y),
    z(e.u) || (e.S = $d(e.u)),
    [
      Object.keys(e).reduce((i, s) => {
        const a = t(s);
        return a && (i[a] = e[s]), i;
      }, {}),
      n,
      r,
    ]
  );
}
let bu = null;
function Pb() {
  return bu || (bu = _.fromMillis(1555555555555)), bu;
}
function Mb(e, t) {
  if (e.literal) return e;
  const n = be.macroTokenToFormatOpts(e.val),
    r = S1(n, t);
  return r == null || r.includes(void 0) ? e : r;
}
function v1(e, t) {
  return Array.prototype.concat(...e.map((n) => Mb(n, t)));
}
class w1 {
  constructor(t, n) {
    if (
      ((this.locale = t),
      (this.format = n),
      (this.tokens = v1(be.parseFormat(n), t)),
      (this.units = this.tokens.map((r) => xb(r, t))),
      (this.disqualifyingUnit = this.units.find((r) => r.invalidReason)),
      !this.disqualifyingUnit)
    ) {
      const [r, o] = Eb(this.units);
      (this.regex = RegExp(r, "i")), (this.handlers = o);
    }
  }
  explainFromTokens(t) {
    if (this.isValid) {
      const [n, r] = Tb(t, this.regex, this.handlers),
        [o, i, s] = r ? kb(r) : [null, null, void 0];
      if (To(r, "a") && To(r, "H"))
        throw new Qr("Can't include meridiem when specifying 24-hour format");
      return {
        input: t,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: n,
        matches: r,
        result: o,
        zone: i,
        specificOffset: s,
      };
    } else
      return {
        input: t,
        tokens: this.tokens,
        invalidReason: this.invalidReason,
      };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
}
function x1(e, t, n) {
  return new w1(e, n).explainFromTokens(t);
}
function Nb(e, t, n) {
  const {
    result: r,
    zone: o,
    specificOffset: i,
    invalidReason: s,
  } = x1(e, t, n);
  return [r, o, i, s];
}
function S1(e, t) {
  if (!e) return null;
  const r = be.create(t, e).dtFormatter(Pb()),
    o = r.formatToParts(),
    i = r.resolvedOptions();
  return o.map((s) => Cb(s, e, i));
}
const Du = "Invalid DateTime",
  Vp = 864e13;
function li(e) {
  return new Mt("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Iu(e) {
  return e.weekData === null && (e.weekData = Xa(e.c)), e.weekData;
}
function Lu(e) {
  return (
    e.localWeekData === null &&
      (e.localWeekData = Xa(
        e.c,
        e.loc.getMinDaysInFirstWeek(),
        e.loc.getStartOfWeek(),
      )),
    e.localWeekData
  );
}
function rr(e, t) {
  const n = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid,
  };
  return new _({ ...n, ...t, old: n });
}
function C1(e, t, n) {
  let r = e - t * 60 * 1e3;
  const o = n.offset(r);
  if (t === o) return [r, t];
  r -= (o - t) * 60 * 1e3;
  const i = n.offset(r);
  return o === i ? [r, o] : [e - Math.min(o, i) * 60 * 1e3, Math.max(o, i)];
}
function Hs(e, t) {
  e += t * 60 * 1e3;
  const n = new Date(e);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds(),
  };
}
function ha(e, t, n) {
  return C1(Fl(e), t, n);
}
function jp(e, t) {
  const n = e.o,
    r = e.c.year + Math.trunc(t.years),
    o = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3,
    i = {
      ...e.c,
      year: r,
      month: o,
      day:
        Math.min(e.c.day, Ja(r, o)) +
        Math.trunc(t.days) +
        Math.trunc(t.weeks) * 7,
    },
    s = Y.fromObject({
      years: t.years - Math.trunc(t.years),
      quarters: t.quarters - Math.trunc(t.quarters),
      months: t.months - Math.trunc(t.months),
      weeks: t.weeks - Math.trunc(t.weeks),
      days: t.days - Math.trunc(t.days),
      hours: t.hours,
      minutes: t.minutes,
      seconds: t.seconds,
      milliseconds: t.milliseconds,
    }).as("milliseconds"),
    a = Fl(i);
  let [l, u] = C1(a, n, e.zone);
  return s !== 0 && ((l += s), (u = e.zone.offset(l))), { ts: l, o: u };
}
function _r(e, t, n, r, o, i) {
  const { setZone: s, zone: a } = n;
  if ((e && Object.keys(e).length !== 0) || t) {
    const l = t || a,
      u = _.fromObject(e, { ...n, zone: l, specificOffset: i });
    return s ? u : u.setZone(a);
  } else
    return _.invalid(
      new Mt("unparsable", `the input "${o}" can't be parsed as ${r}`),
    );
}
function Gs(e, t, n = !0) {
  return e.isValid
    ? be
        .create(Q.create("en-US"), { allowZ: n, forceSimple: !0 })
        .formatDateTimeFromString(e, t)
    : null;
}
function Fu(e, t) {
  const n = e.c.year > 9999 || e.c.year < 0;
  let r = "";
  return (
    n && e.c.year >= 0 && (r += "+"),
    (r += ge(e.c.year, n ? 6 : 4)),
    t
      ? ((r += "-"), (r += ge(e.c.month)), (r += "-"), (r += ge(e.c.day)))
      : ((r += ge(e.c.month)), (r += ge(e.c.day))),
    r
  );
}
function zp(e, t, n, r, o, i) {
  let s = ge(e.c.hour);
  return (
    t
      ? ((s += ":"),
        (s += ge(e.c.minute)),
        (e.c.millisecond !== 0 || e.c.second !== 0 || !n) && (s += ":"))
      : (s += ge(e.c.minute)),
    (e.c.millisecond !== 0 || e.c.second !== 0 || !n) &&
      ((s += ge(e.c.second)),
      (e.c.millisecond !== 0 || !r) &&
        ((s += "."), (s += ge(e.c.millisecond, 3)))),
    o &&
      (e.isOffsetFixed && e.offset === 0 && !i
        ? (s += "Z")
        : e.o < 0
          ? ((s += "-"),
            (s += ge(Math.trunc(-e.o / 60))),
            (s += ":"),
            (s += ge(Math.trunc(-e.o % 60))))
          : ((s += "+"),
            (s += ge(Math.trunc(e.o / 60))),
            (s += ":"),
            (s += ge(Math.trunc(e.o % 60))))),
    i && (s += "[" + e.zone.ianaName + "]"),
    s
  );
}
const E1 = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  Rb = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  Ab = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  T1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  Ob = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  bb = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Db(e) {
  const t = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[e.toLowerCase()];
  if (!t) throw new kx(e);
  return t;
}
function Up(e) {
  switch (e.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return Db(e);
  }
}
function Ib(e) {
  return (
    pa[e] || (ma === void 0 && (ma = de.now()), (pa[e] = e.offset(ma))), pa[e]
  );
}
function Bp(e, t) {
  const n = Nn(t.zone, de.defaultZone);
  if (!n.isValid) return _.invalid(li(n));
  const r = Q.fromObject(t);
  let o, i;
  if (z(e.year)) o = de.now();
  else {
    for (const l of T1) z(e[l]) && (e[l] = E1[l]);
    const s = Zx(e) || qx(e);
    if (s) return _.invalid(s);
    const a = Ib(n);
    [o, i] = ha(e, a, n);
  }
  return new _({ ts: o, zone: n, loc: r, o: i });
}
function $p(e, t, n) {
  const r = z(n.round) ? !0 : n.round,
    o = (s, a) => (
      (s = Wd(s, r || n.calendary ? 0 : 2, !0)),
      t.loc.clone(n).relFormatter(n).format(s, a)
    ),
    i = (s) =>
      n.calendary
        ? t.hasSame(e, s)
          ? 0
          : t.startOf(s).diff(e.startOf(s), s).get(s)
        : t.diff(e, s).get(s);
  if (n.unit) return o(i(n.unit), n.unit);
  for (const s of n.units) {
    const a = i(s);
    if (Math.abs(a) >= 1) return o(a, s);
  }
  return o(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
function Wp(e) {
  let t = {},
    n;
  return (
    e.length > 0 && typeof e[e.length - 1] == "object"
      ? ((t = e[e.length - 1]), (n = Array.from(e).slice(0, e.length - 1)))
      : (n = Array.from(e)),
    [t, n]
  );
}
let ma,
  pa = {};
class _ {
  constructor(t) {
    const n = t.zone || de.defaultZone;
    let r =
      t.invalid ||
      (Number.isNaN(t.ts) ? new Mt("invalid input") : null) ||
      (n.isValid ? null : li(n));
    this.ts = z(t.ts) ? de.now() : t.ts;
    let o = null,
      i = null;
    if (!r)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))
        [o, i] = [t.old.c, t.old.o];
      else {
        const a = Un(t.o) && !t.old ? t.o : n.offset(this.ts);
        (o = Hs(this.ts, a)),
          (r = Number.isNaN(o.year) ? new Mt("invalid input") : null),
          (o = r ? null : o),
          (i = r ? null : a);
      }
    (this._zone = n),
      (this.loc = t.loc || Q.create()),
      (this.invalid = r),
      (this.weekData = null),
      (this.localWeekData = null),
      (this.c = o),
      (this.o = i),
      (this.isLuxonDateTime = !0);
  }
  static now() {
    return new _({});
  }
  static local() {
    const [t, n] = Wp(arguments),
      [r, o, i, s, a, l, u] = n;
    return Bp(
      {
        year: r,
        month: o,
        day: i,
        hour: s,
        minute: a,
        second: l,
        millisecond: u,
      },
      t,
    );
  }
  static utc() {
    const [t, n] = Wp(arguments),
      [r, o, i, s, a, l, u] = n;
    return (
      (t.zone = Ve.utcInstance),
      Bp(
        {
          year: r,
          month: o,
          day: i,
          hour: s,
          minute: a,
          second: l,
          millisecond: u,
        },
        t,
      )
    );
  }
  static fromJSDate(t, n = {}) {
    const r = cO(t) ? t.valueOf() : NaN;
    if (Number.isNaN(r)) return _.invalid("invalid input");
    const o = Nn(n.zone, de.defaultZone);
    return o.isValid
      ? new _({ ts: r, zone: o, loc: Q.fromObject(n) })
      : _.invalid(li(o));
  }
  static fromMillis(t, n = {}) {
    if (Un(t))
      return t < -Vp || t > Vp
        ? _.invalid("Timestamp out of range")
        : new _({
            ts: t,
            zone: Nn(n.zone, de.defaultZone),
            loc: Q.fromObject(n),
          });
    throw new Ae(
      `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`,
    );
  }
  static fromSeconds(t, n = {}) {
    if (Un(t))
      return new _({
        ts: t * 1e3,
        zone: Nn(n.zone, de.defaultZone),
        loc: Q.fromObject(n),
      });
    throw new Ae("fromSeconds requires a numerical input");
  }
  static fromObject(t, n = {}) {
    t = t || {};
    const r = Nn(n.zone, de.defaultZone);
    if (!r.isValid) return _.invalid(li(r));
    const o = Q.fromObject(n),
      i = el(t, Up),
      { minDaysInFirstWeek: s, startOfWeek: a } = Np(i, o),
      l = de.now(),
      u = z(n.specificOffset) ? r.offset(l) : n.specificOffset,
      c = !z(i.ordinal),
      f = !z(i.year),
      d = !z(i.month) || !z(i.day),
      h = f || d,
      y = i.weekYear || i.weekNumber;
    if ((h || c) && y)
      throw new Qr(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    if (d && c) throw new Qr("Can't mix ordinal dates with month/day");
    const v = y || (i.weekday && !h);
    let x,
      m,
      p = Hs(l, u);
    v
      ? ((x = Ob), (m = Rb), (p = Xa(p, s, a)))
      : c
        ? ((x = bb), (m = Ab), (p = Ou(p)))
        : ((x = T1), (m = E1));
    let w = !1;
    for (const A of x) {
      const j = i[A];
      z(j) ? (w ? (i[A] = m[A]) : (i[A] = p[A])) : (w = !0);
    }
    const S = v ? aO(i, s, a) : c ? lO(i) : Zx(i),
      E = S || qx(i);
    if (E) return _.invalid(E);
    const P = v ? Pp(i, s, a) : c ? Mp(i) : i,
      [k, T] = ha(P, u, r),
      b = new _({ ts: k, zone: r, o: T, loc: o });
    return i.weekday && h && t.weekday !== b.weekday
      ? _.invalid(
          "mismatched weekday",
          `you can't specify both a weekday of ${i.weekday} and a date of ${b.toISO()}`,
        )
      : b.isValid
        ? b
        : _.invalid(b.invalid);
  }
  static fromISO(t, n = {}) {
    const [r, o] = JO(t);
    return _r(r, o, n, "ISO 8601", t);
  }
  static fromRFC2822(t, n = {}) {
    const [r, o] = eb(t);
    return _r(r, o, n, "RFC 2822", t);
  }
  static fromHTTP(t, n = {}) {
    const [r, o] = tb(t);
    return _r(r, o, n, "HTTP", n);
  }
  static fromFormat(t, n, r = {}) {
    if (z(t) || z(n))
      throw new Ae("fromFormat requires an input string and a format");
    const { locale: o = null, numberingSystem: i = null } = r,
      s = Q.fromOpts({ locale: o, numberingSystem: i, defaultToEN: !0 }),
      [a, l, u, c] = Nb(s, t, n);
    return c ? _.invalid(c) : _r(a, l, r, `format ${n}`, t, u);
  }
  static fromString(t, n, r = {}) {
    return _.fromFormat(t, n, r);
  }
  static fromSQL(t, n = {}) {
    const [r, o] = lb(t);
    return _r(r, o, n, "SQL", t);
  }
  static invalid(t, n = null) {
    if (!t) throw new Ae("need to specify a reason the DateTime is invalid");
    const r = t instanceof Mt ? t : new Mt(t, n);
    if (de.throwOnInvalid) throw new IA(r);
    return new _({ invalid: r });
  }
  static isDateTime(t) {
    return (t && t.isLuxonDateTime) || !1;
  }
  static parseFormatForOpts(t, n = {}) {
    const r = S1(t, Q.fromObject(n));
    return r ? r.map((o) => (o ? o.val : null)).join("") : null;
  }
  static expandFormat(t, n = {}) {
    return v1(be.parseFormat(t), Q.fromObject(n))
      .map((o) => o.val)
      .join("");
  }
  static resetCache() {
    (ma = void 0), (pa = {});
  }
  get(t) {
    return this[t];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? Iu(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Iu(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Iu(this).weekday : NaN;
  }
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  get localWeekday() {
    return this.isValid ? Lu(this).weekday : NaN;
  }
  get localWeekNumber() {
    return this.isValid ? Lu(this).weekNumber : NaN;
  }
  get localWeekYear() {
    return this.isValid ? Lu(this).weekYear : NaN;
  }
  get ordinal() {
    return this.isValid ? Ou(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid
      ? $s.months("short", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get monthLong() {
    return this.isValid
      ? $s.months("long", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get weekdayShort() {
    return this.isValid
      ? $s.weekdays("short", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get weekdayLong() {
    return this.isValid
      ? $s.weekdays("long", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale })
      : null;
  }
  get offsetNameLong() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale })
      : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return this.isOffsetFixed
      ? !1
      : this.offset > this.set({ month: 1, day: 1 }).offset ||
          this.offset > this.set({ month: 5 }).offset;
  }
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed) return [this];
    const t = 864e5,
      n = 6e4,
      r = Fl(this.c),
      o = this.zone.offset(r - t),
      i = this.zone.offset(r + t),
      s = this.zone.offset(r - o * n),
      a = this.zone.offset(r - i * n);
    if (s === a) return [this];
    const l = r - s * n,
      u = r - a * n,
      c = Hs(l, s),
      f = Hs(u, a);
    return c.hour === f.hour &&
      c.minute === f.minute &&
      c.second === f.second &&
      c.millisecond === f.millisecond
      ? [rr(this, { ts: l }), rr(this, { ts: u })]
      : [this];
  }
  get isInLeapYear() {
    return fs(this.year);
  }
  get daysInMonth() {
    return Ja(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? ho(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? Ki(this.weekYear) : NaN;
  }
  get weeksInLocalWeekYear() {
    return this.isValid
      ? Ki(
          this.localWeekYear,
          this.loc.getMinDaysInFirstWeek(),
          this.loc.getStartOfWeek(),
        )
      : NaN;
  }
  resolvedLocaleOptions(t = {}) {
    const {
      locale: n,
      numberingSystem: r,
      calendar: o,
    } = be.create(this.loc.clone(t), t).resolvedOptions(this);
    return { locale: n, numberingSystem: r, outputCalendar: o };
  }
  toUTC(t = 0, n = {}) {
    return this.setZone(Ve.instance(t), n);
  }
  toLocal() {
    return this.setZone(de.defaultZone);
  }
  setZone(t, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (((t = Nn(t, de.defaultZone)), t.equals(this.zone))) return this;
    if (t.isValid) {
      let o = this.ts;
      if (n || r) {
        const i = t.offset(this.ts),
          s = this.toObject();
        [o] = ha(s, i, t);
      }
      return rr(this, { ts: o, zone: t });
    } else return _.invalid(li(t));
  }
  reconfigure({ locale: t, numberingSystem: n, outputCalendar: r } = {}) {
    const o = this.loc.clone({
      locale: t,
      numberingSystem: n,
      outputCalendar: r,
    });
    return rr(this, { loc: o });
  }
  setLocale(t) {
    return this.reconfigure({ locale: t });
  }
  set(t) {
    if (!this.isValid) return this;
    const n = el(t, Up),
      { minDaysInFirstWeek: r, startOfWeek: o } = Np(n, this.loc),
      i = !z(n.weekYear) || !z(n.weekNumber) || !z(n.weekday),
      s = !z(n.ordinal),
      a = !z(n.year),
      l = !z(n.month) || !z(n.day),
      u = a || l,
      c = n.weekYear || n.weekNumber;
    if ((u || s) && c)
      throw new Qr(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    if (l && s) throw new Qr("Can't mix ordinal dates with month/day");
    let f;
    i
      ? (f = Pp({ ...Xa(this.c, r, o), ...n }, r, o))
      : z(n.ordinal)
        ? ((f = { ...this.toObject(), ...n }),
          z(n.day) && (f.day = Math.min(Ja(f.year, f.month), f.day)))
        : (f = Mp({ ...Ou(this.c), ...n }));
    const [d, h] = ha(f, this.o, this.zone);
    return rr(this, { ts: d, o: h });
  }
  plus(t) {
    if (!this.isValid) return this;
    const n = Y.fromDurationLike(t);
    return rr(this, jp(this, n));
  }
  minus(t) {
    if (!this.isValid) return this;
    const n = Y.fromDurationLike(t).negate();
    return rr(this, jp(this, n));
  }
  startOf(t, { useLocaleWeeks: n = !1 } = {}) {
    if (!this.isValid) return this;
    const r = {},
      o = Y.normalizeUnit(t);
    switch (o) {
      case "years":
        r.month = 1;
      case "quarters":
      case "months":
        r.day = 1;
      case "weeks":
      case "days":
        r.hour = 0;
      case "hours":
        r.minute = 0;
      case "minutes":
        r.second = 0;
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (o === "weeks")
      if (n) {
        const i = this.loc.getStartOfWeek(),
          { weekday: s } = this;
        s < i && (r.weekNumber = this.weekNumber - 1), (r.weekday = i);
      } else r.weekday = 1;
    if (o === "quarters") {
      const i = Math.ceil(this.month / 3);
      r.month = (i - 1) * 3 + 1;
    }
    return this.set(r);
  }
  endOf(t, n) {
    return this.isValid
      ? this.plus({ [t]: 1 })
          .startOf(t, n)
          .minus(1)
      : this;
  }
  toFormat(t, n = {}) {
    return this.isValid
      ? be.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t)
      : Du;
  }
  toLocaleString(t = Qa, n = {}) {
    return this.isValid
      ? be.create(this.loc.clone(n), t).formatDateTime(this)
      : Du;
  }
  toLocaleParts(t = {}) {
    return this.isValid
      ? be.create(this.loc.clone(t), t).formatDateTimeParts(this)
      : [];
  }
  toISO({
    format: t = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: r = !1,
    includeOffset: o = !0,
    extendedZone: i = !1,
  } = {}) {
    if (!this.isValid) return null;
    const s = t === "extended";
    let a = Fu(this, s);
    return (a += "T"), (a += zp(this, s, n, r, o, i)), a;
  }
  toISODate({ format: t = "extended" } = {}) {
    return this.isValid ? Fu(this, t === "extended") : null;
  }
  toISOWeekDate() {
    return Gs(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: t = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: o = !1,
    extendedZone: i = !1,
    format: s = "extended",
  } = {}) {
    return this.isValid
      ? (o ? "T" : "") + zp(this, s === "extended", n, t, r, i)
      : null;
  }
  toRFC2822() {
    return Gs(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return Gs(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? Fu(this, !0) : null;
  }
  toSQLTime({
    includeOffset: t = !0,
    includeZone: n = !1,
    includeOffsetSpace: r = !0,
  } = {}) {
    let o = "HH:mm:ss.SSS";
    return (
      (n || t) && (r && (o += " "), n ? (o += "z") : t && (o += "ZZ")),
      Gs(this, o, !0)
    );
  }
  toSQL(t = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Du;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid
      ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`
      : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(t = {}) {
    if (!this.isValid) return {};
    const n = { ...this.c };
    return (
      t.includeConfig &&
        ((n.outputCalendar = this.outputCalendar),
        (n.numberingSystem = this.loc.numberingSystem),
        (n.locale = this.loc.locale)),
      n
    );
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(t, n = "milliseconds", r = {}) {
    if (!this.isValid || !t.isValid)
      return Y.invalid("created by diffing an invalid DateTime");
    const o = {
        locale: this.locale,
        numberingSystem: this.numberingSystem,
        ...r,
      },
      i = fO(n).map(Y.normalizeUnit),
      s = t.valueOf() > this.valueOf(),
      a = s ? this : t,
      l = s ? t : this,
      u = pb(a, l, i, o);
    return s ? u.negate() : u;
  }
  diffNow(t = "milliseconds", n = {}) {
    return this.diff(_.now(), t, n);
  }
  until(t) {
    return this.isValid ? fe.fromDateTimes(this, t) : this;
  }
  hasSame(t, n, r) {
    if (!this.isValid) return !1;
    const o = t.valueOf(),
      i = this.setZone(t.zone, { keepLocalTime: !0 });
    return i.startOf(n, r) <= o && o <= i.endOf(n, r);
  }
  equals(t) {
    return (
      this.isValid &&
      t.isValid &&
      this.valueOf() === t.valueOf() &&
      this.zone.equals(t.zone) &&
      this.loc.equals(t.loc)
    );
  }
  toRelative(t = {}) {
    if (!this.isValid) return null;
    const n = t.base || _.fromObject({}, { zone: this.zone }),
      r = t.padding ? (this < n ? -t.padding : t.padding) : 0;
    let o = ["years", "months", "days", "hours", "minutes", "seconds"],
      i = t.unit;
    return (
      Array.isArray(t.unit) && ((o = t.unit), (i = void 0)),
      $p(n, this.plus(r), { ...t, numeric: "always", units: o, unit: i })
    );
  }
  toRelativeCalendar(t = {}) {
    return this.isValid
      ? $p(t.base || _.fromObject({}, { zone: this.zone }), this, {
          ...t,
          numeric: "auto",
          units: ["years", "months", "days"],
          calendary: !0,
        })
      : null;
  }
  static min(...t) {
    if (!t.every(_.isDateTime))
      throw new Ae("min requires all arguments be DateTimes");
    return Rp(t, (n) => n.valueOf(), Math.min);
  }
  static max(...t) {
    if (!t.every(_.isDateTime))
      throw new Ae("max requires all arguments be DateTimes");
    return Rp(t, (n) => n.valueOf(), Math.max);
  }
  static fromFormatExplain(t, n, r = {}) {
    const { locale: o = null, numberingSystem: i = null } = r,
      s = Q.fromOpts({ locale: o, numberingSystem: i, defaultToEN: !0 });
    return x1(s, t, n);
  }
  static fromStringExplain(t, n, r = {}) {
    return _.fromFormatExplain(t, n, r);
  }
  static buildFormatParser(t, n = {}) {
    const { locale: r = null, numberingSystem: o = null } = n,
      i = Q.fromOpts({ locale: r, numberingSystem: o, defaultToEN: !0 });
    return new w1(i, t);
  }
  static fromFormatParser(t, n, r = {}) {
    if (z(t) || z(n))
      throw new Ae(
        "fromFormatParser requires an input string and a format parser",
      );
    const { locale: o = null, numberingSystem: i = null } = r,
      s = Q.fromOpts({ locale: o, numberingSystem: i, defaultToEN: !0 });
    if (!s.equals(n.locale))
      throw new Ae(
        `fromFormatParser called with a locale of ${s}, but the format parser was created for ${n.locale}`,
      );
    const {
      result: a,
      zone: l,
      specificOffset: u,
      invalidReason: c,
    } = n.explainFromTokens(t);
    return c ? _.invalid(c) : _r(a, l, r, `format ${n.format}`, t, u);
  }
  static get DATE_SHORT() {
    return Qa;
  }
  static get DATE_MED() {
    return Px;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return _A;
  }
  static get DATE_FULL() {
    return Mx;
  }
  static get DATE_HUGE() {
    return Nx;
  }
  static get TIME_SIMPLE() {
    return Rx;
  }
  static get TIME_WITH_SECONDS() {
    return Ax;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return Ox;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return bx;
  }
  static get TIME_24_SIMPLE() {
    return Dx;
  }
  static get TIME_24_WITH_SECONDS() {
    return Ix;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Lx;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return Fx;
  }
  static get DATETIME_SHORT() {
    return _x;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Vx;
  }
  static get DATETIME_MED() {
    return jx;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return zx;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return VA;
  }
  static get DATETIME_FULL() {
    return Ux;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return Bx;
  }
  static get DATETIME_HUGE() {
    return $x;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Wx;
  }
}
function ei(e) {
  if (_.isDateTime(e)) return e;
  if (e && e.valueOf && Un(e.valueOf())) return _.fromJSDate(e);
  if (e && typeof e == "object") return _.fromObject(e);
  throw new Ae(`Unknown datetime argument: ${e}, of type ${typeof e}`);
}
const Lb = [
  { name: "服务器", path: "/" },
  { name: "服务(Dev)", path: "/service" },
  { name: "任务(Dev)", path: "/task" },
  { name: "告警(Dev)", path: "/alarm" },
  { name: "内网穿透(Dev)", path: "/intranet" },
  { name: "用户", path: "/user" },
  { name: "设置(Dev)", path: "/setting" },
];
function Fb(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, o) =>
      o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
  });
}
function Yi(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const cf = (e) => Array.isArray(e);
function k1(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Zi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Hp(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Yd(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = Hp(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = Hp(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function jl(e, t, n) {
  const r = e.getProps();
  return Yd(r, t, n !== void 0 ? n : r.custom, e);
}
const Zd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  qd = ["initial", ...Zd],
  ms = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  er = new Set(ms),
  tn = (e) => e * 1e3,
  nn = (e) => e / 1e3,
  _b = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Vb = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  jb = { type: "keyframes", duration: 0.8 },
  zb = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ub = (e, { keyframes: t }) =>
    t.length > 2
      ? jb
      : er.has(e)
        ? e.startsWith("scale")
          ? Vb(t[1])
          : _b
        : zb;
function Qd(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Bb = { skipAnimations: !1, useManualTiming: !1 },
  $b = (e) => e !== null;
function zl(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter($b),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Ie = (e) => e;
function Wb(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    i.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const h = f && r ? t : n;
      return c && i.add(u), h.has(u) || h.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), i.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        o && ((o = !1), l.process(u));
    },
  };
  return l;
}
const Ks = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Hb = 40;
function P1(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = Ks.reduce((m, p) => ((m[p] = Wb(i)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    h = () => {
      const m = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, Hb), 1)),
        (o.timestamp = m),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        f.process(o),
        d.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(h));
    },
    y = () => {
      (n = !0), (r = !0), o.isProcessing || e(h);
    };
  return {
    schedule: Ks.reduce((m, p) => {
      const w = s[p];
      return (m[p] = (S, E = !1, P = !1) => (n || y(), w.schedule(S, E, P))), m;
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < Ks.length; p++) s[Ks[p]].cancel(m);
    },
    state: o,
    steps: s,
  };
}
const {
    schedule: ee,
    cancel: Yn,
    state: Te,
    steps: _u,
  } = P1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0),
  M1 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Gb = 1e-7,
  Kb = 12;
function Yb(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = M1(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > Gb && ++a < Kb);
  return s;
}
function ps(e, t, n, r) {
  if (e === t && n === r) return Ie;
  const o = (i) => Yb(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : M1(o(i), t, r));
}
const N1 = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  R1 = (e) => (t) => 1 - e(1 - t),
  A1 = ps(0.33, 1.53, 0.69, 0.99),
  Xd = R1(A1),
  O1 = N1(Xd),
  b1 = (e) =>
    (e *= 2) < 1 ? 0.5 * Xd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Jd = (e) => 1 - Math.sin(Math.acos(e)),
  D1 = R1(Jd),
  I1 = N1(Jd),
  L1 = (e) => /^0[^.\s]+$/u.test(e);
function Zb(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || L1(e)
      : !0;
}
let ff = Ie;
const F1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  _1 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  V1 = _1("--"),
  qb = _1("var(--"),
  eh = (e) => (qb(e) ? Qb.test(e.split("/*")[0].trim()) : !1),
  Qb =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Xb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Jb(e) {
  const t = Xb.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function j1(e, t, n = 1) {
  const [r, o] = Jb(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return F1(s) ? parseFloat(s) : s;
  }
  return eh(o) ? j1(o, t, n + 1) : o;
}
const Zn = (e, t, n) => (n > t ? t : n < e ? e : n),
  zo = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  qi = { ...zo, transform: (e) => Zn(0, 1, e) },
  Ys = { ...zo, default: 1 },
  gs = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Cn = gs("deg"),
  $t = gs("%"),
  F = gs("px"),
  eD = gs("vh"),
  tD = gs("vw"),
  Gp = {
    ...$t,
    parse: (e) => $t.parse(e) / 100,
    transform: (e) => $t.transform(e * 100),
  },
  nD = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Kp = (e) => e === zo || e === F,
  Yp = (e, t) => parseFloat(e.split(", ")[t]),
  Zp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return Yp(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? Yp(i[1], e) : 0;
      }
    },
  rD = new Set(["x", "y", "z"]),
  oD = ms.filter((e) => !rD.has(e));
function iD(e) {
  const t = [];
  return (
    oD.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const ko = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Zp(4, 13),
  y: Zp(5, 14),
};
ko.translateX = ko.x;
ko.translateY = ko.y;
const z1 = (e) => (t) => t.test(e),
  sD = { test: (e) => e === "auto", parse: (e) => e },
  U1 = [zo, F, $t, Cn, tD, eD, sD],
  qp = (e) => U1.find(z1(e)),
  gr = new Set();
let df = !1,
  hf = !1;
function B1() {
  if (hf) {
    const e = Array.from(gr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = iD(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (hf = !1), (df = !1), gr.forEach((e) => e.complete()), gr.clear();
}
function $1() {
  gr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (hf = !0);
  });
}
function aD() {
  $1(), B1();
}
class th {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (gr.add(this),
          df || ((df = !0), ee.read($1), ee.resolveKeyframes(B1)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      gr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), gr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Si = (e) => Math.round(e * 1e5) / 1e5,
  nh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function lD(e) {
  return e == null;
}
const uD =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  rh = (e, t) => (n) =>
    !!(
      (typeof n == "string" && uD.test(n) && n.startsWith(e)) ||
      (t && !lD(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  W1 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [o, i, s, a] = r.match(nh);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  cD = (e) => Zn(0, 255, e),
  Vu = { ...zo, transform: (e) => Math.round(cD(e)) },
  hr = {
    test: rh("rgb", "red"),
    parse: W1("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Vu.transform(e) +
      ", " +
      Vu.transform(t) +
      ", " +
      Vu.transform(n) +
      ", " +
      Si(qi.transform(r)) +
      ")",
  };
function fD(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const mf = { test: rh("#"), parse: fD, transform: hr.transform },
  Xr = {
    test: rh("hsl", "hue"),
    parse: W1("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      $t.transform(Si(t)) +
      ", " +
      $t.transform(Si(n)) +
      ", " +
      Si(qi.transform(r)) +
      ")",
  },
  Re = {
    test: (e) => hr.test(e) || mf.test(e) || Xr.test(e),
    parse: (e) =>
      hr.test(e) ? hr.parse(e) : Xr.test(e) ? Xr.parse(e) : mf.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? hr.transform(e)
          : Xr.transform(e),
  },
  dD =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function hD(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(nh)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(dD)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const H1 = "number",
  G1 = "color",
  mD = "var",
  pD = "var(",
  Qp = "${}",
  gD =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      gD,
      (l) => (
        Re.test(l)
          ? (r.color.push(i), o.push(G1), n.push(Re.parse(l)))
          : l.startsWith(pD)
            ? (r.var.push(i), o.push(mD), n.push(l))
            : (r.number.push(i), o.push(H1), n.push(parseFloat(l))),
        ++i,
        Qp
      ),
    )
    .split(Qp);
  return { values: n, split: a, indexes: r, types: o };
}
function K1(e) {
  return Qi(e).values;
}
function Y1(e) {
  const { split: t, types: n } = Qi(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === H1
          ? (i += Si(o[s]))
          : a === G1
            ? (i += Re.transform(o[s]))
            : (i += o[s]);
      }
    return i;
  };
}
const yD = (e) => (typeof e == "number" ? 0 : e);
function vD(e) {
  const t = K1(e);
  return Y1(e)(t.map(yD));
}
const qn = {
    test: hD,
    parse: K1,
    createTransformer: Y1,
    getAnimatableNone: vD,
  },
  wD = new Set(["brightness", "contrast", "saturate", "opacity"]);
function xD(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(nh) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = wD.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const SD = /\b([a-z-]*)\(.*?\)/gu,
  pf = {
    ...qn,
    getAnimatableNone: (e) => {
      const t = e.match(SD);
      return t ? t.map(xD).join(" ") : e;
    },
  },
  CD = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    radius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
  },
  ED = {
    rotate: Cn,
    rotateX: Cn,
    rotateY: Cn,
    rotateZ: Cn,
    scale: Ys,
    scaleX: Ys,
    scaleY: Ys,
    scaleZ: Ys,
    skew: Cn,
    skewX: Cn,
    skewY: Cn,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: qi,
    originX: Gp,
    originY: Gp,
    originZ: F,
  },
  Xp = { ...zo, transform: Math.round },
  oh = {
    ...CD,
    ...ED,
    zIndex: Xp,
    size: F,
    fillOpacity: qi,
    strokeOpacity: qi,
    numOctaves: Xp,
  },
  TD = {
    ...oh,
    color: Re,
    backgroundColor: Re,
    outlineColor: Re,
    fill: Re,
    stroke: Re,
    borderColor: Re,
    borderTopColor: Re,
    borderRightColor: Re,
    borderBottomColor: Re,
    borderLeftColor: Re,
    filter: pf,
    WebkitFilter: pf,
  },
  ih = (e) => TD[e];
function Z1(e, t) {
  let n = ih(e);
  return (
    n !== pf && (n = qn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const kD = new Set(["auto", "none", "0"]);
function PD(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !kD.has(i) && Qi(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = Z1(n, o);
}
class q1 extends th {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), eh(u))) {
        const c = j1(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !nD.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = qp(o),
      a = qp(i);
    if (s !== a)
      if (Kp(s) && Kp(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) Zb(t[o]) && r.push(o);
    r.length && PD(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = ko[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = ko[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function sh(e) {
  return typeof e == "function";
}
let ga;
function MD() {
  ga = void 0;
}
const Wt = {
    now: () => (
      ga === void 0 &&
        Wt.set(
          Te.isProcessing || Bb.useManualTiming
            ? Te.timestamp
            : performance.now(),
        ),
      ga
    ),
    set: (e) => {
      (ga = e), queueMicrotask(MD);
    },
  },
  Jp = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (qn.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function ND(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function RD(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = Jp(o, t),
    a = Jp(i, t);
  return !s || !a ? !1 : ND(e) || ((n === "spring" || sh(n)) && r);
}
const AD = 40;
class Q1 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Wt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > AD
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && aD(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Wt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !RD(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(zl(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function X1(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const OD = 5;
function J1(e, t, n) {
  const r = Math.max(t - OD, 0);
  return X1(n - e(r), t - r);
}
const ju = 0.001,
  bD = 0.01,
  DD = 10,
  ID = 0.05,
  LD = 1;
function FD({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    s = 1 - t;
  (s = Zn(ID, LD, s)),
    (e = Zn(bD, DD, nn(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            h = gf(u, s),
            y = Math.exp(-f);
          return ju - (d / h) * y;
        }),
        (i = (u) => {
          const f = u * s * e,
            d = f * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = gf(Math.pow(u, 2), s);
          return ((-o(u) + ju > 0 ? -1 : 1) * ((d - h) * y)) / v;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -ju + c * f;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = VD(o, i, a);
  if (((e = tn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const _D = 12;
function VD(e, t, n) {
  let r = n;
  for (let o = 1; o < _D; o++) r = r - e(r) / t(r);
  return r;
}
function gf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const jD = ["duration", "bounce"],
  zD = ["stiffness", "damping", "mass"];
function eg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function UD(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!eg(e, zD) && eg(e, jD)) {
    const n = FD(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function eS({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = UD({ ...r, velocity: -nn(r.velocity || 0) }),
    h = f || 0,
    y = l / (2 * Math.sqrt(a * u)),
    v = i - o,
    x = nn(Math.sqrt(a / u)),
    m = Math.abs(v) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const w = gf(x, y);
    p = (S) => {
      const E = Math.exp(-y * x * S);
      return (
        i - E * (((h + y * x * v) / w) * Math.sin(w * S) + v * Math.cos(w * S))
      );
    };
  } else if (y === 1) p = (w) => i - Math.exp(-x * w) * (v + (h + x * v) * w);
  else {
    const w = x * Math.sqrt(y * y - 1);
    p = (S) => {
      const E = Math.exp(-y * x * S),
        P = Math.min(w * S, 300);
      return (
        i - (E * ((h + y * x * v) * Math.sinh(P) + w * v * Math.cosh(P))) / w
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (w) => {
      const S = p(w);
      if (d) s.done = w >= c;
      else {
        let E = 0;
        y < 1 && (E = w === 0 ? tn(h) : J1(p, w, S));
        const P = Math.abs(E) <= n,
          k = Math.abs(i - S) <= t;
        s.done = P && k;
      }
      return (s.value = s.done ? i : S), s;
    },
  };
}
function tg({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    h = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    y = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
          ? a
          : l;
  let v = n * t;
  const x = f + v,
    m = s === void 0 ? x : s(x);
  m !== x && (v = m - f);
  const p = (T) => -v * Math.exp(-T / r),
    w = (T) => m + p(T),
    S = (T) => {
      const b = p(T),
        A = w(T);
      (d.done = Math.abs(b) <= u), (d.value = d.done ? m : A);
    };
  let E, P;
  const k = (T) => {
    h(d.value) &&
      ((E = T),
      (P = eS({
        keyframes: [d.value, y(d.value)],
        velocity: J1(w, T, d.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let b = !1;
        return (
          !P && E === void 0 && ((b = !0), S(T), k(T)),
          E !== void 0 && T >= E ? P.next(T - E) : (!b && S(T), d)
        );
      },
    }
  );
}
const BD = ps(0.42, 0, 1, 1),
  $D = ps(0, 0, 0.58, 1),
  tS = ps(0.42, 0, 0.58, 1),
  WD = (e) => Array.isArray(e) && typeof e[0] != "number",
  ah = (e) => Array.isArray(e) && typeof e[0] == "number",
  ng = {
    linear: Ie,
    easeIn: BD,
    easeInOut: tS,
    easeOut: $D,
    circIn: Jd,
    circInOut: I1,
    circOut: D1,
    backIn: Xd,
    backInOut: O1,
    backOut: A1,
    anticipate: b1,
  },
  rg = (e) => {
    if (ah(e)) {
      ff(e.length === 4);
      const [t, n, r, o] = e;
      return ps(t, n, r, o);
    } else if (typeof e == "string") return ff(ng[e] !== void 0), ng[e];
    return e;
  },
  HD = (e, t) => (n) => t(e(n)),
  rn = (...e) => e.reduce(HD),
  Po = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ae = (e, t, n) => e + (t - e) * n;
function zu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function GD({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = zu(l, a, e + 1 / 3)), (i = zu(l, a, e)), (s = zu(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function tl(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Uu = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  KD = [mf, hr, Xr],
  YD = (e) => KD.find((t) => t.test(e));
function og(e) {
  const t = YD(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Xr && (n = GD(n)), n;
}
const ig = (e, t) => {
    const n = og(e),
      r = og(t);
    if (!n || !r) return tl(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = Uu(n.red, r.red, i)),
      (o.green = Uu(n.green, r.green, i)),
      (o.blue = Uu(n.blue, r.blue, i)),
      (o.alpha = ae(n.alpha, r.alpha, i)),
      hr.transform(o)
    );
  },
  yf = new Set(["none", "hidden"]);
function ZD(e, t) {
  return yf.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function qD(e, t) {
  return (n) => ae(e, t, n);
}
function lh(e) {
  return typeof e == "number"
    ? qD
    : typeof e == "string"
      ? eh(e)
        ? tl
        : Re.test(e)
          ? ig
          : JD
      : Array.isArray(e)
        ? nS
        : typeof e == "object"
          ? Re.test(e)
            ? ig
            : QD
          : tl;
}
function nS(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => lh(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function QD(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = lh(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function XD(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[s]++;
  }
  return r;
}
const JD = (e, t) => {
  const n = qn.createTransformer(t),
    r = Qi(e),
    o = Qi(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (yf.has(e) && !o.values.length) || (yf.has(t) && !r.values.length)
      ? ZD(e, t)
      : rn(nS(XD(r, o), o.values), n)
    : tl(e, t);
};
function rS(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ae(e, t, n)
    : lh(e)(e, t);
}
function e2(e, t, n) {
  const r = [],
    o = n || rS,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ie : t;
      a = rn(l, a);
    }
    r.push(a);
  }
  return r;
}
function t2(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((ff(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = e2(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Po(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(Zn(e[0], e[i - 1], u)) : l;
}
function n2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Po(0, t, r);
    e.push(ae(n, 1, o));
  }
}
function r2(e) {
  const t = [0];
  return n2(t, e.length - 1), t;
}
function o2(e, t) {
  return e.map((n) => n * t);
}
function i2(e, t) {
  return e.map(() => t || tS).splice(0, e.length - 1);
}
function nl({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = WD(r) ? r.map(rg) : rg(r),
    i = { done: !1, value: t[0] },
    s = o2(n && n.length === t.length ? n : r2(t), e),
    a = t2(s, t, { ease: Array.isArray(o) ? o : i2(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const sg = 2e4;
function s2(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < sg; ) (t += n), (r = e.next(t));
  return t >= sg ? 1 / 0 : t;
}
const a2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ee.update(t, !0),
      stop: () => Yn(t),
      now: () => (Te.isProcessing ? Te.timestamp : Wt.now()),
    };
  },
  l2 = { decay: tg, inertia: tg, tween: nl, keyframes: nl, spring: eS },
  u2 = (e) => e / 100;
class uh extends Q1 {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      s = (o == null ? void 0 : o.KeyframeResolver) || th,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      a = sh(n) ? n : l2[n] || nl;
    let l, u;
    a !== nl &&
      typeof t[0] != "number" &&
      ((l = rn(u2, rS(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = s2(c));
    const { calculatedDuration: f } = c,
      d = f + o,
      h = d * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: h,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: d,
      repeat: h,
      repeatType: y,
      repeatDelay: v,
      onUpdate: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let w = this.currentTime,
      S = i;
    if (h) {
      const T = Math.min(this.currentTime, c) / f;
      let b = Math.floor(T),
        A = T % 1;
      !A && T >= 1 && (A = 1),
        A === 1 && b--,
        (b = Math.min(b, h + 1)),
        !!(b % 2) &&
          (y === "reverse"
            ? ((A = 1 - A), v && (A -= v / f))
            : y === "mirror" && (S = s)),
        (w = Zn(0, 1, A) * f);
    }
    const E = p ? { done: !1, value: l[0] } : S.next(w);
    a && (E.value = a(E.value));
    let { done: P } = E;
    !p &&
      u !== null &&
      (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const k =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      k && o !== void 0 && (E.value = zl(l, this.options, o)),
      x && x(E.value),
      k && this.finish(),
      E
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? nn(t.calculatedDuration) : 0;
  }
  get time() {
    return nn(this.currentTime);
  }
  set time(t) {
    (t = tn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = nn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = a2, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = o)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const oS = new Set(["opacity", "clipPath", "filter", "transform"]),
  c2 = 10,
  f2 = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / c2), 2);
    for (let o = 0; o < r; o++) n += e(Po(0, r - 1, o)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function ch(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const d2 = { linearEasing: void 0 };
function h2(e, t) {
  const n = ch(e);
  return () => {
    var r;
    return (r = d2[t]) !== null && r !== void 0 ? r : n();
  };
}
const rl = h2(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function iS(e) {
  return !!(
    (typeof e == "function" && rl()) ||
    !e ||
    (typeof e == "string" && (e in vf || rl())) ||
    ah(e) ||
    (Array.isArray(e) && e.every(iS))
  );
}
const ui = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  vf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ui([0, 0.65, 0.55, 1]),
    circOut: ui([0.55, 0, 1, 0.45]),
    backIn: ui([0.31, 0.01, 0.66, -0.59]),
    backOut: ui([0.33, 1.53, 0.69, 0.99]),
  };
function sS(e, t) {
  if (e)
    return typeof e == "function" && rl()
      ? f2(e, t)
      : ah(e)
        ? ui(e)
        : Array.isArray(e)
          ? e.map((n) => sS(n, t) || vf.easeOut)
          : vf[e];
}
function m2(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = sS(a, o);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function ag(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const p2 = ch(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ol = 10,
  g2 = 2e4;
function y2(e) {
  return sh(e.type) || e.type === "spring" || !iS(e.ease);
}
function v2(e, t) {
  const n = new uh({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < g2; ) (r = n.sample(i)), o.push(r.value), (i += ol);
  return { times: void 0, keyframes: o, duration: i - ol, ease: "linear" };
}
const aS = { anticipate: b1, backInOut: O1, circInOut: I1 };
function w2(e) {
  return e in aS;
}
class lg extends Q1 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new q1(
      i,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      o,
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && rl() && w2(s) && (s = aS[s]), y2(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: h,
          motionValue: y,
          element: v,
          ...x
        } = this.options,
        m = v2(t, x);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = m.duration),
        (i = m.times),
        (s = m.ease),
        (a = "keyframes");
    }
    const f = m2(l.owner.current, u, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: s,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (ag(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(zl(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: o, times: i, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return nn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return nn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = tn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ie;
      const { animation: r } = n;
      ag(r, t);
    }
    return Ie;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...h
        } = this.options,
        y = new uh({
          ...h,
          keyframes: r,
          duration: o,
          type: i,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        v = tn(this.time);
      u.setWithVelocity(y.sample(v - ol).value, y.sample(v).value, ol);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: a,
    } = t;
    return (
      p2() &&
      r &&
      oS.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const x2 = ch(() => window.ScrollTimeline !== void 0);
class S2 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) =>
      x2() && o.attachTimeline ? o.attachTimeline(t) : n(o),
    );
    return () => {
      r.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function C2({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const fh =
    (e, t, n, r = {}, o, i) =>
    (s) => {
      const a = Qd(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - tn(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : o,
      };
      C2(a) || (c = { ...c, ...Ub(e, c) }),
        c.duration && (c.duration = tn(c.duration)),
        c.repeatDelay && (c.repeatDelay = tn(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !i && t.get() !== void 0)
      ) {
        const d = zl(c.keyframes, a);
        if (d !== void 0)
          return (
            ee.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new S2([])
          );
      }
      return !i && lg.supports(c) ? new lg(c) : new uh(c);
    },
  E2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  T2 = (e) => (cf(e) ? e[e.length - 1] || 0 : e);
function dh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hh(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mh {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return dh(this.subscriptions, t), () => hh(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ug = 30,
  k2 = (e) => !isNaN(parseFloat(e));
class P2 {
  constructor(t, n = {}) {
    (this.version = "11.11.9"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Wt.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Wt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = k2(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mh());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ee.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Wt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > ug
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ug);
    return X1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Xi(e, t) {
  return new P2(e, t);
}
function M2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xi(n));
}
function N2(e, t) {
  const n = jl(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = T2(i[s]);
    M2(e, s, a);
  }
}
const Ul = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  R2 = "framerAppearId",
  lS = "data-" + Ul(R2);
function uS(e) {
  return e.props[lS];
}
const De = (e) => !!(e && e.getVelocity);
function A2(e) {
  return !!(De(e) && e.add);
}
function wf(e, t) {
  if (!e.applyWillChange) return;
  const n = e.getValue("willChange");
  if (A2(n)) return n.add(t);
}
function O2({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function cS(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const f in l) {
    const d = e.getValue(
        f,
        (i = e.latestValues[f]) !== null && i !== void 0 ? i : null,
      ),
      h = l[f];
    if (h === void 0 || (c && O2(c, f))) continue;
    const y = { delay: n, ...Qd(s || {}, f) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const m = uS(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, f, ee);
        p !== null && ((y.startTime = p), (v = !0));
      }
    }
    wf(e, f),
      d.start(
        fh(f, d, h, e.shouldReduceMotion && er.has(f) ? { type: !1 } : y, e, v),
      );
    const x = d.animation;
    x && u.push(x);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        ee.update(() => {
          a && N2(e, a);
        });
      }),
    u
  );
}
function xf(e, t, n = {}) {
  var r;
  const o = jl(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(cS(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = i;
            return b2(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function b2(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(D2)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            xf(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(s)
  );
}
function D2(e, t) {
  return e.sortNodePosition(t);
}
function I2(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => xf(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = xf(e, t, n);
  else {
    const o = typeof t == "function" ? jl(e, t, n.custom) : t;
    r = Promise.all(cS(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const L2 = qd.length;
function fS(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? fS(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < L2; n++) {
    const r = qd[n],
      o = e.props[r];
    (Zi(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const F2 = [...Zd].reverse(),
  _2 = Zd.length;
function V2(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => I2(e, n, r)));
}
function j2(e) {
  let t = V2(e),
    n = cg(),
    r = !0;
  const o = (l) => (u, c) => {
    var f;
    const d = jl(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (d) {
      const { transition: h, transitionEnd: y, ...v } = d;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = fS(e.parent) || {},
      f = [],
      d = new Set();
    let h = {},
      y = 1 / 0;
    for (let x = 0; x < _2; x++) {
      const m = F2[x],
        p = n[m],
        w = u[m] !== void 0 ? u[m] : c[m],
        S = Zi(w),
        E = m === l ? p.isActive : null;
      E === !1 && (y = x);
      let P = w === c[m] && w !== u[m] && S;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (p.protectedKeys = { ...h }),
        (!p.isActive && E === null) ||
          (!w && !p.prevProp) ||
          Yi(w) ||
          typeof w == "boolean")
      )
        continue;
      const k = z2(p.prevProp, w);
      let T = k || (m === l && p.isActive && !P && S) || (x > y && S),
        b = !1;
      const A = Array.isArray(w) ? w : [w];
      let j = A.reduce(o(m), {});
      E === !1 && (j = {});
      const { prevResolvedValues: L = {} } = p,
        G = { ...L, ...j },
        W = (U) => {
          (T = !0),
            d.has(U) && ((b = !0), d.delete(U)),
            (p.needsAnimating[U] = !0);
          const M = e.getValue(U);
          M && (M.liveStyle = !1);
        };
      for (const U in G) {
        const M = j[U],
          N = L[U];
        if (h.hasOwnProperty(U)) continue;
        let D = !1;
        cf(M) && cf(N) ? (D = !k1(M, N)) : (D = M !== N),
          D
            ? M != null
              ? W(U)
              : d.add(U)
            : M !== void 0 && d.has(U)
              ? W(U)
              : (p.protectedKeys[U] = !0);
      }
      (p.prevProp = w),
        (p.prevResolvedValues = j),
        p.isActive && (h = { ...h, ...j }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!(P && k) || b) &&
          f.push(...A.map((U) => ({ animation: U, options: { type: m } })));
    }
    if (d.size) {
      const x = {};
      d.forEach((m) => {
        const p = e.getBaseTarget(m),
          w = e.getValue(m);
        w && (w.liveStyle = !0), (x[m] = p ?? null);
      }),
        f.push({ animation: x });
    }
    let v = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var h;
        return (h = d.animationState) === null || h === void 0
          ? void 0
          : h.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = cg()), (r = !0);
    },
  };
}
function z2(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !k1(t, e) : !1;
}
function or(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function cg() {
  return {
    animate: or(!0),
    whileInView: or(),
    whileHover: or(),
    whileTap: or(),
    whileDrag: or(),
    whileFocus: or(),
    exit: or(),
  };
}
class tr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class U2 extends tr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = j2(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Yi(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let B2 = 0;
class $2 extends tr {
  constructor() {
    super(...arguments), (this.id = B2++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const W2 = { animation: { Feature: U2 }, exit: { Feature: $2 } },
  dS = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Bl(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const H2 = (e) => (t) => dS(t) && e(t, Bl(t));
function Jt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function on(e, t, n, r) {
  return Jt(e, t, H2(n), r);
}
const fg = (e, t) => Math.abs(e - t);
function G2(e, t) {
  const n = fg(e.x, t.x),
    r = fg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class hS {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = $u(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          h = G2(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !h) return;
        const { point: y } = f,
          { timestamp: v } = Te;
        this.history.push({ ...y, timestamp: v });
        const { onStart: x, onMove: m } = this.handlers;
        d ||
          (x && x(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Bu(d, this.transformPagePoint)),
          ee.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: h, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const x = $u(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Bu(d, this.transformPagePoint),
          this.history,
        );
        this.startEvent && h && h(f, x), y && y(f, x);
      }),
      !dS(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const s = Bl(t),
      a = Bu(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Te;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, $u(a, this.history)),
      (this.removeListeners = rn(
        on(this.contextWindow, "pointermove", this.handlePointerMove),
        on(this.contextWindow, "pointerup", this.handlePointerUp),
        on(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Yn(this.updatePoint);
  }
}
function Bu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function dg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $u({ point: e }, t) {
  return {
    point: e,
    delta: dg(e, mS(t)),
    offset: dg(e, K2(t)),
    velocity: Y2(t, 0.1),
  };
}
function K2(e) {
  return e[0];
}
function mS(e) {
  return e[e.length - 1];
}
function Y2(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = mS(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > tn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = nn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function pS(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const hg = pS("dragHorizontal"),
  mg = pS("dragVertical");
function gS(e) {
  let t = !1;
  if (e === "y") t = mg();
  else if (e === "x") t = hg();
  else {
    const n = hg(),
      r = mg();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function yS() {
  const e = gS(!0);
  return e ? (e(), !1) : !0;
}
function Jr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const vS = 1e-4,
  Z2 = 1 - vS,
  q2 = 1 + vS,
  wS = 0.01,
  Q2 = 0 - wS,
  X2 = 0 + wS;
function it(e) {
  return e.max - e.min;
}
function J2(e, t, n) {
  return Math.abs(e - t) <= n;
}
function pg(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ae(t.min, t.max, e.origin)),
    (e.scale = it(n) / it(t)),
    (e.translate = ae(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Z2 && e.scale <= q2) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Q2 && e.translate <= X2) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Ci(e, t, n, r) {
  pg(e.x, t.x, n.x, r ? r.originX : void 0),
    pg(e.y, t.y, n.y, r ? r.originY : void 0);
}
function gg(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + it(t));
}
function eI(e, t, n) {
  gg(e.x, t.x, n.x), gg(e.y, t.y, n.y);
}
function yg(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + it(t));
}
function Ei(e, t, n) {
  yg(e.x, t.x, n.x), yg(e.y, t.y, n.y);
}
function tI(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ae(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function vg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function nI(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: vg(e.x, n, o), y: vg(e.y, t, r) };
}
function wg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function rI(e, t) {
  return { x: wg(e.x, t.x), y: wg(e.y, t.y) };
}
function oI(e, t) {
  let n = 0.5;
  const r = it(e),
    o = it(t);
  return (
    o > r
      ? (n = Po(t.min, t.max - r, e.min))
      : r > o && (n = Po(e.min, e.max - o, t.min)),
    Zn(0, 1, n)
  );
}
function iI(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Sf = 0.35;
function sI(e = Sf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Sf),
    { x: xg(e, "left", "right"), y: xg(e, "top", "bottom") }
  );
}
function xg(e, t, n) {
  return { min: Sg(e, t), max: Sg(e, n) };
}
function Sg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Cg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  eo = () => ({ x: Cg(), y: Cg() }),
  Eg = () => ({ min: 0, max: 0 }),
  me = () => ({ x: Eg(), y: Eg() });
function ft(e) {
  return [e("x"), e("y")];
}
function xS({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function aI({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lI(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Wu(e) {
  return e === void 0 || e === 1;
}
function Cf({ scale: e, scaleX: t, scaleY: n }) {
  return !Wu(e) || !Wu(t) || !Wu(n);
}
function ar(e) {
  return (
    Cf(e) ||
    SS(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function SS(e) {
  return Tg(e.x) || Tg(e.y);
}
function Tg(e) {
  return e && e !== "0%";
}
function il(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function kg(e, t, n, r, o) {
  return o !== void 0 && (e = il(e, o, r)), il(e, n, r) + t;
}
function Ef(e, t = 0, n = 1, r, o) {
  (e.min = kg(e.min, t, n, r, o)), (e.max = kg(e.max, t, n, r, o));
}
function CS(e, { x: t, y: n }) {
  Ef(e.x, t.translate, t.scale, t.originPoint),
    Ef(e.y, n.translate, n.scale, n.originPoint);
}
const Pg = 0.999999999999,
  Mg = 1.0000000000001;
function uI(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        no(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), CS(e, s)),
      r && ar(i.latestValues) && no(e, i.latestValues));
  }
  t.x < Mg && t.x > Pg && (t.x = 1), t.y < Mg && t.y > Pg && (t.y = 1);
}
function to(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Ng(e, t, n, r, o = 0.5) {
  const i = ae(e.min, e.max, o);
  Ef(e, t, n, i, r);
}
function no(e, t) {
  Ng(e.x, t.x, t.scaleX, t.scale, t.originX),
    Ng(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function ES(e, t) {
  return xS(lI(e.getBoundingClientRect(), t));
}
function cI(e, t, n) {
  const r = ES(e, n),
    { scroll: o } = t;
  return o && (to(r.x, o.offset.x), to(r.y, o.offset.y)), r;
}
const TS = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  fI = new WeakMap();
class dI {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = me()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Bl(c, "page").point);
      },
      i = (c, f) => {
        const { drag: d, dragPropagation: h, onDragStart: y } = this.getProps();
        if (
          d &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = gS(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ft((x) => {
            let m = this.getAxisMotionValue(x).get() || 0;
            if ($t.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const w = p.layout.layoutBox[x];
                w && (m = it(w) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[x] = m;
          }),
          y && ee.postRender(() => y(c, f)),
          wf(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: h,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: x } = f;
        if (h && this.currentDirection === null) {
          (this.currentDirection = hI(x)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, x),
          this.updateAxis("y", f.point, x),
          this.visualElement.render(),
          v && v(c, f);
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        ft((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new hS(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: TS(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ee.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Zs(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = tI(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      i = this.constraints;
    n && Jr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
        ? (this.constraints = nI(o.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = sI(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ft((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = iI(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Jr(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = cI(r, o.root, this.visualElement.getTransformPagePoint());
    let s = rI(o.layout.layoutBox, i);
    if (n) {
      const a = n(aI(s));
      (this.hasMutatedConstraints = !!a), a && (s = xS(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = ft((c) => {
        if (!Zs(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      wf(this.visualElement, t), r.start(fh(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ft((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ft((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ft((n) => {
      const { drag: r } = this.getProps();
      if (!Zs(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - ae(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Jr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ft((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = oI({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ft((s) => {
        if (!Zs(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ae(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    fI.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = on(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Jr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      ee.read(r);
    const s = Jt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (ft((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = Sf,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Zs(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function hI(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class mI extends tr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ie),
      (this.removeListeners = Ie),
      (this.controls = new dI(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ie);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Rg = (e) => (t, n) => {
  e && ee.postRender(() => e(t, n));
};
class pI extends tr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ie);
  }
  onPointerDown(t) {
    this.session = new hS(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: TS(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Rg(t),
      onStart: Rg(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && ee.postRender(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = on(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ph = g.createContext(null);
function gI() {
  const e = g.useContext(ph);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = g.useId();
  g.useEffect(() => r(o), []);
  const i = g.useCallback(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
const kS = g.createContext({}),
  PS = g.createContext({}),
  ya = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ag(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ti = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (F.test(e)) e = parseFloat(e);
        else return e;
      const n = Ag(e, t.target.x),
        r = Ag(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  yI = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = qn.parse(e);
      if (o.length > 5) return r;
      const i = qn.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = ae(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  },
  sl = {};
function vI(e) {
  Object.assign(sl, e);
}
const { schedule: gh, cancel: CF } = P1(queueMicrotask, !1);
class wI extends g.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    vI(xI),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ya.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              ee.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      gh.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function MS(e) {
  const [t, n] = gI(),
    r = g.useContext(kS);
  return C.jsx(wI, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: g.useContext(PS),
    isPresent: t,
    safeToRemove: n,
  });
}
const xI = {
    borderRadius: {
      ...ti,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ti,
    borderTopRightRadius: ti,
    borderBottomLeftRadius: ti,
    borderBottomRightRadius: ti,
    boxShadow: yI,
  },
  NS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  SI = NS.length,
  Og = (e) => (typeof e == "string" ? parseFloat(e) : e),
  bg = (e) => typeof e == "number" || F.test(e);
function CI(e, t, n, r, o, i) {
  o
    ? ((e.opacity = ae(0, n.opacity !== void 0 ? n.opacity : 1, EI(r))),
      (e.opacityExit = ae(t.opacity !== void 0 ? t.opacity : 1, 0, TI(r))))
    : i &&
      (e.opacity = ae(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < SI; s++) {
    const a = `border${NS[s]}Radius`;
    let l = Dg(t, a),
      u = Dg(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || bg(l) === bg(u)
        ? ((e[a] = Math.max(ae(Og(l), Og(u), r), 0)),
          ($t.test(u) || $t.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
}
function Dg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const EI = RS(0, 0.5, D1),
  TI = RS(0.5, 0.95, Ie);
function RS(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Po(e, t, r)));
}
function Ig(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ct(e, t) {
  Ig(e.x, t.x), Ig(e.y, t.y);
}
function Lg(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Fg(e, t, n, r, o) {
  return (
    (e -= t), (e = il(e, 1 / n, r)), o !== void 0 && (e = il(e, 1 / o, r)), e
  );
}
function kI(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    ($t.test(t) &&
      ((t = parseFloat(t)), (t = ae(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ae(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Fg(e.min, t, n, a, o)),
    (e.max = Fg(e.max, t, n, a, o));
}
function _g(e, t, [n, r, o], i, s) {
  kI(e, t[n], t[r], t[o], t.scale, i, s);
}
const PI = ["x", "scaleX", "originX"],
  MI = ["y", "scaleY", "originY"];
function Vg(e, t, n, r) {
  _g(e.x, t, PI, n ? n.x : void 0, r ? r.x : void 0),
    _g(e.y, t, MI, n ? n.y : void 0, r ? r.y : void 0);
}
function jg(e) {
  return e.translate === 0 && e.scale === 1;
}
function AS(e) {
  return jg(e.x) && jg(e.y);
}
function zg(e, t) {
  return e.min === t.min && e.max === t.max;
}
function NI(e, t) {
  return zg(e.x, t.x) && zg(e.y, t.y);
}
function Ug(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function OS(e, t) {
  return Ug(e.x, t.x) && Ug(e.y, t.y);
}
function Bg(e) {
  return it(e.x) / it(e.y);
}
function $g(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class RI {
  constructor() {
    this.members = [];
  }
  add(t) {
    dh(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (hh(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function AI(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: h,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      h && (r += `skewX(${h}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const OI = (e, t) => e.depth - t.depth;
class bI {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    dh(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    hh(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(OI),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function va(e) {
  const t = De(e) ? e.get() : e;
  return E2(t) ? t.toValue() : t;
}
function DI(e, t) {
  const n = Wt.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (Yn(r), e(i - t));
    };
  return ee.read(r, !0), () => Yn(r);
}
function II(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function LI(e, t, n) {
  const r = De(e) ? e : Xi(e);
  return r.start(fh("", r, t, n)), r.animation;
}
const lr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ci = typeof window < "u" && window.MotionDebug !== void 0,
  Hu = ["", "X", "Y", "Z"],
  FI = { visibility: "hidden" },
  Wg = 1e3;
let _I = 0;
function Gu(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function bS(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = uS(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ee, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && bS(r);
}
function DS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = _I++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            ci &&
              (lr.totalNodes =
                lr.resolvedTargetDeltas =
                lr.recalculatedProjection =
                  0),
            this.nodes.forEach(zI),
            this.nodes.forEach(HI),
            this.nodes.forEach(GI),
            this.nodes.forEach(UI),
            ci && window.MotionDebug.record(lr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new bI());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new mh()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = II(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = DI(d, 250)),
            ya.hasAnimatedSinceResize &&
              ((ya.hasAnimatedSinceResize = !1), this.nodes.forEach(Gg));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: h,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || QI,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } =
                  c.getProps(),
                p = !this.targetLayout || !OS(this.targetLayout, y) || h,
                w = !d && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                w ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, w);
                const S = { ...Qd(v, "layout"), onPlay: x, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || Gg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Yn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(KI),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          bS(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Hg);
        return;
      }
      this.isUpdating || this.nodes.forEach($I),
        (this.isUpdating = !1),
        this.nodes.forEach(WI),
        this.nodes.forEach(VI),
        this.nodes.forEach(jI),
        this.clearAllSnapshots();
      const a = Wt.now();
      (Te.delta = Zn(0, 1e3 / 60, a - Te.timestamp)),
        (Te.timestamp = a),
        (Te.isProcessing = !0),
        _u.update.process(Te),
        _u.preRender.process(Te),
        _u.render.process(Te),
        (Te.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), gh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(BI), this.sharedNodes.forEach(YI);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ee.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ee.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = me()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !AS(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || ar(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        XI(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return me();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(JI)
        )
      ) {
        const { scroll: c } = this.root;
        c && (to(l.x, c.offset.x), to(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = me();
      if (
        (ct(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && ct(l, s), to(l.x, f.offset.x), to(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = me();
      ct(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          no(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          ar(c.latestValues) && no(l, c.latestValues);
      }
      return ar(this.latestValues) && no(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = me();
      ct(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ar(u.latestValues)) continue;
        Cf(u.latestValues) && u.updateSnapshot();
        const c = me(),
          f = u.measurePageBox();
        ct(c, f),
          Vg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ar(this.latestValues) && Vg(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Te.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Te.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = me()),
              (this.relativeTargetOrigin = me()),
              Ei(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox,
              ),
              ct(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = me()), (this.targetWithTransforms = me())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                eI(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : ct(this.target, this.layout.layoutBox),
                  CS(this.target, this.targetDelta))
                : ct(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = me()),
                (this.relativeTargetOrigin = me()),
                Ei(this.relativeTargetOrigin, this.target, h.target),
                ct(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ci && lr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Cf(this.parent.latestValues) ||
          SS(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Te.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      ct(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        h = this.treeScale.y;
      uI(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = me()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Lg(this.prevProjectionDelta.x, this.projectionDelta.x),
          Lg(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ci(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== h ||
          !$g(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !$g(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        ci && lr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = eo()),
        (this.projectionDelta = eo()),
        (this.projectionDeltaWithTransform = eo());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = eo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = me(),
        h = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = h !== y,
        x = this.getStack(),
        m = !x || x.members.length <= 1,
        p = !!(v && !m && this.options.crossfade === !0 && !this.path.some(qI));
      this.animationProgress = 0;
      let w;
      (this.mixTargetDelta = (S) => {
        const E = S / 1e3;
        Kg(f.x, s.x, E),
          Kg(f.y, s.y, E),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ei(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ZI(this.relativeTarget, this.relativeTargetOrigin, d, E),
            w && NI(this.relativeTarget, w) && (this.isProjectionDirty = !1),
            w || (w = me()),
            ct(w, this.relativeTarget)),
          v &&
            ((this.animationValues = c), CI(c, u, this.latestValues, E, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Yn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ee.update(() => {
          (ya.hasAnimatedSinceResize = !0),
            (this.currentAnimation = LI(0, Wg, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Wg),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          IS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || me();
          const f = it(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = it(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        ct(a, l),
          no(a, c),
          Ci(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new RI()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Gu("z", s, u, this.animationValues);
      for (let c = 0; c < Hu.length; c++)
        Gu(`rotate${Hu[c]}`, s, u, this.animationValues),
          Gu(`skew${Hu[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return FI;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = va(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = va(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !ar(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = AI(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        c && (u.transform = c(d, u.transform));
      const { x: h, y } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
      for (const v in sl) {
        if (d[v] === void 0) continue;
        const { correct: x, applyTo: m } = sl[v],
          p = u.transform === "none" ? d[v] : x(d[v], f);
        if (m) {
          const w = m.length;
          for (let S = 0; S < w; S++) u[m[S]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? va(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Hg),
        this.root.sharedNodes.clear();
    }
  };
}
function VI(e) {
  e.updateLayout();
}
function jI(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? ft((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = it(d);
          (d.min = r[f].min), (d.max = d.min + h);
        })
      : IS(i, n.layoutBox, r) &&
        ft((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            h = it(r[f]);
          (d.max = d.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + h));
        });
    const a = eo();
    Ci(a, r, n.layoutBox);
    const l = eo();
    s ? Ci(l, e.applyTransform(o, !0), n.measuredBox) : Ci(l, r, n.layoutBox);
    const u = !AS(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: h } = f;
        if (d && h) {
          const y = me();
          Ei(y, n.layoutBox, d.layoutBox);
          const v = me();
          Ei(v, r, h.layoutBox),
            OS(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function zI(e) {
  ci && lr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function UI(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function BI(e) {
  e.clearSnapshot();
}
function Hg(e) {
  e.clearMeasurements();
}
function $I(e) {
  e.isLayoutDirty = !1;
}
function WI(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Gg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function HI(e) {
  e.resolveTargetDelta();
}
function GI(e) {
  e.calcProjection();
}
function KI(e) {
  e.resetSkewAndRotation();
}
function YI(e) {
  e.removeLeadSnapshot();
}
function Kg(e, t, n) {
  (e.translate = ae(t.translate, 0, n)),
    (e.scale = ae(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Yg(e, t, n, r) {
  (e.min = ae(t.min, n.min, r)), (e.max = ae(t.max, n.max, r));
}
function ZI(e, t, n, r) {
  Yg(e.x, t.x, n.x, r), Yg(e.y, t.y, n.y, r);
}
function qI(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const QI = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Zg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  qg = Zg("applewebkit/") && !Zg("chrome/") ? Math.round : Ie;
function Qg(e) {
  (e.min = qg(e.min)), (e.max = qg(e.max));
}
function XI(e) {
  Qg(e.x), Qg(e.y);
}
function IS(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !J2(Bg(t), Bg(n), 0.2))
  );
}
function JI(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const eL = DS({
    attachResizeListener: (e, t) => Jt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ku = { current: void 0 },
  LS = DS({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ku.current) {
        const e = new eL({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ku.current = e);
      }
      return Ku.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  tL = {
    pan: { Feature: pI },
    drag: { Feature: mI, ProjectionNode: LS, MeasureLayout: MS },
  };
function Xg(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    o = (i, s) => {
      if (i.pointerType === "touch" || yS()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && ee.postRender(() => l(i, s));
    };
  return on(e.current, n, o, { passive: !e.getProps()[r] });
}
class nL extends tr {
  mount() {
    this.unmount = rn(Xg(this.node, !0), Xg(this.node, !1));
  }
  unmount() {}
}
class rL extends tr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = rn(
      Jt(this.node.current, "focus", () => this.onFocus()),
      Jt(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const FS = (e, t) => (t ? (e === t ? !0 : FS(e, t.parentElement)) : !1);
function Yu(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Bl(n));
}
class oL extends tr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ie),
      (this.removeEndListeners = Ie),
      (this.removeAccessibleListeners = Ie),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = on(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !FS(this.node.current, a.target) ? c : u;
              d && ee.update(() => d(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          s = on(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = rn(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Yu("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ee.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Jt(this.node.current, "keyup", s)),
              Yu("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Jt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Yu("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = Jt(this.node.current, "blur", r);
        this.removeAccessibleListeners = rn(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ee.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !yS()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ee.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = on(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) },
      ),
      r = Jt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = rn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Tf = new WeakMap(),
  Zu = new WeakMap(),
  iL = (e) => {
    const t = Tf.get(e.target);
    t && t(e);
  },
  sL = (e) => {
    e.forEach(iL);
  };
function aL({ root: e, ...t }) {
  const n = e || document;
  Zu.has(n) || Zu.set(n, {});
  const r = Zu.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(sL, { root: e, ...t })), r[o];
}
function lL(e, t, n) {
  const r = aL(t);
  return (
    Tf.set(e, n),
    r.observe(e),
    () => {
      Tf.delete(e), r.unobserve(e);
    }
  );
}
const uL = { some: 0, all: 1 };
class cL extends tr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : uL[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return lL(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(fL(t, n)) && this.startObserver();
  }
  unmount() {}
}
function fL({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const dL = {
    inView: { Feature: cL },
    tap: { Feature: oL },
    focus: { Feature: rL },
    hover: { Feature: nL },
  },
  hL = { layout: { ProjectionNode: LS, MeasureLayout: MS } },
  _S = g.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  $l = g.createContext({}),
  yh = typeof window < "u",
  mL = yh ? g.useLayoutEffect : g.useEffect,
  VS = g.createContext({ strict: !1 });
function pL(e, t, n, r, o) {
  var i, s;
  const { visualElement: a } = g.useContext($l),
    l = g.useContext(VS),
    u = g.useContext(ph),
    c = g.useContext(_S).reducedMotion,
    f = g.useRef();
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    h = g.useContext(PS);
  d &&
    !d.projection &&
    o &&
    (d.type === "html" || d.type === "svg") &&
    gL(f.current, n, o, h),
    g.useInsertionEffect(() => {
      d && d.update(n, u);
    });
  const y = n[lS],
    v = g.useRef(
      !!y &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, y)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, y)),
    );
  return (
    mL(() => {
      d &&
        ((window.MotionIsMounted = !0),
        d.updateFeatures(),
        gh.render(d.render),
        v.current && d.animationState && d.animationState.animateChanges());
    }),
    g.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var x;
            (x = window.MotionHandoffMarkAsComplete) === null ||
              x === void 0 ||
              x.call(window, y);
          }),
          (v.current = !1)));
    }),
    d
  );
}
function gL(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : jS(e.parent),
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && Jr(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function jS(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : jS(e.parent);
}
function yL(e, t, n) {
  return g.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Jr(n) && (n.current = r));
    },
    [t],
  );
}
function Wl(e) {
  return Yi(e.animate) || qd.some((t) => Zi(e[t]));
}
function zS(e) {
  return !!(Wl(e) || e.variants);
}
function vL(e, t) {
  if (Wl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Zi(n) ? n : void 0,
      animate: Zi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function wL(e) {
  const { initial: t, animate: n } = vL(e, g.useContext($l));
  return g.useMemo(() => ({ initial: t, animate: n }), [Jg(t), Jg(n)]);
}
function Jg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ey = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Mo = {};
for (const e in ey) Mo[e] = { isEnabled: (t) => ey[e].some((n) => !!t[n]) };
function xL(e) {
  for (const t in e) Mo[t] = { ...Mo[t], ...e[t] };
}
const SL = Symbol.for("motionComponentSymbol");
function CL({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && xL(e);
  function i(a, l) {
    let u;
    const c = { ...g.useContext(_S), ...a, layoutId: EL(a) },
      { isStatic: f } = c,
      d = wL(a),
      h = r(a, f);
    if (!f && yh) {
      TL();
      const y = kL(c);
      (u = y.MeasureLayout),
        (d.visualElement = pL(o, h, c, t, y.ProjectionNode));
    }
    return C.jsxs($l.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? C.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(o, a, yL(h, d.visualElement, l), h, f, d.visualElement),
      ],
    });
  }
  const s = g.forwardRef(i);
  return (s[SL] = o), s;
}
function EL({ layoutId: e }) {
  const t = g.useContext(kS).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function TL(e, t) {
  g.useContext(VS).strict;
}
function kL(e) {
  const { drag: t, layout: n } = Mo;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const PL = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function vh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(PL.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function US(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const BS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function $S(e, t, n, r) {
  US(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(BS.has(o) ? o : Ul(o), t.attrs[o]);
}
function WS(e, { layout: t, layoutId: n }) {
  return (
    er.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!sl[e] || e === "opacity"))
  );
}
function wh(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (De(o[s]) ||
      (t.style && De(t.style[s])) ||
      WS(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return (
    n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i
  );
}
function HS(e, t, n) {
  const r = wh(e, t, n);
  for (const o in e)
    if (De(e[o]) || De(t[o])) {
      const i =
        ms.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function ML(e) {
  const t = g.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function NL(e) {
  if (er.has(e)) return "transform";
  if (oS.has(e)) return Ul(e);
}
function RL(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  o,
  i,
  s,
  a,
) {
  const l = { latestValues: AL(o, i, s, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (u) => r(o, u, l)), l;
}
const GS = (e) => (t, n) => {
  const r = g.useContext($l),
    o = g.useContext(ph),
    i = () => RL(e, t, r, o, n);
  return n ? i() : ML(i);
};
function ty(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = Yd(e, r[o]);
    if (i) {
      const { transitionEnd: s, transition: a, ...l } = i;
      n(l, s);
    }
  }
}
function AL(e, t, n, r, o) {
  var i;
  const s = {},
    a = new Set(),
    l =
      r &&
      ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) ===
        void 0,
    u = o(e, {});
  for (const x in u) s[x] = va(u[x]);
  let { initial: c, animate: f } = e;
  const d = Wl(e),
    h = zS(e);
  t &&
    h &&
    !d &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), f === void 0 && (f = t.animate));
  let y = n ? n.initial === !1 : !1;
  y = y || c === !1;
  const v = y ? f : c;
  return (
    v &&
      typeof v != "boolean" &&
      !Yi(v) &&
      ty(e, v, (x, m) => {
        for (const p in x) {
          let w = x[p];
          if (Array.isArray(w)) {
            const S = y ? w.length - 1 : 0;
            w = w[S];
          }
          w !== null && (s[p] = w);
        }
        for (const p in m) s[p] = m[p];
      }),
    l &&
      (f &&
        c !== !1 &&
        !Yi(f) &&
        ty(e, f, (x) => {
          for (const m in x) {
            const p = NL(m);
            p && a.add(p);
          }
        }),
      a.size && (s.willChange = Array.from(a).join(","))),
    s
  );
}
const xh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  KS = () => ({ ...xh(), attrs: {} }),
  YS = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  OL = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  bL = ms.length;
function DL(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < bL; i++) {
    const s = ms[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = YS(a, oh[s]);
      if (!l) {
        o = !1;
        const c = OL[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
function Sh(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (er.has(l)) {
      s = !0;
      continue;
    } else if (V1(l)) {
      o[l] = u;
      continue;
    } else {
      const c = YS(u, oh[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = DL(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function ny(e, t, n) {
  return typeof e == "string" ? e : F.transform(t + n * e);
}
function IL(e, t, n) {
  const r = ny(t, e.x, e.width),
    o = ny(n, e.y, e.height);
  return `${r} ${o}`;
}
const LL = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  FL = { offset: "strokeDashoffset", array: "strokeDasharray" };
function _L(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? LL : FL;
  e[i.offset] = F.transform(-r);
  const s = F.transform(t),
    a = F.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Ch(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
) {
  if ((Sh(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: h, dimensions: y } = e;
  d.transform && (y && (h.transform = d.transform), delete d.transform),
    y &&
      (o !== void 0 || i !== void 0 || h.transform) &&
      (h.transformOrigin = IL(
        y,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && _L(d, s, a, l, !1);
}
const Eh = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  VL = {
    useVisualState: GS({
      scrapeMotionValuesFromProps: HS,
      createRenderState: KS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ee.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ee.render(() => {
            Ch(n, r, Eh(t.tagName), e.transformTemplate), $S(t, n);
          });
      },
    }),
  },
  jL = {
    useVisualState: GS({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: wh,
      createRenderState: xh,
    }),
  };
function ZS(e, t, n) {
  for (const r in t) !De(t[r]) && !WS(r, n) && (e[r] = t[r]);
}
function zL({ transformTemplate: e }, t) {
  return g.useMemo(() => {
    const n = xh();
    return Sh(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function UL(e, t) {
  const n = e.style || {},
    r = {};
  return ZS(r, n, e), Object.assign(r, zL(e, t)), r;
}
function BL(e, t) {
  const n = {},
    r = UL(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const $L = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function al(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    $L.has(e)
  );
}
let qS = (e) => !al(e);
function WL(e) {
  e && (qS = (t) => (t.startsWith("on") ? !al(t) : e(t)));
}
try {
  WL(require("@emotion/is-prop-valid").default);
} catch {}
function HL(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((qS(o) ||
        (n === !0 && al(o)) ||
        (!t && !al(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function GL(e, t, n, r) {
  const o = g.useMemo(() => {
    const i = KS();
    return (
      Ch(i, t, Eh(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    ZS(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function KL(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (vh(n) ? GL : BL)(r, i, s, n),
      u = HL(r, typeof n == "string", e),
      c = n !== g.Fragment ? { ...u, ...l, ref: o } : {},
      { children: f } = r,
      d = g.useMemo(() => (De(f) ? f.get() : f), [f]);
    return g.createElement(n, { ...c, children: d });
  };
}
function YL(e, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...(vh(r) ? VL : jL),
      preloadedFeatures: e,
      useRender: KL(o),
      createVisualElement: t,
      Component: r,
    };
    return CL(s);
  };
}
const kf = { current: null },
  QS = { current: !1 };
function ZL() {
  if (((QS.current = !0), !!yh))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (kf.current = e.matches);
      e.addListener(t), t();
    } else kf.current = !1;
}
function qL(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (De(o)) e.addValue(r, o);
    else if (De(i)) e.addValue(r, Xi(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Xi(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const ry = new WeakMap(),
  QL = [...U1, Re, qn],
  XL = (e) => QL.find(z1(e)),
  oy = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class JL {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    a = {},
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = th),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = Wt.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), ee.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Wl(n)),
      (this.isVariantNode = zS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const d in f) {
      const h = f[d];
      l[d] !== void 0 && De(h) && h.set(l[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      ry.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      QS.current || ZL(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : kf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    ry.delete(this.current),
      this.projection && this.projection.unmount(),
      Yn(this.notifyUpdate),
      Yn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = er.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ee.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), i(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Mo) {
      const n = Mo[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : me();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < oy.length; r++) {
      const o = oy[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = qL(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Xi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (F1(o) || L1(o))
          ? (o = parseFloat(o))
          : !XL(o) && qn.test(n) && (o = Z1(t, n)),
        this.setBaseTarget(t, De(o) ? o.get() : o)),
      De(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = Yd(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !De(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mh()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class XS extends JL {
  constructor() {
    super(...arguments), (this.KeyframeResolver = q1);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function eF(e) {
  return window.getComputedStyle(e);
}
class tF extends XS {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = US);
  }
  readValueFromInstance(t, n) {
    if (er.has(n)) {
      const r = ih(n);
      return (r && r.default) || 0;
    } else {
      const r = eF(t),
        o = (V1(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ES(t, n);
  }
  build(t, n, r) {
    Sh(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return wh(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    De(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class nF extends XS {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = me);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (er.has(n)) {
      const r = ih(n);
      return (r && r.default) || 0;
    }
    return (n = BS.has(n) ? n : Ul(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return HS(t, n, r);
  }
  build(t, n, r) {
    Ch(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    $S(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Eh(t.tagName)), super.mount(t);
  }
}
const rF = (e, t) =>
    vh(e) ? new nF(t) : new tF(t, { allowProjection: e !== g.Fragment }),
  oF = YL({ ...W2, ...dL, ...tL, ...hL }, rF),
  iF = Fb(oF),
  sF =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAXNSR0IArs4c6QAACK1JREFUeF7tnU+IndUZh5+JIIJWN2LpBEWQBlz4ZxFTjVhaFKKQYEtojVoCI22Ci6AUK9lkm4U2RrMRo8gs6j+aIW260EWHiqKjCEGdTbAURFHxz8ZUMQ3oeE+5104TM3Pnfvd957v3PB9kEeaec97zvM/9ce53M18mWNl1PrAWuAr4OXAF8GPgPOCclU3lqyXwfwROAseBfwFvAbPAPPAB8G9goR9eE/28CDgXuKOz0C+Bq4EfAmv6HOvLJDAIgSLwR8DbwF+BJ4Ei/ZLXckKf1Xmn3NBJ4aeAyeUm8+cSCCTwCfAr4BXg6zOts5TQReD7gLuACwILdWoJ9EugHEmeAB7qHkVOG3cmoS8BngGu9WjRL2tfl0TgG+ANYBvw7qlrfp/QlwJ/Aq5PKtBlJDAIgXL0KJ/r3ls8+FShyx2MGeAng6zgGAkkE3i1e67+sLfuYqHLB8AHgHs9ZiS3xeUGJVCOH48Af+h9UFws9E+Bv3UO3OVes5cERoXA58AvgBdLwT2hzwbeBy4alV1YpwQWEShHjnWdpP6yCF3+7Ox8WfKoiCQwwgR2dL7FfrzIXI4YzwE3j/BmLF0Cz5dbeUXoy4G/+02gRow4gfI1+Y1F6F8Dzy46T4/4viy/UgLljsedRejHgHL+8JLAqBM4WIR+zS9SRr2P1t8lMFeE/hS4UCQSGAMCnxWh/wOU+9BeEhh1AieK0H39JsCo79T66yCg0HX0uZpdKnQ1ra5jowpdR5+r2aVCV9PqOjaq0HX0uZpdKnQ1ra5jowpdR5+r2aVCV9PqOjaq0HX0uZpdKnQ1ra5jowpdR5+r2aVCV9PqOjaq0HX0uZpdKnQ1ra5jowpdR5+r2aVCV9PqOjaq0HX0uZpdtkboyclJpqamhg5+fn6eI0eODH3eUZxw06ZNrF+/fuilz8zMcOzYsaHPO8iErRF6w4YNzM3NsWbNcP/rlunp6ZA3yiCwV3vMgQMH2LVr11DLWFhYYOvWrRw+fHio8w46mUIPSm4Exyl0YtNM6HjYCh3P+LsVFDoetkLHM1boRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQjbhI6HrdDxjE3oRMYKnQg7KqGPHj3KoUOHEnfS3qU2b97Mxo0bh1qgjwI7A84ooYfaPSc7jYBCK/RYvS0UWqEVOpDA2D99NJCdUwMmtAk9Vm8EhVZohQ4k4JEjEG4NU5vQJvRYea7QCq3QgQQ8cgTCrWFqE9qEHivPFVqhFTqQgEeOQLg1TG1Cm9Bj5blCK7RCBxLwyBEIt4apTWgTeqw8V2iFVuhAAmN/5JiZmWH37t2BCEdn6j179rB9+/ahFmxCJyf09PQ0U1NTQ23iqE7mL8kmdi7qdwoV+n9NVGiFTiQQv5RCxzP+bgUTOh62QsczVuhExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCNuEjoet0PGMTehExgqdCHvdunXs27ePiYmJoa46OzvL/v37hzrnqE62c+dOtmzZMtTyFxYW2Lt3L3Nzc0Odd9DJij0Lgw52nATaRkCh29YR62lEQKEb4XNw2wgodNs6Yj2NCCh0I3wObhsBhW5bR6ynEQGFboTPwW0joNBt64j1NCKg0I3wObhtBBS6bR2xnkYEFLoRPge3jYBCt60j1tOIgEI3wufgthFQ6LZ1xHoaEVDoRvgc3DYCCt22jlhPIwIK3Qifg9tGQKHb1hHraUSgCP0VcE6jWRwsgXYQOFmE/hS4sB31WIUEGhH4rAj9KnBdo2kcLIF2EHi9CP0YsKMd9ViFBBoROFiE3gY8BaxpNJWDJbC6BMrTC7YVoS8HZjtJ/aPVrcfVJdCIwIfATUXo84FngVsaTedgCawugReA23qPKfodcHB163F1CTQicHf5PNgT+lzgnY7Uk42mdLAEVofAJ8DFwH/vQ/eunwF/AS5YnZpcVQIDETgOlAf2vVRGLxb6LOBB4B7veAwE1kH5BL4BHgbuB74+Vejy93Lk+DOwMb82V5TAigm8DmwFPuiN/L5n114CPA1cv+LpHSCBPAKvAL8B3l285Jkexnxp91beNR4/8jrkSn0RKMeM14DbgfdOHbHU08XXAr8Hftu9V93Xar5IAoEEPgeeBP7Y+eca5YuU066lhC4vLh8Uy9GjnKsvCizUqSWwHIEi8J3Ay70PgIMI3Rtzdife7wJuBa7sfk2+3JthuQL9uQSWIlCOFh8DbwKHu5/rvlwO2UqkLK/9AVCOIld03ik3dha6CriseyQp0ntJYFACJ4AvOin8z86di3ngH8Bb3TsY5V5zX9e36c7qIgrZObgAAAAASUVORK5CYII=",
  aF = () =>
    C.jsx("header", {
      className: "w-full dark:bg-black/40 bg-muted border-b-[1px]",
      children: C.jsxs("div", {
        className: "max-w-5xl mx-auto pt-8 px-4 lg:px-0 flex flex-col gap-4",
        children: [
          C.jsxs("section", {
            className: "flex items-center justify-between",
            children: [
              C.jsxs("section", {
                className: "flex items-center text-base font-medium",
                children: [
                  C.jsx("div", {
                    className: "mr-1 flex flex-row items-center justify-start",
                    children: C.jsx("img", {
                      width: 40,
                      height: 40,
                      alt: "apple-touch-icon",
                      src: sF,
                      className:
                        "relative !m-0 border-2 border-transparent h-6 w-6 object-cover object-top !p-0",
                    }),
                  }),
                  "Nezha-Dashboard",
                ],
              }),
              C.jsx("section", {
                className: "flex items-center gap-2",
                children: C.jsx(DA, {}),
              }),
            ],
          }),
          C.jsx(uF, {}),
          C.jsx(cF, {}),
        ],
      }),
    }),
  lF = (e, t) => {
    const n = g.useRef(() => {});
    g.useEffect(() => {
      n.current = e;
    }),
      g.useEffect(() => {
        {
          const r = setInterval(() => n.current(), t);
          return () => clearInterval(r);
        }
      }, [t]);
  };
function uF() {
  const { user: e, signout: t } = Ok(),
    n = _.TIME_SIMPLE;
  n.hour12 = !0;
  const [r, o] = g.useState(_.now().setLocale("en-US").toLocaleString(n));
  return (
    lF(() => {
      o(_.now().setLocale("en-US").toLocaleString(n));
    }, 1e3),
    C.jsxs("section", {
      className: "flex flex-col",
      children: [
        e &&
          C.jsxs("div", {
            className: "flex items-center gap-1.5",
            children: [
              C.jsxs("p", {
                className: "text-sm font-semibold",
                children: ["👋 晚上好, ", e == null ? void 0 : e.name],
              }),
              C.jsx("p", {
                className: "text-xs font-semibold underline cursor-pointer",
                onClick: t,
                children: "注销",
              }),
            ],
          }),
        !e &&
          C.jsx("p", {
            className: "text-sm font-semibold",
            children: "请先登录",
          }),
        C.jsxs("div", {
          className: "flex items-center gap-1.5",
          children: [
            C.jsx("p", {
              className: "text-[13px] font-medium opacity-50",
              children: "当前时间",
            }),
            C.jsx("p", {
              className: "opacity-1 text-[13px] font-medium",
              children: r,
            }),
          ],
        }),
      ],
    })
  );
}
function cF() {
  const e = Lb,
    t = is(),
    [n, r] = g.useState(""),
    o = t.pathname;
  return (
    g.useEffect(() => {
      r(o);
    }, [o]),
    C.jsx("div", {
      className:
        "z-50 flex flex-col items-start w-full overflow-x-scroll scrollbar-hidden",
      children: C.jsx("div", {
        className: "flex items-center gap-1",
        children: e.map((i) =>
          C.jsxs(
            Nk,
            {
              to: i.path,
              className: Lt(
                "relative cursor-pointer rounded-3xl px-2.5 py-[8px] text-sm font-[600] transition-all duration-500",
                n === i.path
                  ? "text-black dark:text-white"
                  : "text-stone-400 dark:text-stone-500",
              ),
              children: [
                C.jsx("div", {
                  className: "relative z-20 flex items-center gap-1",
                  children: C.jsx("p", {
                    className: "whitespace-nowrap",
                    children: i.name,
                  }),
                }),
                n === i.path &&
                  C.jsx(iF.div, {
                    layoutId: "tab-underline",
                    className:
                      "absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white",
                  }),
              ],
            },
            i.name,
          ),
        ),
      }),
    })
  );
}
const fF = () =>
  C.jsx("footer", {
    className: "mx-auto w-full max-w-5xl px-4 lg:px-0 pb-4",
    children: C.jsx("section", {
      className: "flex flex-col",
      children: C.jsxs("section", {
        className:
          "mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50",
        children: [
          "©2020-",
          new Date().getFullYear(),
          " ",
          C.jsx("a", {
            href: "https://nezha.wiki",
            target: "_blank",
            children: "Nezha",
          }),
        ],
      }),
    }),
  });
function dF() {
  return C.jsx("div", {
    className: "mx-auto w-full max-w-5xl px-4 lg:px-0",
    children: C.jsx("div", {
      className: "flex justify-between mb-4 mt-4 items-center",
      children: C.jsxs("section", {
        className: "flex flex-col gap-2",
        children: [
          C.jsx("h2", {
            className:
              "mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors",
            children: "服务",
          }),
          C.jsxs("p", {
            className: "text-sm font-medium",
            children: [
              "你可以在这里查看和管理全部的监控服务。",
              C.jsx("a", {
                href: "#",
                className:
                  "font-medium text-primary underline underline-offset-4",
                children: "了解更多↗",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function hF() {
  return C.jsx("div", {
    className: "mx-auto w-full max-w-5xl px-4 lg:px-0",
    children: C.jsxs("div", {
      className: "flex justify-between mb-4 mt-4 items-center",
      children: [
        C.jsxs("section", {
          className: "flex flex-col gap-2",
          children: [
            C.jsx("h2", {
              className:
                "mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors",
              children: "服务器",
            }),
            C.jsxs("p", {
              className: "text-sm font-medium",
              children: [
                "你可以在这里查看和管理全部的服务器。",
                C.jsx("a", {
                  href: "#",
                  className:
                    "font-medium text-primary underline underline-offset-4",
                  children: "了解更多↗",
                }),
              ],
            }),
          ],
        }),
        C.jsxs(Ed, {
          className: "px-2 py-1 rounded-[8px] h-fit flex items-center gap-1",
          children: [C.jsx(jk, { className: "size-4" }), "新增服务器"],
        }),
      ],
    }),
  });
}
function mF() {
  return C.jsx("div", {
    className: "mx-auto w-full max-w-5xl px-4 lg:px-0",
    children: C.jsx("div", {
      className: "flex justify-between mb-4 mt-4 items-center",
      children: C.jsxs("section", {
        className: "flex flex-col gap-2",
        children: [
          C.jsx("h2", {
            className:
              "mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors",
            children: "设置",
          }),
          C.jsxs("p", {
            className: "text-sm font-medium",
            children: [
              "你可以在这里对哪吒面板进行设置。",
              C.jsx("a", {
                href: "#",
                className:
                  "font-medium text-primary underline underline-offset-4",
                children: "了解更多↗",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function pF() {
  return C.jsx("div", {
    className: "mx-auto w-full max-w-5xl px-4 lg:px-0",
    children: C.jsx("div", {
      className: "flex justify-between mb-4 mt-4 items-center",
      children: C.jsxs("section", {
        className: "flex flex-col gap-2",
        children: [
          C.jsx("h2", {
            className:
              "mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors",
            children: "任务",
          }),
          C.jsxs("p", {
            className: "text-sm font-medium",
            children: [
              "你可以在这里查看和管理全部的任务。",
              C.jsx("a", {
                href: "#",
                className:
                  "font-medium text-primary underline underline-offset-4",
                children: "了解更多↗",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function gF() {
  return C.jsx("div", {
    className: "mx-auto w-full max-w-5xl px-4 lg:px-0",
    children: C.jsx("div", {
      className: "flex justify-between mb-4 mt-4 items-center",
      children: C.jsxs("section", {
        className: "flex flex-col gap-2",
        children: [
          C.jsx("h2", {
            className:
              "mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors",
            children: "用户",
          }),
          C.jsxs("p", {
            className: "text-sm font-medium",
            children: [
              "你可以在这里查看和管理全部的用户。",
              C.jsx("a", {
                href: "#",
                className:
                  "font-medium text-primary underline underline-offset-4",
                children: "了解更多↗",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function yF() {
  return C.jsx("div", {
    className: "mx-auto w-full max-w-5xl px-4 lg:px-0",
    children: C.jsx("div", {
      className: "flex justify-between mb-4 mt-4 items-center",
      children: C.jsxs("section", {
        className: "flex flex-col gap-2",
        children: [
          C.jsx("h2", {
            className:
              "mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors",
            children: "告警",
          }),
          C.jsxs("p", {
            className: "text-sm font-medium",
            children: [
              "你可以在这里查看和管理全部的告警规则。",
              C.jsx("a", {
                href: "#",
                className:
                  "font-medium text-primary underline underline-offset-4",
                children: "了解更多↗",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function vF() {
  return C.jsx("div", {
    className: "mx-auto w-full max-w-5xl px-4 lg:px-0",
    children: C.jsx("div", {
      className: "flex justify-between mb-4 mt-4 items-center",
      children: C.jsxs("section", {
        className: "flex flex-col gap-2",
        children: [
          C.jsx("h2", {
            className:
              "mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors",
            children: "内网穿透",
          }),
          C.jsxs("p", {
            className: "text-sm font-medium",
            children: [
              "你可以在这里查看和管理全部的内网穿透服务。",
              C.jsx("a", {
                href: "#",
                className:
                  "font-medium text-primary underline underline-offset-4",
                children: "了解更多↗",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const wF = () =>
  C.jsx(kk, {
    basename: "/dashboard/",
    children: C.jsx("div", {
      className: Lt("min-h-screen font-sans antialiased flex w-full flex-col"),
      children: C.jsxs("main", {
        className:
          "flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 bg-muted/50 flex-col gap-4",
        children: [
          C.jsx(aF, {}),
          C.jsxs(vk, {
            children: [
              C.jsx(xn, { path: "/", element: C.jsx(hF, {}) }),
              C.jsx(xn, { path: "/service", element: C.jsx(dF, {}) }),
              C.jsx(xn, { path: "/task", element: C.jsx(pF, {}) }),
              C.jsx(xn, { path: "/alarm", element: C.jsx(yF, {}) }),
              C.jsx(xn, { path: "/intranet", element: C.jsx(vF, {}) }),
              C.jsx(xn, { path: "/setting", element: C.jsx(mF, {}) }),
              C.jsx(xn, { path: "/user", element: C.jsx(gF, {}) }),
            ],
          }),
          C.jsx(fF, {}),
        ],
      }),
    }),
  });
qu.createRoot(document.getElementById("root")).render(
  C.jsx(Yt.StrictMode, {
    children: C.jsx(Ak, {
      children: C.jsx(OA, {
        defaultTheme: "dark",
        storageKey: "vite-ui-theme",
        children: C.jsx(wF, {}),
      }),
    }),
  }),
);
