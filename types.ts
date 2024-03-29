/**
 * Represents the absence of a value.
 * @typedef {Object} None
 * @property {string} type - The type identifier indicating absence of value ("none").
 */
export type None = { type: "none" };

/**
 * Represents the presence of a value.
 * @typedef {Object} Some
 * @template T
 * @property {string} type - The type identifier indicating presence of value ("some").
 * @property {T} value - The value wrapped by Some.
 */
export type Some<T> = { type: "some"; value: T };

/**
 * Represents the presence or absence of a value.
 * @typedef {None | Some<T>} Option
 * @template T
 */

export type Option<T> = None | Some<T>;

/**
 * Creates a Some value wrapping the provided value.
 * @function
 * @template T
 * @param {T} value - The value to wrap in a Some.
 * @returns {Some<T>} A Some value containing the given value.
 */
const some = <T>(value: T): Some<T> => ({ type: "some", value });

/**
 * Represents the absence of a value.
 * @type {None}
 */
const none = { type: "none" };

/**
 * Executes the provided function and wraps its result in Some if successful, otherwise returns None.
 * @function
 * @template T
 * @param {Function} fn - The function to call to get the value.
 * @returns {Option<T>} A Some value containing the result of calling the function, or None if an error occurs.
 */
export function OptionalCatch(fn) {
  try {
    return { type: "some", value: fn() };
  } catch (e) {
    return { type: "none" };
  }
}

/**
 * Executes the provided promise and wraps its result in Some if resolved successfully, otherwise returns None.
 * @function
 * @template T
 * @param {Promise<T>} promise - The promise to resolve.
 * @returns {Promise<Option<T>>} A promise resolving to a Some value containing the result of the promise, or None if an error occurs.
 */
export async function optionalResolve(promise) {
  try {
    return some(await promise);
  } catch (e) {
    return none;
  }
}

/**
 * Maps the value of an Option using the provided function.
 * @function
 * @template T, U
 * @param {Option<T>} option - The Option to map.
 * @param {Function} fn - The mapping function.
 * @returns {Option<U>} A new Option containing the mapped value, or None if the input Option is None.
 */
export function OptionalMap(option, fn) {
  if (option.type === "none") {
    return none;
  }
  return some(fn(option.value));
}

/**
 * Converts a function into an Optional function, returning Some if successful, otherwise returns None.
 * @function
 * @param {Function} fn - The function to convert.
 * @returns {Function} An Optional function that wraps its result in Some if successful, otherwise returns None.
 */
function toOptional(fn) {
  return function (args) {
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

/**
 * Checks if the argument is defined (neither null nor undefined).
 * @type {Function}
 * @param {unknown} arg - The argument to check.
 * @returns {Option<NonNullable<unknown>>} A Some value if the argument is defined, otherwise None.
 */
export const optionalDefined = toOptional(
  (arg) => arg !== undefined && arg !== null
);

/**
 * Unwraps the value from the Option. Throws an error if the Option is None.
 * @param {Option<T>} option - The Option to unwrap.
 * @returns {T} The unwrapped value.
 * @template T
 * @throws {Error} Throws an error if the Option is None.
 */
export function unwrap(option) {
  if (option.type === "none") {
    throw new Error("Cannot unwrap None");
  }
  return option.value;
}

/**
 * Unwraps the value from the Option or returns a fallback value if the Option is None.
 * @param {Option<T>} opt - The Option to unwrap.
 * @param {T} fallback - The fallback value to return if the Option is None.
 * @returns {T} The unwrapped value if the Option is Some, otherwise the fallback value.
 * @template T
 */
export function unwrapOr(opt, fallback) {
  if (opt.type === "some") {
    return opt.value;
  }
  return fallback;
}

/**
 * Unwraps the value from the Option or throws an error with the provided message if the Option is None.
 * @param {Option<T>} opt - The Option to unwrap.
 * @param {string} message - The message to include in the error if the Option is None.
 * @returns {T} The unwrapped value if the Option is Some.
 * @template T
 * @throws {Error} Throws an error with the provided message if the Option is None.
 */
export function unwrapExpect(opt, message) {
  if (opt.type === "some") {
    return opt.value;
  }
  throw new Error(message);
}
