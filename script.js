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
   
    const container = document.querySelector('.container') || document.body;
    container.innerHTML = `
        <div style="text-align: center; padding: 30px; font-family: sans-serif; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); max-width: 400px; margin: 40px auto;">
            <h2 style="color: #0e7490; margin-bottom: 5px;">Al-Shafa Medical Store</h2>
            <p style="color: #666; font-size: 14px; margin-bottom: 20px;">Healthcare & Pharmacy Portal</p>
            <hr style="border: 0; height: 1px; background: #e5e7eb; margin: 15px 0;">
            
            <div style="text-align: left; line-height: 1.8; color: #333;">
                <p style="font-size: 16px; margin: 10px 0;"><strong>Doctor Name:</strong> Dr. Sarfraz Hussnain</p>
                <p style="font-size: 16px; margin: 10px 0;"><strong>Address: Bilal Masjid</strong></p>
                <p style="font-size: 16px; margin: 10px 0;"><strong>Contact Number:</strong> 03048966489</p>
            </div>

            <button onclick="location.reload()" style="margin-top: 25px; background-color: #0e7490; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 14px; width: 100%;">
                Logout
            </button>
        </div>
    `;
});

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful! Please login with your account.');
    showLogin();
});
