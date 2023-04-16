const form = document.querySelector('#login-form');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements['email'].value;
    const password = form.elements['password'].value;

    if (email !== 'voorbeeld@bo.com' || password !== 'password') {
        errorMessage.textContent = 'Invalid email or password.';
    } else {
        errorMessage.textContent = '';
        window.location.href = 'dashboardf/weather-dashboard.html';
    }
});
