/*

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

O(n)
Runtime: 56 ms, faster than 94.13% of JavaScript online submissions for Jewels and Stones.
Memory Usage: 34.2 MB, less than 48.37% of JavaScript online submissions for Jewels and Stones.
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let stonesLength = S.length;
    let jewelsLength = J.length;
    
    let count = 0;
    
    const hashTable = [];
    
    while(jewelsLength--) {
        hashTable[J[jewelsLength]] = true;
    }
    
    while(stonesLength--) {
        if (hashTable[S[stonesLength]]) {
            ++count;
        }
    }
    
    return count;
};