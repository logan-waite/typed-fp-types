"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspect = exports.map2 = exports.map = exports.pipe = exports.isMonad = void 0;
function isMonad(arg) {
    return arg.join !== undefined;
}
exports.isMonad = isMonad;
// -------------------------------------------
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function $pipe(val) {
        return fns.reduce(function (result, fn) { return fn(result); });
    };
}
exports.pipe = pipe;
function map(fn) {
    return function $map(functor) {
        return functor.map(fn);
    };
}
exports.map = map;
// map : (a -> b) -> Functor a -> Functor b
function map2(fn) {
    return function $map(functor) {
        return functor.map(fn);
    };
}
exports.map2 = map2;
function inspect(x) {
    if (x && typeof x.inspect === 'function') {
        return x.inspect();
    }
    function inspectFn(f) {
        return f.name ? f.name : f.toString();
    }
    function inspectTerm(t) {
        switch (typeof t) {
            case 'string':
                return "'" + t + "'";
            case 'object': {
                var ts = Object.keys(t).map(function (k) { return [k, inspect(t[k])]; });
                return "{" + ts.map(function (kv) { return kv.join(': '); }).join(', ') + "}";
            }
            default:
                return String(t);
        }
    }
    function inspectArgs(args) {
        return Array.isArray(args) ? "[" + args.map(inspect).join(', ') + "]" : inspectTerm(args);
    }
    return (typeof x === 'function') ? inspectFn(x) : inspectArgs(x);
}
exports.inspect = inspect;
;
//# sourceMappingURL=Internals.js.map