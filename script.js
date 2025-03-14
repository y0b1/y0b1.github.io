document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("rainbow-text");
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let colorIndex = 0;

    setInterval(() => {
        text.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 300); // Changes color every 300ms
});
