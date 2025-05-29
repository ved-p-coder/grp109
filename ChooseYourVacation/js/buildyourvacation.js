const destinations = [
            { place: "Paris, France", recreation1: "river", recreation2: "museum", landmark: "palace", climate: "warm"},
            { place: "New York, USA", recreation1: "park", recreation2: "theater", landmark: "bridge", climate: "cool"},
            { place: "New York, USA", recreation1: "park", recreation2: "theater", landmark: "statue", climate: "cool"},
            { place: "London, England", recreation1: "museum", recreation2: "amusement", landmark: "palace", climate: "cool"},
            { place: "Istanbul, Turkey", recreation1: "park", recreation2: "--", landmark: "church", climate: "warm"},
            { place: "Hong Kong, China", recreation1: "hiking", recreation2: "amusement", landmark: "statue", climate: "warm"},
        ];

function findBestMatch() {
    const selectedRecreation1 = document.getElementById("recreation1").value;
    const selectedRecreation2 = document.getElementById("recreation2").value;
    const selectedLandmark = document.getElementById("landmark").value;
    const selectedClimate = document.getElementById("climate").value;

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

    document.getElementById("result").textContent = bestMatch
        ? `Your next vacation is in ${bestMatch}! To learn more, visit our home page!`
        : "No strong match found. Try selecting different options!";
}
