function reverseString(s) {
  // Your code here
  let left = 0;
  let right = s.length - 1;

  let strArr = s.split("");
  while (left < right) {
    let temp = strArr[right];
    strArr[right] = strArr[left];
    strArr[left] = temp;
    left++;
    right--;
  }
  strArr.join();
  return strArr;
}

console.log("reverse of ABCDE", reverseString("ABCDE"));
