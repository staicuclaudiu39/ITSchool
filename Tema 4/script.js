window.onload = function () {
  let inputBox = document.getElementsByClassName("input");

  let submitButton = document.getElementsByClassName("submit-button")[0];

  let formBox = document.getElementsByClassName("form-box")[0];

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let isFormValid = true;
    let isEmpty = false;
    let checkbox = document.querySelector(".checkbox-button");
    let checkboxError = formBox.querySelector(".checkbox-error");
    let errorMessage = formBox.querySelector(".error-message");
    let mainForm = document.querySelector(".main");
    let hidden = document.querySelector(".hidden");
    let hiddenMessage;


    for (let i = 0; i < inputBox.length; i++) {
      if (inputBox[i].value == "") {
        inputBox[i].style.border = "2px solid red";
        isFormValid = false;
        isEmpty = true;
      } else {
        inputBox[i].style.border = "none";
      }
    }

    if (!checkbox.checked) {
      if (!checkboxError) {
        checkboxError = document.createElement("p");
        checkboxError.className = "checkbox-error";
        checkboxError.style.textAlign = "center";
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

    if (isEmpty) {
      if (!errorMessage && !checkboxError) {
        errorMessage = document.createElement("p");
        errorMessage.className = "error-message";
        errorMessage.textContent = "Please fill in all required fields.";
        errorMessage.style.textAlign = "center";
        formBox.appendChild(errorMessage);
      }
    } else {
      let errorMessage = formBox.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.remove();
      }

    }

    if (isFormValid) {
      let answers = {
        firstName: inputBox[0].value,
        latinFN: inputBox[1].value,
        lastName: inputBox[2].value,
        creed: inputBox[3].value,
        deusVult: inputBox[4].value
      };
      console.log(answers);
      mainForm.style.display = "none";
      hidden.style.display = "block";
      hiddenMessage = document.createElement("p");
      hiddenMessage.className = "hidden";
      hiddenMessage.textContent = "Welcome to the Order " + answers.firstName + " " + answers.lastName + "!"; 
      hiddenMessage.style.display = "block"; 
      hidden.appendChild(hiddenMessage);
    }
  });

  for (let i = 0; i < inputBox.length; i++) {
    inputBox[i].addEventListener("change", function () {
      inputBox[i].style.border = "none";
    });
  }

  document.addEventListener("keydown", function (key) {
    if (key.key == "Enter") 
      console.log("S-a apasat enter");
  });

};
