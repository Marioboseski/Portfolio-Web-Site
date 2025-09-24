const contactBoxes = document.querySelectorAll(".contact-box");

contactBoxes.forEach(box => {
  const toastMessage = box.querySelector(".toast-notification");

  box.addEventListener("click", () => {
    const textToCopy = box.getAttribute("data-copy");

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showMessage(toastMessage, "Copied");
      }).catch(() => {
        showMessage(toastMessage, "Copy not supported");
      });
    } else {
      showMessage(toastMessage, "Nothing to copy");
    }
  });
});

function showMessage(toastMessage, message) {
  toastMessage.textContent = message;
  toastMessage.classList.add("show");

  setTimeout(() => {
    toastMessage.classList.remove("show");
    toastMessage.textContent = "";
  }, 2000);
}


