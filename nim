var count = 0;
var turn = 0;
var winner = null;
while(count<21){
	 if(CH()==true){
        cpu();
}
	 if(CH()==true){
    	player();

}
	else
	End();
	break;

}







function cpu(){
	var cpu = Math.floor(Math.random()*3)+1;
	count+=cpu;
	alert("cpu did "+cpu);
	turn = "cpu";
	alert(count);
}






function CH(){
if(count<21){
	return true;
}
else 
return false;
}
