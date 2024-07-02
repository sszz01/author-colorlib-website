document.addEventListener("DOMContentLoaded", function () {
    const quotes = document.querySelectorAll(".quote");
    const newBookSection = document.getElementById("newbook-section");
    const introDiv = document.getElementById("intro-div");
    let quotesLoaded = false;

    function checkIfInView() {
        const sectionRect = newBookSection.getBoundingClientRect();
        const introDivRect = introDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the center of the viewport
        const viewportCenter = windowHeight / 2;

        // Calculate the center of the intro-div
        const introDivCenter = (introDivRect.top + introDivRect.bottom) / 2;

        // Check if the section is fully in view and intro-div is centered
        if (
            sectionRect.top <= viewportCenter &&
            sectionRect.bottom >= viewportCenter &&
            introDivCenter >= viewportCenter - 100 &&
            introDivCenter <= viewportCenter + 100
        ) {
            if (!quotesLoaded) {
                quotesLoaded = true;
                document.body.classList.add("stop-scrolling");
                quotes.forEach((quote, index) => {
                    setTimeout(() => {
                        quote.classList.add("active");
                        if (index === quotes.length - 1) {
                            setTimeout(() => {
                                document.body.classList.remove("stop-scrolling");
                            }, 500);
                        }
                    }, index * 800);
                });
            }
        }
    }

    function handleScroll() {
        // Check if the newbook section is in view
        checkIfInView();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();
});
