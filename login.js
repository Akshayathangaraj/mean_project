// login.js
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:4000/login', { // Adjust the URL based on your backend server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
            // Successful login, store the username in localStorage
            localStorage.setItem('username', username); // Store username
            window.location.href = 'home.html'; // Navigate to home.html
        } else {
            // Show error message
            document.getElementById('error-message').textContent = data.message || 'Login failed. Please try again.';
        }
    } catch (error) {
        console.error('Error during login:', error);
        document.getElementById('error-message').textContent = 'An error occurred. Please try again later.';
    }
});
