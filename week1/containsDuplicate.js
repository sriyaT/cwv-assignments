function containsDuplicate(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }

  return false;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3])); // true
console.log(containsDuplicate([])); // false
