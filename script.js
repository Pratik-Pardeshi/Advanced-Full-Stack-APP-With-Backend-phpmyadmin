// script.js

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(loginForm);

            fetch('login.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                const container = document.querySelector('.container');
                container.innerHTML = `<div id="welcome-message">${data}</div>`;
                document.getElementById('welcome-message').style.display = 'block';
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
