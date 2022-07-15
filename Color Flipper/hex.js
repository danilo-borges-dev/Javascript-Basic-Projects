// Faz o estudo detalhado deste código e entender a lógica
// Digitar na frente a explicação de cada comando e também a lógica

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];  
// Aqui temos uma constante que aramazena a referência para um array contendo 14 posições
// #F15025
const btn = document.getElementById("btn"); // A constante "btn" armazena a referência do ID do elemento btn
const color = document.querySelector(".color");  // A constante color aramazena a referência da classe .color 

btn.addEventListener("click", function(){
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
    // Math.random -> Gera um número aleatório entre 0 exclusivo e 1 inclusivo
    // Math.floor -> Arrendonda um número para baixo, exemplo 1.3 -> fica como 1
    // Por exemplo, o Math.random gera um valor igual a 0,5 que é multiplicado por 15 temos como resulto = 7,5
    // em seguida o Math.floor aredonda o valor 7,5 para 7, sendo este o index passado por parâmetro na função.
}