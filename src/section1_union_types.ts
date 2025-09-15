let input: string | number = 42

const toUpperOrFixed = (input: string | number): string => {
  return typeof input === "string" ? input.toUpperCase() : input.toFixed(2);
}
