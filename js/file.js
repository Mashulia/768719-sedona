var open = document.querySelector(".modal-close");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var date = popup.querySelector("[name=arrival-date]");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("closed");
  date.focus();
});

// close.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popup.classList.remove("modal-show");
//   });
