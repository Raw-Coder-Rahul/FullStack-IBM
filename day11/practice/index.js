function reverseString(str) {
    return str.split('').reverse().join('');
}

let inputString = "hello";
console.log(reverseString(inputString)); // "olleh"

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let number = 7;
console.log(isPrime(number)); // true

function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers.";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

let a = 5;
console.log(`The factorial of ${a} is ${factorial(a)}`); // 120


function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

let n = 10;
console.log(fibonacci(n)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


function sumArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

let array = [1, 2, 3, 4, 5];
console.log(sumArray(array)); // 15



function findLargest(arr) {
    return Math.max(...arr);
}

let k = [1, 3, 7, 2, 5];
console.log(findLargest(k)); // 7
