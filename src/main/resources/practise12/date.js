let getInfoDate = function () {
    console.log("Your vote is accepted: " + new Date().toUTCString());
    return "Your vote is accepted: " + new Date().toUTCString();
};

module.exports = getInfoDate;