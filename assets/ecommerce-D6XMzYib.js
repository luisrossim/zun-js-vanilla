import"./style-Cx0ngIjh.js";const s="/zun-js-vanilla/assets/produtos.json";async function r(){try{const e=await fetch(s);if(!e.ok)throw new Error("Erro ao buscar os produtos!");return await e.json()}catch(e){return console.error(e.message),[]}}const n=document.querySelector("#home-items");a();async function a(){let e=await r();e.length>0&&(e.forEach(t=>{const o=c(t);n.appendChild(o)}),l())}function c(e){const t=document.createElement("div");return t.className="grid grid-cols-1 gap-2 product-card relative border rounded-md overflow-hidden cursor-pointer p-4",t.innerHTML=`
        <div class="w-full h-[200px] lg:h-[260px] mx-auto overflow-hidden">
            <img class="w-full h-full object-cover" src="${e.imagem}" data-original-src="${e.imagem}" />
        </div>
        <p class="font-thin text-sm md:text-lg">
            ${e.nome}
        </p>
        <div class="flex flex-col gap-2">
            <div class="flex items-center font-light gap-2">
               <p class="line-through text-neutral-500">
                    R$ ${(e.preco/(1-e.desconto/100)).toFixed(2)}
                </p>
                <p class="text-green-600 text-xs">
                    ${e.desconto}% OFF
                </p> 
            </div>
            <p>
                R$ ${e.preco}
            </p>
        </div>
        <button type="button" class="absolute top-6 right-6">
            <i class="fa-regular fa-heart text-neutral-400"></i>
        </button>
        <div class="absolute top-2 left-2 text-white text-sm font-light self-start">
            ${e.estoque<3?'<p class="rounded-md bg-black px-2 py-1">últimas unidades</p>':""}
        </div>
    `,t}function l(){document.querySelectorAll(".product-card").forEach(t=>{const o=t.querySelector("img");t.addEventListener("mouseenter",()=>{o.src="/zun-js-vanilla/assets/hover.jpg"}),t.addEventListener("mouseleave",()=>{o.src=o.getAttribute("data-original-src")})})}
