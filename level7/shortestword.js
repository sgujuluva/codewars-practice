/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */



function findShort(s){
 
    let stringSplit = s.split(" ");
    let result = [];
    
    for(let i = 0; i < stringSplit.length; i++){

        result.push(stringSplit[i].length);
    
       
      
    }
   
    return Math.min(...result);
    
}
console.log(findShort("Let's travel abroad shall we"));
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


//otherway
/* function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
} */