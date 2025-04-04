import './style.css';

let isActive = false;
let isPaused = false;
let minutes = 25;
let seconds = 0;
const INTERVAL_MS = 1000;

function renderApp() {
  console.log("HELLO THERE");
  document.querySelector('#app').innerHTML = `
  <div id="timer"></div>
  <div id="toggles"></div>
  `;

  document.querySelector('#timer').innerHTML = `
  <div> ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} </div>
  <progress value="${minutes * 60 + seconds}" max="1500"></progress>
  `;

  document.querySelector('#toggles').innerHTML = `
  <div>
    <div>
    ${!isActive
      ? '<button type="button" id="start" class="btn">START</button>'
      : `
      ${!isPaused
        ? '<button type="button" id="pause" class="btn">PAUSE</button>'
        : '<button type="button" id="continue" class="btn">CONTINUE</button>'
      }
      <button type="button" id="restart" class="btn">RESTART</button
      `
    }
    </div>
  </div>
  `;

  document.querySelector("#start")?.addEventListener("click", () => {
    isActive = true;
    isPaused = false;
    startTimer();
    renderApp();
  });

  document.querySelector("#pause")?.addEventListener("click", () => {
    isActive = true;
    isPaused = true;
    renderApp();
  });

  document.querySelector("#continue")?.addEventListener("click", () => {
    isActive = true;
    isPaused = false;
    renderApp();
  });

  document.querySelector("#restart")?.addEventListener("click", () => {
    isActive = false;
    isPaused = false;
    restartTimer();
    renderApp();
  });
}

function startTimer() {
  const intervalId = setInterval(() => {
    if (minutes <= 0 && seconds <= 0) {
      clearInterval(intervalId);
    } else {
      console.log(`${minutes}:${seconds}`);
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      renderApp();
    }
  }, INTERVAL_MS);
}

function pauseTimer() {

}

function continueTimer() {

}

function restartTimer() {
  minutes = 25;
  seconds = 0;
}

renderApp();
document.addEventListener("change", () => renderApp());