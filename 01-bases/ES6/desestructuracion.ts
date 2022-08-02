(() => {

    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // const { poder, vision } = avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ vision, ...resto }: Avenger): void => {
        console.log(vision, resto);
    }

    // printAvenger(avengers);

    const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk', 'Thor'];

    const [, ironman] = avengersArr;

    console.log(ironman);

})();