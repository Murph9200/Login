var attempt = 3; // Variable to count number of attempts.
function validate(){
    alert("asdf");
var username1 = document.getElementById("username").value;
var password1 = document.getElementById("password").value;
var badgeid1 = document.getElementById("badgeid").value;


//Controls minium and maximum char length
    if (username1.length > 20 || username1.length <= 2) {

        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
//Checks badge creds
    } else if (badgeid1 > 999 || badgeid1 < 100) {

        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";

    } else {

        alert("Access Granted, Welcome " + username + "!");

        location.replace("indexW4.html");

    }
}
