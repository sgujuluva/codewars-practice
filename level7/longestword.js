/* Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7 */

function longestWord(array){

    
    let count = 0;
let countItems = [];
    for (let i=0; i < array.length; i++){

        count = array[i].length;
        countItems.push(count);
     
    }
    let longestWordCount = Math.max(...countItems)
    return longestWordCount;
}
console.log(longestWord(['simple', 'is', 'better',  'complex','than']))

//other solutions

/* function longest(words) {
  return words.reduce((a,b) => a.length > b.length ? a : b).length;
} */

/* function longest(words) {
  let l = 0;
    for(let i = 0; i < words.length; i++) {
      if (l < words[i].length)
      l = words[i].length;
    }
  return l;
} */