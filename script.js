var audio = document.getElementById("audio");
var playPauseBTN = document.getElementById("playPauseBTN");
var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");
var isPlaying = false;

function playPause(){
	if (!isPlaying) {
	    isPlaying = true;
	    audio.play();
	    playIcon.classList.add("hidden");
	    pauseIcon.classList.remove("hidden");
	} else {
	    isPlaying = false;
	    audio.pause();
	    playIcon.classList.remove("hidden");
	    pauseIcon.classList.add("hidden");
	}
}
