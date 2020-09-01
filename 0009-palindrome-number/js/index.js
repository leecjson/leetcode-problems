/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) 
    return false;

  let num = x, reverse = 0;
  while (num > 9) {
    reverse = reverse * 10 + num % 10;
    num = parseInt(num / 10);
  }
  reverse = reverse * 10 + num;
  return x == reverse;
};
