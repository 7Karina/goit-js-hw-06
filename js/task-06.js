const validator = document.querySelector("#validation-input");
const dataLength = Number(validator.dataset.length);

validator.addEventListener("blur", () => {
  const inputLength = validator.value.length;

  if (dataLength === inputLength) {
    validator.classList.remove("invalid");
    validator.classList.add("valid");
  } else {
    validator.classList.remove("valid");
    validator.classList.add("invalid");
  }
});
