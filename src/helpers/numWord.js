const numWord = (value, words) => {
  const value1 = Math.abs(value) % 100;
  const num = value1 % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
}

// eslint-disable-next-line import/prefer-default-export
export { numWord }
