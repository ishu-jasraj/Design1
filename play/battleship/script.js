var randomNumber=Math.floor(Math.random()*5);
var location1= randomNumber;
var location2=location1+1;
var location3=location2+1;
var hits=0;
var guess,guesses=0,isSunk=false;

console.log(location1,location2,location3);

function found()
{
  if(guess==location1)location1=0;
  else if(guess==location2)location2=0;
  else
  location3=0;
}

while(!isSunk)
{
    guess=prompt('enter the number between 1 to 8');
    if(guess<1||guess>8)
    alert('enter a valid number');
    else
    {
        guesses+=1;
        if(guess==location1||guess==location2||guess==location3)
        {
            alert('hit');
            hits+=1;
            if(hits==3)
            {
                isSunk=true;
                alert('you hit my battleship');
            }
            found();
        }
        else
        alert('miss');
    }
}

alert('you took '+guesses+' guesses to sank my battleship!!');