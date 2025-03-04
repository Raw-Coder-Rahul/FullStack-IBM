function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartData')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Cart is Empty</p>';
    } else {
        cartItems.forEach((item, index) => {
            cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: <button onclick="updateQuantity(${index}, -1)" class="opt"  style = "width: 2%";>-</button> ${item.quantity} <button onclick="updateQuantity(${index}, 1)" style = "width: 2%"; class="opt";>+</button></p>
                <button onclick="removeFromCart(${index})" class="button-71";>Remove</button>
            </div> 
            `;
            totalPrice += item.price * item.quantity;
        });
    }
    totalPriceElement.innerHTML = `Total Price: ₹${totalPrice}`;
}

function updateQuantity(index, change) {
    const cartItems = JSON.parse(localStorage.getItem('cartData')) || [];
    cartItems[index].quantity += change;
    if (cartItems[index].quantity <= 0) {
        cartItems.splice(index, 1);
    }
    localStorage.setItem('cartData', JSON.stringify(cartItems));
    displayCart();
}

function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartData')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartData', JSON.stringify(cartItems));
    displayCart();
}

function proceedToCheckout() {
    window.location.href = 'checkout.html';
}

displayCart();