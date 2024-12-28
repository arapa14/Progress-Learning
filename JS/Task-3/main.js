const images = document.querySelector('.carousel-images');
  const indicators = document.querySelectorAll('.carousel-indicators div');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentIndex = 0;
  const imageCount = images.children.length;

  function updateCarousel(index) {
    images.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % imageCount;
    updateCarousel(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    updateCarousel(currentIndex);
  }

  let autoSlide = setInterval(nextImage, 3000);

  nextButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    nextImage();
    autoSlide = setInterval(nextImage, 3000);
  });

  prevButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    prevImage();
    autoSlide = setInterval(nextImage, 3000);
  });

  indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
      clearInterval(autoSlide);
      currentIndex = parseInt(e.target.dataset.index);
      updateCarousel(currentIndex);
      autoSlide = setInterval(nextImage, 3000);
    });
  });