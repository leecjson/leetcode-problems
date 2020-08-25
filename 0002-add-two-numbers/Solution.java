package solution;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
public class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    int carry = 0;
    ListNode r = null, r_first = null;
    while (l1 != null || l2 != null) {
      int v1 = 0, v2 = 0;
      if (l1 != null) {
        v1 = l1.val;
        l1 = l1.next;
      }
      if (l2 != null) {
        v2 = l2.val;
        l2 = l2.next;
      }
      int sum = v1 + v2 + carry;
      if (sum >= 10) {
        sum %= 10;
        carry = 1;
      } else {
        carry = 0;
      }
      if (r == null) {
        r_first = r = new ListNode();
      } else {
        r = r.next = new ListNode();
      }
      r.val = sum;
    }
    if (carry == 1) {
      r.next = new ListNode(1);
    }
    return r_first;
  }

  public static void main(String[] args) {
    var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    var r = new Solution().addTwoNumbers(l1, l2);
    while (r != null) {
      System.out.println(r.val);
      r = r.next;
    }
  }
}

class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }

  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}