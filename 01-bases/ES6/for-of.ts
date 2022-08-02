(() => {

    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    }

    const capAmerica: Avenger = {
        name: 'Steve Rogers',
        weapon: 'Escudo'
    }
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, capAmerica, thor];

    for (const avenger of avengers) {
        console.log(avenger);
    }

    // for (let i = 0; i < avengers.length; i++) {
    //     console.log(avengers[i]);
    // }

})();