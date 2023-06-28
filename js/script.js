const addLeadingZeroes = (value) => (value < 10 ? `0${value}` : value);

//helper function to check if the competition date entered by user is in the future
const competitionDateInFuture = () => {
  const competitionDateInput = document.getElementById("competition-date");
  const competitionDate = new Date(competitionDateInput.value);
  const now = new Date();

  return competitionDate > now;
};

//prevents submission of form if value of competition date invalid
const checkValuesAndEnableSubmission = () => {
  const submitButton = document.getElementById("submit-button");
  const errorMessage = document.getElementById("error-message");

  submitButton.disabled = true;
  if (!competitionDateInFuture()) {
    errorMessage.innerHTML = "Please select a date in the future";
    errorMessage.style.visibility = "visible";
    return;
  }
  submitButton.disabled = false;
  errorMessage.style.visibility = "hidden";
};

//calculates time until competition from now
const setTimeUntilCompetition = () => {
  let now = new Date().getTime();
  const competitionDate = new Date(
    document.getElementById("competition-date").value
  );
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

const titleCase = (str) => {
  str = str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(word[0], word[0].toUpperCase()));

  return str.join(" ");
};

const showCompetitionName = () => {
  const competitionNameInput = document.getElementById(
    "competition-name-input"
  );
  const competitionNameInputted = competitionNameInput.value;
  const competitionNameDisplay = document.getElementById("competition-name");

  if (!competitionNameInputted) {
    return;
  }

  competitionNameDisplay.innerHTML = titleCase(competitionNameInputted);
};

const setCountdown = (event) => {
  event.preventDefault(); //prevents form submission
  setInterval(setTimeUntilCompetition, 1000);
  showCompetitionName();
};

//run script
const competitionDateInput = document.getElementById("competition-date");
competitionDateInput.addEventListener("blur", checkValuesAndEnableSubmission); //when user clicks off input

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", setCountdown);

competitionDateInput.addEventListener("input", checkValuesAndEnableSubmission);
