document.addEventListener("DOMContentLoaded", function() {
    const parisButton = document.getElementById("paris");
    const newYorkButton = document.getElementById("newyork");
    const londonButton = document.getElementById("london");
    const hongkongButton = document.getElementById("hongkong");
    const istanbulButton = document.getElementById("istanbul");
    const romeButton = document.getElementById("rome");
    const dubaiButton = document.getElementById("dubai");
    const veniceButton = document.getElementById("venice");
    const seoulButton = document.getElementById("seoul");
    const cairoButton = document.getElementById("cairo");

    parisButton.addEventListener("click", function() {
        showParisAttractions();
    });

    newYorkButton.addEventListener("click", function() {
        showNewYorkAttractions();
    });

    londonButton.addEventListener("click", function() {
        showLondonAttractions();
    });

    hongkongButton.addEventListener("click", function() {
        showHongKongAttractions();
    });

    istanbulButton.addEventListener("click", function() {
        showIstanbulAttractions();
    });

    romeButton.addEventListener("click", function() {
        showRomeAttractions();
    });

    dubaiButton.addEventListener("click", function() {
        showDubaiAttractions();
    });

    veniceButton.addEventListener("click", function() {
        showVeniceAttractions();
    });

    seoulButton.addEventListener("click", function() {
        showSeoulAttractions();
    });

    cairoButton.addEventListener("click", function() {
        showCairoAttractions();
    });

});

// This function creates and displays a list of tourist attractions for a given city
function createAttractionElements(container, cityName, attractions, flightPrice) {
    // Clear any existing content inside the container
    container.innerHTML = "";
    
    // Create a heading element (h2) with the city name
    const header = document.createElement("h2");
    header.textContent = `Top 10 Tourist Attractions in ${cityName}`;
    container.appendChild(header); // Add the heading to the container

    // create element for flight price
    const flightPricePara = document.createElement("p");
    flightPricePara.id = "flight-price-info";
    flightPricePara.textContent = `Round trip to ${cityName} from the US is around $${flightPrice}`;

    header.after(flightPricePara);

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
        descPara.className = "attraction-description-text";
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

/* Displays Paris attractions 
Created by: */
function showParisAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "1,700" //Paris Flight price
    const attractions = [
        { name: "1. Eiffel Tower", description: `The iconic iron lattice tower on the Champ de Mars, built in 1889. It is one of the worlds most recognizable landmarks and offers breathtaking views of Paris.
    This attraction varies in price for adults, Youth, and Children.
        Adult prices: 
            Second floor using stairs: £14.20 (≈ $16).
            Second floor with Lift: £22.60 (≈ $25).
            Top floor with Lift: £25.30 (≈ $28).
        Youth (12-24 yrs old) and child (4-11 yrs old) price vary.`,
         image:"images/paris/EiffelTower.png" },
        
        { name: "2. Louvre Museum", description: `The world's largest art museum and historic monument, home to thousands of works of art including the Mona Lisa and Venus de Milo.
    This attraction costs: £22 (≈ $24)`, 
         image: "images/paris/Louvre.png" },
        
        { name: "3. Notre-Dame Cathedral", description: `A medieval Catholic cathedral known for its French Gothic architecture, beautiful rose windows, and flying buttresses.
    This attraction is FREE for general admission`, 
         image: "images/paris/Notre-Dame.png" },
        
        { name: "4. Arc de Triomphe", description: `A monumental arch honoring those who fought for France, offering panoramic views from the top and standing at the center of a star-shaped configuration of 12 radiating avenues.
    This attraction costs: £16 (≈ $18)`, 
         image: "images/paris/Arc-De-Triomphe.png" },
        
        { name: "5. Montmartre", description: `A historic hill district known for its artistic history, the white-domed Basilica of the Sacré-Cœur, and stunning views of the city.
    This attraction is FREE for general admission`, 
         image: "images/paris/Montmarte.png" },
        
        { name: "6. Champs-Élysées", description: `One of the world's most famous avenues, known for luxury shops, cafés, and the annual Bastille Day military parade.
    This attraction is FREE for general Admission`, 
         image: "images/paris/Champs-Elysees.png" },
        
        { name: "7. Seine River Cruise", description: `A scenic boat tour along the Seine River, offering unique perspectives of Paris's famous monuments and bridges.
    This attraction costs: £15-25 (≈ $17-28)`, 
         image: "images/paris/Seine-River-Cruise.png" },
        
        { name: "8. Palace of Versailles", description: `The principal royal residence of France from 1682 until the start of the French Revolution, known for its opulent décor, Hall of Mirrors, and beautiful gardens.
    This attraction costs: £21 (≈ $24)`, 
         image: "images/paris/Palace-Versailles.png" },
        
        { name: "9. Musée d'Orsay", description: `A museum housed in a former railway station, featuring the largest collection of impressionist and post-impressionist masterpieces in the world. 
    This attraction costs: £16 (≈ $18)`, 
         image: "images/paris/Musee-D-Orsay.png" },
        
        { name: "10. Centre Pompidou", description: `A complex building in the style of high-tech architecture, housing the largest museum for modern art in Europe.
    This attraction costs: £17 (≈ $21)`,
         image: "images/paris/Centre-Pompidou.png" }
    ];
    createAttractionElements(container, "Paris", attractions, flightPrice);
}

