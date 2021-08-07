"use strict";
// import { Monad, isMonad, map, inspect } from './Internals';
// import { add } from './Basics';
// interface Result<E, A> extends Monad<A> { }
// function Ok<E, A> (val: A): Result<E, A> {
//     return {
//         map (fn) {
//             return Ok(fn(val));
//         },
//         inspect () {
//             return `Ok(${inspect(val)})`;
//         },
//         join () {
//             return isMonad(val) ? val : this;
//         }
//     }
// }
// function Err<E, A> (error: E): Result<E, A> {
//     return {
//         map (_) {
//             return this
//         },
//         inspect () {
//             return `Err(${inspect(error)})`
//         },
//         join () {
//             return this
//         }
//     }
// }
// const okResult = Ok(5);
// const newResult = okResult.map(add(1)).map(add(2)).map((val) => Ok(val)).join();
// // console.log(newResult.inspect())
//# sourceMappingURL=Result.js.map