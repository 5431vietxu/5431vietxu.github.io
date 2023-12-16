var audio = new Audio('./music.mp3');

audio.oncanplaythrough = function () {
    audio.play();
}

audio.loop = true;

audio.onended = function () {
    audio.play();
}