window.onload = function () {
  let inputBox = document.getElementsByClassName("input");

  let submitButton = document.getElementsByClassName("submit-button")[0];

  let formBox = document.getElementsByClassName("form-box")[0];

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let isFormValid = true;
    let isEmpty = false;
    let checkbox = document.querySelector(".checkbox-button");

    for (let i = 0; i < inputBox.length; i++) {
      if (inputBox[i].value == "") {
        inputBox[i].style.border = "2px solid red";
        isFormValid = false;
        isEmpty = true;
      } else {
        inputBox[i].style.border = "none";
      }
    }

    if (isEmpty) {
      let errorMessage = formBox.querySelector(".error-message");
      if (!errorMessage) {
        errorMessage = document.createElement("p");
        errorMessage.className = "error-message";
        errorMessage.textContent = "Please fill in all required fields.";
        formBox.appendChild(errorMessage);
      }
    } else {
      let errorMessage = formBox.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.remove();
      }
    }

    if (!checkbox.checked) {
      let checkboxError = formBox.querySelector(".checkbox-error");
      if (!checkboxError) {
        checkboxError = document.createElement("p");
        checkboxError.className = "checkbox-error";
        checkboxError.textContent = "Please check the 'I'm not a robot' box.";
        formBox.appendChild(checkboxError);
      }
      isFormValid = false;
    } else {
      let checkboxError = formBox.querySelector(".checkbox-error");
      if (checkboxError) {
        checkboxError.remove();
      }
    }

    if (isFormValid) {
      document.getElementById("form").submit();
    }
  });

  for (let i = 0; i < inputBox.length; i++) {
    inputBox[i].addEventListener("change", function () {
      inputBox[i].style.border = "none";
    });
  }
};
