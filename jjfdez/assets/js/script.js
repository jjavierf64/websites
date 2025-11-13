// Smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

// Mobile menu elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navCloseBtn = document.querySelector('.nav-close-btn');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const navAnchors = document.querySelectorAll('.nav-links a:not(.dropdown-toggle)');

const closeMobileMenu = () => {
  if (navLinks) {
    navLinks.classList.remove('active');
  }
  if (mobileMenuBtn) {
    mobileMenuBtn.classList.remove('active');
  }
  if (dropdownMenu) {
    dropdownMenu.classList.remove('open');
  }
};

// Mobile menu toggle (guard against missing markup)
if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

if (navCloseBtn) {
  navCloseBtn.addEventListener('click', closeMobileMenu);
}

if (navAnchors.length) {
  navAnchors.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
}

// Dropdown toggle (mobile friendly)
if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle('open');
  });
}
