
// los generadores son funciones de las cuales se puede salir y volver a entrar. 

function* simpleGenerator(){
  console.log('Generator start')
  yield
  console.log('Generator end')
} 

const gen = simpleGenerator();

gen.next() // -> Decirle al generador que continúe
gen.next() // -> Cada vez que se llame next la ejecución del generador va a continuar hasta el próximo yield


function* idMaker() {
  let id = 1; 
  while(true) {
    yield id
    id = id + 1;
  }
}

const gen = idMaker();
gen.next();


// Cuando se llama next también se puede pasar valores que la función recibe


function* idMakerWithReset() {
  let id = 1; 
  let reset;
  while(true) {
    reset = yield id;
    if(reset) {
      id = 1; 
    } else {
      id = id + 1;
    }
  }
}

const gen = idMaker();
gen.next();


// ---- Fibonacci

function* fibonacci(){
  let a = 1;
  let b = 1;
  while(true) {
    const nextNumber = a + b; 
    a = b;
    b = nextNumber;
    yield nextNumber;
  }
} 

const gen = fibonacci();
gen.next();
gen.next();