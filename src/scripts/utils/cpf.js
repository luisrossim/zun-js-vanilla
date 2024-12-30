export function isValidCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = (resto < 2) ? 0 : 11 - resto;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = (resto < 2) ? 0 : 11 - resto;

    return cpf[9] == digito1 && cpf[10] == digito2;
}

export function gerarCPF() {
    const randomDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    
    const firstVerifier = calculateVerifier(randomDigits, 10);
    const secondVerifier = calculateVerifier([...randomDigits, firstVerifier], 11);
    
    const cpf = [...randomDigits, firstVerifier, secondVerifier];
    return cpf.join('');
};
  
function calculateVerifier(digits, weight) {
    const sum = digits.reduce((acc, digit, index) => acc + digit * (weight - index), 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
};
