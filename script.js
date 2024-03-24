const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const audio = new Audio("./audio/shooting-sound-fx-159024.mp3");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    audio.play();
    audio.volume = 0.6;
    const value = e.target.value;
    if (e.target.value === "AC") {
      display.value = "";
    } else if (e.target.value === "DE") {
      display.value = display.value.toString().slice(0, -1);
    } else if (e.target.value === "=") {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
});
