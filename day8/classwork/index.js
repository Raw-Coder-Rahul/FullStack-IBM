document.getElementById("parent").style.backgroundColor="blue";
document.getElementById("parent").style.border="1px solid black";
document.getElementById("parent").style.height="500px";
document.getElementById("parent").style.width="90%";

let element = document.createElement("button");
element.innerText = "Submit";
element.style.background = "linear-gradient(140deg, #ff3366, #00eaff)";
element.style.padding = "30px";
element.style.outline = "none";
element.style.border = "none";
element.style.borderRadius = '5px';
element.style.boxShadow = "inset 0px 0px 10px rgba(255, 255, 255, 0.2)";
element.style.color = "white";
document.getElementById("parent").append(element);


var num = 10;
console.log(num);

myFunction()
num = 15;
console.log(num);

function myFunction() {
    console.log(num);
}