/* Given a string, swap the case for each of the letters.

Examples
""           -->   ""
"CodeWars"   -->   "cODEwARS"
"abc"        -->   "ABC"
"ABC"        -->   "abc"
"123235"     -->   "123235" */

function stringSwap(string){
    let result = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toLowerCase()){
            result += string[i].toUpperCase();
        }else{
            result += string[i].toLowerCase();
        }
    }
return result;
}
console.log(stringSwap("CodeWars" ));
console.log(stringSwap("abc" ));