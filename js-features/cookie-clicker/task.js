'use strict';

const image = document.getElementById('cookie');

image.onclick = function() {
 let count = document.getElementById('clicker__counter');
 count.textContent++;
 if (count.textContent % 2) {
    image.width = 200;
 } else {
    image.width = 100;
 }
};