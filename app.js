document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput');
    const verifyButton = document.getElementById('verifyButton');
    const validationMessage = document.getElementById('validationMessage');
    var icon = document.getElementById('icon');
    verifyButton.addEventListener('click', () => {
        const email = emailInput.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email regex

        if (emailRegex.test(email)) {
            validationMessage.textContent = 'Email sent.';
            validationMessage.style.color = 'hsl(0, 36%, 70%)';
            icon.style.display = "none";
            // You can add further actions here, like sending a verification email to the backend.
        } else {
            validationMessage.textContent = 'Please provide a valid email.';
            validationMessage.style.color = 'hsl(0, 36%, 70%)';
            emailInput.style.borderColor = 'red';
            icon.style.display = "block";
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const emailInput2 = document.getElementById('emailInput2');
    const verifyButton2 = document.getElementById('verifyButton2');
    const validationMessage2 = document.getElementById('validationMessage2');
    var icon2 = document.getElementById('icon2');
    verifyButton2.addEventListener('click', () => {
        const email2 = emailInput2.value;
        const emailRegex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email regex

        if (emailRegex2.test(email2)) {
            validationMessage2.textContent = 'Email sent.';
            validationMessage2.style.color = 'hsl(0, 36%, 70%)';
            icon.style.display = "none";
            // You can add further actions here, like sending a verification email to the backend.
        } else {
            validationMessage2.textContent = 'Please provide a valid email.';
            validationMessage2.style.color = 'hsl(0, 36%, 70%)';
            emailInput2.style.borderColor = 'red';
            icon2.style.display = "block";
        }
    });
});
