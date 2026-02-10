/* ============================================
   LANA — Script principal
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- DOM Elements ---------- */
  const navbar = document.getElementById('navbar');
  const navBurger = document.getElementById('navBurger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.navbar__link');
  const contactForm = document.getElementById('contactForm');
  const reveals = document.querySelectorAll('.reveal');

  /* ---------- Mobile Menu Overlay ---------- */
  let overlay = document.createElement('div');
  overlay.classList.add('nav-overlay');
  document.body.appendChild(overlay);

  /* ---------- Mobile Menu Toggle ---------- */
  function openMenu() {
    navMenu.classList.add('navbar__nav--open');
    navBurger.classList.add('navbar__burger--active');
    navBurger.setAttribute('aria-expanded', 'true');
    navBurger.setAttribute('aria-label', 'Fermer le menu');
    overlay.classList.add('nav-overlay--visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('navbar__nav--open');
    navBurger.classList.remove('navbar__burger--active');
    navBurger.setAttribute('aria-expanded', 'false');
    navBurger.setAttribute('aria-label', 'Ouvrir le menu');
    overlay.classList.remove('nav-overlay--visible');
    document.body.style.overflow = '';
  }

  navBurger.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('navbar__nav--open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- Navbar scroll shadow ---------- */
  function handleScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('navbar__link--active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('navbar__link--active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ---------- Reveal on scroll (Intersection Observer) ---------- */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show all
    reveals.forEach(el => el.classList.add('reveal--visible'));
  }

  /* ---------- Smooth scroll for anchor links (fallback) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const topOffset = targetEl.getBoundingClientRect().top + window.pageYOffset - 72;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ---------- Contact Form (basic validation + UX) ---------- */
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.querySelector('#name');
      const email = this.querySelector('#email');
      const message = this.querySelector('#message');
      let isValid = true;

      // Reset styles
      [name, email, message].forEach(input => {
        input.style.borderColor = '#e0d8d4';
      });

      if (!name.value.trim()) {
        name.style.borderColor = '#e07a5f';
        isValid = false;
      }

      if (!email.value.trim() || !isValidEmail(email.value)) {
        email.style.borderColor = '#e07a5f';
        isValid = false;
      }

      if (!message.value.trim()) {
        message.style.borderColor = '#e07a5f';
        isValid = false;
      }

      if (isValid) {
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoyé ✓';
        submitBtn.style.backgroundColor = '#C9A96E';
        submitBtn.style.borderColor = '#C9A96E';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.borderColor = '';
          submitBtn.disabled = false;
          this.reset();
        }, 3000);
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
