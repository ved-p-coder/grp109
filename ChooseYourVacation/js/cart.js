function isValid(event) {
    if (firstName() && lastName() && email() && phone() && username() && password() && address() && city() && state() && country() && zipCode()) {

        // Saves all form data to localStorage
        var formData = {
            firstName: document.getElementById("FirstName").value,
            lastName: document.getElementById("LastName").value,
            email: document.getElementById("Email").value,
            phone: document.getElementById("Phone").value,
            username: document.getElementById("Username").value,
            password: document.getElementById("Password").value,
            address: document.getElementById("Address").value,
            city: document.getElementById("City").value,
            state: document.getElementById("State").value,
            country: document.getElementById("Country").value,
            zipCode: document.getElementById("ZipCode").value
        };

        // Converts the object to a string and stores it in the local storage
        localStorage.setItem("formData", JSON.stringify(formData));
        
        return true;
    }
 else {
     document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
     event.preventDefault();
     return false;
 }
}

document.getElementById("FirstName").addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match(/^[a-zA-Z ,.'-]+$/)===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                errorMessages = "";
                console.log("First name valid")
        }

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return validFirstname;
}

document.getElementById("LastName").addEventListener('blur', lastName, false);
function lastName() {
    //1) create variable
    var validLastname = false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastname === "null" || lastname === "" || lastname.length > 20) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log ("Last name invalid - length");
    } else if (lastname.match (/^[a-zA-Z ,.'-]+$/) === null) {
        errorMessages += "<p> Invalid Character in last name (accepts only A-Z, a-z, and , . ' -)</p>";
        console.log("Last name invalid - bad characters");
    } else {
        validLastname = true;
        errorMessages = "";
        console.log("last name valid");
    }

    //4) send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return validLastname;
}

document.getElementById("Email").addEventListener('blur', email, false);
function email() {
    var validEmail = false;
    var userEmail = document.getElementById("Email").value;
    var errorMessages = "";

    if (userEmail === "null" || userEmail === "") {
        errorMessages += "<p>Email address is required.</p>";
        console.log ("Email invalid - empty");
    } else if (userEmail.length > 50) {
        errorMessages += "<p>Email address cannot be more than 50 characters.</p>";
        console.log("email invalid - length");
    } else {
        //2) atpos and dotpos 
        var atpos = userEmail.indexOf("@");
        var dotpos = userEmail.lastIndexOf(".");

        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
            errorMessages += "<p>Invalid email address (ex: example@domain.com). </p>";
            console.log("Email invalid - format (aptos/dotpos)");
        } else {
            validEmail = true;
            errorMessages = "";
            console.log("Email valid");
        }
    }

    document.getElementById("email").innerHTML = errorMessages;
    return validEmail;
}

document.getElementById("Phone").addEventListener('blur', phone, false);
    function phone() {
        var validPhone = false;
        var rawPhone = document.getElementById("Phone").value;
        var errorMessages = "";

// Check for required field
        if (rawPhone === null || rawPhone === "") {
            errorMessages += "<p>Phone number is required.</p>";
            console.log("Phone invalid - empty");
        } else {
// remove all non-digits
            var cleanedPhone = rawPhone.replace(/\D/g, '');
// validate
            if (cleanedPhone.length === 0) {
                errorMessages += "<p>Phone number can only contain numerical values.</p>";
                console.log("Phone invalid - non-numeric");
            } else if (cleanedPhone.length > 15) {
                errorMessages += "<p>Phone number cannot exceed 15 digits.</p>";
                console.log("Phone invalid - length too long");
            } else if (cleanedPhone.length < 7) {
                errorMessages += "<p>Phone invalid - length too short</p>";
            }
            else {
                validPhone = true;
    // auto inserting dashes
                let formattedPhone =cleanedPhone;
                if (cleanedPhone.length === 7) {
                    formattedPhone = cleanedPhone.replace(/(\d{3})(\d{4})/, '$1-$2');
                } else if (cleanedPhone.length === 10) {
                    formattedPhone = cleanedPhone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                } else if (cleanedPhone.length === 11 && cleanedPhone.startsWith('1')) {
                    formattedPhone = cleanedPhone.replace (/(\d{1})(\d{3})(\d{3})(\d{4})/, '$1-$2-$3-$4');
                }
                document.getElementById("Phone").value =formattedPhone;
                console.log("Phone Valid and Formatted:", formattedPhone);
            }
        }
        document.getElementById("phone").innerHTML = errorMessages;
        return validPhone;
    }

// new username function
document.getElementById("Username").addEventListener('blur', username, false);
function username() {
    var validUsername = false;
    var userName = document.getElementById("Username").value;
    var errorMessages = "";
//Validation checks
    if (userName === null || userName === "") {
        errorMessages += "<p>Username is required.</p>";
        console.log("Username invalid - empty");
    } else if (userName.length > 12) {
        errorMessages += "<p>Username cannot be greater than 12 characters.</p>";
    } else if (userName.match(/^[a-zA-Z0-9_.-]+$/) === null) {
        errorMessages += "<p>Username contains invalid characters.</p>";
        console.log("Username invalid - bad characters");
    }
    else {
        validUsername = true;
        errorMessages = "";
        console.log("Username valid");
    }
    document.getElementById("username").innerHTML = errorMessages;
    return validUsername;
}

