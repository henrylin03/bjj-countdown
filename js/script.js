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

// function to add leading zeroes to single-digit numbers
const addLeadingZeroes = (value) => (value < 10 ? `0${value}` : value);

// function to title case the competition name
const titleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");

// function to find stored countdown data
const getStoredCountdownData = () => {
  const storedCountdownData = localStorage.getItem("countdownData");
  return JSON.parse(storedCountdownData);
};

// let storedCountdownObject = getStoredCountdownData();
// if (storedCountdownObject.competitionDate) {
//   countdownObject = storedCountdownObject;
// } else {
//   countdownObject
// }

// on user click, then set countdown object
// once countdown object set, then start countdown
