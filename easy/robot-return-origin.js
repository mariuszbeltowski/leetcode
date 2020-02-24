/*
Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Robot Return to Origin.
Memory Usage: 35.3 MB, less than 99.07% of JavaScript online submissions for Robot Return to Origin.
*/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x=0;
    let y=0;
    
    for (let i=0; i<moves.length; ++i) {
        const move = moves[i];
        if (move == 'R') {
            ++x;
        } else if (move == 'L') {
            --x;
        } else if (move == 'U') {
            ++y;
        } else {
            --y;
        }
    }
    
    return x === 0 && y === 0;
};