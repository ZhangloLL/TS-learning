export let name = "Alice";
export const age = 25;

export function greet(message: string): string{
    return "hello " + message;
}

export class User{
    constructor(public name: string){}

    introduce(): string{
        return "I am " + this.name;
    }
}

export interface Config{
    host: string;
    port: string;
}

export{ name as userName, age as userAge};