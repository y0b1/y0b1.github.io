document.addEventListener("DOMContentLoaded", () => {
    const rainbowEls = document.querySelectorAll(
        "#rainbow-text, #rainbow-text-2, #rainbow-text-3, .rainbow-accent"
    );
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let colorIndex = 0;

    setInterval(() => {
        rainbowEls.forEach((el, i) => {
            el.style.color = colors[(colorIndex + i) % colors.length];
        });
        colorIndex = (colorIndex + 1) % colors.length;
    }, 300);
});
