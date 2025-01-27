const timer = (timeInMinutes) => {
  let totalTime = timeInMinutes;
  let remainingTime = totalTime;
  const progressBar = document.getElementById("progressBar");
  const minutesDisplay = document.getElementById("minutes");
  function updateTimer() {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    if (seconds < 10) seconds = "0" + seconds;

    minutesDisplay.textContent = `${minutes}:${seconds}`;

    let progressWidth = (remainingTime / totalTime) * 100;
    progressBar.style.width = progressWidth + "%";

    if (remainingTime <= 60) {
      progressBar.classList.add("bg-danger");
    }

    if (remainingTime > 0) {
      remainingTime--;
    } else {
      clearInterval(timerInterval);
    }
  }

  let timerInterval = setInterval(updateTimer, 1000);
};
export default timer;
