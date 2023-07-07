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
    .replace(/\s\s+/g, " ") // replaces all tabs, newlines etc with " " (single space)
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");

// function to store countdown data
const storeInputtedCountdownData = () => {
  const inputtedCountdownObject = {
    date: competitionDateInputElement.value,
    name: competitionNameInputElement.value,
  };
  localStorage.setItem(
    "storedCountdownData",
    JSON.stringify(inputtedCountdownObject)
  );
};

// function to find stored countdown data, if the date of countdown data is not null
const getStoredCountdownData = () => {
  const retrievedData = localStorage.getItem("storedCountdownData");

  if (retrievedData) {
    const storedCountdownObject = JSON.parse(retrievedData);

    if (storedCountdownObject.date) {
      console.log("Previous data found: ", storedCountdownObject);
      return storedCountdownObject;
    }
  }
};

// function to countdown repeatedly
const startCountdown = (countdownData) => {
  const competitionDateObject = new Date(countdownData.date);

  // clears previous countdown
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // function to calculate and update time until competition
  const findAndUpdateTimeUntilCompetition = () => {
    let currentTimeLooped = new Date().getTime();

    // sets time as midnight of date
    competitionDateObject.setHours(0, 0, 0, 0);
    let timeUntilCompetition = competitionDateObject - currentTimeLooped;

    errorMessage.textContent = "";

    competitionNameDisplay.textContent = titleCase(countdownData.name);

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

  countdownInterval = setInterval(findAndUpdateTimeUntilCompetition, 1000);
};

const buttonEventHandler = () => {
  const inputtedCountdownObject = {
    date: competitionDateInputElement.value,
    name: competitionNameInputElement.value,
  };

  let now = new Date().getTime();
  const inputtedDateObject = new Date(inputtedCountdownObject.date);
  const inputtedYear = inputtedDateObject.getFullYear();

  // check for invalid competition date values
  if (inputtedDateObject < now || inputtedYear.toString().length > 4) {
    errorMessage.textContent = "Please select a valid date in the future";
    return;
  }

  localStorage.clear();
  startCountdown(inputtedCountdownObject);
  competitionDateInputElement.value = inputtedCountdownObject.date;
  competitionNameInputElement.value = inputtedCountdownObject.name;
  storeInputtedCountdownData();
};

// run script
const storedCountdownObject = getStoredCountdownData();

if (storedCountdownObject) {
  startCountdown(storedCountdownObject);
  competitionDateInputElement.value = storedCountdownObject.date;
  competitionNameInputElement.value = storedCountdownObject.name;
}

startCountdownButton.addEventListener("click", buttonEventHandler);
