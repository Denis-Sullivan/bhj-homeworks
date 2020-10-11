'use strict';

let sec = document.getElementById("timer");
function time() {
  sec.textContent--
  if (sec.textContent == 0) {
    alert("Вы победили в конкурсе!")
}
};

setInterval(time, 1000);