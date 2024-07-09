document.addEventListener("DOMContentLoaded", function() {
    const cardWrappers = document.querySelectorAll(".card-wrapper"); // Select all card wrappers
    const loading = document.createElement("h3");
    loading.textContent = "Loading...";
    cardWrappers[0].appendChild(loading); // Append loading indicator to the first card wrapper

    const fetchPromise = fetch("https://apilist.fun/api/food-api/meals", {
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
    }).then(meals => {
        const promises = [];

        meals.forEach((meal, index) => {
            const currentIndex = index % cardWrappers.length; // Calculate current index for distributing meals evenly
            const currentCardWrapper = cardWrappers[currentIndex];

            const div = document.createElement("div");
            div.classList.add("card");

            const h3 = document.createElement("h3");
            h3.textContent = meal.name;

            const p = document.createElement("p");
            p.textContent = `Category: ${meal.category}, Area: ${meal.area}`;

            div.appendChild(h3);
            div.appendChild(p);

            currentCardWrapper.appendChild(div);
        });

        // Remove loading indicator once all data is fetched
        cardWrappers[0].removeChild(loading);
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
});
