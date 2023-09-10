console.log('To educate, engage, empower, and excite!');

let mobileNav = document.querySelectorAll('.menu-icon');

function openMobileMenu() {
  let scheduleInfo = document.querySelectorAll('.mobile-menu li');

  scheduleInfo.forEach(item => {
    if (item.style.display === 'none' || item.style.display === '') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  this.classList.toggle('rotate');
}

mobileNav.forEach(hamburger => hamburger.addEventListener('click', openMobileMenu));

