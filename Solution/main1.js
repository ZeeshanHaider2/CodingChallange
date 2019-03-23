const date = () => {
  let myDay = new Date();
  let date = myDay.getDate();
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][myDay.getMonth()];

  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ][myDay.getDay()];

  let nth = d => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  let display =
    "Today is " +
    weekday +
    " " +
    date +
    nth(date) +
    " " +
    month +
    " " +
    myDay.getFullYear();
  document.getElementById("date").innerHTML = display;
};
date();

const myTime = () => {
  let currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }
  let y = hours + "." + minutes + " " + suffix;
  document.getElementById("time").innerHTML = y;
};

myTime();
