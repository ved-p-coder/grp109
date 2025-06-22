var names = ["Ben", "Lyv", "Ved", "Will"];
var index = 0;

function scrollNames() {
    document.getElementById("name-scroll").textContent = names[index];
    index = (index + 1) % names.length;
  }

  setInterval(scrollNames, 1000); // Change every 1 second
