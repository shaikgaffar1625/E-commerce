var users=["ravi","kiran","rajesh"];
for(var i=0; i<users.length; i++){
    if(users[i]=="kiran"){
        continue;
    }
    console.log(users[i]);
}