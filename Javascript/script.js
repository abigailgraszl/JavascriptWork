//variables and data types
var name="zach"; //string
var x=10; //number
var sheLikesDogs=true; //boolean

//debugging
alert("I'm only going to break your heart");
console.log("Hello!");

//arrays
var Tswift=["Ours", "Red", "Blank Space", "Fearless"];
alert(Tswift[2]);

//testing
(3*2) === 6
5 !== 7

//logic
var youLikeCookies=true;

if(youLikeCookies){
	alert("Cookies are delicious");
}else{
	alert("You're weird");
}

//functions
function travel(){
	var img=document.createElement("img");
	img.src="pics/paris-city-lights.jpg";
	document.body.appendChild(img);
}

var w=0
var z=20

function eating (){
	z= z - 1;
	w= w + 1;
	console.log("You have " + z + " cookies");
	console.log("You ate " + w + " cookies");
}

function end() {
	document.body.style.backgroundColor="red";
	alert("EXPLOSION");
}







