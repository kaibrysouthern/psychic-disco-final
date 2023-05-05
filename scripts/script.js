$(function(){
  $('#console-box').append('<br/>console is ready...');
  
  $('button').click(function(){
    $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
; 
  });
  
});

function refreshPage() {
  document.getElementById("year").value = "";
  document.getElementById("carYear").textContent = "";

}

function submitForm() {
  const yearInput = document.getElementById("year");
  const year = yearInput.value;

  if (year < 1800 || year > 2025) {
    yearInput.setCustomValidity("Year must be between 1800 and 2025");
    yearInput.reportValidity();
  } else {
    document.getElementById("carYear").textContent = `The year of the car is ${year}.`;
    yearInput.setCustomValidity("");
  }
}

