const addLeadingZeroes = (value) => (value < 10 ? `0${value}` : value);

const competitionDateInFuture = () => {
  const competitionDateInput = document.getElementById("competition-date");
  const competitionDate = new Date(competitionDateInput.value);
  const now = new Date();

  return competitionDate > now;
};

const enableSubmission = () => {
  const submitButton = document.getElementById("submit-button");
  const errorMessage = document.getElementById("error-message");

  if (!competitionDateInFuture()) {
    errorMessage.innerHTML = "Please select a date in the future";
    errorMessage.style.visibility = "visible";
    return;
  }
  submitButton.removeAttribute("disabled");
  errorMessage.style.visibility = "hidden";
};

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

const startCountdown = (event) => {
  event.preventDefault(); //prevents form submission
  setInterval(setTimeUntilCompetition, 1000);
};

//run script
const competitionDateInput = document.getElementById("competition-date");
competitionDateInput.addEventListener("blur", enableSubmission); //event is when user clicks off input

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", startCountdown);