/* Displays New York attractions 
Created by: Ben */
function showNewYorkAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "500"; // New York Flight price
    const attractions = [
        { name: "1. Statue of Liberty", description: `A symbol of freedom and democracy, offering breathtaking views from its pedestal and crown.
    This attraction costs: $25.50`,
         image: "images/newyork/statueofliberty.jpg" },
        
        { name: "2. Central Park", description: `A tranquil escape from the city’s hustle, with picturesque landscapes, lakes, and historical monuments.
    This attraction is FREE`, 
         image: "images/newyork/centralpark.jpg" },
        
        { name: "3. Times Square", description: `Experience the vibrant heart of NYC with dazzling lights, entertainment, and iconic landmarks.
    This attraction is FREE`,
         image: "images/newyork/timessquare.jpg" },
        
        { name: "4. Empire State Building", description: `Stunning panoramic views of the city from the observation decks; a true NYC icon.
    This attraction costs: $44`,
         image: "images/newyork/empirestate.jpg" },
        
        { name: "5. Brooklyn Bridge", description: `Walk across this historic bridge for breathtaking skyline views and photo opportunities.
    This attraction costs: $15
        This is a fee for crossing the bridge if you are driving on your own`, 
         image: "images/newyork/brooklynbridge.jpg" },
        
        { name: "6. Fifth Avenue", description: `Shop at world-renowned stores, visit St. Patrick’s Cathedral, and stroll by Rockefeller Center.
    This attraction has a TOLL FEE`,
         image: "images/newyork/fifthavenue.jpg" },
        
        { name: "7. Metropolitan Museum of Art", description: `Dive into a world of art, from ancient artifacts to contemporary masterpieces.
    This attraction costs:
        Adult: $30
        Seniors: $22
        Students: $17`,
         image: "images/newyork/themet.jpg" },
        
        { name: "8. Broadway", description: `See top-tier theatrical productions, from classic musicals to cutting-edge plays.
    This attraction costs: $20-$145
        You can buy tickets for this attraction`,
         image: "images/newyork/broadway.jpg" },
        
        { name: "9. 9/11 Memorial and Museum", description: `A powerful and moving tribute to the lives lost and the city’s resilience.
    This attraction costs: $33`,
         image: "images/newyork/911memorial.jpg" },
        
        { name: "10. Rockefeller Center", description: `Visit the Top of the Rock for a stunning view, go ice skating, or tour NBC Studios.
    This attraction costs: $34-$61`,
         image: "images/newyork/rockefellercenter.jpg" }
    ];
    createAttractionElements(container, "New York", attractions, flightPrice);
}

