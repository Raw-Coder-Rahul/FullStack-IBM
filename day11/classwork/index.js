console.log(this);

let obj = {
    name: "Alex Roger", // key - values
    class: "B.Tech", // key 
    myfunction:() => { // method
        console.log(this);
        console.log(this.name,this.class);
        console.log ('I am method inside object');
    },
    subjects:["DBMS", "CN", "AI", "ML", "DL"],
    newObj: {
        1:80,
        nestedFunction:function() {
            console.log("I am nested method of object.");
            console.log(this);
        },
        nestednewObj: {
            myMethod:function() {
                console.log("I am another nested method of object.");
                console.log(this);
            }
            
        }
    }
}

console.log(obj.myfunction());
(obj.newObj.nestedFunction());

//conditions

let num1 = 10, num2 = 20;
if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
}
else if(num1==num2) {
    console.log(`${num1} is equal ${num2}`);
}
else {
    console.log(`${num1} is not less than ${num2}`);
}


//Fizz Buzz
let num = 21;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("Fizz Buzz");
}
else if (num % 5 == 0 && !(num % 3 == 0)) {
    console.log("Buzz");
}
else if (num % 3 == 0 && !(num % 5 == 0)) {
    console.log("Fizz");
}
else {
    console.log("Not Fiss Buzz");
}

//for loop

num = 20;
for (let i = 2; i <=num; i+=2) {
    console.log(i);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i<arr.length; i++) {
    console.log(arr[i], i);
}

let str = "Rozetr Star";
for (let i = 0; i<str.length; i++) {
    console.log("a"+str[i], i);
}

let a = [ 'a' , 'break', 'caches', 'd', 'e'];
for (let n of a) {
    console.log(n);
}

//while loop
num= 5;
while(num<10) {
    //logic
    num++;
}
console.log(num);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i<arr1.length; i++) {
    if (!(arr1[i]%2==0)){
        console.log("Odd Number : ",arr1[i]);
    }
    else {
        console.log("Even Number : ",arr1[i]);
    }
}