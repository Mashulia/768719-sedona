var open = document.querySelector(".modal-close");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var date = popup.querySelector("[name=arrival-date]");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  date.focus();
});

document.documentElement
        .classList.replace('no-js', 'js');
