document.addEventListener("DOMContentLoaded", function() {
    const cardWrappers = document.querySelectorAll(".card-wrapper"); // Select all card wrappers
    const loading = document.createElement("h3");
    loading.textContent = "Loading...";
    cardWrappers[0].appendChild(loading); // Append loading indicator to the first card wrapper

    const fetchPromise = fetch("https://api.rawg.io/api/games?key=47124e8a22c54ad394c0b84834a2a8ee", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    fetchPromise.then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }).then(parsedData => {
        const promises = [];

        parsedData.results.forEach((game, index) => {
            const promise = fetch(`https://api.rawg.io/api/games/${game.id}?key=47124e8a22c54ad394c0b84834a2a8ee`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch game data: ${response.status}`);
                }
                return response.json();
            }).then(gameDetail => {
                const currentIndex = index % cardWrappers.length; // Calculate current index for distributing games evenly
                const currentCardWrapper = cardWrappers[currentIndex];

                const div = document.createElement("div");
                div.classList.add("card");

                const img = document.createElement("img");
                img.src = gameDetail.background_image;
                img.alt = gameDetail.name;

                const h3 = document.createElement("h3");
                h3.textContent = gameDetail.name;

                const releaseDate = document.createElement("p");
                releaseDate.textContent = `Release Date: ${gameDetail.released}`;

                const rating = document.createElement("p");
                rating.textContent = `Rating: ${gameDetail.rating}`;

                const viewProfileBtn = document.createElement("button");
                viewProfileBtn.textContent = "View Details";
                viewProfileBtn.classList.add("view-profile-btn");
                // viewProfileBtn.id.add("someThingWrong2");


                // Apply styles for card and button
                div.style.border = "1px solid #ddd";
                div.style.borderRadius = "10px";
                div.style.padding = "20px";
                div.style.margin = "10px";
                div.style.textAlign = "center";
                div.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

                viewProfileBtn.style.border = "none";
                viewProfileBtn.style.borderRadius = "5px";
                viewProfileBtn.style.padding = "8px 16px";
                viewProfileBtn.style.marginTop = "10px";
                viewProfileBtn.style.backgroundColor = "#4267B2"; // Facebook blue color
                viewProfileBtn.style.color = "#fff"; // White text color
                viewProfileBtn.style.cursor = "pointer";

                viewProfileBtn.addEventListener("mouseenter", function() {
                    viewProfileBtn.style.backgroundColor = "#365899"; // Darker blue color
                });
                viewProfileBtn.addEventListener("mouseleave", function() {
                    viewProfileBtn.style.backgroundColor = "#4267B2"; // Reset background color
                });

                div.appendChild(img);
                div.appendChild(h3);
                div.appendChild(releaseDate);
                div.appendChild(rating);
                div.appendChild(viewProfileBtn);

                currentCardWrapper.appendChild(div);
            }).catch(error => {
                console.error('Error fetching game data:', error);
            });

            promises.push(promise);
        });

        // Wait for all promises to resolve
        Promise.all(promises).then(() => {
            // Remove loading indicator once all data is fetched
            cardWrappers[0].removeChild(loading);
        });
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
});
