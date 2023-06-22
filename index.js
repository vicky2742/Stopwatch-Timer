// <-----------------stopWatch-------------->

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

startBtn.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
});

function stopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      second++;
      count = 0;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;
    let countString = count;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout(stopWatch, 10);
  }
}

//<------------------Timer Script------------------->

let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 10;

let seconds = "00";
window.onload = () => {
  document.getElementById('minutes').innerHTML = workTime;
  document.getElementById('seconds').innerHTML = seconds;
  workTitle.classList.add('active');
};

function start() {
  document.getElementById('start');
  document.getElementById('reset');
  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - workTime;
  breakCount = 0;

  let timeFunction = () => {
    document.getElementById('minutes').innerHTML = workMinutes;
    document.getElementById('seconds').innerHTML = seconds;
    seconds = seconds - 1;
    if (seconds == 0) {
     workMinutes--;
     seconds=59;
      if (workMinutes == -1) {
        if (breakCount % 2 == 0) {
          workMinutes = breakMinutes;
          breakCount++;
          workTitle.classList.remove('active');
          breakTitle.classList.add('active');
        } else {
          workMinutes = workTime;
          breakCount++;

          workTitle.classList.add('active');
          breakTitle.classList.remove('active');
        }
      }
    }
  };
  setInterval(timeFunction, 1000);
}
