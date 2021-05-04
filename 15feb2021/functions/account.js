 
            var customers=[];
            if(localStorage.getItem("customers")== null){
                console.log('CUSTOMERS ARRAY CREATED');
             localStorage.setItem('customers',JSON.stringify(customers));
            }

            function transfer(){
                event.preventDefault()
                location.href="fund_transfer.html";
            }
            function activateAccount(){
                event.preventDefault();
                var accountNo=getvalueById("accountNo");
                var name=getvalueById("name");
                var adhaar=getvalueById("adhaar");

                var customer={
                    accountNumber : accountNo,
                    name : name,
                    adhaar : adhaar,
                    accountBalance : 60000
                }
                 var allcustomers=JSON.parse(localStorage.getItem("customers"));
                 allcustomers.push(customer);
                localStorage.setItem('customers',JSON.stringify(allcustomers));
                //document.getElementById('accountNo').value="";
                //document.getElementById('name').value="";
                //document.getElementById('adhaar').value="";
                //console.log(customer);

                document.getElementById('activateform').reset();
            }

            function deposit(){
                event.preventDefault()
                location.href="deposit.html";
            }

            function getValueById(id){
               
                return document.getElementById(id).value;
                     
                      }
              
                      function displayAccountDetails(){
                        event.preventDefault();
                        var customer= JSON.parse(localStorage.getItem('customers'));
                        document.getElementById("account_details").innerHTML=customers.name+"     "+customers.accountBalance;
                    }

            function withdraw(){
                event.preventDefault()
                location.href="withdraw.html";
            }
           