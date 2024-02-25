let userchoice = 0;
let compchoice = 0;


const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
let cu = document.querySelector("#c-score");
let uu = document.querySelector("#u-score");
c = 0;
u = 0;
let restart=document.querySelector(".restart");

     


choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        userchoice = choice.getAttribute("id");
        console.log(`user choice = ${userchoice}`);
        compchoice = compchoicegen();
        console.log(`computer choice = ${compchoice}`);

        play(userchoice, compchoice);})  
    
    })
        
    
    



function compchoicegen() {
    const options = ["rock", "paper", "scissor"];

    const index = Math.floor(Math.random() * 3);

    return options[index];
}


function play(userchoice, compchoice) {
    restart.addEventListener("click",()=>{c=0;u=0;
    cu.innerHTML=`${c}`;
    uu.innerHTML=`${u}`;
    result.innerHTML="none";
    document.getElementById("result").style.backgroundColor="black";
    })




    if (userchoice === compchoice) {
        result.innerHTML = "Draw";
        document.getElementById("result").style.backgroundColor="grey";
    

    }
    else if (userchoice === "rock") {
        if (compchoice === "paper") {
            result.innerHTML = `Computer won by ${compchoice}`;
            document.getElementById("result").style.backgroundColor="red";

            c++;
            cu.innerHTML = `${c}`;


        }
        else {
            result.innerHTML = "User won";
            document.getElementById("result").style.backgroundColor="green";
            u++;
            uu.innerHTML = `${u}`;
        }

    }

    else if (userchoice === "paper") {

        if (compchoice === "scissor") {
            result.innerHTML = `computer won by ${compchoice}`;
            document.getElementById("result").style.backgroundColor="red";
            c++;
            cu.innerHTML = `${c}`;

        }
        else {

            result.innerHTML = "User won";
            document.getElementById("result").style.backgroundColor="green";
            u++;
            uu.innerHTML=`${u}`;

        } }

        
    else if (userchoice === "scissor") {

        if (compchoice === "rock") {
            result.innerHTML = `computer won by ${compchoice}`;
            document.getElementById("result").style.backgroundColor="red";
            c++;
            cu.innerHTML = `${c}`;

        }
        else {

            result.innerHTML = "User won";
            document.getElementById("result").style.backgroundColor="green";
            u++;
            uu.innerHTML=`${u}`;

        }
    }


    else if(userchoice==="gun")
    {   u++; 
       uu.innerHTML=`${u}`;
       document.getElementById("result").style.backgroundColor="green";
       result.innerHTML = "User won";
       document.getElementById("result").style.backgroundColor="green";
    }

    else if( userchoice ==="goRambo")
    {

     for(u;u<=5;u++)
     {
      uu.innerHTML=`${u}`;
      document.getElementById("result").style.backgroundColor="green";
      result.innerHTML = "User won";
      document.getElementById("result").style.backgroundColor="green";


     }

    }

}
/*
choice=document.querySelector(".choice");
popup=document.querySelector(".popup");
choice.addEventListener('mouseover', () => {
    popup.textContent = "rock";
   });
  
  choice.addEventListener('mouseout', () => {
     popup.textContent= '';
   });*/