function romanToInt(s) {
  // Your code here

  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let current = romanMap[s[i]];
    let next = romanMap[s[i + 1]];
    if (current < next) {
      sum = sum - current;
    } else {
      sum = sum + current;
    }
  }
  return sum;
}

console.log("convert this strung into roman", romanToInt("IV"));
