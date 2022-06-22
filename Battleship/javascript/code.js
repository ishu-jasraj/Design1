var hits=0;
var x=Math.floor(Math.random()*5);
var y=Math.floor(Math.random()*7);
var position1=x.toString()+y.toString();
var position2=(x+1).toString()+y.toString();
var position3=(x+2).toString()+y.toString();
document.getElementById('fire-button').addEventListener('click',checkCoordinates);
//document.getElementById('fire-button').onclick=checkCoordinates;

var view={
    displayMessage:function(message)
    {
        document.getElementById('message-area').innerHTML=message;
    }
}
function checkCoordinates()
{
   var userInput=document.getElementById('guessInput').value;
   var convertedInput= convert(userInput);
   if(convertedInput==position1||convertedInput==position2||convertedInput==position3)
   {
    hits++;
    view.displayMessage('A Hit');
    document.getElementById(convertedInput).innerHTML="SHIP";
    document.getElementById(convertedInput).style.color=white;
   }
   else
   {
    view.displayMessage('A Miss');
    document.getElementById(convertedInput).innerHTML="MISS";
    document.getElementById(convertedInput).style.color=white;
   }

   if(hits==3)
   view.displayMessage('You Sank my battleship😐');
}

function convert(inputCoord)
{
    var s=inputCoord.substring(0,0);
    console.log(s);
    var result=(s-'A')+inputCoord.substring(0,1);
    console.log(result);
    return result;
}
