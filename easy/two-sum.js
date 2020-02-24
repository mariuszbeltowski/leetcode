/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9
 * return [0, 1].
 */

/**
 * Optimized for computational complexity - O(n)
 * Space O(n)
 * 
 * Results:
 * Runtime: 44 ms, faster than 99.93% of JavaScript online submissions for Two Sum.
 * Memory Usage: 35.4 MB, less than 24.74% of JavaScript online submissions for Two Sum.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hashTable = [];

    // iterate once over all nums
    for (let i=0; i<nums.length; ++i) {

        // get current num value
        const num = nums[i];

        // get index of target-num from hashTable
        const targetIndex = hashTable[target-num];

        // returns if exists
        if (typeof targetIndex !== 'undefined') {
            return [targetIndex, i];

        // save index for further iterations
        } else {
            hashTable[num] = i;
        }
    }
    return [];
};