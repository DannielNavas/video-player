class AutoPause {
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

  handlerInterception(entries) {
    const entry = entries[0];
    const isVisible = entries.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  handlerVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
