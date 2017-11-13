$(document).on("pagecreate","#pageone",function(){
    
  $('#submitButton').on("click", function(){
    submitText();
  });            
});         


function submitText() {
    
     var trueorfalse = random();
       
	$('#textinput').text(trueorfalse);  //javascript function
    
    if (trueorfalse)
        {
            navigator.notification.beep(1);
            //alert("true");
        }
    else
        {
            navigator.notification.beep(2);
            //alert("false");
        }
    
}
    

function random() {
	return !Math.round(Math.random()); //generates random true or false  !converts 1 and 0 to true or false
}




