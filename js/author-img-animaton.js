var modal = document.getElementById("zoomModal");
var img = document.getElementById("thumbnail");
var modalImg = document.getElementById("zoomedImg");
var closeBtn = document.getElementById("closeBtn");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  document.body.style.overflow = "hidden";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}