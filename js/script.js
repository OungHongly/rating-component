"use strict";

const rateList = document.querySelectorAll(".rate-num");
const btnSubmit = document.querySelector(".btnSubmit");
const rateCard = document.getElementById("rating-card");
const thankCard = document.querySelector(".thank-card");
const rateMessage = document.querySelector(".rate-message");
console.log(rateList);

let rating = 0;
let selected = false;

// set selected rate to active
for (let i = 0; i < rateList.length; i++) {
  rateList[i].addEventListener("click", function () {
    rateList[i].classList.add("active");
    //console.log(rateList[i]);
    //console.log(rateList[i].textContent);
    rating = Number(rateList[i].textContent);

    //remove active other rate
    for (let j = 0; j < rateList.length; j++) {
      const isActive = rateList[j].classList.contains("active");
      if (rateList[j] !== rateList[i] && isActive) {
        rateList[j].classList.remove("active");
      }
    }
    selected = true;
  });
}

// submit button event hadler
btnSubmit.addEventListener("click", function () {
  if (selected) {
    rateCard.classList.add("hidden");
    thankCard.classList.remove("hidden");
    rateMessage.textContent = `You selected ${rating} out of 5`;
  } else {
    console.log("please select your rating");
  }
});
