document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Validate the form fields
        const firstName = document.getElementById('firstname').value.trim();
        const lastName = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const agreement = document.getElementById('agreement').checked;

        if (firstName === '' || lastName === '' || email === '' || password === '' || !agreement) {
            alert('Please fill in all fields and agree to the terms and conditions.');
        } else {
            // If all fields are filled and agreement is checked, you can proceed with form submission
            // Here you can add code to submit the form data to your server or perform any other action
            alert('Form submitted successfully!');
            // Example: form.submit();
        }
    });
});
