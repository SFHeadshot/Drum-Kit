document.addEventListener('keydown', logKey); // Adding an Keyboard Event Handler

var keys = document.querySelectorAll(".drum"); // Selecting Drum Keys
var numberOfDrumKeys = document.querySelectorAll(".drum").length; // Getting Total Number Drum Keys 

for(var i =0; i <= numberOfDrumKeys; i++)
{
    keys[i].addEventListener("click", handleClick);  // Add event listener to each drum key
}

function handleClick(){

    var clickedButton = this.innerHTML;   // Gets which button was clicked

    makeSound(clickedButton); // Calls Sound Function
    buttonAnimation(clickedButton); // For Animation
}

function logKey(event)   //Keyboard Input Event Handler
{ 
    makeSound(event.key); // Sends Keyboard Input to sound maker
    buttonAnimation(event.key); // For Animation
}

function makeSound(key) {

    switch (key)   // Switch to decide depending on click what sound to click
    {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");  // Adds pressed Class

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);    // Removes pressed class after an interval 
}
