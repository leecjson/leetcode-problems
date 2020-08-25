/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let low = 0,
    high = numbers.length - 1;

  while (low < high) {
    const sum = numbers[low] + numbers[high];
    if (sum == target) {
      return [low + 1, high + 1];
    } else if (sum > target) {
      -- high;
    } else {
      ++ low;
    }
  }
};

console.log(twoSum([1,2,3,4,4,9,56,90], 8));