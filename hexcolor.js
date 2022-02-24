const button = document.querySelector(".button");
const text = document.querySelector(".colorname");

const background_color = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9"
];

button.addEventListener("click", () => {
    let color = '#';
    for (let i = 1; i <= 6; i++) {
        color += background_color[Math.floor(Math.random() * background_color.length)];
    }
    document.body.style.background = color;
    text.textContent = color;
});

function colorgenerator() {
    return Math.floor(Math.random() * background_color.length);
}