/*Arrow function
function m1(){
    console.log("I am m1()");
}
m1();

var x=() => console.log("I am arrow function");
x();   */

/*function square(num){
    return num*num;
    }
    
    var sqr= num => num * num;
    
    console.log(sqr(10));
    
    function validate(username,password){
        return username == "sai" && password == "sai";
    }
    console.log(validate("sai","sai"));
    
    var valid= (username,password) =>  username== "sai" && password == "sai";
    
    console.log(valid("sai","sai"));     */


/*Default Parameters
function f1(a=10,b=20){
    console.log(a,b);
    }
    f1(0,100);   */

    /*function validate(username="guest",password="guest"){
        if(username == "guest" && password == "guest"){
            console.log("guest login");
        }
        else
        {
            console.log("user login");
        }
  }
  validate(10,20);
  
  var valid= (username="guest",password="guest") => {
      if(username == "guest" && password == "guest"){
          console.log("guest login");
      }
      else
      {
          console.log("user login");
      }   
  }
  
  valid();*/
    

   /* Rest Parameter 
   function f1(a,b,...restParams){
        console.log(a,b);
        console.log(restParams.length);
    }
    f1(10,40,30,40);  */


/*spread operator
function f1(a,b,c,...restP){ // rest params

    console.log(a,b,c);
    console.log(restP);
}

var arr=[1,3,4,20,4,3]

f1(...arr); // spread operator   */

/*String Interpolation
var employees=[
    {
        name:"ravi",
        hike: "20%",
        reporting_manager: "krishna"
    },
     {
        name:"kiran",
        hike: "10%",
        reporting_manager: "kunal"
    },
     {
        name:"Anitha",
        hike: "30%",
        reporting_manager: "shaik"
    }
]

for(var i=0;i<employees.length;i++){
     var employee=employees[i];
    console.log(`
    
               Dear ${employee.name},

               This year you have got a hike of ${employee.hike} . Hope you are happy with the hike.

               Thanks,
               ${employee.reporting_manager}
    
    `)
}   */


/*class Customer{
    name;
   adhaarNo;
   mobileNumber;
    createAccount(name, adhaarNo,mobileNumber){
       this.name=name;
       this.adhaarNo=adhaarNo;
       this.mobileNumber=mobileNumber
    }
}

var customer = new Customer();

customer.createAccount("ravi","123412341233",9010101010);
console.log(customer);    */

/*class Bank{ // Super class
    bankName="ICICI";
    branch="hyderabad";

}
class Customer extends Bank{ // Sub class
     name;
    adhaarNo;
    mobileNumber;
     createAccount(name, adhaarNo,mobileNumber){
        this.name=name;
        this.adhaarNo=adhaarNo;
        this.mobileNumber=mobileNumber
     }
}

var customer = new Customer();

customer.createAccount("ravi","123412341233",9010101010);
console.log(customer);    */

/*class A{
    constructor(){
        console.log("constructor called");
    }
}

var a= new A();  */

/*function* f1(){
    console.log("line 1");
    console.log("line 2");
    yield "block 1";
    console.log("line 3");
    console.log("line 4");
    yield "block 2";
    console.log("line 5");
    console.log("line 6");
    yield "block 3";
    console.log("line 7");
    
}
var iterator=f1();
console.log(iterator.next());
console.log("some code here");
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());   */


/*class A{
    static x=100;
    y=200;
    static m1(){
        console.log("this is m1()");
    }
    static m2(){
        console.log("this is m2()");
    }
}

var obj= new A();

console.log(obj.y);
console.log(obj.x);
console.log(A.y);
A.m2();
A.m1();  */

/*setter&getter
class Employee{

    name;
    address;

    set _name(name){
        if(name == ''){
           console.log("name cannot be empty");
           return;
        }
        this.name=name
    }

    get _name(){
        return this.name;
    }

    set _address(address){
        if(address == ''){
           console.log("address cannot be empty");
           return;
        }
        this.address=address
    }

    get _address(){
        return this.address;
    }

}

var emp= new Employee();

emp._name="ravi";
emp._address="";

console.log(emp);  */