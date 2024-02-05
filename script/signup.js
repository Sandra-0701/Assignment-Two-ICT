document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validate()) {
            // Perform signup logic here
            alert('Signup Successful!');
        }
    });

    function validate() {
        let isValid = true;

        // Username Validation
        const validUsernameRegex = /^[a-zA-Z\s]+$/;
        if (validUsernameRegex.test(usernameInput.value)) {
            usernameError.innerText = '';
        } else {
            usernameError.innerText = 'Invalid username format. Please use only letters and spaces.';
            usernameError.style.color = 'red';
            isValid = false;
        }

        // Email Validation
        const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (validEmailRegex.test(emailInput.value)) {
            emailError.innerText = '';
        } else {
            emailError.innerText = 'Invalid email format. Please enter a valid email address.';
            emailError.style.color = 'red';
            isValid = false;
        }

        // Phone Number Validation
        const validPhoneRegex = /^\d{10}$|^(\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
        if (validPhoneRegex.test(phoneInput.value)) {
            phoneError.innerText = '';
        } else {
            phoneError.innerText = 'Invalid phone number format. Please enter a valid phone number.';
            phoneError.style.color = 'red';
            isValid = false;
        }

        // Password Validation
        const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (validPasswordRegex.test(passwordInput.value)) {
            passwordError.innerText = '';
        } else {
            passwordError.innerText = 'Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one number.';
            passwordError.style.color = 'red';
            isValid = false;
        }

        // Confirm Password Validation
        if (confirmPasswordInput.value === passwordInput.value) {
            confirmPasswordError.innerText = '';
        } else {
            confirmPasswordError.innerText = 'Passwords do not match.';
            confirmPasswordError.style.color = 'red';
            isValid = false;
        }

        return isValid;
    }
});
