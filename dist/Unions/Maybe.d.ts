declare type Just<A> = {
    state: 'Just';
    value: A;
};
declare type Nothing = {
    state: 'Nothing';
};
declare type Maybe<A> = Just<A> | Nothing;
declare function Just<A>(val: A): Just<A>;
declare function Nothing(): Nothing;
export declare function inspect<T>(maybe: Maybe<T>): string;
export declare function withDefault<T>(fallback: T, maybe: Maybe<T>): T;
export declare function map<A, B>(fn: (a: A) => B, maybe: Maybe<A>): Maybe<B>;
export declare function chain<A, B>(fn: (a: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>;
export {};
