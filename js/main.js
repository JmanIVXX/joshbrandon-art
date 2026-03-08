document.addEventListener('DOMContentLoaded', () => {

  // --- Nav scroll ---
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // --- Mobile menu ---
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.mobile-menu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobile.classList.toggle('active');
    document.body.style.overflow = mobile.classList.contains('active') ? 'hidden' : '';
  });

  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobile.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // --- Scroll hint hide ---
  const hint = document.querySelector('.scroll-hint');
  if (hint) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) hint.classList.add('hidden');
    }, { passive: true });
  }

  // --- Lightbox ---
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close">&times;</button><img src="" alt="">';
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('img');

  function openLB(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLB() {
    lb.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Click any art-piece (not inside a video wrapper) to open lightbox
  document.querySelectorAll('.art-piece').forEach(piece => {
    // Skip if it's inside a game-video-wrap
    if (piece.closest('.game-video-wrap')) return;

    piece.addEventListener('click', () => {
      const img = piece.querySelector('img');
      if (img) openLB(img.src, img.alt);
    });
  });

  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target.classList.contains('lightbox-close')) closeLB();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLB();
  });

  // --- Video play/pause (handles autoplay + manual) ---
  document.querySelectorAll('.video-clickable').forEach(wrap => {
    const video = wrap.querySelector('video');
    if (!video) return;

    // Track play state via events (covers autoplay)
    video.addEventListener('play',  () => wrap.classList.add('playing'));
    video.addEventListener('pause', () => wrap.classList.remove('playing'));
    video.addEventListener('ended', () => wrap.classList.remove('playing'));

    // Click to toggle
    wrap.addEventListener('click', () => {
      video.paused ? video.play() : video.pause();
    });
  });

});
