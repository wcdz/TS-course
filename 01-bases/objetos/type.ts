(() => {

    // Palabra reservada solo para ts -> type
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }

})();