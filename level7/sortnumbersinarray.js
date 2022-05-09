/* Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return [] */
let numbers = [1, 2, 10, 50, 5];
let sortedNumbers = numbers.sort((a,b) => {
    if(a>b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }
})

//console.log(solution(null));
console.log(sortedNumbers);
//console.log(solution ([1, 2, 10, 50, 5]));

// other ways

function solution(nums){
    if(nums === null){
      return [];
    }
    let result = nums.sort((a,b) => a -b);
    return result;
  
  }