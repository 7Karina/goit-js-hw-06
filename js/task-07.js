const control = document.querySelector("#font-size-control");
const textSpn = document.querySelector("#text");

control.addEventListener("input", () => {
  const fontSize = control.value + "px";
  textSpn.style.fontSize = fontSize;
});
