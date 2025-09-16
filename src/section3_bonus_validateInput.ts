// BONUS TASK:
// Write a function called `validateInput` that accepts one of the following:
// - a string (must be non-empty)
// - a number (must be greater than 0)
// - an object with a `valid` boolean property
//
// Return `true` if the input is valid, otherwise return `false`.
// Use type narrowing (`typeof`, `in`) to handle each case.

// Your code here 👇
const validateInput = (value: string | number | object): boolean => {
  if (typeof value === 'string') {
    return value.length != 0
  } else if (typeof value === 'number') {
    return value > 0
  }
  return 'valid' in value && typeof value.valid === 'boolean' && value.valid
}
