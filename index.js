var c1=0;
var c2=0;

function play(){

    var random1= Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src","images/dice"+random1+".png");

    var random2= Math.floor(Math.random()*6)+1;
    document.querySelector(".img2").setAttribute("src","images/dice"+random2+".png");

    if(random1>random2)
        {
            c1+=2;
            
        }
        else if(random1<random2)
        {
            c2+=2;
            
        }
        else{
            c1++;
            c2++;
        }

        document.querySelector(".S1").innerHTML=c1;
        document.querySelector(".S2").innerHTML=c2;
        
    if(c1>=10)
    {
        document.querySelector("p").innerHTML="🚩Player 1 Wins!";
        document.querySelector(".PlayGame").setAttribute("onclick","newGame()");
        document.querySelector(".PlayGame").textContent="New Game";
    }
    if(c2>=10)
    {
        document.querySelector("p").innerHTML="Player 2 Wins!🚩";
        document.querySelector(".PlayGame").setAttribute("onclick","newGame()");
        document.querySelector(".PlayGame").textContent="New Game";
    }
    }
function newGame(){
    location.reload();

}

// BELOW CODE IS TO ROLL DICES SEPERTELY FOR BOTH PLAYER

    // let color=document.querySelector(".player1").style.background;
    // if(color==="white")
    // {
    //     var random1= Math.floor(Math.random()*6)+1;
    //     document.querySelector(".img1").setAttribute("src","images/dice"+random1+".png");
    //     document.querySelector(".player1").style.background="gray";
    //     document.querySelector(".player2").style.background="white";
    // }
    // else{
    //     var random2= Math.floor(Math.random()*6)+1;
    //     document.querySelector(".img2").setAttribute("src","images/dice"+random2+".png");
    //     document.querySelector(".player1").style.background="white";
    //     document.querySelector(".player2").style.background="gray";
    // }

    // if(random2>=1&&random2<=6&&random1>=1&&random1<=6)
    // {
    //     if(random1>random2)
    //     {
    //         c1+=2;
            
    //     }
    //     else if(random1<random2)
    //     {
    //         c2+=2;
            
    //     }
    //     else{
    //         c1++;
    //         c2++;
    //     }
       
    //     document.querySelector(".S1").innerHTML=c1;
    //     document.querySelector(".S2").innerHTML=c2;
    // }


// }