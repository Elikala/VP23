const monthNameET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember" ]; 

const dateNowET = function() { 
    let timeNow = new Date() ;
    //return timeNow.getDate() + "." + (timeNow.getMonth() + 1) + "." + timeNow.getFullYear();
    return timeNow.getDate() + ". " + monthNameET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const timeNowET = function() {  
    let timeNow = new Date();
    return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}

//moodul expordib need asjad

module.exports = {dateNowET: dateNowET, timeNowET: timeNowET, monthsET: monthNameET };



