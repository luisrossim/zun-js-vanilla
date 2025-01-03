import { fetchProdutos } from "./services/ecommerce-crud";

const homeItemsSection = document.querySelector("#home-items");

exibirProdutos();

async function exibirProdutos(){
    let produtos = await fetchProdutos();

    if (produtos.length > 0) {
        produtos.forEach(produto => {
            const produtoElement = buildProdutoElement(produto);
            homeItemsSection.appendChild(produtoElement);
        });

        handleProductCardHoverEvent();
    }
}

function buildProdutoElement(produto) {
    const div = document.createElement("div");
    div.className = "grid grid-cols-1 gap-2 product-card relative border rounded-md overflow-hidden cursor-pointer p-4";
    div.innerHTML = `
        <div class="w-full h-[200px] lg:h-[260px] mx-auto overflow-hidden">
            <img class="w-full h-full object-cover" src="${produto.imagem}" data-original-src="${produto.imagem}" />
        </div>
        <p class="font-thin text-sm md:text-lg">
            ${produto.nome}
        </p>
        <div class="flex flex-col gap-2">
            <div class="flex items-center font-light gap-2">
               <p class="line-through text-neutral-500">
                    R$ ${(produto.preco / (1 - produto.desconto / 100)).toFixed(2)}
                </p>
                <p class="text-green-600 text-xs">
                    ${produto.desconto}% OFF
                </p> 
            </div>
            <p>
                R$ ${produto.preco}
            </p>
        </div>
        <button type="button" class="absolute top-6 right-6">
            <i class="fa-regular fa-heart text-neutral-400"></i>
        </button>
        <div class="absolute top-2 left-2 text-white text-sm font-light self-start">
            ${produto.estoque < 3 ? '<p class="rounded-md bg-black px-2 py-1">últimas unidades</p>' : ''}
        </div>
    `;
    return div;
}


function handleProductCardHoverEvent() {
    const productCard = document.querySelectorAll(".product-card");
    productCard.forEach(product => {
        const image = product.querySelector('img');

        product.addEventListener('mouseenter', () => {
            image.src = "/zun-js-vanilla/assets/hover.jpg"
        })

        product.addEventListener('mouseleave', () => {
            image.src = image.getAttribute("data-original-src");
        })
    })
}