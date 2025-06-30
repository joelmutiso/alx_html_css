document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const icon = document.querySelector('.menu-icon');
  
    if (toggle && navLinks && icon) {
      toggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
          icon.innerHTML = '&times;'; // X icon
        } else {
          icon.innerHTML = '&#9776;'; // Hamburger icon
        }
      });
    }
  
    // Scroll-triggered animations
    const animatedElements = document.querySelectorAll('.animate');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    animatedElements.forEach(el => observer.observe(el));
  });
  