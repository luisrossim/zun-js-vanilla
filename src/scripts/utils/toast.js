export function exibirMensagem(acao, mensagem){
    const createTarefaBtn = document.querySelector("#submit-create");
    const toast = document.querySelector("#toast");

    // limpa, classe
    toast.innerHTML = ''
    toast.classList.remove("bg-green-600", "bg-red-600");
    let classToast = (acao == "success" ? "bg-green-600" : "bg-red-600");
    toast.classList.add(classToast);

    // adiciona icon
    let i = document.createElement('i');
    let classIcon = (acao == "success" ? "fa-check" : "fa-xmark"); 
    i.classList.add('fa', 'mr-2', classIcon);
    toast.appendChild(i);

    // adiciona span
    let span = document.createElement('span');
    span.textContent = mensagem;
    toast.appendChild(span);

    toast.style.display = 'block';
    createTarefaBtn.disabled = true;
    
    setTimeout(() => {
        toast.style.display = 'none';
        createTarefaBtn.disabled = false;
    }, 2000);
}