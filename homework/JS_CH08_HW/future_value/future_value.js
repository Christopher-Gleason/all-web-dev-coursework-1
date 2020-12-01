let $ = function (id) {
    return document.getElementById(id);
};
let calculateClick = function () {
    let investment = parseFloat( $("investment").value );
    let annualRate = parseFloat( $("rate").value );
    let years = parseInt( $("years").value );
	
	if (isNaN(investment) || investment <= 0) {
		alert("Investment must be a valid number greater than zero.");
		//$("investment").next().text("Investment must be a valid number greater than zero.");
	} 
	else if(isNaN(annualRate) || annualRate <= 0) {
		alert("Annual rate must be a valid number greater than zero.");
		//$("rate").next().text("Annual rate must be a valid number greater than zero.");
	}
	else if(isNaN(years) || years <= 0) {
		alert("Years must be a valid number\nand greater than zero.");
		//$("years").next().text("Years must be a valid number\nand greater than zero.");
	}
	// if all entries are valid, calulate future value
	else {
		futureValue = investment;
		for ( i = 1; i <= years; i++ ) {
			futureValue += futureValue * annualRate / 100;
		}
		$("future_value").value = futureValue.toFixed();
	} 
};
window.onload = function () {
    $("calculate").onclick = calculateClick;
    $("investment").focus();
};