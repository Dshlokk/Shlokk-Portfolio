const cursor = document.querySelector(".magic-cursor");
const dot = document.querySelector(".magic-cursor-dot");

if (cursor && dot) {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  });

  const hoverElements = document.querySelectorAll(
    "a, button, .cta-button, .skill-card, .website-card"
  );

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("magic-hover");
    });

    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("magic-hover");
    });
  });
}
