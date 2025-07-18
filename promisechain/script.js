const cart=["shoes","pant","shirt"];
const promise= createorder(cart);
promise.then(function (orderId)
{
    //processpayment(orderId);
    console.log(orderId)
    return orderId;
})
.catch(function (err) {
   console.log(err)
})

function createorder(cart)
{
    const pr = new Promise(function(resolve,reject)
{
    if(!validcart)
    {
        const err = new Error("cart not valid");
        reject(err);
    }
   const orderId="12345";
    if(orderId)
    {
        resolve(orderId);
    }
});
return pr;
}
function processpayment(orderid)
{
    return new Promise(function(resolve,reject)
{
    resolve("payment successfull");
})
}
function validcart(cart)
{
    return false;
}