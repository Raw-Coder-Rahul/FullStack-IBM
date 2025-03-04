// let arr = [4787,45,444,4524,
//     41145,4,524,421
//     ,471,7512,52,4512,1201,152,999,4754
// ];

// let n = arr.length;
// for (let i = 1; i < n; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {   
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

let data = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 49.99,
      rating: 4.5,
      image: "https://smiledrive.in/cdn/shop/products/SMILEDRIVE-MONK-NOISE-CANCELLATION-WIRELESS-BLUETOOTH-HEADPHONE-WITH-BUILT-IN-MICROPHONE_-OVER-EAR-ANC-HEADSET-WITH-DEEP-BASS-Smiledrive-1650439634.jpg"
    },
    {
      id: 2,
      name: "Gaming Mouse",
      category: "Electronics",
      price: 29.99,
      rating: 4.2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkL3aOuOsvTLx4og4RBSqinXH80kIclG7MQ&s"
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      category: "Electronics",
      price: 79.99,
      rating: 4.7,
      image: "https://itgadgetsonline.com/wp-content/uploads/2023/12/Razer-BlackWidow-V4-Green-Mechanical-Gaming-Keyboard-3-1.webp"
    },
    {
      id: 4,
      name: "Smartwatch",
      category: "Wearable",
      price: 199.99,
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/41RFuTHqnaL.jpg"
    },
    {
      id: 5,
      name: "Running Shoes",
      category: "Fashion",
      price: 59.99,
      rating: 4.3,
      image: "https://ig.ft.com/running-shoe/assets/static/other-shoes.M.7d4d9a6b.png"
    },
    {
      id: 6,
      name: "Leather Wallet",
      category: "Fashion",
      price: 19.99,
      rating: 4.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSz-E4zdmBcjLIMQIsUd3rZ16lES2ganacmw&s"
    },
    {
      id: 7,
      name: "Digital Camera",
      category: "Electronics",
      price: 349.99,
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/71-2eKj23AL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 8,
      name: "Backpack",
      category: "Accessories",
      price: 39.99,
      rating: 4.4,
      image: "https://rukminim2.flixcart.com/image/1100/1300/xif0q/bag/v/m/a/45-school-bags-for-boys-and-girls-ii-genuine-backpack-ii-original-imah4t9rhwwthynx.jpeg?q=90&crop=false"
    },
    {
      id: 9,
      name: "Sunglasses",
      category: "Fashion",
      price: 24.99,
      rating: 4.1,
      image: "https://i.etsystatic.com/25752432/r/il/928031/2660488959/il_fullxfull.2660488959_gi9q.jpg"
    },
    {
      id: 10,
      name: "Water Bottle",
      category: "Home & Kitchen",
      price: 14.99,
      rating: 4.2,
      image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/c3f52c44-83ae-47be-9437-1a0f527cb765/Borosil-Pro-Copper-Water-Bottle-100-Copper-Leak-Proof-For-Everyday-Use-950-Ml.jpg"
    },
    {
      id: 11,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 59.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/713TUYjagQL.jpg"
    },
    {
      id: 12,
      name: "Electric Kettle",
      category: "Home & Kitchen",
      price: 34.99,
      rating: 4.6,
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/electric-kettle/m/w/s/-original-imah4n62txwmsjmf.jpeg?q=20&crop=false"
    },
    {
      id: 13,
      name: "Portable Power Bank",
      category: "Electronics",
      price: 39.99,
      rating: 4.3,
      image: "https://www.corseca.in/cdn/shop/files/Intelligent-Battery-Technology-BLue.jpg?v=1710328265"
    },
    {
      id: 14,
      name: "Smart LED Bulb",
      category: "Home & Kitchen",
      price: 19.99,
      rating: 4.7,
      image: "https://cdn.homemate.co.in/wp-content/uploads/2019/10/71jBByMlOOL._SL1500_.jpg"
    },
    {
      id: 15,
      name: "Noise Cancelling Earbuds",
      category: "Electronics",
      price: 89.99,
      rating: 4.8,
      image: "https://cdn.mos.cms.futurecdn.net/PbBRJvxoAm4BM7vfhh8ZfG.jpg"
    },
    {
      id: 16,
      name: "Travel Pillow",
      category: "Accessories",
      price: 22.99,
      rating: 4.2,
      image: "https://5.imimg.com/data5/SELLER/Default/2021/3/JK/MS/MP/24529397/inflatable-neck-pillow-soft-travel-pillow-u-shaped-airplane-pillows-cushion-for-sleeping.jpg"
    },
    {
      id: 17,
      name: "Yoga Mat",
      category: "Fitness",
      price: 29.99,
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/413JJey+suL._AC_.jpg"
    },
    {
      id: 18,
      name: "Men's Wrist Watch",
      category: "Fashion",
      price: 129.99,
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4fSz37RpWphksdhmRBc4yJdHaaYa4FY6bA&s"
    },
    {
      id: 19,
      name: "Wireless Charger",
      category: "Electronics",
      price: 27.99,
      rating: 4.3,
      image: "https://m.media-amazon.com/images/I/71O59aVg-cL.jpg"
    },
    {
      id: 20,
      name: "Graphic T-Shirt",
      category: "Fashion",
      price: 19.99,
      rating: 4.1,
      image: "https://bondy.shop/cdn/shop/products/07_Ava_fronttotal_750x.jpg?v=1653910682"
    }
]

function showData(array) {

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
        button.innerText = "Add to Cart";
        button.addEventListener("click", ()=>{
            addtocart(el, index);
        });

        productBox.append(heading, img, name, price, rating, button);

        document.getElementById("products").append(productBox);
    });
}

let cart = [];
function addtocart(el, index){

    cart.push(el);
    localStorage.setItem("cartData",JSON.stringify(cart));
    console.log(cart);
    getData();
}

function getData() {
    let parsedData = JSON.parse(localStorage.getItem("cartData"));

    console.log(parsedData);
}

showData(data);

let arr = JSON.parse(localStorage.getItem("cartData")) || [];

function addtocart(el, index) {
    for( let i = 0; i<arr.length;i++) {
        if(arr[i].d == el.id) {
            return alert('Data already exist');
        }
    }

    arr.push(el);
    localStorage.setItem("DataCart", JSON.stringify(arr));
    alert("Data added to cart");
}

function deleteFun() {
    console.log("Delete function is called");
}

function cartPage() {
  window.location.href="cart.html";
}