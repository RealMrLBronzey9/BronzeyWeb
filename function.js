"use strict";

/*
---------------------------------------------
    Bronzey Webserver Javascript Stuff
---------------------------------------------
*/


// Button Functions

function buttonDontClickMe(){
    
    let messages = ["Stop", "What are you doing??", "I said STOP!!", "NO MORE!", "If you continue this I will have to..", "Do you not understand??", "I AM WARNING YOU TO STOP!!", "Last Warning!!", "3", "2", "1", "Please I am begging you!", "Fine..", "If you continue after this..", "I have no choice now", "Sorry but.."];
        
    for (let i = 0; i < messages.length; i++){
        alert(messages[i]);
    }
    let rickRollWindow = window.open("https://youtu.be/dQw4w9WgXcQ?si=bb9Y2g4ht0VFlbcP");
    
    // Check if rick roll window did not get popup blocked
    if(!rickRollWindow || rickRollWindow.closed || typeof rickRollWindow.closed=='undefined'){
        // pop up blocked
        alert("stupid pop up blocked bruh...");
    }
    
}

function buttonChangeBackground(){
    let backgrounds = [
        "Images/backgrounds/BronzeyMain.jpg", 
        "Images/backgrounds/Philippines.png",
        "Images/backgrounds/WebsiteOld.png",
        "Images/backgrounds/enveedea.png",
        "Images/backgrounds/Vbuvksbot.png",
        "Images/backgrounds/Windows10.png",
        "Images/backgrounds/furinacrop.png",
        "Images/backgrounds/nebula.jpg",
        "Images/backgrounds/taiwangpt.png"

    ];
    let index = Math.floor(Math.random() * backgrounds.length);
    document.body.style.background = `url(${backgrounds[index]})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";



}

function buttonPlaySound(){
    let sounds = [
        "sounds/effects/bruh.mp3",
        "sounds/effects/metalpipe.mp3",
        "sounds/effects/congratyouwon.mp3",
        "sounds/effects/therooook.mp3",
        "sounds/effects/vineboom.mp3",
        "sounds/effects/waterphone.mp3",
        "sounds/effects/uacwin10.mp3",
        "sounds/effects/xpshutdown.mp3"
 ]  
    let index = Math.floor(Math.random() * sounds.length);
    let sound = new Audio(sounds[index]);
    sound.play();
}

let hi = 0; // hi button var
function buttonHi(){
    let button = document.getElementById("hi-button");
    hi++;
    switch (hi){
        case 1:
            button.style.backgroundColor = "rgb(195,255,105)";
            button.innerHTML = "Oww 🥺";
            break;

        case 2:
            button.style.backgroundColor = "rgb(231,255,71)";
            button.innerHTML = "Noo! 😢";
            break;

        case 3:
            button.style.backgroundColor = "rgb(255,195,56)";
            button.innerHTML = "Stop!! 😟";
            break;

        case 4:
            button.style.backgroundColor = "rgb(255,119,51)";
            button.innerHTML = "STOP NOW! 😠";
            button.style.fontSize = "25px";
            break;
        
        case 5:
            button.style.backgroundColor = "rgb(255,91,66))";
            button.innerHTML = "1 More Time!! 😡";
            button.style.fontSize = "20px";
            break;
       
        default:
            button.style.backgroundColor = "rgb(47, 175, 47)";
            button.innerHTML = "Hi! 😀";
            button.style.fontSize = "30px";
            hi = 0;
            window.open("https://youtu.be/ACFuf4qrhDY?si=laI2yZSrYzxdj0Hi");
            break;
        }
}

// ----- Run After Load -----
document.addEventListener("DOMContentLoaded", function(event){
    buttonChangeBackground();
})