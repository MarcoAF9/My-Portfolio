const navList = document.getElementById('mainNavList');
const menuToggle = document.querySelector('.menu-toggle');
const toggleIcon = menuToggle.querySelector('i'); 

function toggleMenu() {
    navList.classList.toggle('nav-open');
    const isExpanded = navList.classList.contains('nav-open');
    menuToggle.setAttribute('aria-expanded', isExpanded);

    if (isExpanded) {
        toggleIcon.classList.remove('fa-grip-lines');
        toggleIcon.classList.add('fa-times');
    } else {
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-grip-lines');
    }
}

menuToggle.addEventListener('click', toggleMenu);

const navLinks = navList.querySelectorAll('a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('nav-open')) {
            navList.classList.remove('nav-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            toggleIcon.classList.remove('fa-times');
            toggleIcon.classList.add('fa-grip-lines');
        }
    });
});