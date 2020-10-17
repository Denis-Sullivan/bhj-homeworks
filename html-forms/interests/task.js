'use strict';

const interestCheck = document.querySelectorAll('.interest__check');

interestCheck[0].addEventListener('click', () => {
  if (interestCheck[0].checked) {
    interestCheck[1].checked = true;
    interestCheck[2].checked = true;
  } 
  
  else if (interestCheck[0].checked == false) {
    interestCheck[1].checked = false;
    interestCheck[2].checked = false;
  }
});

interestCheck[3].addEventListener('click', () => {
  if (interestCheck[3].checked) {
    interestCheck[4].checked = true;
    interestCheck[5].checked = true;
  } 
  
  else if (interestCheck[3].checked == false) {
    interestCheck[4].checked = false;
    interestCheck[5].checked = false;
  }
});