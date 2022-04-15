function sum () {
    let peso = document.querySelector(".weigth").value
    let altura = document.querySelector(".heigth").value
    let resultado = document.querySelector(".result")
    let classificacao = document.querySelector(".classificacao")
    let calculo = parseInt(((peso / (altura * altura)) * 10000))    
    
    resultado.textContent = calculo.toFixed(2)

    if (calculo < 18.5) {
        classificacao.textContent = "Baixo Peso"
    } else if (calculo < 24.9){
        classificacao.textContent = "Peso Normal"
    } else if (calculo < 29.9) {
        classificacao.textContent = "Sobrepeso"
    } else if (calculo < 34.9) {
        classificacao.textContent = "Obesidade Grau I"
    } else if (calculo < 39.9) {
        classificacao.textContent = "Obesidade Grau II"
    } else if (calculo >= 40) {
        classificacao.textContent = "Obesidade Grau III"
    } else {
        resultado.textContent = "Insira um Número"
        classificacao.textContent = ""
    }
}