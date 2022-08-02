(() => {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static age: number = 35; // Para no crear una instancia, solo usamos la clase para llamarlo
        static getAge(): string {
            return this.name.toUpperCase();
        }

        constructor(
            private name: string,
            private team: string,
            public realName?: string) { }

        public bio(): string {
            return `${this.name} (${this.team})`;
        }


    }

    //const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman);
    // console.log(`Metodo estatico: ${Avenger.age}`);
    // console.log(antman.bio());
    // console.log(Avenger.getAge());

})();