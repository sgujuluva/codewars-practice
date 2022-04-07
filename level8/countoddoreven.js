/* Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13]) */

function countOdd(number){

    let countResult = [];

    for ( let i = 1; i < number; i++){

        if ( i % 2 === 1){

            countResult.push(i);
          
        }
            }
    return countResult.length;
}

console.log(countOdd(5));
console.log(countOdd(15));
console.log(countOdd(15023));

