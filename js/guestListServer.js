var guestsByMember = {"Ali":["Jack","John","France"],"Ana":["Kat","Joe","Julia"]};

var guestsByMemberWithState = {};
var defaultInitialGuestCount = 0;

var currentGuestCount = defaultInitialGuestCount;


function checkInMembersGuest(member,guestname){
	console.log("member:",member);
	console.log("guestname:",guestname);

	membersGuests = guestsByMemberWithState[member];
	membersGuests[guestname].checkedin = true;
}

function createGuestDataStructure(guestsDict){
	console.log(guestsDict);
	var members = Object.keys(guestsDict);
	for (var i =0; i <members.length; i++){
		member = members[i];
		membersGuests = guestsByMember[member];
		guestsWithStates = {};
		for (var j=0; j <membersGuests.length;j++){
			guest = membersGuests[j];
			guestsWithStates[guest] = {"name": guest, "checkedin" : false};
		}
		guestsByMemberWithState[member] = guestsWithStates;
	}
}


window.addEventListener('DOMContentLoaded', function(){
	createGuestDataStructure(guestsByMember);

});


function incrementGuestCount(){
	currentGuestCount++;
	document.getElementById("currentGuestCount").innerHTML = currentGuestCount; 
}

function decrementGuestCount(){
	if (currentGuestCount != 0){
		currentGuestCount--;
		document.getElementById("currentGuestCount").innerHTML = currentGuestCount; 
	}
}



function clearGuestList(){
	document.getElementById("guestList").innerHTML = "";	

}

function populateGuestsOfMember(member){
	clearGuestList();

	guests = Object.keys(guestsByMemberWithState[member]);
	for (var i =0; i <guests.length; i++){
		guestObject = guestsByMemberWithState[member][guests[i]];
		name = guestObject['name'];
		checkedin = guestObject['checkedin'];


		var guestHTML = document.createElement("a");
		var guestHTMLClass= "list-group-item list-group-item-action";
		guestHTML.setAttribute("class",guestHTMLClass);
		guestHTML.setAttribute("href","#");
		guestHTML.innerHTML = name;


		var buttonHTML = document.createElement("button");
		buttonHTML.setAttribute("type","button");
		buttonHTML.setAttribute("class","btn btn-primary");
		buttonHTML.addEventListener("click", function (){
			checkInMembersGuest(member,name);
		});

		if (!checkedin){
			buttonHTML.classList.add("btn-success");
			buttonHTML.innerHTML = "Check-in";

		}
		else{
			buttonHTML.classList.add("disabled");
			buttonHTML.innerHTML = "Checked-in"

		}
		guestHTML.appendChild(buttonHTML);
		console.log(guestHTML);
		
		document.getElementById("guestList").appendChild(guestHTML);	
	}

}



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
	buttonHTML.addEventListener("mouseup", function(event){
		buttonHTML.classList.remove("btn-primary");
		buttonHTML.innerHTML = "Checked In";
		buttonHTML.classList.add("btn-success");
		buttonHTML.classList.add("disabled");

	},false);

	guestHTML.appendChild(buttonHTML);


	document.getElementById("guestList").appendChild(guestHTML);	

}


