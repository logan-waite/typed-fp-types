declare type Ok<A> = {
    state: 'Ok';
    value: A;
};
declare type Err<E> = {
    state: 'Err';
    error: E;
};
declare type Result<E, A> = Ok<A> | Err<E>;
export declare function Ok<A>(x: A): Ok<A>;
export declare function Err<E>(err: E): Err<E>;
export declare function inspect<E, A>(result: Result<E, A>): string;
export declare function map<A, B, E>(fn: (a: A) => B, result: Result<E, A>): Result<E, B>;
export declare function chain<A, B, X, Y>(fn: (a: A) => Result<X, B>, result: Result<Y, A>): Result<Y | X, B>;
export {};
