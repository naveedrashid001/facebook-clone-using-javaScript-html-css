const somethingWrongLinks = document.querySelectorAll(".myprofile1")

somethingWrongLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

    window.location.href="../view/profile.html";
});
});

const messagenger = document.getElementById("messagenger")

messagenger.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="./messenger.html";
})