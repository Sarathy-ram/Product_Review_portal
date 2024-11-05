document.querySelector('form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        event.preventDefault();
        alert('Please fill in both fields.');
    }
});
