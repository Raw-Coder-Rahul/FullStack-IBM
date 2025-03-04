function displayOrderSummary() {
    const cartItems = JSON.parse(localStorage.getItem('cartData')) || [];
    const orderSummary = document.getElementById('order-summary');
    let summaryHTML = '<h3>Order Summary</h3>';
    let totalPrice = 0;

    if (cartItems.length === 0) {
        summaryHTML += '<p>No items in cart</p>';
    } else {
        cartItems.forEach(item => {
            summaryHTML += `
                <div class="order-item">
                    <p>${item.name} x ${item.quantity}</p>
                    <p>₹${item.price * item.quantity}</p>
                </div>
            `;
            totalPrice += item.price * item.quantity;
        });
        const gst = totalPrice * 0.18;
        const finalAmount = totalPrice + gst;
        summaryHTML += `
            <p>Subtotal: ₹${totalPrice}</p>
            <p>GST (18%): ₹${gst.toFixed(2)}</p>
            <h3>Total: ₹${finalAmount.toFixed(2)}</h3>
        `;
    }
    orderSummary.innerHTML = summaryHTML;
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Order placed successfully!');
    localStorage.removeItem('cartData');
    window.location.href = 'index.html';
});

displayOrderSummary();
