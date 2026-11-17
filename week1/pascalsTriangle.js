function generate(numRows) {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
      continue;
    }

    let currentRow = [];
    let previousRow = result[i - 1];

    currentRow.push(1);

    for (let j = 1; j < previousRow.length; j++) {
      currentRow.push(previousRow[j - 1] + previousRow[j]);
    }

    currentRow.push(1);
    result.push(currentRow);
  }

  return result;
}

// Test cases
console.log(generate(1));
console.log(generate(2));
console.log(generate(5));
console.log(generate(0));
