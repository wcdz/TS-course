(() => {

    const capitanAmerica: string = 'Capitan America';
    const thor: string = "Thor";
    const drStrange: string = `Heroe: Doctor Strange`;

    console.log(`I'm ${capitanAmerica}`);
    console.log(capitanAmerica.toUpperCase());

    console.log(capitanAmerica[15]?.toUpperCase() || 'No esta presente'); // ? : Null check

})();