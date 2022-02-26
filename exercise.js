// Exercises

// 1. Select <h1> element, drill into the DOM

let h1Element = document.body.firstElementChild;
// let h1Element = document.body.children[0];

// 2. Use variable [1] get acces to the parent element

console.dir(h1Element.parentElement);

// BONUS: use variable from [1] get acces to sibling element.

console.dir(h1Element.nextElementSibling);

// 3. Select the <h1> element with getElementById and store the same or a new variable.

h1Element = document.getElementById("first-title");

console.dir(h1Element);

// 4. Select the second <p> element with querySelector.

let highlightedParagraph = document.querySelector("p a");

console.dir(highlightedParagraph);

// 5. BONUS TASK: Try changing the text content of the <p> element.

highlightedParagraph.textContent = "This was changed by Rens Plaschek";