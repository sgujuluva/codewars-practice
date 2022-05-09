/* Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter. */

function stringMerge(string1, string2, letter){
    let result = "";
    let string1Split = string1.slice(0,string1.indexOf(letter));
    let string2Split = string2.slice(string2.indexOf(letter));
    result = string1Split  + string2Split;
    return result;
    
    
  }
console.log(stringMerge("hello", "world", "l")); // "held"
console.log(stringMerge("coding", "anywhere", "n"));