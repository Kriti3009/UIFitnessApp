document.addEventListener('DOMContentLoaded', function() {
    const plusButton = document.querySelector('.plus-button');

    plusButton.addEventListener('click', function() {
        // Add your functionality here
        console.log('Plus button clicked!');
        // For example, you can redirect to another page
        window.location.href = 'new-page.html';
    });
});
