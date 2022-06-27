const descriptionModal = () => {
  const modalBtn = document.querySelector(".descr-modal__btn");
  const modal = document.querySelector(".description-modal");
  const plus = document.querySelector(".descr-modal__btn-img");
  const modalText = document.querySelector(".descr-modal__text");

  modalBtn.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    plus.classList.toggle("_active");
    modalText.classList.toggle("_none");
  });
};

descriptionModal();
