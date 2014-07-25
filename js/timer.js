
	$(document).ready(function() {
		var desiredTime = 10;
		var timer = null;
		$(function() { //starts and resets timer
			var currentTime = desiredTime;

			function tick() {
			    $("h1").text(currentTime);
			    --currentTime;
			    if(currentTime>=0){
			    	start();        // restart the clock
			    }
			}

			function start() {  // use a one-off clock
			    	timer = setTimeout(tick, 1000);
			}
			function startCheck(){
//				if(currentTime<desiredTime){ // check if we're at the start or in the middle of something
					clearTimeout(timer); // stop the previous timer
					currentTime=desiredTime; // reset the clock
					start(); // start clock
//				} else {
//					start(); // start clock
//				}
			}
		    $("#countTime").on('click', startCheck); // if the time is clicked, reset and start the clock.

		});
		$(function(){ //set the desired time
			$("#set").on("click", function(){
			    desiredTime = +$( "#time" ).val();
			    console.log(desiredTime);
				$( "#setTime" ).hide();
				$( "#countTime").show();
			});
		});
		$(function(){ //go back to time select
				$("#change").on("click", function(){
				clearTimeout(timer); // stop the previous timer
				$( "#countTime").hide();
				$( "#setTime" ).show();
			});
		});
	});
