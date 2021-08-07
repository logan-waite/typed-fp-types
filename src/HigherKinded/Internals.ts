type InferFunctorM<F> = F extends Functor<infer As> ? As : never;

export interface Functor<A> {
    map<B> (fn: (a: A) => B): Functor<B>;
    inspect (): string;
}

export interface Monad<T> extends Functor<T> {
    join (): Monad<T>
}


export function isMonad<T> (arg: any): arg is Monad<T> {
    return arg.join !== undefined
}

// -------------------------------------------
export function pipe (...fns: Function[]) {
    return function $pipe (val: any) {
        return fns.reduce((result, fn) => fn(result));
    }
}

export function map (fn) {
    return function $map (functor) {
        return functor.map(fn)
    }
}

// map : (a -> b) -> Functor a -> Functor b
export function map2<X, Y> (fn: (a: X) => Y) {
    return function $map<F1 extends Functor<X>, F2 extends Functor<Y>> (functor: F1): F2 {
        return functor.map(fn) as F2;
    }
}


export function inspect (x) {
    if (x && typeof x.inspect === 'function') {
        return x.inspect();
    }

    function inspectFn (f) {
        return f.name ? f.name : f.toString();
    }

    function inspectTerm (t) {
        switch (typeof t) {
            case 'string':
                return `'${t}'`;
            case 'object': {
                const ts = Object.keys(t).map(k => [k, inspect(t[k])]);
                return `{${ts.map(kv => kv.join(': ')).join(', ')}}`;
            }
            default:
                return String(t);
        }
    }

    function inspectArgs (args) {
        return Array.isArray(args) ? `[${args.map(inspect).join(', ')}]` : inspectTerm(args);
    }

    return (typeof x === 'function') ? inspectFn(x) : inspectArgs(x);
};