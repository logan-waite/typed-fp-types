// import { pipe as _pipe } from 'lodash/fp/pipe';
export type Length<T extends any[]> = T extends { length: infer L } ? L : never;

export type DropFirst<T extends any[]> = ((...args: T) => any) extends (arg: any, ...rest: infer U) => any ? U : T;

export type Last<T extends any[]> = T[Length<DropFirst<T>>];

export type Head<T extends any[]> =
    T extends [any, ...any[]]
    ? T[0]
    : never

export function pipe<T extends Parameters<(...args: any[]) => any>> (...fns: T) {
    return function (x: Head<Parameters<Head<T>>>): ReturnType<Last<T>> {
        return fns.reduce((y, fn) => fn(y), x);
    }
};