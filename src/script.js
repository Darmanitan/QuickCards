var decks = []
var ScienceDeck = [
    ["What is the powerhouse of the cell?", "Mitochondria"],
    ["What is viscosity?", "The state of being thick, sticky, and semifluid in consistency, due to internal friction."],
    ["What is a solid?", "One of the three states of basic matter; a solid's atoms are packed together."],
    ["What is a liquid?", "One of the three states of basic matter; a liquid's atoms are fluid and can take the shape of its container."],
    ["What is a gas?", "One of the three states of basic matter; a gas's atoms are spread far apart."],
    ["What is the formula for voltage?", "V = IR"]
  ];

var currentCard = 0
var showingAnswer = false; // Tracks whether the answer or question is being shown
  

function togglecreateDeck() {
    // hide & unhide modal
    var x = document.getElementById("createDeckForm");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function toggleSwitchDeck(){
    var x = document.getElementById("switchDeckForm");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function refreshDecks(){
    alert("Decks Refreshed!")
    var deckNames = []
    for(let i=0;i<decks.length;i++){
        deckNames.push(decks[i][1])
    }

    let deckElem = document.getElementById("availableDecks");


    deckNames.forEach(element => {
        let elem = document.createElement('div')
        elem.innerHTML = element
        deckElem.appendChild(elem)
    });

}

function start(){
    console.log(ScienceDeck[0][0])
    document.getElementById("card").textContent=ScienceDeck[0][0]
}

function flipCard() {
    const cardElement = document.getElementById("card");

    if (!showingAnswer) {
        // Show the answer
        cardElement.textContent = ScienceDeck[currentCard][1];
        showingAnswer = true;
    } else {
        // Move to the next question
        currentCard++;
        if (currentCard >= ScienceDeck.length) {
            currentCard = 0; // Loop back to the start if at the end
        }
        cardElement.textContent = ScienceDeck[currentCard][0];
        showingAnswer = false;
    }
}

function createNewDeck(){
    var x = document.getElementById("deckNameInput").value;
    
    decks.push(["Name", x])

    alert("New Deck: " + x + " created!")

    togglecreateDeck()
}