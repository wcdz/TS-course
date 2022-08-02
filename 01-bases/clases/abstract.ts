(() => {

    // La clase abstracta sirve como plantilla de otras clases
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) { }
    }

    class Xmen extends Mutante {

        public salvarMundo(): string {
            return 'Mundo a Salvo!!!';
        }

    }

    class Villian extends Mutante {

        public conquistarMundo(): string {
            return 'Mundo conquistado!!!';
        }

    }

    const main = (): void => {

        const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
        const magneto: Villian = new Villian('Magneto', 'Magnus');

        console.log(wolverine.salvarMundo());
        console.log(magneto.conquistarMundo());

        // Estoy pidiendo un objeto por lo que si me manda ya estoy extrayendo un atributo y ademas es aceptado pq wolverine extiende de la clase abstracta mutante
        const printName = (character: Mutante): void => {
            console.log(character.realName);

        }

        printName(wolverine);

    }

    // main();

})();