const SMALLBOX = document.getElementById("smallbox");
var borderCollision = 450;

SMALLBOX.style.top = "0px";
SMALLBOX.style.left = "0px";
SMALLBOX.style.height = "50px";
SMALLBOX.style.width = "50px";

function up() {
  var top = parseInt(SMALLBOX.style.top);
  if (top > 0) {
    SMALLBOX.style.top = top - 10 + "px";
  }
}

function down() {
  var top = parseInt(SMALLBOX.style.top);
  if (top < borderCollision) {
    SMALLBOX.style.top = top + 10 + "px";
  }
}

function left() {
  var left = parseInt(SMALLBOX.style.left);
  if (left > 0) {
    SMALLBOX.style.left = left - 10 + "px";
  }
}

function right() {
  var left = parseInt(SMALLBOX.style.left);
  if (left < borderCollision) {
    SMALLBOX.style.left = left + 10 + "px";
  }
}
