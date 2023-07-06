const timeUnitElements = document.getElementsByClassName("time-unit");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const competitionDateInputElement = document.getElementById("competition-date");
const competitionNameInputElement = document.getElementById(
  "competition-name-input"
);
const competitionNameDisplay = document.getElementById(
  "competition-name-display"
);
const startCountdownButton = document.getElementById("start-countdown-button");
const errorMessage = document.getElementById("error-message");

let countdownInterval;
let countdownObject = {};

// function to add leading zeroes to single-digit numbers
const addLeadingZeroes = (value) => (value < 10 ? `0${value}` : value);

// function to title case the competition name
const titleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");

// function to store countdown data
const storeCountdownData = () => {
  countdownDataForStoring = {
    date: competitionDateInputElement.value,
    name: competitionNameInputElement.value,
  };

  console.log(countdownDataForStoring);

  localStorage.setItem("storedCountdownData", countdownDataForStoring);
  console.log(localStorage);
};

// function to find stored countdown data
const getStoredCountdownData = () => {
  const storedCountdownObject = localStorage.getItem("storedCountdownData");
  console.log(storedCountdownObject);

  if (storedCountdownObject.date) {
    console.log(`Previous data found: ${storedCountdownObject}`);
    return storedCountdownObject;
  }

  console.log(`Previous data not found`);
};

startCountdownButton.addEventListener("click", storeCountdownData);
getStoredCountdownData();
