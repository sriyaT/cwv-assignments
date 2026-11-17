function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

// Test cases
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log("k:", k1, "Unique elements:", nums1.slice(0, k1));
// k: 2 Unique elements: [1, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log("k:", k2, "Unique elements:", nums2.slice(0, k2));
// k: 5 Unique elements: [0, 1, 2, 3, 4]

let nums3 = [];
let k3 = removeDuplicates(nums3);
console.log("k:", k3, "Unique elements:", nums3.slice(0, k3));
// k: 0 Unique elements: []
