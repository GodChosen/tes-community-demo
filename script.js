let cheers = 0;
const message = document.querySelector("#message");
const button = document.querySelector("#cheer");
const resetButton = document.querySelector("#reset");

function updateMessage() {
  if (cheers >= 5) {
    message.textContent = "Team effort!";
  } else {
    message.textContent = "Cheers: " + cheers;
  }
}

function addCheer() {
  cheers = cheers + 1;
  updateMessage();
}

function resetCheers() {
  cheers = 0;
  updateMessage();
}

button.addEventListener("click", addCheer);
resetButton.addEventListener("click", resetCheers);
