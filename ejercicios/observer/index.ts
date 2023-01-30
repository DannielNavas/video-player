interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement | null = document.querySelector("#value");
    el?.addEventListener("input", () => {
      this.notify(el?.value);
    });
  }
  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    //TODO: encuentra el indice del observer en el array
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });

    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement | null;

  constructor() {
    this.el = document.querySelector("#price");
  }

  update(data: any) {
    this.el ? (this.el.innerText = data) : console.log("error");
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => value.unsubscribe(display), 5000);
