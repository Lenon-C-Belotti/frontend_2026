const produto = {
    "123": { nome: "Creed", preco: 9.00 },
    "432": { nome: "Heavy Metal", preco: 3.00 },
    "789": { nome: "Metal Pesadão", preco: 12.00 },
    "147": { nome: "Rockzão", preco: 90.50 },
};

let carinho = [];

const audi = new Audio("bip.mp3");

const codHtml = document.getElementById("cod");
const qtdHtml = document.getElementById("qtd");
const precoHtml = document.getElementById("preco");
const sub = document.getElementById("sub");
const lista = document.getElementById("lista");
const totalHtml = document.getElementById("total");

window.onload = () => {
    codHtml.focus();
    codHtml.addEventListener("input", atualizarPreco);
    qtdHtml.addEventListener("input", atualizarPreco);
};

function atualizarPreco() {
    const codigo = codHtml.value.trim();
    const quantidade = Number(qtdHtml.value) || 1;
    const infoProduto = produto[codigo];

    if (!infoProduto) {
        precoHtml.value = "";
        sub.textContent = "0.00";
        return;
    }

    const subtotal = infoProduto.preco * quantidade;
    precoHtml.value = infoProduto.preco.toFixed(2);
    sub.textContent = subtotal.toFixed(2);
}

function Alertitem() {
    alert("Código não encontrado.");
    codHtml.focus();
}

function addProduto() {
    const codigo = codHtml.value.trim();
    const quantidade = Number(qtdHtml.value) || 1;
    const infoProduto = produto[codigo];

    if (!infoProduto) {
        Alertitem();
        return;
    }

    const subtotal = infoProduto.preco * quantidade;

    const item = {
        nome: infoProduto.nome,
        preco: infoProduto.preco,
        quantidade: quantidade,
        subtot: subtotal
    };

    carinho.push(item);
    audi.currentTime = 0;
    audi.play();

    atualizarTela();

    qtdHtml.value = 1;
    codHtml.value = "";
    precoHtml.value = "";
    sub.textContent = "0.00";
    codHtml.focus();
}

function atualizarTela() {
    lista.innerHTML = "";
    let totalCompra = 0;

    carinho.forEach(item => {
        totalCompra += item.subtot;
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${item.quantidade} x ${item.nome} (R$ ${item.preco.toFixed(2)}) = R$ ${item.subtot.toFixed(2)}`;
        lista.appendChild(li);
    });

    totalHtml.textContent = totalCompra.toFixed(2);
}