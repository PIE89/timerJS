import { Timer } from "./timer";

const btn = document.querySelector("#add-timer");
const timeInfo = document.querySelector("#time-input");

btn.addEventListener("click", handleTimer);

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    handleTimer();
  }
});

// функция запуска таймера
function handleTimer() {
  if (timeInfo.value.length === 0 || timeInfo.value <= 0) {
    alert("Введите значение");
    timeInfo.value = "";
    return;
  }

  new Timer(timeInfo.value);
  timeInfo.value = "";
}
