export function handleSVGTime(){
    let svg = document.querySelector("#time");
    let welcome = document.querySelector("#welcome");

    const horaAtual = new Date().getHours();

    let src;
    let msg;

    if (horaAtual >= 6 && horaAtual < 12) {
        src = 'bg-day.svg';
        msg = 'Bom dia!';
    } else if (horaAtual >= 12 && horaAtual < 19) {
        src = 'bg-mid.svg';
        msg = 'Boa tarde!';
    } else {
        src = 'bg-night.svg';
        msg = 'Boa noite!';
    }

    welcome.innerHTML = msg;
    svg.src = src;
}