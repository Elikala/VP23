exports.dateNowET = function(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	let completeDate = dateNow + "." +( monthNow + 1) + "." + yearNow;
	return completeDate;
}
//console.log(dateNow);
//console.log(monthNow);
//console.log(yearNow);
//console.log("Täna on: " + dateNow + "." +( monthNow + 1) + "." + yearNow);
