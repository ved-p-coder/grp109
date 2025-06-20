document.addEventListener('DOMContentLoaded', function() {
  var myImages = [
  "images/city/paris.jpg",
  "images/city/newyork2.jpg",
  "images/city/london.jpg",
  "images/city/istanbul.jpg",
  "images/city/hongkong.jpg",
  "images/city/rome.jpg",
  "images/city/dubai.jpg",
  "images/city/venice.jpg",
  "images/city/seoul.jpg",
  "images/city/cairo2.jpg"
  ];

var captionImages = [
  "Enjoy iconic landmarks in Paris",
  "Explore New York City",
  "Walk through Londons rich history",
  "See the views of Instanbul and its unique position staddling two continents",
  "Find yourself immersed in Hong Kongs iconic skyline of skyscrapers",
  "See Rome's unique history, art, and architecture",
  "Travel to Dubai to experience modern architecture and luxery shopping",
  "Float through the unique network of canals in Venice",
  "Experience rich cultural heritage in Seoul",
  "Tour the great Ciaro and fall in love with its ancient landmarks"
  ];

// Adds sound effects to the left and right buttons
var leftSound = document.getElementById("leftSound");
var rightSound = document.getElementById("rightSound");

var index = 0;
var timerInterval; // to store ID for clearing
var currentCountdown = 3; // countdown value
const SLIDESHOW_DURATION = 3;

// get elements
var slideshowImage = document.getElementById("slideshow");
var captionParagraph = document.getElementById("caption");
var timerDisplay = document.getElementById("timerDisplay");
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");
var autoCheckbox = document.getElementById("auto");

// function to update the displayed image and caption
function updateImage (){
  slideshowImage.src = myImages[index];
  slideshowImage.alt = captionImages[index];
  captionParagraph.textContent = captionImages[index];
  resetTimer(); // resets the timer whenever the image updates
}

//function to advance to next image
function next() {
  rightSound.currentTime = 0;
  rightSound.play(); // Plays sound when next() is triggered
  
  if (myImages.length === index + 1) {
    index = 0; // loop back to the first image if at the end
  } else {
    index ++;
  }
  updateImage(); // updates image and resets timer
}

// function to go back to the previous image
function back() {
  leftSound.currentTime = 0;
  leftSound.play(); // Plays sound when back() is triggered
  
  if (index === 0) {
    index = myImages.length - 1; // loops to the last image
  } else {
    index--;
  }
  updateImage(); //updates image and resets timer
}

//function to update countdown and trigger image change
function updateCountdown () {
  currentCountdown--;
  timerDisplay.textContent = "Countdown: " + currentCountdown + "s";

  if (currentCountdown <= 0) {
    clearInterval(timerInterval); //stop current countdown
    next(); //move to next image
  }
}

// function to start or restart timer
function startTimer () {
  clearInterval(timerInterval)
  currentCountdown = SLIDESHOW_DURATION;
  timerDisplay.textContent = "Countdown: " + currentCountdown + "s";
  timerInterval = setInterval(updateCountdown, 1000);
}

//function to reset automatic slideshow timer
function resetTimer () {
  clearInterval(timerInterval);
  if (autoCheckbox.checked) {
    startTimer();
  } else {
    currentCountdown = SLIDESHOW_DURATION;
    timerDisplay.textContent = "Countdown: " + currentCountdown + "s";
  }
}

// function for "run automatically"
function autoSlide () {
  if (autoCheckbox.checked) {
    resetTimer();
  } else {
    clearInterval(timerInterval);
    currentCountdown = SLIDESHOW_DURATION;
    timerDisplay.textContent = "Countdown: " + currentCountdown + "s";
  }
}

// -- event listeners --
previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);
autoCheckbox.addEventListener("change", autoSlide, false);

updateImage();
autoSlide();

});
