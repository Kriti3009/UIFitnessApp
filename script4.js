document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Validate the form fields
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (email === '' || password === '') {
            alert('Please fill in all fields.');
        } else {
            // If all fields are filled, you can proceed with form submission
            // Here you can add code to submit the form data to your server or perform any other action
            alert('Form submitted successfully!');
            // Example: form.submit();
        }
    });
});
