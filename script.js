function updateClock() {
    const now = new Date();
    document.getElementById('liveClock').innerText = now.toLocaleString();
}
setInterval(updateClock, 1000);

let countdown;
function startCountdown() {
    let seconds = document.getElementById('countdownInput').value;
    if (seconds > 0) {
        countdown = setInterval(() => {
            document.getElementById('countdownDisplay').innerText = seconds;
            seconds--;
            if (seconds < 0) clearInterval(countdown);
        }, 1000);
    }
}

let stopwatchTime = 0, stopwatchInterval;
function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        let hrs = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
        let mins = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
        let secs = String(stopwatchTime % 60).padStart(2, '0');
        document.getElementById('stopwatch').innerText = `${hrs}:${mins}:${secs}`;
    }, 1000);
}
function stopStopwatch() {
    clearInterval(stopwatchInterval);
}
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch').innerText = "00:00:00";
}