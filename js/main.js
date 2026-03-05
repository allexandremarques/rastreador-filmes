const meusTitulos = [];

console.log("O motor do Rastreador está ligado!");

const formulario = document.querySelector('#form-adicionar')

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    console.log("Interceptado! A página não recarregou.");

    const nomeTitulo = document.querySelector('#nome').value
    if (nomeTitulo == "") {
        alert("Por favor, digite um nome!")
        return
    }

    const categoriaEscolhida = document.querySelector('#categoria').value

    // console.log(nomeTitulo, categoriaEscolhida)

    const novoTituloObj = {
        nome: nomeTitulo,
        categoria: categoriaEscolhida,
        assistido: false
    }

    meusTitulos.push(novoTituloObj)
    salvarDados()
    console.log(meusTitulos)

    const novoItem = `<li>
                        <span>${nomeTitulo} - ${categoriaEscolhida}</span>
                        <div class="acoes">
                            <button class="btn-remover">Remover</button>
                            <button class="btn-assistido">Assistido</button>
                        </div>
                    </li>`

    const listaAlvo = document.querySelector('#lista-' + categoriaEscolhida)

    listaAlvo.innerHTML += novoItem



    // document.querySelector('#nome').value = "" (Jeito arcaico)
    formulario.reset()

});

const areaDasListas = document.querySelector('#area-listas')
areaDasListas.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('btn-remover')) {
        const itemParaRemover = evento.target.closest('li')
        itemParaRemover.remove()
    }
    if (evento.target.classList.contains('btn-assistido')) {
        const itemAssistido = evento.target.closest('li')
        const assistido = itemAssistido.querySelector('span')
        assistido.classList.add('item-assistido')
    }

})

function salvarDados() {
    const jsonString = JSON.stringify(meusTitulos)
    localStorage.setItem('titulosSalvos', jsonString)
}