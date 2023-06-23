var audio = document.getElementById("audio");
var playPauseBTN = document.getElementById("playPauseBTN");

function playPause() {
      if (audio.paused) {
        audio.play();
        playPauseBTN.innerHTML = '<i class="bi bi-pause-circle"></i>';
      } else {
        audio.pause();
        playPauseBTN.innerHTML = '<i class="bi bi-play-circle"></i>';
	}
}
