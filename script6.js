document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');

    toggle.addEventListener('change', function() {
        const dot = document.querySelector('.dot');
        const isChecked = toggle.checked;

        if (isChecked) {
            dot.style.transform = 'translateX(100%)';
        } else {
            dot.style.transform = 'translateX(0)';
        }
    });
});
