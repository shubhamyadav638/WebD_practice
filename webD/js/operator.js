//0---false  1---->true
// logical operator


// let a;
// console.log(a +2)// out --> NoN



//&& operator
// let a=2;
// let b=1;
// let c=12353;
// console.log(a && b && c);


// || or operator

// let a=false;
// let b=0;
// let c=12353;
// console.log(a || b ||c||a);

//! not operator
// let a=2
// console.log(!a);


//== only check the value


// let a=10;
// let b="10";
// console.log(a == b);

//=== check the value and operator
// let a=10;
// let b="10";
// console.log(a === b);


// let a=10
// a=a+3;
// a +=5
// console.log(a);


//increment oper...

// let a=10;
// console.log(a);
// console.log(a++);
// console.log(a++);
// console.log(a++);

// console.log(++a);

// console.log(++a);

// console.log(++a);

// console.log(++a);
// console.log(a);


//dec

// let a=10;
// console.log(a);
// console.log(a--);
// console.log(a--);
// console.log(a--);
// console.log(a--);
// console.log(--a);

// console.log(--a);

// console.log(--a);

// console.log(--a);

// console.log(--a);
// console.log(a);

//01/08/2024
// task
// let fname = "Rahul"
// let lname= "Kumar"

// console.log("I am " + fname+ " " + lname +  ". Thank you!");
// console.log(`I am ${fname} ${lname}. Thank you!`);

// template string supports mulltiple lines

// let str=`loremljjjjjjjjjjjjjjjjjjjjjjjj
// mmmmmmmmmmmmmmmmmmmmmmmm
// sssssssssssssss
// sssssssssssssssss
// scccccccccccccccc
// cccccccccccccc`;
// console.log(str);


// popup boxes........
// alert----->pop up warning
// confirm-----> user question
// prompt-----> user input

// alert("succesfully")

// const res = confirm("are you sure you want to continue?")
// console.log(res);


// let a= 2;
// if(a==2){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


// Task user input  to eligible for vote

// let age = prompt("Enter your age:")
// if (age >=18){
//     console.log("You are Voted");
    
// }
// else{
// console.log(" sorry ! you are not eligiable");
// }


// score count

// let num = Number(prompt("plese enter your marks"));


// if (num >100){
//     console.log("invalid marks");
//     }
// else if (num<35){
//     console.log("fail");
// }
// else if (num >=35 && num < 60){
// console.log("grade B");
// }
//   else if (num >= 60 && num < 90){
//     console.log("grade A");
//     }

// else if (num>=90 && num <=100){
//     console.log("Excellent");
// }




// swith is faster than if else

// if condition is true in 







// for loop


//1 to 5
// for (i=1 ; i<=5 ; i++){
//     console.log(i);
// }


// 5 to 1

// for (i=5;  i>=1; i--){
//     console.log(i);
// }


// odd no
// for (i=10 ; i<=20; i++){
//     if ( i%2 !=0){
//         console.log(i);
//     }
// }


// sum for 1 to 5  numbers
// let sum=0
// for (i=1 ; i<=5 ; i++){

// sum = sum+i
        
//     }
//     console.log(sum);


//fact user input
// let num = prompt("Enter your number")
// let fact = 1
// for (i=1 ; i<=num; i++ ){
//     fact = fact*i
// }
// console.log(fact);

//table print
// let num = prompt("Enter your number")
// let table = 1
// for (i=1 ; i<=10; i++ ){
//     table = num*i
//     console.log(`${num} * ${i} = ${table}`);
// }

// while loop
// let i=1
// while(i<=5){
//     console.log(i);
//     i++
// }


// do while loop

// let i =10

// do{
//     console.log(i);           // at least one output return
//     i++
// }
// while(i<=5)


// for each

// let arr=[1,56,56,15,12]
// arr.forEach(item=>{
//     console.log(item+5);
// })

// for each can not return the item of new arr
//to resolve this issue map () ---> es6


// let arr=[1,56,56,15,12]

// let newarr =[]
// newarr = arr.map(item=>{
//    return item+5
// })
// console.log(newarr);



// task thrice each value of arr to store new arr

// let arr=[1,56,56,15,12]

// let newarr =[]
// newarr = arr.map(item=>{
//    return item*3
// })
// console.log(newarr);


// let a=[]
// let b=[]

// let z=a+b
// console.log(typeof z);


//Es5 concat add to arr
// let arr1 =[34,6,7,4,5,8]
// let arr2 =[35,6,7,4,5,8]
// let res= arr1.concat(arr2)
// console.log(res);

//Es6 spread operator use add to arr

// let arr1 =[34,6,7,4,5,8]
// let arr2 =[35,6,7,4,5,8]
// let res= arr1=[...arr1,...arr2]
// console.log(res);



//add to obj
// let obj={
//     age:25,
//     city:"kanpur"
// }
// let obj1={
//    pin:50,
//    country:"india",
//     city:"patna"

// }
// let res= arr1={...obj,...obj1}
// console.log(res);


// arr mehod
// let arr =[34,6,7,4,5,8]
// arr.unshift(102)    // add starting
// arr.shift() // remove first element

// delete arr[0] // remove 0 index and print undefined or empty items
// arr.copyWithin(3,0) // replace 3 to 0 index
// arr.slice(2,4)


// console.log(arr);

// add to return one arr
// const myarr = [[1,5],[5,8],[3,55,6]]
// const newarr = myarr.flat()
// console.log(newarr);

// splice
// let arr =[34,6,7,4,5,8]
// arr.splice(1,0,45,68)  // first idex no , second delete element index, third is add element
// console.log(arr);


//string methods
// let str = "education"
// let res = str.length
// let res = str.charAt(4); //return 4 index alpabets..
// let res = str.charCodeAt(0) // code value 
// let res = str.at(-4) 
// let res = str[4]

// let res = str.slice(3,7) // index to index -1  value print it supoort negative index
// let res = str.slice(-7,-3) 
// let res = str.substring(3,7)  // same work slice method but it not support negative index

// console.log(res);

// let str = "Education"

// let res = str.substr(3,5) // first is index and second is print length
//
// let res = str.toLowerCase()
// let res = str.toUpperCase()

// console.log(res);



// let str = "    Education   "
// let res = str.trim() // space remove both side
// let res = str.trimStart() // space remove start space
// let res = str.trimEnd() // space remove end space
// console.log(res);


// let text ="5"
// let padded =text.padStart(4,"0") //add starting
// let padded =text.padEnd(4,"0") //add end
// console.log(padded);

// let text = "Hello world!";
// let result = text.repeat(2); //repeat time
// console.log(result);

let text = "Please visit Microsoft! i am microsoft";
// let newText = text.replace("Microsoft", "W3Schools");// replace microsoft to w3schools
// let newText = text.replaceAll("Microsoft", "W3Schools");// it use all microsoft replace but same words

let newText = text.replaceAll(/Microsoft/gi, "W3Schools"); // it replace all microsoft word lower case or upper case latter replace to w3schools
console.log(newText);