class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();

    this.initPlugins();
  }

  initPlayer() {
    //TODO: Crear un div contenedor contenedor al lado de media y mover media dentro de él
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode?.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }
  private initPlugins() {
    // const player = {
    //   play: () => this.play(),
    //   pause: () => this.pause(),
    //   media: this.media,
    //   //TODO: Add getters and setters
    //   // crea propiedades virtuales
    //   get muted() {
    //     return this.media.muted;
    //   },
    //   set muted(value) {
    //     this.media.muted = value;
    //   },
    // };

    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
}

export default MediaPlayer;
