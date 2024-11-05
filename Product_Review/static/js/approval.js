document.addEventListener("DOMContentLoaded", function() {
    const approveButtons = document.querySelectorAll('.approve-btn');

    approveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');

            // Send an AJAX request to approve the product
            fetch(`/approve-product/${productId}/`, {
                method: 'POST',
                headers: {
                    'X-CSRFToken': getCookie('csrftoken'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({approved: true})
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                   
                    this.textContent = 'Approved';
                    this.disabled = true;
                    this.style.backgroundColor = '#888';  // Change the button color to indicate it's been approved
                } else {
                    alert('Failed to approve product.');
                }
            });
        });
    });
});

// Function to get CSRF token from cookies
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
