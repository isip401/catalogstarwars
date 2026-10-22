const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    // Переключаем класс dark-theme у тега body
    document.body.classList.toggle('dark-theme');
});
