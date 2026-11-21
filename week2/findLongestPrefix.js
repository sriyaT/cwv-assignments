function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") return "";
    }
  }

  return prefix;
}
// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a", "ab", "abc"]));
console.log(longestCommonPrefix(["apple", "apple", "apple"]));
console.log(longestCommonPrefix([""]));
