interface Result<A, E> {
    map<B> (fn: (a: A) => B): Result<B, E>;
    mapErr<F> (fn: (e: E) => F): Result<A, F>;
    isOk (): boolean;
    isErr (): boolean;
}