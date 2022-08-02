(() => {

    // El never no es void ni undefined
    // Una funcion never hace que el codigo reviente
    // Siempre sera error
    const error = (message: string): (never | number) => {
        // if (false) 
        throw new Error(message);
        // return 1;
    }

    error('Esto es una funcion never');

})();