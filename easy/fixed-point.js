/*
Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Fixed Point.
Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Fixed Point.
*/
var fixedPoint = function(arr) {
    const length = arr.length;
    for (let i=0; i<length; ++i) {
        if (arr[i] == i) {
            return i;
        } else if (arr[i] > i) {
            return -1;
        }
    }
    
    return -1;
};