// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");  // Btns agora póssui a referência do objeto .btn que contém as propriedades do objeto btn da página HTMl

btns.forEach(function (btn) {  // forEach através da referência de btns percorre todas as proriedades 
    btn.addEventListener("click", function (e){  // Ao clicar sobre alguns dos botões é disparado um evento.
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){ // Se o identificador da classe contem decrease, execute o count--;
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = "blue";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count == 0){
            value.style.color = "black";
        }
        value.textContent = count;
    });
});
