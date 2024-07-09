const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault(); 
    window.location.href = "./view/mainLayout.html";
});

const CreateNewAccount = document.getElementById("CreateNewAccount");

CreateNewAccount.addEventListener("click", function(event){
    event.preventDefault(); 
    window.location.href = "./view/signupPage.html";
}) 

//  go to we are currently working on this page 
const forgetenPassword = document.getElementById("forgetenPassword");

forgetenPassword.addEventListener("click", function(event){
    event.preventDefault(); 
    window.location.href = "./leftSide/someThingWrong.html";
})