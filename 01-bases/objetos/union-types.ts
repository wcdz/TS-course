(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Will';

    console.log(typeof myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Will',
        age: 19,
        powers: ['Programar', 'Inteligencia']
    };
    console.log(typeof myCustomVariable);

    console.log(myCustomVariable);

})();