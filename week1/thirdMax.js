function thirdMax(nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) {
      continue;
    }

    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (nums[i] > second) {
      third = second;
      second = nums[i];
    } else if (nums[i] > third) {
      third = nums[i];
    }
  }

  if (third === -Infinity) {
    return first;
  } else {
    return third;
  }
}

// Test cases
console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1, 1, 1])); // 1
console.log(thirdMax([5, 2, 4, 1, 3])); // 3
console.log(thirdMax([-1, -2, -3])); // -3
