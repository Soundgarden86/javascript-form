const productNameInput = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

const maxAllowedChars = productNameInput.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInput.addEventListener("input", updateRemainingCharacters);