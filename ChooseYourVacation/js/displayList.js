document.addEventListener("DOMContentLoaded", function () {

  // Retrieve the form data from localStorage and parse it back into an object
  var dataString = localStorage.getItem("formData");

  var output = document.getElementById("output");

  // Check if there is any data saved at all
  if (dataString === null || dataString === "") {
    output.textContent = "No form data found.";
    return;
  }

  // Converts the string into an object
  var data = JSON.parse(dataString);

  // Displays all the form information
  var display = "";
  display += "<p><strong>First Name:</strong> " + data.firstName + "</p>";
  display += "<p><strong>Last Name:</strong> " + data.lastName + "</p>";
  display += "<p><strong>Email:</strong> " + data.email + "</p>";
  display += "<p><strong>Phone:</strong> " + data.phone + "</p>";
  display += "<p><strong>Username:</strong> " + data.username + "</p>";
  display += "<p><strong>Password:</strong> " + data.password + "</p>";
  display += "<p><strong>Address:</strong> " + data.address + "</p>";
  display += "<p><strong>City:</strong> " + data.city + "</p>";
  display += "<p><strong>State:</strong> " + data.state + "</p>";
  display += "<p><strong>Country:</strong> " + data.country + "</p>";
  display += "<p><strong>Zip Code:</strong> " + data.zipCode + "</p>";
  
  output.innerHTML = display;
});
