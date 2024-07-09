document.addEventListener("DOMContentLoaded", function() {
    const cardWrappers = document.querySelectorAll(".card-wrapper"); // Select all card wrappers
    const loading = document.createElement("h3");
    loading.textContent = "Loading...";
    cardWrappers[0].appendChild(loading); // Append loading indicator to the first card wrapper

    const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users", {
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

        parsedData.forEach((user, index) => {
            const promise = fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch user data: ${response.status}`);
                }
                return response.json();
            }).then(userDetail => {
                const currentIndex = index % cardWrappers.length; // Calculate current index for distributing users evenly
                const currentCardWrapper = cardWrappers[currentIndex];

                const div = document.createElement("div");
                div.classList.add("card");

                const h3 = document.createElement("h3");
                h3.textContent = userDetail.name;

                const email = document.createElement("p");
                email.textContent = `Email: ${userDetail.email}`;

                const phone = document.createElement("p");
                phone.textContent = `Phone: ${userDetail.phone}`;

                const viewProfileBtn = document.createElement("button");
                viewProfileBtn.textContent = "View Groups";
                viewProfileBtn.classList.add("view-profile-btn");

                // Apply styles for card and button
                div.style.border = "1px solid #ddd";
                div.style.borderRadius = "10px";
                div.style.padding = "20px";
                div.style.margin = "10px";
                div.style.textAlign = "center";
                div.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

                viewProfileBtn.style.border = "none";
                viewProfileBtn.style.borderRadius = "5px";
                viewProfileBtn.style.padding = "8px 10px";
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

                div.appendChild(h3);
                div.appendChild(email);
                div.appendChild(phone);
                div.appendChild(viewProfileBtn);

                currentCardWrapper.appendChild(div);
            }).catch(error => {
                console.error('Error fetching user data:', error);
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
