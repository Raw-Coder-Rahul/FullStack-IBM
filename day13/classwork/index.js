// for each

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18];

// let ans = arr.forEach ((el, index) => {
//     console.log(index, el);
// });

// let k = arr.map ((el, index) => {
//     return el;
// });

// let output = arr.filter ((el, i) =>{
//     // return el%2==0 && el%4==0;
//     return typeof el =="string" || el%5==0;
// }).map((el, index)=>{
//     return el*2;
// }).reduce((acc, el)=>{
//     return acc+el;
// }).map((el, index)=>{
//     return el*2;
// })

// console.log(k);
// console.log(output);


// // reduce
// let result = arr.reduce((acc,el)=>{
//     return acc*el;
// }, 1);
// console.log(result);

let arr = [4787,45,444,4524,
    41145,4,524,421
    ,471,7512,52,4512,1201,152,999,4754
];

let ans = arr.sort((a,b)=>{return b-a});
console.log(ans);

let data = [
    {name:"Watch", price: 2000, desc: "Good Watch", rating: 4},
    {name:"Shoe", price: 1000, desc: "Good Shoe", rating: 4.5},
    {name:"Car", price: 20000, desc: "Good Car", rating: 5},
    {name:"Charger", price: 999, desc: "Good Charger", rating: 3.5},
    {name:"phone", price: 202000, desc: "Good phone", rating: 5},
    {name:"laptop", price: 29000, desc: "Good laptop", rating: 4},
    {name:"TV", price: 290090, desc: "Good TV", rating: 4.5},
    {name:"Apple", price: 199999, desc: "Good Apple", rating: 4}
]
data.sort((a,b)=>{return a.price - b.price});

console.log(data);

data.sort((a,b)=>{
    let nameA = a.name;
    let nameB = b.name;

    if(nameA<nameB) {
        return -1;
    }

    if(nameA>nameB) {
        return 1;
    }
});