const addLeadingZeroes = (value) => (value < 10 ? `0${value}` : value);

const titleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");

const getCompetitionDate = () =>
  new Date(document.getElementById("competition-date").value);

const getDateToday = () => new Date().toISOString().slice(0, 10);

//prevents submission of form if value of competition date invalid
const checkValuesAndEnableSubmission = () => {
  const submitButton = document.getElementById("submit-button");
  const errorMessage = document.getElementById("error-message");
  const competitionDate = getCompetitionDate();
  const dateToday = getDateToday();

  submitButton.disabled = true;
  if (competitionDate <= dateToday) {
    errorMessage.innerHTML = "Please select a date in the future";
    errorMessage.style.visibility = "visible";
    return;
  }
  submitButton.disabled = false;
  errorMessage.style.visibility = "hidden";
};

//calculates time until competition from now
const setTimeUntilCompetition = () => {
  const competitionDate = getCompetitionDate();
  let now = new Date().getTime();
  const timeUntilCompetition = competitionDate - now;

  //calculate each time unit from "now" until competition date
  days = Math.floor(timeUntilCompetition / (1000 * 60 * 60 * 24));
  hours = Math.floor(
    (timeUntilCompetition % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes = Math.floor((timeUntilCompetition % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeUntilCompetition % (1000 * 60)) / 1000);

  //update countdown elements
  document.getElementById("days").innerHTML = addLeadingZeroes(days);
  document.getElementById("hours").innerHTML = addLeadingZeroes(hours);
  document.getElementById("minutes").innerHTML = addLeadingZeroes(minutes);
  document.getElementById("seconds").innerHTML = addLeadingZeroes(seconds);
};

const showCompetitionName = () => {
  const competitionNameInput = document.getElementById(
    "competition-name-input"
  );
  const competitionNameInputted = competitionNameInput.value;
  const competitionNameDisplay = document.getElementById("competition-name");

  if (competitionNameInputted) {
    competitionNameDisplay.innerHTML = titleCase(competitionNameInputted);
  }
};

const setCountdown = (event) => {
  event.preventDefault(); //prevents form submission
  countdownInterval = setInterval(setTimeUntilCompetition, 1000);
  showCompetitionName();
};

//run script
let countdownInterval = null;
const competitionDateInput = document.getElementById("competition-date");
competitionDateInput.addEventListener("blur", checkValuesAndEnableSubmission); //when user clicks off input

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", setCountdown);

competitionDateInput.addEventListener("input", checkValuesAndEnableSubmission);
