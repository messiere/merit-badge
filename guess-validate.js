//Guess Validate Merit Badge
// By Ethan Messier

var anw = Math.floor(Math.random()*100)+1;
console.log(anw)
var guess = 0;
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
if(guess==anw) alert("You got it in "+turn+" turns!!!");
else alert("Quiter, the answer "+anw);

function Validator(guess){
	if (guess > 0 && guess < 101) return true;
	else return false;
}
