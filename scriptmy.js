// GAME START *********************

// VARIABLES START *****************
const dragon = document.querySelector(".dragon");
const dino = document.querySelector(".dino");
const bird = document.querySelector(".bird");
const container = document.querySelector(".container");
const gameStatus = document.querySelector(".game_status");
const myScore = document.querySelector(".score");
score = 0;
cross = true;
// VARIABLES COMPLETE *****************


// AUDIOS 
audio = new Audio('double_dragon_secret.mp3');
audioGo = new Audio("mario_dies.mp3");
audio.play();
// AUDIOS 
let stop = setInterval(stopAudio, 4000)

function stopAudio() {
    audio.play();

}
//  GAME CONTROLS START **************
document.onkeyup = function(e) {
    if (e.keyCode == 38) {
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 400);
    }

    if (e.keyCode == 39) {
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinoX + 112 + "px";
    }

    if (e.keyCode == 37) {
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinoX - 112 + "px";
    }
    if (e.keyCode == 40) {
        dino.classList.add("under");
        setTimeout(() => {
            dino.classList.remove("under");
        }, 400);
    }
}

//  GAME CONTROLS COMPLETE **************


// DISTANCE CALCULATION START *********
setInterval(() => {

    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    bx = parseInt(window.getComputedStyle(bird, null).getPropertyValue("left"));
    by = parseInt(window.getComputedStyle(bird, null).getPropertyValue("top"));



    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    boffSetX = Math.abs(bx - ox);
    boffSetY = Math.abs(by - oy);

    // DISTANCE CALCULATION COMPLETE *********


    // BIRD CONDITION START ********

    if (boffSetX < 95 && boffSetY < 105) {
        gameStatus.style.visibility = "visible";
        bird.classList.remove("birdAni");
        dragon.classList.remove("dragonAni");

        bird.classList.add("down");
        dragon.classList.add("down");
        dino.classList.add("down");


        audioGo.play();
        audio.pause();
        clearInterval(stop);
        setTimeout(() => {
            audioGo.pause();
        }, 3000);

    } else if (boffSetX < 105 && cross) {
        score += 10;
        abate(score);
        cross = false

        setTimeout(() => {
            cross = true
        }, 500);
    }
    // BIRD CONDITION COMPLETE ********

    // DRAGON CONDITION START ********

    if (offsetX < 95 && offsetY < 52) {
        gameStatus.style.visibility = "visible";
        dragon.classList.remove("dragonAni");
        bird.classList.remove("birdAni");
        dino.style.zIndex = "0";

        bird.classList.add("down");
        dragon.classList.add("down");
        dino.classList.add("down");

        audioGo.play();
        audio.pause();
        clearInterval(stop);


        setTimeout(() => {
            audioGo.pause();
        }, 3000);

    } else if (offsetX < 145 && cross) {
        score += 10;
        abate(score);
        cross = false

        setTimeout(() => {
            cross = true
        }, 500);
    }
}, 100);
// DRAGON CONDITION COMPLETE ********
// SCORE 
function abate(score) {
    myScore.innerHTML = "Score is :" + " " + score;
}

// GAME COMPLETE *********************


// setInterval(() => {
//     min = 8;
//     max = 10;
//     let duration = Math.random() * (max - min) + min;
//     dragon.style.animationDuration = `${duration}s`
// }, 3000);

// setInterval(() => {
//     dragon.classList.add("dragonAni");
// }, 5000);


// console.log(randomSpeed);

// function randomDragon() {
//     dragon.classList.add("dragonAni");
//     min = 8;
//     max = 10;
//     let duration = Math.random() * (max - min) + min;
//     dragon.style.animationDuration = `${duration}s`
// }

// function dinoAni() {
//     let dino = document.createElement("div");
//     dino.classList.add("dragon");
//     dino.classList.add("dragonAni");
//     container.appendChild(dino);
//     min = 8;
//     max = 10;
//     let duration = Math.random() * (max - min) + min;
//     dino.style.animationDuration = `${duration}s`
// }
// let dragonStop = setInterval(dinoAni, 1000);