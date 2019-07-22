/* Javascript for Lull Spa and Retreat

	Author: Kat
	Date: 7-12-19
	filename: offer.js
	*/
	
"use strict";



document.getElementById("button").addEventListener("click", specialOffer);		
	
function specialOffer() {
	var bookIt = window.prompt("Are you interested in saving money? (YES or NO)").toUpperCase();
		
	switch(bookIt) {
		case "YES": 
			window.alert("Book your stay today and get 20% off!");
		break;
		
		case "NO":
			window.alert("Booking your stay today will save you 20%! Don't miss out!");
		break;
		
		case "":
			window.alert("Don't you want to know?");
		break;
		
		default:
			window.alert("Please enter either YES or No");
	}
}
	
	
	
	
	
	
	