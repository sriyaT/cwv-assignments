function reverse(nums, left, right) {
  while (left < right) {
    let temp = nums[right];
    nums[right] = nums[left];
    nums[left] = temp;
    left++;
    right--;
  }
}

function rotate(nums, k) {
  let n = nums.length;

  k = k % n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
}

// Test cases
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// [5, 6, 7, 1, 2, 3, 4]

console.log(rotate([-1, -100, 3, 99], 2));
// [3, 99, -1, -100]

console.log(rotate([1, 2], 3));
// [2, 1]

console.log(rotate([1], 0));
// [1]
