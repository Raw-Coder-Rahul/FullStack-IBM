// 1. Number Reversal without Using Built-in Methods
function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + num % 10;
        num = Math.floor(num/10);
    }
    return rev;
}
let n = 1234 
console.log(reverseNumber(n));

// 2. Custom Length Function
function customLength(str) {
    let c = 0;
    for (let i of str) {
        c++;
    }
    return c;
}
let a = customLength("JavaScript");
console.log(a); // Output: 10

// 3. Avoid Hoisting Bug
console.log(add(2, 3)); // Should output: 5
console.log(multiply(2, 3)); // Should output: 6️
function add(a, b) {
    return a + b;
};
var multiply = function(a, b) {
    return a * b;
};