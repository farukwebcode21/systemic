function getUserName(inputId){
    const name = document.getElementById(inputId);
    const inputName = name.value;
    name.value = "";
    return inputName;
}

document.getElementById('submit').addEventListener('click', function(){
   if(getUserName('name') =="faruk" && getUserName('email')== "faruk@gmail.com" && getUserName('password') == "password"){
       window.location.href ='system.html';
   }else{
        window.alert('Please Input Correct UserName and password & email');
   }
});
