// Declare variables below to save the different divs of your story.

let btn1 = document.querySelector('.option-one');
let btn2 = document.querySelector('.option-two');
let testText = document.querySelector('.test');
let bg = document.querySelector('body')
let image = document.querySelector('.story-image')
let para = document.querySelector('p')
let warntext = document.querySelector('.warning')
let vid = document.querySelector('video')


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
            break;

        case "Go Back": // PERF: Fixed weird recursive loop, just needed to add case statement lol. Seems to work fine and not break.
            changeBtnText('Go to Armory', 0);
            btn2.style.display = 'inline-block'
            changeBtnText('Go to Mission Control', 1);
            image.src = "src/Ship.png"
            bg.style.background = "" // Change background to ship TODO: Add photo of the ship.
            para.innerHTML = "You arrive on the ship after your training. In front of you, you see the Armory to your left, and the Mission control center to your left. Which one do you choose?"
            warntext.style.display = 'block';
            break;

        case "Crimsica (Termind Planet)":
            para.innerHTML = "You've chosen to go to the bug planet, here you are cleaning out bug holes. During your mission, you see a charger and a Bile Titan. Which one do you take on first?";
            changeBtnText('Charger', 0);
            changeBtnText('Bile Titan', 1);
            image.src = "src/biletitanandcharger.webp"
            break;

        case "Charger":
            //This is where you embed a video into the background of the page to play.
            image.style.display = "none";
            vid.style.display = 'inline-block';
            para.innerHTML = "You manage to kill the charger, but the bile titan notices you, starts to walk over towards you and crushes you with one of its legs. You died."
            btn2.style.display = "none";
            changeBtnText('Restart Game', 0)
            break;

        case "Restart Game":
            btn2.style.display = "inline-block";
            para.innerHTML = "You awake to your 16 birthday, something you've been waiting for all this time. You get out of your room and find your friends throwing you a party, during the party Super Earth Officals burst in and ask you a question. As is required by law by the Super Earth Government, every 16 year old is presented with the choice of joining the Helldivers and spreading Democracy. Will you join?"
            changeBtnText('Join and Enlist to become a Helldiver', 0)
            changeBtnText('Refuse and continue your life as a citizen', 1)
            image.src = "src/helldivershome.jpg"
            vid.style.display = "none";
            image.style.display = 'inline-block';
            break;

        case "Kill Rocket Devastator, and take out the Automaton factory.":
            para.innerHTML = "You end up taking out both at once. You realize that the extraction zone is nearby, you have 10 minutes left in the mission, do you continue fighting, or leave the mission.";
            changeBtnText("Leave and end up Liberating the planet", 0);
            changeBtnText("Continue fighting, lessening the number of Automatons on the planet.", 1);

            break;

        case "Leave and end up Liberating the planet":
            image.src = "src/images.jfif"
            para.innerHTML = "After leaving your mark on the planet, you end up leaving. Upon returning to the ship, you realize that you ended up Liberating the planet. You are commemorated for your work and skill on this mission."
            btn2.style.display = "none"
            changeBtnText("Restart Game", 0);
            
    }


});

btn2.addEventListener('click', function() {

    switch (btn2.textContent) {
        case "Refuse and continue your life as a citizen":
            changeBtnText('Restart Game', 0)
            btn2.style.display = "none";
            para.innerHTML = "You died! Refresh the page to go back!"
            image.src = "src/death.png"
            break;

        case "Go to Mission Control":
            changeBtnText("Crimsica (Termind Planet)", 0);
            changeBtnText("Vernen Wells(Automaton Planet)", 1);
            para.innerHTML = "You chose to go to the Mission Center, a place where you can choose where you want to spread democracy, upon walking up to it, it shows a hologram of 2 planets. ";
            warntext.style.display = 'none';
            break;

        case "Vernen Wells(Automaton Planet)":
            image.src = "src/betterautomaton.webp";
            para.innerHTML = "You land on the planet, and upon landing, theres an automaton outpost next to you. It starts dispensing out robots, and out comes multiple Devastators. One is actually a Rocket Devastator. What do you do?..."
            changeBtnText('Kill Rocket Devastator, and take out the Automaton factory.', 0);
            changeBtnText('Take out the Factory, but dont take out the Devastators', 1);
            break;

        case "Take out the Factory, but dont take out the Devastators":
            para.innerHTML = "You managed to take out the Factory from throwing a grenade into it, but after destroying it, you are hit by the rocket of a Devastator and die."
            btn2.style.display = "none";
            changeBtnText("Restart Game", 0);
            break;
        
        case "Continue fighting, lessening the number of Automatons on the planet.":
            para.innerHTML = "After a long battle, you end up dying on the planet. But, due to your valient efforts, Super Earth erects a statue in honor of what you did. You helped liberate the planet and make it free from Automaton control.";
            break;

        case "Bile Titan":
            para.innerHTML = "You end up killing the Bile titan, and upon killing it, it falls on the charger and kills it.";
            image.src = "src/biletitangif.webp";


    }
})

// btn1.addEventListener('mouseover', function() {
//     image.src = 'src/termindplanet.png'
// })
// Code doesn't work correctly

btn1.addEventListener('mouseover', function() {
    switch (btn1.textContent) {
        case 'Crimsica (Termind Planet)':
            image.src = 'src/termindplanet.png';
    }
})


btn2.addEventListener('mouseover', function() {
    switch (btn2.textContent) {
        case 'Vernen Wells(Automaton Planet)':
            image.src = 'src/BotPlanet.png';
    }
})

