const BigLaptop = 1400
const phone = 700;
const largeur = window.innerWidth;
// const ArrowBox = "<h1 class='heading-primary'><i class='fa fa-arrow-down'></i> </h1><button class='btn--2'> <i class='fa fa-eye fa-2x' aria-hidden='true'></i>see my CV</button>";

let p1 = document.querySelector('p');
let vide = document.getElementById('vide');
let see = document.getElementById('see');



(function () {

    const letters = document.getElementsByClassName('letter');
    
    function moveLetter(letter, dalay) {
    setTimeout(function () {
        letter.className += ' moving-letter';
    }, dalay);
    }	
    
    const length = letters.length;

    for (let i = length - 1; i >= 0; i--) {
    const dalay =500 * i;
    moveLetter( letters[i], dalay );
    }
    
 })();



 AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500 // values from 0 to 3000, with step 50ms
  });

  if( p1.hasAttributes() && (largeur < phone)){
      vide.textContent = "Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum.Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque.Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum.";
    //   see.innerHTML = ArrowBox;
  }



