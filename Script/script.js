// Thème Clair & Thème Sombre 
document.getElementById('theme-switch').addEventListener('click', function() {
    var body = document.body;
    body.classList.toggle('dark-theme');
})

// Afficher l'heure en temps réel
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// Defilement photo 
document.getElementById('next').addEventListener('click', function() {
    changeImage(1);
});
document.getElementById('prev').addEventListener('click', function() {
    changeImage(-1);
});

function changeImage(direction) {
    var images = document.querySelectorAll('#carrousel img');
    var activeIndex = Array.from(images).findIndex(image => image.classList.contains('active'));

    images[activeIndex].classList.remove('active');
    var nextIndex = (activeIndex + direction + images.length) % images.length;
    images[nextIndex].classList.add('active');
}
