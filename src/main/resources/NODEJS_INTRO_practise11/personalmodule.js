const f = function (os) {

    let name = os.userInfo().username;

    let currentTime = new Date();
    let hours = currentTime.getHours();
    currentTime = currentTime.toUTCString();
    let greatings = "Hello";
    if(hours<12){
        greatings = "Good morning";
    }else if(hours>12 & hours>18){
        greatings = "Good day";
    }else {
        greatings = "Good evening";
    }

    console.log("Date of request: "+ currentTime+ " \n "+  greatings +", " +name);
    return "Date of request: "+ currentTime +" \n "+   greatings +", " +name;
};

module.exports = f;

