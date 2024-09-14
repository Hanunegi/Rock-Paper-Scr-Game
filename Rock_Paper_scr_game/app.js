// Initialize scores for the user and the computer
let yourscore = 0;
let compscore = 0;

// Select all elements with the class "choice" (e.g., rock, paper, scissors)
const choices = document.querySelectorAll(".choice");

// Function to generate a random choice for the computer
const gencompchoice = () => {
    // Define possible choices for the computer
    const options = ["rock", "paper", "scissors"]; // Corrected from "scr" to "scissors"
    // Generate a random index to select one of the options
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

// Function to determine the winner based on user and computer choices
const determineWinner = (userchoice, compchoice) => {
    // Check if the choices are the same (result is a draw)
    if (userchoice === compchoice) {
        return "draw";
    } 
    // Check if the user wins (rock beats scissors, paper beats rock, scissors beats paper)
    else if (
        (userchoice === "rock" && compchoice === "scissors") ||
        (userchoice === "paper" && compchoice === "rock") ||
        (userchoice === "scissors" && compchoice === "paper")
    ) {
        return "user";
    } 
    // If none of the above, the computer wins
    else {
        return "computer";
    }
};

// Function to play a game round and update scores and messages
const playgame = (userchoice) => {
    // Get the computer's choice
    const compchoice = gencompchoice();
    console.log("User chooses:", userchoice); // Log the user's choice
    console.log("Computer chooses:", compchoice); // Log the computer's choice

    // Determine the result of the game
    const result = determineWinner(userchoice, compchoice);
    
    // Update scores and message based on the result
    if (result === "user") {
        yourscore++; // Increment user's score
        messageDisplay.textContent = `You win! ${userchoice} beats ${compchoice}.`; // Display win message
    } else if (result === "computer") {
        compscore++; // Increment computer's score
        messageDisplay.textContent = `You lose! ${compchoice} beats ${userchoice}.`; // Display loss message
    } else {
        messageDisplay.textContent = "It's a draw!"; // Display draw message
    }

    // Update the displayed scores
    yourscoreDisplay.textContent = yourscore;
    compscoreDisplay.textContent = compscore;
};

// Attach click event listeners to each choice element
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Get the user's choice based on the clicked element's ID
        const userchoice = choice.getAttribute("id");
        // Play the game with the user's choice
        playgame(userchoice);
    });
});

// Get elements from the DOM to display scores and messages
const yourscoreDisplay = document.getElementById("yourscore"); // Element to display the user's score
const compscoreDisplay = document.getElementById("compscore"); // Element to display the computer's score
const messageDisplay = document.getElementById("msg"); // Element to display game messages
