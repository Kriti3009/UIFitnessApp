document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const confirmButton = document.querySelector('.confirm-button');

    // Function to handle checkbox changes
    function handleCheckboxChange() {
        // Logic to handle checkbox changes goes here
    }

    // Function to handle button click
    function handleButtonClick() {
        // Logic to handle button click goes here
    }

    // Add event listeners for checkbox changes
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', handleCheckboxChange);
    });

    // Add event listener for button click
    confirmButton.addEventListener('click', handleButtonClick);
});
