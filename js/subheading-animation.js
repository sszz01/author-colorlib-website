document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const textElement = entry.target.querySelector('.handwriting-text');
          textElement.classList.add('show');
        }
      });
    }, { threshold: 0.5 });
  
    const section = document.querySelector('#author-section');
    observer.observe(section);
  });