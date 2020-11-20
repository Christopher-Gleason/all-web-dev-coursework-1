"use strict";
var $ = function(id) { return document.getElementById(id); };

let convertTemp = function() {

    let fahr, cel;

    if ( $("to_celsius").checked ) {
        fahr = parseFloat( $("degrees_entered").value );
        if (isNaN(fahr)) {
            alert("Please enter a valid number for degrees.")
        }
        else {
            cel = (fahr - 32) * 5 / 9;
            $("degrees_computed").value = fahr.toFixed(0)
        }
    }
    else {
        cel = parseFloat( $("degrees_entered").value );
        if (isNaN(cel)) {
            alert("Please enter a valid number for degrees.")
        }
        else {
            fahr = cel * 9 / 5 +32;
            $("degrees_computed").value = fahr.toFixed(0)
        }
    }
};

let toCelsius = function() {
    $("degrees_label_1").firstChild.nodeValue = "Enter F degrees:";
    $("degrees_label_2").firstChild.nodeValue = "Degrees Celsius:";
    clearTextBoxes();
    $("degrees_entered").focus();
}
let toFahrenheit = function() {
    $("degrees_label_1").firstChild.nodeValue = "Enter C degrees:";
    $("degrees_label_2").firstChild.nodeValue = "Degrees Fahrenheit:";
    clearTextBoxes();
    $("degrees_entered").focus();
}
let clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};