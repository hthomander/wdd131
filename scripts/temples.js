document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toLocaleString();

    const menuButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});