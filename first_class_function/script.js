// function statement and function declration are same
/*function a()
{
    console.log(" a is called");
}
a();
// function expression
/*var b= function()
{
    console.log(" b is called");
}
b();
//anoynmous function
/*function ()
{
    // function without name and it can use acess the value using the function
}
*/
// named function
/*var a=function xyz()
{
    console.log("a is called");// In the named function only can acess the local space.
}
a();
xyz();
*/
// difference between parameter and arugement
/*function add(num1,num2) // this are parameter it can identifer or local variable can got value
{
   console.log(num1+num2);
}
add(1,2);// arugement can pass the value
*/
// In javascript has the special feature we can pass the function inside the parameter and return also
function b(param1)
{
   return function()
   {

   }
}
function xyz()
{

}
b();