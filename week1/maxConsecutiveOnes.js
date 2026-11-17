function findMaxConsecutiveOnes(nums) {
  let count = 0,
    maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else if (nums[i] === 0) {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }

  maxCount = Math.max(count, maxCount);

  return maxCount;
}

// Test cases
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
console.log(findMaxConsecutiveOnes([0, 0, 0])); // 0
console.log(findMaxConsecutiveOnes([1, 1, 1, 1])); // 4
console.log(findMaxConsecutiveOnes([])); // 0
