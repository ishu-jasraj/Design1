
//images are returned a nodelist object that works similar to array object
var images=document.getElementsByTagName('img');
for(var i=0;i<images.length;i++)
{
    images[i].addEventListener('click',imageHandler);
}

function imageHandler(e){
    var image=e.target;
    var id=image.id;
    image.src="images/"+id+".jpg";

    setTimeout(reblur,2000,image);
}

function reblur(image)
{
    var name=image.id;
    image.src='images/'+name+'blur.jpg';
}