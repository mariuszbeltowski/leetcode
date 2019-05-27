/**
 * Runtime: 48 ms, faster than 99.34% of JavaScript online submissions for Search in Rotated Sorted Array.
 * Memory Usage: 34 MB, less than 27.58% of JavaScript online submissions for Search in Rotated Sorted Array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const lastElem = nums[nums.length-1];
    const firstElem = nums[0];
    
    if (typeof firstElem === 'undefined') {
        return -1;
    }
    
    const resIndex = searchBinaryRotated(nums, 0, nums.length-1, target)
    
    if (nums[resIndex] !== target) {
        return -1;
    } else {
        return resIndex;
    }
};

const coudlBeInRotatedRange = (start, end, target) => {
    // normal 1 2 3
    if (start === end && start !== target) {
        return false
    } else if (end >= start && target <= end && target >= start) {
        return true;
    // 5 6 7 1 2 3
    } else if (end <= start && (target >= start || target <= end)) {
        return true;
    } else {
        return false;
    }
};

const searchBinaryRotated = (tab, start, end, target) => {
    
    if (start === end) {
        return start;
    }
    
    const midIndex = parseInt((start+end)/2, 10)
    
    const mid = tab[midIndex];
    // console.log('is in target', tab[start], mid);
    
    if (coudlBeInRotatedRange(tab[start], mid, target)) {
        // console.log('left mid')
        return searchBinaryRotated(tab, start, midIndex, target); 
    } else {
        return searchBinaryRotated(tab, midIndex+1, end, target);
    }
}