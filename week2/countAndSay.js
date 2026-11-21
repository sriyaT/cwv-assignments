function countAndSay(n) {
  let str = "1";

  for (let j = 1; j < n; j++) {
    let result = "";
    let i = 0;

    while (i < str.length) {
      let count = 1;

      while (str[i] === str[i + 1]) {
        count++;
        i++;
      }

      result += count + str[i];
      i++;
    }

    str = result;
  }

  return str;
}
console.log("Count and Say", countAndSay(4));
