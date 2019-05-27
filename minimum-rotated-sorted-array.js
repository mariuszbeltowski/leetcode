/**
 * Runtime: 52 ms, faster than 97.50% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
 * Memory Usage: 33.7 MB, less than 85.66% of JavaScript online submissions for Find Minimum in Rotated Sorted Array. 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const lastElem = nums[nums.length-1];
    const firstElem = nums[0];
    
    if (firstElem < lastElem) {
        return firstElem;
    } else {
        return searchBinaryMinimal(nums, 0, nums.length-1, nums[0]);
    }
};


const searchBinaryMinimal = (tab, start, end, first) => {
    
    if (start === end) {
        return tab[start];
    }
    
    const mid = parseInt((start+end)/2, 10)
    
    if (tab[mid] >= first) {
        return searchBinaryMinimal(tab, mid+1, end, first);
    } else {
        return searchBinaryMinimal(tab, start, mid, first);   
    }
}