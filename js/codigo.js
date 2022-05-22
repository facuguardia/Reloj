let inputs, reloj, alarma, horas, minutos, segundos, repetir;

window.addEventListener('load', () => {
    inputs = Array.from(document.getElementsByClassName('numero'));
    reloj = document.querySelector('.reloj');
    alarma = new Audio('sonido/alarm.mp3');
});

function inicioReloj() {
    parseTime();
    setTimer();
    countdown();
}

function parseTime() {
    horas = Number(inputs[0].value);
    minutos = Number(inputs[1].value);
    segundos = Number(inputs[2].value);
}

function setTimer() {
    reloj.innerHTML = `<p class="numero">${horas > 9 ? horas : ('0' + horas)}</p><span>hs</span>
    <p class="numero">${minutos > 9 ? minutos : ('0' + minutos)}</p><span>min</span>
    <p class="numero">${segundos > 9 ? segundos : ('0' + segundos)}</p><span>seg</span>`

    document.title = `${horas > 9 ? horas : ('0' + horas)}:${minutos > 9 ? minutos : ('0' + minutos)}:${segundos > 9 ? segundos : ('0' + segundos)}`;
}

function countdown() {
    repetir = setInterval(runner, 1000);
}

function runner() {
    if (segundos > 0) {
        segundos--;
    } else {
        if (minutos > 0) {
            segundos = 59;
            minutos--;
        } else {
            if (horas > 0) {
                segundos = 59;
                minutos = 59;
                horas--;
            } else {
                alarma.play();
            }
        }
    }

    setTimer();
}

function finReloj() {
    clearInterval(repetir);
    location.reload();
}