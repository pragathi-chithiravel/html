let name="Testing"
let sample="the content"
// function samplefunction(sample1,sample2){
//     console.log(sample1,sample2);

// }
// samplefunction(name,sample);

// let merge=(sample1,sample2)=> console.log(sample1,sample2);
// merge(name,sample);

let sampleProduct=[
    {
    name: "nothing",
    price: 20000,
    quantity: 2,
    isAvailable:true
},
{
    name: "iphone",
    price: 200000,
    quantity: 3,
    isAvailable:true
},
{
    name: "vivo",
    price: 20000,
    quantity: 4,
    isAvailable:true
}
]

function alterData(){
    let output=sampleProduct.filter((e)=>e.price>10000);
    console.log(output)
    return output
}
alterData();
function sampleData(){
    let sampleData=alterData();
    console.log(sampleData);
}
sampleData()

let onUser={
    name:"vivo",
    price:20000,
    quantity:4
}

let sam= {...onUser, price:6000};      
console.log(sam)

let sam1={...onUser, total:12000};
console.log(sam1);

let usedsample=sampleProduct.map((e)=>
{let filter={...e,totalprice: e.price*e.quantity};
return filter;
})
// console.log(usedsample)

let quntities=sampleProduct.map((samp)=>
{let filter={...samp,quantity:samp.quantity+1};
return filter;
})
console.log(quntities)
