let productNameInput = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInput.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInput.addEventListener("input", updateRemainingCharacters);