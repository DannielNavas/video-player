import Singleton from "./singleton";

const singleton = Singleton.getInstance();
const singletonJhon = Singleton.getInstance();

console.log(singleton === singletonJhon); // true

// TODO: Funciona cuando se qabre un modal ya que no ce necesita apertura de uno sobre otro si no que se maneje uno a la vez
