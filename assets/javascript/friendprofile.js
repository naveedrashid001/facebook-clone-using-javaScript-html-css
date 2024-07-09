
const friendprofile = document.querySelectorAll(".friendprofile");

// Add click event listener to each element
friendprofile.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Navigate to the same page for all elements with class "somethingwrong"
        window.location.href = "../leftSide/friendProfile.html";
    });
});

//  my profile 
