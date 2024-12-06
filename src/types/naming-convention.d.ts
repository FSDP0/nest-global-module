type CapitalizeWord<S extends string> = Capitalize<S>;

type UnCapitalizeWord<S extends string> = Uncapitalize<S>;

declare namespace SnakeCase {
  type CamelCase<S extends string> = S extends `${infer F}_${infer R}`
    ? `${Lowercase<F>}${Capitalize<CamelCase<R>>}`
    : S;

  type PascalCase<S extends string> = S extends `${infer F}_${infer R}`
    ? `${Capitalize<F>}${Capitalize<CamelCase<R>>}`
    : S;

  type KebabCase<S extends string> = S extends `${infer F}_${infer R}` ? `${F}-${R}` : S;

  type Camelize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Camelize<TI>>
      : T extends object
        ? {
            [K in keyof T as CamelCase<K>]: Camelize<T[K]>;
          }
        : T;

  type Pascalize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Pascalize<TI>>
      : T extends object
        ? {
            [K in keyof T as PascalCase<K>]: Pascalize<T[K]>;
          }
        : T;

  type Kebablize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Kebablize<TI>>
      : T extends object
        ? {
            [K in keyof T as KebabCase<K>]: Kebablize<T[K]>;
          }
        : T;
}

declare namespace KebabCase {
  type CamelCase<S extends string> = S extends `${infer F}-${infer R}`
    ? `${Lowercase<F>}${Capitalize<CamelCase<R>>}`
    : S;

  type PascalCase<S extends string> = S extends `${infer F}-${infer R}`
    ? `${Capitalize<F>}${Capitalize<CamelCase<R>>}`
    : S;

  type SnakeCase<S extends string> = S extends `${infer F}-${infer R}` ? `${F}_${R}` : S;

  type Camelize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Camelize<TI>>
      : T extends object
        ? {
            [K in keyof T as CamelCase<K>]: Camelize<T[K]>;
          }
        : T;

  type Pascalize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Pascalize<TI>>
      : T extends object
        ? {
            [K in keyof T as PascalCase<K>]: Pascalize<T[K]>;
          }
        : T;

  type Snakelize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Kebablize<TI>>
      : T extends object
        ? {
            [K in keyof T as SnakeCase<K>]: Kebablize<T[K]>;
          }
        : T;
}

declare namespace CamelCase {
  type PascalCase<S extends string> = Capitalize<S>;

  type SnakeCase<S extends string> =
    S extends `${infer F extends UnCapitalizeWord}${infer R extends CapitalizeWord}`
      ? `${Lowercase<F>}_${SnakeCase<R>}`
      : S;

  type KebabCase<S extends string> =
    S extends `${infer F extends UnCapitalizeWord}${infer R extends CapitalizeWord}`
      ? `${Lowercase<F>}-${KebabCase<R>}`
      : S;

  type Pascalize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Pascalize<TI>>
      : T extends object
        ? {
            [K in keyof T as PascalCase<K>]: Pascalize<T[K]>;
          }
        : T;

  type Snakelize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Snakelize<TI>>
      : T extends object
        ? {
            [K in keyof T as SnakeCase<K>]: Snakelize<T[K]>;
          }
        : T;

  type Kebablize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Kebablize<TI>>
      : T extends object
        ? {
            [K in keyof T as KebabCase<K>]: Snakelize<T[K]>;
          }
        : T;
}

declare namespace PascalCase {
  type CamelCase<S extends string> = Uncapitalize<S>;

  type SnakeCase<S extends string> =
    S extends `${infer F extends CapitalizeWord}${infer R extends CapitalizeWord}`
      ? `${Lowercase<F>}_${SnakeCase<R>}`
      : S;

  type KebabCase<S extends string> =
    S extends `${infer F extends CapitalizeWord}${infer R extends CapitalizeWord}`
      ? `${Lowercase<F>}-${KebabCase<R>}`
      : S;

  type Camelize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Camelize<TI>>
      : T extends object
        ? {
            [K in keyof T as CamelCase<K>]: Camelize<T[K]>;
          }
        : T;

  type Snakelize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Snakelize<TI>>
      : T extends object
        ? {
            [K in keyof T as SnakeCase<K>]: Snakelize<T[K]>;
          }
        : T;

  type Kebablize<T extends string | object | Array<T>> =
    T extends Array<infer TI extends T>
      ? Array<Kebablize<TI>>
      : T extends object
        ? {
            [K in keyof T as KebabCase<K>]: Kebablize<T[K]>;
          }
        : T;
}
