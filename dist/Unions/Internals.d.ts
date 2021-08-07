export declare type Length<T extends any[]> = T extends {
    length: infer L;
} ? L : never;
export declare type DropFirst<T extends any[]> = ((...args: T) => any) extends (arg: any, ...rest: infer U) => any ? U : T;
export declare type Last<T extends any[]> = T[Length<DropFirst<T>>];
export declare type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
export declare function pipe<T extends Parameters<(...args: any[]) => any>>(...fns: T): (x: Head<Parameters<Head<T>>>) => ReturnType<Last<T>>;
