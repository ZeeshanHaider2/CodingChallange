document.getElementById("form").addEventListener("submit", e => {
  let id = document.getElementById("id").value;
  let day = document.getElementById("day").value;
  let time = document.getElementById("time").value;
  let description = document.getElementById("description").value;

  createDays(id, day, time, description);
  e.preventDefault();
});

let myDays = [];
let createDays = (id, day, time, description) => {
  let myDay = {
    id: id,
    day: day,
    time: time,
    description: description
  };
  myDays.push(myDay);
  //console.log(myDays);
  readDays();
  document.getElementById("form").reset();
};

let readDays = () => {
  let daysHtml = document.getElementById("dayy");
  daysHtml.innerHTML = "";
  myDays.forEach(myDay => {
    daysHtml.innerHTML += `<div class = "gamma"><p>Id: ${myDay.id}</p><p>Day: ${
      myDay.day
    }</p><p>Time: ${myDay.time}</p><p>Description: ${
      myDay.description
    }</p><button class="remove" onClick="deleteDay('${myDay}')">Delete</button></div>`;
  });
};

let deleteDay = myDay => {
  myDays.splice(myDay, 1);
  readDays();
};
