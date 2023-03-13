function checkInput() {
  let textInput = document.getElementById("text-input");
  if (textInput.value != "") {
    return true;
  }
  return false;
}

window.onload = function () {
  let box = document.getElementById("special-box");
  //   box.style.width = "400px";
  //   console.log(box);
  //   let exampleList = document.getElementsByClassName("selector-example");
  //   console.log(exampleList);
  //   let submitButton = document.querySelector('input[type="submit"]');
  //   submitButton.style["background-color"] = "green";
  box.addEventListener("click", function () {
    if (box.classList.contains("box")) {
      box.classList.remove("box");
      box.classList.add("blue");
    } else {
      box.classList.remove("blue");
      box.classList.add("box");
    }
  });
  let textInput = document.getElementById("text-input");
  let submitButton = document.querySelector('input[type="submit"]');

  submitButton.addEventListener("click", function () {
    console.log(textInput.value);
    wrapper.innerHTML = wrapper.innerHTML + `<p> ${textInput.value} </p>`;
  });

  document.addEventListener("keydown", function (key) {
    if (key.key == "Enter" && checkInput()) console.log(textInput.value);
  });

  let wrapper = document.getElementsByClassName("wrapper")[0];
  console.log(wrapper.innerHTML);
  wrapper.innerHTML = wrapper.innerHTML + "<p> Acesta este un text </p>";
};
