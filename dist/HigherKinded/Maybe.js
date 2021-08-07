"use strict";
// import { Monad, isMonad, map, map2, inspect } from './Internals'
// import { add } from './Basics'
// interface Maybe<T> extends Monad<T> {
//     isNothing: boolean;
// }
// function Maybe<A> (val: A): Maybe<A> {
//     return {
//         get isNothing () {
//             return val == null
//         },
//         map (fn) {
//             return this.isNothing ? Maybe(val) : Maybe(fn(val))
//         },
//         inspect () {
//             return this.isNothing ? "Nothing" : `Just(${inspect(val)})`
//         },
//         join () {
//             return this.isNothing ? this
//                 : isMonad(val) ? val
//                     : this
//         }
//     }
// }
// const changeToNull = (_) => null
// const addLayer = (val) => Maybe(val);
// const maybe = Maybe(5);
// const nMaybe = map2(add(1))(Maybe(5));
// const newMaybe = map(add(1))(map(add(1))(map(add(1))(maybe)));
// console.log(newMaybe.inspect());
//# sourceMappingURL=Maybe.js.map