#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;

static int pr = []() { 
  std::ios::sync_with_stdio(false); 
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 0; 
}();

class Solution {
  public:
    int maxArea(vector<int>& height) {
      int maxArea = 0;
      for (int p = 0, q = ((int) height.size()) - 1; p < q;) {
        maxArea = std::max((q - p) * std::min(height[p], height[q]), maxArea);
        height[p] <= height[q] ? (++p) : (--q);
      }
      return maxArea;
    }
};