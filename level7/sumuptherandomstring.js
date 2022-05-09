/* Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
If no number was given in the string, it should return 0
Example:

str = "In 2015, I want to know how much does iPhone 6+ cost?"
The numbers are 2015, 6

Sum is 2021.

 */


  /* function findSum(str)
    {
        // A temporary string
        let temp = "0";
   
        // holds sum of all numbers
        // present in the string
        let sum = 0;
   
        // read each character in input string
        for (let i = 0; i < str.length; i++) {
            let ch = str[i];
   
            // if current character is a digit
            if (!isNaN(String(ch) * 1))
                temp += ch;
   
            // if current character is an alphabet
            else {
                // increment sum by number found earlier
                // (if any)
                sum += parseInt(temp);
   
                // reset temporary string to empty
                temp = "0";
            }
        }
   
        // atoi(temp.c_str()) takes care of trailing
        // numbers
        return sum + parseInt(temp);
    }
  console.log(findSum("In 2015, I want to know how much does iPhone 6+ cost?")); */


  // otherway


function numberAdd(str){
	let strArr = str.split("");
     let strTemp=0;
     let numbers = "0123456789"
     if(!numbers.includes(str)){
        strTemp = 0;
    }
	for(i=0;i<strArr.length;i++){
		if(!isNaN(strArr[i]) ){
			strTemp+=parseInt(strArr[i]);
		}
        
    }
	return strTemp;
}

console.log(numberAdd('iam2015bar6cat1')) ; //15
console.log(numberAdd("In 2015, I want to know how much does iPhone 6+ cost")) ;
console.log(numberAdd("In  I want to know how much does iPhone + cost?")) ;