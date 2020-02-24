/*
52ms
36MB
*/

const morseTab = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

// O(1)
const letterToMorse = (char) => morseTab[char.charCodeAt()-97];

var uniqueMorseRepresentations = function(words) {
    const hashTable = [];
    
    // O(n)
    words.forEach(word => {
        const morse = word.split('').map(letterToMorse).join('');
        hashTable[morse] = true;
    })
    
    return Object.keys(hashTable).length;
};