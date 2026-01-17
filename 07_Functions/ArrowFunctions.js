// let Arrow = (name) => console.log('hello js',name);
// console.log(Arrow());

// Arrow('Royal');

// let Sum = (a,b) => console.log(a + b);

// Sum(5,3);

let arr = [];

let Arrow = () => {
  for (i = 0; i < 4; i++) {
    let ele = parseInt(prompt("Enter a number:"));
    if (arr.length === 0 || ele > arr[arr.length - 1]) {
        arr.push(ele);
    }
  }
  console.log(arr);
  
};


Arrow();