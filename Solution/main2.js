//CODE FOR CHANGING TITLE

let ourHeadLine = document.getElementById("alpha");

let newHeading = document.getElementById("myText");

let changeHeading = () => (ourHeadLine.innerHTML = newHeading.value);
const myButton = document.getElementById("my-button");
myButton.addEventListener("click", changeHeading);
//______________________________________________________________________________//

//CODE FOR DROPDOWN AND SELECTING BACKGROND COLORS
document.getElementById("menu").addEventListener("click", openMenu);

function openMenu() {
  document.getElementById("dropdown").classList.toggle("active");
  let listItems = document
    .getElementById("dropdown")
    .getElementsByTagName("li");
  for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", changeColor);
    function changeColor() {
      i = i < colors.length ? ++i : 0;
      document.querySelector("body").style.background = colors[i];
    }
  }
}

let colors = [
  "#0040ff;",
  "#ff9999",
  "#bf00ff",
  "#00bfff",
  "#936c6c",
  "#ffff00",
  "#80ff00",
  "#00ffbf"
];
