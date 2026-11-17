function singleNumber(nums) {
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
    let val = map.get(nums[i]);

    if (val === 1) {
      return nums[i];
    }
  }
}

// Test cases
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
console.log(singleNumber([7, 3, 7, 5, 3])); // 5
