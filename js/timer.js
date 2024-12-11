export class Timer {
  constructor(duration) {
    this.remainingTime = duration;
    this.intervalId = null;
    this.newSpan = null;
    this.btnStop = null;
    this.btnPause = null;
    this.isPaused = false;
    this.liElement = null;
    this.create();
    this.start();
  }

  elements = {
    timers: document.querySelector("#timers"),
  };

  // создание li со значением таймера, кнопкой Стоп + Пауза
  create() {
    let liElement = document.createElement("li");
    this.newSpan = document.createElement("span");
    this.newSpan.textContent = this.remainingTime;

    this.btnStop = document.createElement("button");
    this.btnStop.classList.add("stop");
    this.btnStop.textContent = "Stop";

    this.btnPause = document.createElement("button");
    this.btnPause.classList.add("pause");
    this.btnPause.textContent = "Пауза";

    // Обработчик нажатия на кнопку стоп
    this.btnStop.addEventListener("click", () => {
      this.stop();
    });

    // Обработчик нажатия на кнопку Паузы
    this.btnPause.addEventListener("click", () => {
      this.isPaused ? this.resume() : this.pause();
    });

    liElement.append(this.newSpan);
    liElement.append(this.btnStop);
    liElement.append(this.btnPause);
    this.elements.timers.append(liElement);

    this.liElement = liElement;
  }

  // удаление элемента li
  removeElements() {
    this.liElement.remove();
  }

  start() {
    if (this.isPaused) return;

    this.isPaused = false;

    this.intervalId = setInterval(() => {
      --this.remainingTime;
      this.newSpan.textContent = this.remainingTime;

      if (this.remainingTime < 0) {
        clearInterval(this.intervalId);
        this.removeElements();
        alert("Таймер завершен");
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
    this.isPaused = true;
    this.btnPause.classList.add("resume");
    this.btnPause.textContent = "Продолжить";
  }

  resume() {
    this.isPaused = false;
    this.start();
    this.btnPause.classList.remove("resume");
    this.btnPause.textContent = "Пауза";
  }

  stop() {
    clearInterval(this.intervalId);
    this.removeElements();
    this.isPaused = false;
  }
}
