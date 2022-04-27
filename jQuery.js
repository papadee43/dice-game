
	 // document.querySelector("button").addEventListener("click", function () {

		//  	const randomNum1 = Math.floor(Math.random() * 6) +1

		//  	const randomNum2 =Math.floor(Math.random()*6) + 1

		//  	document.querySelector(".img1").setAttribute("src", "images/dice"+randomNum1+".png")

		//  	document.querySelector(".img2").setAttribute("src","images/dice"+randomNum2+".png")

		//  	if (randomNum1 > randomNum2) {
		//  			document.querySelector("h1").innerHTML = "🚩Player 1 wins"
		//  	} else if (randomNum1 === randomNum2) {
		//  		document.querySelector("h1").innerHTML = "Draw😛"
		//  	} else {
		//  		document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
		//  	}
	 // })
// 	 / // $("button").click(function () {
// // // 	$("h1").css("color", "yellow")
// // // })

// $("button").click( function(){
//    const randomNum1 =Math.floor((Math.randomm()*6) +1)
//    const randomNum2 =Math.floor((Math.randomm()*6) +1)
//    $("#img1").atrr("src","image/dice"+randomNum1+".png")
//    $("#img2").atrr("src","image/dice"+randomNum2+".png")
//    if ( randomNum1 > randomNum2) {
//    	$("h1").html("🚩Player 1 wins")
//    } else if (randomNum1 === randomNum2) {
//    	$("h1").html("Draw😛")
//    }else {
//    	$("h1").html("Player 2 Wins🚩")
//    }

// });

// //Adding Event Listener with jQuery
 // $("button").click(function () {
 // 	$("h1").css("color", "yellow")
 // })


$("button").click(function() {
	const randomNum1 = Math.floor(Math.random() * 6) +1
	const randomNum2 =Math.floor(Math.random()*6) + 1

	$(".img1").attr("src", "images/dice"+randomNum1+".png")
	$(".img2").attr("src", "images/dice"+randomNum2+".png")

	if (randomNum1 > randomNum2) {
		 	$("h1").html("🚩Player 1 wins");
		 	// $("h1").html("<h1>Don't go there</h1>")

	} else if (randomNum1 === randomNum2) {
		 	$("h1").html("Draw😛")
	} else {
	 		$("h1").html ("Player 2 Wins🚩")
		 	}
})


