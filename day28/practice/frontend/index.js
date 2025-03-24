document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('http://localhost:8080/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            Toastify({
                text: "Registration Successful! Redirecting...",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "green",
            }).showToast();

            setTimeout(() => {
                window.location.href = "login.html"; // Navigate to login page
            }, 3000);
        } else {
            Toastify({
                text: data.message || "Registration Failed",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();
        }
    } catch (error) {
        console.error("Error during registration:", error);
        Toastify({
            text: "An unexpected error occurred",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    }
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        console.log(data);

        if (data.token) {
            localStorage.setItem('token', data.token); // Save token in localStorage for authentication
            Toastify({
                text: "Login Successful! Redirecting...",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "green",
            }).showToast();

            setTimeout(() => {
                window.location.href = 'dashboard.html'; // Navigate to dashboard page
            }, 3000);
        } else {
            Toastify({
                text: "Login Failed! Invalid credentials",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();
        }
    } catch (error) {
        console.error("Error during login:", error);
        Toastify({
            text: "An unexpected error occurred",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    }
});

// Dashboard Functionality: Verify Token and Fetch Dashboard Data
document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html'; // Redirect to login if token is missing
        return;
    }

    try {
        const res = await fetch('http://localhost:8080/api/dashboard', {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            // Render dashboard data here
            renderDashboard(data);
        } else {
            Toastify({
                text: "Session expired! Redirecting...",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();

            setTimeout(() => {
                localStorage.removeItem('token'); // Clear token
                window.location.href = 'login.html'; // Redirect to login page
            }, 3000);
        }
    } catch (error) {
        console.error("Error loading dashboard:", error);
        Toastify({
            text: "An unexpected error occurred",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    }
});

function renderDashboard(data) {
    // Example: Render user information
    const dashboardContainer = document.getElementById('dashboard-container');
    const userInfo = document.createElement('div');
    userInfo.innerHTML = `
        <h2>Welcome, ${data.user.name}</h2>
        <p>Email: ${data.user.email}</p>
    `;
    dashboardContainer.appendChild(userInfo);
}

// Product Listing with Infinite Scroll
const productContainer = document.getElementById("product-container");

let currentPage = 1;
let isFetchingData = false;

async function fetchProducts() {
    if (isFetchingData) return;
    isFetchingData = true;

    try {
        const response = await fetch(`http://localhost:8080/api/products?page=${currentPage}`, {
            method: "GET"
        });

        const data = await response.json();
        console.log(data);

        if (data.products.length > 0) {
            displayProducts(data.products);
            currentPage++;
        } else {
            window.removeEventListener("scroll", handleScroll);
        }
    } catch (error) {
        console.error("Error fetching products:", error);
    } finally {
        isFetchingData = false;
    }
}

function displayProducts(products) {
    products.forEach((product) => {
        const productBox = document.createElement("div");
        productBox.className = "product-box";

        const img = document.createElement("img");
        img.src = product.image || "placeholder.jpg";
        img.alt = product.name || "Product Image";

        const name = document.createElement("p");
        name.innerText = product.name;

        const price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        const button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", () => {
            addToCart(product);
        });

        productBox.append(img, name, price, button);
        productContainer.appendChild(productBox);
    });
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchProducts();
    }
}

window.addEventListener("scroll", handleScroll);
fetchProducts();

function addToCart(product) {
    Toastify({
        text: `${product.name} is added to cart`,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}