/* Displays Istanbul attractions 
Created by: */
function showIstanbulAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "1,900"; // Istanbul Flight price
    const attractions = [
        {name: "1. Hagia Sophia Grand Mosque", description: `One of Byzantine Empire's surviving architectural marvels. Right in the center of Istanbul's historic center, this building remains an important symbil of power.
    This attraction costs: £25 (≈ $29)`,
         image: "images/istanbul/hagiaSophia.jpg"},
        
        {name: "2. Topkapi Palace", description: `This place was at one point the court of the Ottoman Empire. Today you will see a collection of rare books, manuscripts and much more history of what this palace once was.
    This attraction costs: 750TL (≈ $20)`,
         image: "images/istanbul/TopkapiPalace.jpg"},
        
        {name: "3. Kariye Mosque", description: `This mosque is renowned worldwide for its well-preserved mosaics and frescoes. When you visit you will see beautiful expamples of East Roman paintings in its last period.
    This attraction costs: £20 (≈ $23)`,
         image: "images/istanbul/KaryieMosque.jpg"}, 
        
        {name: "4. Basilica Cistern", description: `This ancient underground reservoir holds 336 columns and haunting medusa heads. It offers a eerie yet beautiful escape into Byzantine history.
    This attraction costs: 900TL (≈ $23)`,
         image: "images/istanbul/basilicaCistern.jpeg"},
        
        {name: "5. Grand Bazaar", description: `This attraction is the oldest covered market in the world. If you are one for shopping, this is the place for you. Some goods sold include jewelry, textiles, clothing, leather goods, ceramics, and souvinirs.
    This attraction is FREE`,
         image: "images/istanbul/grandBazaar.jpeg"},
        
        {name: "6. Aya Sofya Tombs", description: `These tombs are the final resting places of five 16th- and 17th-century sultans. The stunning architecture of the dome shape shows how groundbreaking engineering was at the time. It is a symbol of cultrual exchange.
    This attraction costs: £25 (≈ $29)`, 
         image: "images/istanbul/SofyaTombs.jpeg"},
        
        {name: "7. Atatürk Arboretum", description: `This arboretum offers an escape from the city. It can offer scenic landscapes, plant collections, and educational opportunities. If you are a nature lover this is the spot for you.
    This attraction costs:
        Adult: 7.5TL (≈ $0.20)
        Student: 2.5TL (≈ $0.06)`, 
         image: "images/istanbul/AtaturkAboretum.jpg"},
        
        {name: "8. Eyüp Sultan Mosque", description: `It's a popular pilgrimage destination for Muslims and a place of worship for locals, though less frequented by international tourists.
    This attraction is FREE`,
         image: "images/istanbul/yupSultanMosque.jpeg"},
        
        {name: "9. Galata Tower", description: `Visiting provides a chance to experience Istanbul's rich history and enjoy breathtaking panoramic views.
    This attraction costs: 650TL (≈ $25)`, 
         image: "images/istanbul/galataTower.avif"},
        
        {name: "10. All Saints Moda Church", description: `This church is a unique place to visit due to its historical significance, architectural beauty, and welcoming atmosphere.
    This attraction is FREE`,
         image: "images/istanbul/AllSaintsModaChurch.jpeg"}
    ];
createAttractionElements(container, "Istanbul", attractions, flightPrice);
}

/* Displays London attractions 
Created by: */
function showLondonAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "1,200"; // London flight price
    const attractions = [
        { name: "1. Tower of London", description: `A historic castle on the north bank of the River Thames, known for housing the Crown Jewels and its fascinating history.
    This attraction costs: 
        Adult: £35.50 (≈ $48)
        Children (5-15): £17.90 (≈ $24)`,
        image: "images/london/Tower-London.png" },
        
        { name: "2. British Museum", description: `A public institution dedicated to human history, art, and culture, with a collection of over 8 million works.
    This attraction is FREE for general admission`,
         image: "images/london/British-Museum.png" },
        
        { name: "3. Buckingham Palace", description: `The London residence and administrative headquarters of the monarch of the United Kingdom, known for the Changing of the Guard ceremony.
    This attraction costs:
        Adult: £32-£35 (≈ $43-$47)
        Youth (18-24): £20.50-£22.50 (≈ $28-¢30)
        Children: £16 (≈ $21)`,
         image: "images/london/Buckingham-Palace.png" },
        
        { name: "4. London Eye", description: `A giant Ferris wheel offering breathtaking views of the city from its glass capsules.
    This attraction costs:
        Adult Standard: £29 (≈ $40) 
        Adult Fast Track: £44 (≈ $60)`, 
         image: "images/london/London-Eye.png" },
        
        { name: "5. Westminster Abbey", description: `A Gothic abbey church that has been the traditional place of coronation and burial for English and British monarchs.
    This attraction costs: 
        Adult: £29 (≈ $40)
        Youth (6-17): £13 (≈ $28)`,
         image: "images/london/Westminster-Abbey.png" },
        
        { name: "6. Big Ben & Houses of Parliament", description: `The iconic clock tower and the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom.
    This attraction costs:
        Adult: £35 (≈ $47)
        Youth (11-17): £20 (≈ $28)`,
         image: "images/london/Big-Ben.png" },
        
        { name: "7. Tate Modern", description: `Britain's national gallery of international modern art, housed in the former Bankside Power Station.
    This attraction is FREE`,
         image: "images/london/Tate-Modern.png" },
        
        { name: "8. Natural History Museum", description: `A museum exhibiting a vast range of specimens from various segments of natural history, housed in a Romanesque building.
    This attraction is FREE`,
         image: "images/london/Natural-History-Museum.png" },
        
        { name: "9. Hyde Park", description: `One of the largest parks in London, famous for Speakers' Corner and the Serpentine lake.
    This attraction is FREE`,
         image: "images/london/Hyde-Park.png" },
        
        { name: "10. Tower Bridge", description: `A combined bascule and suspension bridge crossing the River Thames, known for its Victorian Gothic style.
    This attraction costs: 
        Adult: £16 (≈ $21)
        Children: £8 (≈ $11)`, 
         image: "images/london/Tower-Bridge.png" }
    ];
    createAttractionElements(container, "London", attractions, flightPrice);
}

