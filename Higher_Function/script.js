const radius=[3,2,1,4];
const area= function(radius)
{
    return Math.PI*radius*radius;
}
const circumference= function(radius)
{
    return Math.PI*radius;
}
const sides= function(radius)
{
    return 2*radius;
}
Array.prototype.calculate=function (logic)
{
    let output=[];
    for(let i=0;i<this.length;i++)
    {
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.map(area));
console.log(radius.calculate(area));
//console.log(circle(radius,circumference));
//console.log(circle(radius,sides))

