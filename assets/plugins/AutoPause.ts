import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  // TODO: se utiliza como un tipo necesita que se a una clase el MediaPlayer
  private player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    //TODO: se hace referencia permanente al this
    this.handlerInterception = this.handlerInterception.bind(this);
    this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
  }
  run(player) {
    //TODO: se guarda en una instacia de la clase el player
    this.player = player;
    //TODO: el threshold es el porcentaje de visibilidad que debe tener el elemento para que se dispare el evento
    const observer = new IntersectionObserver(this.handlerInterception, {
      threshold: this.threshold,
    });
    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handlerVisibilityChange);
  }

  private handlerInterception(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handlerVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
