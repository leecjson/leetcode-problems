/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length == 0)
    return '';
  if (s.length == 1)
    return s;

  let ansStart = 0, ansEnd = 1, max = 1;
  for (let i = 0; i < (s.length - 1); ++i) {
    let l = i - 1;
    let r = i + 1;
    while (r < s.length && (s.charCodeAt(i) == s.charCodeAt(r))) {
      ++r;
    }
    while (l >= 0 && r < s.length && s.charCodeAt(l) == s.charCodeAt(r)) {
      --l;
      ++r;
    }
    const d = r - (l + 1);
    if (d > max) {
      max = d;
      ansStart = l + 1;
      ansEnd = r;
    }
  }
  return s.slice(ansStart, ansEnd);
};

console.log(longestPalindrome('xyz|zyx'));
console.log(longestPalindrome('xyz|zyx&xyz|zyx'));
console.log(longestPalindrome('xyz|zyx&&xyz|zyx'));
console.log(longestPalindrome('ac'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('ccc'));