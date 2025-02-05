// let precoVar = 0;
// let carrinhoTemplate = [];

// function adicionar() {
//     let qtdProduto = document.getElementById('quantidade').value;
//     if (qtdProduto == 0) {
//         alert('Escolha uma quantidade de produto');
//     } else {
//         let produtoSelecionado = document.getElementById('produto');
//         let valueProdutoSelecionado = produtoSelecionado.value;

//         let precoProduto = valueProdutoSelecionado.match(/R\$(\d+)/)[1];
//         let nomeProduto = valueProdutoSelecionado.split(' - ')[0];
//         if (carrinhoTemplate.includes('Não há nenhum produto no carrinho')) {
//             carrinhoTemplate = [];
//             adicionarNaListaCarrinho(qtdProduto,nomeProduto, precoProduto);
//         } else {
//             adicionarNaListaCarrinho(qtdProduto,nomeProduto, precoProduto);
//         };
//     }


// }
// function carrinho() {
//     let lista = document.getElementById('lista-produtos');
//     lista.querySelector('.carrinho__produtos__produto').innerHTML = '';
//     for (let j = 0; j <= carrinhoTemplate.length - 1; j++) {
//         let pegarLista = lista.querySelector('.carrinho__produtos__produto');
//         pegarLista.innerHTML  `${carrinhoTemplate[j]}`
//     }
// }

// function totalPreco(preco, qtd) {
//     let precoHTML = document.getElementById('valor-total');
//     preco = preco * qtd;
//     precoVar += preco;

//     precoHTML.innerHTML = `R$${precoVar}`

// }

// function limpar() {
//     precoVar = 0;
//     totalPreco(0, 0);
//     carrinhoTemplate = ['Não há nenhum produto no carrinho'];
//     carrinho();
// }

// function adicionarNaListaCarrinho(qtdProduto, nomeProduto, precoProduto) {
//     carrinhoTemplate.push(`<span class="texto-azul">${qtdProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</br></span>`);
//     totalPreco(precoProduto, qtdProduto);
//     carrinho();
// }


let precoTotal = 0;
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').innerHTML = `R$ 0`;

function adicionar() {
    let qtd = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
    let valor = document.getElementById('valor-total')

    let nomeProduto = produto.split('-')[0];
    let precoProduto = produto.split('R$')[1]
    precoTotal += precoProduto * qtd;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto"> <span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</br></span></section>`;

    valor.innerHTML = `R$ ${precoTotal}`;

}
function limpar() {
    precoTotal = 0;
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').innerHTML = `R$ 30`;
}