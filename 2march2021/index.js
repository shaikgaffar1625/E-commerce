/*var employee={
    name:"ravikumar",
    address: "hyderabad",
    eid:101,
    project: {
                name: "LMS",
                client:"DL"
             },
     technologies: ["dotnet","java","python"],
     isMarried:false,
     getFullDetails: function(){
         return employee.name+ "\t"+ employee.address+"\t"+this.eid;
     }
}
employee.age=34;

//console.log(employee);
console.log(employee.age);
console.log(employee.getFullDetails()) */

var bank={
    bankname:"ICICI",
    address: "Hyderabad"
}

var customer= Object.create(bank);
console.log(customer.bankname);

customer.name="rajesh";
customer.accNo=193444;

console.log(customer)