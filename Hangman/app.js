var input = require('readline-sync');
var fs = require('fs');

var wrongGuesses = 0;
var round = 1;
var count = 0;
var score = 0;
var userInput;
var lifeline = "";
var lifeline1 = 0;
var lifeline2 = 0;
var lifeline3 = 0;

class Word {
    constructor(word, definition) {
        this.word = word;
        this.definition = definition;
    }
}

class WordCollection {
    constructor() {
        this.definitions = fs.readFileSync("definitions.txt", "ascii").replace(/(\r\n)/gm, "").split("., ");

        this.wordPool = fs.readFileSync("words.txt",'ascii').split(", ");

        this.orrAlphabets = "\nA B C D E F G H I J K L M \nN O P Q R S T U V W X Y Z\n";

        this.wordPlusDefinition = [];
        for (var i = 0; i < this.wordPool.length; i++) {
            this.wordPlusDefinition[i] = new Word(this.wordPool[i], this.definitions[i]);
        }
    }

    printHangman(numberOfWrongGuesses) {

        switch (numberOfWrongGuesses) {
            case 1:
                console.log(" _|_");
                console.log("|   |_____");
                console.log("|         |");
                console.log("|_________|\n");
                break;
            case 2:
                console.log("   ____ ");
                console.log("  |    |");
                console.log("  | ");
                console.log("  | ");
                console.log("  | ");
                console.log("  | ");
                console.log(" _|_");
                console.log("|   |_____");
                console.log("|         |");
                console.log("|_________|\n");
                break;

            case 3:
                console.log("   ____ ");
                console.log("  |    |");
                console.log("  |    O");
                console.log("  | ");
                console.log("  | ");
                console.log("  | ");
                console.log(" _|_");
                console.log("|   |_____");
                console.log("|         |");
                console.log("|_________|\n");
                break;

            case 4:
                console.log("   ____ ");
                console.log("  |    |");
                console.log("  |    O");
                console.log("  |    |");
                console.log("  | ");
                console.log("  | ");
                console.log(" _|_");
                console.log("|   |_____");
                console.log("|         |");
                console.log("|_________|\n");
                break;

            case 5:
                console.log("   ____ ");
                console.log("  |    |");
                console.log("  |    O");
                console.log("  |    |");
                console.log("  |   /");
                console.log("  | ");
                console.log(" _|_");
                console.log("|   |_____");
                console.log("|         |");
                console.log("|_________|\n");
                break;

            case 6:
                console.log("   ____ ");
                console.log("  |    |");
                console.log("  |    O");
                console.log("  |    |");
                console.log("  |   / \\");
                console.log("  | ");
                console.log(" _|_");
                console.log("|   |_____");
                console.log("|         |");
                console.log("|_________|\n");
                break;

            case 7:
                console.log("   ____ ");
                console.log("  |    |");
                console.log("  |    O");
                console.log("  |   /|");
                console.log("  |   / \\");
                console.log("  | ");
                console.log(" _|_");
                console.log("|   |_____");
                console.log("|         |");
                console.log("|_________|\n");
                break;

            case 8:
                console.log("   ____ ");
                console.log("  |    |");
                console.log("  |    O");
                console.log("  |   /|\\");
                console.log("  |   / \\");
                console.log("  | ");
                console.log(" _|_");
                console.log("|   |_____");
                console.log("|         |");
                console.log("|_________|\n");
                break;

        }

    }

    getRandomNumber(min, max) {
        var step1 = max - min + 1;
        var result = min + Math.floor(Math.random() * step1);
        return result;
    }

    createArrayOfNumbers(start, end) {
        var myArray = [];
        for (var i = start; i <= end; i++) {
            myArray[i] = i;
        }
        return myArray;
    }

    createArrayOfWords() {
        //create an array of numbers from 0 to 39
        var numbersArr = this.createArrayOfNumbers(0, 39);
        var myWordArray = [];

        //Pick 10 words randomly from a pool of 40 words and add them into an array called myWordArray
        for (var i = 0; i < 10; i++) {

            //get a random number from 0 to 39 and store it in randomIndex
            var randomIndex = this.getRandomNumber(0, numbersArr.length - 1);

            //get a random number from numbersArr array and store it in randomNumber
            var randomNumber = numbersArr[randomIndex];

            //Add the word at that index location into myWordArray
            myWordArray[i] = this.wordPlusDefinition[randomNumber];

            //remove that number from numbersArr array to prevent repetitions
            numbersArr.splice(randomIndex, 1);
        }

        return myWordArray;
    }

    getArrayOfUnderscores(word) {
        var dashesArr = [];

        //Print number of underscores equal to number of letters in the chosen word
        for (var i = 0; i < word.length; i++) {
            dashesArr[i] = "_ ";
        }

        return dashesArr;
    }

