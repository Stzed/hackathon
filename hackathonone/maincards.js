
const topics = ["Name of a rabbi", "Three letter word", "Neighborhood in Jerusalem", "Country", "7 Words that start with this letter", "Profession", "5 Letter word", "Mans name not found in the bible", "Woman from the bible", "Company", "Person, place, and thing", "Family member", "Part of body", "State", "Celebrity", "Jewish celebrity", "Singer", "Found in nature", "3 words the start with ee sound", "Food ingrediant", "Found in a store", "Head of state", "Something electric", "Something in this room", "Someones friend", "Activity"]
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const displayLetter = document.getElementById("display-letter"); //game-box
const changeLetter = document.getElementById("change-letter");
const playerInput = document.getElementById("player-input");
const answerInput = document.getElementById("answer-input");
playerListContainer[playerInput] = 0;
const submitButton = document.getElementById("answer-submit");
const nameList = document.getElementById("name");
const randomLetter = document.getElementsByClassName("letter")
const randomTopic = document.getElementsByClassName("topic")
const addNameButton = document.getElementById("addNameButton");
const nameInput = document.getElementById("name");
const playerList = document.getElementById("playerList");


window.addEventListener("load", function () {
  document.getElementById("myModal").style.display = "block";
});

document.getElementById("closeModalButton").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});


function generateRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
};


//  WORKING
//function for when players are added  

if (addNameButton && nameInput && playerList) {
  addNameButton.addEventListener("click", function (event) {
    event.preventDefault();
    const name = nameInput.value;
    if (!name) return;

    const listItem = document.createElement("li");
    listItem.textContent = name;
    playerList.appendChild(listItem);

    nameInput.value = "";
  });
}




//  WORKING
//function for when save players name happens, game will start
document.getElementById("saveButton").addEventListener("click", function () {
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var topics = ["Name of a rabbi", "Three letter word", "Neighborhood in Jerusalem", "Country", "7 Words that start with this letter", "Profession", "5 Letter word", "Mans name not found in the bible", "Woman from the bible", "Company", "Person, place, and thing", "Family member", "Part of body", "State", "Celebrity", "Jewish celebrity", "Singer", "Found in nature", "3 words the start with ee sound", "Food ingrediant", "Found in a store", "Head of state", "Something electric", "Something in this room", "Someones friend", "Activity"]

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
});



changeLetter.addEventListener("click", generateRandomLetter);





submitButton.addEventListener("click", function () {
  const playerName = playerInput.value.trim().toLowerCase();
  const nameArray = nameList.value.trim().toLowerCase().split(",");

  if (nameArray.includes(playerName)) {
    // Add point to player's name
    const nameIndex = nameArray.indexOf(playerName);
    const namesWithPoints = nameArray.map((name, index) => {
      if (index === nameIndex) {
        return `${name}•`;
      }
      return name;
    });

    nameList.value = namesWithPoints.join(", ");
  } else {
    alert("Player not found in name list");
  }
});




document.getElementById("saveButton").addEventListener("click", function (e) {
  e.preventDefault();
  var names = document.querySelectorAll("#namesContainer input");
  var nameValues = [];
  for (var i = 0; i < names.length; i++) {
    nameValues.push(names[i].value);
  }
  localStorage.setItem("names", nameValues.join(","));
  document.getElementById("myModal").style.display = "none";
});
















































