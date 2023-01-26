// console.log("Hello, TypeScript");

// function add(a: number, b: number) {
//   return a + b;
// }

// const sum = add(2, 3);

// Boolean
// TODO: de las dos formas se puede declarar una variable booleana
let muted: boolean = true;
let muted2 = true;

// Numeros
//TODO: Hace analisis estatico de los tipos de datos que se le asignan a las variables
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = "Richard";
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push(9000); // Error

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9001);

// Enum

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" };

// Object
let someObject: object = { type: "Wildcard" };

// Funciones
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

const richard = fullName("Richard");
