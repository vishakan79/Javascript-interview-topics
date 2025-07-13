const name=["vishakan","balaji"];
let obj={
    name:"vishakan",
    city:"Kovilpatti",
     info:function ()
    {
       console.log(this.name+"i am in "+this.city);
    }
}
obj.info();