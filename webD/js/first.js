// let a= 10;


// console.log("hi" + a);


// Data types

// 1- num , str, arr----> []object {}-----> object, undefine,null ---> that is object ,bool
// let a=10;
// let a="10";
// let a=true;
// let a=false;
// let a;
// let a = [1,2,3]
// let a = {a:1,b:2,c:3}
// console.log(a);
// console.log(typeof a);



// function declaration
// function sum(a,b){
//     const r=a+b;
//     console.log(r);
// }
// /// fun call......
// sum(5,10)




// function div(){
//     let a=20;
//     let b=20;
//     let c= a*b;
//     console.log(c);
// }

// div();



//user input


function plus(){
    // let num1 = Number(prompt("Enter your first number:"));
    // let num2 = Number(prompt("Enter your second number:"));
    // let num3 = Number(prompt("Enter your third number:"));
    // let num4 = Number(prompt("Enter your fourth number:"));

    // let re= (num1+num2+num3+num4)/4;
    document.write(re);
}

// plus();



// assignment....

function assi(p,r,t){
    
    const simple=(p*r*t)/100;
    const compound=(p*(1+r/100)^t-p);
    document.write("SI is : "  + simple);
    document.write("CI is : "  + compound);
}
    let num1 = Number(prompt("Enter the Principal:"));
    let num2 = Number(prompt("Enter the Rate:"));
    let num3 = Number(prompt("Enter the Time:"));
    

// assi(num1,num2,num3);


//Logical operator........
let a=2;
let b=ture;
document.write(a && b)



