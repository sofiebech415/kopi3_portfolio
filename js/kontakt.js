// const form = document.getElementById("kontaktform");
// const takBesked = document.getElementById("takbesked");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   takBesked.textContent = "Tak for din besked! Jeg vender tilbage hurtigst muligt.";

//   form.reset(); // tømmer tekstfeltet
// });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("kontaktform");
  const overlay = document.getElementById("overlay");
  const lukPopup = document.getElementById("lukPopup");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    overlay.classList.remove("hidden");
    form.reset();
  });

  lukPopup.addEventListener("click", function () {
    overlay.classList.add("hidden");
  });
});
