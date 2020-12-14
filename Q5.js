const produtos = []
function adicionarProduto(){
    document.getElementById('resposta').innerHTML = "Produtos Adicionados <br/>-----------------------------<br/>"
    let produto = document.getElementById('produto').value
    produtos.push(produto)
    produtos.sort()
    document.getElementById('resposta').innerHTML += produtos + "<br/>"
}

    let btn_adicionar = document.getElementById('adicionar')
    btn_adicionar.addEventListener('click', adicionarProduto)

function limparLista(){
    document.getElementById('resposta').innerHTML = " "
    produtos.length = 0
}

    let btn_limpar = document.getElementById('limpar')
    btn_limpar.addEventListener('click', limparLista)