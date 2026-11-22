const nestedData = [2, [7, [8, [9]]]];

/**
 * @param {Array} arr
 * @param {number} depth
 */
function customFlat(arr, depth = 1) {
  let result = [];
  // Your recursive implementation here
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (Array.isArray(element) && depth > 0) {
      result.push(...customFlat(element, depth - 1));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(customFlat(nestedData, 1));
console.log(customFlat(nestedData, 2));
console.log(customFlat(nestedData, Infinity));
