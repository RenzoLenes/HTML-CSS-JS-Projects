document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === 'admin' && password === 'password') {
        alert('Login Succesful');
    } else {
        alert('Invalid Credentials');
    }

});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert('Registration Succesful');
        } else {
            alert('Passwords different');
            document.getElementById('registrationForm').reset();
        }
    } else {
        alert('Complete alls the spaces')
    }

});