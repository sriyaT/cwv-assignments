function isPalindrome(s) {
  // Your code here
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(
  "is this string a palindrome",
  isPalindrome("A man, a plan, a canal: Panama")
);
