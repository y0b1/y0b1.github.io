let rotation = 0;

document.addEventListener("wheel", (event) => {
    rotation += event.deltaY * 0.1;
    document.querySelector(".container").style.transform = `rotate(${rotation}deg)`;
});
