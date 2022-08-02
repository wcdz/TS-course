// Funcion anonima autoinvocada
(() => {
  const a: number = 10; // a : 10 -> ts crea el tipo 10, por que es una constante no cambia
  let b: string; // a : number -> ts otorga el number porque let puede cambiar
  // tipo any -> puede ser cualquiera

  function sayHello(msg: string) {
    console.log(msg);
  }

  console.log(a);
})();
