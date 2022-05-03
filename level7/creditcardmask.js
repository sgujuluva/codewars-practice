/*  Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.*/

function maskify(number){

    let lastFourDigits = number.slice(-4);
    let remainingDigits = number.split("").slice(0,-4);
    for (let i= 0; i < remainingDigits.length; i++){
        remainingDigits[i]= "#";
          }
    return remainingDigits.join("") + lastFourDigits;

}
console.log(maskify("4556364607935616")); // "############5616"
console.log(maskify("1"));