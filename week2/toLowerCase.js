function toLowerCase(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);

    if (ascii >= 65 && ascii <= 90) {
      let lower = String.fromCharCode(ascii + 32);
      result += lower;
    } else {
      result += s[i];
    }
  }

  return result;
}

console.log("convert this string to lowercase", toLowerCase("Hello"));
