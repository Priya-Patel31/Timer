let totalSeconds = 3881;

let hourSpan = document.querySelector(".hour");
let minuteSpan = document.querySelector(".minute");
let secondSpan = document.querySelector(".second");

formatTime(totalSeconds);
setInterval(() => {
    --totalSeconds;
    formatTime(totalSeconds);
}, 1000);

function formatTime(totalSeconds) {
  let minutes;
  let hours;
  let seconds;
  hours = Math.floor(totalSeconds / 3600);
  seconds = totalSeconds % 3600;

  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  
  hourSpan.innerHTML = hours.toString().length === 1 ? `0${hours}:`: `${hours}:`;
  minuteSpan.innerHTML = minutes.toString().length === 1 ? `0${minutes}:`: `${minutes}:`;
  secondSpan.innerHTML = seconds.toString().length === 1 ? `0${seconds}`: `${seconds}`;
}


