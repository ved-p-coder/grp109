document.addEventListener("DOMContentLoaded", function() {
    const parisButton = document.getElementById("paris");
    const londonButton = document.getElementById("london");
    const hongkongButton = document.getElementById("hongkong");

    parisButton.addEventListener("click", function() {
        showParisAttractions();
    });

    londonButton.addEventListener("click", function() {
        showLondonAttractions();
    });

    hongkongButton.addEventListener("click", function() {
        showHongKongAttractions();
    });
});

// This function creates and displays a list of tourist attractions for a given city
function createAttractionElements(container, cityName, attractions) {
    // Clear any existing content inside the container
    container.innerHTML = "";

    // Create a heading element (h2) with the city name
    const header = document.createElement("h2");
    header.textContent = `Top 10 Tourist Attractions in ${cityName}`;
    container.appendChild(header); // Add the heading to the container

    // Loop through each attraction in the array
    for (let i = 0; i < attractions.length; i++) {
        // Create a new <div> for each attraction
        const attractionDiv = document.createElement("div");
        attractionDiv.className = "attraction"; // Add a CSS class for styling

        // Create a heading for the attraction's name
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = attractions[i].name;
        attractionDiv.appendChild(nameHeading); // Add name to the attraction div

        // Create a paragraph for the attraction's description
        const descPara = document.createElement("p");
        descPara.textContent = attractions[i].description;
        attractionDiv.appendChild(descPara); // Add description to the attraction div

        // If the attraction has an image, add it
        if (attractions[i].image) {
            const image = document.createElement("img");
            image.src = attractions[i].image; // Set image source
            image.alt = attractions[i].name; // Set alternative text for accessibility
            image.className = "attraction-image"; // Optional CSS class for styling
            attractionDiv.appendChild(image); // Add image to the attraction div
        }

        // Add the fully built attraction div to the main container
        container.appendChild(attractionDiv);
    }
}

function showParisAttractions() {
    const container = document.getElementById("attractions-container");
    const attractions = [
        { name: "1. Eiffel Tower", description: "The iconic iron lattice tower on the Champ de Mars, built in 1889. It's one of the world's most recognizable landmarks and offers breathtaking views of Paris.", image: "" },
        { name: "2. Louvre Museum", description: "The world's largest art museum and historic monument, home to thousands of works of art including the Mona Lisa and Venus de Milo.", image: "" },
        { name: "3. Notre-Dame Cathedral", description: "A medieval Catholic cathedral known for its French Gothic architecture, beautiful rose windows, and flying buttresses.", image: "" },
        { name: "4. Arc de Triomphe", description: "A monumental arch honoring those who fought for France, offering panoramic views from the top and standing at the center of a star-shaped configuration of 12 radiating avenues.", image: "" },
        { name: "5. Montmartre", description: "A historic hill district known for its artistic history, the white-domed Basilica of the Sacré-Cœur, and stunning views of the city.", image: "" },
        { name: "6. Champs-Élysées", description: "One of the world's most famous avenues, known for luxury shops, cafés, and the annual Bastille Day military parade.", image: "" },
        { name: "7. Seine River Cruise", description: "A scenic boat tour along the Seine River, offering unique perspectives of Paris's famous monuments and bridges.", image: "" },
        { name: "8. Palace of Versailles", description: "The principal royal residence of France from 1682 until the start of the French Revolution, known for its opulent décor, Hall of Mirrors, and beautiful gardens.", image: "" },
        { name: "9. Musée d'Orsay", description: "A museum housed in a former railway station, featuring the largest collection of impressionist and post-impressionist masterpieces in the world.", image: "" },
        { name: "10. Centre Pompidou", description: "A complex building in the style of high-tech architecture, housing the largest museum for modern art in Europe.", image: "" }
    ];
    createAttractionElements(container, "Paris", attractions);
}
