(() => {

    // Las interfaces son muy similares a los types, solo se diferencia en que los tipos no son tranferibles, no se pueden expandir (entre clases)
    interface Hero {
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