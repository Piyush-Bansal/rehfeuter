window.addEventListener("load", (event) => {
  document.querySelector("body").style.overflow = "hidden";
});

setTimeout(unfreez, 3000);

function unfreez() {
  document.querySelector("body").style.overflow = "auto";
}
