//https://github.com/lazarljubenovic/type-guards

type Guard<T> = (input: any) => input is T;
type TypeString =
  | "string"
  | "boolean"
  | "number"
  | "object"
  | "function"
  | "symbol";
type StringToType<T extends TypeString> = T extends "string"
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

function isOfBasicType<T extends TypeString>(
  basicString: T
): Guard<StringToType<T>> {
  return ((input: any) => typeof input == basicString) as Guard<
    StringToType<T>
  >;
}

export const isFunction = isOfBasicType("function");
