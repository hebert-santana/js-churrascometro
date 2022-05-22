// Carne        - 150gr por pessoa por hora     + de 6 horas 150gr por pessoa por hora
// Cerveja      - 500ml por pessoa por hora     + de 6 horas 450ml por pessoa por hora
// Refrigerante - 400ml por pessoa por hora     + de 6 horas 250ml por pessoa por hora
// (Média) Adoslescente consome equivalente à 0,8 pessoa que não bebe.
// (Média) Criança (menor de 12 anos) consome equivalente à 0,5 pessoa que não bebe.


// criando variável (usando let) que vai receber o input
let inputAdultos_b = document.getElementById("adultos_bebem");
let inputAdultos_nb = document.getElementById("adultos_naobebem");
let inputAdolescente = document.getElementById("menorde18");
let inputCriancas = document.getElementById("criancas");

let inputDuracao = document.getElementById("duracao");

// imprimindo as variáveis, importante determinar com ".value" pra buscar o valor
//console.log(inputAdultos.value, inputCriancas.value, inputDuracao.value);//

let resultado = document.getElementById("resultado");

// determinando a função

function calcular() {
    console.log("Calculando...");
// determinar a quantidade de pessoas que serão inseridas .value
    let adultos_b = inputAdultos_b.value;
    let adultos_nb = inputAdultos_nb.value;
    let adolescente = inputAdolescente.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

// função duracao * número de adultos + função duracao/2 * número de crianças 
    let Total_Carne = (carnehoras(duracao) * (parseInt(adultos_b) + (parseInt(adultos_nb))) + (carnehoras(duracao) * 0.8 * adolescente) + (carnehoras(duracao) * 0.5 * criancas));
    let Total_Cerveja = cervejahoras(duracao) * adultos_b
    let Total_Refri = (refrihoras(duracao) * adultos_nb) + (refrihoras(duracao) * 0.8 * adolescente) + (refrihoras(duracao) * 0.5 * criancas);


// PRIMEIRA FRASE //
    resultado.innerHTML = `<p>Para o seu churrasco, você deve ter:</p>`


// criando o RESULTADO "${quantidade}""
    resultado.innerHTML += `<strong> <p>${(Total_Carne) / 1000}Kg de carne.</p> </strong>`
    
// += para não substituir o que já está em innerHTML
// usar função pra pegar o maior inteiro após a divisão
    resultado.innerHTML += `<strong> <p>${Math.ceil((Total_Cerveja) / 355)} latas de cerveja.</p> </strong>`    
    resultado.innerHTML += `<strong> <p>${Math.ceil((Total_Refri) / 2000)} garrafas de 2 litros de refrigerante.</p> </strong>`
    resultado.innerHTML += `<center> <p>BOA FESTA!</p> </center>`
    


}

// função carne em relação as horas

function carnehoras(duracao) {          // consumo médio sempre de 150g/h até 5 horas de duração
    if (duracao >= 5){
        return 120*(duracao - 5) + 150*5;
    }
    else {
        return 150*duracao;
    }
}

// função cerveja em relação as horas

function cervejahoras(duracao) {
    if (duracao >= 5){
        return ((450*(duracao - 5)) + 600*5)  ; // 600*5 das 5 primeiras horas + 450 ml por hora
    }
    else {
        return 600*duracao;
    }
}

// função refrigerante em relação as horas

function refrihoras(duracao) {
    if (duracao >= 5){
        return (( 250*(duracao - 5)) + 400*5);
    }
    else {
        return 400*duracao;
    }
}

let song = document.getElementById("musica");
song.play()

