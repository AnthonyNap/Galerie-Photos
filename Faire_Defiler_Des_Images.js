// Faire défiler des images :
var slideIndex = 1; // définissez slideIndex sur 1.
showDivs(slideIndex); // Appelez ensuite showDivs() pour afficher la première image.

function plusDivs(n) { // Lorsque l’utilisateur clique sur l’un des boutons, appelez plusDivs().
  playSound(); // Jouer le son
  showDivs(slideIndex += n); // La fonction plusDivs() en soustrait un ou en ajoute un à slideIndex.
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// Fonction pour jouer le son
function playSound() {
  var audioPlayer = document.getElementById('audioPlayer');
  if (audioPlayer) {
    audioPlayer.currentTime = 0; // Réinitialise le son à 0 pour jouer depuis le début à chaque fois
    audioPlayer.play();
  }
}



