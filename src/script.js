// Declare variables below to save the different divs of your story.

let btn1 = document.querySelector('.option-one');
let btn2 = document.querySelector('.option-two');
let testText = document.querySelector('.test');
let bg = document.querySelector('body')
let image = document.querySelector('.story-image')
let para = document.querySelector('p')
let warntext = document.querySelector('.warning')

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
            changeBtnText('Go to Mission Control', 1);
            image.src = "src/Ship.png"
            bg.style.background = "" // Change background to ship TODO: Add photo of the ship.
            para.innerHTML = "You arrive on the ship after your training. In front of you, you see the Armory to your left, and the Mission control center to your left. Which one do you choose?"
            warntext.style.display = 'block';
            break;
        case "Go to Armory":

            para.innerHTML = "You don't have enough samples to buy anything."
            btn2.style.display = "none";
            image.src = 'src/menu.jpg'
            changeBtnText("Go Back", 0);
            btn1.addEventListener("click", function() { // WARN: USER COULD GO INTO RECURSIVE LOOP
                changeBtnText('Go to Armory', 0)    // Fix? This whole thing would have to be controlled by states in order to work.
                changeBtnText('Go to Mission Control', 1);
                image.src = "src/Ship.png"
                para.innerHTML = "You arrive on the ship after your training. In front of you, you see the Armory to your left, and the Mission control center to your left. Which one do you choose?"
                btn2.style.display = "inline-block";
            });
            break;
        case "Crimsica (Termind Planet)":


            para.innerHTML = "You've chosen to go to the bug planet, here you are cleaning out bug holes. During your mission, you see a charger and a Bile Titan. Which one do you take on first?";
            changeBtnText('Charger', 0);
            changeBtnText('Bile Titan', 1);
            image.src = "src/biletitanandcharger.webp"
            break;

    }

});

btn2.addEventListener('click', function() {

    switch (btn2.textContent) {
        case "Refuse and continue your life as a citizen":
            btn1.style.display = "none";
            btn2.style.display = "none";
            para.innerHTML = "You died! Refresh the page to go back!"
            image.src = "src/death.png"
            break;
        case "Go to Mission Control":
            changeBtnText("Crimsica (Termind Planet)", 0);
            changeBtnText("Vernen Wells(Automaton Planet)", 1);
            para.innerHTML = "You chose to go to the Mission Center, a place where you can choose where you want to spread democracy, upon walking up to it, it shows a hologram of 2 planets. ";
            break;

    }
})

            // btn1.addEventListener('mouseover', function() {
            //     image.src = 'src/termindplanet.png'
            // })
// Code doesn't work correctly

btn1.addEventListener('mouseover', function() {
    switch (btn1.textContent){
        case 'Crimsica (Termind Planet)':
            image.src = 'src/termindplanet.png';
    }
})


btn2.addEventListener('mouseover', function() {
    switch (btn2.textContent){
        case 'Vernen Wells(Automaton Planet)':
            image.src = 'src/BotPlanet.png';
    }
})

