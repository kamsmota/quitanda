let total = 0;
function adicionarCarrinho() {
    let preco = 0;
    let valor = 0;
    let fruta = document.getElementById("Frutas").value;
    let verduras = document.getElementById("Verduras").value;
    let legumes = document.getElementById("Legumes").value;
    let boulangerie = document.getElementById("Boulangerie").value;
    let graos = document.getElementById("Graos").value;
    let laticinios = document.getElementById("Laticinios").value;
    let qtd = document.getElementById("qtd").value;
    switch (fruta) {
        case ("Banana"):
            preco = 2;
            valor = (qtd * preco);
            total = total + valor;
            break;
        case ("Laranja"):
            preco = 1.5;
            valor = (qtd * preco);
            total = total + valor;
            break;
        case ("Maçã"):
            preco = 3;
            valor = (qtd * preco);
            total = total + valor;
            break;
        case ("Kiwi"):
            preco = 4;
            valor = (qtd * preco);
            total = total + valor;
            break;
        case ("Melão"):
            preco = 12;
            valor = (qtd * preco);
            total = total + valor;
            break;
        case ("Abacaxi"):
            preco = 13;
            valor = (qtd * preco);
            total = total + valor;
            break;
        default:
            preco = 5;
            valor = (qtd * preco);
            total = total + valor;
            break;
    }
let produtos = document.createElement("div");
produtos.style.wordBreak = 'break-all';
produtos.innerHTML = `${qtd}x ${fruta} - R$ ${valor.toFixed(2)}`;
document.getElementById("carrinho").appendChild(produtos);

let resultado = document.getElementById("total");
resultado.innerHTML = `TOTAL: <b>R$ ${total.toFixed(2)}</b>`;
}
