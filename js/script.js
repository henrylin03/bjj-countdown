// get elements from DOM
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

//function to title case the competition name
const titleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");

// event handler to update the #countdown-timer section
const startCountdown = () => {
  const compNameValue = competitionNameInputElement.value;
  const compDateValue = competitionDateInputElement.value;

  // if countdown already occurring, clear (otherwise, the countdown timer will flash)
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // function to calculate and update time until competition
  const findAndUpdateTimeUntilCompetition = () => {
    const now = new Date().getTime();
    const competitionDate = new Date(compDateValue).getTime();
    const timeUntilCompetition = competitionDate - now;

    if (timeUntilCompetition < 0) {
      errorMessage.textContent = "Please select a date in the future";
      clearInterval(countdownInterval);

      // clear #countdown-timer section
      competitionNameDisplay.textContent = "";
      for (const timeUnit of timeUnitElements) {
        timeUnit.textContent = "00";
      }

      return;
    }
    errorMessage.textContent = "";

    competitionNameDisplay.textContent = compNameValue;

    const days = Math.floor(timeUntilCompetition / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeUntilCompetition % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeUntilCompetition % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeUntilCompetition % (1000 * 60)) / 1000);

    // display time
    daysElement.textContent = addLeadingZeroes(days);
    hoursElement.textContent = addLeadingZeroes(hours);
    minutesElement.textContent = addLeadingZeroes(minutes);
    secondsElement.textContent = addLeadingZeroes(seconds);
  };

  // repeatedly call function to update countdown every second (1000 ms)
  countdownInterval = setInterval(findAndUpdateTimeUntilCompetition, 1000);
};

// add event listener when submit button clicks
startCountdownButton.addEventListener("click", startCountdown);
