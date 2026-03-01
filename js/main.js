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

    console.log(nomeTitulo, categoriaEscolhida)

    const novoItem = `<li>
                        <span>${nomeTitulo} - ${categoriaEscolhida}</span>
                        <div class="acoes">
                            <button class="btn-remover">Remover</button>
                            <button class="btn-assistido">Assistido</button>
                        </div>
                    </li>`

    const listaAlvo = document.querySelector('#lista-' + categoriaEscolhida)

    listaAlvo.innerHTML += novoItem
    
    // document.querySelector('#nome').value = "" (Jeito arcáico)
    formulario.reset()

});

