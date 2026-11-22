var checkIfPangram = function (sentence) {
  sentence = sentence.toLowerCase();

  let charSet = new Set();

  for (let char of sentence) {
    charSet.add(char);
  }

  return charSet.size === 26;
};
console.log(
  "check if given string is panagram",
  checkIfPangram("TheQuickBrownFoxJumpsovertheLazyDog")
);
