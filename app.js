$(() => {
  // const prompt = require("prompt-sync")({ sigint: true });

  // Array of words to guess from
  const words = ["javascript", "hangman", "game", "programming", "openai"];
  // Choosing the words from the array
  let word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  //This is an array that will be used to display the letters that you have correct
  let wordArray = word.split("");

  //This will end the game when you guess the word
  let correctLetters = [];

  // Create an array to store the guessed letters
  let guessedLetters = [];

  // Variable to track the number of attempts
  let attempts = 10;

  const $attempts = $("<h2>").text(`Attempts: ${attempts}`);
  $("body").append($attempts);
  const $display = $("<p>");
  $("body").append($display);
  $getLetters = $("<p>");
  $("body").append($getLetters);

  $("input").on("click", guessLetter);
  $("input").on("click", function () {
    $(this).addClass("bounce-out-top");
  });

  function guessLetter() {
    const $guess = $(this).val();
    console.log($guess);
    if (
      guessedLetters.includes($guess) ||
      $guess.length !== 1 ||
      typeof $guess !== "string" ||
      false
    ) {
      console.log("Invalid answer");
      return;
    }
    if (word.includes($guess)) {
      console.log("Correct guess!");
      guessedLetters.push($guess);
      correctLetters.push($guess);
    } else {
      attempts--;
      console.log(`Nope :( Try again.`);
      guessedLetters.push($guess);
      console.log(attempts);
      $attempts.text(`Attempts: ${attempts}`);
    }
    displayWord();
  }

  function displayWord() {
    let display = "";

    for (let char of wordArray) {
      if (correctLetters.includes(char)) display += char;
      else {
        display += " _ ";
      }
    }
    $display.text(display);
    $getLetters.text(guessedLetters.sort());

    if (!display.includes("_")) {
      const $youWin = $("<h3>").text("You win!");
      const $button = $("<button>")
        .text("Play again")
        .on("click", () => {
          location.reload();
        });
      $("body").append($youWin);
      $("body").append($button);
    } else if (attempts === 0) {
      const $button = $("<button>")
        .text("Play again")
        .on("click", () => {
          location.reload();
        });
      $youLose = $("<h3>").text(`You lost! The word was "${word}"`);
      $("body").append($youLose);
      $("body").append($button);
    }
  }
});

// word = words[Math.floor(Math.random() * words.length)];

// wordArray = word.split("");

// console.log(wordArray);

// correctLetters = [];

// guessedLetters = [];

// attempts = 10;

// while (attempts > 0 && stillPlaying) {
// console.log("**********");
// guess = prompt("Please guess a letter: ");
// guessLetter(guess);

// console.log(`Attempts: ${attempts}`);
