dailyTask2 = () => {
  let d = new Date(Date.now() + 8.64e7); // 8.67e7 is millisecons for one day that we will add to get next day's task

  //let b = d.getDay();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ][d.getDay()];

  //console.log(weekDays);

  const rawJSON = `[
      {   
          "id": 1,
          "day": "Monday",
          "time": "08:00",
          "description": "Laugh to Your Heart’s Content" 
      },
      {   
          "id": 2,
          "day": "Monday",
          "time": "11:00",
          "description": "Dance Like No One’s Watching" 
      },
      {   
          "id": 3,
          "day": "Monday",
          "time": "16:00",
          "description": "Make Dinner for homeless guy" 
      },
      {   
          "id": 4,
          "day": "Tuesday",
          "time": "07:00",
          "description": "Change Your Morning Routine" 
      },
      {   
          "id": 5,
          "day": "Tuesday",
          "time": "10:00",
          "description": "Go People Watching" 
      },
      {   
          "id": 6,
          "day": "Tuesday",
          "time": "18:00",
          "description": "Do Something Stupid" 
      },
      {   
          "id": 7,
          "day": "Wednesday",
          "time": "08:00",
          "description": "Sing in the Shower" 
      },
      {   
          "id": 8,
          "day": "Wednesday",
          "time": "13:00",
          "description": "Listen to Nature Sounds" 
      },
      {   
          "id": 9,
          "day": "Wednesday",
          "time": "15:00",
          "description": "Join a Club" 
      },
      {   
          "id": 10,
          "day": "Thursday",
          "time": "06:00",
          "description": "Strike a Pose" 
      },
      {   
          "id": 11,
          "day": "Thursday",
          "time": "09:00",
          "description": " Challenge Yourself" 
      },
      {   
          "id": 12,
          "day": "Thursday",
          "time": "20:00",
          "description": "Reconnect with an Old Friend" 
      },
      {   
          "id": 13,
          "day": "Friday",
          "time": "09:00",
          "description": "Learn a Joke" 
      },
      {   
          "id": 14,
          "day": "Friday",
          "time": "12:00",
          "description": "Become an Expert" 
      },
      {   
          "id": 15,
          "day": "Friday",
          "time": "19:00",
          "description": "Take a Class" 
      },
      {   
          "id": 16,
          "day": "Saturday",
          "time": "07:00",
          "description": "Change Your Look" 
      },
      {   
          "id": 17,
          "day": "Saturday",
          "time": "12:00",
          "description": "Excite Your Palate" 
      },
      {   
          "id": 18,
          "day": "Saturday",
          "time": "21:00",
          "description": "Begin a Diary" 
      },
      {   
          "id": 19,
          "day": "Sunday",
          "time": "10:00",
          "description": "Embrace Your Curiosity" 
      },
      {   
          "id": 20,
          "day": "Sunday",
          "time": "11:00",
          "description": "Pretend to Be a Tourist" 
      },
      {   
          "id": 21,
          "day": "Sunday",
          "time": "17:00",
          "description": "Drive Away with No Destination in Mind" 
      }
  ]
  `;

  //A common use of JSON is to exchange data to/from a web server.

  //When receiving data from a web server, the data is always a string.

  //Parse the data with JSON.parse(), and the data becomes a JavaScript object.

  //https://www.w3schools.com/js/js_json_parse.asp

  const json = JSON.parse(rawJSON);

  //console.log(json);

  let todaysTasks = json.filter(task => {
    return task.day === weekDays;
  });

  //console.log(todaysTasks);

  const ul = document.querySelector("#task-list2");

  ul.innerHTML = ""; //Otherwise it will add below the tasks

  //console.log(ul);

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  todaysTasks.forEach(task => {
    //In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.

    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

    const li = document.createElement("li");

    li.textContent = task.description + "  at  " + task.time;

    //console.log(li);

    //https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend

    ul.appendChild(li);
  });
};

const taskButton = document.getElementById("task-button");
taskButton.addEventListener("click", dailyTask2);
