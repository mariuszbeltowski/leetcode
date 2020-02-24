/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.
*/

/*
Runtime: 52 ms, faster than 97.48% of JavaScript online submissions for Longest Palindrome.
Memory Usage: 35.3 MB, less than 80.00% of JavaScript online submissions for Longest Palindrome.
*/

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {
    const hashMap = new Map();
    
    for (let i=0; i<s.length; ++i) {
        const curElem = s[i];
        if (hashMap.has(curElem)) {
            const counter = hashMap.get(curElem);
            hashMap.set(curElem, counter+1);
        } else {
            hashMap.set(curElem, 1);
        }
    }
    
    let isOdd = 0;
    let evenCount = 0;
    
    for (const [key, value] of hashMap.entries()) {
       if (value % 2 == 0) {
           evenCount += value;
       } else {
           evenCount += value-1;
           isOdd = 1;
       }
    }
    
    return evenCount + isOdd;
};