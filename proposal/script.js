let noClickCount = 0;
const question = document.getElementById("question");
const buttons = document.querySelector(".buttons");
const noBtn = document.getElementById("noBtn");

function sayYes() {
  question.textContent = "Yayyy! Can't wait for our date 💖🥰";
  buttons.innerHTML = ""; // remove buttons after yes
}

// Handle No button clicks
function sayNo() {
  noClickCount++;

  if (noClickCount === 1) {
    question.textContent = "Are you for real? 😳";
  } else if (noClickCount === 2) {
    question.textContent = "Think again... would you?";
  } else if (noClickCount === 3) {
    question.textContent = "Do you hate me? Am I nothing to you? 😢";
  } else {
    question.textContent = "Now you have no choice 😏💘";
    buttons.innerHTML = `
      <button class="yes" onclick="sayYes()">Yes</button>
      <button class="yes" onclick="sayYes()">Yes</button>
    `;
  }
}

// Make the No button run away from cursor
noBtn.addEventListener("mouseover", () => {
  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Random new position inside card
  const offset = 50; // keep inside card edges
  const newLeft = Math.floor(Math.random() * (cardRect.width - btnRect.width - offset));
  const newTop = Math.floor(Math.random() * (cardRect.height - btnRect.height - offset));

  noBtn.style.left = newLeft + "px";
  noBtn.style.top = newTop + "px";
});
