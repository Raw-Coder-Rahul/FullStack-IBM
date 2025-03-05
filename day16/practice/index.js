document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');

    async function fetchProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
            const products = await response.json();

            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <h2>${product.title}</h2>
                    <img src="${product.image}" alt="${product.title}">
                    <p>${product.description}</p>
                    <p class="price">Price: $${product.price}</p>
                    <p class="rating">Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
                `;
                productsContainer.appendChild(productElement);
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    fetchProducts();
});

