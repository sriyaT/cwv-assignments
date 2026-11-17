class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sortedArrayToBST(nums) {
  let left = 0;
  let right = nums.length - 1;

  function buildTree(nums, left, right) {
    if (left > right) {
      return null;
    }

    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);

    root.left = buildTree(nums, left, mid - 1);
    root.right = buildTree(nums, mid + 1, right);

    return root;
  }

  return buildTree(nums, left, right);
}

// Helper: Level-order traversal
function levelOrder(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();

    result.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
}

// Test cases
console.log(levelOrder(sortedArrayToBST([-10, -3, 0, 5, 9])));
// [0, -3, 9, -10, 5]

console.log(levelOrder(sortedArrayToBST([1, 3])));
// [1, 3] or [3, 1], depending on the chosen middle index

console.log(levelOrder(sortedArrayToBST([1])));
// [1]

console.log(levelOrder(sortedArrayToBST([])));
// []
