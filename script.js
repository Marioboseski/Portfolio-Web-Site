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

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message");
const form = document.querySelector(".contact-form");
const nameError = document.getElementById("name-error-message");
const emailError = document.getElementById("email-error-message");
const messageError = document.getElementById("textarea-error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  let IsValid = true;

  if (name === "") {
    nameError.textContent = "";
    setTimeout(() => {
      nameError.textContent = "Enter your name";      
    }, 150);
    IsValid = false;
  } else {
    nameError.textContent = "";
  }

  if (email === "") {
    emailError.textContent = "";
    setTimeout(() => {
      emailError.textContent = "Enter your email";      
    }, 150);
    IsValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "";
    setTimeout(() => {
      emailError.textContent = "Enter valid email";      
    }, 150);
    IsValid = false;
  } else {
    emailError.textContent = "";
  }

  if (message === "" ) {
    messageError.textContent = "";
    setTimeout(() => {
      messageError.textContent = "You must enter message";     
    }, 150);
    IsValid = false; 
  } else if (message.length < 10 ) {
    messageError.textContent = "";
    setTimeout(() => {
      messageError.textContent = "The message must be over 10 characters";      
    }, 150);
    IsValid = false;
  } else {
    messageError.textContent = "";
  }

  if (IsValid) {
    form.reset();
    const SuccessMessage = document.getElementById("success");
    SuccessMessage.textContent = "Your message has been sent";
  }
});
