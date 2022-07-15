const hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex += hexColor[getHexadecimalColor()];
    }
    color.textContent = hex; // Altera o valor de texto que será exibido no elemento color
    document.body.style.backgroundColor = hex;  // Estamos acessando o documento a prorpriedade body, em brodry estamos acessando o estilo das cores de fundo e alterando
});

function getHexadecimalColor(){
    return Math.floor(Math.random() * hexColor.length);
}