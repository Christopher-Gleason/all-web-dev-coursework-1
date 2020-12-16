$(document).ready(function() {

	$("#reservation_form").submit(function(e) {
		e.preventDefault();
		let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		let isValid = true;

		// Input Values
		let arriveDate = $("arrival_date");
		let stayTime   = $("nights");
		let name 	   = $("name");
		let email 	   = $("email");
		let phone 	   = $("phone");

		if (email == "") {
			$("email span").text("This field is required.");
			isValid = false;
		}
		else {
			$("email span").text("");
		}
	//	if (isValid = false) {
	//
	//	}
	//	else {}
	});
}); // end ready