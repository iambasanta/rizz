"use strict";

const generateButton = document.getElementById("generateButton");
const copyToClipboardButton = document.getElementById("copyToClipboardButton");
const rizzContent = document.getElementById("rizzContent");
const copiedMessage = document.getElementById("copiedMessage");

generateButton.addEventListener("click", () => {
  location.reload();
});

copyToClipboardButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(rizzContent.textContent)
    .then(() => {
      showCopiedMessage();
    })
    .catch((error) => {
      console.error("Failed to copy to clipboard:", error);
    });
});

function showCopiedMessage() {
  copiedMessage.style.display = "block";
  setTimeout(() => {
    copiedMessage.style.display = "none";
  }, 1000);
}
