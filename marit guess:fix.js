/*
simple guess merit badge
Ehan messier
*/
var anw = Math.floor(Math.random()*100)+1;
var guess = "0"
while(guess!=anw){
  guess=prompt("Guess a number between(1-100)");
  if(guess<anw) alert(guess+" is to low");
  else if(guess>anw) alert(guess+" is to high");
  else if(guess=="q") break;
  else{}
}
if(guess==anw) alert("correct");
else alert("Cheater, the number was "+anw);