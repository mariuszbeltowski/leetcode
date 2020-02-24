/*
Runtime: 40 ms, faster than 99.75% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 33.8 MB, less than 68.43% of JavaScript online submissions for Fibonacci Number.
*/

const fibs = [0, 1];

for (let i=2; i<=30; ++i) {
    fibs[i]=fibs[i-1]+fibs[i-2];
}

var fib = function(n) {
    return fibs[n];
};
