# TypeScript Lesson 3: Union Types & Type Narrowing

Welcome to your third TypeScript lab! In the previous lessons, you learned about basic types, objects, arrays, and type aliases. Now we're going to explore one of TypeScript's most powerful features: **union types** and **type narrowing**.

You already know that variables can hold different types of data. But what if you want a variable that could be a string OR a number? Or a function that needs to handle multiple different input types safely? That's where union types come in—they let you say "this could be one of several types."

Think of it like this: in JavaScript, you might write a function that sometimes gets a string and sometimes gets a number, hoping you handle both cases correctly. In TypeScript, you can explicitly declare "this parameter can be a string OR a number" and then use **type narrowing** to safely work with each type.

## Learning Objectives

By the end of this lab, you'll be comfortable with:

- Declaring variables that can accept multiple types using union types
- Using type narrowing to write safe logic for different inputs
- Building flexible functions that branch based on input type
- Combining structural and primitive checks in complex validation logic

## Getting Started

First, fork and clone the repository and let's set up your environment:

```bash
npm install
npm test
```

The tests will guide you through each concept. Don't worry if they fail initially—that's how you'll learn what TypeScript expects!

---

## Union Types: When One Type Isn't Enough

In JavaScript, you might have a variable that could be different types depending on the situation:

```javascript
let userInput = "hello" // Could be a string
userInput = 42 // Or it could be a number
```

TypeScript lets you be explicit about this flexibility using **union types**. The syntax uses the pipe character (`|`) to mean "or":

```typescript
let userInput: string | number = "hello" // Can be string OR number
userInput = 42 // Both are valid!
userInput = true // ❌ TypeScript error - boolean not allowed
```

This is incredibly useful for functions that need to handle different input types. Instead of hoping you remember to check the type, TypeScript forces you to handle each case properly.

**Try it yourself:** Open `src/section1_union_types.ts` and create an `input` variable that can be either a string or a number. Then write a `toUpperOrFixed` function that handles both types appropriately.

---

## Type Narrowing: Safely Working with Union Types

Once you have a union type, you need a way to safely work with each possible type. TypeScript's **type narrowing** helps you do this by checking the actual type at runtime.

The most common way to narrow types is using `typeof`:

```typescript
function processValue(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is a string here
    return value.toUpperCase()
  } else {
    // TypeScript knows value is a number here
    return value.toFixed(2)
  }
}
```

Inside each branch of the `if` statement, TypeScript "narrows" the type based on your check. This means you get full autocomplete and type safety for each specific type.

You can also narrow types with other checks:

```typescript
function handleInput(input: string | number | boolean) {
  if (typeof input === "string") {
    console.log(`String: ${input}`)
  } else if (typeof input === "number") {
    console.log(`Number: ${input}`)
  } else {
    console.log(`Boolean: ${input}`)
  }
}
```

**Your turn:** In `src/section2_type_narrowing.ts`, write a `printValue` function that takes a string, number, or boolean and prints a different message for each type using `typeof` checks.

---

## Advanced Type Narrowing: Beyond typeof

Sometimes you need more sophisticated type checking. TypeScript provides several tools for this:

### The `in` Operator

When working with objects, you can use the `in` operator to check if a property exists:

```typescript
function validateConfig(config: string | { valid: boolean }) {
  if (typeof config === "string") {
    return config.length > 0
  } else if ("valid" in config) {
    return config.valid
  }
  return false
}
```

### Combining Checks

You can combine multiple type checks for complex validation:

```typescript
function isValidInput(input: string | number | { valid: boolean }) {
  if (typeof input === "string") {
    return input.length > 0 // Non-empty string
  } else if (typeof input === "number") {
    return input > 0 // Positive number
  } else if (typeof input === "object" && input !== null) {
    return "valid" in input && input.valid // Object with valid: true
  }
  return false
}
```

**Challenge:** In `src/section3_bonus_validateInput.ts`, write a `validateInput` function that accepts:

- A string (must be non-empty)
- A number (must be greater than 0)
- An object with a `valid` boolean property

Return `true` if the input is valid, otherwise `false`. Use `typeof`, `in`, and other narrowing tools to implement this cleanly.

---

## Why This Matters

Union types and type narrowing are fundamental to writing robust TypeScript code. They let you:

- **Handle multiple input types safely** - No more guessing what type you're working with
- **Catch errors at compile time** - TypeScript will remind you to handle all possible cases
- **Write more flexible APIs** - Functions that can accept different types of data
- **Build better user interfaces** - Handle different data states (loading, success, error) with type safety

These concepts are especially important when working with APIs, user input, or any situation where data might come in different formats.

---

## Ready to Start?

Open `src/section1_union_types.ts` and begin! The tests will guide you through each concept. Remember: TypeScript is here to help you write better code by catching errors early. Embrace the red squiggly lines—they're your friends! 🚀

### Common Troubleshooting

**"Type 'string' is not assignable to type 'string | number'"**

- Check that your union type declaration is correct
- Make sure you're using the pipe (`|`) syntax, not other operators

**"Object is possibly 'null' or 'undefined'"**

- Add null checks before accessing object properties
- Use optional chaining (`obj?.property`) when appropriate

**"Not all code paths return a value"**

- Make sure every branch of your type narrowing returns a value
- Add a default case or return statement at the end

**Tests failing?**

- Make sure you're using explicit type annotations (the `: Type` syntax)
- Check that your union types use the pipe (`|`) operator
- Verify that your type narrowing covers all possible cases
- Ensure your function return types match what the tests expect
