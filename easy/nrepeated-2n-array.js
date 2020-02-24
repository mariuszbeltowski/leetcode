/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Runtime: 56 ms, faster than 98.09% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
Memory Usage: 36.3 MB, less than 77.71% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
*/

var repeatedNTimes = function(arr) {
    const hashTable = [];

    for (let i=0; i<arr.length; ++i) {
        const elem = arr[i];
        if (!hashTable[elem]) {
            hashTable[elem] = true;
        } else {
            return elem;
        }
    }
};