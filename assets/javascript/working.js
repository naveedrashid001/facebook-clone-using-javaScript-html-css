const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "../view/MainLayout.html";
    });
});
