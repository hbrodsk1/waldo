var mouseX, mouseY;

$(document).ready(function() {
  initializeClickHandler();
})


function initializeClickHandler() {
	$('#puzzle-pic').click(function(e) {
		var box = $('#puzzle-pic')[0].getBoundingClientRect();
		mouseX = e.pageX - box.left;
		mouseY = e.pageY - box.top;
		console.log(mouseX);
		console.log(mouseY);
		if($('#targetingBox').is(":visible"))
			$('#targetingBox').hide();
		else
			displayTargetingBox(mouseX, mouseY);
	})
}

function displayTargetingBox(x, y) {
	$('#targetingBox').show();
	$('#targetingBox').css({top: y - $('#targetingBox').height(), left:x});
}

function checkAnswer(username) {
	$.ajax({
		url:'/static_pages/check',
		type: "GET",
		data: {username: username, x: mouseX, y: mouseY},
		success: function(json){
			handleAnswer(json);
			$('#targetingBox').hide();
		},
		error: function( xhr, status, errorThrown ) {
          alert( "Error, see log" );
          console.log( "Error: " + errorThrown );
          console.log( "Status: " + status );
          console.dir( xhr );
      	},
	})
}

function handleAnswer(data){
	if(data) {
		alert("Good Job You Found Waldo!");
	}
	else {
		alert("Try Again!");
	}
}