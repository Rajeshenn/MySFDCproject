/***********Var keyword ******************/
//It can be updated and also can be redeclared
// var keyword works only function scope and block scope
/*
var course="zero to hero"
console.log(course)
var course ="master course in udemy"
console.log(window.course)


function abc()
{
   var anothercourse="hero in lwc"
   console.log(anothercourse)

}
abc()
//console.log(anothercourse)

//block course
if(2==2)
{

    var x=10
}
console.log(window.x)
*/


/**************let keyword ********************** */

//It can be updated but cannot be re-declared
//let keyword support global , function and block level scope. but unlike var it 
//does not create a property on global object
/*
let course1="let variable demo"
course1="let supports global"
console.log(course1)
function xyz()
{
let z="Roopa"
console.log(z)
}

xyz()
//console.log(Z)

if(3==3)
{
let y="salesforce"
console.log(y)
}
*/


/********************const keyword **************** */
//It cannot be updated but cannot be re-declared
//const keyword support global , function and block level scope. but unlike var it 
//does not create a property on global object
/*
const course="const keyword demo"
//course="const supports global scope"
console.log(course)

function cbd()
{
const x=23
console.log(x)
}
cbd()
if(4==4)
{
const y=39
console.log(y)
}
//console.log(y)

*/

/*
//number
var x=10.23
console.log(typeof x)

//bigint
var y=1023783467n
console.log(typeof y)

//string
var name='Sana'
console.log(typeof name)

//boolean
var isMonday=true
console.log(typeof isMonday)

//undefined
var Z
console.log(typeof z)

//objects
var obj={}
console.log(typeof obj)

//array objects
var arr=[]
console.log(typeof arr)

//symbol
var sym=Symbol("Id")
console.log(typeof sym)


//null(null is also type of object)
var q=22
q=null
console.log(typeof q)

//String() Boolean() - constructors start with the capital letters in the form of methods.
//constructors always initialize with the new keyword
console.log(typeof new String("hey"))

*/


//Equality comparison -normal comparison, strict comparison
//1..normal comparison - ==|| only compare value

/*
console.log(3=="3")
console.log('nikhil'=='nikhil')


//2. strict comparison (===)
//compare value + datatype
console.log(3==="3")

//null vs undefined
var a
console.log(a)

var b=null
console.log(b)


console.log(a===b)


*/



//SPREAD OPERATOR

//array
/*

var arr=["a","b","C"]
console.log(arr[0])
arr.push("3")
console.log(arr[1])
console.log(arr)

//objects

var obj={
   "name":"salesforce",
   "age":23,
   "full name":"zero to hero"
}


console.log(obj.name)
console.log(obj.age)
console.log(obj["full name"])
obj.hobbies="cricket"
console.log(obj)

*/


//expanding of arrays
/*
let greeting="Hello Eyeryone"
let charlist=[...greeting]
console.log(charlist)


//combinig array
let arr1=["amazon","google"]
let arr2=["faceook","instagram"]
let arr3=[...arr1,...arr2]
console.log(arr3)

//adding values to an array
let arr4=["a","b","c"]
let arr5=[...arr4,"nikhil"]
console.log(arr5)
*/

/*
//combinig ojects
let obj1={name:"salesforce",age:23,date:"27/12/2024"}
let obj2={name:"facebook",age:55,next:"hello"}
let obj3={...obj1,...obj2}
console.log(obj3)
let obj4={scenario:"new value adding",...obj2}
console.log(obj4)
*/

//shallow copy of arrays
var arr10=["X","Y","Z"]
/*
arr10.push(20)

var arr11=arr10
arr11.push("nikhil")
console.log(arr10)
console.log(arr11)
*/
/*

var arr11=[...arr10]
arr11.push("nikhil")
console.log(arr10)
console.log(arr11)
*/