/* Displays Hong Kong attractions 
Created by: */
function showHongKongAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "1,500" // Hong Kong flight price
    const attractions = [
        { name: "1. Victoria Peak", description: `The highest hill on Hong Kong Island, offering stunning views of the city skyline, Victoria Harbour, and surrounding islands.
    This attraction is FREE`, 
         image: "images/hongkong/Victoria-Peak.png" },
        
        { name: "2. Victoria Harbour", description: `A natural landform harbor separating Hong Kong Island and Kowloon Peninsula, known for its spectacular skyline.
    This attraction is FREE`,
         image: "images/hongkong/Victoria-Harbour.png" },
        
        { name: "3. Hong Kong Disneyland", description: `A theme park featuring classic Disney attractions and entertainment based on Disney characters and stories.
    This attraction costs: HK$430-HK$1569 (≈ $60-$200)`, 
         image: "images/hongkong/Hong-Kong-Disneyland.png" },
        
        { name: "4. Tian Tan Buddha (Big Buddha)", description: `A large bronze statue of Buddha Shakyamuni, located near Po Lin Monastery on Lantau Island.
    This attraction is FREE`, 
         image: "images/hongkong/Tian-Tan-Buddha.png" },
        
        { name: "5. Temple Street Night Market", description: `A bustling night market known for its street food, trinkets, and fortune tellers.
    This attraction is FREE`,
         image: "images/hongkong/Temple-Street-Night-Market.png" },
        
        { name: "6. Star Ferry", description: `A passenger ferry service operating across Victoria Harbour, offering iconic views of the Hong Kong skyline.
    This attraction costs: HK$2.70-HK$5.60 (≈ $0.34-$0.71)`,
         image: "images/hongkong/Star-Ferry.png" },
        
        { name: "7. Wong Tai Sin Temple", description: `A famous shrine and popular tourist attraction, known for its beautiful architecture and fortune-telling services.
    This attraction is FREE`,
         image: "images/hongkong/Wong-Tai-Sin-Temple.png" },
        
        { name: "8. Ocean Park", description: `A marine mammal park, oceanarium, animal theme park, and amusement park featuring animal exhibits and thrilling rides.
    This attraction costs: 
        Adult: HK$498 (≈ $64)
        Child: HK$249 (≈ $32)`, 
         image: "images/hongkong/Ocean-Park.png" },
        
        { name: "9. Lan Kwai Fong", description: `A popular nightlife district with numerous bars, restaurants, and clubs.
    This attraction is FREE`, 
         image: "images/hongkong/Lan-Kwai-Fong.png" },
        
        { name: "10. Ngong Ping 360", description: `A cable car system offering spectacular views of the mountains, South China Sea, and Hong Kong International Airport.
    This attraction costs: HK$313 (≈ $40)`,
         image: "images/hongkong/Ngong-Ping.png" }
    ];
    createAttractionElements(container, "Hong Kong", attractions, flightPrice);
}

