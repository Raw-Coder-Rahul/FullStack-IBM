// Part 1: Object & Methods
// Problem 1: Create a Student Management System (Using Objects)
const student = {
    name: "Aryan Kumar",
    rollNumber: 101,
    marks: {
    Math: 80,
    Science: 65,
    English: 50,
    History: 70
    },
    getAverageMarks: function() {
        // Calculate and return average marks
        // console.log(this.marks);
        let k = this.marks;
        let count = 0;
        let total = 0;
        for(const subject in k) {
            if (k.hasOwnProperty(subject)){
                // console.log(`${k[subject]}`);
                total += k[subject];
                count++;
            }
        }
        const avg = total / count;
        return avg;
    },
    checkPassOrFail: function() {
    // Check if passed or failed
        if(this.getAverageMarks()>40) {
            return "Passed";
        }
        else {
            return "False";
        }
    }
};
console.log(student.getAverageMarks()); // Output: 66.25
console.log(student.checkPassOrFail()); // Output: "Passed"


// Problem 2: Library System (Nested Objects & Methods)
const library = {
    books: {
    "Atomic Habits": { author: "James Clear", availableCopies: 3 },
    "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
    },
    borrowBook: function(bookName) {
        // Logic for borrowing a book
        if (this.books[bookName].availableCopies > 0) {
            this.books[bookName].availableCopies--;
        }
    },
    returnBook: function(bookName) {
        // Logic for returning a book
        this.books[bookName].availableCopies++;
        return `${bookName} returned successfull.`
    }
};
library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies); // Output: 2


// Part 2: Conditions & Loops
// Problem 3: Generate Multiplication Table (For Loop)
// Task: Write a function generateTable(num, limit) that prints the multiplication table of a given num up to limit.

let generateTable = (a, b) => {
    for (let i = 1; i <= b; i++) {
        let x = a * i;
        console.log(`${a} x ${i} = ${x} `);
    }
}
generateTable(5,10);


// Problem 4: FizzBuzz (If-Else Conditions)
// Task:
// Write a function fizzBuzz(n) that prints numbers from 1 to n, but:
// • Print "Fizz" if the number is a multiple of 3
// • Print "Buzz" if the number is a multiple of 5
// • Print "FizzBuzz" if the number is a multiple of both 3 and 5
// • Otherwise, print the number itself
let fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Fizz Buzz");
        }
        else if (i % 5 == 0 && !(i % 3 == 0)) {
            console.log("Buzz");
        }
        else if (i % 3 == 0 && !(i % 5 == 0)) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(15);


// Part 3: String & Array Manipulations
// Problem 5: Reverse a String Without Using .reverse()
// Task:
// Write a function reverseString(str) that takes a string and reverses it without using .reverse()
// method.

let reverseString = (a) => {
    let z = a.split('');
    let x = 0;
    let y = z.length - 1;
    while (x < y) {
        let t = z[x];
        z[x] = z[y];
        z[y] = t;
        x++;
        y--;
    }
    return z.join('');
} 
console.log(reverseString("JavaScript"));

// Problem 6: Remove Duplicates from an Array
// Task:
// Write a function removeDuplicates(arr) that removes duplicate elements from an array without using Set().

let removeDuplicates = (s) => {
    let k = s.length;
    for (let i = 0; i < k; i++) {
        for (let j = i + 1; j < k; j++) {
            if (s[i] == s[j]) {
                for (let m = j; m < k - 1; m++) {
                    s[m] = s[m + 1];
                }
                k--;
                j--;
            }
        }
    }
    return s.slice(0, k);
};
console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));


// Problem 7: Find the Longest Word in a Sentence
// Task:
// Write a function longestWord(sentence) that finds the longest word in a given sentence.

let longestWord = (sentence) => {
    let words = sentence.split(" ");
    let longest = " ";
    for (let word of words){
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("Coding is amazing and challenging"));


// Part 4: Higher-Level Thinking
// Problem 8: Custom Array Method (Creating Your Own .map()) Task:
// JavaScript has a built-in .map() method, but can you create your own version of it? Write a function myMap(arr, callback) that takes an array and a callback function and applies the callback to each element.

function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

function myCallback(x) {
    return x * 2;
}
console.log(myMap([1, 2, 3, 4], myCallback));


//Problem 9: Find the First Non-Repeating Character in a String
// Task:
// Write a function firstUniqueCharacter(str) that returns the first non-repeating character in a given string.

function firstUniqueCharacter(str) {
    let charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } 
        else {
            charCount[char] = 1;
        }
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstUniqueCharacter("aabbcddce"));


// Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target
// Task:
// Write a function findPairs(arr, target) that finds all pairs of numbers in an array that sum to a given target.

let findPairs = (a,b) => {
    let c = a.length;
    let d = [];
    for (let i = 0; i < c; i++) {
        for (let j = i + 1; j < c; j++) {
            if (a[i] + a[j] == b) {
                d.push([a[i], a[j]]);
            }
        }
    }
    return d;
}

console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));


// Problem 11: Implement a Stack in JavaScript
// A stack follows the LIFO (Last In, First Out) principle. Implement a Stack class with the following methods:
// • push(value) – Adds a value to the stack
// • pop() – Removes and returns the last added value
// • peek() – Returns the last added value without removing it
// • isEmpty() – Returns true if the stack is empty, false otherwise

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop()); // 20
console.log(myStack.peek()); // 10
console.log(myStack.isEmpty()); // false

// Question: - String Manipulation Challenge
// You are given a string containing alphabets and numbers. Your task is to extract all numbers from the string, sum them up, and return the new modified string where all numbers are replaced with their sum.
function manipulateString(input) {
    let sum = 0;
    let result = input.replace(/\d+/g, (match) => {
        sum += parseInt(match);
        return '';
    });
    return result + sum;
}

let inputString = "abc123xyz45pq7";
console.log(manipulateString(inputString)); // "abc175pq"


// Question: - Find Most Frequent Element in an Array
// Given an array of numbers, find the element that appears the most times. If multiple elements have the same frequency, return any one of them.
let findfreq = (arr) => {
    const freqMap = new Map();
    let max = 0;
    let mostfreq;
    arr.forEach(element => {
        const freq = (freqMap.get(element) || 0) + 1;
        freqMap.set(element, freq);
        if (freq > max) {
            max = freq;
            mostfreq = element;
        }
    });
    return mostfreq;
}

let arr = [1, 3, 2, 3, 4, 1, 3, 2, 3, 5];
console.log(findfreq(arr));