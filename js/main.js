console.log("O motor do Rastreador está ligado!");

const formulario = document.querySelector('#form-adicionar')

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    console.log("Interceptado! A página não recarregou.");
});

