function moveZeroes(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
      j++;
    }
  }

  return nums;
}

// Test cases
console.log(moveZeroes([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

console.log(moveZeroes([0]));
// [0]

console.log(moveZeroes([1, 2, 3]));
// [1, 2, 3]

console.log(moveZeroes([0, 0, 1]));
// [1, 0, 0]

console.log(moveZeroes([0, 0, 0]));
// [0, 0, 0]
