const comingSelect = document.querySelector('[name="coming"]');

function updateForm() {
  document
    .querySelector("form")
    .classList.toggle("expanded", comingSelect.value === "yes");
}

comingSelect.addEventListener("change", updateForm);

updateForm();
