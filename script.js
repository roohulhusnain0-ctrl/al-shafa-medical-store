const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginToggleBtn = document.getElementById('loginToggleBtn');
const signupToggleBtn = document.getElementById('signupToggleBtn');

function showLogin() {
    loginForm.classList.add('active-form');
    signupForm.classList.remove('active-form');
    loginToggleBtn.classList.add('active');
    signupToggleBtn.classList.remove('active');
}

function showSignup() {
    signupForm.classList.add('active-form');
    loginForm.classList.remove('active-form');
    signupToggleBtn.classList.add('active');
    loginToggleBtn.classList.remove('active');
}

// Event Listeners for form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = "index.html";
});


signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful! Please login with your account.');
    showLogin();
});
