/*
Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer.


Runtime: 48 ms, faster than 90.93% of JavaScript online submissions for Occurrences After Bigram.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Occurrences After Bigram.
*/

var findOcurrences = function(text, first, second) {
    const sepText = text.split(" ");
    const res = [];
    
    for (let i=2; i<sepText.length; ++i) {
        const prev = sepText[i-2]
        const next = sepText[i-1]
        
        if (prev === first && next === second) {
            res.push(sepText[i]);
        }
    }
    
    return res;
};