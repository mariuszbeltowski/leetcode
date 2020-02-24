/*
plement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Runtime: 48 ms, faster than 96.73% of JavaScript online submissions for Implement strStr().
Memory Usage: 36 MB, less than 12.88% of JavaScript online submissions for Implement strStr().
*/

var strStr = function(haystack, needle) {
    if (needle == '') {
        return 0;
    }
    
    for (let i=0; i<haystack.length; ++i) {
        if (haystack.substr(i, needle.length) === needle) {
            return i;
        }
    }
    
    return -1;
};