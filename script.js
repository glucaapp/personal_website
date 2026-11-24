document.getElementById('year').textContent = new Date().getFullYear();

const signalAnimation = document.querySelector('.signal-animation');
if (signalAnimation) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    signalAnimation.controls = true;
  } else {
    signalAnimation.play().catch(() => {
      signalAnimation.controls = true;
    });
  }
}

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const status = carousel.querySelector('[data-carousel-status]');
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  let current = 0;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.hidden = !active;
      slide.setAttribute('aria-hidden', String(!active));
    });
    status.textContent = `${current + 1} / ${slides.length}`;
  };

  previous.addEventListener('click', () => showSlide(current - 1));
  next.addEventListener('click', () => showSlide(current + 1));
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showSlide(current - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(current + 1);
    }
  });

  showSlide(0);
});
