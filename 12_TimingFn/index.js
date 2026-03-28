// console.log("hello js");

// ----------------------------------------------------------------------------
// 1. setTimeout() :- run after perticular time

// setTimeout(() => {
//     console.log("1s timeout"); 
// },5000)

// setTimeout(()=>{
//     console.log("After 1s hello js");
// },3000) // 1s --> 1000 ms

// ---------------------------------------------------------------
// 2. setInterval() and clearInterval() :- Infinite run 

// let count = 0;

// let timer = setInterval(() => {
//     count++;
//     console.log("1sec",count);
    
//     if(count == 7){
//         clearInterval(timer);
//     }
// },1000)

// -----------------------------------------------------------------
// 4. clearTimeOut() :- stops settimeout before it execute

// let timer = setTimeout(()=>{
//     console.log("timeout will not run");
    
// },3000)


// clearTimeout(timer);

//------------------------------------------------------ Time Bomb ----------------------------------------------------------

let time = 5;

let timeBomb = setInterval(() => {
    console.log("Remaining Time :",time);
    time--;

    if (time == 0) {
        console.log("Bomb is Exploid");
        clearInterval(timeBomb);
    }

},1000)