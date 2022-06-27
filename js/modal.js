const modal = () => {
  const modalButton = document.querySelector(".intro__item-schedule-link");
  const modalBtn = document.querySelector(".schedule-link__mobile");
  const modal = document.querySelector(".modal");
  const overlay = modal.querySelector(".overlay");
  const closeButton = modal.querySelector(".modal__close");

  modalButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  modalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
};

modal();
