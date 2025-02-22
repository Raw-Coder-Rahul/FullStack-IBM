// Section 1: Data Types & Length
// 1. What will be the output of the following cod? Explain why?
let x = "5";
let y = 5;
console.log(x==y);
console.log(x===y);
console.log("In this program '==' is calculate only values but in '===' is calculate values with data types. So, '==' is True and '===' is False.");
// 2. How can you find the length of the longest word in this array?
const words = ["JavaScript", "Programming", "Function", "Hoisting"];
let len = words.length;
let m = [];
for(let i = 0; i < len; i++) {
    let k = words[i].length;
    m.push(k);
}
let max = Math.max(...m);
console.log("longest word in array "+max);


// Section 2: let, const, var & Scope
// 3. What will  be logged in the console? Explain your answer.
function testScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a);
    // console.log(b);
    // console.log(c);
}
testScope();
console.log("var a is Globally declared value. So, 'a' is work function-scoped.");
console.log("It's ReferenceError because let and const is work locally. So, if I try to work in console.log so you should write const and let oustside the if block or other access point.");
// 4. Rewrite the following function using const and fix any issues.
const name = "John";
function greet() {
    if(true) {
        const message = "Hello " + name;
        console.log(message);
    }
}
greet();


// Section 3: Traditional Function vs. Arrow Function
// 5. Convert this traditional function into an arrow function without changing the output.
function multiply (a, b) {
    return a*b;
}
let a1 = 10;
let b1 = 20;
console.log(multiply (a1, b1));
/*arrow function*/
const multiply1 = (a, b) => a*b;
console.log(multiply1 (a1, b1));
// 6. What will be the output? Explain why.
const obj = {
    name: "Alice",
    sayHello: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name);
        }, 1000);
    }
};
obj.sayHello(); // It's called arrow function
console.log("We use setTimeout() function that's help to specify execute time after program run 1000 means 1000 miliseconds(1 second).");


// Section 4: Hoisting
// 7. What will be the output of this code? Explain why.
console.log(a);
var a = 10;
// console.log(b);
// let b = 10;
console.log("var is a global scope, so 'a' is declared but not assign in that time or before console.log(a), in 'let b' let is a local scope so create ReferenceError 'b' is not initialized before console.log(b). 'So, the output is undefined and ReferenceError: Cannot access 'b' before initialization.");
// 8. Rearrange  the following function so it works correctly, explaning the problem.
console.log(square(5));
function square(n) {
    return n*n;
}

// console.log(double(4));
var double = function(n) {
    return n * 2;
}
console.log(double(4));
console.log("'console.log(double(4));' calling is falied because the double function is declared using a variable with var. In var declarations are hoisted to the top of their scope, the actual assignment of the function to the variable double is not hoisted. So, that mean console.log(double(4)); is called, the double variable is still undefined.");


// Section 5: Operators (Arithmetic, Assignment, Comparison, Logical)
// 9. What will be the output of the following expressions?
console.log(5 + "5");
console.log(5 - "3" );
console.log(5 * "2" );
console.log("10" / 2);
console.log(10 % "3");
// 10. Rewrite this code using shorthand assignment operators.
let x1 = 10;
x1 = x1 + 5;
console.log('x1 += 5');
x1 = x1 * 2;
console.log('x1 *= 2');
x1 = x1 - 3;
console.log('x1 -= 3');
x1 = x1 / 2;
console.log('x1 /= 2');
// 11. What will be logged in the console? Explain why.
console.log(5 > 3 && 10 < 20);
console.log('true && true = true');
console.log(5 > 3 || 10 > 20);
console.log('true && true = true');
console.log(!(5 > 3));
console.log('!(true) = false');


// Section 6: Function Parameters vs Arguments
// 12. What will be the following function?
function sum(a, b, c = 5) {
    return a+b+c;
}
console.log(sum(2, 3));
console.log(sum(2, 3, 10));
// 13. Write a function that takes any number of arguments and returns their sum.
function sum(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(10, 20, 30)); // Output: 60
console.log(sum(5)); // Output: 5
console.log(sum()); // Output: 0


// 14. Fix the following function to work correctly and explain the issues.
console.log("Outer function - ")
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter1 = outer();
counter1();
counter1();
const counter2 = outer();
counter2();
counter2();