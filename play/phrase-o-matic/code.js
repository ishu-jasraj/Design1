function makePhrase(){
    var phrase1=['ishu','pihu','gungun','tiya','babban'];
    var phrase2=['wins','loses'];
    var phrase3=[10,1000,270,500,90,490,6000,800,10000];

    var guess1=Math.floor(Math.random()*phrase1.length);
    var guess2=Math.floor(Math.random()*phrase2.length);
    var guess3=Math.floor(Math.random()*phrase3.length);

   // alert(`${phrase1[guess1]} ${phrase2[guess2]} ${phrase3[guess3]} Rupees`);

    //objects
    var cadi={
        make:"GM Cadillac",
        color:"tan",
        mileage:12852,
        model:1955,
        convertible:false,
        passengers:5,
        bigSeat:true
    };

    alert(cadi.color);
    cadi.convertible=true;
    alert(cadi.convertible);
    var isdel=delete cadi.color;
    //if any variable doesnot exist in js, it shows undefined value for it
    alert(cadi.color);
    alert(isdel);
}
makePhrase();

//pre qualification of object
var taxi={
    model:'taxi',
    year:1955,
    color:'yellow',
    passengers:4,
    convertible:false,
    mileage:12866
};

var isWorth=prequalify(taxi);

function prequalify(car)
{
    if(car.mileage<=10,000&&car.year<=1960)return true;
    car.color='pink';
    return false;
}

if(isWorth)
alert("you need to check out thi taxi");
else
alert("please pass on this taxi, yukk!! with car mileage "+taxi.mileage+' with new color '+taxi.color);