/* Displays Rome attractions 
Created by: Ben */
function showRomeAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "1,500" // Rome flight price
    const attractions = [
        { name: "1. Colosseum", description: `An iconic Roman amphitheater, famous for its ancient gladiator battles and rich history.
    This attraction costs:
        Adult: €18 (≈ $20)
        Child: FREE`, 
         image: "images/rome/Colosseum-Rome.jpg" },

        { name: "2. Trevi Fountain", description: `A popular fountain, renowned for its tradition of tossing coins for luck and making wishes.
    This attraction is FREE`, 
         image: "images/rome/TreviFountain-Rome.jpg" },

        { name: "3. Pantheon", description: `A well-preserved Roman Temple, recognized for its impressive dome and classical architecture.
    This attraction is FREE`, 
         image: "images/rome/Pantheon-Rome.jpg" },

        { name: "4. St. Peter's Basilica", description: `A majestic church, famous for its grand art, Michelangelo’s dome, and rich religious significance.
    This attraction costs:
        Adult: €10 (≈ $11)
        Child: €5 (≈ $5.50)`, 
         image: "images/rome/PeterBasilica-Rome.jpg" },

        { name: "5. Sistine Chapel", description: `A renowned chapel within the Vatican, celebrated for Michelangelo’s breathtaking ceiling.
    This attraction costs:
        Adult: €17 (≈ $19)
        Child: €8 (≈ $9)`, 
         image: "images/rome/SistineChapel-Rome.jpg" },

        { name: "6. Roman Forum", description: `An ancient civic space, filled with ruins and stories from the heart of the Roman Empire.
    This attraction costs:
        Adult: €18 (≈ $20)
        Child: FREE`, 
         image: "images/rome/RomanForum-Rome.jpg" },

        { name: "7. Piazza Navona", description: `A charming square, popular for its beautiful fountains, cafés, and bustling atmosphere.
    This attraction is FREE`, 
         image: "images/rome/PiazzaNavona-Rome.jpg" },

        { name: "8. Spanish Steps", description: `An iconic staircase, well-loved by tourists for its romantic views and stylish setting.
    This attraction is FREE`, 
         image: "images/rome/SpanishSteps-Rome.jpg" },

        { name: "9. Castle Sant’Angelo", description: `A historic fortress, known for its strong defensive structures and panoramic views of the city.
    This attraction costs:
        Adult: €15 (≈ $17)
        Child: FREE`, 
         image: "images/rome/CastleSant-Rome.jpg" },

        { name: "10. Galleria Borghese", description: `A renowned art gallery, famous for its impressive collection of sculptures, paintings, and masterpieces.
    This attraction costs:
        Adult: €13 (≈ $15)
        Child: FREE`, 
         image: "images/rome/Galleria Borghese-Rome.jpg" }
    ];
    createAttractionElements(container, "Rome", attractions, flightPrice);
}

