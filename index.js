const timer = document.getElementById('stopwatch');

var hour = 0;
var minute = 0;
var seconds = 0;
var stoptime = true;


function timerCycle() {
    if (stoptime == false) {
        seconds = parseInt(seconds);
        minute = parseInt(minute);
        hour = parseInt(hour);

        seconds = seconds + 1;

        if (seconds == 60) {
            minute = minute + 1;
            seconds = 0;
        }
        if (minute == 60) {
            hour = hour + 1;
            minute = 0;
            seconds = 0;
        }

        if (seconds < 10 || seconds == 0) {
            seconds = '0' + seconds;
        }
        if (minute < 10 || minute == 0) {
            minute = '0' + minute;
        }
        if (hour < 10 || hour == 0) {
            hour = '0' + hour;
        }

        timer.innerHTML = hour + ':' + minute + ':' + seconds;

        setTimeout("timerCycle()", 1000);
    }
}




function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hour = 0;
    seconds = 0;
    minute = 0;
}

var button = document.getElementById("startStopButton");

button.addEventListener("click", Start);

function Start() {
    button.removeEventListener("click", Start);
    button.addEventListener("click", Stop);
    startTimer();
    button.value = "Stop";
}


function Stop() {
    button.removeEventListener("click", Stop);
    button.addEventListener("click", Start);
    stopTimer();
    var time = hour + ':' + minute + ':' + seconds;
    document.querySelector('#time').textContent = time;
    resetTimer();
    button.value = "Start";
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
// console.log(today);
let date = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
document.querySelector('#date').textContent = date;
// console.log(date);



// popup
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');




const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});