(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        // Los constructores privados sirven para manejar una unica instancia del objeto de forma global, es decir no importa cuantas instancias se programe en un futuro, el valor de todas sera la misma
        private constructor(public name: string) { }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis unico');
            }
            return Apocalipsis.instance;
        }

        public changeName(newName: string): void {
            this.name = newName;
        }


    }

    const main = (): void => {

        const apocalipsis1: Apocalipsis = Apocalipsis.callApocalipsis();
        const apocalipsis2: Apocalipsis = Apocalipsis.callApocalipsis();
        const apocalipsis3: Apocalipsis = Apocalipsis.callApocalipsis();

        apocalipsis1.changeName('xd');

        // const apocalipsis1 = new Apocalipsis('Soy un apocalipsis unico 1');
        // const apocalipsis2 = new Apocalipsis('Soy un apocalipsis unico 2');
        // const apocalipsis3 = new Apocalipsis('Soy un apocalipsis unico 3');
        console.log(apocalipsis1, apocalipsis2, apocalipsis3);

    }

    main();


})();