document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:1000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });

    console.log(res)

    const data = await res.json();
    console.log(data)
    alert(data.message);
    window.location.href="login.html"
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:1000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data)
    if (data.token) {
        localStorage.setItem('token', data.token);
        Toastify({
            text: "You logged Succesfully",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: { background: "green" }
        }).showToast();
        window.location.href = 'dashboard.html';
    } else {
        alert('Login failed');
        Toastify({
            text: "Invalid Credintial",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: { background: "red" }
        }).showToast();
    }
});

document.getElementById('forgotPasswordLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'forgot-password.html';
});


const productContainer = document.getElementById("product-container");
// const nextBtn = document.getElementById("next-btn");

let currentPage = 1;
let limit = 10;


function displayProducts(products) {
    showSkeleton(12); // Show skeletons

    setTimeout(() => {
        const productContainer = document.getElementById("product-container");
        productContainer.innerHTML = "";

        // Display the products
        products.forEach((product) => {
            let productBox = document.createElement("div");
            productBox.className = "product-box";

            let heading = document.createElement("h3");
            heading.innerText = product.category || "No Category";

            let img = document.createElement("img");
            img.src = product.image || "placeholder.jpg";

            let name = document.createElement("p");
            name.innerText = product.name;

            let price = document.createElement("p");
            price.innerText = `Price: $${product.price}`;

            let rating = document.createElement("p");
            rating.innerText = `Rating: ${product.rating || "N/A"}`;

            let button = document.createElement("button");
            button.innerText = "Add to Cart";
            button.addEventListener("click", () => {
                addToCart(product);
            });

            productBox.append(heading, img, name, price, rating, button);
            productContainer.append(productBox);
        });
    }, 2000);
}

function showSkeleton(count) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let productBox = document.createElement("div");
        productBox.className = "skeleton-product-box";

        let heading = document.createElement("div");
        heading.className = "skeleton-heading";

        let img = document.createElement("div");
        img.className = "skeleton-image";

        let name = document.createElement("div");
        name.className = "skeleton-name";

        let price = document.createElement("div");
        price.className = "skeleton-price";

        let rating = document.createElement("div");
        rating.className = "skeleton-rating";

        let button = document.createElement("div");
        button.className = "skeleton-button";

        productBox.append(heading, img, name, price, rating, button);
        productContainer.append(productBox);
    }
}



async function fetchProducts() {
    try {
        const response = await fetch(`http://localhost:1000/api/products?page=${currentPage}`,{
            method:"GET"
        });
        const data = await response.json();

        console.log(data)

        displayProducts(data.products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}


fetchProducts();

