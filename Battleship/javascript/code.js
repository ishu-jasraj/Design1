var hits=0;
var x=Math.floor(Math.random()*5);
var y=Math.floor(Math.random()*7);
var position1=x.toString()+y.toString();
var position2=(x+1).toString()+y.toString();
var position3=(x+2).toString()+y.toString();
console.log(position1,position2,position3,typeof position1);
document.getElementById('fire-button').addEventListener('click',checkCoordinates);
//document.getElementById('fire-button').onclick=checkCoordinates;

var view=
{
    displayMessage:function(message)
    {
        document.getElementById('message-area').innerHTML=message;
    }
}

function convert(inputCoord)
{
    console.log(inputCoord);
    var s=inputCoord[0];
        switch(s)
    {
        case 'A':return 0;break;
        case 'B':return 1;break;
        case 'C':return 2;break;
        case 'D':return 3;break;
        case 'E':return 4;break;
        case 'F':return 5;break;
        case 'G':return 6;break;
        default:
        alert('enter a valid co-ordinate');
    }
}

function checkCoordinates()
{
   var userInput=document.getElementById('guessInput').value;
   console.log(userInput);
   var convertedInput= convert(userInput)+userInput.substring(1);
   if(convertedInput==position1||convertedInput==position2||convertedInput==position3)
   {
    hits++;
    view.displayMessage('A Hit');
    document.getElementById(convertedInput).style.background="url('file:///C:/Users/lenovo/Documents/GitHub/Design1/Battleship/images/ship.png') no-repeat center center";
    document.getElementById(convertedInput).style.backgroundRepeat="no-repeat";   
    }
   else
   {
    view.displayMessage('A Miss');
    document.getElementById(convertedInput).style.background="url('file:///C:/Users/lenovo/Documents/GitHub/Design1/Battleship/images/miss.png') no-repeat center center";
   }

   if(hits==3)
   view.displayMessage('You Sank my battleship😐');
}
