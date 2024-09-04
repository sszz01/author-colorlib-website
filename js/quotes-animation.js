document.addEventListener("DOMContentLoaded", function () {
  const quotes = document.querySelectorAll(".quotes-section-modern .quote");

  const handleScroll = () => {
    quotes.forEach((quote) => {
      const quotePosition = quote.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (quotePosition < screenPosition) {
        quote.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
});