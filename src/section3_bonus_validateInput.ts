// BONUS TASK:
// Write a function called `validateInput` that accepts one of the following:
// - a string (must be non-empty)
// - a number (must be greater than 0)
// - an object with a `valid` boolean property
//
// Return `true` if the input is valid, otherwise return `false`.
// Use type narrowing (`typeof`, `in`) to handle each case.

// Your code here 👇

const validateInput = (input: string | number | object): boolean => {
  if (typeof input === "string" && input.trim() !== "") {
    return true
  }
  if (typeof input === "number" && input > 0) {
    return true
  }

  if (typeof input === "object" && "valid" in input) {
    return input.valid === true
  }
  return false
}
