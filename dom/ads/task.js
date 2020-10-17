'use strict';

const rotator = Array.from(document.getElementsByClassName('rotator__case'));

let removeClass = function() {
    let element = rotator.find(items => items.classList.contains('rotator__case_active'));
    element.classList.remove('rotator__case_active');
};

let numerator = 0;

let ads = function() {
    removeClass();
    numerator++;
    if (numerator > rotator.length - 1) {
        numerator = 0;
    }
    rotator[numerator].classList.add('rotator__case_active');
    console.log(numerator);
};

setInterval(ads, 1000);