    activateLifelines(lifeline) {
        switch (lifeline) {
            case "1":
                if (lifeline1 > 0) {
                    console.log("You have used up lifeline 1.");
                    break;
                }
                for (var i = 0; i < arrayOfUnderscores.length; i++) {
                    switch (currentWordArr[i]) {
                        case "A":
                            arrayOfUnderscores[i] = "A ";
                            break;
                        case "E":
                            arrayOfUnderscores[i] = "E ";
                            break;
                        case "I":
                            arrayOfUnderscores[i] = "I ";
                            break;
                        case "O":
                            arrayOfUnderscores[i] = "O ";
                            break;
                        case "U":
                            arrayOfUnderscores[i] = "U ";
                            break;
                        default:
                            break;
                    }
                }
                lifeline1++;
                break;

            case "2":
                if (lifeline2 > 0) {
                    console.log("You have used up lifeline 2.");
                    break;
                }

                console.log("\nWord definition: " + arrayOf10Words[count].definition);
                lifeline2++;
                break;

            case "3":
                if (lifeline3 > 0) {
                    console.log("You have used up lifeline 3.");
                    break;
                }
                score++;
                round++;
                count++;

                if (round > 10) {
                    break;
                }

                this.proceedToNextWord();

                lifeline3++;
        }
    }

    proceedToNextWord() {
        console.log("\nWord " + round + "/10");

        //Pick the next word
        currentWord = arrayOf10Words[count].word;
        //console.log(currentWord);

        //Get new arrayOfUnderscores based on the next word
        arrayOfUnderscores = this.getArrayOfUnderscores(currentWord);

        //Reset alphabets to pick from
        alphabets = this.orrAlphabets;

        currentWordArr = currentWord.split("");
    }

    checkLetter() {
        //If letter is indeed found in the word, inform the user, update the underscore and update the alphabets
        for (var i = 0; i < arrayOfUnderscores.length; i++) {
            if (currentWordArr[i] == userInput) {
                arrayOfUnderscores[i] = userInput + " ";
            }
        }
        alphabets = alphabets.replace(userInput, " ");
        console.log("\nGood job! " + userInput + " is one of the letters!\n");
    }

}

function getUserInput(question) {
    return input.question(question);
}


var hangman = new WordCollection();


//Prints Welcome to Hangman
console.log("-= Welcome to Hangman =- \n");

//Ask user for his/her name
var playerName = getUserInput("Please enter your name: ");

//Tracks word count
console.log("\nWord " + round + "/10");

//Create an array of 10 randomly-picked words from wordPool
var arrayOf10Words = hangman.createArrayOfWords();
//console.log(arrayOf10Words);

//Pick a random word from the pool of words
var currentWord = arrayOf10Words[count].word;
//console.log(currentWord);
var alphabets = hangman.orrAlphabets;
var arrayOfUnderscores = hangman.getArrayOfUnderscores(currentWord);
var currentWordArr = currentWord.split("");

while (wrongGuesses < 8 && round < 11) {

    //Display underscores based on current word
    console.log("\n" + arrayOfUnderscores.join(""));

    //Displays aphabets to pick from
    console.log(alphabets);

    //Check if the user has finished guessing the current word, if true, move on to the next word
    if (!arrayOfUnderscores.includes("_ ")) {
        score++;
        round++;
        count++;

        if (round > 10) {
            break;
        }

        hangman.proceedToNextWord();

    }

    //else, continue asking the user for the next letter
    else {

        //Ask user to pick a letter
        userInput = getUserInput(playerName + "'s guess (Enter 9 for lifelines or 0 to pass): ").toUpperCase();

        if (userInput == "9") {
            if (lifeline1 > 0 && lifeline2 > 0 && lifeline3 > 0) {
                console.log("You have used up all your lifelines.");
            }
            else {
                lifeline = getUserInput("Enter 1 to show all vowels, 2 to show definition of the word or 3 to score and move on to the next word: ");

                hangman.activateLifelines(lifeline);
            }
        }
        else if (userInput == "0") {
            round++;
            count++;
            hangman.proceedToNextWord();
        }
        else {
            //Check if chosen word contains the letter
            if (currentWord.includes(userInput)) {
                hangman.checkLetter();
            }
            //If letter is NOT found in the word, inform the user and print the hangman structure
            else {
                wrongGuesses++;
                alphabets = alphabets.replace(userInput, " ");
                console.log("\nSorry. " + userInput + " is not a part of the word.\n");
                hangman.printHangman(wrongGuesses);
            }
        }
    }
}


//Display user's score
if (score == 10)
    console.log("\nCongratulations for guessing all ten words correctly!");

console.log("\nYour score is: " + score);








