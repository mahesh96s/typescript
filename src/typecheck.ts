function add(num1: number, num2: number) {
    return num1 + num2;
}

function getValues() {
    return {
        id: 100,
        name : "John"
    };
}

let employee : {
    id: number;
    name: string;
};

employee = getValues();

let sum: number = add(2, 3);

console.log('sum =', sum);
console.log(`employee Id: ${employee.id} ,employee name: ${employee.name}`);