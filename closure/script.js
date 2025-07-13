/*function x()
{
    var a=7
    function y()
    {
        console.log(a);
    }
    y();
}
x();
*/
/*function x()
{
    var a=7;
    function y()
    {
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z);
z();
*/
/*function x()
{
    var a=10;
    function y()
    {
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();
z();
*/
/*function z()
{
    var b=100;
    function x()
    {
       var a=7;
       function y()
       {
         console.log(a,b);
       }
       y();
    }
    x();
}
z();
*/
/*function x()
{
    var a=10;
    function y()
    {
        console.log(a);
    }
    return y;
}
var c= x();
c();
*/
/*function x(b)
{
    var a=10;
    function y()
    {
        console.log(a,b);
    }
    return y;
}
var c = x("hello word");
*/
/*function outest()
{
    var c=20;
    function outer(b)
    { 
       // let a=10
        function inner()
        {
            console.log(a,b,c);
        }
        return inner;
    }
    return outer;
}
let a=100;
var ans = outest()("hello world");
ans();
*/

/*function counter()
{
    var count=1;
    return function increament(){
        console.log(count++);
    }
}
 var c=counter();
 c();
 c();
 var c2=counter();
 c2();
 */
/*function counter()
{
   var count=1;
   this.increament = function()
   {
    count++;
    console.log(count);
   }
   this.decrement = function()
   {
    count--;
    console.log(count);
   }
}
var c= new counter();
c.increament();
*/
function x()
{
    var a=10;
    return function y()
    {
        console.log(a);
    }
}
var c= x();
c();