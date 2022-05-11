document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementsByClassName('ice-cream-btn-turn-to-back')[0].style.visibility = 'visible';
  document.getElementsByClassName('ice-cream-btn-turn-to-front')[0].style.visibility = 'visible';

  document.getElementsByClassName('ice-cream-btn-turn-to-back')[0].onclick = function() {
  document.getElementsByClassName('products__ice-cream--flip')[0].classList.toggle('do-flip');
  };

  document.getElementsByClassName('ice-cream-btn-turn-to-front')[0].onclick = function() {
  document.getElementsByClassName('products__ice-cream--flip')[0].classList.toggle('do-flip');
    };
    
   document.getElementsByClassName('ice-coffee-btn-turn-to-back')[0].style.visibility = 'visible';
  document.getElementsByClassName('ice-coffee-btn-turn-to-front')[0].style.visibility = 'visible';

  document.getElementsByClassName('ice-coffee-btn-turn-to-back')[0].onclick = function() {
  document.getElementsByClassName('products__ice-coffee--flip')[0].classList.toggle('do-flip');
  };

  document.getElementsByClassName('ice-coffee-btn-turn-to-front')[0].onclick = function() {
  document.getElementsByClassName('products__ice-coffee--flip')[0].classList.toggle('do-flip');
    }; 

    document.getElementsByClassName('milkshakes-btn-turn-to-back')[0].style.visibility = 'visible';
  document.getElementsByClassName('milkshakes-btn-turn-to-front')[0].style.visibility = 'visible';

  document.getElementsByClassName('milkshakes-btn-turn-to-back')[0].onclick = function() {
  document.getElementsByClassName('products__milkshakes--flip')[0].classList.toggle('do-flip');
  };

  document.getElementsByClassName('milkshakes-btn-turn-to-front')[0].onclick = function() {
  document.getElementsByClassName('products__milkshakes--flip')[0].classList.toggle('do-flip');
    }; 

});