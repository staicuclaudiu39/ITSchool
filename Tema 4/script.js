window.onload = function() {

    let inputBox = document.getElementsByClassName('input');

    let submitButton = document.getElementsByClassName('submit-button')[0];

    let formBox = document.getElementsByClassName('form-box');
    

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        let isFormValid = true;
        let isEmpty = false;
        for (let i = 0; i < inputBox.length; i++) {
            if (inputBox[i].value == '') {
                inputBox[i].style.border = '2px solid red';
                isFormValid = false;
                isEmpty = true;
            } else {
                inputBox[i].style.border = 'none';
            }
        }
        if (isEmpty) {

        }

        if (isFormValid) {
            document.getElementById('form').submit();
        }
    });

    for (let i = 0; i < inputBox.length; i++) {
        inputBox[i].addEventListener('change', function() {
            inputBox[i].style.border = 'none';
        })
    }
}