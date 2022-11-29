function Employee(name, salary){
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
 getSalary: function() {
    return this.salary;
 },
 setSalary: function(sal){
    this.salary = sal;
 },
 accept: function(visitorFunction){
    visitorFunction(this)
 }
}
///////////////////////////
const devsage = new Employee("DevSage", 1000);
console.log({ salary: devsage.getSalary()});

function ExtraSalary(emp){
    emp.setSalary(emp.getSalary()*2)
}

devsage.accept(ExtraSalary);

console.log({ secondasalary: devsage.getSalary() });