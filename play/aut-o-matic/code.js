var fiat={
    make:"fiat",
    model:"500",
    year:1955,
    color:"red",
    state:false,
    fuel:0,
    start:function()
    {
        this.state=true;
    },
    stop:function(){
        this.state=false;
    },
    drive:function(){
        this.start();
        if(this.state&&this.fuel>0)
        {
        alert('zoom zoom!!');
        this.fuel-=1;
        this.stop();
        }
        else
        {alert('you need to start the engine first');
        this.addfuel(20);
        }
    },

    addfuel:function(amount){
       this.fuel+=amount;
    }
};

fiat.drive(); 
fiat.drive();

for(var i in fiat)
{
    console.log(i+" : "+fiat[i]);
}