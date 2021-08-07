type Ok<A> = {
    state: 'Ok',
    value: A
};

type Err<E> = {
    state: 'Err',
    error: E
};

type Result<E, A> = Ok<A> | Err<E>;

export function Ok<A> (x: A): Ok<A> {
    return {
        state: 'Ok',
        value: x
    }
};

export function Err<E> (err: E): Err<E> {
    return {
        state: 'Err',
        error: err
    }
}

function isResult<E, A> (r: any): r is Result<E, A> {
    return r.state && (r.state === 'Ok' || r.state === 'Err');
}

export function inspect<E, A> (result: Result<E, A>): string {
    switch (result.state) {
        case 'Err':
            return `Err(${result.error})`;
        case 'Ok':
            return `Ok(${isResult(result.value) ? inspect(result.value) : result.value})`;
    }
}

export function map<A, B, E> (fn: (a: A) => B, result: Result<E, A>): Result<E, B> {
    return result.state === 'Ok' ? Ok(fn(result.value)) : result;
}

function join<E, A> (result: Result<E, A>): Err<E> | A {
    switch (result.state) {
        case 'Err':
            return result
        case 'Ok':
            return result.value
    }
}

export function chain<A, B, X, Y> (fn: (a: A) => Result<Y, B>, result: Result<X, A>): Result<X | Y, B> {
    return join(map(fn, result));
}

export function extract<E, A> (extractor: (e: E) => A, result: Result<E, A>): A {
    switch (result.state) {
        case 'Err':
            return extractor(result.error);
        case 'Ok':
            return result.value;
    }
}

export function mapError<E, F, A> (fn: (e: E) => F, result: Result<E, A>): Result<F, A> {
    switch (result.state) {
        case 'Err':
            return Err(fn(result.error));
        case 'Ok':
            return result;
    }
}

const lessThan5 = (a: number) => a < 5 ? Ok(a) : Err("number is greater than 5");
const ok = Ok(5);
const newVal = chain(lessThan5, map((a: number) => a + 1, ok));
