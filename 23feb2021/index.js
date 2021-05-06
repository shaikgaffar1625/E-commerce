/* closure function

var i=900;
function outer(){
    var a=10,b=20;
    function inner1(){
        console.log(a);
        console.log(b);
        function inner2(){
            console.log(i);
        }
        inner2();
    }
    inner1();
}
outer();   */



/*call function

var employee={
    eid:101,
    ename:"sai",
    eaddress:"hyd",
    project:"LMS",
    getEmployeeDetails:function(){
        return this.eid + "\t" +this.ename + "\t" + this.eaddress + "\t" +this.project;
    }
}
var employee2={
  eid:102,
  ename:"raj",
  eaddress:"sec",
  project:"CRM",
}
var employee3={
    eid:103,
    ename:"ravi",
    eaddress:"warg",
    project:"Banking",
}
console.log(employee.getEmployeeDetails.call(employee2));  */

