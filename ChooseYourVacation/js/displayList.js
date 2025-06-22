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
  var display = "<ul>";
  display += "<li><strong>First Name:</strong> " + data.firstName + "</li>";
  display += "<li><strong>Last Name:</strong> " + data.lastName + "</li>";
  display += "<li><strong>Email:</strong> " + data.email + "</li>";
  display += "<li><strong>Phone:</strong> " + data.phone + "</li>";
  display += "<li><strong>Username:</strong> " + data.username + "</li>";
  display += "<li><strong>Password:</strong> " + data.password + "</li>";
  display += "<li><strong>Address:</strong> " + data.address + "</li>";
  display += "<li><strong>City:</strong> " + data.city + "</li>";
  display += "<li><strong>State:</strong> " + data.state + "</li>";
  display += "<li><strong>Country:</strong> " + data.country + "</li>";
  display += "<li><strong>Zip Code:</strong> " + data.zipCode + "</li>";
  display += "</ul>";
  
  output.innerHTML = display;
});
