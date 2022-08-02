(() => {

    interface Client {
        name: string;
        age?: number;
        address?: Address;
        getFullAddress?(id: string): string;
    }

    // Las inerfaces principales son primeras, por ende Address al ser secundaria va 2da sin ningun problema
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Will',
        age: 19,
        address: {
            id: 125,
            zip: '15345',
            city: 'Seattle'
        },
        getFullAddress(id: string) {
            return `${this.address?.city}`;
        },
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30
    }

})();