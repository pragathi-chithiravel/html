let users=[
    {name:"pragathi",password:"pragathi"},{name:"gnanasri",password:"gnanasri"},
    {name:"priya",password:"priya"},{name:"rifaya",password:"rifaya"},
    {nme:"pavi",password:"pavi"}
]

let sample=document.getElementById("loginform")
sample.addEventListener("submit",function(event){
    event.preventDefault();
    let formData=new FormData(event.target);
    let newObj=Object.fromEntries(formData.entries());
    console.log(formData);
    console.log(newObj);

    let foundUser=users.find(user => user.name===newObj.username && user.password===newObj.password)
    if(foundUser){
        alert("Login successful..!")
         window.location.href="welcome.html"
    }else{
        alert("User not found! Redircting to register page..")
        window.location.href="registration.html"
    }
})