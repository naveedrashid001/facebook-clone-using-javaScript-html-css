const somethingWrongLinks = document.querySelectorAll(".somethingwrong");

// Add click event listener to each element
somethingWrongLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Navigate to the same page for all elements with class "somethingwrong"
        window.location.href = "../leftSide/serverBusy.html";
    });
});