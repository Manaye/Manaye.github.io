'use strict';
/* Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.*/
function maxOfThree(a, b, c) {
     if(a>b && a>c){    
         return a;
     }
     else if(b>a && b>c){
         return b;
     }
   else{
       return c;
   }
     }

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));


/*Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/
function isVowel(alphabet){
       if( alphabet.length != 1){
           return false;
       }
     if(alphabet.includes('a','e','i','o','u')){
        return true;
    } 
    else
        return false;
}
console.log("Expected output of isVowel is True  " + myFunctionTest(true, isVowel("a")));
console.log("Expected output of isVowel is False  " + myFunctionTest(true, isVowel("z")));


/*Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. */
function sum(arr){
    let z=0;
    for(var i=0; i<arr.length;i++){
        z+= arr[i];
    }
    return z;
}
console.log("Expected output of sum is 25  " + myFunctionTest(25, sum([15, 2, 4, 4])));


function multiply(arr){
    let product=1;
    for(let i=0; i<arr.length;i++){
        product*= arr[i];
    }
    return product;
}
console.log("Expected output of multiply is 240  " + myFunctionTest(240, multiply([10, 4, 3, 2])));


/*Define a function reverse() that computes the reversal of a string. For example, 
reverse("jag testar") should return the string "ratset gaj". */

function reverse(str){
    let reversed = "";
    for(let i =str.length ;i>=0;i--)
    {
        reversed += str.charAt(i);
    }
    return reversed;
}

console.log("Expected output of reverse is ratset gaj  " + myFunctionTest("ratset gaj", reverse("jag testar")));
/* Write a function findLongestWord() that takes an array of words and returns the length of the longest one.*/


function findLongestWord(word) {

    let max  = word[0].length;

    for(let i=1; i< word.length; i++) {
        if(max<word[i].length ) {
            max=word[i].length;
        }
    }
    return max;}


console.log("Expected output of findLongestWord is 9  " + myFunctionTest(9, findLongestWord(["hello","world","this","is","verycool"])));


/*Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
function filterLongWords(a,b) {

    let c= [];
    let j=0;
    for(let i=0; i< a.length; i++) {
        if(a[i].length > b) {
           c.push(a[i]);
        }
    }
    return c;
}

console.log("Expected output of filterLongWords is 'programer'  " + filterLongWords(["hiwi","is","hiwots","maki","programer"],4));




    function myFunctionTest(expected, found) {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }


