/**
 * 
 * Time complexity O(n)
 * Space O(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashTable = [];

    for (let i=0; i<nums.length; ++i) {
        const num = nums[i];
        
        if (hashTable[num]) {
            return true;
        } else {
            hashTable[num] = true;
        }
    }
    
    return false;
};