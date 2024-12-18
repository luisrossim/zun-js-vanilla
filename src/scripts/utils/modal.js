import { handleCriarTarefa, handleRemoverTarefa } from "../tarefa";

const openCreateModalBtn = document.getElementById('open-modal-create-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modalOverlayCreate = document.querySelector('#modal-create-overlay');
const modalOverlayRemove = document.querySelector('#modal-remove-overlay');

const inputTarefa = document.querySelector("#inputTarefa");
const labelRemoveTarefa = document.querySelector('#tarefa-remove-label');

const createTarefaBtn = document.querySelector("#submit-create");
const removerTarefaBtn = document.querySelector("#submit-remove");

let idTarefaRemove = null;

function openCreateModal() {
  modalOverlayCreate.style.display = 'flex';
  inputTarefa.value = '';
}

export function openRemoveModal(id, label) {
  idTarefaRemove = id;
  modalOverlayRemove.style.display = 'flex';
  labelRemoveTarefa.innerHTML = `
    <div class="flex items-center gap-2">
      <p class="text-neutral-400 text-xs">#${id}</p>
      <p class="font-light">${label}</p>
    </div>
  `;
}

export function closeModal() {
  modalOverlayCreate.style.display = 'none';
  modalOverlayRemove.style.display = 'none';
  idTarefaRemove = null;
}

openCreateModalBtn.addEventListener('click', openCreateModal);

closeModalBtns.forEach((btn) => {
  btn.addEventListener('click', closeModal);
});

removerTarefaBtn.addEventListener('click', () => {
  handleRemoverTarefa(idTarefaRemove);
});

createTarefaBtn.addEventListener('click', () => {
  handleCriarTarefa(inputTarefa.value);
});