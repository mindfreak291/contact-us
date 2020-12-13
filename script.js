function submitFunction() {
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    if (ValidateText(name) && ValidateEmail(email)) {
        if (typeof Storage !== "undefined") {
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("message", message);
        } else {
            document.getElementById("result").innerHTML =
                "Sorry, your browser does not support web storage...";
        }
        window.location = "details.html";
        showText();
    }
}

function ValidateEmail(mail) {
    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            mail
        )
    ) {
        return true;
    }
    alert("You have entered an invalid email address!");
    return false;
}

function ValidateText(text) {
    if (text.length > 2) {
        return true;
    }
    alert("Please fill the details correctly!");
    return false;
}

jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 768) {
            $(".emailmain").removeClass("col");
        } else if (ww >= 401) {
            $(".emailmain").addClass("col");
        }
    };
    $(window).resize(function() {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});