let slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("next").onclick = () => changeSlide(1);
document.getElementById("prev").onclick = () => changeSlide(-1);

function changeSlide(step) {
    slides[index].classList.remove("active");
    index = (index + step + slides.length) % slides.length;
    slides[index].classList.add("active");
}

// Auto Slide Every 3 Seconds
setInterval(() => {
    changeSlide(1);
}, 3000);
