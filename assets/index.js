const video = document.querySelector("video");
const button = document.querySelector("button");
function mediaPlayer() {}
mediaPlayer.prototype.play = () => {
  if (!video.paused) {
    video.pause();
  } else {
    video.play();
  }
};
// button.onclick = () => {
//   video.play();
// };
const player = new mediaPlayer();
button.onclick = () => player.play();
