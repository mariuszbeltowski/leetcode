/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Runtime: 108 ms, faster than 97.96% of JavaScript online submissions for Squares of a Sorted Array.
Memory Usage: 42.6 MB, less than 78.71% of JavaScript online submissions for Squares of a Sorted Array.
*/

var sortedSquares = function(array) {
    let i=0;
    let j=0;
    while (array[i]<0) {
        ++i;
    }
    const lower = array.splice(0, i).map(num => num*num).reverse();
    const higher = array.map(num => num*num);
    
    const output = [];
    
    i = j = 0;
    
    while (i<lower.length && j<higher.length) {
        if (lower[i] < higher[j]) {
            output.push(lower[i]);
            ++i;
        } else {
            output.push(higher[j]);
            ++j;
        }
    }
    
    while (i<lower.length) {
        output.push(lower[i]);
        ++i;
    }
    
    while (j<higher.length) {
        output.push(higher[j]);
        ++j;
    }
    
    return output;
};