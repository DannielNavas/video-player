import MediaPlayer from "./MediaPlayer";
import Ads from "./plugins/ads";
import AutoPause from "./plugins/AutoPause";
import AutoPlay from "./plugins/AutoPlay";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement | null = document.querySelector("#playButton");
playButton ? (playButton.onclick = () => player.togglePlay()) : console.log("no");

const muteButton: HTMLElement | null = document.querySelector("#muteButton");
muteButton
  ? (muteButton.onclick = () => {
      if (player.media.muted) {
        player.unmute();
      } else {
        player.mute();
      }
    })
  : console.log("error");

//TODO: Service Worker
//TODO: Comprueba si el navegador soporta service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
