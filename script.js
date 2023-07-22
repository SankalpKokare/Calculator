let button = document.querySelectorAll('.button')

let stringText = "";
const result = "hello";

button.forEach(function (e) {
    e.addEventListener('click', () => {

        stringText += e.innerHTML
        console.log(e.innerHTML);
        if (stringText.length > 17) {
            screenUp.innerHTML = "Limit reach, Press clear";
            if (e.innerHTML == 'clear') {
                resetValue();
            }

        }
        else {
            if (e.innerHTML == "clear") {
                resetValue();


            } else {
                screen.innerHTML = stringText;
                let result = eval(stringText);
                if (result == "Infinity") {
                    result = " to the outerspace i.e infinty";
                }
                const ans = ("ans=" + result);
                screenUp.innerHTML = ans;
            }
        }
    });


})

const screen = document.querySelector('.screenText');

const screenUp = document.querySelector('.screenUp');


function resetValue() {
    console.log("entered the loop");
    stringText = "";
    let result = 0;
    screenUp.innerHTML = "cleared";
    screen.innerHTML = stringText;

}

