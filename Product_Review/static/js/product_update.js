document.getElementById('ProductRegisterForm').addEventListener('submit', function(event) {
    let isValid = true;
    let errorMessages = [];

    const name = document.getElementById('name').value.trim();
    const rollNo = document.getElementById('roll_no').value.trim();
    const abstractText = document.getElementById('abstract').value.trim();
    const member_1 = document.getElementById('member_1').value.trim();
    const member_2 = document.getElementById('member_2').value.trim();
    const member_3 = document.getElementById('member_3').value.trim();
    const bomFile = document.getElementById('bom').files[0];

    // Simple validation logic
    if (name === '') {
        errorMessages.push("Name is required.");
        console.log("need more11");
        isValid = false;
    }
    if (member_1 === '') {
        errorMessages.push("Name is required.");
        console.log("need more1");
        isValid = false;
    }
    if (member_2 === '') {
        errorMessages.push("Name is required.");
        console.log("need more2");
        isValid = false;
    }
    if (member_3 === '') {
        errorMessages.push("Name is required.");
        console.log("need more3");
        isValid = false;
    }

    if (rollNo === '') {
        errorMessages.push("Roll No is required.");
        console.log("need moreroll");
        isValid = false;
    }

    if (abstractText.length < 500) {
        errorMessages.push("Abstract must be between 250 and 500 words.");
        console.log("need more");
        isValid = false;
    }

    if (!bomFile || bomFile.type !== 'application/pdf') {
        errorMessages.push("Please upload a valid PDF for BOM submission.");
        console.log("need more pdf");
        isValid = false;
    }

    // Display errors if invalid
    if (!isValid) {
        console.log("123445567");
        event.preventDefault();
        alert(errorMessages.join("\n"));
    }
});
