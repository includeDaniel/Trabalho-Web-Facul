const backToTopButton = document.querySelector(".btn");

const backToTop = () => {
    if (window.scrollY >= 100) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

window.addEventListener("scroll", function () {
    backToTop();
});

document.getElementById("btn").onclick = () => {
    scroll(0, 0);
};
