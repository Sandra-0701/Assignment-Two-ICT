document.addEventListener('DOMContentLoaded', function () {
    // Email Validation
    const emailInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');

    emailInput.addEventListener('blur', function () {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
        }
    });

    // Password Validation
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;

        // Check length, uppercase, lowercase, and number
        const lengthRegex = /^.{8,}$/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /\d/;

        let strength = 'poor';
        if (lengthRegex.test(password) && uppercaseRegex.test(password) && lowercaseRegex.test(password) && numberRegex.test(password)) {
            strength = 'strong';
        } else if (lengthRegex.test(password) && (uppercaseRegex.test(password) || lowercaseRegex.test(password) || numberRegex.test(password))) {
            strength = 'medium';
        }

        // Update UI based on password strength
        if (strength === 'strong') {
            passwordStrength.textContent = 'Strong';
            passwordStrength.style.color = 'green';
        } else if (strength === 'medium') {
            passwordStrength.textContent = 'Medium';
            passwordStrength.style.color = 'orange';
        } else {
            passwordStrength.textContent = 'Weak';
            passwordStrength.style.color = 'red';
        }
    });

    // Login functionality
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Check if both email and password are entered
        if (email && password) {
            // You can add your login logic here
            alert('Logged in successfully!');
        } else {
            alert('Please enter both email and password.');
        }
    });
});
