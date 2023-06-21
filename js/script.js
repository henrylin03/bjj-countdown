const addLeadingZeroes = (value) => {
  if (value < 10) {
    return `0${value}`;
  }
  return value;
};

const findTimeUntilCompetition = () => {
  let timeObject = {};
  const now = new Date().getTime();

  const competitionDate = new Date(
    document.getElementById("competition-date").value
  );
  const timeUntilCompetition = competitionDate - now;

  timeObject.days = Math.floor(timeUntilCompetition / (1000 * 60 * 60 * 24));
  timeObject.hours = Math.floor(
    (timeUntilCompetition % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  timeObject.minutes = Math.floor(
    (timeUntilCompetition % (1000 * 60 * 60)) / (1000 * 60)
  );
  timeObject.seconds = Math.floor((timeUntilCompetition % (1000 * 60)) / 1000);

  return timeObject;
};

const startCountdown = (event) => {
  event.preventDefault(); // prevents form submission

  let timeUntilCompetition = findTimeUntilCompetition();

  for (let timeUnit in timeUntilCompetition) {
    document.getElementById(String(timeUnit)).innerHTML = addLeadingZeroes(
      timeUntilCompetition[timeUnit]
    );
  }
};

const ensureCompetitionInFuture = () => {
  const dateToday = new Date().toISOString().split("T")[0];
  const competitionDateInput = document.getElementById("competition-date");
  competitionDateInput.setAttribute("min", dateToday);
};

ensureCompetitionInFuture();
document
  .getElementById("next-competition-form")
  .addEventListener("submit", startCountdown);
