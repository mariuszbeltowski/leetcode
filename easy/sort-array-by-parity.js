/*

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Runtime: 72 ms, faster than 97.42% of JavaScript online submissions for Sort Array By Parity.
Memory Usage: 37.4 MB, less than 27.09% of JavaScript online submissions for Sort Array By Parity.
*/


var sortArrayByParity = function(array) {
    return [...array.filter(item => item % 2 == 0), ...array.filter(item => item % 2 != 0)];
};