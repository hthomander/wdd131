document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toLocaleString();

    const menuButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('open');
        navigation.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', isOpen);
    });

    menuButton.addEventListner('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            menuButton.click();
        }
    })
});