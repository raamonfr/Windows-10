function obterIdiomaDoNavegador() {
    return navigator.language || navigator.userLanguage;
}
function obterDataHora() {
    return Date();
}
var idioma = obterIdiomaDoNavegador();
var dataHora = obterDataHora();
document.getElementById("idioma").innerHTML = `<p>${idioma}</p>`;


let display = 0
let explorador = document.getElementById('exploArq')
let btnMaxMin = document.getElementById('max-min')
let btnFechar = document.getElementById('fechar')


//maximizar ou diminuir
btnMaxMin.addEventListener("click", function maxMin(){
    if (display == 0) {
        explorador.style.width = '100%'
        explorador.style.height = '100%'
        explorador.style.transition = '.3s'
        display = 1
    } else {
        explorador.style.width = '60%'
        explorador.style.height = '60%'
        explorador.style.transition = '.3s'
        display = 0
    }
})

//abrir o explorador
let btnExplorador = document.getElementById('btnExplorador')
btnExplorador.addEventListener('click', function abrir(){
    explorador.style.display = 'block'

    // FUNCIONALIDADE DE ARRASTAR O MODAL COM O MOUSE - AINDA NÃO ESTÁ FINALIZADO, CONTÉM MUITOS BUGS
    // var offsetX = 0;
    // var offsetY = 0;

    // explorador.addEventListener('mousedown', function(e) {
    //     offsetX = e.clientX - explorador.getBoundingClientRect().left;
    //     offsetY = e.clientY - explorador.getBoundingClientRect().top;
    //     // Adiciona event listener para quando o mouse for movido
    //     document.addEventListener('mousemove', arrastarModal);
    //   });

    //   function arrastarModal(event) {
    //     explorador.style.left = event.clientX - offsetX + 'px';
    //     explorador.style.top = event.clientY - offsetY + 'px';
    //     explorador.style.bottom = event.clientY - offsetY + 'px';
    //     explorador.style.right = event.clientY - offsetY + 'px';
    //   }

    //   document.addEventListener('mouseup', function() {
    //     document.removeEventListener('mousemove', arrastarModal);
    //   });
})

//fechar o explorador
btnFechar.addEventListener('click', function fechar() {
    explorador.style.display = 'none'
})

//accordions dentro do explorador
//Atalhos do acesso rapido
const accordions = document.querySelectorAll('.accordion')
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body')
        body.classList.toggle('active');
    })
})