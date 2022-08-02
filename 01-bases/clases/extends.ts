(() => {

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor Avenger llamado');
        }

        // Con protected podemos acceder a metodos y propiedades que extiendan de su clase padre -> hijo, mediante el super
        protected getFullName(): string {
            return `${this.name} ${this.realName}`;
        }

    }

    class Xmen extends Avenger {

        constructor(
            public name: string,
            public realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
            console.log('Constructor Xmen llamado');
        }

        // Los gets devuelven un valor
        get fullName(): string {
            return `${this.name} - ${this.realName}`;
        }

        // Los sets asignan valores, podemos asignarle logica
        set fullName(name: string) {
            if (name.length <= 3) throw new Error('El nombre debe ser mayor de 3 letras');
            this.name = name;
        }

        public getFullNameDesdeXmen(): void {
            console.log(super.getFullName());
        }
    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine.fullName); //Los gets no se ejecutan () solo se instancia la referencia

    // Asignacion de valores
    // wolverine.fullName = 'William';

    // console.log(wolverine.fullName);

    // wolverine.getFullNameDesdeXmen();

})();