function majorityElement(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      let val = map.get(nums[i]);
      map.set(nums[i], val + 1);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let n = Math.floor(nums.length / 2);
    let val = map.get(nums[i]);

    if (val > n) {
      return nums[i];
    }
  }
}

// Test cases
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([1])); // 1
console.log(majorityElement([6, 5, 5])); // 5
