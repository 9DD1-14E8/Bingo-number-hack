let timer = 30;

function generateResult() {
    let num = Math.floor(Math.random() * 100) + 1;
    let bigSmall = num >= 50 ? "Big" : "Small";
    let colors = ["Red", "Green", "Blue"];
    let color = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector(".number").textContent = num;
    document.querySelector(".big-small").textContent = bigSmall;
    document.querySelector(".color").textContent = color;
    document.querySelector(".color").className = `color ${color.toLowerCase()}`;
}

function startTimer() {
    let timerInterval = setInterval(() => {
        document.getElementById("timer").textContent = timer;
        timer--;

        if (timer < 0) {
            generateResult();
            timer = 30;
        }
    }, 1000);
}

generateResult();
startTimer();
