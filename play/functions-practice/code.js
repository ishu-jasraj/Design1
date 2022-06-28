
var passengers=[
    {
        name:'meena patel',
        paid:true
    },
    {
        name:'raja choudhary',
        paid:false
    },
    {
        name:'harshit kamra',
        paid:false
    },
    {
        name:'yogesh jajodia',
        paid:true
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
}

var isInvalid=function (person)
{
    person.paid=true;
    if(person.paid==false||person.name==noFlyList)
    return true;
    return false;
}

processPassengers(passengers);