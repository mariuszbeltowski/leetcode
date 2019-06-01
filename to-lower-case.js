/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Runtime: 44 ms, faster than 99.15% of JavaScript online submissions for To Lower Case.
Memory Usage: 33.9 MB, less than 12.20% of JavaScript online submissions for To Lower Case.
O(n)
*/

var toLowerCase = function(str) {
    return [...str].map(char => {
        const code = char.charCodeAt();
        return code >= 65 && code <= 90 ? String.fromCharCode(code+32) : char
    }).join('');
};