/* Displays Dubai attractions 
Created by: Ben */
function showDubaiAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "800" // Dubai flight price
    const attractions = [
        { name: "1. Burj Khalifa", description: `The world’s tallest building with stunning views from its observation deck.
    This attraction costs:
        Adult: AED 169 (≈ $47)
        Child: AED 134 (≈ $37)`, 
         image: "images/dubai/BurjKhalifa.jpg" },

        { name: "2. The Dubai Mall", description: `One of the world’s largest shopping malls, featuring an ice rink, cinema, and an aquarium.
    This attraction is FREE`, 
         image: "images/dubai/DubaiMall.jpg" },

        { name: "3. Palm Jumeirah", description: `A famous man-made island filled with hotels, restaurants, and entertainment.
    This attraction is FREE`, 
         image: "images/dubai/PalmJumeirah.jpg" },

        { name: "4. Desert Safari", description: `An exhilarating ride over sand dunes, camel rides, dinner, and shows under the stars.
    This attraction costs:
        Adult: AED 250 (≈ $68)
        Child: AED 200 (≈ $54)`, 
         image: "images/dubai/DesertSafari.jpg" },

        { name: "5. Dubai Frame", description: `A huge picture frame-shaped attraction offering views of Old and New Dubai.
    This attraction costs:
        Adult: AED 50 (≈ $14)
        Child: AED 20 (≈ $5)`, 
         image: "images/dubai/DubaiFrame.jpg" },

        { name: "6. Miracle Garden", description: `The world’s largest flower garden, featuring over 150 million flowers in creative displays.
    This attraction costs:
        Adult: AED 55 (≈ $15)
        Child: AED 40 (≈ $11)`, 
         image: "images/dubai/MiracleGarden.jpg" },

        { name: "7. Global Village", description: `A cultural park featuring food, shows, and products from over 90 countries.
    This attraction costs:
        Adult: AED 20 (≈ $5)
        Child: AED 20 (≈ $5)`, 
         image: "images/dubai/GlobalVillage.jpg" },

        { name: "8. Ski Dubai", description: `Indoor ski slope with snowboarding, penguin encounters, and tube rides, a unique experience in the desert!
    This attraction costs:
        Adult: AED 220 (≈ $60)
        Child: AED 160 (≈ $44)`, 
         image: "images/dubai/SkiDubai.jpg" },

        { name: "9. Atlantis, The Palm", description: `A huge water park with water slides, a private beach, and a chance to see sharks and rays.
    This attraction costs:
        Adult: AED 299 (≈ $82)
        Child: AED 299 (≈ $82)`, 
         image: "images/dubai/AtlantisPalm.jpg" },

        { name: "10. Al Fahidi Historical District", description: `Immerse yourself in traditional Emirati culture, heritage houses, cafés, art galleries, and a rich history.
    This attraction is FREE`, 
         image: "images/dubai/AlFahidi.png" }

        

        
    ];
    createAttractionElements(container, "Dubai", attractions, flightPrice);
}

/* Displays Venice attractions 
Created by: Lyv */
function showVeniceAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "1,200" // Venice flight price
    const attractions = [
        { name: "1. St. Mark's Basilica", description: `It is famous for its Byzantine architecture, intricate mosaics, and its status as the final resting place of Saint Mark's relics. It is also renowned for its opulent interior and stunning golden mosaics.
    This attraction costs:
        Adult: £6 (≈ $7)
        Child: Free for children 6 yrs and under)`, 
         image: "https://venicelover.com/images/san-marco-basilica-venice.jpg" },

        { name: "2. Piazza San Marco", description: `Piazza San Marco is the city's main public square and contains its most famous buildings such as St Mark's Basilica and the Doge's Palace. It is also in the heart of Venice. 
    This attraction is free to enter`,
         image: "https://venicelover.com/images/saint-marks-square.jpg" },

        { name: "3. Doge's Palace", description: `The Doge's Palace (Palazzo Ducale) in Venice is a masterpiece of Venetian Gothic architecture and a symbol of the city's power and history. 
    This attraction costs:
        Adult: £30 (≈ $35)
        Youth: £15 (≈ $17)
        Senior: £15 (≈ $17)`,
        image: "https://venicelover.com/images/dogespalace_tickets.jpg" },

        {name: "4. Canal Grande & Rialto Bridge", description: `The Grand Canal is Venice's main thoroughfare, a winding waterway that snakes through the city in an S-shape. The Rialto Bridge, a single-arch stone bridge designed by Antonio da Ponte, is the oldest and most famous bridge spanning the Grand Canal.
    This attraction costs: 
        Gondala: £34 (≈ $39)
        Motorboat: £39 (≈ $45)`,
         image: "https://venicelover.com/images/canal_grande_venice.jpg" },

        { name: "5. Teatro La Fenice, Opera house", description: `Teatro La Fenice, meaning "The Phoenix" in Italian, is a historic opera house in Venice, Italy, renowned for its significance in Italian theatre and opera. It's known for its neoclassical design, opulent interiors, and the numerous premieres of famous operas that have taken place within its walls.
    This attraction costs:
        Tickets range between £99-£200 for a show (≈ $-$)
        Guided Tour: £12 (≈ $14)
        Students & Seniors: £9.20 (≈ $11)`,
         image: "https://venicelover.com/images/teatro_la_fenice_venice.jpg" },

        { name: "6. Murano, Burano & Torcello Tours", description: `Murano, Burano, and Torcello are three islands in the Venetian Lagoon, each offering unique attractions, and are often visited as part of a day trip from Venice. Murano is famous for its glassblowing, Burano for its colorful houses and lace.
    This attraction costs:
        Adults: £24 (≈ $28)`,
         image: "https://venicelover.com/images/burano-venice.jpg" },

        { name: "7.Peggy Guggenheim Collection", description: `The Peggy Guggenheim Collection is a prominent museum of 20th-century art located in Venice, Italy, housed in Peggy Guggenheim's former home, Palazzo Venier dei Leoni.
    This attraction costs:
        Tickets: £18.50 (≈ $21)
        Students up to 26: £11.50 (≈ $13)
        Seniors (65 and up): £16.50 (≈ $19)
        Children 10 and under is FREE `,
         image: "https://venicelover.com/images/peggy-guggenheim.jpg" },

        { name: "8. Campanile di San Marco", description: `The Campanile di San Marco, or St. Mark's Campanile, is a prominent bell tower in St. Mark's Square in Venice, Italy. Standing at 98.6 meters (324 feet) tall, it's the tallest structure in Venice and a recognizable symbol of the city.
    This attraction costs: 
        Adult: £17 (≈ $20)
        Children 6 and under are FREE`,
         image: "https://venicelover.com/images/bell-tower-venice.jpg" }, 

        { name: "9. Cannaregio & Jewish Ghetto", description: `Cannaregio is a residential district in Venice known for its quiet atmosphere and the Jewish Ghetto, the oldest in the world.
    This attraction costs:
        Guided Tour: £85 (≈ $98)
        Walking Tour: £352.41 (≈ $404)`,
         image: "https://venicelover.com/images/cannaregio-venice.jpg" },

        { name: "10. Scuola Grande di San Rocco", description: `The Scuola Grande di San Rocco in Venice is a grand building renowned for its stunning collection of Tintoretto paintings. It served as the headquarters for a charitable confraternity and is a prime example of Venetian Renaissance architecture and art.
    This attraction costs: 
        Adult: £10 (≈ $12)
        Youth (26 and under): £8 (≈ $9)
        Senior (65 and up): £8 (≈ $9)`,
         image: "https://venicelover.com/images/scuola-grande-di-san-rocco_venice.jpg" },
    ];
    createAttractionElements(container, "Venice", attractions, flightPrice);
}

