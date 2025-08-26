


/***********variables****************
var can be updated and can be re-declared
has global scope ,function scope but dont have block scope. 
let can be updated but cannot be re declared.
has global scope ,function scope and block scope but unlike var it does not assign it to global property window object
const cannot be updated/reassigned nor be redeclared.
has global scope ,function scope and block scope but unlike var it does not assign it to global property window object



//*************Spread Operators ****************

converting strings into list of arrays
combining arrays or adding values to arrays
combining objects or adding values to objects
shallow copy of arrays and objects

/************Destructuring************* 
converting arrays into individual variables
 converting objects into individual variables.

let arr=["amazon","google","facebook","instagram"]
let [company1,company2,company3,company4]=arr
console.log(company1)
console.log(company4)

let obj={
   name:"Rajesh",age:31,DOB:"21/08/1992"

}

let {name,age,DOB}=obj

console.log(name)
console.log(age)
console.log(DOB)
//*****************string Interpolation************** */
//used to embed expression , variables inside the string
//`${var name}`,`${expression}`


/*Advanced concepts.

local properties and data binding

prepertyName=value.(in JS file)
{property name}.(in HTML file)
**********************************************


methods and two way data binding

--(in HTML file)
input type or button using some event  

onkeyup={methodName},onclick={methodName},onchange={methodName}
{propertyName}

 [in JS file]

 propertyName=value

methodName(event)
{ 
this.propertyName=event.target.value
}

*******************************************************************
(in HTML file)
               
input type or button using some event  

onkeyup={methodName},onclick={methodName},onchange={methodName}
{objName.propertyName}



(in JS file)
import track
/* @track -- to track changes in  object perperties or array elements
@track objname ={propertyName:"value",
               propertyName:"value",
                 propertyName:"value"}   
             
methodName(event){
this.obj.propertyName=event.target.value (or) 
[without importing/using track using ... spread operator]

this.obj={...this.obj,"propertyname":event.target.value}
}            



******************************************************************


/* getters -- array elements and expressions cant be used directly in html file so we using getter method

In JS file
get methodName(){
return this.arr[1] (or)
return this.propertyName1*this.propertyName2
}

In HTML  file
{methodName} ---[getter method name]

************************************************************

*************Conditional Rendering*************
--In HTML file

<template if:true={propertyName or getterMethodName}>
<div> true area logic </div>
</template

based on input type text/button elements events
onkeyup={methodName} onclick={methodName} onchange={methodName}

<template if:false={propertyName or getterMethodName>
<div> false area logic </div>
</template>


--- In JS file

propertyName=false/true --initiate some value
later
based on input type text/button elements events

methodName()
{
this.propertyName=true
}

-- using getter method

methodName(events)
{
this.propertyName=events.targets.value
}


get methodName()
{
return this.propertyName==="value"
}


**************************************************************
foreach () to iterate or process over array elements

-- in HTML file---

<template for:each={arrayname} for:item="currentitem" for:index="index">
<div key={currentitem}>{currentitem}</div> (first element inside the template should be key)
</template>

[key -best way is to use a string that uniquely identifies a list item among array]
[key must be number or string ,it cant be an object,you cant use index as a value for key]

--in JS file---

arrname=[" "," "," "," "," "]


*****************************************************************************

to apply a special behaviour to the first or last item in a arrlist we prefer iterator


---in HTML file

[{iteratorname.value.propertyname},{iteratorname.index},{iteratorname.first},{iteratorname.last}]


<template iterator:iteratoritem={arrName}>

<div key={arrobj.value.id}></div> ----  [{iteratorname.value.propertyname}]

code to apply special behaviour firstitem

 <template if:true={arroj.first}>        ---  [iterator.first]
      <div>
   <strong>List of Top companies and their CEO's</strong>
      </div>
</template>
process elements in te array

 <li>
<strong>{arrobj.value.property} </strong>
      {ceo.value.name}
</li>


code to apply special behaviour last item

 <template if:true={arrobj.last}>
      <div >
   <strong>Thanks for reading the list</strong>
   </div>
   </template>


</template>


-- in JS file
arrObj=[

{propertyname:"value"},
{propertyname:"value"},
{propertyname:"value"},
{propertyname:"value"}
]

*********************************************************************************

composition is adding Component within the body of another component

it starts wit <c-child-component> </c-child-component>---- 

first deploy child component then deploy parent component
[c-component-name with lower case letter separated with hyphen.
If it is continuous capital letter LWC then  it should be l-w-c]

no need to change isexposed property of child component as we are not exposing it directly.
only parent component pulls the child component

******************************************************************************************************

shadow DOM.




[DOM queries, events and CSS styles does not go other side of the shadow.It will not cross the shadow boundary]

same like Light Dom and Shadow Dom parent compoennt and cilld component behave in LWC

in index.html

<style>
[this style will apply only to the Light DOM that is main dom inside body tag <body></body> of html]
p{color:red;
}
</style>
<button onClick="mymethod()">Click Me</button>


<div id="host">
create all needed things 
</div>


[script tag is used for writing java scripts in HTML file ]
<script>
const ConstVarName=document.querySelector("#host")
const ShadowRoot=ConstVarName.attachShadow({mode:"open"}) -
[mode -open so that data will be passed from parent to child]
SHadowRoot.innerHTML='<p>I am shadow Dom</p>'
function myMethod()
{
let letVarName=document.querySelectorAll('P') 

[this will take only tags from Light DOm that is main DOM]
console.log(letVarName)


}
</script>

*********************************************************************************************
Accessing elements in the component


in HTML

<h1>--------</h1>
<div className="xxx">-------</div>

<div class="child" lwc:dom="manual"></div>

[lwc:dom="manual"]
use this directive in the tag in which you going to link or embed your shadow dom
in JS file

const constVarName=this.template.queryselector('tagname') [or] this.template.queryselector('.classname')

constVarName.style.border='1px solid red'
console.log(constVarName.innerText)


const constVarName=this.template.queryselector('tagname') [or] this.template.queryselector('.child')

constVarName.innerHTML='<p>Im a Shadow Dom</P>'


const constVarName=this.template.querySelectorAll('.name')
        Array.from(constVarName).forEach(item=>{
           console.log(item.innerText)
           item.setAttribute("title",item.innerText)
*******************************************************************************************************

Lightning Design System 

for CSS stying we can copy the content and paste to use that styling in html file.
no need to study css can use this library

under Utility

box,padding,margin,badges,brand band,grid

***************************************************************************************************


component communication.

parent to child using primitive data type.[primitive data type - number ,boolean,string..]

In childComponent.js
import {api}...

//declare property name
@api propertyName



In parentComponent.html
//refering child component use the attribute as propertyName and then define/assign/initiate a value
<child-component  propertyName=value ></child-component>

In childComponenet.html
//use the property binding

title={propertyName}
{propertyName}



structure of component in HTML 
<lightning-card>
<div> </div>
</lightning-card>



parent to child using Non -primitive data type.[Non primitive data type - array ,objects , array of objects]


In childComponent.js
import {api}...

//declare property name
@api propertyName

In parentComponent.js
define/assign a value for array of objects
arr=[
{},
{},
{} ]

In parentComponent.html
//refering child component use the attribute as childComponentProperty Name and then map  the  property 
// which is defined in parentCOmponent.js file using data binding concept

<child-component  attribute-Name={propertyName}>
</child-component>


In childComponent.html
//use foreach template to loop over the array of objects

<template for:each={actual array} for:item="currentitem">
key={item.header} [unique property name]
{item.propertyname2}
{item.propertyName3}
</template>

Parent to child communication using action at parent

In childComponent.js
import {api}...

//declare property name
@api propertyName

In childComponent.html

<tenplate>
//define progress bar lightning-progress just by referring library
//in the value attribute=map the property name which is created in the child.Component.js file  using data binding

<lightning-progress-bar value={propertyName}>
</lightning-progress-bar>
</template>


In parentComponent.html
//create input-type or input-text field
//then refer child component 
//then use the propertyName as attribute name in the child-component-reference
 
<lightning-card>
<div>
<lightning-input type=number onKeyUp={TriggerFunctionName}>
</lightning-input>
<child-component  childProperty-Name={parentPropertyName}>
</child-component>
</div>
</lightning-card>

In parentComponent.js
parentPropertyName=value

TriggerFunctionName(event){
this.parentPropertyName=event.target.value
}


calling child method from parent component.


In childcomponent.html
<lightning-card>
<div class="">
<lightning-slider value={propertyName} onchange={triggeredFunctionnName}>
</lightning-slider>
</div>
<lightning-card>





In cildcomponent.js
//initiate a property value

import {api}
propertyval=20

triggeredFunction(event){
this.propertyName= event.target.value
}


 @api functionName(){
this.propertyName=50
}


In parentComponant.html
<ligtning-button onClick={triggeredFunctionName}>
</ligtning-button>


In parentComponant.js
make a reference of child component then call the method in the child component
triggedFunction(){
this.template.queryselector('child-component-ref').methodName()
}



CHild to Parent using simple Event

In childcomponent.html

//create a modal component using library
//create a button with onCclick

<section class="">
<header class="">
</header>
<footer class="">
<button onCLick={triggeredFunctionName}>Ok</button>
</footer>
</section>

In childcomponent.js

triggeredFunction()
{
const eventVariableName=new CustomEvent('EventName')
this.dispatchEvent(eventVariableName)
}


In parentComponant.html
//create a lightning button with onCLick
//create a conditional rendering template and inside refe the child component then listen to the  the event

<lightning-button onCLick={triggeredFunctionName}>Ok</lightning-button>
<template if:true={propertyName}>
<c-child-component onEventName={triggeredFUnctionName}>
</c-child-component>
</template>

In parentComponant.js

propertyName=defaultValue

triggeredFunctionName(){
this.propertyName=value
}

//this fun will receive the event
triggeredFunctionNameCustEvnt(){
this.propertyName=value
}

CHild to Parent communication using  Event with data


In childcomponent.html

//create a modal component using library
//create a button with onCclick

<section class="">
<header class="">
</header>
<footer class="">
<button onCLick={triggeredFunctionName}>Ok</button>
</footer>
</section>


In childcomponent.js

triggeredFunction()
{
const eventVariableName=new CustomEvent('EventName' ,
{detail:"data passing"}) 

[OR]  //for complex data

{  
detail:{
msg: "data passing"
}


})


this.dispatchEvent(eventVariableName)
}


In parentComponant.html
//create a lightning button with onCLick
//create a conditional rendering template and inside refe the child component then listen to the  the event

<lightning-button onCLick={triggeredFunctionName}>Ok</lightning-button>
<h1>{propertyName1}</h1>
<template if:true={propertyName}>
<c-child-component onCustEventName={triggeredFUnctionName}>
</c-child-component>
</template>


In parentComponant.js

propertyName=defaultValue
propertyName1

triggeredFunctionName(){
this.propertyName=value
}

//this fun will receive the event
triggeredFunctionNameCustEvnt(event){
let propertyName1=event.detail [OR]
let propertyName1=event.detail.msg  //for complex data
this.propertyName=value
}


Child to Parent communication using event bubbling

In childcomponent.html

//create a modal component using library
//create a button with onCclick

<section class="">
<header class="">
</header>
<footer class="" onClick={triggeredFunctionName1}>
<button onCLick={triggeredFunctionName}>Ok</button>
</footer>
</section>


In childcomponent.js

triggeredFunction()
{
const eventVariableName=new CustomEvent('EventName' ,{ 

bubbles:true,
//for complex data
detail:{
msg: "data passing"
}


})
this.dispatchEvent(eventVariableName)
}

triggeredFunctionName1(){
console.log("footerHandler called")
}


In parentCOmponent.html
//create a lightning button with onCLick
//create a conditional rendering template and inside refe the child component then listen to the  the event
<ligtning-card title="">
<div class=""  onCustEventName={triggeredFUnctionName}>
<lightning-button onCLick={triggeredFunctionName}>Ok</lightning-button>
<h1>{propertyName1}</h1>
<template if:true={propertyName}>
<c-child-component >
</c-child-component>
</div>
</ligtning-card>
</template>


In parentComponant.js

propertyName=defaultValue
propertyName1

triggeredFunctionName(){
this.propertyName=value
}

//this fun will receive the event
triggeredFunctionNameCustEvnt(event){
let propertyName1=event.detail [OR]
let propertyName1=event.detail.msg  //for complex data
this.propertyName=value
}

*****************************************************************************************************************
PubSub Module.
//to communicate between independant components.
//is javascript standard way.LMS is salesforce standarized way.

//create a component called PubSub -then delete the html file it contains only javascriot code so 
// it is a service component.
//it is a script that doesnot change.

const store ={}

const subscribe={

}


const unsubscribe={

}

const publish={

}

export default{

subscribe,
unsubscribe,
publish
}


//create independant component PubSUb component A
//create independant component PubSUb component B

In PubSUb Component A.html
<lightning card>
<div class="">
<lightning-input onKeyUp={inputHandler}>
</lightning-input>
<lightning-button onClick={PublishHandler}>
<lightning-button>
</div>
</lightning card>

In PubSUb Component A.Js
import pubsub from 'c/pubsub'
message
inputHandler(event){
this.message=event.target.value
}

publishHandler(){
pubsub.publish('componentA',this.message)
}


//some compoent should subscribe.on load of the component itself 
// it should subscribe so using in connectedCallBack

In PubSUb Component B.Js
import pubsub from 'c/pubsub'
message
connectedCallback(){
this.callSubscriber()
}

callSubscriber(){
 pubsub.subscribe('componentA',function(message){  [not work]
 //this scope will not work in the function inside another function.
 //use outside function or arrow function
pubsub.subscribe('componentA', (message)=>{ 
 this.message=message
})
 
 }

In PubSUb Component B.html

<lightning card>
<div class="">
Message Received - {message}
</div>
</lightning card>


******************************************************************************************************************************************** 
setter method

this metod is used to modify the data coming from the parent component
if object is passed as data to setter , to manipulate the object we have to 
create a shallow copy

And there we use the setter method.

Setter and the getter always use together.
And setter method name and the getter method name should be same whenever you use the getter setter.
Setter method always receive the data.It always expect a parameter here.
Setter we usually use to mutate the data, whatever the data comes.
If you want to add a property, remove a property or update a property you always do within the setter.
And the very important point here is if object is passed as a data to the setter, suppose this data
is an object to mutate the object.We have to create a shallow copy, otherwise it will throw an error.
Whenever you want to expose your method you use at the rate you already know.
And we know like we are using setter in the child component.
That means we definitely expecting some data to come from a parent component.
So we use at the rate API along with the getter setter, 

//create 2 compoennt  --setterDemoParent --//setterDemoChild

//in setterDemoParent.html
<lightning-card>
<c-ChildCOmponent childpropertyName={parentProperty}>
</c-ChildCOmponent>
</ligtning-card>

//in setterDemoParent.js
ObjTOBePassed={
property1:"value1"
property2:numValue2

}


//in setterDemoChild.html
<p>Hurray i am a child component</p>
<strong>Name</strong>--{propertName1}
<strong>age</strong>--{propertName2}
<strong>location</strong>--{newpropertName1}


//in setterDemoChild.JS
import {api}
PropertyName
@api 
get methodname(){
return this.PropertyName
}

set SamemethodnameAsGetter(data){
let newProperty=data.parentproperty2*2
 this.PropertyName={...data,parentproperty2:newProperty,"newproperty1":"value"}
}

***********************************************************************************
Passing Markup using slots.

markup is nothing.It's basically a HTML template
slot is useful to pass HTML markup into another component.

So if we have to pass from one component to another component, we use slot.

And the slot markup is used to catch the HTML passed by the parent component.

You can't pass an Aura component into the slot.

There are two types of slot name slot and the unnamed slot.

When a name attribute is defined in a slot element like this slot tag the name and some name value,

then we call it as a name slot.

A slot without a name attribute.

We call it as an unnamed slot.



If you have a requirement just to render everything once, go with the unnamed slot.

But if you have to place the content at a specific location, then go with the named slot.

NamedSlot
UnNamedSlot
onSlotChange={}

SlotChildDemo.html


<div>What is Your Name?</div>
<div><slot name="first"></slot></div> <!--named slots-->
<div>What is Your Age?</div>
<div><slot name="second"></slot></div> 
<footer class="slds-card__footer slds-hide">
<slot name="footer" onslotchange={handleFooterChange}></slot>
</footer>


SlotDemoChild.js

handleFooterChange(){
const footerElem = this.template.querySelector('.slds-card__footer')
if(footerElem){
footerElem.classList.remove('slds-hide')
}


In SlotParentDemo.html
 <div class="slds-p-around_medium">
            <c-slot-child-demo>
                <p class="slds-text-color_success" slot="first">My Name is Salesforcetroop</p>
                <p class="slds-text-color_error" slot="second">My Age is 25</p>
                <p slot="footer"> I am footer</p>
            </c-slot-child-demo>
        </div>
        <div class="slds-p-around_medium">
            <c-slot-child-demo>
                <p class="slds-text-color_success" slot="first">My Name is Salesforcetroop</p>
                <p class="slds-text-color_error" slot="second">My Age is 25</p>
                <!-- <p slot="footer"> I am footer</p> -->
            </c-slot-child-demo>
        </div>


 In SlotParentDemo.js
 *** no code***
 

***************************************************************************************

CSS behaviour in parent child component

 first point is parent CSS can't reach into a child component.

Second point is a parent component CSS can style a host element (c-css-child).

So host element is the tag that we use to embed the child component in the parent component.

The third point is a child component CSS can reach up and style its own host element.

So if you don't want to apply the CSS to a host element from the parent, a child component also can

apply that CSS.

And the fourth point is you can style to an element pass into the slot from the parent component only.




CSSChildDemo.css
:host{
    display: block;
    background-color: red;
    color:white;
}
:host(.blue){
    display: block;
    background-color: blue;
    color:white;
}


CSSChildDemo.html
<h1>Hello i am child component</h1>
    <slot></slot>

CSSParentDemo.css

h1{
    font-size: 30px;
    color:red;
}
 c-css-child-demo{
    display: block;
    background-color: green;
    color:white;
} 
p{
    font-size: 20px;
    color:yellow;
}

CSSParentDemo.html
<div class="slds-p-around_medium">
            <h1>Hello i am parent component</h1>
            <c-css-child-demo>
                <p>Hello I am slot one</p>
            </c-css-child-demo>
            <c-css-child-demo class="blue">
                <p>Hello I am slot two</p>
            </c-css-child-demo>
</div>


CSSParentDemo.JS
*** No Code****


***************************************************************************************


Lightning Messaging Service

LWC to LWC communication.

the first step is.

We have to create a folder called Message Channel.

And that folder we have to create under the path force app slash main slash default.

The second step.Now we have to create.

A file that with the channel name dot message channel hyphen meta dot XML inside that folder.

***************************************************************************************************


Salesforce Resources.

static resource can be archived files like zip or zip files, or it can be images, direct images or stylesheets or
a JavaScript library or any other file.

---Images from static resources.
import myresource from '@salesforce/resourceUrl/resourceReference'



A static resource name can contain only underscore and alphanumeric character and must be unique in your org.
It should not be like you say, you upload an image and again you are uploading the same image.

ABC It should be unique.
It should always begin with a letter.No spaces allowed.Not to end with the underscore and not two consecutive underscores are allowed.

in Search [in the salesforce Org]-->Static Resource->New

********************************************************************************************************

ThirdParty Javascript Libraries  in LWC.

//importing the static resource
import resourceName from '@salesforce/resourceUrl/resourceName'

Import methods from the  PlatformResourceLoader module

import  {loadScri}

Using Third Party CSS Library.

*******************************************************************************************************
Content Asset File

*******************************************************************************************************
Internationalization.

*******************************************************************************************************
Access Labels

*******************************************************************************************************
Check Permissions.

*******************************************************************************************************
Access Client Form Factor

*********************************************************************************************************

Get Information about the current user

*********************************************************************************************************
Fetch Record Id and Object Name

*********************************************************************************************************
Toast Notification








****************************************************************************************

Navigation Service


****************************************************************************************

Navigate to Home

****************************************************************************************
Navigate to Chatter

****************************************************************************************

Navigate to New Record


****************************************************************************************

Navigate to New Record with Default Values




****************************************************************************************
Navigate to List View


****************************************************************************************
Navigate to Files


****************************************************************************************
Navigate to Record Page in View and Edit Mode

****************************************************************************************
Navigate to Tab

****************************************************************************************
Navigate to Record RelationShip Page


****************************************************************************************
Navigate to External Web Page


****************************************************************************************
Navigate to LWC Page


****************************************************************************************
Navigate to AURA Component


****************************************************************************************
Navigate to Visualforce Page


****************************************************************************************
Fetch Current Page Reference


****************************************************************************************


Base Lightning COmponents


****************************************************************************************

wiring  apex method

import apexMethodName from '@salesforce/apex/className.MethodName'
import filteredAccountTypeType from '@salesforce/apex/AccountController.filteredAccountTypeType'

export default class className extends LightningElement{



selectedType=''
@wire(apexMethodName{type:$selectedType})
filteredAccounts 

<template>

</template>


selectedType=''
@wire(filteredAccountTypeType,{type:$selectedType})
filteredAccounts;




accountList;
@wire(getAccountList )
accountsHandler({data, ,error})
{
if(data){
this.accountList=data;
}
if(error)
{
this.error=error;
}


}



    

********************************************************************************************************************

imperative apex method call

In JS file
accounts
handleClick()
{
getAccountList().then((result)=>{
this.accounts=result    

}).catch((error)=>{
    console.error(error)
    })




  searchKey=''
    callApex(){
    
    findAccounts({SearchKey:this.searchKey}).then((result)=>{
        
        this.accounts=result
        }).catch((error)=>{
            
            console.error(error)
            })
    
    
    }
}

In HTML file

<template>

<lightning-card>
<template if:true={accounts}>
 <template for:each={accounts} for:item=account>
  <div key={account.Id}>
   <p> Name - {account.Name}</p> 
   <p> Type - {account.Type}</p>
   <p> Industry - {account.Industry} </p>
  </div>
 </template>
</template>
</lightning-card>
</template>







*/
