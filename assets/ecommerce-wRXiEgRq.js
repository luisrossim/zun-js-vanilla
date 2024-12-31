import"./style-BxUKaBM-.js";const n="/zun-js-vanilla/assets/produtos.json";async function a(){try{const e=await fetch(n);if(!e.ok)throw new Error("Erro ao buscar os produtos!");return await e.json()}catch(e){return console.error(e.message),[]}}const c=document.querySelector("#destaques"),d=document.querySelector("#novidades");i();async function i(){let e=await a();e.length>0&&(e.filter(t=>t.destaque==!0).forEach(t=>{const s=r(t);c.appendChild(s)}),e.filter(t=>t.novidade==!0).forEach(t=>{const s=r(t);d.appendChild(s)}))}function r(e){const o=document.createElement("div");return o.className="grid grid-cols-1 gap-2 relative text-center border rounded-md overflow-hidden cursor-pointer p-4",o.innerHTML=`
        <img width="180px" class="mx-auto" src="${e.imagem}"/>
        <small>${e.nome}</small>
        <div class="flex items-center justify-center gap-2">
            <p class="line-through text-neutral-500 font-light">
                R$ ${(e.preco/(1-e.desconto/100)).toFixed(2)}
            </p>
            <p class="text-green-600 text-xs">${e.desconto}% OFF</p> 
        </div>
        <p class="text-xl font-light">R$ ${e.preco}</p>
        <button type="button" class="absolute top-5 right-5">
            <i class="fa-regular fa-heart text-neutral-500"></i>
        </button>
    `,o}
