//https://github.com/lazarljubenovic/type-guards

type Guard<T> = (input: any) => input is T;

export type BasicString =
  | "string"
  | "boolean"
  | "number"
  | "object"
  | "function"
  | "symbol";
export type Primitive = string | boolean | number | symbol;
export type Basic = Primitive | object | Function;
export type StringToBasic<T extends BasicString> = T extends "string"
  ? string
  : T extends "number"
  ? number
  : T extends "boolean"
  ? boolean
  : T extends "function"
  ? Function
  : T extends "object"
  ? object
  : T extends "symbol"
  ? symbol
  : never;

function isOfBasicType<T extends BasicString>(
  basicString: T
): Guard<StringToBasic<T>> {
  return ((input: any) => typeof input == basicString) as Guard<
    StringToBasic<T>
  >;
}

export const isFunction = isOfBasicType("function");
