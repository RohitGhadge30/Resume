// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-list ul');
const menuItems = document.querySelectorAll('.nav-list ul li a');
const header = document.querySelector('.header.container');

// Toggle mobile menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    // Animate menu items when menu is activated
    if (mobileMenu.classList.contains('active')) {
        menuItems.forEach((item, index) => {
            item.style.animation = `menuItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    } else {
        menuItems.forEach(item => {
            item.style.animation = ''; // Reset animation
        });
    }
});

// Change header background color on scroll with transition effect
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    header.style.transition = 'background-color 0.3s ease'; // Smooth transition
    header.style.backgroundColor = scrollPosition > 250 ? '#29323c' : 'transparent';
});

// Close mobile menu on menu item click with animation reset
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        
        // Reset menu item animations
        menuItems.forEach(item => {
            item.style.animation = '';
        });
    });
});
