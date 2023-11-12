'use strict';

const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const addBtnModal = () => {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}

const removeBtnModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', removeBtnModal);
}

overlay.addEventListener('click', addBtnModal);
closeModal.addEventListener('click', addBtnModal);

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        addBtnModal()
    }
})