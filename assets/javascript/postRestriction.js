const postRestriction = document.querySelectorAll(".postRestriction");

// Add click event listener to each element
postRestriction.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Navigate to the same page for all elements with class "somethingwrong"
        window.location.href = "../leftSide/someThingWrong2.html";
    });
});
