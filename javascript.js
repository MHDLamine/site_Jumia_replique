const emplacement = document.getElementById("background");
var nbrImg = 7;
var a = 0;
var auto = 0;
var time = 3000;
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
        if( auto > nbrImg)
        {
            auto = 1;
            emplacement.style.backgroundImage = "url('img/image" + 1 + ".jpg')";
            imgStyle ();
         
        }
        setTimeout("autoDisplay()", time);
    }

imgDisplay= (b) => 
{
   
    if ( (a <= nbrImg) && (a >= 1 ))
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
    if( a > nbrImg)
    {
        a = 1;
        emplacement.style.backgroundImage = "url('img/image" + a + ".jpg')";
        imgStyle ();
     
    }
}
//ANIMATION en bas de page

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
//BUTTON RESPONSIVE
var Btn = document.getElementById("BAR");
Btn.addEventListener("click",resp = () => 
{
    bar1 = document.getElementById("bar1");
    bar2 = document.getElementById("bar2");
    bar3 = document.getElementById("bar3");
    menu = document.getElementById("menu");

    bar1.classList.toggle("bar1Over");
    bar2.classList.toggle("bar2Over");
    bar3.classList.toggle("bar3Over");
    menu.classList.toggle("affiche");
})

//Images dans un tableau pour le format mobile
const mesImages = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/image5.jpg", "img/image6.jpg", "img/image7.jpg"]
var x = 1;
var y ;
//creation container pour les images
const div = document.createElement("div");
div.setAttribute("class","containerMobile");
div.style.width = "100%";
div.style.height = "300px";
document.body.appendChild(div)
const img = document.createElement("img");
function insertion (){
    
    img.setAttribute("src",y);
    div.appendChild(img)
    img.style.width = "inherit";
    img.style.height = "inherit";
}

function automat() {
    x++;

    if ( x < mesImages.length)
    {
     y = mesImages[x];
     insertion()
    }
    if ( x >= mesImages.length)
    {
        y = mesImages[0];
        insertion()
        x = 0;   
    }
    setTimeout("automat()", 4000);
  
}
function automatisaionActiver(){
    automat()
    autoDisplay()
}
window.onload = automatisaionActiver;
    //Creation de la balise img et son attribut src
 





