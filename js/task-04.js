const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const valueSpn = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

function updateCounterValue() {
  valueSpn.textContent = counterValue;
}
