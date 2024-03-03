const saleDate = new Date("May 25, 2024 00:00:00");
const now = new Date();
const diff = saleDate.getTime() - now.getTime(); 
function updateClock() {
    var remainingTime = Math.max(diff - (new Date() - now), 0);
    var hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    var seconds = Math.floor((remainingTime / 1000) % 60);
  
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    document.getElementById("clock1").innerText = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock2").innerText = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock3").innerText = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock4").innerText = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
