const toggleBtn = document.querySelector("#toggle-notes");
const extraNotes = document.querySelector("#extra-notes");

toggleBtn.addEventListener("click", function () {
  extraNotes.classList.toggle("hidden");

  if (extraNotes.classList.contains("hidden")) {
    toggleBtn.textContent = "Some notes";
  } else {
    toggleBtn.textContent = "Hide notes";
  }
});


const buttons = document.querySelectorAll(".day-btn");
const cards = document.querySelectorAll(".day-card");
const statusText = document.querySelector("#filter-status");

for (let button of buttons) {
  button.addEventListener("click", function () {
    let selectedDay = button.dataset.day;

    
    if (selectedDay === "all") {
      statusText.textContent = "Showing: all";
    } else {
      statusText.textContent = "Showing: " + selectedDay;
    }


    for (let b of buttons) {
      b.classList.remove("active");
    }
    button.classList.add("active");

  
    for (let card of cards) {
      let cardDay = card.dataset.day;

      if (selectedDay === "all" || cardDay === selectedDay) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    }
  });
}

const form = document.querySelector("#feedback-form");
const formStatus = document.querySelector("#form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  formStatus.textContent = "Thank you for your feedback!";
});