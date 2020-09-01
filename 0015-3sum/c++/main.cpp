#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

static int pr = []() {
  std::ios::sync_with_stdio(false);
  std::cin.tie(nullptr);
  std::cout.tie(nullptr);
  return 0;
}();

class Solution
{
public:
  vector<vector<int>> threeSum(vector<int>& nums)
  {
    std::sort(nums.begin(), nums.end());
    vector<vector<int>> ans;
    ans.reserve(12);
    for (int i = 0, length = (int)nums.size(); i < length;) {
      const auto ie = nums[i];
      for (int p = i + 1, q = length - 1; p < q;) {
        const auto pqsum = nums[p] + nums[q];
        if (pqsum == -ie) {
          vector<int> vec(3);
          vec[0] = nums[i];
          vec[1] = nums[p];
          vec[2] = nums[q];
          ans.push_back(std::move(vec));
          ++p;
          --q;
          while (p < q && (nums[p] == nums[p - 1])) ++p;
          while (p < q && (nums[q] == nums[q + 1])) --q;
        }
        else if (pqsum > -ie)
          --q;
        else
          ++p;
      }
      ++i;
      while (i < length && nums[i] == ie) ++i;
    }
    return ans;
  }
};