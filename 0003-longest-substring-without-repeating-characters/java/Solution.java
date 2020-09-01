import java.util.Arrays;

class Solution {
  public static void main(String[] args) {
    System.out.println(new Solution().lengthOfLongestSubstring("pwwkew"));
  }

  public int lengthOfLongestSubstring(String s) {
    var flags = new int[256];
    Arrays.fill(flags, -1);
    int l = 0, r = 0, len = 0;
    while (r < s.length()) {
      var ch = (int) s.charAt(r);
      if (flags[ch] == -1) {
        flags[ch] = r;
        len = Math.max(len, r - l + 1);
        ++r;
      } else {
        while (l <= flags[ch]) {
          flags[(int) s.charAt(l)] = -1;
          ++l;
        }
      }
    }
    return len;
  }
}