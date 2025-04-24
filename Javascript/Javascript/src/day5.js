const sumAndDouble = (...numbers) => {
  const sum = numbers.reduce((sum, num) => sum + num, 0);

  const double = numbers.map((val) => val * 2);

  return [sum, double];
};

console.log(sumAndDouble(1, 2, 3, 4));
