const validator = document.querySelector("#validation-input");
const dataLength = Number(validator.dataset.length);

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

validator.addEventListener("blur", () => {
  const inputLength = validator.value.length;

  if (inputLength === dataLength) {
    removeClass(validator, "invalid");
    addClass(validator, "valid");
  } else {
    removeClass(validator, "valid");
    addClass(validator, "invalid");
  }
});
