// smooth scroll
var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
if (!isMobile) {
  luxy.init({
    wrapper: "#luxy",
    wrapperSpeed: 0.45,
  });
}

//staggered text
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

  gsap.registerPlugin(ScrollTrigger);
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

gsap.from(".step", {
  scrollTrigger: ".step",
  start: "top 20%",
  duration: 1,
  ease: "power4.out",
  y: 40,
  opacity: 0,
  stagger: 0.25,
  delay: 0.15,
});

gsap.from(".price", {
  scrollTrigger: ".price",
  start: "top 20%",
  duration: 1,
  ease: "power4.out",
  y: 30,
  opacity: 0,
  stagger: 0.35,
  delay: 0.25,
});
