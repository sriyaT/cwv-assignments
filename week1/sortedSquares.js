function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }

  return result;
}

// Test cases
console.log(sortedSquares([-4, -1, 0, 3, 10]));
// [0, 1, 9, 16, 100]

console.log(sortedSquares([-7, -3, 2, 3, 11]));
// [4, 9, 9, 49, 121]

console.log(sortedSquares([0]));
// [0]

console.log(sortedSquares([-5, -3, -2]));
// [4, 9, 25]

console.log(sortedSquares([]));
// []
