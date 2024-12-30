export async function getCEP(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (!response.ok) {
            throw new Error('Erro ao consultar o CEP!');
        }
        
        const data = await response.json();

        if (data.erro) {
            throw new Error('CEP não encontrado!');
        }

        return { success: true, data: data }

    } catch (error) {
        return { success: false, message: error.message }
    }
}