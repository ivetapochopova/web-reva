/**
 * Réva - Průvodce bezpečnou angličtinou
 * JavaScript pro interaktivitu webu
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
        ? '<i class="ph-light ph-x"></i>'
        : '<i class="ph-light ph-list"></i>';
    });
  }

  // 2. Accordion Handler (pro FAQ sekce)
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const item = this.parentElement;
      const isOpen = item.classList.toggle('active');
      this.setAttribute('aria-expanded', isOpen);
    });
  });

});
