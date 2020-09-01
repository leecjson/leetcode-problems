
const MIN = -2147483648
const MAX = 2147483647;

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0;
  while (x != 0) {
    ans = ans * 10 + x % 10;
    x = parseInt(x * 0.1);
  }
  if (ans < MIN || ans > MAX) {
    return 0;
  } else {
    return ans;
  }
};

console.log(reverse(123));