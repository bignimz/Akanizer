'use strict';

const akanize = document.getElementById("submit");

const getAkanName = function() {
  const maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "yaw", "kofi", "kwame"];
  const femaleAkan =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const gender = document.querySelector('input[type="radio"]:checked');
  const date = document.getElementById('date');
  const akan = document.getElementById('akan');
  const hooray = document.getElementById("hooray");

  const dateOfBirth = date.value;
  const birthDate = new Date(dateOfBirth);
  let day = birthDate.getDay();

 
  
  if(gender.value === "Male"){
    hooray.classList.remove('hidden');
    akan.innerHTML = maleAkan[day];
  }
 

 if(gender.value === "Female"){
   hooray.classList.remove('hidden');
   akan.innerHTML = femaleAkan[day];
 }


  // gender.value === "Male" ? akan.innerHTML = maleAkan[day] : gender.value === "Female" ? akan.innerHTML = femaleAkan[day] : alert('Select gender');

  date.reset();  // Reset
   return true;

}


akanize.addEventListener("click", getAkanName);