const form = document.getElementById("form");
const emailinput = form.email;
const passwordinput = form.password;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!emailinput.value || !passwordinput.value){
        window.alert("Required field can't be empty")
        return false;
    }
    //  emailinput.value="";
    // passwordinput.value="";
    if(passwordinput.value.length<8){
        window.alert("Password must be atleast 8 charecter")
        return false;
    }

        window.location.href = "./view/mainLayout.html";
});

const CreateNewAccount = document.getElementById("CreateNewAccount");

CreateNewAccount.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./view/signupPage.html";
})

//  go to we are currently working on this page 
const forgetenPassword = document.querySelector(".forgetenPassword");

forgetenPassword.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./view/privaciy.html";
})