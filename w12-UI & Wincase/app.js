//Game values
let min = 1, //最小值
    max = 10, //最大值
    winningNum = 2, //目標數字
    guessesLeft = 3; //猜測數字

//UI Elements
const gmae = document.querySelector('.game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    //Check if won
    if (guess === winningNum) {
        //Disable input
        guessInput.disabled = true;
        //Change border color
        guessInput.getElementsByClassName.borderColor = 'green';
        //Set message
        setMessage(`${winningNum} is correct, You Win!`, 'green');
    } else {

    }
});
//Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}