export type None = { type: "none" };
export type Some<T> = { type: "some"; value: T };

export type Option<T> = None | Some<T>;

const some = <T>(value: T): Some<T> => ({ type: "some", value });
const none: None = { type: "none" };
// create

export function OptionalCatch<T>(fn: () => T): Option<T> {
  try {
    return { type: "some", value: fn() };
  } catch (e) {
    return { type: "none" };
  }
}

export async function optionalResolve<T>(promise: Promise<T>): Promise<Option<T>> {
  try {
    return some(await promise);
  } catch (e) {
    return none;
  }
}

export function OptionalMap<T, U>(
  option: Option<T>,
  fn: (value: T) => U
): Option<U> {
  if (option.type === "none") {
    return none;
  }
  return some(fn(option.value));
}

function toOptional<I, O extends I>(fn: (input: I) => O) {
  return function (args: I): Option<O> {
    try {
      const result = fn(args);
      if (result) {
        return some(result);
      }
      return none;
    } catch (err) {
      return none;
    }
  };
}


export const optionalDefined = toOptional((arg: unknown): arg is NonNullable<typeof arg> => arg !== undefined && arg !== null);


// consume

export function unwrap<T>(option: Option<T>): T {
  if (option.type === "none") {
    throw new Error("Cannot unwrap None");
  }
  return option.value;
}


export function unwrapOr<T>(opt: Option<T>, fallback: T): T{
  if (opt.type === "some") {
    return opt.value
  }
  return fallback;
}

export function unwrapExpect<T>(opt: Option<T>, message: string): T{
  if (opt.type === "some") {
    return opt.value
  }
  throw new Error(message);

}
