/*  You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.

If the string matches, return true else false.
solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string. 
solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string. 
solve("codewars","codewars") = true, because the strings already match.*/

function solve(a,b){
    //..
    let stringSplit = a.split("*");
    console.log(stringSplit)
  if( a.length == b.length){
return true;
  }
   if(a.length > 1 && a[0] == "*" && b.length == 0){
return false;
}
if (a.length > 0 && a[0] == '*'){
        return match(a.substring(1), b) ||
               match(a, b.substring(1));
                
    }
}
console.log(solve("code*s","codewars"));
console.log(solve("codewar*s","codewars"));
console.log("equal length: ", solve("codewars","codewars"));