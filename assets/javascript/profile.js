const somethingWrongLinks = document.querySelectorAll(".myprofile1")

somethingWrongLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

    window.location.href="../view/profile.html";
});
});