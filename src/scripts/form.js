import { exibirMensagem } from './utils/toast';
import { formatDate, validarForm, cleanString, buildCEPValidation } from "./services/form-utils";
import { gerarCPF } from "./utils/cpf";

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input, select');
const inputCPF = document.querySelector("#cpf");
const inputCEP = document.querySelector("#cep");
const inputEstado = document.querySelector("#estado");
const inputCidade = document.querySelector("#cidade");
const inputBairro = document.querySelector("#bairro");
const gerarCPFBtn = document.querySelector('#gerarCPF');
const consultarCEPBtn = document.querySelector('#consultarCEP');

form.addEventListener('submit', (event) => {
    submitForm(event);
})

gerarCPFBtn.addEventListener('click', () => {
    handleGerarCPF();
})

consultarCEPBtn.addEventListener('click', () => {
    const loadingIcon = document.createElement('span');
    loadingIcon.classList.add('loading-icon');

    consultarCEPBtn.insertAdjacentElement('afterbegin', loadingIcon);
    consultarCEPBtn.disabled = true;

    handleConsultarCEP().finally(() => {
        setTimeout(() => {
            loadingIcon.remove();
            consultarCEPBtn.disabled = false;
        }, 200);
    });
});

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const inputId = input.id;
        removeErrorMessage(inputId);
    });
});

function applyMask(input, maskFunction) {
    input.addEventListener('input', (event) => {
        let value = event.target.value.replace(/\D/g, '');
        if (value) {
            value = maskFunction(value);
        }
        event.target.value = value;
    });
}

applyMask(document.querySelector('#cpf'), cpfMask);
applyMask(document.querySelector('#telefone'), telefoneMask);
applyMask(document.querySelector('#cep'), cepMask);


async function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    data.nascimento = formatDate(data.nascimento);
    data.nome = cleanString(data.nome);

    let validation = await validarForm(data);

    if(validation.length > 0){
        let invalidInputs = [];
        validation.forEach(element => {
            invalidInputs.push(element.input);
            showErrorMessage(element.input, element.errorMessage);
        });

        exibirMensagem("error", `O(s) campo(s) (${invalidInputs.join(', ')}) estão inválidos!`);
        return;
    }

    removeErrorMessage("cep");
    exibirMensagem("success", "Formulário enviado com sucesso!");
}


function handleGerarCPF(){
    const cpf = gerarCPF();
    const maskedCpf = cpfMask(cpf);
    inputCPF.value = maskedCpf;
    removeErrorMessage("cpf");
    exibirMensagem("success", "CPF gerado com sucesso!");
}


async function handleConsultarCEP(){
    const cep = inputCEP.value;
    const cepValidation = await buildCEPValidation(cep);

    if(!cepValidation.valid){
        showErrorMessage("cep", cepValidation.error);
        return;
    }

    inputEstado.value = cepValidation.consulta.estado;
    inputCidade.value = cepValidation.consulta.localidade;
    inputBairro.value = cepValidation.consulta.bairro;

    exibirMensagem("success", "CEP validado com sucesso!");
}


function showErrorMessage(inputId, msg) {
    const inputElement = document.querySelector(`#${inputId}`);

    let helperElement = inputElement.nextElementSibling;
    if(helperElement && helperElement.classList.contains("helper-text")) {
        helperElement.textContent = msg;
    } else {
        helperElement = document.createElement('span');
        helperElement.classList.add("helper-text");
        helperElement.textContent = msg;
        inputElement.insertAdjacentElement('afterend', helperElement);
    }
    inputElement.classList.add("invalid");
}


function removeErrorMessage(inputId) {
    const inputElement = document.querySelector(`#${inputId}`);
    const helperElement = inputElement.nextElementSibling;
    if (helperElement && helperElement.classList.contains("helper-text")) {
        helperElement.remove();
    }
    inputElement.classList.remove("invalid");
}


function cpfMask(value) {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function telefoneMask(value) {
    return value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
}

function cepMask(value) {
    return value.replace(/^(\d{5})(\d{3})$/, '$1-$2');
}