// password function
document.getElementById("Password").addEventListener('blur', password, false);
function password() {
    var validPassword = false;
    var userPassword = document.getElementById("Password").value;
    var errorMessages = "";

//Validation check
    if (userPassword === null || userPassword === "") {
        errorMessages += "<p>Password is required.</p>";
        console.log("Password invalid - empty");
    } else if (userPassword.length > 7) {
        errorMessages += "<p>Password cannot be greater than 7 characters.</p>";
        console.log("Password invalid - length too long");
    }
    else {
        validPassword = true;
        errorMessages = "";
        console.log("Password Valid");
    }
    document.getElementById("password").innerHTML = errorMessages;
    return validPassword;
}

// address function
document.getElementById("Address").addEventListener('blur', address, false);
function address() {
    var validAddress = false;
    var userAddress = document.getElementById("Address").value;
    var errorMessages = "";
//validation check
    if (userAddress === null || userAddress === "") {
        errorMessages += "<p>Address is required.</p>";
        console.log("Address invalid - empty");
    } else if (userAddress.length > 100) {
        errorMessages += "<p>Address cannot be greater than 100 characters.</p>";
        console.log("Address invalid - length too long");
    } else if (userAddress.match(/^[a-zA-Z0-9 .,#'-]+$/) === null) {
        errorMessages += "<p> Address contains invalid characters </p>";
        console.log("Address Invalid - bad characters");
    }
    else {
        validAddress = true;
        errorMessages = "";
        console.log("Address Valid");
    }
    document.getElementById("address").innerHTML = errorMessages;
    return validAddress;
}

// city function
document.getElementById("City").addEventListener('blur', city, false);
function city() {
    var validCity = false;
    var userCity = document.getElementById("City").value;
    var errorMessages = "";
//validation checks
    if (userCity === null || userCity === "") {
        errorMessages += "<p>City is required.</p>";
        console.log("City invalid - empty");
    } else if (userCity.length > 50) {
        errorMessages += "<p>City cannot be greater than 50 characters.</p>";
        console.log("City invalid - length is too long");
    } else if (userCity.match(/^[a-zA-Z ]+$/) === null) {
        errorMessages += "<p>City contains invalid characters.</p>";
        console.log("City invalid - bad characters");
    }
    else {
        validCity = true;
        errorMessages = "";
        console.log("City Valid");
    }
    document.getElementById("city").innerHTML = errorMessages;
    return validCity;
}

// state function
document.getElementById("State").addEventListener('change', state, false); //Change is better for dropdowns
document.getElementById("State").addEventListener('blur', state, false); // keeping blur for consistency

function state() {
    var validState = false;
    var userState = document.getElementById("State").value;
    var errorMessages = "";

// Validation check
    if (userState === null || userState === "") {
        errorMessages += "<p>Please select a state.</p>";
        console.log("State invalid - not selected");
    }
    else {
        validState = true;
        errorMessages = "";
        console.log("State valid:" + userState);
    }
    // error message to HTML
    document.getElementById("state").innerHTML = errorMessages;
    return validState;
}

// new country funciton
document.getElementById("Country").addEventListener('change', country, false);
document.getElementById("Country").addEventListener('blur', country, false);

function country() {
    var validCountry = false;
    var userCountry = document.getElementById("Country").value;
    var errorMessages = "";

// validation check
    if (userCountry === null || userCountry === "") {
        errorMessages += "<p>Please select a country.</p>";
        console.log("Country invalid - not selected");
    }
    else {
        validCountry = true;
        errorMessages = "";
        console.log("Country Valid");
    }
    document.getElementById("country").innerHTML = errorMessages;
    return validCountry;
}

// new zipcode function
document.getElementById("ZipCode").addEventListener('change', zipCode, false);
document.getElementById("ZipCode").addEventListener('blur', zipCode, false); // this reruns the zip validation if the country changes

function zipCode() {
    var validZipCode = true;
    var zip = document.getElementById("ZipCode").value;
    var selectedCountry = document.getElementById("Country").value;
    var errorMessages = "";

    // 1) check if country is USA
    if (selectedCountry === "USA") {
        // if USA zipcode is required
        if (zip === null || zip === "") {
            errorMessages += "<p>Zipcode is required for residents in the USA.</p>";
            validZipCode = false;
            console.log("zipcode invalid - required in USA");
        } else if (zip.match(/^\d+$/) === null) {
            errorMessages += "<p>Zip code must only contain digits.</p>";
            validZipCode = false;
            console.log("zipcode invalid - non-numeric");
        } else if (zip.length !== 5) {
            errorMessages += "<p>Zipcode must be 5 digits long for USA</p>";
            validZipCode = false;
            console.log("Zipcode invalid - USA length not met");
        }
    } else {
        // if the country is not USA
        if (zip !== null && zip !== "") {
            if (zip.match(/^\d+$/) === null) {
                errorMessages += "<p>Zipcode must only contain digits</p>";
                validZipCode = false;
                console.log("Zipcode invalid - non-numeric");
            } else if (zip.length > 5) {
                errorMessages += "<p>Zipcode cannot be more than 5 digits.</p>";
                validZipCode = false;
                console.log("Zipcode invalid - length too long");
            }
        }
    }
    document.getElementById("zipcode").innerHTML = errorMessages;
    return validZipCode;
}
