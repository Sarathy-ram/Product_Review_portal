document.getElementById('productRegisterForm').addEventListener('submit', function(event) {
    let isValid = true;
    let errorMessages = [];

    const name = document.getElementById('name').value.trim();
    const rollNo = document.getElementById('roll_no').value.trim();
    const abstractText = document.getElementById('abstract').value.trim();
    const bomFile = document.getElementById('bom').files[0];

    // Simple validation logic
    if (name === '') {
        errorMessages.push("Name is required.");
        isValid = false;
    }

    if (rollNo === '') {
        errorMessages.push("Roll No is required.");
        isValid = false;
    }

    if (abstractText.length < 500) {
        errorMessages.push("Abstract must be between 250 and 500 words.");
        isValid = false;
    }

    if (!bomFile || bomFile.type !== 'application/pdf') {
        errorMessages.push("Please upload a valid PDF for BOM submission.");
        isValid = false;
    }

    // Display errors if invalid
    if (!isValid) {
        event.preventDefault();
        alert(errorMessages.join("\n"));
    }
});
