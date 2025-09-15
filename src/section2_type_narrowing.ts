const printValue = (value: string | number | boolean): void => {
  if (typeof value === "string") {
    console.log(`String value: ${value}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value}`);
  } else {
    console.log(`Boolean value: ${value}`);
  }
};
