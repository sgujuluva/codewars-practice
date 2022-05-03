/*  Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.*/

function capitalize(s){
    let odd = "";
    let even = "";
    let arrayResult = [];

    for ( let i=0; i < s.length; i++){

        // check even index

        if(i % 2  === 0){

           even += s[i].toUpperCase();
           odd += s[i];
        }else{
            odd += s[i].toUpperCase();
    
            even += s[i];
          
        }
       
    }
    return [even,odd];

    
};
console.log(capitalize("abcdef"))