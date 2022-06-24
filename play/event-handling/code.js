// function pageLoadHandler()
// {
//     alert("Lets start the game!!");
// }

// window.onload=pageLoadHandler;

document.getElementById('button').addEventListener('click',checkInput);

function checkInput()
{
    var guess=document.getElementById('guessInput').value;
    guess=guess.toLowerCase();
    console.log(guess);
    if(guess=="monalisa"||guess=="mona lisa")
    document.getElementById('normal-image').style.display='block';
    else
    alert('you entered wrong answer !!');
}