/* ---------- COUNT DICE ---------- */

	var count = function(){
		var numberOfDice = document.getElementById("dicecontainer").childElementCount;
		return(numberOfDice);
	}

/* ---------- CREATE DICE NUMBERS ---------- */

var assignDieNumber = function(){
$("img:eq(0)").addClass("die1");
$("img:eq(1)").addClass("die2");
$("img:eq(2)").addClass("die3");
$("img:eq(3)").addClass("die4");
$("img:eq(4)").addClass("die5");
}

/* ---------- RESET DICE FACES ---------- */

var resetFaces = function (){
	$(".die1").attr("src", "img/default.png")
	$(".die2").attr("src", "img/default.png")
	$(".die3").attr("src", "img/default.png")
	$(".die4").attr("src", "img/default.png")
	$(".die5").attr("src", "img/default.png")
}

/* ---------- REMOVE DIE ---------- */

	var removeDie = function(){
		var x= count();
		var getDice = document.getElementById("dicecontainer");
		var removeTheDie = getDice.lastElementChild;

		if (x > 1){
			getDice.removeChild(removeTheDie);
			console.log("You lost a die");
			$(".add").removeClass("disabled"); 			
		} else {
			getDice.removeChild(removeDie);
			$(".remove").addClass("disabled"); 
			$(".roll").addClass("disabled"); 
			$(".add").addClass("disabled"); 
			document.getElementById("gameover").style.display = "block";
			console.log("You lost!");
		}
	}

/* ---------- ADD DIE ---------- */

	var tryToAdd = function (){
		var x = count();
		var add = function(){
			var newDie = document.createElement("img");
			newDie.className="die";
			newDie.src="img/default.png"
			document.getElementById("dicecontainer").appendChild(newDie); 
			console.log("You won a die")
		}
		if (x < 4 && x > 0) {
			add();
		} else if (x < 5 && x > 0){
			add();
			$(".add").addClass("disabled"); 			
		} else if (x == 0){
			console.log("Game over! Press RESET for a new game.");
		} else {
			console.log("You have the maximum amount of dice!")
		}

	}

/* ---------- ROLL DICE ---------- */

	var face0=new Image()
	face0.src="img/d1.png"
	var face1=new Image()
	face1.src="img/d2.png"
	var face2=new Image()
	face2.src="img/d3.png"
	var face3=new Image()
	face3.src="img/d4.png"
	var face4=new Image()
	face4.src="img/d5.png"
	var face5=new Image()
	face5.src="img/d6.png"

	function rollDice(){
		var randomdice=Math.round(Math.random()*5)
		$(".die1").attr("src", eval("face"+randomdice+".src"))
		var randomdice=Math.round(Math.random()*5)
		$(".die2").attr("src", eval("face"+randomdice+".src"))
		var randomdice=Math.round(Math.random()*5)
		$(".die3").attr("src", eval("face"+randomdice+".src"))
		var randomdice=Math.round(Math.random()*5)
		$(".die4").attr("src", eval("face"+randomdice+".src"))
		var randomdice=Math.round(Math.random()*5)
		$(".die5").attr("src", eval("face"+randomdice+".src"))
		console.log("You rolled")
	}

/* ---------- RESET DICE ---------- */

var reset = function (){
	var currentNumber = document.getElementById("dicecontainer").childElementCount;
	var add = function(){
		var newDie = document.createElement("img");
		newDie.className="die";
		newDie.src="img/default.png"
		document.getElementById("dicecontainer").appendChild(newDie); 
	}

	switch(currentNumber) {
	    case 0:
			add(); add(); add(); add(); add(); resetFaces();
	        break;
	    case 1:
 			add(); add(); add(); add(); resetFaces();
 	        break;
	    case 2:
 			add(); add(); add(); resetFaces();  
 	        break;
	    case 3:
 			add(); add(); resetFaces();
 	        break; 	 
	    case 4:
 			add(); resetFaces();
 	        break; 
	    default:
	    	resetFaces();
	}
	console.log("Dice were reset");
	$(".remove").removeClass("disabled"); 
	$(".roll").removeClass("disabled"); 
	$(".add").addClass("disabled"); 
	document.getElementById("gameover").style.display = "none";
	
}





