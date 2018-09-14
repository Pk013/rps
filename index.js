const text = document.getElementById("text")
let user = prompt("rock, paper or scissors?! Choose you fools!");
let npc = Math.random();
if (npc <0.34){
    npc = "rock";
}else if(npc <=0.67){
    npc = "paper";
}
else{
    npc = "scissors";
}
let compare = function(userchoice, computerchoice){
    if(userchoice===computerchoice){
        return "The result is a tie! you both suck!";
    }
    if(userchoice==="rock"){
        if(computerchoice==="scissors"){
            return "rock wins, how sad";
        }
        else{
            return "paper wins, so lame";
        }
    }
    if(userchoice==="paper"){
        if(computerchoice==="rock"){
            return "paper wins, cool beans";
        }
        else{
            return "scissors wins, cutting edge";
        }
    }
    if(userchoice==="scissors"){
        if(computerchoice==="rock"){
            return "rock wins, what a smash";
        }
        else{
            return "scissors wins, sharp mind";
        }
    }
};
let answer = compare(user, npc)
text.textContent = answer
console.log(npc)
console.log("user choice", user)