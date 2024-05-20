// JavaScript to add shadow effect on click
document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll('.service, .facility-box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.add('active');
            setTimeout(() => {
                box.classList.remove('active');
            }, 300); // Duration of shadow effect
        });
    });
});
