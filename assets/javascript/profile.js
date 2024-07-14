const myprofile1 = document.querySelectorAll(".myprofile1");

myprofile1.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        window.location.href = "../view/profile.html";
    });
});

const messagengeron = document.querySelectorAll(".messagenger");
messagengeron.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "../view/messenger.html";
    });
});