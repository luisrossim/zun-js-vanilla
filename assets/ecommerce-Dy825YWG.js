import"./style-BGSuevdG.js";const n="/zun-js-vanilla/assets/produtos.json";async function d(){try{const o=await fetch(n);if(!o.ok)throw new Error("Erro ao buscar os produtos!");return await o.json()}catch(o){return console.error(o.message),[]}}const a=document.querySelector("#destaques"),c=document.querySelector("#novidades");i();async function i(){let o=await d();o.length>0&&(o.filter(e=>e.id<=4).forEach(e=>{const r=s(e);a.appendChild(r)}),o.filter(e=>e.id>4).forEach(e=>{const r=s(e);c.appendChild(r)}))}function s(o){const t=document.createElement("div");return t.className="grid grid-cols-1 gap-4 text-center border rounded-md cursor-pointer p-4",t.innerHTML=`
        <small>${o.nome}</small>
        <img width="150px" class="mx-auto" src="${o.imagem}"/>
        <p>R$ ${o.preco}</p>
    `,t}
