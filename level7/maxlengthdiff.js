/*  You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13*/

function maxLength(a1, a2) {
  /* let maxArray1 = Math.max(a1);
  let maxArray2 = Math.max(a2); */
  if (a1.length === [] || a2.length === []) {
    return -1;
  } else {
  
    for( let i=0; i < a1.length; i++){
      let maxLengtha1 = Math.max(a1);
      return maxLengtha1;
       }
  }
  
}
//not done still pending
console.log(maxLength(a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));