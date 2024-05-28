let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrl = document.getElementById("ctrl");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playPause() {
  if (ctrl.classList.contains("fa-pause")) {
    song.pause();
    ctrl.classList.remove("fa-pause");
    ctrl.classList.add("fa-play");
  } else {
    song.play();
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 100);
}
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrl.classList.add("fa-pause");
  ctrl.classList.remove("fa-play");
};
function next() {
  document.getElementById("source").src = "Our Dream Together.mp3";
  document.getElementById("song").load();
  ctrl.classList.remove("fa-pause");
  ctrl.classList.add("fa-play");
  document.getElementById("title").innerHTML = "Our Dream Together";
}
function back() {
  document.getElementById("source").src = "Sweet Serenade.mp3";
  document.getElementById("song").load();
  ctrl.classList.remove("fa-pause");
  ctrl.classList.add("fa-play");
  document.getElementById("title").innerHTML = "Sweet Serenade";
}
