(() => {
    let isSuperman: boolean /*| string*/ = true;

    let isBatman: boolean = false;

    isSuperman = (isBatman) ? true : false;

    console.log({ isSuperman });

})();

// Podemos asignar varios tipos de datos en typescript