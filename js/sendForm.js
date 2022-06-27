const sendForm = () => {
  const form = document.querySelector("form");
  const input = document.querySelector(".modal__input");
  const error = document.querySelector(".error");

  const submit = () => {
    alert("Спасибо, данные отправлены!");
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value === "") {
      error.textContent = "Данное поле не заполнено!";
    } else {
      error.textContent = "";
    }

    if (form.querySelector(".modal__checkbox-input").checked) {
      submit();

      form.reset();
    } else {
      alert("Согласитесь с условиями!");
    }
  });
};

sendForm();
