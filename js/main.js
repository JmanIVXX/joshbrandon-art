document.addEventListener('DOMContentLoaded', () => {

  // --- Nav scroll effect ---
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // --- Mobile menu toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // --- Scroll hint: hide after first scroll ---
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        scrollHint.classList.add('hidden');
      }
    }, { passive: true });
  }

  // --- Scroll animations ---
  const animated = document.querySelectorAll(
    '.gallery-item, .game-art-item, .char-card, .about-text, .contact-text, .contact-links'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  animated.forEach(el => observer.observe(el));

  // --- Lightbox ---
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<button class="lightbox-close">&times;</button><img src="" alt="">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Lightbox: gallery items (not video)
  document.querySelectorAll('.gallery-item:not(.video-item)').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.gallery-image img');
      if (img) openLightbox(img.src, img.alt);
    });
  });

  // Lightbox: character cards
  document.querySelectorAll('.char-card').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.char-image img');
      if (img) openLightbox(img.src, img.alt);
    });
  });

  // Lightbox: game art items (static images, not video wrappers)
  document.querySelectorAll('.game-art-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) openLightbox(img.src, img.alt);
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // --- Video play/pause (game videos + any future video items) ---
  document.querySelectorAll('.game-video-wrap, .video-item').forEach(wrap => {
    const video = wrap.querySelector('video');
    if (!video) return;

    wrap.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        wrap.classList.add('playing');
      } else {
        video.pause();
        wrap.classList.remove('playing');
      }
    });

    video.addEventListener('ended', () => {
      wrap.classList.remove('playing');
    });
  });

});
