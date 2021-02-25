// 3

let hourToS;
let dayToS;
let monthToS;

let hour = prompt("enter hour/es");
hourToSecond(hour)
alert(hourToS);

let day = prompt("enter day/s");
dayToSecond(day);
alert(dayToS);

let month = prompt("enter month/es");
monthToSecond(month)
alert(monthToS);



function hourToSecond(h){
    hourToS = parseInt(h) * 3600;
}

function dayToSecond(d){
    dayToS = parseInt(d) * 3600 * 24;
}

function monthToSecond(m){
    monthToS = parseInt(m) * 3600 * 24 * 30;
}






