// smooth scroll
// var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
// if (!isMobile) {
//   luxy.init({
//     wrapper: "#luxy",
//     wrapperSpeed: 0.045,
//   });
// }

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
        start: "top 50%",
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
