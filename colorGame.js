
var numofsquares=6;
var colors= generaterandomcolors(numofsquares);
var topnav= document.querySelector("#top");
var squares=document.querySelectorAll(".square");
var pickedColor=randomcolor(numofsquares);
var feedback=document.getElementById("feedback");
feedback.innerHTML="Start!"
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

var reset=document.querySelector("button");

var gameover=false;
for (var i=0; i < squares.length; i++){


squares[i].style.backgroundColor=colors[i];




}

var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.innerHTML=pickedColor;

for(var i=0; i<squares.length; i++){


	squares[i].addEventListener("click",function(){  

		 console.log(this.style.backgroundColor)
		                                    console.log(pickedColor)  
		if(pickedColor!=this.style.backgroundColor)
		                                    { this.style.backgroundColor="#2E2E2E"; 


		                                		feedback.innerHTML="Try Again";



		                                      } else if(pickedColor==this.style.backgroundColor){

		                                      	topnav.style.backgroundColor=this.style.backgroundColor;
		                                      	gameover=true;
		                                      	feedback.innerHTML="Correct!!"
		                                      	reset.textContent="Play again?";
		                                      	for(var i=0; i<squares.length; i++){

		                                      			squares[i].style.backgroundColor=this.style.backgroundColor;


		                                      	}




		                                      }  






		                                     })







}

function randomcolor(numofsquares){

var num= Math.floor(Math.random() *numofsquares );
 
return colors[num];


}

function generaterandomcolors(num){

var arr=[];

for(var i =0; i<num;i++){


generatecolors();

arr.push(generatecolors())

}

return arr;
}

function generatecolors(){


var r= Math.floor(Math.random()*255);
var g= Math.floor(Math.random()*255);
var b= Math.floor(Math.random()*255);

return "rgb(" + r +", "+g+", " +b+")"


}


	reset.addEventListener("click",function(){

		colors=generaterandomcolors(numofsquares);
		for (var i=0; i < squares.length; i++){

			feedback.innerHTML="Start!"
squares[i].style.backgroundColor=colors[i];


                                              }

                pickedColor=randomcolor(numofsquares);
                colorDisplay.innerHTML=pickedColor;                              
                topnav.style.backgroundColor="#3F729B";
                	reset.textContent="New colors";



	})


easybtn.addEventListener("click",function(){

		easybtn.classList.add("selected");
		hardbtn.classList.remove("selected");
		numofsquares=3;
		feedback.innerHTML="Start!"
		colors=generaterandomcolors(numofsquares);
		pickedColor=randomcolor(numofsquares);
		colorDisplay.innerHTML=pickedColor;                              
                topnav.style.backgroundColor="#3F729B";

		for(var i=0; i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];



		}else {squares[i].style.display="none"};




}})

hardbtn.addEventListener("click",function(){

		easybtn.classList.remove("selected");
		hardbtn.classList.add("selected");
		feedback.innerHTML="Start!"
		numofsquares=6;
		colors=generaterandomcolors(numofsquares);
		pickedColor=randomcolor(numofsquares);
		colorDisplay.innerHTML=pickedColor;                              
                topnav.style.backgroundColor="#3F729B";

			for(var i=0; i<squares.length;i++){
		
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";


		




}})









