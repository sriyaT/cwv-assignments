function maxProfit(prices) {
  let currentProfit = 0,
    maxProfit = 0;
  let min = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[min]) {
      min = i;
    } else {
      currentProfit = prices[i] - prices[min];
      maxProfit = Math.max(currentProfit, maxProfit);
    }
  }

  return maxProfit;
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 4, 1])); // 2
console.log(maxProfit([1])); // 0
