let button = document.querySelector(".toogle");
let target = document.querySelector(button.getAttribute('data-target'));
let icon = document.querySelector(".toggle-theme-icon")

button.addEventListener('click', () => {
    let isWhite = target.classList.toggle('body-dark');
    console.log(isWhite);
    target.classList.toggle('body-white', !isWhite);
    button.classList.toggle('theme-dark', !isWhite);
    button.classList.toggle('theme-white', isWhite);
    icon.src = isWhite ? 'assets/icons/sun-light.svg' : 'assets/icons/moon-light.svg';
})