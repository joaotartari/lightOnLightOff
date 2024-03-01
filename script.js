const lampada = document.getElementById('lampada');
const botaoApagar = document.getElementById('apagar');
const botaoAcender = document.getElementById('acender');
function acender(){
    lampada.setAttribute('src', 'lightOn.jpg');
    botaoApagar.removeAttribute('disabled');
    botaoAcender.setAttribute('disabled',true);
}
function apagar(){
    lampada.setAttribute('src','lightOff.jpg');
    botaoAcender.removeAttribute('disabled');
    botaoApagar.setAttribute('disabled', true);
}