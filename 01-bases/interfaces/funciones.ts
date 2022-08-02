(() => {


    interface addTwoNumbers {
        (a: number, b: number): number; // Esto es una funcion
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a: number, b: number) => {
        return a + b;
    }



});