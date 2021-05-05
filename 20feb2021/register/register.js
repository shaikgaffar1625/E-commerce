function register(){
    event.preventDefault();

    var username=document.getElementById("username").value,
    var mobilenumber=document.getElementById("mobilenumber").value,
    var DOB=document.getElementById("DOB").value,

    var users={
        username:username,
        mobilenumber:mobilenumber,
        DOB:DOB,
    }

    localStorage.setItem('user',JSON.stringify(user));
    sessionStorage.setItem('username',username);
    location.href="../fooditems.html";
}