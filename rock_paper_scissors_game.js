// 0 for Rock
// 2 for Scissors
// 5 for paper

function repeat(string, nTimes) {
  if (nTimes <= 0) {
    return "";
  }

  return string + repeat(string, nTimes - 1);
}

function getBox(string) {
  const line = repeat("―", string.length);
  return line + "\n" + string + "\n" + line;
}
const welcomeMessage = getBox("🪨🗒 ✂️ Welcome to ROCK PAPER SCISSORS ✂️ 🗒 🪨");
const rock = "\n✦ 0️ is for ROCK✊";
const paper = "\n✦ 5️ is for PAPER🖐";
const scissors = "\n✦ 2️ is for SCISSORS✌️\n";

console.log(welcomeMessage + "\nINSTRUCTIONS -" + rock + paper + scissors);

const tie = getBox("🤝Its a tie!");
const playerWin = getBox("🏆Congratulations! You won.");
const compWin = getBox("Ops! You Lost.🤞Better Luck Next Time.");
const invalid = getBox("❌ Invalid Choice.");

function decideWinner(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    return tie;
  }

  if (!(playerChoice === 0 || playerChoice === 5 || playerChoice === 2)) {
    return invalid;
  }

  if (playerChoice === 0) {
    return compChoice === 5 ? compWin : playerWin;
  }

  if (playerChoice === 5) {
    return compChoice === 2 ? compWin : playerWin;
  }

  if (playerChoice === 2) {
    return compChoice === 0 ? compWin : playerWin;
  }
}

function startPlaying() {
  const playerChoice = +prompt("Enter Your Choice (0,5,2) : ");
  let compChoice = Math.floor(Math.random() * 10) % 3;

  if (compChoice === 1) {
    compChoice = 5;
  }

  console.log("\nPlayer👩🏻  : " + playerChoice);
  console.log("Computer : " + compChoice);

  console.log(decideWinner(playerChoice, compChoice));

  if (confirm("\nDo you want to play new game?")) {
    startPlaying();
  } else {
    console.log(getBox("🙋🏻‍♀️GoodBye!"));
  }
}

const start = confirm("Do you want to start the game?");

if (start) {
  startPlaying();
} else {
  console.log(getBox("Hope You play next time!"));
}
