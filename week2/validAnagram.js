function isAnagram(s, t) {
  // Your code here
  if (s.length !== t.length) return false;

  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let val = sMap.get(s[i]);
    if (sMap.has(s[i])) {
      sMap.set(s[i], val + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    let val = tMap.get(t[i]);
    if (tMap.has(t[i])) {
      tMap.set(t[i], val + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    let sVal = sMap.get(s[i]);
    let tVal = tMap.get(s[i]);

    if (sVal !== tVal) {
      return false;
    }
  }
  return true;
}
console.log("is it valid anagram", isAnagram("anagram", "nagaram"));
