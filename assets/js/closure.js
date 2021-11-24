//IIFE -> Immediately invoked function expresion (Funciones invocadas inmediatamente.) 

(function getColor() {
  let color = 'green';
  
  function printColor() {
    console.log(color); 
  } // el closure es la combinación el scope de una función dentro del scope de otra función donde fue definido.

  printColor();
})();

// ------------ Funciones que regresan funciones

function makeColorPrinter(color) {
  let colorMassage = `The color is ${color}`

  return function() {
    console.log(colorMassage); // esta función esta recordando el mensaje definido en la línea 16
  };
}

let makeColorGreen = makeColorPrinter('Green'); // esta función recuerda los valores con las que fue definida makeColorPrinter
makeColorGreen();


// ------------ Variables privadas

function makeCounter(n) {
  let count = n; 

  return {
    increase: function(){
      return count = count + 1;
    },
    decrease: function(){
      return count = count - 1;
    },
    getCount: function(){
      return count;
    }
  }
}

let counter = makeCounter(7);
console.log(counter.increase()); // solo podemos modificar y trabajar variables privadas modificando su valor por medio de funciones.
console.log(counter.decrease());

counter.count = 0; // No podemos acceder ni cambiar el valor de count porque es variable privada