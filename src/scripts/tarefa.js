import { exibirMensagem } from './utils/toast';
import { closeModal, openRemoveModal } from "./utils/modal";
import { criarTarefa, getTarefas, removerTarefa, atualizaStatusTarefa } from './services/tarefa-crud';

exibirTarefas();

const showConcluidasBtn = document.querySelector("#buttonConcluidas");
showConcluidasBtn.addEventListener('click', exibeConcluidas);


export function handleCriarTarefa(nomeTarefa) {
    let resultado = criarTarefa(nomeTarefa);

    if (resultado.status === "error") {
        exibirMensagem(resultado.status, resultado.message);
        return;
    }

    closeModal();
    exibirTarefas();
    exibirMensagem("success", "Tarefa adicionada com sucesso!");
}


export function handleRemoverTarefa(id) {
    let resultado = removerTarefa(id);

    if (resultado.status === "error") {
        exibirMensagem(resultado.status, resultado.message);
        return;
    }

    closeModal();
    exibirTarefas();
    exibirMensagem("success", "Tarefa removida com sucesso!");
}


export function exibirTarefas() {
    let tarefas = getTarefas();
    atualizaCounts(tarefas);

    let listaTarefas = document.querySelector("#listaTarefas");
    let listaTarefasConcluidas = document.querySelector("#listaTarefasConcluidas");

    listaTarefas.innerHTML = "";
    listaTarefasConcluidas.innerHTML = "";

    let countConcluidas = 0;
    let countPendentes = 0;

    // listaTarefas.innerHTML = tarefas
    //     .filter(t => !t.concluida)
    //     .map(t => exibeTarefaPendente(t).outerHTML)
    //     .join("");

    tarefas.forEach(tarefa => {
        if(tarefa.concluida === false){
            const li = buildTarefaPendenteElement(tarefa);

            const concluirTarefaBtn = li.querySelector(".concluir-tarefa-btn");
            const removerTarefaBtn = li.querySelector(".remover-tarefa-btn");

            concluirTarefaBtn.addEventListener("click", () => marcarTarefaComoConcluida(tarefa.id));
            removerTarefaBtn.addEventListener("click", () => openRemoveModal(tarefa.id, tarefa.nome));

            listaTarefas.appendChild(li);
            countPendentes++;
        } 
        else {
            const li = buildTarefaConcluidaElement(tarefa);
    
            const buttonConcluirTarefa = li.querySelector(".btn-concluir-tarefa");
            buttonConcluirTarefa.addEventListener("click", () => marcarTarefaComoPendente(tarefa.id));
    
            listaTarefasConcluidas.appendChild(li);
            countConcluidas++;
        }   
    });

    if(countPendentes == 0) {
        let divPendentes = buildNotElements("fa-pencil", "Não há tarefas pendentes!");
        listaTarefas.appendChild(divPendentes);
    }

    if(countConcluidas == 0) {
        let divConcluidas = buildNotElements("fa-check-circle", "Não há tarefas concluídas!");
        listaTarefasConcluidas.appendChild(divConcluidas);
    }
}


function atualizaCounts(tarefas){
    let countPendenteDiv = document.querySelector('#countTarefas');
    let countPendente = tarefas.filter(t => !t.concluida).length;
    countPendenteDiv.innerHTML = "(" + countPendente + ")";

    let countConcluidasDiv = document.querySelector('#countConcluidas');
    let countConcluidas = tarefas.filter(t => t.concluida).length;
    countConcluidasDiv.innerHTML = "(" + countConcluidas + ")";
}


function buildTarefaPendenteElement(tarefa) {
    const li = document.createElement("li");
    li.className = "flex justify-between font-light px-4 py-1";
    li.innerHTML = `
        <div class="flex items-center gap-3">
            <button class="concluir-tarefa-btn fa-regular fa-circle"></button>
            <span>${tarefa.nome}</span>
        </div>
        <div class="flex gap-2 justify-end text-xs">
            <small class="self-center text-neutral-400">#${tarefa.id}</small>
            <button class="remover-tarefa-btn fa fa-trash text-red-600 rounded-full p-2"></button>
        </div>
    `;

    return li;
}


function buildTarefaConcluidaElement(tarefa) {
    const li = document.createElement("li");
    li.className = "flex justify-between text-neutral-400 opacity-50";
    li.innerHTML = `
        <div class="flex items-center font-light px-4 py-1 gap-3">
            <button class="btn-concluir-tarefa fa-solid fa-check-circle"></button>
            <span class="line-through">${tarefa.nome}</span>
        </div>
        <div class="flex gap-2 justify-end text-xs">
            <small class="self-center px-2 text-neutral-600">${tarefa.finalizadoEm}</small>
        </div>
    `;

    return li;
}


function buildNotElements(icon, msg){
    const div = document.createElement("div");
    div.className = "flex flex-col gap-2 items-center justify-center text-neutral-400 px-4 py-2 h-52";
    div.innerHTML = `<i class="fa ${icon} text-xl"></i>${msg}`
    return div;
}


function marcarTarefaComoConcluida(id) {
    atualizaStatusTarefa(id, true);
    exibirTarefas();
}


function marcarTarefaComoPendente(id) {
    atualizaStatusTarefa(id, false);
    exibirTarefas();
}


function exibeConcluidas() {
    let icon = document.querySelector('#iconConcluidas');
    if (icon.classList.contains('fa-caret-down')) {
        icon.classList.replace('fa-caret-down', 'fa-caret-up');
    } else {
        icon.classList.replace('fa-caret-up', 'fa-caret-down');
    }
    document.querySelector('#listaTarefasConcluidas').classList.toggle('visible');
}
