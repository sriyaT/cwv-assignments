/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let sTot = new Map();
  let tTos = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sTot.has(s[i]) && sTot.get(s[i]) !== t[i]) {
      return false;
    }

    if (tTos.has(t[i]) && tTos.get(t[i]) !== s[i]) {
      return false;
    }

    sTot.set(s[i], t[i]);
    tTos.set(t[i], s[i]);
  }

  return true;
};

console.log(
  "is the given strings isomerphic to easch other",
  isIsomorphic("egg", "add")
);
