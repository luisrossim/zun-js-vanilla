export function handleSVGTime(){
    let svg = document.querySelector("#svg");
    let text = document.querySelector("#text");

    const horaAtual = new Date().getHours();

    let src;
    let msg;

    if (horaAtual >= 6 && horaAtual < 12) {
        src = '/zun-js-vanilla/assets/bg-day.svg';
        msg = 'Bom dia!';
    } else if (horaAtual >= 12 && horaAtual < 19) {
        src = '/zun-js-vanilla/assets/bg-day.svg';
        msg = 'Boa tarde!';
    } else {
        src = '/zun-js-vanilla/assets/bg-night.svg';
        msg = 'Boa noite!';
    }

    text.innerHTML = msg;
    svg.style.backgroundImage = `url('${src}')`;
}