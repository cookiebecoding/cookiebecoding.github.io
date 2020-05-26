(function($) {

	// Get the popupabout
	var popupabout = document.getElementById("myresume");

	// Get the button that opens the popupabout
	var btnheader = document.getElementById("header-popupabout");
	var btnfooter = document.getElementById("footer-popupabout");

	// Get the <span> element that closes the popupabout
	var closethepop = document.getElementsByClassName("closethepop")[0];

	// When the user clicks the button, open the popupabout
	btnheader.onclick = function() {
		popupabout.style.display = "block";
	}
	btnfooter.onclick = function() {
		popupabout.style.display = "block";
	}

	// When the user clicks on <span> (x), close the popupabout
	closethepop.onclick = function() {
		popupabout.style.display = "none";
	}

	// When the user clicks anywhere outside of the popupabout, close it
	window.onclick = function(event) {
		if (event.target == popupabout) {
			popupabout.style.display = "none";
		}
	}

})(jQuery);
