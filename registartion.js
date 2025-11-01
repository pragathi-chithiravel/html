let user=[{}]
let samples=document.getElementById("register_form")
samples.addEventListener("submit",function(event){
    event.preventDefault();
    let formData=new FormData(event.target);
    let newObj=Object.fromEntries(formData.entries());
    console.log(formData);
    console.log(newObj);


    if(newObj.username=="pragathi"){
       alert("Registration completed ✅ You can now login..!")
       window.location.href="loginpage.html"
   }else{
       alert("Your Registration failed ❌ ")
     
    
   }

})


