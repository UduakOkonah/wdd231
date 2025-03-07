// Hamburger menu toggle 2
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  // Toggle the 'open' class on the navLinks (or navMenu)
  navLinks.classList.toggle('open');
  
  // Update the hamburger text based on the 'open' class
  hamburger.textContent = navLinks.classList.contains('open') ? 'X' : '☰';
  
  // Toggle the visibility of navLinks
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
