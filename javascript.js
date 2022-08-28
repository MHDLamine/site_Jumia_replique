const emplacement = document.getElementById("background");
var a = 0;
var auto = 0;
var time = 2000;
const imgStyle = () => 
{
    emplacement.style.width = "700px";
    emplacement.style.height = "420px";
    emplacement.style.backgroundRepeat = "no-repeat";
}
autoDisplay = () => 
    {
        auto++;
        emplacement.style.backgroundImage = "url('img/image" + auto + ".jpg')";
        imgStyle ();
        if( auto > 6)
        {
            auto = 1;
            emplacement.style.backgroundImage = "url('img/image" + 1 + ".jpg')";
            imgStyle ();
         
        }
        console.log(auto);
        setTimeout("autoDisplay()", time);
    }

imgDisplay= (b) => 
{
   
    if ( (a <= 6) && (a >= 1 ))
    {
        if(b == 0)
        {
            a--;
        }
        if(b == 1) 
        {
            a++;
        }
        emplacement.style.backgroundImage = "url('img/image" + a + ".jpg')";
        imgStyle ();
    }
    if( a < 1)
    {
        a = 6;
        emplacement.style.backgroundImage = "url('img/image" + a + ".jpg')";
        imgStyle ();
      
    }
    if( a > 6)
    {
        a = 1;
        emplacement.style.backgroundImage = "url('img/image" + a + ".jpg')";
        imgStyle ();
     
    }
}
//ANIMATION

function myMove(direction)
{   
    var direction;
    if (direction == 1) 
    {
    const move = document.getElementById("myAnimation");
    move.classList.remove("animRight");
    move.classList.add("animLeft");
    }
        if (direction == 2) 
        {
        const move = document.getElementById("myAnimation");
        move.classList.remove("animLeft");
        move.classList.add("animRight");
        }
}

window.onload = autoDisplay;
