// let arr = ['10',1,2,'20',3]

// let newArr = [1,2,4,3,7,5];

// let sort = arr.sort((a,b) => a-b);

// console.log(sort);


// let arr = [10,25,233,944,20];

// let newArr = arr.filter((a) => a > 10);

// console.log(newArr); // 233 , 94


// let arr = [10,25,233,944,20];

// let newArr = arr.some((a) => a > 10);

// console.log(newArr); // true


// let arr = [10,25,233,944,20];

// let newArr = arr.every((a) => a > 10);

// console.log(newArr); // false


let arr = [26,68,36,0,0,59,65]; // 26 68 36 59 65 0 0

// Method 1 :
// let newArr = arr.filter((a) => a != 0).concat(arr.filter((a) => a ==0));
//-----------------------------------------------------------------------------------------------------------------------
// Method 2 :
// let zero = []
// let nonZero = []

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element == 0){
//         zero.push(element);
//     }
//     else
//     {
//         nonZero.push(element);
//     }
// }


//     let newArr = [...nonZero,...zero];

    console.log(newArr);
    