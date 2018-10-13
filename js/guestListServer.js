var guests = {"Ali":["Jack","John","France"],"Ana":["Kat","Joe","Julia"]};


function createGuestDataStructure(guests){
	console.log("testing");	
}


window.addEventListener('DOMContentLoaded', function(){
	populateGuestList();
	document.getElementById()

});



// Util.events(document, {
// 	// Final initalization entry point: the Javascript code inside this block
// 	// runs at the end of start-up when the DOM is ready

// 	"DOMContentLoaded": function() {

// 		// Add events
// 		rules.prepareNewGame();

// 		// Captures effects and logic when user presses down on mouse.
// 		Util.one("#pageBody").addEventListener("mousedown", function( event){

// 		},false);
// 		// Captures effects and logic when user presses up (releases) mouse.
// 		Util.one("#pageBody").addEventListener("mouseup", function( event){
	
// 		},false);
// 		// Apply logic for moving mouse throughout grid
// 		Util.one("#pageBody").addEventListener("mousemove", function( event){

// 		},false);
// 		// Apply logic for when mouse leaves page
// 		Util.one("#pageBody").addEventListener("mouseleave", function( event ) {
	
// 		}, false);
// 	},

// 	// Keyboard events arrive here
// 	"keydown": function(evt) {
// 	},

// 	// Click events arrive here
// 	"click": function(evt) {
// 	}
// });




function populateGuestList(){
	var guestHTML = document.createElement("a");
	var guestHTMLClass= "list-group-item list-group-item-action";
	guestHTML.setAttribute("class",guestHTMLClass);
	guestHTML.setAttribute("href","#");
	guestHTML.innerHTML = "Jenny Jin";


	var buttonHTML = document.createElement("button");
	buttonHTML.setAttribute("type","button");
	buttonHTML.setAttribute("class","btn btn-primary");
	buttonHTML.innerHTML = "Check-in";
	guestHTML.appendChild(buttonHTML);

	document.getElementById("guestList").appendChild(guestHTML);	

}


