/*  Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
*/
function solve(arr){  
    //code
   
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
 
    let result = [];

    for (let i = 0; i <= arr.length -1 ; i++){

        let sum = 0;

        for(let j= 0; j <= arr[i].length -1 ; j++ ){

            if(arr[i][j].toLowerCase() === alphabets[j]){

               sum ++;
                                   
             }            
        }
        
        result.push(sum);  
    }
 
    return result;

    }
    console.log(solve(["abode","ABc","xyzD"]));