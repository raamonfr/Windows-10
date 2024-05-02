function obterIdiomaDoNavegador() {
    return navigator.language || navigator.userLanguage;
}

function obterDataHora() {
    return Date();
}

var idioma = obterIdiomaDoNavegador();
var dataHora = obterDataHora();
document.getElementById("idioma").innerHTML = `<p>${idioma}</p>`;