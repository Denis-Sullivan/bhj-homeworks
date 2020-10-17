'use strict';

const reveal = Array.from(document.getElementsByClassName('reveal'));

console.log(reveal[0].getBoundingClientRect());

window.addEventListener('scroll', function() {
    for (let i = 0; i < reveal.length; i++){
        if (isInViewarea(reveal[i])){
        reveal[i].classList.add('reveal_active');
        };
    };
});

const isInViewarea = function(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false;
};