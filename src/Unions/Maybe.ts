type Just<A> = {
    state: 'Just',
    value: A
}

type Nothing = {
    state: 'Nothing'
}

type Maybe<A> = Just<A>
    | Nothing

function Just<A> (val: A): Just<A> {
    return {
        state: 'Just',
        value: val
    }
}

function Nothing (): Nothing {
    return {
        state: 'Nothing'
    }
}

function isMaybe<A> (maybe: any): maybe is Maybe<A> {
    return maybe.state && (maybe.state === 'Nothing' || maybe.state === 'Just');
}

function isNothing<A> (maybe: Maybe<A>): maybe is Nothing {
    return maybe.state === "Nothing";
}

export function inspect<T> (maybe: Maybe<T>): string {
    switch (maybe.state) {
        case 'Nothing':
            return 'Nothing'
        case 'Just':
            return `Just(${isMaybe(maybe.value) ? inspect(maybe.value) : maybe.value})`;
    }
}

export function withDefault<T> (fallback: T, maybe: Maybe<T>): T {
    return isNothing(maybe) ? fallback : maybe.value;
}

export function map<A, B> (fn: (a: A) => B, maybe: Maybe<A>): Maybe<B> {
    return isNothing(maybe) ? Nothing() : Just(fn(maybe.value));
}

function join<T> (maybe: Maybe<T>): Nothing | T {
    return isNothing(maybe) ? Nothing() : maybe.value;
}

export function chain<A, B> (fn: (a: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B> {
    return join(map(fn, maybe));
}

// const increment = (a: number): number => a + 1;
// const lessThan10 = (v: number): Maybe<number> => v < 10 ? Just(v) : Nothing();


