export interface Functor<A> {
    map<B>(fn: (a: A) => B): Functor<B>;
    inspect(): string;
}
export interface Monad<T> extends Functor<T> {
    join(): Monad<T>;
}
export declare function isMonad<T>(arg: any): arg is Monad<T>;
export declare function pipe(...fns: Function[]): (val: any) => Function;
export declare function map(fn: any): (functor: any) => any;
export declare function map2<X, Y>(fn: (a: X) => Y): <F1 extends Functor<X>, F2 extends Functor<Y>>(functor: F1) => F2;
export declare function inspect(x: any): any;
