console.log("Calling on the Spirits of the North to protect our circle as we read our fates!");

// Beginning of card shuffle
let card1 = document.getElementById("left-card");
let card2 = document.getElementById("middle-card");
let card3 = document.getElementById("right-card");

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// card1.innerHTML = '<img src="' + path + '" alt="' + alt + '" ><div class="dark-shadow"></div>';
card1.innerHTML = '<img src="assets/images/cardback.png" alt="The back side of a fortune card." ><div class="dark-shadow"></div>';
card2.innerHTML = '<img src="assets/images/cardback.png" alt="The back side of a fortune card." ><div class="dark-shadow"></div>';
card3.innerHTML = '<img src="assets/images/cardback.png" alt="The back side of a fortune card." ><div class="dark-shadow"></div>';

let deck = [
  ["f01rider", "", ""],
  ["f02clover", ""],
  ["f03ship", ""],
  ["f04house", ""],
  ["f05tree", ""],
  ["f06cloud", ""],
  ["f07snake", ""],
  ["f08coffin", ""],
  ["f09flowers", ""],
  ["f10scythe", ""],
  ["f11birchrod", ""],
  ["f12bird", ""],
  ["f13child", ""],
  ["f14fox", ""],
  ["f15bear", ""],
  ["f16star", ""],
  ["f17stork", ""],
  ["f18dog", ""],
  ["f19tower", ""],
  ["f20garden", ""],
  ["f21mountain", ""],
  ["f22paths", ""],
  ["f23mice", ""],
  ["f24heart", ""],
  ["f25ring", ""],
  ["f26book", ""],
  ["f27message", ""],
  ["f28gentleman", ""],
  ["f29lady", ""],
  ["f30lily", ""],
  ["f31sun", ""],
  ["f32moon", ""],
  ["f33key", ""],
  ["f34fish", ""],
  ["f35anchor", ""],
  ["f36cross", ""]
];

let shuffledDeck = shuffle(deck);

document.getElementById("sake-glass").addEventListener("click", function() {
  redraw();
});

card1.addEventListener("click", function() {
  card1.innerHTML = '<img src="assets/images/' + shuffledDeck[0][0] + '.png" alt="' + shuffledDeck[0][1] + '" ><div class="dark-shadow"></div>';
});

card2.addEventListener("click", function() {
  card2.innerHTML = '<img src="assets/images/' + shuffledDeck[1][0] + '.png" alt="' + shuffledDeck[1][1] + '" ><div class="dark-shadow"></div>';
});

card3.addEventListener("click", function() {
  card3.innerHTML = '<img src="assets/images/' + shuffledDeck[2][0] + '.png" alt="' + shuffledDeck[2][1] + '" ><div class="dark-shadow"></div>';
});



function redraw() {
  card1.innerHTML = '<img src="assets/images/cardback.png" alt="The back side of a fortune card." ><div class="dark-shadow"></div>';
  card2.innerHTML = '<img src="assets/images/cardback.png" alt="The back side of a fortune card." ><div class="dark-shadow"></div>';
  card3.innerHTML = '<img src="assets/images/cardback.png" alt="The back side of a fortune card." ><div class="dark-shadow"></div>';
  shuffledDeck = shuffle(deck);
  return 0;
}
// End of card shuffle



// Modal code
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// End modal code
