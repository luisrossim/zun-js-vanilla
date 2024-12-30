import { isValidCPF } from "../utils/cpf";
import { getCEP } from "../utils/cep";

export async function validarForm(data){
    let validationArray = [];

    const nomeValidation = buildNomeValidation(data.nome);
    if(!nomeValidation.valid){
        validationArray.push({input: "nome", errorMessage: nomeValidation.error});
    }

    const cpfValidation = buildCPFValidation(data.cpf);
    if(!cpfValidation.valid){
        validationArray.push({input: "cpf", errorMessage: cpfValidation.error});
    }

    const cepValidation = await buildCEPValidation(data.cep);
    if(!cepValidation.valid){
        validationArray.push({input: "cep", errorMessage: cepValidation.error});
    }
    
    console.log(validationArray);
    return validationArray;
}


function buildNomeValidation(nome){
    if (nome === "") {
        return { valid: false, error: "Nome é obrigatório!" };
    }
    if (nome.trim() === "") {
        return { valid: false, error: "Nome inválido!" };
    }
    if(nome.trim().length < 3){
        return { valid: false, error: "Nome é muito curto!" }
    }
    if(nome.trim().length > 20){
        return { valid: false, error: "Nome é muito longo!" }
    }

    return { valid: true }
}


function buildCPFValidation(cpf){
    if (!isValidCPF(cpf)){
        return { valid: false, error: "CPF inválido!" }
    }
    return { valid: true }
}


export async function buildCEPValidation(cep){
    if (cep === "") {
        return { valid: false, error: "CEP é obrigatório!" };
    }

    if(cep.length !== 9) {
        return { valid: false, error: "CEP inválido!" };
    }

    const consulta = await getCEP(cep);
    if(!consulta.success) {
        return { valid: false, error: consulta.message };
    }

    return { valid: true, consulta: consulta.data }
}


export function formatDate(dateString) {
    let date = new Date(dateString);
    const day = String(date.getDate() + 1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};


export function cleanString(string) {
    return string.trim().replace(/\s+/g, ' ');
}