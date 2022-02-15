export function sayHello(): void {
    console.log("hi im'From @god/hello-type-lib Module");
}
export function sayGoodbye(): void {
    console.log("goodbye All Applications ~ ");
}

export class HelloTypeClass {
    private name = "hi I'm @god/hello-type-lib In HelloTypeClass Field";

    public getName(): string {
        return this.name;
    }
}