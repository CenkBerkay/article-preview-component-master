const shareButton1 = document.getElementById("share-button-1");
const shareIcon = document.querySelector("button svg path");
const shareButton2 = document.getElementById("share-button-2");
const shareSection = document.getElementById("share-section");

function toggleSection() {
  shareSection.classList.toggle("visible");
}

shareButton1.addEventListener("click", toggleSection);
shareButton2.addEventListener("click", toggleSection);