//Nested copy of arrays,two level data structure ... operator wont work fine.copies reference also so 
//write side values also will be replaced
/*
var arrobj=[
  {name:"nikhil"},
  {name:"salesforce"}

]
*/
/*
var arrobj1=[...arrobj]
console.log(arrobj1)
arrobj1[0].name="superman"
console.log(arrobj1)
console.log(arrobj)


var arrobj1=JSON.parse(JSON.stringify(arrobj))
arrobj1[0].name="superman"
console.log(arrobj1)
console.log(arrobj)

*/

//Destructuring - Array destructuring
/*
let arr=["amazon","Google"]
//let company1=arr[0]
//let company2=arr[1]

let [company1,company2]=arr
console.log(company1)
console.log(company2)


//object destructuring
let options={
  title:"zero to hero",
  age:23,
  type:"CRM"
}

let {title,age,type}=options
console.log(title)
console.log(age)
console.log(type)

*/

//string interpolations.
/*
var name="nikhil"
var age=23
console.log(`my name is ${name} and age is ${age}`)
var a=10
var b=20
console.log(`the sum of ${a} and  ${b} is ${a+b}`)
 var recordid=966866876
 console.log(`http://salesforce.com/${recordid}`)
*/

/*

//String Methods

let str="Hello guys doing i hope you are doing good"

//includes 
//this includes() method determines whether a string contains
//the characters of a specified string
let check=str.includes("hope")
console.log(check)

//indexof
//The indexof() methos returns the position of the first
//occurance of a specified value in a string
let index=str.indexOf("doing4")
console.log(index)


//startswith()
//determines whether a string begins with the character
//of a specified string
console.log(str.startsWith("Hello"))

//slice()
//method extracts parts of a string and returns
//extracted part in a new string.

let newstr=str.slice(0,5)
console.log(newstr)

//toLowwrCase
//converts string to a lowercase letter
let x="My naME is NiKHil"
console.log(x.toLowerCase())

//toUpperCase
console.log(x.toUpperCase())

//trim -  removes white spaces from both sides of a string
let searchText="     salesforce  LWC    "
console.log(searchText.trim())
console.log(searchText)


*/

//object/JSON operations.

/*

let obj={
  name:"Rajesh",
  age:30,
  dob:"21/08/1992"
}

//Object.keys
console.log(Object.keys(obj))

//Object.values
console.log(Object.values(obj))


//JSON.stringfy
let str=JSON.stringify(obj)
console.log(str)

//JSON.parse
console.log(JSON.parse(str))

*/

/*
//array methods
let arr=[2,3,5,7,9,10]

//map
 -- loop over the array and return new array based on the value return
//arr.methodname(function(currentItem,index,actualArray)){
//}

let newarr=arr.map(function(currentItem,index,array){
    console.log(`currentItem is ${currentItem} index${index} array ${array}`)
    return currentItem*2
})

    


//filter()

-- return new array with all te elements the elements that satisfy the condition.

let filteredvalues=arr.filter(function(currentItem,index,array)
{
return currentItem>5
})

console.log(filteredvalues)

//every()

-- return true or false if every element in the array satisfy the condition.
let age=[32,33,18,40]
let isAllAdult=age.every(function(currentItem){
    return currentItem>=18
}
)

console.log(isAllAdult)

//some()

-- return true if atleast one item in the array satisfy

let agelist=[32,33,18,40]
let isAdult=agelist.some(function(currentItem)
{
    return currentItem>32
})
console.log(isAdult)

//sort()
--  sort the elements of an array.
var names=["nikhil","john","smith"]
console.log(names.sort())

//sorting of numbers
var points=[10,39,12,80,54]
let Sortedvalue=points.sort(function(a,b)
{

    return b-a
})

console.log(Sortedvalue)

*/

//reduce()
//this method reduces the array to a single value(left to right)
//first define initial value when the loop runs it should start with initial value.total value will be initiated 
// with initial value 
//array.reduce(function(total,currentitem,index, array){
//},initialvalue)

