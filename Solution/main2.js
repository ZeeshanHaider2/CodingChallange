//CODE FOR CHANGING TITLE

let ourHeadLine = document.getElementById("alpha");

let newHeading = document.getElementById("myText");

let changeHeading = () => {
  ourHeadLine.innerHTML = newHeading.value;
  if (newHeading.value === "" || newHeading.value === "Change title...") {
    //if someone eneters empty string
    alert("type something");
  }
};
const myButton = document.getElementById("my-button");
myButton.addEventListener("click", changeHeading);
//______________________________________________________________________________//

//CODE FOR DROPDOWN AND SELECTING BACKGROND COLORS
document.querySelector("#menu").addEventListener("change", function() {
  document.body.style.backgroundColor = this.value;
});
