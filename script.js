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
    "<br>background: -0-" + style + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



// spacebar code
document.body.onkeyup = function (e) {
  if (e.keyCode == 72) {
    toggleElement();
  }
}

counter = 0;
function toggleElement() {
  const text = document.querySelector(".text");
  (counter % 2) == 0 ? text.style.display = "none" : text.style.display = "block";
  counter++;
}
