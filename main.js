const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

// Toggle hamburger menu
hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Close menu when clicking link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if(menu.classList.contains('active') && !menu.contains(e.target) && !hamburger.contains(e.target)){
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  }
});
menu.addEventListener('click', (e) => e.stopPropagation());

// Search functionality
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if(query) alert(`Search functionality coming soon! You searched for: ${query}`);
});
searchInput.addEventListener('keypress', (e) => { if(e.key==='Enter') searchBtn.click(); });

