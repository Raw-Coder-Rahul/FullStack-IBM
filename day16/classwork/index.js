// setTimeout, setInterval, setImmediate:----- macroTask

//promise, queMicroTask :----Micro Task(It's first execute)

let name = "synchronous";

console.log(name);

setTimeout(() =>{
    console.log("Asynchously running");
}, 5000);

let surName = "Code";

console.log(surName);

setTimeout(() =>{
    console.log("Synchously syncing");
}, 2000);

queueMicrotask(()=>console.log("Microtask Syncing"))

setTimeout(() =>{
    console.log("Synchously syncing");
}, 4000);

for (var i = 0; i <= 5 ;i++) {
    console.log(i);
    setTimeout(()=>{
        console.log(i);
    },1000);
}

console.log(name, surName);


let myPromise = new Promise((resolve, reject)=> {
    let flag = false;

    if(flag) {
        resolve("promise is resolved with green flag");
    }
    else {
        reject("promise is rejectd with red flag");
    }
})

console.log(myPromise);


async function fetchData() {
    try{
        let data = await fetch("https://fakestoreapi.com/products");
        data = await fetch("https://fakestoreapi.com/products/1");

        let ans = await data.json();

        console.log(ans);
    }
    catch (error) {
        console.log(error);
    }
    
}

fetchData();