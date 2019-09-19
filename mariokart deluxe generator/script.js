// NOTE: strings are contained in "strings.js"

var characterID;
var vehicleID;
var tyreID;
var gliderID;

var characterString;
var vehicleString;
var tyreString;
var gliderString;

// picks a random skin for characters with skins
function selectCharacter()
{
	characterID = Math.floor(Math.random() * 42);

	// Shy Guy
	if(characterID == 15)
	{
		characterID += Math.floor(Math.random() * 9) + 27;
	}

	// Inkling Girl
	if(characterID == 19)
	{
		characterID += Math.floor(Math.random() * 3) + 32;
	}

	// Yoshi
	if(characterID == 22)
	{
		characterID += Math.floor(Math.random() * 9) + 32;
	}

	// Inkling Boy
	if(characterID == 25)
	{
		characterID += Math.floor(Math.random() * 3) + 38;
	}

	// Metal / Gold Mario
	if(characterID == 30)
	{
		characterID += Math.floor(Math.random() * 2) + 36;
	}

	// Link / Breath of the wild Link
	if(characterID == 33)
	{
		characterID += Math.floor(Math.random() * 2) + 35;
	}

	characterString = characters[characterID];
}

// selects vehicle
function selectVehicle()
{
	vehicleID = Math.floor(Math.random() * vehicles.length);
	vehicleString = vehicles[vehicleID];
}

// selects tyres
function selectTyres()
{
	tyreID = Math.floor(Math.random() * tyres.length);
	tyreString = tyres[tyreID];
}

// selects glider
function selectGlider()
{
	gliderID = Math.floor(Math.random() * gliders.length);
	gliderString = gliders[gliderID];
}

function generate()
{
	selectCharacter();
	selectVehicle();
	selectTyres();
	selectGlider();

	document.getElementById("generated").innerHTML = ("<img src='images/Characters/" + characterString + ".png'>");
	document.getElementById("generated").innerHTML += ("<img src='images/Vehicles/" + vehicleString + ".png'>");
	document.getElementById("generated").innerHTML += ("<img src='images/Tyres/" + tyreString + ".png'>");
	document.getElementById("generated").innerHTML += ("<img src='images/Gliders/" + gliderString + ".png'>");
}