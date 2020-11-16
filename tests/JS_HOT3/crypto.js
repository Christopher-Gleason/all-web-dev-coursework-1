let $ = function (id) 
{
    return document.getElementById(id);
}

    let crypto              = $("cryptoType").value;
    let wallet              = $("walletType").value;
    let fname 				= $("firstNameCust").value;
	let lname				= $("lastNameCust").value;
	let address				= $("addressCust").value;
	let zip				    = $("zipCust").value;
    let email				= $("emailCust").value;
    let emailConf           = $("emailCOnfCust")
    let phone			    = $("phoneCust").value;

    let fnameBIll 		    = $("firstNameBill").value;
	let lnameBill		    = $("lastNameBill").value;
	let addressBill			= $("addressBill").value;
	let zipBill			    = $("zipBill").value;
    let phoneBill			= $("phoneBill").value;
    let generalError;
    
    let custError           = "Please complete all Customer information.";
    let walletError         = "Please select Hardware or Web wallet.";
    let cryptoError         = "Please select either Bitcoin or Ethereum.";
    let billError           = "Please complete all Billing information.";
    let mainError           = "Please fix the indicated problems and then resubmit your order.";

function purchaseCrypto() {
    if(crypto === "") {
        document.getElementsByClassName(cryptoError) = cryptoError;
        generalError = true;
    } else {}

    if(wallet === "") {
        document.getElementsByClassName(walletError) = walletError;
        generalError = true;
    } else {}

    if(fname ==="" || lname === "" || address === "" || zip === "" || email === "" || email !== emailConf || phone === "") {
        document.getElementsByClassName(custError) = custError;
        generalError = true;
    } else {}
    if (document.getElementsByName(sameBill).checked = true) {
        fnameBill   = fname;
        lnameBill   = lname;
        addressBill = address;
        zipBill     = zip;
        phoneBill   = phone;
    } else {}
    if(fname ==="" || lname === "" || address === "" || zip === "" || email === "" || email !== emailConf || phone === "") {
        document.getElementsByClassName(billError) = billError;
        generalError = true;
    } else {}
    if (generalError == true) {
        document.getElementsByClassName(allError) = mainError
    }
}

window.onload = function() {
    $("submit").onclick		=	purchaseCrypto;
}
