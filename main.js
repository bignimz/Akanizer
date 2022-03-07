'use strict';

const getAkanName = function() {
  const maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "yaw", "kofi", "kwame"];
  const femaleAkan =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const gender = document.querySelector('input[type="radio"]:checked');
  const date = document.getElementById('date');
  const akan = document.getElementsByClassName('akan-name');
  const results = document.getElementById("results");

  const dateOfBirth = date.value;
  const birthDate = new Date(dateOfBirth);
  let day = birthDate.getDay();

  if(day === 1){
    console.log("Monday");
  }

  console.log(day);
  console.log(gender.value);

  if(gender === "Male") {
    document.getElementById('akan-name').innerHTML = maleAkan[day];
  // }
  // gender.value === "Male" ? akan.innerHTML = maleAkan[day] : alert('Select gender');
  // gender.value === "Female" ? akan.innerHTML = femaleAkan[day] : alert('Select gender');
  }

}
const akanize = document.getElementById("submit");

akanize.addEventListener("click", getAkanName);