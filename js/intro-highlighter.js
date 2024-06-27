document.addEventListener("DOMContentLoaded", function() {
    const introItems = document.querySelectorAll(".intro-item");

    introItems.forEach(item => {
      const words = item.textContent.split(" ");
      item.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");
    });

    setTimeout(() => {
      introItems.forEach(item => {
        const spans = item.querySelectorAll("span");
        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add("highlighted");
          }, index * 400);
        });
      });
    }, 500);
  });