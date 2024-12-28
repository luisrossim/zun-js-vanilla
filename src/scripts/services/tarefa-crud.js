import { saveItemsLocalStorage, getItemsLocalStorage } from "../utils/local-storage";

let count = parseInt(getItemsLocalStorage('count')) || 0;


export function getTarefas() {
    return getItemsLocalStorage('listaTarefas') || [];
}


export function criarTarefa(nomeTarefa) {
    let validation = isValidTarefa(nomeTarefa);
    if (!validation.valid) {
        return { status: "error", message: validation.message };
    }

    let tarefas = getTarefas();
    
    const tarefa = {
        id: count++,
        nome: nomeTarefa,
        criadoEm: new Date().toLocaleString(),
        finalizadoEm: null,
        concluida: false
    };

    tarefas.push(tarefa);
    saveItemsLocalStorage('count', count);
    saveItemsLocalStorage('listaTarefas', tarefas);

    return { status: "success", tarefa: tarefa };
}


export function isValidTarefa(nomeTarefa){
    if (nomeTarefa === "") {
        return { valid: false, message: "Nome da tarefa inexistente!" };
    }
    if (nomeTarefa.trim() === "") {
        return { valid: false, message: "Erro ao adicionar tarefa!" };
    }
    if (nomeTarefa.length > 50) {
        return { valid: false, message: "O nome da tarefa é muito longo!" };
    }
    return { valid: true };
}


export function removerTarefa(id) {
    let tarefas = getTarefas();
    const tarefasAtualizadas = tarefas.filter(t => t.id !== id);

    if (tarefas.length === tarefasAtualizadas.length) {
        return { status: "error", message: "Erro ao remover tarefa!" };
    }

    saveItemsLocalStorage('listaTarefas', tarefasAtualizadas);
    return { status: "success", tarefas: tarefasAtualizadas };
}


export function atualizaStatusTarefa(id, concluida){
    let tarefas = getTarefas();
    const tarefa = tarefas.find(t => t.id === id);

    if (tarefa) {
        tarefa.concluida = concluida;
        tarefa.finalizadoEm = (concluida ? new Date().toLocaleString() : null);
        saveItemsLocalStorage('listaTarefas', tarefas);
    }
}