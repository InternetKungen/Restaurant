function toggleMenu() {
    const section_menu = document.querySelector('.menu-container');
    const menuButton = document.querySelector('.menu-button');
    const overlay = document.querySelector('.overlay');

    section_menu.classList.toggle('hidden-menu');
    menuButton.classList.toggle('open'); // Lägg till eller ta bort CSS-klassen 'open' 
    overlay.classList.toggle('visible');

    // Lägg till eventlyssnare för klick utanför menyn
    document.addEventListener('click', function (event) {
    const isClickInsideMenu = section_menu.contains(event.target);
    const isClickOnMenuButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuButton) {
        section_menu.classList.add('hidden-menu');
        menuButton.classList.remove('open');
        overlay.classList.add('visible');
    }
});

window.addEventListener('scroll', function () {
    if (section_menu.classList.contains('hidden-menu')) {
        return; // Om menyn är dold behöver vi inte göra något vid scrollning
    }

    section_menu.classList.add('hidden-menu');
    menuButton.classList.remove('open');
    overlay.classList.add('visible');
});
}


function toggleSubMenu(link) {
    const submenuId = link.getAttribute('data-submenu');
    const subMenu = document.getElementById(submenuId);

    if (subMenu) {
        const otherSubmenus = document.querySelectorAll('.sub-navigation:not(#' + submenuId + ')');
        otherSubmenus.forEach(function (submenu) {
        submenu.classList.add('hidden-sub');
        });

        subMenu.classList.toggle('hidden-sub');
    }
}