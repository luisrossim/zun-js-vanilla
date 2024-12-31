import { fetchProdutos } from "./services/ecommerce-crud";

const destaquesSection = document.querySelector("#destaques");
const novidadesSection = document.querySelector("#novidades");

exibirProdutos();

async function exibirProdutos(){
    let produtos = await fetchProdutos();

    if (produtos.length > 0) {
        let produtosDestaques =  produtos.filter(produto => produto.id <= 4);
        produtosDestaques.forEach(produto => {
            const produtoElement = buildProdutoElement(produto);
            destaquesSection.appendChild(produtoElement);
        });

        let produtosNovidades =  produtos.filter(produto => produto.id > 4);
        produtosNovidades.forEach(produto => {
            const produtoElement = buildProdutoElement(produto);
            novidadesSection.appendChild(produtoElement);
        });
    }
}

function buildProdutoElement(produto){
    const div = document.createElement("div");
    div.className = "grid grid-cols-1 gap-4 text-center border rounded-md cursor-pointer p-4";
    div.innerHTML = `
        <small>${produto.nome}</small>
        <img width="150px" class="mx-auto" src="${produto.imagem}"/>
        <p>R$ ${produto.preco}</p>
    `;
    return div;
}