const ensureDateInFuture = () => {
  let dateToday = new Date().toISOString().slice(0, 10);
  let competitionDateInput = document.getElementById("competition-date");
  competitionDateInput.setAttribute("min", dateToday);
};

const addLeadingZeroes = (value) => (value < 10 ? `0${value}` : value);

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
ensureDateInFuture();

const competitionFormElem = document.getElementById("next-competition-form");
competitionFormElem.addEventListener("submit", startCountdown);
