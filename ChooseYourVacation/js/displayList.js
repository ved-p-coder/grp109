document.addEventListner("DOMContentLoaded", function () {

  // Retrieve the form data from localStorage and parse it back into an object
  var dataString = JSON.parse(localStorage.getItem("formData"));

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
  html += "<p><strong>First Name:</strong> " + data.firstName + "</p>";
  html += "<p><strong>Last Name:</strong> " + data.lastName + "</p>";
  html += "<p><strong>Email:</strong> " + data.email + "</p>";
  html += "<p><strong>Phone:</strong> " + data.phone + "</p>";
  html += "<p><strong>Username:</strong> " + data.username + "</p>";
  html += "<p><strong>Password:</strong> " + data.password + "</p>";
  html += "<p><strong>Address:</strong> " + data.address + "</p>";
  html += "<p><strong>City:</strong> " + data.city + "</p>";
  html += "<p><strong>State:</strong> " + data.state + "</p>";
  html += "<p><strong>Country:</strong> " + data.country + "</p>";
  html += "<p><strong>Zip Code:</strong> " + data.zipCode + "</p>";
  
  output.innerHTML = display;
});
