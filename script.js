const darkModeBtn = document.querySelector('#dark-mode-btn');

const toggleMenu = () => {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
};

darkModeBtn.addEventListener('click', () => {
    document.querySelectorAll('.icon').forEach(icon => {
        if (icon.style.filter === 'invert(1)') {
            icon.style.filter = '';
        } else {
            icon.style.filter = 'invert(1)';
        }
    });
    document.body.classList.toggle('dark-mode');
});

