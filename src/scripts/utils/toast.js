export function exibirMensagem(acao, mensagem) {
    const toast = document.createElement('div');
    toast.classList.add('toast', 'rounded-lg', 'px-4', 'py-2', 'z-50', 'text-white', 'fixed', 'top-[30px]', 'right-[30px]', 'flex', 'items-center', 'gap-2');
    
    const classToast = acao === "success" ? "bg-green-600" : "bg-red-600";
    toast.classList.add(classToast);

    const i = document.createElement('i');
    const classIcon = acao === "success" ? "fa-check" : "fa-xmark";
    i.classList.add('fa', 'mr-2', classIcon);
    toast.appendChild(i);

    const span = document.createElement('span');
    span.textContent = mensagem;
    toast.appendChild(span);

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}