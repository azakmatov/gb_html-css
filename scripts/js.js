document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.querySelector(".burger_icon");
    const menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu a"); // Находим все ссылки в меню

    function toggleMenu(event) {
        burgerIcon.classList.toggle("active");
        menu.classList.toggle("menu_visibled");
        event.stopPropagation();
    }

    // Открытие/закрытие меню при клике на бургер
    burgerIcon.addEventListener("click", toggleMenu);

    // Закрытие меню при клике на любую ссылку внутри
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            burgerIcon.classList.remove("active");
            menu.classList.remove("menu_visibled");
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
            menu.classList.remove("menu_visibled");
            burgerIcon.classList.remove("active");
        }
    });
});
