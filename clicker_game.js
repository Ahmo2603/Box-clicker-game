let gameplayArea = document.querySelector(".output");
let messageDivision = document.querySelector(".message");
let currentDate = new Date();
let currentDateMilliseconds = currentDate.getTime();

let newElement = document.createElement("div");
newElement.classList.add("box");
gameplayArea.appendChild(newElement);

messageDivision.textContent = "Press the red box to Start";

let game = {
    timer: 0,
    start: null
}

function generateNumber(max) {
    let randomNumber = Math.round(Math.random() * max);
    return randomNumber;
}

function addBox() {
    newElement.style = "display: block;";
    messageDivision.textContent = "Click it...";
    game.start = new Date().getTime();
    newElement.style = "left: " + generateNumber(450) + "px; top: " + generateNumber(450) + "px;";
}

newElement.addEventListener("click", function() {
    newElement.style = "display: none;";
    game.timer = setTimeout(addBox, generateNumber(3000));

    if(game.start == null) {
        messageDivision.textContent = "Loading...";
    } else {
        let currentTime = new Date().getTime();
        let duration = (currentTime - game.start) / 1000;
        messageDivision.textContent = `It took you ${duration} seconds to click on the red box!`;
    }
});