/* Displays Seoul attractions 
Created by: Ben */
function showSeoulAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "830" // Seoul flight price
    const attractions = [
        { name: "1. Gyeongbokgung Palace", description: `A majestic Joseon dynasty palace, famous for its rich history and beautiful architecture.
    This attraction costs:
        Adult: 3,000₩ (≈ $2)
        Child: 1,500₩ (≈ $1)`, 
         image: "images/seoul/GyeongPalace.jpg" },

        { name: "2. N Seoul Tower", description: `An iconic observation tower offering stunning views of Seoul’s skyline.
    This attraction costs:
        Adult: 21,000₩ (≈ $15)
        Child: 13,000₩ (≈ $9)`, 
         image: "images/seoul/NSeoulTower.jpg" },

        { name: "3. Myeong-dong", description: `Seoul’s shopping mecca, filled with food, fashion, and souvenirs — free to explore!
    This attraction is FREE`, 
         image: "images/seoul/Myeong.jpg" },

        { name: "4. Bukchon Hanok Village", description: `A charming neighborhood with traditional Korean houses, cafés, and art galleries.
    This attraction is FREE`, 
         image: "images/seoul/Bukchon.jpg" },

        { name: "5. Changdeokgung Palace", description: `A beautiful, well-preserved Joseon dynasty palace recognized by UNESCO.
    This attraction costs:
        Adult: 3,000₩ (≈ $2)
        Child: 1,500₩ (≈ $1)`, 
         image: "images/seoul/ChangPalace.jpg" },

        { name: "6. Lotte World", description: `A large amusement park with rides, a shopping complex, and an ice-skating rink.
    This attraction costs:
        Adult: 57,000₩ (≈ $40)
        Child: 47,000₩ (≈ $33)`, 
         image: "images/seoul/LotteWorld.jpg" },

        { name: "7. Insadong", description: `A bustling neighborhood full of traditional Korean handicrafts, souvenirs, food, and teahouses.
    This attraction is FREE`, 
         image: "images/seoul/Insadong.jpg" },

        { name: "8. Cheonggyecheon Stream", description: `A restored stream running through the heart of Seoul, a popular spot for a restful break!
    This attraction is FREE`, 
         image: "images/seoul/CheongStream.jpg" },

        { name: "9. COEX Aquarium", description: `One of South Korea’s largest aquariums, home to over 40,000 creatures from 650 species.
    This attraction costs:
        Adult: 32,000₩ (≈ $23)
        Child: 26,000₩ (≈ $18)`, 
         image: "images/seoul/COEXAquarium.jpg" },

        { name: "10. National Museum of Korea", description: `The largest museum in South Korea, featuring extensive Korean history and art.
    This attraction is FREE`, 
         image: "images/seoul/KoreaMuseum.jpg" }
    ];
    createAttractionElements(container, "Seoul", attractions, flightPrice);
}

