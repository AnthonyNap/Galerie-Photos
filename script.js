// Thème Clair & Thème Sombre JS
document.getElementById('theme-switch').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
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

