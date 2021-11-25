function Hero(name) {
  this.name = name;
};

Hero.prototype.saludar = function() {
  console.log(`Hola, soy ${this.name}`)
}

const zelda = new Hero('Zelda');
zelda.saludar();

// propiedades de la instancia: 
console.log(zelda.name);

// propiedades de la clase:
console.log(zelda.saludar);

// propiedades heredadas:

console.log(zelda.toString);  // toString es parte del prototipo objeto 
// así no lo hayamos escrito nosotros ya es parte de un objeto por defecto.

// hasOwnProperty -> Saber si una propiedad pertenece a un objeto:
console.log(zelda.hasOwnProperty('name')); // Devuelve true or false en esta caso true.

// Devolver el prototipo de un objeto:

const prototypeOfZelda = Object.getPrototypeOf(zelda);
console.log(prototypeOfZelda);

const compararObj = prototypeOfZelda === Hero.prototype;
console.log(compararObj); // output: true ya que prototypeOfZelda es el mismo objeto que Hero. (ocupan el mismo lugar en memoria)

// creando otro metodo para ambos: 

Hero.prototype.fight = function() {
  console.log('Fight!');
}

zelda.fight(); // Zelda esta heredando todo lo de Hero.prototype.

// A la hora de ejecutar o buscar metodos JS busca en el prototipo, sino en el prototipo del objeto, despues en el prototipo del prototipo
// el prototype del prototype es Object que ya tiene metodos definidos por el lenguaje. 