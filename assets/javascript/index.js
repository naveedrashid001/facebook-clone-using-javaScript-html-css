const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault(); 
    window.location.href = "./view/mainLayout.html";
});
