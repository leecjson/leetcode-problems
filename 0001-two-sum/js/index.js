/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map(nums.map((el, i)=> [el, i]));
  const len = nums.length;
  for (let i = 0; i < len; ++ i) {
    const elIndex = map.get(target - nums[i]);
    if (elIndex == i) {
      continue;
    }
    if (elIndex != undefined) {
      return [i, elIndex];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));