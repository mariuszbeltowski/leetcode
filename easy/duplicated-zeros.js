/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.


Runtime: 68 ms, faster than 80.12% of JavaScript online submissions for Duplicate Zeros.
Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Duplicate Zeros.
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const tmpArr = [];
    let length = arr.length;
    
    for(let i=0; i<length; ++i) {
        const el = arr[i];
        if (el === 0) {
            tmpArr.push(0)
            --length;
       }
       tmpArr.push(el);
    }

    for(let i=0; i<arr.length; ++i) {
        arr[i] = tmpArr[i];
    }
};