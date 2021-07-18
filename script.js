var submitButton = $('.submitButtonReal');
var addressInput = $('.addressInput');

$(document).ready(function() {
        $.ajax({
          url: "http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=fb8b1c5fa1170960572e326f544f881a",
          type: "GET",
          success: function(result) {
            if (this.readyState==4 && this.status==200) {
		console.log(result)
	}
          },
          error: function(error) {
            // if (this.readyState==4 && this.status==200) {
		console.log(error)
	// }
          }
        });
      });



submitButton.on('click', displayResults);

function displayResults() {
	var address = addressInput.val();
	console.log(address);

	
	

	document.getElementById("resultsContainer").style.visibility = "visible";
	document.getElementById("dominantBubble").style.visibility = "visible";
}

function is_numeric(str){
    return /^\d+$/.test(str);
}

