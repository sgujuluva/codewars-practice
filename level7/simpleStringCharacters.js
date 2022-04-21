/* In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters. */

let stringCount = (stringInput) => {
    let uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseAlphabets = uppercaseAlphabets.toLowerCase();
    let numbers = "1234567890"
    let specialCharacters = "*'&#$!.:;,-_~<>|=}][(){/§";
    let numbersCount = 0;
    let specialCount = 0;
    let uppercaseAlphabetsCount = 0;
    let lowercaseAlphabetsCount = 0;
   let result = [];
    for ( let i=0; i < stringInput.length; i++){

        if(uppercaseAlphabets.includes(stringInput[i])){
       uppercaseAlphabetsCount++;
        
    }else if(lowerCaseAlphabets.includes(stringInput[i])){
           
       lowercaseAlphabetsCount ++;
    }else if(numbers.includes(stringInput[i])){
           
            numbersCount ++;
        }else if(specialCharacters.includes(stringInput[i])){

            specialCount ++;
        }
      
    }

    return [uppercaseAlphabetsCount].concat(lowercaseAlphabetsCount).concat(numbersCount).concat(specialCount);
    //return result;
}
console.log(stringCount("*'&ABCDabcde12345"));