
function validateEmail(email) {
    var regex = /^[a-zA-Z]+\w+([-+.']\w+)*@(northeastern.edu)/;

    return regex.test(email);
}
function validatePassword(password) {
    var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,}$)/;
   
    return regex.test(password);
}

function passvalues() {
    var userName = document.getElementById("userName").value;
    localStorage.setItem("textvalue", userName);
    return false;
}
$('#submitButton').click(function () {


    var emailMissing = '';
    var emailErrorMessage = '';
    var userNameMissing = '';
    var userNameErrorMessage = '';
    var passwordMissing = '';
    var passwordErrorMessage = '';


    if ($('#email').val() == "") {
        emailMissing = "Email Address cannot be null";

        $('#emailMissing').html(emailMissing);
    }
    if (validateEmail($("#email").val()) == false) {
        emailErrorMessage = "Email Address should start only with characters and end with northeastern.edu";
        $("#emailError").html(emailErrorMessage);
    }

    if (emailMissing != '') {
        $('#emailMissing').show();
        $('#emailError').hide();
    } else if (emailErrorMessage != '') {
        $('#emailMissing').hide();
        $('#emailError').show();
    } else {
        $('#emailError').hide();
        $('#emailMissing').hide();

    }

    let usernameValue = $('#userName').val();
    if ($('#userName').val() == "") {
        userNameMissing = "User Name cannot be null!";
        $('#userNameMissing').html(userNameMissing);
    }
    if (usernameValue.length < 3 || usernameValue.length > 10) {
        userNameErrorMessage = "Username length should be between 3-10 characters only";
        $("#userNameError").html(userNameErrorMessage);
    }


    if (userNameMissing != '') {
        $('#userNameMissing').show();
        $('#userNameError').hide();
    } else if (userNameErrorMessage != '') {
        $('#userNameMissing').hide();
        $('#userNameError').show();
    } else {
        $('#userNameMissing').hide();
        $('#userNameError').hide();
    }


    if ($('#password').val() == "") {
        passwordMissing = "Password cannot be null!";
        $('#passwordMissing').html(passwordMissing);
    }
    if (validatePassword($("#password").val()) == false) {
        passwordErrorMessage = "Password should contain atleast one special character, a number, a lowercase letter and an uppercase letter! ";
        $("#passwordError").html(passwordErrorMessage);
    }


    if (passwordMissing != '') {
        $('#passwordMissing').show();
        $('#passwordError').hide();
    } else if (passwordErrorMessage != '') {
        $('#passwordMissing').hide();
        $('#passwordError').show();
    } else {
        $('#passwordMissing').hide();
        $('#passwordError').hide();
    }

    if (emailErrorMessage == "" && userNameErrorMessage == '' && passwordErrorMessage == '') {
    
        window.location.href = "calc.html";
    }




});

