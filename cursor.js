const cursor = document.querySelector(".cinematic-cursor");
const dot = document.querySelector(".cinematic-cursor-dot");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

if (cursor && dot) {
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animate() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }

  animate();

  const hoverTargets = document.querySelectorAll(
    "a, button, .cta-button, .skill-card, .website-card"
  );

  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cinematic-hover");
    });

    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cinematic-hover");
    });
  });
}
