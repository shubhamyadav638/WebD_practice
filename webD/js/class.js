// class Person{
//     constructor(p,q){
//         // data members of a class is created 
//         this.fname = p
//         this.age = q
//     }
// }
// const obj = new Person('rahul', 20)
// console.log(obj);



//task
// class Car{
//         constructor(p,q){
        
//             this.year = p
//             this.price = q
//         }
//     }
//     const model = new Car(2020, 15550)
//     const model2 = new Car(2021, 195555660)
//     console.log(model, model2);


//inheritance---> child/ derived class inherits the properties

// from parent class

// class Car{
//     constructor(p,q){
    
//         this.year = p
//         this.price = q
//     }
// }

// in child class we alwayes need to call super()
//super is used to call the parent class constructure

// class child extends Car{
//     constructor(x,p,q){
//         super(p,q)
//     this.brand = x
//     }
// }
// const obj = new child("skoda" ,2021,1122222222)
// console.log(obj);



//task
// class Basic{
//         constructor(a,b){
        
//             this.fname = a
//             this.lname = b
//         }
//     }

//     class P extends Basic{
//             constructor(x,y,a,b){
//                 super(a,b)
//             this.dept = x
//             this.company = y
//             }
//         }
//         const obj = new P("Software engg..",'IBM' ,'Rahul',"singh")
//         console.log(obj);

//         class Q extends Basic{
//             constructor(z,a,b){
//                 super(a,b)
//             this.empl = z
//             }
//         }
//         const child2 = new Q("xyz...emply",'Rahul',"singh")
//         console.log(child2);



//task sum of arr
// let arr = [32,56,3,65,7]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);


// create a fun add three number

// function Number(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
//    }
//    Number(50, 60, 75);



// rest parameter

// function Number(...arr) {
//     console.log(arr);
// let Number = 0
//     for (let i = 0; i < arr.length; i++) {
//           Number += arr[i];
//         }
        
//         console.log(Number);

//    }
//    Number(50, 60, 75);
//    Number(80, 60);
//    Number(90, 60, 75);
//    Number(50, 60, 75,57,55);
//    Number(50, 60, 75,55);
//    Number(50, 60, 75,44,66,88);



// multiply
// function Number(...arr) {
//     console.log(arr);
// let Number = 1
//     for (let i = 1; i < arr.length; i++) {
//           Number *= arr[i];
//         }
        
//         console.log(Number);

//    }
//    Number(50, 60, 75);
//    Number(80, 60);
//    Number(90, 60, 75);
//    Number(50, 60, 75,57,55);
//    Number(50, 60, 75,55);
//    Number(50, 60, 75,44,66,88);


// type of fun...
// 1. function declaration
// 2.function expression
// 3.arrow function
// 4.IIFE

// function declaration---> hoisted -- declared at loop

// sum(2,6)
// function sum(a,b){
//     console.log(a+b);
// }


//function expression ----> not hoisted

// const sum = function(a,b){
//     console.log(a+b);
// }
// sum(2,6)



// arrow function ---> callback fun
// const sum = (a,b)=> console.log(a+b);
// sum(8,9)
   

//IIFE (immediately invoked fun expression)
//anonymous fun
// (function(a,b){
//     console.log('IIFE',a+b);
// })(2,7)


