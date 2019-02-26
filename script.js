// gradient code
color1 = document.querySelector(".color1");
color2 = document.querySelector(".color2");
body = document.querySelector("body");
code = document.querySelector(".code");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value + ", "
    + color2.value + ")";

  style = body.style.background;
  code.innerHTML =
    "background: " + color1.value +
    ";<br>background: " + style +
    ";<br>background: -moz-" + style +
    ";<br>background: -webkit-" + style +
    ";<br>background: -ms-" + style +
    "<br>background: -o-" + style + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// keypress event
document.body.onkeyup = function (e) {
  console.log(e);
  if (e.keyCode === 72) {
    toggleVisibility();
  } if (e.keyCode === 70) {
    toggleFullScreen();
  }
}


fadeCounter = 0;
function toggleVisibility() {
  const text = document.querySelector(".text");
  (fadeCounter % 2) == 0 ? text.style.opacity = "0" : text.style.opacity = "1";
  fadeCounter++;
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
