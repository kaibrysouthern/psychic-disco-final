$(function(){
    $('#console-box').append('<br/>console is ready...');
    
    $('button').click(function(){
      $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
  ; 
    });
    
  });
  $("#formSubmit").on("click", (e) => {
    e.preventDefault();
    console.log("clicked the button");
    $("#result").html("<b>The button is pressed and form is submitted.</b>");
    
// Submit the form
    $("form").submit();

  });
  //Refresh
function refreshPage() {
    $("#row").html("");
    var getValue = document.getElementById("loadData");
    if (getValue.value != "") {
      getValue.value = "";
    }
  }