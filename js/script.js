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

// function to store countdown data
const storeCountdownData = (countdownDataObj) => {
  localStorage.clear();
  localStorage.setItem("storedCountdownData", JSON.stringify(countdownDataObj));
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
  // function to calculate and update time until competition
  const findAndUpdateTimeUntilCompetition = () => {
    const now = new Date().getTime();
    const competitionDateObject = new Date(countdownData.date);
    const yearInput = competitionDateObject.getFullYear();

    // sets time as midnight of date
    competitionDateObject.setHours(0, 0, 0, 0);
    let timeUntilCompetition = competitionDateObject - now;

    // check for invalid competition date values
    if (timeUntilCompetition < 0 || yearInput.toString().length > 4) {
      errorMessage.textContent = "Please select a valid date in the future";
      return;
    }

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

// run script
const storedCountdownObject = getStoredCountdownData();

if (storedCountdownObject) {
  startCountdown(storedCountdownObject);
  competitionDateInputElement.value = storedCountdownObject.date;
  competitionNameInputElement.value = storedCountdownObject.name;
} else {
  startCountdownButton.addEventListener("click", () => {
    const inputtedCountdownObject = {
      date: competitionDateInputElement.value,
      name: competitionNameInputElement.value,
    };

    startCountdown(inputtedCountdownObject);

    // store in local storage, replacing previously stored data
    storeCountdownData(inputtedCountdownObject);

    competitionDateInputElement.value = inputtedCountdownObject.date;
    competitionNameInputElement.value = inputtedCountdownObject.name;
  });
}
