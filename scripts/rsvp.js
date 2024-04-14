const comingSelect = document.querySelector('[name="coming"]');
const requiredIfComing = document.querySelectorAll("[js-required]");

function updateForm() {
  document
    .querySelector("form")
    .classList.toggle("expanded", comingSelect.value === "yes");

  requiredIfComing.forEach((el) => {
    el.required = comingSelect.value === "yes";
  });
}

comingSelect.addEventListener("change", updateForm);

updateForm();
