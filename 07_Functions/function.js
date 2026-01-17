// Repeat operation remove kari simply call the function again and again

// var a = 10;
// var b = 20;

// function add(){
//     console.log(a + b);
// }

// add();

//---------------------------------------------------------------------------
// 1) with return type and with arguments
// 2) without return type and with arguments
// 3) without arguments and with return type
// 4) without return type and arguments

// 1) without return type and arguments
// var a = 10;
// var b = 20;

// function add() {
//   console.log("addition :",a + b);
// }

// add();
//----------------------------------------------------
// 2) without arguments and with return type

// function sub(){
//     return b - a;
// }

// let sub1 = sub();
// console.log("subtraction :",sub1);

//---------------------------------------------------------
// 3) without return type and with arguments

// function mul(a,b){
//     console.log("multiplication:",a*b);
// }

// mul(5,10);

//---------------------------------------------------------
// 4) with return type and with arguments

// function division(a,b){
//     return a / b;
// }

// let div = division(10,2);
// console.log("Division :",div);
//------------------------------------------------------------------------
/*
Task : Check Character Exists

Write a function that checks whether a given character exists in a string
*/

// let str = "Royal";

// function check(string, char) {
//   for (let i = 0; i < string.length; i++) {
//     const element = string[i];
//     if (char == element) {
//       console.log("Char at index no. :", i);
//     } else {
//       console.log("char not find");
//     }
//   }
// }

// check(str, "a");
//-------------------------------------------------------------------------
/*
Rotate array by 1 position (right)
Input: [1, 2, 3, 4] Output: [4, 1, 2, 3]

*/

// function Shift(arr) {
//   let n = arr.length - 1;

//   let last = arr[arr.length - 1];
//   for (let i = n; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }

//   arr[0] = last;
//   return arr;
// }


// let newArr = Shift([1, 2, 3, 4 , 5]);

// console.log(newArr);

//---------------------------------------------------------------------------------------------------------------
/*
Sort array (Ascending)
Input: [5, 3, 1, 4] Output: [1, 3, 4, 5]
 */

let arr = [5,3,1,4]

function Sort(){

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

return arr
}

let result = Sort();

console.log(result);


