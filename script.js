function calcular(a,b){
    return a*b;
}

function mostrarCompras(){
    let fruta = parseInt(document.getElementById("frutas").value)
    let numero = parseInt(document.getElementById("numero").value)
    let resultado = calcular(fruta,numero);
    document.getElementById("resultado").textContent = "Total: " + resultado
}