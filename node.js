function calculateAge() {
    var inputDay = document.getElementById("day").value;
    var inputMonth = document.getElementById("month").value;
    var inputYear = document.getElementById("year").value;
  
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
  
    var ageYears = currentYear - inputYear;
    var ageMonths = currentMonth - inputMonth;
    var ageDays = currentDay - inputDay;
  
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
  
    if (ageDays < 0) {
      var daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      ageDays += daysInLastMonth;
      ageMonths--;
    }
  
    document.getElementById("ageYears").textContent = ageYears;
    document.getElementById("ageMonths").textContent = ageMonths;
    document.getElementById("ageDays").textContent = ageDays;
  }
  document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
  });