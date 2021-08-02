
let adultos = document.getElementById("adultos");
let criancas = document.getElementById("criancas");
let Horas = document.getElementById("duracao");

let resultado = document.getElementById("res");

function calcular() {

    let a = adultos.value;
    let c = criancas.value;
    let h = Horas.value;

    let carne = carnePP(h) * a + (carnePP(h)/2 * c);
    let cerveja = cervejaPP(h) * a;
    let bebida = bebidaPP(h) * a + (bebidaPP(h)/2 * c);

    resultado.innerHTML = `<p>${carne/1000}kg de carne.`;
    resultado.innerHTML += `<p>${Math.ceil(cerveja/355)} latas de cerveja (355ml).`;
    resultado.innerHTML += `<p>${Math.ceil(bebida/2000)} Garrafa de bebidas (2LT).`;
    

}

function limpar() {
    adultos.value = '';
    criancas.value = '';
    Horas.value = '';
    resultado.innerHTML = 'Aguardando para calcular...';
}



function carnePP(h) {
    if (h >= 6) {
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(h) {
    if (h >= 6) {
        return 1500;
    }else{
        return 1200;
    }
}

function bebidaPP(h) {
    if (h >= 6) {
        return 1500;
    }else{
        return 1000;
    }
}