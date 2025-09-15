const validateInput = (input: string | number | object): boolean => {
  if (typeof input === "string") {
    return input.trim().length > 0;
  } else if (typeof input === "number") {
    return input > 0;
  } else {
    return (input as { valid: boolean }).valid;
  }
};
