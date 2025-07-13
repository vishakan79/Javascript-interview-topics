/*function  x()
{
    var i=1;
    setTimeout(function() {
        console.log(i);
    },3000);
    console.log("namaste javascript");
    
}
x();
*/
/*function x()
{
    for(var i=1;i<=5;i++)
    {
        setTimeout(function() {
            console.log(i); // points the same keyword
        },i * 1000);
    }
    console.log("Namaste javascript");
}
x();
*/
/*function y()
{
    for(let i=1;i<=5;i++)
    {
        setTimeout(function() {
            console.log(i);
        },i * 1000);
    }
    console.log("Namste javascript");
}
y();
*/
/*function x()
{
    for(var i=1;i<=5;i++)
    {
        function close(z)
        {
            setTimeout(function() {
                console.log(z);
            },i*1000);
        }
        console.log("namste javascript");
        close(i);
    }
}
x();
*/
/*console.log("start");
setTimeout(function(){
    console.log("callback")
},5000);
console.log("end");

let starttime = new Date().getTime;
let endtime= starttime;
while(endtime > starttime+10000)
{
    end= new Date().getTime;
}
console.log("dtae timer expired")
*/
console.log("start");
setTimeout(function cb()
{
    console.log("callback")
},0);
console.log("End");