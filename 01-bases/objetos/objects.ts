(() => {

    //Objeto literal - Object || {}
    // () => string, es una funcion que no recive ningun argumento y retorna un string
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName(): string {
            return this.name;
        }
    }

    console.log(flash);

})();