/**
 * Runtime: 136 ms, faster than 99.98% of JavaScript online submissions for 3Sum.
 * Memory Usage: 46.9 MB, less than 54.91% of JavaScript online submissions for 3Sum.
 */

// O(n^2)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortedNums = nums.sort((a, b) => a-b)
    const solutions = [];
    
    for (let i=0; i<sortedNums.length; ++i) {
        if (i != 0 && nums[i] == nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                solutions.push([nums[i], nums[j], nums[k]]);
                ++j;
                while (j < k && nums[j] == nums[j-1]) ++j;
            } else if (sum < 0) {
                ++j;
            } else {
                --k;
            }
        }
    }
    return solutions;
};

// Bruteforce - O(n^3)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortedNums = nums.sort((a, b) => a-b)
    const solutions = [];
    
    for (let i=0; i<sortedNums.length; ++i) {
        if (i != 0 && nums[i] == nums[i - 1]) continue;
        const numi = sortedNums[i];
        
        for (let j=i+1; j<sortedNums.length; ++j) {
            if (j != i + 1 && nums[j] == nums[j - 1]) continue;
            const numj = sortedNums[j];
            
            for (let k=j+1; k<sortedNums.length; ++k) {
                if (k != j + 1 && nums[k] == nums[k - 1]) continue;
                const numk = sortedNums[k];
                
                if (numi + numj + numk === 0) {
                    solutions.push([numi, numj, numk])
                }
            }
        }
    }
    return solutions;
};