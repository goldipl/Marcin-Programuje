// StackOverflow Source path: 
// https://stackoverflow.com/questions/62678282/add-delay-when-index-increase/62678368#62678368

const texts = ['Jestem Marcin.',
    'Jestem Web Developerem',
    'oraz Junior Java Developerem.',
    'Jestem programistą.',
    'Jestem nastawiony na sukces.'
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
})();