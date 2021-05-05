function login(){
    event.preventDefault();
   var username=document.getElementById("username").value;
   sessionStorage.setItem('username',username);
   console.log('username',username);
 location.href="../foodItems.html";
}