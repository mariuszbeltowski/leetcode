/**
 * Runtime: 52 ms, faster than 99.23% of JavaScript online submissions for Container With Most Water.
 * Memory Usage: 35.5 MB, less than 68.33% of JavaScript online submissions for Container With Most Water.
 */

/**
 * @param {number[]} height
 * @return {number}
 */

const getContainerSize = (ai, a, bi, b) =>
    Math.min(a, b) * (bi-ai);

var maxArea = function(heights) {
    let maxSize = 0;
    
    let l=0, r=heights.length-1;
    
    while (l < r) {
        const left = heights[l];
        const right = heights[r];
        maxSize = Math.max(maxSize, getContainerSize(l, left, r, right));
        
        if (left > right) {
            r--;
        } else {
            l++;
        }
    }
    
    
    return maxSize;
};