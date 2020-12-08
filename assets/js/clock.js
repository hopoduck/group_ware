const clock = document.getElementById("time");

function clockWorker() {
  const date = new Date();
  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  const parsedDate = `${hours}:${minutes}:${seconds}`;
  clock.innerHTML = parsedDate;
}

function init() {
  if (clock) {
    clockWorker();
    setInterval(clockWorker, 1000);
  }
}

init();
