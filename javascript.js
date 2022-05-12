const hamBug = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const body = document.querySelector("body");

hamBug.addEventListener("click", () => {
  hamBug.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

document.querySelectorAll(".nav_link").forEach((n) =>
  n.addEventListener("click", () => {
    hamBug.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("no-scroll");
  })
);


/* Modal forms */

const openModalButtons=document.querySelectorAll('[data-modal-target]')
const closeModalButtons=document.querySelectorAll('[data-close-button]')
const overlay=document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
  const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
})
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
  const modal = button.closest('.modal')
    closeModal(modal)
})
})

function openModal(modal) {
  if (modal==null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  body.classList.toggle("no-scroll");
  
}

function closeModal(modal) {
  if (modal==null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  body.classList.remove("no-scroll");
}
