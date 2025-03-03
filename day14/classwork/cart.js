let cartData = JSON.parse(localStorage.getItem("DataCart"));

console.log(cartData);

function showData(array) {

    document.getElementById("products").innerHTML = "";
    array.forEach((el, index) => {

        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        let rating = document.createElement("p");
        rating.innerText = el.rating;

        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", ()=>{
            deleteFun(el, index);
        });

        productBox.append(heading, img, name, price, rating, button);

        document.getElementById("products").append(productBox);
    });
}

showData(cartData);


function deleteFun(el, index) {
    let cartItems = JSON.parse(localStorage.getItem('DataCart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('DataCart', JSON.stringify(cartItems));
    showData(cartItems);
    console.log("Delete function is called");
}