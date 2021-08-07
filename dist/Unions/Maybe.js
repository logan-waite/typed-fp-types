"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = exports.map = exports.withDefault = exports.inspect = void 0;
function Just(val) {
    return {
        state: 'Just',
        value: val
    };
}
function Nothing() {
    return {
        state: 'Nothing'
    };
}
function isMaybe(maybe) {
    return maybe.state && (maybe.state === 'Nothing' || maybe.state === 'Just');
}
function isNothing(maybe) {
    return maybe.state === "Nothing";
}
function inspect(maybe) {
    switch (maybe.state) {
        case 'Nothing':
            return 'Nothing';
        case 'Just':
            return "Just(" + (isMaybe(maybe.value) ? inspect(maybe.value) : maybe.value) + ")";
    }
}
exports.inspect = inspect;
function withDefault(fallback, maybe) {
    return isNothing(maybe) ? fallback : maybe.value;
}
exports.withDefault = withDefault;
function map(fn, maybe) {
    return isNothing(maybe) ? Nothing() : Just(fn(maybe.value));
}
exports.map = map;
function join(maybe) {
    return isNothing(maybe) ? Nothing() : maybe.value;
}
function chain(fn, maybe) {
    return join(map(fn, maybe));
}
exports.chain = chain;
// const increment = (a: number): number => a + 1;
// const lessThan10 = (v: number): Maybe<number> => v < 10 ? Just(v) : Nothing();
//# sourceMappingURL=Maybe.js.map