import { add } from './Basics'

interface Maybe<A> {
    state: 'Just';
    map<B> (fn: (a: A) => B): Maybe<B>;
    inspect(): string;
    join: Function;
    isNothing: boolean;
}

function Maybe<T> (val: T): Maybe<T> {
    return {
        get isNothing () {
            return val == null
        },
        map (fn) {
            return this.isNothing ? Maybe(null) : Maybe(fn(val))
        },
        inspect () {
            return this.isNothing ? "Nothing" : `Just(${inspect(val)})`
        },
        join () {
            return this.isNothing ? this
                : isMonad(val) ? val
                    : this
        }
    }
}

const changeToNull = (_) => null
const addLayer = (val) => Maybe(val);
const maybe = Maybe(5);
const nMaybe = map2(add(1))(Maybe(5));
const newMaybe = map(add(1))(map(add(1))(map(add(1))(maybe)));
console.log(newMaybe.inspect());