// Registration Form Submission
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    try {
      const res = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    });
  
    const data = await res.json();
  
    if (res.ok) {
        alert('Registration successful! Please log in.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error('Registration Error:', err);
      alert('Registration failed. Please try again.');
    }
  });
  
  // Login Form Submission
  document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token); // Save token to local storage
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error('Login Error:', err);
      alert('Login failed. Please try again.');
    }
  });
  
  // Logout Functionality (if required in dashboard.html)
  document.getElementById('logout')?.addEventListener('click', () => {
    localStorage.removeItem('token'); // Remove token from local storage
    alert('Logged out successfully!');
    window.location.href = 'login.html'; // Redirect to login page
  });
  