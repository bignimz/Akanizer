'use strict';


const akanize = document.getElementById('submit');

// Function to find what the Akan name is

const findAkan = function(){

  // Declare user input variables
  const date = document.getElementById('date').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;
  let gender = document.querySelector('input[name = gender]:checked').value;

  // Create variables to hold arrays of female names and male names
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // Create variable to hold array of days of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Function that checks whether the date entered is valid
  const dateOfBirth = function(){
    date <= 0 || date > 31 ? alert('Enter Date between 1 and 31') : date;
  }

  // Function that checks whether the month entered is valid
  const monthOfBirth = function(){
    month <= 0 || month > 12 ? alert('Enter month between 1 and 12') : month;
  }

}

// Add an Event listener to the submit button
akanize.addEventListener('click', findAkan);

  






var akan = function(y, m, d, g) {
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var d = new Date(y, --m, d);
  if (g === "Female") {
      return d && femaleNames[d.getDay()];
  } else {
      return d && maleNames[d.getDay()];
  }
}

// User interface (or front-end) logic:
$(document).ready(function() {
  $("form#form").submit(function(event) {
      event.preventDefault();
      var y = parseInt($("#year").val());
      var m = parseInt($("#month").val());
      var d = parseInt($("#date").val());
      var g = $("input:radio[name=gender]:checked").val();
      var result = akan(y, m, d, g);
      alert("Your akan name is: " + result);
      //refresh page
      document.getElementById("form").reset();
  });
});


















