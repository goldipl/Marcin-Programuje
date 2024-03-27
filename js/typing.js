const texts = [
    'unikatowe',
    'responsywne',
    'nowoczesne',
];
const typing_text = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;
let currentText = '';

const type = () => {
    const currentTextLength = texts[textIndex].length;

    if (charIndex < currentTextLength) {
        currentText += texts[textIndex].charAt(charIndex);
        typing_text.textContent = currentText;
        charIndex++;
    } else {
        charIndex = 0;
        currentText = '';
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, 200);
}

type();