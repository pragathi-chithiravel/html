class sampleObject{
    constructor(id,productName,productprice,Quntity){
        this.id=id;
        this.productName=productName;
        this.productprice=productprice;
        this.Quntity=Quntity;
    }
    getProduct(){
        console.log("working");
    }
}

let arr=[];
let product1=new sampleObject(1,"Laptop","50000",10);
let product2=new sampleObject(2,"Ram","5000",20);
arr.push(product1);
arr.push(product2);
console.log(arr);
product1.getProduct();
console.log(product1.productName);