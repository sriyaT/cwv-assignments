function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  return nums1;
}

// Test cases
let nums1 = [1, 2, 3, 0, 0, 0];
console.log(merge(nums1, 3, [2, 5, 6], 3));
// [1, 2, 2, 3, 5, 6]

let nums2 = [1];
console.log(merge(nums2, 1, [], 0));
// [1]

let nums3 = [0];
console.log(merge(nums3, 0, [1], 1));
// [1]

let nums4 = [4, 5, 6, 0, 0, 0];
console.log(merge(nums4, 3, [1, 2, 3], 3));
// [1, 2, 3, 4, 5, 6]
