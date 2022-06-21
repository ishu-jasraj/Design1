var location1="1";
var location2="6";
var hit=0,miss=0,isSunk=false;
var guess;
while(isSunk==false)
{
guess=prompt('enter the number to find battleship');
    if(guess<1||guess>8)
    alert("enter a valid number");
    else if(guess===location1||guess===location2)
    {
            hit+=1;
            if(hit==2)
            {isSunk=true;
                document.write("All battle ships are hit. Your score is "+hit+miss);
            }
        if(guess==location1)
        {
            document.getElementById('one').innerHTML='🛥️';
            location1='0';
        }
        else{
            document.getElementById('six').innerHTML='🛥️';
            location2='0';
        }
    }
    else
    {
        miss+=1;
    }
  
 }

 
