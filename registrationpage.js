// function eventsample(e){
//    console.log(e);
// }

let sample=document.getElementById("newDataForm")
sample.addEventListener("submit",function(event){
    event.preventDefault();
    let formData=new FormData(event.target);
    let newObj=Object.fromEntries(formData.entries());
    console.log(formData);
    console.log(newObj);
    if(newObj.username==="pragathi"){
        console.log("username aready exist please login")
        // window.location.href="home.html";
        window.location.replace("home.html");
    }
    else{
        console.log("Registration completed.Thanks!")
    }

})
