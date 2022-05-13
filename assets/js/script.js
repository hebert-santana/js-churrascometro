// Carne        - 400gr por pessoa      + de 6 horas 650gr
// Cerveja      - 1200ml por pessoa     + 6 horas 2000ml
// Refrigerante - 1000ml por pessoa     + 6 horas 1500ml
// criança (menor de 10 anos) consome equivalente à 0,5 pessoa


// criando variável (usando let) que vai receber o input
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

// imprimindo as variáveis, importante determinar com ".value" pra buscar o valor
//console.log(inputAdultos.value, inputCriancas.value, inputDuracao.value);//

let resultado = document.getElementById("resultado");

// determinando a função

function calcular() {
    console.log("Calculando...");
// determinar a quantidade de pessoas que serão inseridas .value
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
// função duracao * número de adultos + função duracao/2 * número de crianças 
    let Total_Carne = carnehoras(duracao) * adultos + (carnehoras(duracao)/2 * criancas);
    console.log(Total_Carne);

    let Total_Cerveja = cervejahoras(duracao) * adultos
    let Total_Refri = refrihoras(duracao) * adultos + (refrihoras(duracao)/2) * criancas;


// PRIMEIRA FRASE //
    resultado.innerHTML = `<p>Para o seu churrasco, você deve ter:</p>`


// criando o RESULTADO "${quantidade}""
    resultado.innerHTML += `<strong> <p>${(Total_Carne) / 1000}Kg de carne.</p> </strong>`
    
// += para não substituir o que já está em innerHTML
// usar função pra pegar o maior inteiro após a divisão
    resultado.innerHTML += `<strong> <p>${Math.ceil(Total_Cerveja / 355)} latas de cerveja.</p> </strong>`    
    resultado.innerHTML += `<strong> <p>${Math.ceil(Total_Refri / 2000)} garrafas de 2 litros de refrigerante.</p> </strong>`
    resultado.innerHTML += `<center> <p>BOA FESTA!</p> </center>`
    


}

// função carne em relação as horas

function carnehoras(duracao) {
    if (duracao >= 6){
        return 650;
    }
    else {
        return 400;
    }
}

// função cerveja em relação as horas

function cervejahoras(duracao) {
    if (duracao >= 6){
        return 3000;
    }
    else {
        return 1750;
    }
}

// função refrigerante em relação as horas

function refrihoras(duracao) {
    if (duracao >= 6){
        return 1500;
    }
    else {
        return 1000;
    }
}



let song = document.getElementById("musica");

song.play()

