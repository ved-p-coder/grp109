const destinations = [
            { place: "Paris, France", recreation1: "river", recreation2: "museum", landmark: "palace", climate: "warm"},
            { place: "New York, USA", recreation1: "park", recreation2: "theater", landmark: "bridge", climate: "cool"},
            { place: "New York, USA", recreation1: "park", recreation2: "theater", landmark: "statue", climate: "cool"}, //alt New York
            { place: "London, England", recreation1: "museum", recreation2: "amusement", landmark: "palace", climate: "cool"},
            { place: "Istanbul, Turkey", recreation1: "park", recreation2: "--", landmark: "church", climate: "warm"},
            { place: "Hong Kong, China", recreation1: "hiking", recreation2: "amusement", landmark: "statue", climate: "warm"},
	    { place: "Rome, Italy", recreation1: "theater", recreation2: "museum", landmark: "fountain", climate: "warm"},
	    { place: "Dubai, UAE", recreation1: "amusement", recreation2: "--", landmark: "market", climate: "warm"},
	    { place: "Seoul, South Korea", recreation1: "aquarium", recreation2: "museum", landmark: "tower", climate: "cool"},
	    { place: "Venice, Italy", recreation1: "theater", recreation2: "river", landmark: "tower", climate: "warm"},
	    { place: "Cairo, Egypt", recreation1: "sightseeing", recreation2: "--", landmark: "church", climate: "warm"},
        ];

/* Allows the form to actually be submitted */
document.getElementById("vacationForm").addEventListener("submit", function(x) {
	x.preventDefault(); // Prevent form from actually being submitted
	findBestMatch(); // Calls the function
});

function findBestMatch() {
    const selectedRecreation1 = document.getElementById("recreation1").value;
    const selectedRecreation2 = document.getElementById("recreation2").value;
    const selectedLandmark = document.getElementById("landmark").value;
    const selectedClimate = document.getElementById("climate").value;

    const resultCard = document.getElementById("resultCard");
    const resultTitle = document.getElementById("resultTitle");
    const resultDesc = document.getElementById("resultDesc");

    let bestMatch = null;
    let highestScore = 0;

    destinations.forEach(destination => {
        let score = 0;
        if (destination.recreation1 === selectedRecreation1) score++;
        if (destination.recreation2 === selectedRecreation2) score++;
        if (destination.landmark === selectedLandmark) score++;
        if (destination.climate === selectedClimate) score++;

        if (score > highestScore) {
            highestScore = score;
            bestMatch = destination.place;
        }
    });

	if (bestMatch) {
		resultTitle.textContent = `Your next vacation is in ${bestMatch}!`;
		resultDesc.textContent = `To learn more, visit our home page!`;
	}

	else {
		resultTitle.textContent = `No strong match found.`;
		resultDesc.textContent = `Try selecting different options!`;
	}

	/* Displays result card */
	resultCard.classList.add("show");

    /* document.getElementById("result").textContent = bestMatch
        ? `Your next vacation is in ${bestMatch}! To learn more, visit our home page!`
        : "No strong match found. Try selecting different options!"; */
}
