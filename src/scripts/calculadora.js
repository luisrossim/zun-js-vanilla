const display = document.querySelector('#display');
const result = document.querySelector('#result');
const numerosBtns = document.querySelectorAll(".numero");
const operadoresBtns = document.querySelectorAll(".operador");
const clearBtn = document.querySelector('#clear');
const igualBtn = document.querySelector('#igual');
const decimalBtn = document.querySelector('#decimal');

numerosBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        handleNumero(btn.textContent);
    });
})

operadoresBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        handleOperador(btn.textContent);
    });
})

clearBtn.addEventListener('click', () => { clear() })
igualBtn.addEventListener('click', () => { calcular() })
decimalBtn.addEventListener('click', () => { handleDecimal() })

let num1 = "";
let num2 = "";
let operadorAtual = "";
let res = null;


function handleNumero(numero){
    if (res) {
        clear();
        num1 = numero;
    } else if (operadorAtual === "") {
        num1 = (num1 === "0") ? numero : num1 + numero;
    } else {
        num2 = (num2 === "0") ? numero : num2 + numero;
    }
    atualizarPainel();
}


function handleOperador(operador){
    if (res) {
        num1 = res.toString();
        num2 = "";
        operadorAtual = operador;
        res = null;
    } else if (num1 !== "" && num2 === ""){
        operadorAtual = operador;
    } else {
        console.error('Erro ao adicionar operador!');
        return;
    }
    atualizarPainel();
}


function calcular(){
    if(num1 !== "" && operadorAtual !== "" && num2 !== "") {
        let n1 = parseFloat(num1);
        let n2 = parseFloat(num2);

        switch (operadorAtual) {
            case "/": res = (n1 == 0 || n2 == 0) ? 0 : n1 / n2; break;
            case "*": res = n1 * n2; break;
            case "-": res = n1 - n2; break;
            case "+": res = n1 + n2; break;
            case "%": res = n1 % n2; break;
            default: res = "error";
        }
        atualizarPainel();
    }
}


function atualizarPainel() {
    display.textContent = `${num1} ${operadorAtual} ${num2}`;
    result.textContent = res;
}


function clear(){
    num1 = "";
    num2 = "";
    operadorAtual = "";
    res = null;
    atualizarPainel();
}

function handleDecimal() {
    if (res) {
        return;
    } else if (operadorAtual === "") {
        if (!num1.includes(".")) { 
            num1 = (num1 === "") ? "0." : num1 + ".";
        }
    } else {
        if (!num2.includes(".")) {
            num2 = (num2 === "") ? "0." : num2 + ".";
        }
    }
    atualizarPainel();
}