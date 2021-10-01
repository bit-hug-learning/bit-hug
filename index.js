const modal = document.querySelector(".construccion");
const closeButton = document.querySelector(".close-button");
const acceptButton = document.querySelector(".button--accept");

[closeButton, acceptButton].forEach((item) => item.addEventListener("click", hideModal));

function hideModal() {
  modal.classList.toggle("hide");
}
