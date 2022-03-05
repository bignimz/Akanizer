'use strict';

// Declare user input variable

const date = document.getElementById('date').value;
const month = document.getElementById('month').value;
const year = document.getElementById('year').value;
const genders = document.getElementsByName('gender');
const akanize = document.getElementById('submit');



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


// Add an Event listener to the submit button
akanize.addEventListener('click', function() {
  const date = document.getElementById('date').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;
  const genders = [document.getElementsByName('gender').some(c => c.checked)];


  

  alert(genders);
  // alert(`Hello you were born on ${date} / ${month} / ${year}, and your gender is ${genderCheck}`);
});




akanize.addEventListener('click', function(){
  // let radio_check_val = "";
  // for (let i = 0; i < document.getElementsByName('gender').length; i++) {
  //     if (document.getElementsByName('gender')[i].checked) {
  //         console.log("this radio button was clicked: " + document.getElementsByName('gender')[i].value);
  //         radio_check_val = document.getElementsByName('gender')[i].value;        
  //     }        
  // }     

  // const gender = genders.forEach(function(gender){
  //   if(genders.checked) return genders.value;
  // });

  const findgender = function(){
    for (let gender of genders){
      if (gender.checked){
        const gender =  gender.value;
      }
      return gender;
    }
  }
  

  alert(gender);

})            























function getAkanName () {
      let yearOfBirth = document.getElementById("year-input").value;
      let monthOfBirth = Number(document.getElementById("month-input").value);
      let dayOfBirth = Number(document.getElementById("day-input").value);
      let genders = document.getElementsByName("gender");
    
      // function to get gender
      function getGender () {
        for (let gender of genders){
          if (gender.checked){
            return gender.value;
          }
        }
      }
    
      let myGenderValue = getGender();
      console.log(myGenderValue);
    
      // validation functions
      function monthValidator () {
        if (monthOfBirth < 1 || monthOfBirth > 12) {
          return false;
        } else {
          return true;
        }
      }
    
      function dayValidator () {
        if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
          if (dayOfBirth > 28 || dayOfBirth < 1) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth > 29) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth < 1) {
            return false;
          } else {
            return true;
          }
        } else if (dayOfBirth < 1 || dayOfBirth > 31){
          return false;
        } else {
          return true;
        }
      }
    
      //validation variables
      let monthValid = monthValidator();
      let dayValid = dayValidator();
    
      //formula to determine day of birth (Sunday = 1, Monday = 2)etc..
      let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
              ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);
    
      //creating arrays of Akan names for males & females and days of the week
      let daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ];
    
      let maleAkanNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
      ];
    
      let femaleAkanNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
      ];
    
      //generating and index value to select items on arrays
      let index;
      // fix formula bug
      if (dayOfWeekNumber == 0){
        index = 6;
      } else {
        index = dayOfWeekNumber - 1;
      }
    
      console.log(index);
    
      if (myGenderValue == "male" && monthValid && dayValid) {
        document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        document.getElementById('result').style.fontSize = "18px";
        document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index];
        return false;
      } else if (myGenderValue == "female" && monthValid && dayValid) {
        document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        document.getElementById('result').style.fontSize = "18px";
        document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index];
        return false;
      } else {
        alert("You entered an invalid day or month, please try again");
      }
    }