import { exibirTarefas } from './scripts/tarefa';
import { handleSVGTime } from './scripts/utils/time';

const showConcluidasBtn = document.querySelector("#buttonConcluidas");

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