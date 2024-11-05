// mentor.js

function allocateMentor(button) {
    const productCard = button.closest('.product-card');
    const productId = productCard.getAttribute('data-product-id');

    fetch(`/allocate-mentor/${productId}/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
        }
    })
    .then(response => response.json())
    .then(data => {
        const mentorNameElement = productCard.querySelector('.mentor-name');
        mentorNameElement.textContent = `Allocated Mentor: ${data.mentor}`;
        mentorNameElement.classList.remove('hidden');
    })
    .catch(error => console.error('Error:', error));
}

// Helper function to get CSRF token
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
