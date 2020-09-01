
public class Solution {
  public static void main(String[] args) {
    System.out.println(new Solution().findMedianSortedArrays(new int[] { 2 }, new int[] {}));
  }

  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    var len = nums1.length + nums2.length;
    if (len == 1) {
      return nums1.length > 0 ? nums1[0] : nums2[0];
    }
    var tmp = new int[len];
    for (int i = 0, j = 0, t = 0; t < len; ++t) {
      if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
        tmp[t] = nums1[i];
        ++i;
      } else {
        tmp[t] = nums2[j];
        ++j;
      }
    }
    if (len % 2 == 0) {
      var mid = (int) (len * 0.5);
      return (tmp[mid] + tmp[mid - 1]) * 0.5;
    } else {
      return tmp[(int) (len * 0.5)];
    }
  }
}