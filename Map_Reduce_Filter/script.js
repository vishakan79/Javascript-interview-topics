/*let arr=[1,2,3,4,5];
const output = arr.map(function(x)
{
    return x*2;
})
const triple=arr.map(function(x)
{
    return x*3;
})
const binary= arr.map(function(x)
{
    return x.toString(2);
})
console.log(output);
console.log(triple);
console.log(binary);
*/
/*let arr=[1,2,3,4,5];
let output=arr.filter(iseven);
function iseven(x)
{
    return x%2===0;
}
console.log(output);// filter can function used to filter the partipular logical eqution return value
*/
// normal how the reduce function using to implemrnt

/*

//example1
let arr=[5,6,7,8,9];
let output=arr.reduce(function(acc,curr)
{
    acc=acc+curr;
    return acc;
},0);
console.log(output);

let normal=[6,7,8,9,5];
function sum(arr)
{
    let out=0;
    for(let i=0;i<normal.length;i++)
    {
        out=out+arr[i];
    }
    return out;
}
console.log(sum(arr));
*/
//example2 find the largest element

/*let arr=[2,3,4,5,9]
function findMax(arr)
{
    let max=0;
    for(let i=0;i<arr.length;i++)
    {
       if(arr[i]>max)
       {
        max=arr[i];
       }
    }
    return max;
}
console.log(findMax(arr));
// now we can use the reduce function find the largest element

let value=[2,3,4,6,7,9];
let output=value.reduce((max,curr)=>
{
  if(curr>max)
  {
    max=curr;
  }
  return max;
},0);
console.log(output);
*/
 const arr=[
    {firstname:"vishakan",Secondname:"Sundararaj",age:19},
    {firstname:"balaji",Secondname:"Pandiyan",age:20},
    {firstname:"vinoth",Secondname:"Kumar",age:19}
 ];

 const output=arr.map((x)=>x.firstname+x.Secondname)
 console.log(output);
 const outputAge=arr.reduce((acc,curr)=>
{
   if(acc[curr])
   {
    acc[curr.age]=++acc[curr.age];
   }
   else{
    acc[curr.age]=1;
   }
   return acc;
},{});
console.log(outputAge);

// filter
let younger=arr.filter((x)=>x.age<20).map((x)=>x.firstname)
console.log(younger);