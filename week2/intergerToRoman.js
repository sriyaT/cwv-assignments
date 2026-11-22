var intToRoman = function (num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";
  let remainingNum = num;
  for (let i = 0; i < values.length; i++) {
    while (remainingNum >= values[i]) {
      result += symbols[i];
      remainingNum -= values[i];
    }
  }
  return result;
};

console.log(
  "convert this number to it's respective roman symbol",
  intToRoman(3749)
);
