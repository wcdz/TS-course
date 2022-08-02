import powers from '../data/powers';

export class Hero {

    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) { }

    get power(): string {
        return powers.find(power => power.id === this.powerId)!.desc || 'Not Found';
    } // ! : siempre lo encontrara, yo se como estan los datos | ? : puede ser que si o no, dependera mucho del caso

}

export class Hero2 { }
export class Hero3 { }
export class Hero4 { }

export const PI = 3.141516;
export const miNombre = 'Will';