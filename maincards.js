
const topics = ["Name of a rabbi", "Three letter word", "Neighborhood in Jerusalem", "Country", "7 Words that start with this letter", "Profession", "5 Letter word", "Mans name not found in the bible", "Woman from the bible", "Company", "Person, place, and thing", "Family member", "Part of body", "State", "Celebrity", "Jewish celebrity", "Singer", "Found in nature", "3 words the start with ee sound", "Food ingrediant", "Found in a store", "Head of state", "Something electric", "Something in this room", "Someones friend", "Activity"]
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const displayLetter = document.getElementById("display-letter"); //game-box
const changeLetter = document.getElementById("change-letter");
const playerInput = document.getElementById("player-input");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("answer-submit");
const nameList = document.getElementById("player-input-name-list");
const randomLetter = document.getElementsByClassName("letter")[0];
const randomTopic = document.getElementsByClassName("topic")[0];
const addNameButton = document.getElementById("addNameButton");
const playerList = document.getElementById("playerList");
const myModal = document.getElementById("myModal")
const restart = document.getElementById("restart-game");
const letterInBox = document.getElementsByClassName("letter");
const saveButton = document.getElementById("saveButton");
const names = document.getElementById("namesContainer")
const score = [];
const listItem = document.createElement("li");
const nameListValue = nameList.value;



console.log(addNameButton);
console.log(nameList);
console.log(nameListValue);


window.addEventListener("load", function () {
  document.getElementById("myModal").style.display = "block";
});


function generateRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
};

function generateRandomTopic() {
  return topics[Math.floor(Math.random() * topics.length)];
};




// add players names 
  addNameButton.addEventListener("click", function (event) {
    event.preventDefault();
    const nameListValue = nameList.value;
    console.log(nameListValue);
    if (nameListValue.length === 0) {
      alert("Please add players name");
      return;
    }
    const listItem = document.createElement("li");
    listItem.textContent = nameListValue;
    playerList.appendChild(listItem);
    console.log(listItem);
    nameList.value = " ";

    let names = localStorage.getItem("names");
    if (names) {
      names = names.split(",");
      names.push(nameListValue);
    } else {
      names = [nameListValue];
    }
    localStorage.setItem("names", names.join(","));
  });
  

  
  



//  WORKING
//function for when save players name happens, game will start

saveButton.addEventListener("click", function (e) {
  
  e.preventDefault();
  var names = document.querySelectorAll("#namesContainer input");
  var nameValues = [];
  for (var i = 0; i < names.length; i++) { 
  nameValues.push(names[i].value);
  }
  localStorage.setItem("names", nameValues.join(","));
  document.getElementById("myModal").style.display = "none";
  
  function generateRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
  };
  
  function generateRandomTopic() {
  return topics[Math.floor(Math.random() * topics.length)];
  };
  
  var randomLetter = generateRandomLetter();
  var randomTopic = generateRandomTopic();
  
  document.getElementsByClassName("letter")[0].innerHTML = randomLetter;
  document.getElementsByClassName("topic")[0].innerHTML = randomTopic;
  console.log( );
});




//WORKING
//changes letter in box when change letter button is clicked  
changeLetter.addEventListener("click", function (){
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  function generateRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
  };

  var randomLetter = generateRandomLetter();
  
  if (letterInBox.length > 0) {
    letterInBox[0].innerHTML = randomLetter;
  }
});



//WORKING
// restarting game 
restart.addEventListener("click", function(){
  if (confirm("Are you sure you want to restart this game?")) {
    location.reload();
  }
});




















// submitButton.addEventListener("click", function () {
// const name = playerInput.value;

// let playerFound = false;
// const playerList = document.getElementById("playerList");
// const players = playerList.getElementsByTagName("li");
// for (let i = 0; i < players.length; i++) {
// if (players[i].textContent === name) {
// playerFound = true;
// players[i].textContent = name + " (1)";
// break;
// }
// }
// if (!playerFound) {
// alert("Player not found");
// }
// });







submitButton.addEventListener("click", function (e) {
e.preventDefault()
let playerInputValue = playerInput.value;
let playerFound = false;
console.log(playerInputValue);

for (let i = 0; i < playerList.length; i++) 
  console.log(nameListValue == playerInputValue);
  console.log(nameList.value);
  console.log(nameListValue);
  console.log(playerInputValue); 
  {
if (nameListValue == playerInputValue) {
playerFound = true;
console.log("player found");
let scoreStart = playerList[i].textContent.indexOf("(") + 1;
let scoreEnd = playerList[i].textContent.indexOf(")");
let score = parseInt(playerList[i].textContent.substring(scoreStart, scoreEnd));
score++;
playerList[i].textContent = playerInputValue + " (" + score + ")";
// break;
}
}

if (!playerFound) {
alert("Player not found, please pick a players name from the players list of names");
} else {
playerInput.value = "";
//answerInput.value = "";
if (topics.length === 0) {
alert("All topics have been shown");
let maxScore = 0;
let winner = "";
for (let i = 0; i < playerList.length; i++) {
let scoreStart = playerList[i].textContent.indexOf("(") + 1;
let scoreEnd = playerList[i].textContent.indexOf(")");
let score = parseInt(playerList[i].textContent.substring(scoreStart, scoreEnd));
if (score > maxScore) {
maxScore = score;
winner = playerList[i].textContent.split(" (")[0];
}
}
alert("The winner is " + winner + " with " + maxScore + " points");
return;
}
let randomIndex = Math.floor(Math.random() * topics.length);
let randomTopic = topics[randomIndex];
topics.splice(randomIndex, 1);
let randomLetter = letters[Math.floor(Math.random() * letters.length)];
topics.textContent = randomTopic + " starting with letter '" + randomLetter + "'";
}
});

















console.log(nameList.value)