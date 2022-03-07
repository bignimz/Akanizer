'use strict';


const maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "yaw", "kofi", "kwame"];
const femaleAkan =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const date = document.getElementById("date").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;
const akanize = document.getElementById("submit");
const gender = document.getElementById("gender");
const results = document.getElementById("results");



btn.addEventListener("click", function () {
  const MM = month.value;
  const DD = date.value;
  if (DD < 1 || DD > 31) {
    alert("Enter Date between 1 and 31");
    return;
  }
  if (MM <= 0 || MM > 12) {
    alert("Enter Month between 1 and 12");
    return;
  }
  
  const dateOfBirth = date + "/" + month + "/" + year;
  birthDate = new Date(dateOfBirth);
  let day = birthDate.getDay();



  if (gender.value == "female") {
      switch (day) {
        case 0:
        //   name.textContent = femaleAkan[0];
        alert(femaleAkan[0]);
          break;
        case 1:
        //   name.textContent = femaleAkan[1];
        alert(femaleAkan[1]);
          break;
        case 2:
        //   name.textContent = femaleAkan[2];
        alert(femaleAkan[2]);
          break;
        case 3:
        //   name.textContent = femaleAkan[3];
        alert(femaleAkan[3]);
          break;
        case 4:
        //   name.textContent = femaleAkan[4];
        alert(femaleAkan[4]);

          break;
        case 5:
        //   name.textContent = femaleAkan[5];
        alert(femaleAkan[5]);
          break;
        case 6:
        //   name.textContent = femaleAkan[6];
        alert(femaleAkan[6]);
          break;
        default:
        //   name.textContent = "out of range";
        alert("you are out of range");
      }
    } else {
      switch (day) {
        case 0:
          alert(maleAkan[0]);
          break;
        case 1:
          alert(maleAkan[1]);
          break;
        case 2:
          alert(maleAkan[2]);
          break;
        case 3:
          alert(maleAkan[3]);
          break;
        case 4:
          alert(maleAkan[4]);
          break;
        case 5:
          alert(maleAkan[5]);
          break;
        case 6:
          alert(maleAkan[6]);
          break;
        default:
          name.textContent = "out of range";
      }
    }
  });

































// const akanize = document.getElementById('submit');

// // Function to find what the Akan name is

// const findAkan = function(){

//   // Declare user input variables
//   const date = document.getElementById('date').value;
//   const month = document.getElementById('month').value;
//   const year = document.getElementById('year').value;
//   let gender = document.querySelector('input[name = gender]:checked').value;
//   const results = document.getElementById('results');

//   // Create variables to hold arrays of female names and male names
//   const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//   const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//   // Create variable to hold array of days of the week
//   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   // Function that checks whether the date entered is valid
//   const dateOfBirth = function(){
//     date <= 0 || date > 31 ? alert('Enter Date between 1 and 31') : date;
//   }

//   // Function that checks whether the month entered is valid
//   const monthOfBirth = function(){
//     month <= 0 || month > 12 ? alert('Enter month between 1 and 12') : month;
//   }

//   results.classList.remove('hidden');


// }

// // Add an Event listener to the submit button
// akanize.addEventListener('click', findAkan);

  























