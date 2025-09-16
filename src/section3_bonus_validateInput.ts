// BONUS TASK:
// Write a function called `validateInput` that accepts one of the following:
// - a string (must be non-empty)
// - a number (must be greater than 0)
// - an object with a `valid` boolean property
//
// Return `true` if the input is valid, otherwise return `false`.
// Use type narrowing (`typeof`, `in`) to handle each case.

// Your code here 👇

function validateInput(input: string | number | object): boolean {
  if (typeof input === "string") return input.length > 0;
  if (typeof input === "number") return input > 0;
  if (typeof input === "object" && input !== null && "valid" in input)
    return input.valid === true;
  return false;
}
