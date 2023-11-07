const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const toggleButton = document.querySelector("#toggle");

let mode = "characters"

toggleButton.addEventListener("click", () => {

    if(mode === "characters") {
        mode = "words"
        toggleButton.textContent = "Contar caracteres";
    }
})   
input.addEventListener("input", () => {

    let count = 0;

    if(mode === "characters") {

        count = input.value.length

        counter.textContent = `${count} caractere(s)`;

    } else {

    }

});