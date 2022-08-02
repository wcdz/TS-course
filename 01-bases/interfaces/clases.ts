(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutanPower(id: number): string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {

        public name: string; // Implementacion de Human
        public age: number; // Implementacion de Xmen
        public realName: string;
        public mutanPower(id: number): string {
            return `${this.name} ${this.realName}`;
        }

    }

})();