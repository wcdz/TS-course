// // import { Hero as SuperHero, Hero2, Hero3, Hero4 } from './classes/Hero';
// import * as HeroClases from './classes/Hero'; // Exportacion normal
// import powers from './data/powers'; // Exportacion por defecto

// // const ironman = new Hero('Ironman', 1, 55);
// const ironman = new HeroClases.Hero('Ironman', 1, 55);

// console.log(ironman.power);
// // const powerIronman = ironman.powerId - 1;
// // console.log(powers[powerIronman]);


import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Hero, Villian } from '../interfaces';

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject('Hello World');

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction('Hello World').length);
// console.log(genericFunction(new Date()).getDate());
// console.log(genericFunctionArrow(1234567890).toString());


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Windston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool));
