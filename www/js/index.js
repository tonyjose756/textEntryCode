$(document).on("pagecreate","#pageone",function(){
    
  $('#submitButton').on("click", function(){
    submitText();
  });            
});         


function submitText() {
    
     var fred = random();
    
    
	$('#textinput').text(fred);
}

function random() {
	return !Math.round(Math.random());
}

