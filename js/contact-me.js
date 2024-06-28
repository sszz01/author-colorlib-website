document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".questions h5 i");
    let currentIndex = 0;
  
    function highlightNextQuestion() {
      questions.forEach((question, index) => {
        if (index === currentIndex) {
          question.classList.add("highlighted");
        } else {
          question.classList.remove("highlighted");
        }
      });
      currentIndex = (currentIndex + 1) % questions.length;
    }
  
    setInterval(highlightNextQuestion, 4000);
  });
  