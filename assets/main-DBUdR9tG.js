import"./style-Dy0Bo5Pt.js";function n(){let a=document.querySelector("#svg"),l=document.querySelector("#text");const e=new Date().getHours();let t,s;e>=6&&e<12?(t="/zun-js-vanilla/assets/bg-day.svg",s="Bom dia!"):e>=12&&e<19?(t="/zun-js-vanilla/assets/bg-day.svg",s="Boa tarde!"):(t="/zun-js-vanilla/assets/bg-night.svg",s="Boa noite!"),l.innerHTML=s,a.style.backgroundImage=`url('${t}')`}n();
