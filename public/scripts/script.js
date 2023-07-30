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

const saveButton = document.getElementById("saveButton");
//save to local storage

saveButton.onclick = () => {
  const rizzContent = document.getElementById("rizzContent").innerText;
  const savedQuotes = localStorage.getItem("savedQuotes");
  if (savedQuotes) {
    const parsedSavedQuotes = JSON.parse(savedQuotes);
    parsedSavedQuotes.push(rizzContent);
    localStorage.setItem("savedQuotes", JSON.stringify(parsedSavedQuotes));
  } else {
    localStorage.setItem("savedQuotes", JSON.stringify([rizzContent]));
  }
  location.reload();
};

//get the saved quotes from local storage
const savedQuotes = localStorage.getItem("savedQuotes");

if (savedQuotes) {
  const parsedSavedQuotes = JSON.parse(savedQuotes);
  const savedQuotesContainer = document.getElementById("savedQuotes");
  parsedSavedQuotes.forEach((quote) => {
    const quoteElement = document.createElement("div");
    quoteElement.classList.add(
      "bg-slate-800",
      "rounded-lg",
      "p-4",
      "mb-4",
      "max-w-md",
      "w-full",
      "sm:w-auto",
      "flex",
      "items-center"
    );
    quoteElement.innerText = quote;
    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "bg-blue-500",
      "text-white",
      "rounded-lg",
      "p-1",
      "ml-4"
    );
    //delete button svg for the innerHTML

    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
`;

    deleteButton.onclick = () => {
      const savedQuotes = localStorage.getItem("savedQuotes");
      const parsedSavedQuotes = JSON.parse(savedQuotes);
      const filteredSavedQuotes = parsedSavedQuotes.filter(
        (savedQuote) => savedQuote !== quote
      );
      localStorage.setItem("savedQuotes", JSON.stringify(filteredSavedQuotes));
      location.reload();
    };
    quoteElement.appendChild(deleteButton);

    savedQuotesContainer.appendChild(quoteElement);
  });
}
