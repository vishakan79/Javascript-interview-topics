/*const cart=["shoes","pants","shirts"];
createorder(cart,function()
{
  processpayment(orderid)
})//order id
let promise= createorder(cart);
//defualt{data:myorderId}
promise.then(function()
{
  processpayment(orderid);
})
  */
 /*const github_api="https://api.github.com/users/torvalds";
 const user=fetch(github_api);
user.then(function(data)
{
  console.log(data);
})
  */
 createorder(cart).
 then(function(orderId)
{
  paymentprocess(orderId)
}).then(function(paymentinfo)
{
  summarypayment(paymentinfo)
}).then(function()
{
  updatesummary();
})
