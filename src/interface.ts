interface Employee {
    empId: number;
    empName: string;
    salary?: number; // Optional
}

let empObj1:Employee = {
    empId: 1,
    empName: "Steve"
}

let empObj2:Employee = {
    empId: 2,
    empName: "Bill",
    salary: 20000
}

console.log(empObj1);
console.log(empObj2);