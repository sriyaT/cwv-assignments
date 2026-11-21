function firstUniqChar(s) {
  // Your code here
  let sMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let sVal = sMap.get(s[i]);
    if (sMap.has(s[i])) {
      sMap.set(s[i], sVal + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let sVal = sMap.get(s[i]);
    if (sVal == 1) return i;
  }
  return -1;
}

console.log(
  "find first unique character of the string",
  firstUniqChar("leetcode")
);
