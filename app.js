$(() => {
  // const prompt = require("prompt-sync")({ sigint: true });

  // Array of words to guess from
  const words = ["javascript", "hangman", "game", "programming", "openai"];
  // Choosing the words from the array
  let word = words[Math.floor(Math.random() * words.length)];

  //This is an array that will be used to display the letters that you have correct
  let wordArray = word.split("");

  //This will end the game when you guess the word
  let correctLetters = [];

  // Create an array to store the guessed letters
  let guessedLetters = [];

  // Variable to track the number of attempts
  let attempts = 10;

  let stillPlaying = true;

  const $attempts = $("<h3>").text(`Attempts: ${attempts}`);
  $("body").append($attempts);
  const $display = $("<p>");
  $("body").append($display);
  $getLetters = $("<p>");
  $("body").append($getLetters);
  // Function to start the game
  // const username = prompt("What is your name? ");
  // console.log(`Your name is ${username}`);

  function startGame() {
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
    $("#submit").on("click", () => {
      const $guess = $("#guess").val();
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
        // $("body").append($attempts);
      }
      displayWord();
    });
    // }
  }
  startGame();

  // if (!attempts) console.log(`Game over! The correct word was ${word}.`);

  // Function to display the current state of the word
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
    // console.log(guessedLetters.sort());

    if (!display.includes("_")) {
      //let playAgain = prompt("You win! Play again? (Y/N)").toLowerCase();
      const $youWin = $("<h3>").text("You win!");
      const $button = $("<button>")
        .text("Play again")
        .on("click", () => {
          location.reload();
        });
      $("body").append($youWin);
      $("body").append($button);
      //if (playAgain === "y") startGame();
      //else stillPlaying = false;
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

  //COMMENT

  //Wilson's comment
  //Wilson's new comment

  // $("guess").val();

  // Function to process the user's guess
  // function guessLetter(letter) {
  //   if (
  //     guessedLetters.includes(letter) ||
  //     guess.length !== 1 ||
  //     typeof letter !== "string" ||
  //     false
  //   ) {
  //     console.log("Invalid answer");
  //     return;
  //   }
  //   if (word.includes(letter)) {
  //     console.log("Correct guess!");
  //     guessedLetters.push(letter);
  //     correctLetters.push(letter);
  //   } else {
  //     attempts--;
  //     console.log(`Nope :( Try again.`);
  //     guessedLetters.push(letter);
  //   }
  //   displayWord();
  // }
});
