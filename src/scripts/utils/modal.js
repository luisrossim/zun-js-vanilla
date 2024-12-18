const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.querySelectorAll('.close-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');
const inputTarefa = document.querySelector("#inputTarefa");

function openModal() {
  modalOverlay.style.display = 'flex';
  inputTarefa.value = '';
}

export function closeModal() {
  modalOverlay.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.forEach((btn) => {
  btn.addEventListener('click', closeModal);
});