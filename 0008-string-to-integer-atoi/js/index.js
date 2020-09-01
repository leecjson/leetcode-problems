const MIN = -2147483648
const MAX = 2147483647;

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const dig = [];
  let negative = false;
  
  let i = 0;
  for (; i < str.length; ++i) {
    const c = str.charCodeAt(i);
    if (c == 32) continue;  // space
    else if (c == 45) { // -
      negative = true;
      ++i;
      break;
    }
    else if (c == 43) { // +
      ++i;
      break;
    }
    else if (c >= 48 && c <= 57)
      break;

    return 0;
  }

  for (; i < str.length; ++i) {
    const c = str.charCodeAt(i);
    if (c >= 48 && c <= 57)
      dig.push(c - 48);
    else
      break;
  }

  if (dig.length == 0)
    return 0;

  let ans = 0;
  for (i = 0; i < dig.length; ++i) {
    ans = ans * 10 + dig[i];
  }
  if (negative) {
    ans *= -1;
  }
  if (ans < MIN) {
    return MIN;
  } else if (ans > MAX) {
    return MAX;
  }
  return ans;
};