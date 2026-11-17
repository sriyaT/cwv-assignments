var productExceptSelf = function (nums) {
  let res = 1;
  let arr = [];

  // Calculate prefix products
  for (let i = 0; i < nums.length; i++) {
    arr[i] = res;
    res = res * nums[i];
  }

  // Multiply by suffix products
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] = right * arr[i];
    right = right * nums[i];
  }

  return arr;
};

// Test cases
console.log(productExceptSelf([1, 2, 3, 4]));
// [24, 12, 8, 6]

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// [0, 0, 9, 0, 0]

console.log(productExceptSelf([2, 3]));
// [3, 2]

console.log(productExceptSelf([0, 0]));
// [0, 0]
