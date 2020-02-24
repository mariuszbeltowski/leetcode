/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = []
    const leftProducts = [1];
    const rightProducts = [];
    rightProducts[nums.length-1] = 1;
    
    for (let i=1; i<nums.length; ++i) {
        const num = nums[i-1];
        leftProducts[i] = leftProducts[i-1] * num;
    }
    
    for (let i=nums.length-2; i>-1; --i) {
        const num = nums[i+1];
        rightProducts[i] = rightProducts[i+1] * num;
    }
    
    for (let i=0; i<nums.length; ++i) {
        output[i] = leftProducts[i] * rightProducts[i];
    }
    
    return output;
};