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
    window.open("https://youtu.be/dQw4w9WgXcQ?si=bb9Y2g4ht0VFlbcP");
    alert("stupid pop up blocked bruh...");
}

function buttonChangeBackground(){
    let backgrounds = [
        "Images/backgrounds/BronzeyMain.jpg", 
        "Images/backgrounds/Philippines.png",
        "Images/backgrounds/WebsiteOld.png"
    ];
    let index = Math.floor(Math.random() * 3);
    document.body.style.background = `url(${backgrounds[index]})`;

}