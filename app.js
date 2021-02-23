const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreChanger = document.querySelector('#playTo');

let winningScore = 3;
let isGameover = false;
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click',function() {
    if(!isGameover) {
        p1Score++;
        p1Display.textContent = p1Score;
        if(p1Score===winningScore) {
            isGameover=true;
        }
    }

});

p2Button.addEventListener('click',function() {
    if(!isGameover) {
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score===winningScore) {
            isGameover=true;
        }
    }

});

winningScoreChanger.addEventListener('change',function() {
    winningScore = parseInt(this.value);
    isGameover = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
});

resetButton.addEventListener('click',function() {
    isGameover = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
})