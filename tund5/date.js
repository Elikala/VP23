exports.dateNowET = function() { 
    const monthNameET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember" ]; 
    let timeNow = new Date();
    //return timeNow.getDate() + "." + (timeNow.getMonth() + 1) + "." + timeNow.getFullYear();
    return timeNow.getDate() + "." + (monthNameET[timeNow.getMonth()]) + "." + timeNow.getFullYear();
}

//console.log(monthNameET{timeNow.getMonth()})

//console.log("Täna on: " + dateNow + "." + (monthNow + 1) + "." + yearNow);

