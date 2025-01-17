function login() {
    const email = document.getElementById('sign-in-Email').value;
    const password = document.getElementById('sign-password').value;
    const message = document.getElementById('message');

  
    message.textContent = '';

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$|^[0-9]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email or number).";
        return;
    }

    if (password.length < 7) {
        message.textContent = "Password must be at least 7 characters long.";
        return;
    }

    message.textContent = "Logging in...";
}