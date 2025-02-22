// 4. Function That Returns Another Function
// Write a function counter() that returns another function. Each time the returned function is called, it should increase a count and return it.
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const count = counter();
console.log(count()); // Output: 1
console.log(count()); // Output: 2
console.log(count()); // Output: 3