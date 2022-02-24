const button = document.querySelector(".button");
const text = document.querySelector(".colorname");

const background_color = ["red", "green", "blue", "pink", "orange", "yellow", "gray", "black", "skyblue",
    "tomato", "skyblue", "darkred", "antiquewhite", "aqua", "aquamarine", "blueviolet", "cadetblue", "brown",
    "purple", "chocolate", "gold", "silver", "indigo","white"
];

button.addEventListener("click", () => {
    const color = background_color[colorgenerator()];
    document.body.style.background = color;
    text.textContent = color;
});

function colorgenerator() {
    return Math.floor(Math.random() * background_color.length);
}
