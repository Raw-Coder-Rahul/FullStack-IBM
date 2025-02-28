function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
  
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
  
function displayCart() {
    const cartList = document.getElementById('cart-list');
    const cart = getCart();
    cartList.innerHTML = '';
    let total = 0;
  
    if (cart.length === 0) {
      cartList.innerHTML = '<p>Your cart is empty! Add some products!</p>';
      document.getElementById('purchase').style.display = 'none';
      return;
    } else {
      document.getElementById('purchase').style.display = 'block';
    }
  
    cart.forEach((product, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
        <p>${product.category}</p>
        <p>₹${product.price}</p>
        <p>
          <button onclick="updateQuantity(${index}, -1)">-</button>
          ${product.quantity}
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartList.appendChild(cartItem);
      total += product.price * product.quantity;
    });
  
    document.getElementById('total').innerText = `Total: ₹${total.toFixed(2)}`;
}
  
function updateQuantity(index, change) {
    let cart = getCart();
    if (cart[index].quantity + change > 0) {
      cart[index].quantity += change;
    }
    saveCart(cart);
    displayCart();
}
  
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    displayCart();
}
  
function finalizePurchase() {
    alert("Thank you for your purchase!");
    localStorage.removeItem('cart');
    displayCart();
}
  
function goToProducts() {
    window.location.href = 'index.html';
}
  
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});
  