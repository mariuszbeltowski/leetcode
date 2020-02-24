/**
 * 
 * Runtime: 40 ms, faster than 99.98% of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 35 MB, less than 86.05% of JavaScript online submissions for Maximum Subarray.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let maxCurrent = nums[0];
    const length = nums.length;
    for (let i=1; i<length; ++i) {
        const num = nums[i];
        
        maxCurrent += num;
        
        if (maxCurrent < num) {
            maxCurrent = num
        }
        if (maxSum < maxCurrent) {
            maxSum = maxCurrent
        }
    }
    
    return maxSum;
};