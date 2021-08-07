"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (x) {
        return fns.reduce(function (y, fn) { return fn(y); }, x);
    };
}
exports.pipe = pipe;
;
//# sourceMappingURL=Internals.js.map