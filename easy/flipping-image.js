/*
Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

Runtime: 60 ms, faster than 97.01% of JavaScript online submissions for Flipping an Image.
Memory Usage: 35 MB, less than 61.39% of JavaScript online submissions for Flipping an Image.
*/

var flipAndInvertImage = function(array) {
    return array.map(arr => arr.reverse()).map(arr => arr.map(elem => !elem));
};