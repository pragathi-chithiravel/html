const users=[
    {name:"pragathi",location:"chennai",isActive: true},
     {name:"gnanasri",location:"covai",isActive: true}
]

const usersname=users.map(users.name);
console.log(usersname);

const sum=users.map(user =>({
    name:user.name,
    location:user.location
}))
console.log(sum);


numbers=[1,2,3,4,5,6]
const even=numbers.filter(num =>num%2===0);
console.log(even);
const sam=numbers.filter(num => num >=5);
console.log(sam);

const filtered=users.filter(user => location==="chennai");
console.log(filtered);

const filtered2=users.filter(user => user.location==="chennai" && user.isActive);
console.log(filtered2);

const div=document.getElementById("sampleDiv");
const para=document.createElement("p");
para.textContent="New content";
div.append(para);
div.innerHTML='<p>New content Added</p>';

const user={
    name: "pragathi",location:"chennai",isActive: true
}
div.innerHTML=`
<h2>${user.name}</h2>
<p>${user.location}</p>
<p>${user.isActive}</p>
`

const list=document.getElementById("samplelist");
list.innerHTML=users.map(userN =>
    `<ul>
    <li>${userN.name}</li>
    <li>${userN.location}</li>
    <li>${userN.isActive}</li>
    </ul>
    `
)
