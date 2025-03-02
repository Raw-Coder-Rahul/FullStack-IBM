function displayOrderSummary() {
    const cartItems = [
        { name: 'Product 1', price: 100, quantity: 2 },
        { name: 'Product 2', price: 150, quantity: 1 }
    ];
    const orderSummary = document.getElementById('order-summary');
    let summaryHTML = '<h3>Order Summary</h3>';
    let totalPrice = 0;

    if (cartItems.length === 0) {
        summaryHTML += '<p>No items in cart</p>';
    } else {
        cartItems.forEach(item => {
            summaryHTML += `
                <div>
                    <p>${item.name} x ${item.quantity}</p>
                    <p>₹${item.price * item.quantity}</p>
                </div>
            `;
            totalPrice += item.price * item.quantity;
        });
        const gst = totalPrice * 0.18; // Assuming 18% GST
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
    event.preventDefault(); // Prevent form submission to server

    alert('Order placed successfully!');
    // Assuming cartData is stored in localStorage, you can clear it after order is placed.
    localStorage.removeItem('cartData'); 
});

displayOrderSummary();