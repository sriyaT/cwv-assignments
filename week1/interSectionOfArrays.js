var intersection = function (nums1, nums2) {
  const set = new Set(nums2);
  const result = new Set();

  for (let i = 0; i < nums1.length; i++) {
    if (set.has(nums1[i])) {
      result.add(nums1[i]);
    }
  }

  return [...result];
};

// Test cases
console.log(intersection([1, 2, 2, 1], [2, 2]));
// [2]

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// [9, 4] or [4, 9]

console.log(intersection([1, 2, 3], [4, 5, 6]));
// []

console.log(intersection([], [1, 2]));
// []
