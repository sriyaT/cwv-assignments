function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    let digit1 = i >= 0 ? Number(num1[i]) : 0;
    let digit2 = j >= 0 ? Number(num2[j]) : 0;

    let sum = digit1 + digit2 + carry;

    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    result = digit + result;
    i--;
    j--;
  }
  return result;
}

console.log(
  addStrings("123456789012345678901234567890", "987654321098765432109876543210")
);
