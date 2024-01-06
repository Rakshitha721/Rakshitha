function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
    } else {
        alert(`Login successful! Username: ${username}, Password: ${password}`);
        // Redirect to another page or perform additional actions
    }
}
