export const printObject = (argument: any): void => {
    console.log(argument);
}

export function genericFunction<T>(argument: T): T {
    return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument;