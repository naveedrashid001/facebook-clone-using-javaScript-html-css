// const profile = document.getElementById("profile")

// profile.addEventListener("click", function(){
//     window.location.href="../view/profile.html";
// })

// const profile2 = document.getElementById("profile2")

// profile2.addEventListener("click", function(){
//     window.location.href="../view/profile.html";
// }) 

// const profile3 = document.getElementById("profile-3")

// profile3.addEventListener("click", function(){
//     window.location.href="../view/profile.html";
// })

const friend = document.getElementById("friend");

friend.addEventListener("click", function(){
    window.location.href="../leftSide/friendList.html";
}) 

const empty = document.getElementById("empty");

empty.addEventListener("click", function(){
    window.location.href="../leftSide/empty.html";
})

const group=document.getElementById("group");

group.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "../leftSide/group.html";
});

const empty2 = document.getElementById("empty-2");

empty2.addEventListener("click", function(){
    window.location.href="../leftSide/empty.html";
})

const games=document.getElementById("games");

games.addEventListener("click", function(event){
    event.preventDefault(); 
    window.location.href = "../leftSide/games.html";
})

// log out 
const closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function(){
    
    window.location.href="../index.html"
})
 

const somethingWrongLinks = document.querySelectorAll(".somethingwrong");

somethingWrongLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        window.location.href = "../leftSide/serverBusy.html";
    });
}); 


