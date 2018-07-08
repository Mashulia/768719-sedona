var link = document.querySelector(".modal-close");
var popup = document.querySelector(".modal");
var arrival = popup.querySelector("[name=arrival-date]");
var adults = popup.querySelector("[name=adults]");
var child = popup.querySelector("[name=children]");
var departure = popup.querySelector("[name=departure-date]");
var isStorageSupport = true;
var arrivalStorage = "";
var departureStorage = "";
var adultsStorage = "";
var childStorage = "";
var search = popup.querySelector(".search");

try {
    arrivalStorage = localStorage.getItem("select-arrival")
    departureStorage = localStorage.getItem("select-departure")
    adultsStorage = localStorage.getItem("select-adults")
    childStorage = localStorage.getItem("select-child")
} catch (err) {
    isStorageSupport = false;
}

// document.documentElement
//     .classList.replace("no-js", "js");

    popup.classList.remove("modal-show");


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    arrival.focus();
    arrival.classList.remove("modal-error");
    departure.classList.remove("modal-error");
    adults.classList.remove("modal-error");
    child.classList.remove("modal-error");
});

popup.addEventListener("submit", function(evt) {
    if (!arrival.value) {
        evt.preventDefault();
        console.log("Нужно ввести дату прибытия");
        arrival.classList.remove("modal-error");
        arrival.offsetWidth = arrival.offsetWidth;
        arrival.classList.add("modal-error");
    }
    if (!departure.value) {
        evt.preventDefault();
        console.log("Нужно ввести дату отъезда");
        departure.classList.remove("modal-error");
        departure.offsetWidth = departure.offsetWidth;
        departure.classList.add("modal-error");
    }
    if (!adults.value) {
        adults.classList.remove("modal-error");
        console.log("Нужно ввести количество взрослых");
        adults.offsetWidth = adults.offsetWidth;
        adults.classList.add("modal-error");
    }
    if (!child.value) {
        child.classList.remove("modal-error");
        console.log("Нужно ввести количесто детей");
        child.offsetWidth = child.offsetWidth;
        child.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("select-aarrival", arrival.value);
            localStorage.setItem("select-departure", departure.value);
            localStorage.setItem("select-adults", adults.value);
            localStorage.setItem("select-child", child.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
