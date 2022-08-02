(() => {

    class Avenger {
        name;
        power;

        // Algo random de JS es que permite la creacion de propiedad sin la necesidad de ser creadas XD
        // TS lo solucionara al ser creado pensando en POO
        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }


    class FlyingAvenger extends Avenger {
        flying;

        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger('Bruce Banner', 9000);
    const falcon = new FlyingAvenger('Falcon', '50');

    console.log(hulk);
    console.log(falcon);

})();
