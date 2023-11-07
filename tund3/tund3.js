const firstName = "Andrus";
const lastName = "Rinde";
const dateInfo = require("./dateTime_et");
//lisame failisüsteemi mooduli 
const fs = require("fs");
let folkWistom = [];
fs.readFile("txtfiles/Vanasonad.txt", "utf8", (err, data)=>{
	if(err){
		console.log(err);
	}
	else {
		//console.log(data);
		folkWistom = data.split (";");
		console.log(folkWistom);
		console.log("Vanasõnu on ", + folkWistom.length);
		onScreen();
	}
});//readFile lõpp

const onScreen = function () {
	console.log(firstName + " " + lastName);
	console.log(dateInfo.dateNowET());
	
	console.log("Tänane tarkus: " + folkWistom[Math.floor(Math.random() * folkWistom.length)]);
	//console.log(Math.floor(Math.random() * folkWistom.length));
	
	//kõige tavalisem tsükkel (loop)
	for (let i = 0; i < folkWistom.length; i ++ ){
		console.log(( i + 1 ) + ") " + folkWistom[i] )
	};
		
	console.log("Kell on: " + dateInfo.timeNowET());
	//console.log("On " + dateInfo.timeOfDayET() + ".");
	console.log(dateInfo.monthtsET);
}

