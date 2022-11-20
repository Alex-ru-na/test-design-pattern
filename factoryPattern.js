class Developer {
    constructor(name){
        this.name = name;
        this.type = "Developer";
    }
}

class Tester {
    constructor(name){
        this.name = name;
        this.type = "Tester";
    }
}

class EmployeeFactory{
    create = (name, type) => {
        switch(type){
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
            default:
                return null;
        }
    }
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Alejandro", 1));
employees.push(employeeFactory.create("Juan", 2));


console.log({ employees });