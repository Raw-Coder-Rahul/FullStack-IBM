let a = prompt("Enter 1st number : ");
let b = prompt("Enter 2nd number : ");
console.log((+a)+(+b));
let c = prompt("Enter a Operator(+,-,*,/) : ");

switch(c) {
    case "+" :
        console.log((+a)+(+b));
        break;
    case "-" :
        console.log((+a)-(+b));
        break;
    case "*" :
        console.log((+a)*(+b));
        break;
    case "/" :
        console.log((+a)/(+b));
        break;
    default:
        console.log("You nor write Correct Operator.");
}

myfunction(a, b);

function myfunction(a, b) {
    let k = a % b;
    console.log(k);
}