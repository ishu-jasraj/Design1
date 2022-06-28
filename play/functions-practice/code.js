
var passengers=[
    {
        name:'meena patel',
        paid:true,
        class:'business'
    },
    {
        name:'raja choudhary',
        paid:false,
        class:'coach'
    },
    {
        name:'harshit kamra',
        paid:false,
        class:'business'
    },
    {
        name:'yogesh jajodia',
        paid:true,
        class:'coach'
    },
    {
        name:'seema choudhary',
        paid:false,
        class:'premium economy'
    },
    {
        name:'raja khandelwal',
        paid:false,
        class:'premium economy'
    }
]

var noFlyList='yogesh patel';

var processPassengers=function(passengers){
for(var i=0;i<passengers.length;i++)
{
    if(isInvalid(passengers[i]))
    {console.log('flight cannot take off!!');return;}
}
console.log('tighten your seat belts!! flight is going to take off!!');
foodForPassengers(passengers);
}

var isInvalid=function (person)
{
    person.paid=true;
    if(person.paid==false||person.name==noFlyList)
    return true;
    return false;
}

var foodForPassengers=function(passengers)
{
    for(var i=0;i<passengers.length;i++)
    setTimeout(servePassenger,2000,passengers[i]);
}

function servePassenger(person)
{
    var getDrinkOrder=createDrinkOrder(person);
    var getDinnerOrder=createDinnerOrder(person);
    getDrinkOrder();
    getDinnerOrder();
    getDrinkOrder();
}

function createDinnerOrder(person)
{
    var getorder;
    if(person.class=='business')
    getorder=function(){alert('Dinner options: chicken or pasta. What would you like to have?');}
    else if(person.class='coach')
    getorder=function(){alert('Dinner options: peanuts or chanaas. What would you like to have?');}
    else if(person.class=='premium economy')
    getorder=function(){alert('Dinner options: snackbox or cheese plate. What would you like to have?');}

    return getorder;
}

function createDrinkOrder(person)
{
    var getdrink;
    if(person.class=='business')
    getdrink=function(){alert('would you like a cocktail or a drink?');}
    else if(person.class=='coach')
    getdrink=function(){alert('You can choose to have a cola or simply a glass of water sir');}
    else if(person.class=='premium economy')
    alert('would you like to have a coke or a coffee?');
    return getdrink;
}

processPassengers(passengers);

var arr=[1,4,2,5,3,6,8,7];
arr.sort(compare);

function compare(num1,num2)
{
    if(num1>num2)
    return 2;
    else if(num1==num2)
    return 0;
    else
    return -2;
}
console.log(arr);

var colaville=[
    {name:'coke',color:'red',sold:1230},
    {name:'pepsi',color:'black',sold:1030},
    {name:'martini',color:'purple',sold:130}
]

function compareName(obj1,obj2)
{
  if(obj1.name>obj2.name)
  return 1;
  else if(obj1.name==obj2.name)
  return 0;
  else if(obj1.name<obj2.name)
  return -1;
}
function compareColor(obj1,obj2)
{
  if(obj1.color>obj2.color)
  return 1;
  else if(obj1.color==obj2.color)
  return 0;
  else if(obj1.color<obj2.color)
  return -1;
}
colaville.sort(compareName);
console.log(colaville);
colaville.sort(compareColor);
console.log(colaville);


var secret='007';
var getSecret=function(){
    var secret='008';
    var getsecretnum=function(){console.log(secret);}
    return getsecretnum;
}

var secretnum=getSecret();
secretnum();