const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
noButton.addEventListener('mouseenter', () => {
    // Swap the buttons' inner text
    const tempText = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = tempText;
});
noButton.addEventListener('mouseleave', () => {
    // Swap the buttons' inner text back
    const tempText = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = tempText;
});
// Optional: Handle button clicks
yesButton.addEventListener('click', () => {
    alert("Yay! She said yes!");
});
noButton.addEventListener('click', () => {
    alert("Oh no! She said no!");
});