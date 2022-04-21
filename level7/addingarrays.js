/* Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']] */

let arrayOfLetters = (array) => {
    let result = [];

    for ( let i= 0; i < array.length; i++){

        for(let j= 0; j < i ;j++){
            array[i][j] += array[j][i];
            result.push(array[i]);
        }
       
    }
}
console.log(arrayOfLetters([['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']] ));