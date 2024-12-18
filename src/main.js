import { handleCriarTarefa, exibirTarefas } from './scripts/tarefa';
import { handleSVGTime } from './scripts/utils/time';

const adicionarTarefaBtn = document.querySelector("#buttonTarefa");
const showConcluidasBtn = document.querySelector("#buttonConcluidas");
const inputTarefa = document.querySelector("#inputTarefa");

exibirTarefas();
handleSVGTime();

showConcluidasBtn.addEventListener('click', () => {
    let icon = document.querySelector('#iconConcluidas');
    if (icon.classList.contains('fa-caret-down')) {
        icon.classList.replace('fa-caret-down', 'fa-caret-up');
    } else {
        icon.classList.replace('fa-caret-up', 'fa-caret-down');
    }
    document.querySelector('#listaTarefasConcluidas').classList.toggle('visible');
});

adicionarTarefaBtn.addEventListener('click', () => {
    handleCriarTarefa(inputTarefa.value);
});