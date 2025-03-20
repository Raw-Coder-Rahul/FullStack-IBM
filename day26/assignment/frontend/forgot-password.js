document.getElementById('forgotPasswordForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
        const res = await fetch('http://localhost:1000/api/auth/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await res.json();
        if (res.ok) {
            Toastify({
                text: "Reset link sent to your email!",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: { background: "green" }
            }).showToast();
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        Toastify({
            text: `Error: ${error.message}`,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: { background: "red" }
        }).showToast();
    }
});
