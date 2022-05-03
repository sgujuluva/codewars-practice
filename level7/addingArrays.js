/* [['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array). */

let addingArrays = (array) => {
    let result = [];
    
    
  for (let i = 0; i < array.length; i++) {
     result[i] = "";
    for (let j = 0; j < array[i].length; j++) {
      result[i] +=  array[j][i];
    }
      }
  return result;
};
console.log(
  addingArrays([
    ["J", "L", "L", "M"],
    ["u", "i", "i", "a"],
    ["s", "v", "f", "n"],
    ["t", "e", "e", ""],
  ])
); // ['just', 'Live', 'Life', 'man']

//logic
/* result[0] = array[0][0] + array[1][0] + array[2][0] + array[3][0];

 */

///['just Live Life man']

let addingArrays1 = (array) => {
 
  let result = [];
  
for (let i = 0; i < array.length; i++) {
   //result[i] = "";
  for (let j = 0; j < array[i].length; j++) {
    
    result +=  array[j][i]  ;   
  }
 result += " ";
    }
    return result.trim();
};
console.log(
addingArrays1([
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
])
);
