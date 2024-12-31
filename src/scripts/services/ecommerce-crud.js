const url = '/zun-js-vanilla/assets/produtos.json';

export async function fetchProdutos() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar os produtos!');
        }
        const produtos = await response.json();
        return produtos;
    }
    catch (error) {
        console.error(error.message);
        return [];
    }
}