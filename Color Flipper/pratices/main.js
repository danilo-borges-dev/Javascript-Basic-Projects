const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let colorHex = "#";
    for(let i = 0; i < 6; i++){
        colorHex += hex[generatorColor()];
    }
    color.textContent = colorHex;
    document.body.style.backgroundColor = colorHex;
});

function generatorColor(){
    return Math.floor(Math.random() * hex.length);
}