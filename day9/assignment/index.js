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
