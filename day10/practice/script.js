let str = "I will buy a Laptop"
/* String is immutable*/
console.log(str);
console.log(str.length - 1)
console.log(str[str.length - 1])
console.log(str[2])


/* Array */
let arr = [1, 2, 3, "Rishita", "1.15", "true", true, null, undefined, ""];
// console.log(arr)
console.log(arr[arr.length - 2])
console.log(arr[3])
arr.push("Ipsita")
console.log(arr)
arr[4] = "Madhusa"
console.log(arr)
console.log(arr.pop())

/* Object */
let obj = {
    Dipankar: {
        class: "B Tech",
        roll: 195,
        sub: ["Math", "DSA", "DBMS", "DAA"]
    },
    Iman: {
        class: "B tech",
        roll: 196,
        sub: ["Math", "DSA", "DBMS", "DAA"]
    },
    Rishita: {
        class: "B tech",
        roll: 194,
        sub: ["Math", "DSA", "DBMS", "DAA"]
    },
    1: undefined
}
// console.log(obj["Dipankar"])
// console.log(obj["Dipankar"].sub[1])
// console.log(obj.Dipankar.sub[2])

console.log(obj)
obj.sohan = { // Create new key
    roll: 74,
    hobbies: "playing"
}
console.log(obj)
delete obj.Iman // Delete key
console.log(obj)

/* Three type of declaring object 
1. Using Object literal
2.using new Keyword
3. Constructor
*/

let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}
console.log(superHeroes["1"].villains[0].health)
console.log(superHeroes["2"].power[1])
superHeroes["2"].power[1] = "Cars"
console.log(superHeroes["2"].power[1])
superHeroes["2"].brand = ["Marvel"]
console.log(superHeroes["2"])