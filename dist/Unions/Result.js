"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = exports.map = exports.inspect = exports.Err = exports.Ok = void 0;
function Ok(x) {
    return {
        state: 'Ok',
        value: x
    };
}
exports.Ok = Ok;
;
function Err(err) {
    return {
        state: 'Err',
        error: err
    };
}
exports.Err = Err;
function isResult(r) {
    return r.state && (r.state === 'Ok' || r.state === 'Err');
}
function inspect(result) {
    switch (result.state) {
        case 'Err':
            return "Err(" + result.error + ")";
        case 'Ok':
            return "Ok(" + (isResult(result.value) ? inspect(result.value) : result.value) + ")";
    }
}
exports.inspect = inspect;
function map(fn, result) {
    return result.state === 'Ok' ? Ok(fn(result.value)) : result;
}
exports.map = map;
// function map2<A, B> (fn: (a: A) => B) {
//     return function $map2<E> (result: Result<E, A>): Result<E, B> {
//         return result.state === 'Ok' ? Ok(fn(result.value)) : result;
//     }
// }
function join(result) {
    switch (result.state) {
        case 'Err':
            return result;
        case 'Ok':
            return result.value;
    }
}
function chain(fn, result) {
    return join(map(fn, result));
}
exports.chain = chain;
//# sourceMappingURL=Result.js.map