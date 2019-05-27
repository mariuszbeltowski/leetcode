/**
 * Runtime: 48 ms, faster than 99.73% of JavaScript online submissions for Maximum Product Subarray.
 * Memory Usage: 34.6 MB, less than 99.17% of JavaScript online submissions for Maximum Product Subarray.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const max = (a, b) => a > b ? a : b;
const min = (a, b) => a < b ? a : b;

var maxProduct = function(nums) {
    let maxResult = nums[0];
    let curMax = nums[0];
    let curMin = nums[0];
    
    
    const length = nums.length;
    for (let i=1; i<length; ++i) {
        const num = nums[i];
        
        const minTmp = curMin * num;
        const maxTmp = curMax * num;
        
        curMax = max(num, max(minTmp, maxTmp))
        curMin = min(num, min(minTmp, maxTmp))
        
        maxResult = max(maxResult, max(curMax, curMin));
    }
    
    return maxResult;
};