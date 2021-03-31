var countingBackwardsForLoop = [];

for (var i = 10; i > 0; i -= 2) {
    countingBackwardsForLoop.push(i);
}
console.log(countingBackwardsForLoop);  //prints [ 10, 8, 6, 4, 2 ]





var arrayNumbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;

for (var i = 0; i < arrayNumbers.length; i++) {   //this for loop adds [i] to the total(which starts at 0) until it has counted the same amount of numbers
    total += arrayNumbers[i];                     //as the array length
}
console.log(total) //prints 28








//function multiplyAllNum(arr) {still works but below is typescript friendly
function multiplyAllNum(arr) {              //function to multiply the numbers together
    var product = 1;

    for (var i=0; i < arr.length; i++) {             //this line is looking through the indexes in side the array
        for (var j=0; j < arr[i].length; j++) {        //this line is looking for the index's inside each array index, line above has to wait for this piece of code to finsih before iterating once more
            product *= arr[i][j];                      //first for loop has to wait for second to finish before moving on with it's next iteration
        }
    }
    return product;
}

var product = multiplyAllNum([[1,2],[3,4],[5,6,7,]]);

console.log(product);





var myDoTester = [];
var i = 10;

do {                                
    myDoTester.push(i); i++;
} while (i < 5);
console.log(i , myDoTester);
/* in the above example, the myDoTester.push(i) is done once
before the conditions are met.
 

 while (i < 5) {                              
    myDoTester.push(i); i++;
 }
console.log(i , myDoTester);

The above code would only print out 10. [] because 5 is not less than 10, meaning that the .push code will not be ran
*/

function randomMathFunction() {
    return Math.random();
}
console.log(randomMathFunction())      //any random number from 0 to .9, never 1


var randomNumberBetween0And19 = Math.floor(Math.random() * 20);   //Math.floor rounds down to nearest whole number, this does random number between 0 to <1 and times by 20. 
                                                                        //then round down

function randomWholeNum() {
    return Math.floor(Math.random() * 10);

}
console.log(randomWholeNum());


function myRandomRangeNum(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(myRandomRangeNum(1, 10));   //function creates a random number between 1 and 10




function convertToInteger(str) {    //converts a string into an integer
    return parseInt(str);
}
console.log(convertToInteger("56"));




function checkEqual(a, b) {
    return a === b ? true : false;
}
console.log(checkEqual(1, 2));     //typing "return a === b" will print the same thing



















