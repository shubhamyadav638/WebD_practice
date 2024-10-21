// function

// function myfunction() {
//     console.log('welcome');
//     console.log('pit');
// }
// myfunction();
// myfunction();
// myfunction();
// myfunction();
// myfunction();

//parameter call
// function myfunction(msg) {
//     console.log(msg);
// }
// myfunction("hiiii");


//sum of two number
// function myfunction(x, y) {
//     console.log(x + y);
// }
// myfunction(1, 4);


// return
// function sum(x, y) {
//     s = (x + y);
//     console.log("before return");
//     return s;

//     console.log("after return")
// }
// let val = sum(3, 4);
// console.log(val)


//arrow function

// const arrowsum = (a, b) => {
//     console.log(a + b);
// }

//mull.....
// const arrowmul = (a, b) => {
//     return a * b;
// };


//count vowels
// function countvowel(str) {
//     count = 0;
//     for (const char of str) {
//         if (
//             char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//         ) {
//             count++;

//         }
//     }
//     console.log(count);
// }


// for each loop in array
// let arr = ["mi", "dc", "rcb"] //[1, 2, 3, 4, 5];
//     // arr.forEach(function printval(val) {
//     //or
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// });

//square print using for each loop 
// let arr = [1, 2, 3, 7, 55];
// arr.forEach((num) => {
//     console.log(num * num);
// });


//map method
// let num = [1, 2, 3, 7, 55];
// num.map((val) => {
//     console.log(val);
// });

// filter method
// all even number
// let val = [1, 2, 3, 7, 55];
// let newarr = val.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(newarr)

//reduce method
//largest no return
// let val = [1, 2, 3, 7, 55];
// const newarr = val.reduce((pre, curr) => {
//     return pre > curr ? pre : curr;
// });
// console.log(newarr)


//givan a array to 90 + score filter

// let mark = [45, 91, 22, 95, 59, 98, 97, 100, 200];
// let filtermark = mark.filter((val) => {
//     return val > 90;
// });
// console.log(filtermark)

//create a array
// let n = prompt("enter a number :");
// let arr = [];
// for (i = 0; i <= n; i++) {
//     arr[i - 1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((pre, curr) => {
//     return pre + curr;
// });
// console.log(sum)
// let cal = arr.reduce((pre, curr) => {
//     return pre * curr;
// });
// console.log(cal)