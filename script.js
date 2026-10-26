
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Open and close menu using the hamburger icon
menuIcon.addEventListener('click', (event) => {
  event.stopPropagation();

  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Function to close the menu
function closeMenu() {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Close when clicking a navigation link
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close when clicking outside the menu
document.addEventListener('click', (event) => {
  if (
    navbar.classList.contains('active') &&
    !navbar.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    closeMenu();
  }
});

// Close when pressing Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

// Close when switching back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    closeMenu();
  }
});