/* Displays Cairo attractions 
Created by: Ved Patel */
function showCairoAttractions() {
    const container = document.getElementById("attractions-container");
    const flightPrice = "1,415" //Cairo Flight Expense
    const attractions = [
        { name: "1. Pyramid of Giza", description: `The Great Pyramid, Sphinx, and surrounding pyramids make this Egypt’s most iconic site. You can explore the desert plateau and enter select pyramids.
        This attraction costs: $4.75(Foreigners) and $1.19(Locals)`,
         image:"images/cairo/Pyramid-of-Giza.png" },
        
        { name: "2. Egyptian Museum", description: `Located in Tahrir Square, this museum holds thousands of artifacts, including King Tutankhamun’s golden mask and royal mummies.
    This attraction costs: $3.96(Foreigners) and $0.59(Locals)`, 
         image: "images/cairo/Egyptian-Museum.png" },
        
        { name: "3. Cairo Citadel", description: `A large medieval fortress with sweeping views of Cairo, housing the Mosque of Muhammad Ali and several museums.
    This attraction costs: $3.57(Foreigners) and $0.59(Locals)`, 
         image: "images/cairo/Cairo-Citadel.png" },
        
        { name: "4. Al-Azhar Mosque", description: `One of the world’s oldest Islamic universities, featuring stunning minarets and a peaceful courtyard.
    This attraction is FREE for everyone to visit`, 
         image: "images/cairo/Al-Azhar-Mosque.png" },
        
        { name: "5. Khan El-Khalili Bazaar", description: `Historic marketplace filled with souvenirs, spices, silver, lamps, and traditional cafes like El Fishawy.
    This attraction is FREE for everyone to visit`, 
         image: "images/cairo/Khan-El-Khalili-Bazaar.png" },
        
        { name: "6. Coptic Cairo", description: `This area features ancient Christian churches like the Hanging Church and the Coptic Museum, showcasing Egypt’s early Christian heritage.
    This attraction is FREE for everyone to visit except the mueseum costs $1.98 to enter`, 
         image: "images/cairo/Coptic-Cairo.png" },
        
        { name: "7. Al-Muizz Street", description: `A pedestrian street lined with medieval mosques and palaces, known for its rich Islamic architecture.
    It is FREE to walk around but some sites cost $1.98`, 
         image: "images/cairo/Al-Muizz-Street.png" },
        
        { name: "8. Manial Palace", description: `A hidden gem combining Ottoman and Moorish design, with beautiful gardens and royal exhibits.
    This attraction costs: $1.98(Foreigners) and $0.20(Locals)`, 
         image: "images/cairo/Manial-Palace.png" },
        
        { name: "9. National Museum of Egyptian Civilization (NMEC)", description: `A modern museum featuring pharaonic artifacts and the famous Royal Mummies Hall. 
    This attraction costs: $4.75(Foreigners) and $1.19(Locals)`, 
         image: "images/cairo/NMEC.png" },
        
        { name: "10. Nilometer", description: `An ancient Nile-level measuring system from the 9th century, located on Roda Island.
    This attraction costs: $1.19(Foreigners) and $0.20(Locals)`,
         image: "images/cairo/Nilometer.png" }
    ];
    createAttractionElements(container, "Cairo", attractions, flightPrice);
}
