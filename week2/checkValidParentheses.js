function checkValidString(s) {
  // Your code here
  let str = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      str.push(s[i]);
    } else if (s[i] === ")") {
      str.pop();
    } else if ("*") {
      str.push(s[i]);
      str.pop();
    }
  }
  if (str.length === 0) return true;

  return false;
}

console.log("is it valid parenthesis", checkValidString("()"));
