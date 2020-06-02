class Message {
    private greeting: string;
    constructor(str: string) {
        this.greeting = str;
    }
    greet() {
        return this.greeting;
    }
}

let message = new Message("hello");
console.log(message.greet());