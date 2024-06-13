// Declare variables below to save the different divs of your story.

let btn1 = document.querySelector('.option-one');
let btn2 = document.querySelector('.option-two');
let testText = document.querySelector('.test');
let bg = document.querySelector('body')
let image = document.querySelector('.story-image')
let para = document.querySelector('p')

function changeBtnText(text, index) {
    selBtn(index).innerHTML = text; // changes the value of the 'innerHTML' to what ever we need it to be.
}

btn1.innerHTML = "Join and Enlist to become a Helldiver";
btn2.innerHTML = "Refuse and continue your life as a citizen";

function selBtn(index) {
    let btn = [btn1, btn2] // Put buttons into an array

    let btnsel = btn[index] // store the btn index into btnsel, and then 
    return btnsel // return value to other functions
}

btn1.addEventListener('click', function() {
    // changeBtnText("test for function", 0); // Did not want hundreds of buttons cluttering up my file, decided to put myself through hell and make the button change the text, and then just check whats inside of the text to change it.
    switch (btn1.innerHTML) { // Do one side first, as bad as this maybe, I don't care any more.
        case "Join and Enlist to become a Helldiver": // first ending 
            changeBtnText('Go to Armory', 0);
            changeBtnText('Go to Misson Control', 1);
            image.src = "https://imgs.search.brave.com/ujjLyopeYiq4Tss0F7X6vADc0MvV_Iy82OaEpi2UtHY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mYWtl/aW1nLnBsLzYwMHg0/MDA.jpeg"
            bg.style.background = "" // Change background to ship TODO: Add photo of the ship.
            para.innerHTML = "You arrive on the ship after your training, you own this ship now. What are you going to name it."
            break;
        case "Go to Armory":
            para.innerHTML = "You don't have enough samples to buy anything."
            btn2.style.display = "none";
            changeBtnText("Go Back", 0);
            btn1.addEventListener("click", function() {
                changeBtnText('Go to Armory', 0)
                changeBtnText('Go to Misson Control', 1);
                image.src = "https://imgs.search.brave.com/ujjLyopeYiq4Tss0F7X6vADc0MvV_Iy82OaEpi2UtHY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mYWtl/aW1nLnBsLzYwMHg0/MDA.jpeg"
                para.innerHTML = "You arrive on the ship after your training, you own this ship now. What are you going to name it."
                btn2.style.display = "inline-block";
            })
            break;

    }

});

btn2.addEventListener('click', function() {
    switch(btn2.innerHTML) {
        case "Refuse and continue your life as a citizen": 
            btn1.style.display = "none";
            btn2.style.display = "none";

            para.innerHTML = "You died! Refresh the page to go back!"
            image.src = "https://imgs.search.brave.com/y1tSkzZk_qPAQSQsX1oJPviOrHagSrdCug4c6i2blJc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P3Y9MTUzMDEyOTA4/MQ"
            break;
        case "Go to Mission Control":
            image.src //NOTE: MAKE SURE TO UPDATE TEH BACKGROUND WITH PHOTO OF MISSION CONTROL
            changeBtnText("Text", 0);
            changeBtnText("Text", 1) ;
            para.textContent = "Test";
    }
})
