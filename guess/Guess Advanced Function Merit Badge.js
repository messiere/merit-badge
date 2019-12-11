//Guess Advanced Function Merit Badge
// By Ethan Messier
var games = 0;
var TotalTurns = 0;
var again = true;
var guess = 0;
while(again == true && guess != "q"){
  games++;
  var anw = Math.floor(Math.random()*100)+1;
  console.log(anw)
  var turn = 0;
    while(guess!=anw){
     guess=prompt("Guess a number between(1-100)");
     if(guess=="q") break;
       else if(Validator(guess)==true){
    		turn++;
    		if(guess<anw) alert(guess+" Is to low");
  	   	else if(guess>anw) alert(guess+" Is to high");
  	   	else{}
   }
     else alert("Invalid guess");
  }
  if(guess==anw){
  gameStats(TotalTurns,turn);
  again = newGame();
  }
  
  else alert("Quiter, the answer "+anw);

  function Validator(guess){
  	if (guess > 0 && guess < 101) return true;
  	else return false;
  }
  function gameStats(TotalTurns,turn){
    alert("You got it in "+turn+" turns!!!");
    TotalTurns+=turn
  var av = TotalTurns / games;
  alert("you have played "+games+" games and have an of average of "+av+" Guess");
  }
  function newGame(){
    var A = prompt("Would you like to play agian?");
    if(A=="yes"){
    return true;
    }
  
  else{
    alert("see you soon");
    return false;
    }
  }
}
