// Regular  function
const salman = function () {
  console.log("this is the good person");
};


// let addition = function(x,y){
//     return x+y;
// }

// console.log(addition(10,10))

/*
Limitations of Arrow Functions:-
An arrow function expression is an alternative to a traditional function expression, but there are some limitations: 

    Arrow functions do not have its own bindings to this or super, and should not be used as methods.
    It is not suitable for the call, apply and bind methods, which generally rely on establishing a scope.
    Arrow functions cannot be used as constructors.
Arrow functions are a powerful addition to ES6, but we have to be careful while using them. There are some places where arrow functions are not usable, and this can cause difficulty for us to track errors, especially if we do not understand how they really work. Arrow functions are the best choice when working with closures or callbacks, but it is not a good choice when working with object methods or constructors.
*/
// let addition = (x,y)=> {
//     console.log(x+y)
//     return "hello salman"
// }

// console.log(addition(10,10));

// let myfunc = (arg1, arg2, ...argN) => expression

// let arr = (x,y)=>{
//     let s=x*y;
//    console.log(s);
//     return arr;

//     }

//     console.log(arr(3,3));
