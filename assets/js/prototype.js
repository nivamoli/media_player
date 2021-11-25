//  Object.create -> Nos ayuda a crear objetos para heredar propiedades. 

/* const heroMethods = {
  saludar: function() {
    console.log(`Hola, soy ${this.name}`)
  }
};

function Hero(name) {
  const hero = Object.create(heroMethods);
  hero.name = name; 

  return hero
};

const zelda = Hero('Zelda'); 
zelda.saludar();

const link = Hero('Link');
link.saludar(); */


// --------- Métodos de hero dentro de Hero:


function Hero(name) {
  const hero = Object.create(Hero.prototype);
  hero.name = name; 

  return hero
};

Hero.prototype.saludar = function() { // Creamos un método saludar dentro del prototipo de Hero.
  console.log(`Hola soy ${this.name}`)
}

const zelda = Hero('Zelda'); 
zelda.saludar();

const link = Hero('Link');
link.saludar();


// --------- New (azucar sintáctica)

function Hero(name) {
  // const hero = Object.create(Hero.prototype); -> Con new ocurre esto automáticamente.
  // no lo guarda en una const hero sino en this. 
  this.name = name; 

  // return this; -> Esto ocurre implícitamente, no hay que hacerlo manual.
};

Hero.prototype.saludar = function() { // Creamos un método saludar dentro del prototipo de Hero.
  console.log(`Hola soy ${this.name}`)
}

const zelda = new Hero('Zelda');
zelda.saludar();
const link = new Hero('Link');
link.saludar();