/*
let num=[12,78,30]
let sum=num.reduce(function(total,currentItem)
{
    return total+currentItem
},0)

console.log(sum)


//foreach
// this metod calls for each array element.
//map always return something but fareach never returns .you can perform some operations like call the server 
// or manipulation of data within the loop. 
num.forEach(function(currentItem)
{
console.log(currentItem)
})

*/

// promise

/*

Promise is an object that may produce a single value sometime in the future.
--used to handle asynchronous operations in javascript.
--has 3 states 
pending -->resolved-value(fulfilled)--->rejected(error) 
--connecting LWC with apex or calling apex method.(fetching data from server)
--loading file from static resource or any other library.(loading file from system)

function checkIsSuccess(data){

return new Promise(function(resolve,reject){

if(data=="success")
{
    return resolve("successfully executed")
}else{

    return reject("process failure")
}
})
}

checkIsSuccess("").then(function(result)
{
    console.log(result)
}).catch(function(error)
{
console.log(error)
})

*/
/*

fetch('https://api.github.com/users/karkranikhil').then(function(result)
{
console.log(result)

}).catch(function(error)
{
    console.log(error)
})

*/

/*
fetch('https://api.github.com/users/karkranikhil').then(function(result)
{
return result.json()

}).then(function(response)
{
    console.log(response)
}).catch(function(error)
{
    console.log(error)
})

*/

//import minus, {PI,add} from './utils.js'

/*
import * as UTILS from './utils.js'


console.log(UTILS.PI)
console.log(UTILS.add(6,3))
console.log(UTILS.minus(90,5))
*/

/*
//query selector
let element=document.querySelector('div')
console.log(element.innerHTML)
element.style.color="red"

//Array.from - converting nodelist to array

let elementAll=document.querySelectorAll('div')
console.log(elementAll)
Array.from(elementAll).forEach(function(item)
{
item.style.color="green"
})

*/


//Event
/*
function myEvnt(){
    console.log("hurray")
}


//let btn=document.querySelector("button")
//btn.addEventListener("click",myEvnt)
*/
/*
document.addEventListener("mousemove",handler)

function handler(){
document.querySelector(".demo").innerHTML=Math.random()
}

function removeHandler(){
document.removeEventListener("mousemove",handler)

}


*/

/*
document.addEventListener("Hello", function(data){

    console.log("hello has called and send", data.detail)
})


//custom event

function callCustomMethod(){
 let event=new CustomEvent("Hello", {
    detail:{name:"nikhil"}
 })
    document.dispatchEvent(event)
}


*/

//Arrow Function.
//shorter form of function syntax
/*
function abc()
{
    console.log("Hello")
}
abc()
*/

/*
const abc=()=>console.log("Welcome")
abc()
*/

//{} curly braces in arrow function
//when we process something inside func() before return statement

/*
function sum(data){
 let sum=data+10
  return sum
}
*/
/*
const sum=(data1,data2)=>{
let sum=data1+data2+10
return sum
}
*/
//if using directly the expression with return statement withput using or in variables
/*
const sum=(data1,data2)=>data1+data2+10

console.log(sum(5,9))
*/

//arrow function inside map .shorter arrow function directly with argu and expression step 
//without mentioning function name 
/*
var arr=[1,2,3,4]
let newArr=arr.map((item)=>item*2)
console.log(newArr) 
*/
//problem solved by arrow function
//nested function cases outer context will be undefined 
//so we using arrow function for nested function

/*

let obj={
    Name1:"Preethi",
     getName:function(){
        console.log(this.Name1)
        const fullname=()=>{
            console.log(this.Name1)
            console.log("my name is "+ this.Name1 + " karkra")

        }
        fullname()
     }

}

obj.getName()

*/

//settimeout() 
//after the specified time call the function
/*
let timerId=window.setTimeout(function()
{console.log("timeout starts")
},2000)
console.log(timerId)
clearTimeout(timerId)
*/

let intervalId=window.setInterval(function()
{console.log("timeinterval starts")
},3000)

clearInterval(intervalId)