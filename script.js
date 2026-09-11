/**
 * Réva - Průvodce bezpečnou angličtinou
 * JavaScript pro interaktivitu a funkčnost Cookie lišty
 */

document.addEventListener('DOMContentLoaded', function () {
  // 0. Header: transparent over hero, solid once scrolled past it
  const header = document.querySelector('.site-header');
  const heroSection = document.querySelector('.hero-section');

  if (header) {
    const updateHeaderState = function () {
      const threshold = heroSection
        ? heroSection.offsetHeight - header.offsetHeight
        : 40;
      header.classList.toggle('is-scrolled', window.scrollY > threshold);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);
  }

  // 1. Mobile Menu Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      const isOpen = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
  }

  // 2. Cookie Banner Handling
  const cookieBanner = document.getElementById('cookieBanner');
  const btnAccept = document.getElementById('cookieAccept');
  const btnReject = document.getElementById('cookieReject');
  const btnSettings = document.getElementById('cookieSettings');

  if (cookieBanner) {
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (cookieChoice) {
      cookieBanner.classList.add('hidden');
    }

    if (btnAccept) {
      btnAccept.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.add('hidden');
      });
    }

    if (btnReject) {
      btnReject.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieBanner.classList.add('hidden');
      });
    }

    if (btnSettings) {
      btnSettings.addEventListener('click', function () {
        alert('Nastavení cookies: Marketingové a analytické cookies můžete kdykoliv upravit.');
        localStorage.setItem('cookieConsent', 'settings_custom');
        cookieBanner.classList.add('hidden');
      });
    }
  }

  // 3. Accordion Handler (pro FAQ sekce)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const item = this.parentElement;
      const isOpen = item.classList.toggle('active');
      this.setAttribute('aria-expanded', isOpen);
    });
  });

});
