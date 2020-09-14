var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
if (!isMobile) {
  luxy.init({
    wrapper: "#luxy",
    wrapperSpeed: 0.05,
  });
}

window.addEventListener("load", function () {
  let revealText = document.querySelectorAll(".reveal-text");
  let results = Splitting({ target: revealText, by: "lines" });

  results.forEach((splitResult) => {
    const wrappedLines = splitResult.lines
      .map(
        (wordsArr) => `
        <span class="lines"><div class ="pop">
          ${wordsArr
            .map(
              (word) => `${word.outerHTML}<span class="whitespace"> 
         </span>`
            )
            .join("")}
        </div></span>`
      )
      .join("");
    splitResult.el.innerHTML = wrappedLines;
  });

  let revealLines = revealText.forEach((element) => {
    const lines = element.querySelectorAll(".lines .pop");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "bottom 80%",
      },
    });
    tl.set(lines, { autoAlpha: 1 });
    tl.from(lines, 1, {
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.25,
      delay: 0.2,
    });
  });
});

window.addEventListener("load", function () {
  let revealText = document.querySelectorAll(".hero-reveal");
  let results = Splitting({ target: revealText, by: "lines" });

  results.forEach((splitResult) => {
    const wrappedLines = splitResult.lines
      .map(
        (wordsArr) => `
        <span class="lines"><div class ="pop">
          ${wordsArr
            .map(
              (word) => `${word.outerHTML}<span class="whitespace"> 
         </span>`
            )
            .join("")}
        </div></span>`
      )
      .join("");
    splitResult.el.innerHTML = wrappedLines;
  });

  let revealLines = revealText.forEach((element) => {
    const lines = element.querySelectorAll(".lines .pop");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "bottom 80%",
      },
    });
    tl.set(lines, { autoAlpha: 1 });
    tl.from(lines, 1, {
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.25,
      delay: 4.5,
    });
  });
});

window.addEventListener("load", (event) => {
  document.querySelector("body").style.overflow = "hidden";
});

setTimeout(unfreez, 4300);
function unfreez() {
  document.querySelector("body").style.overflow = "auto";
}
