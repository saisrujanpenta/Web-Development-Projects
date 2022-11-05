function func() {
    console.log("######")
    document.getElementById("table").style.display = "block";
}

var form = document.getElementById("myForm");

form.addEventListener("submit", submitted);

var row = 1;
var validName = false;
var validLName = false;
var validEmail = false;
var validPhone = false;
var validZip = false;

// regex checks variables
var regExName = /^[a-zA-Z]+$/;
var regExEmail = /\w+([-+.']\w+)*@(northeastern.edu)/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZip = /^\d{5}$/;







var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var LastName = document.getElementById("lastName");
LastName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var city = document.getElementById("city");
city.addEventListener("input", validate);

var state = document.getElementById("state");
state.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);








function validate(e) {

    var value = e.target.value;
    console.log(value);
    var type = this.id;
    var em = "error_" + type;

    switch (type) {
        case "firstName":
            if (!value.trim().match(regExName)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validName = true;
            }
            break;
        case "lastName":
            if (!value.trim().match(regExName)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validLName = true;
            }
            break;
        case "phoneNumber":
            if (!value.trim().match(regExPhone)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validPhone = true;
            }
            break;

        case "emailId":
            if (!value.trim().match(regExEmail)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validEmail = true;
            }
            break;

        case "city":
            if (!value.trim().match(regExName)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validLName = true;
            }
            break;

        case "state":
            if (!value.trim().match(regExName)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validLName = true;
            }
            break;

        case "zipcode":
            if (!value.trim().match(regExZip)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "";
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validZip = true;
            }
            break;

    }


}
function submitted(e) {
    e.preventDefault();
    console.log("submitted")
    if (validName && validLName && validEmail && validPhone && validZip) {
        alert("Details Saved Sucessfully!")

        document.getElementById("table").style.display = "block";

        var FName = document.getElementById("firstName").value;
        var Lname = document.getElementById("lastName").value;
        var email = document.getElementById("emailId").value;
        var phone = document.getElementById("phoneNumber").value;
        var streetAddress1 = document.getElementById("streetAddress1").value;
        var streetAddress2 = document.getElementById("streetAddress2").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var zipcode = document.getElementById("zipcode").value;
        var comment = document.getElementById("comments").value;

        var newRow = table.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        var cell9 = newRow.insertCell(8);
        var cell10 = newRow.insertCell(9);

        cell1.innerHTML = FName;
        cell2.innerHTML = Lname;
        cell3.innerHTML = email;
        cell4.innerHTML = phone;
        cell5.innerHTML = streetAddress1;
        cell6.innerHTML = streetAddress2;
        cell7.innerHTML = city;
        cell8.innerHTML = state;
        cell9.innerHTML = zipcode;
        cell10.innerHTML = comment;
        document.getElementById("myForm").reset();
        document.getElementById("drinks").style.display = "none";
        document.getElementById("food").style.display = "none";
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none"
        document.getElementById("option3").style.display = "none"
        document.getElementById("option4").style.display = "none"
        document.getElementById("option5").style.display = "none"
        row++;

    }
    else {
        alert("Something went wrong. Please check the details entered!")

    }
}






function enableRadio(ans) {

    console.log(ans.value);


    if (ans.value == "option1") {
        document.getElementById("option1").style.display = "block";
        document.getElementById("option2").style.display = "none"
        document.getElementById("option3").style.display = "none"
        document.getElementById("option4").style.display = "none"
        document.getElementById("option5").style.display = "none"
        document.getElementById("drinks").style.display = "none";
        document.getElementById("food").style.display = "none";
        document.getElementById("drinks").value = "";
        document.getElementById("food").value = "";

    }
    else if (ans.value == "option2") {
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "block"
        document.getElementById("option3").style.display = "none"
        document.getElementById("option4").style.display = "none"
        document.getElementById("option5").style.display = "none"
        document.getElementById("drinks").style.display = "none";
        document.getElementById("food").style.display = "none";
        document.getElementById("drinks").value = "";
        document.getElementById("food").value = "";
    }
    else if (ans.value == "option3") {
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none"
        document.getElementById("option3").style.display = "block"
        document.getElementById("option4").style.display = "none"
        document.getElementById("option5").style.display = "none"
        document.getElementById("drinks").style.display = "none";
        document.getElementById("food").style.display = "none";
        document.getElementById("drinks").value = "";
        document.getElementById("food").value = "";
    }
    else if (ans.value == "option4") {
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none"
        document.getElementById("option3").style.display = "none"
        document.getElementById("option4").style.display = "block"
        document.getElementById("option5").style.display = "none"
        document.getElementById("drinks").style.display = "none";
        document.getElementById("food").style.display = "none";
        document.getElementById("drinks").value = "";
        document.getElementById("food").value = "";
    }
    else if (ans.value == "option5") {

        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none"
        document.getElementById("option3").style.display = "none"
        document.getElementById("option4").style.display = "none"
        document.getElementById("option5").style.display = "block"
        document.getElementById("drinks").style.display = "none";
        document.getElementById("food").style.display = "none";
        document.getElementById("drinks").value = "";
        document.getElementById("food").value = "";
    }
    else {
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none"
        document.getElementById("option3").style.display = "none"
        document.getElementById("option4").style.display = "none"
        document.getElementById("option5").style.display = "none"
        document.getElementById("drinks").style.display = "none";
        document.getElementById("food").style.display = "none";
        document.getElementById("drinks").value = "";
        document.getElementById("food").value = "";

    }

}





function textboxshow(val) {
    if (val == 1) {
        document.getElementById("drinks").style.display = "block";
        document.getElementById("food").style.display = "none";
    }
    else if (val == 2) {
        document.getElementById("drinks").style.display = "none";
        document.getElementById("food").style.display = "block";

    }
    else {
        document.getElementById("drinks").style.display = "none";
        document.getElementById("food").style.display = "none";
    }
}






// function reset() {
//     document.getElementById("myForm").reset();
//     document.getElementById("drinks").style.display = "none";
//     document.getElementById("food").style.display = "none";
//     document.getElementById("option1").style.display = "none";
//     document.getElementById("option2").style.display = "none"
//     document.getElementById("option3").style.display = "none"
//     document.getElementById("option4").style.display = "none"
//     document.getElementById("option5").style.display = "none"
// }