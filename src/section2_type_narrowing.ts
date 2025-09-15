// TASK:
// Write a function called `printValue` that takes a single parameter `value`.
// The value can be a string, number, or boolean.
// Use `typeof` to determine the type and print a different message for each:
// - string: print "String value: <value>"
// - number: print "Number value: <value>"
// - boolean: print "Boolean value: <value>"

// Your code here 👇
const printValue = (value: string | number | boolean): void => {
  if (typeof value === "string") {
    return console.log(`String value: ${value}`)
  } else if (typeof value === "number") {
    return console.log(`Number value: ${value}`)
  } else {
    return console.log(`Boolean value: ${value}`)
  }
}
