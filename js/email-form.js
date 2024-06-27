document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    var formData = new FormData(this);

    fetch('send_email.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      var messageDiv = document.createElement("div");
      messageDiv.textContent = data.message;
      if (data.status === "success") {
        messageDiv.classList.add("text-success");
      } else {
        messageDiv.classList.add("text-danger");
      }
      document.getElementById("contactForm").appendChild(messageDiv);
    })
    .catch(error => {
      console.error('Error:', error);
      var errorMessageDiv = document.createElement("div");
      errorMessageDiv.textContent = 'Oops! Something went wrong. Please try again.';
      errorMessageDiv.classList.add("text-danger");
      document.getElementById("contactForm").appendChild(errorMessageDiv);
    });
  });