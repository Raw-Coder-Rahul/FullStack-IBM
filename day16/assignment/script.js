document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products');
    const usersContainer = document.getElementById('users');
    const searchInput = document.getElementById('search');
    const sortSelect = document.getElementById('sort');
    const filterSelect = document.getElementById('filter');
    const loading = document.getElementById('loading');
    let products = [];
    let users = [];
    let debounceTimeout;

    if (productsContainer) {
        fetchProducts();
    }
    
    if (usersContainer) {
        fetchUsers();
    }

    function fetchProducts() {
        loading.style.display = 'block';
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                products = data;
                displayProducts(products);
                loading.style.display = 'none';
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                loading.style.display = 'none';
            });
    }

    function fetchUsers() {
        loading.style.display = 'block';
        fetch('https://fakestoreapi.com/users')
            .then(response => response.json())
            .then(data => {
                users = data;
                displayUsers(users);
                loading.style.display = 'none';
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                loading.style.display = 'none';
            });
    }

    function displayProducts(products) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productBox = document.createElement('div');
            productBox.className = 'product-box';
            productBox.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>Rating: ${product.rating.rate}</p>
                <button onclick="viewProductDetails(${product.id})">View Details</button>
            `;
            productsContainer.appendChild(productBox);
        });
    }

    function displayUsers(users) {
        usersContainer.innerHTML = '';
        users.forEach(user => {
            const userBox = document.createElement('div');
            userBox.className = 'user-box';
            userBox.innerHTML = `
                <h3>${user.name.firstname} ${user.name.lastname}</h3>
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.city}, ${user.address.street}</p>
                <button onclick="viewUserDetails(${user.id})">View Details</button>
            `;
            usersContainer.appendChild(userBox);
        });
    }

    window.viewProductDetails = function (id) {
        localStorage.setItem('selectedProductId', id);
        window.location.href = 'product-detail.html';
    }

    window.viewUserDetails = function (id) {
        localStorage.setItem('selectedUserId', id);
        window.location.href = 'user-detail.html';
    }

    sortSelect.addEventListener('change', function () {
        const sortBy = this.value;
        if (sortBy === 'priceLowHigh') {
            products.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'priceHighLow') {
            products.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'ratingHighLow') {
            products.sort((a, b) => b.rating.rate - a.rating.rate);
        } else if (sortBy === 'ratingLowHigh') {
            products.sort((a, b) => a.rating.rate - b.rating.rate);
        }
        displayProducts(products);
    });

    filterSelect.addEventListener('change', function () {
        const category = this.value;
        const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    });

    searchInput.addEventListener('input', function () {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const searchTerm = this.value.toLowerCase();
            const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm));
            displayProducts(filteredProducts);
        }, 300);
    });

    displayProducts(products);
});
