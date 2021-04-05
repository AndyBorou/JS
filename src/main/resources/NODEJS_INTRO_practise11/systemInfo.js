let getInfo = function (os, path) {
    const scriptName = path.basename(__filename);
    const dirName  = path.dirname(__filename);
    let info = "<h1>System information</h1>";
        info += "<p>Current user name: " + os.userInfo().username +"</p>";
        // os.hostname()
        info += "<p>OS type: " + os.type() +"</p>";
        info += "<p>System work time: " + (os.uptime()/60) +" minutes</p>";
        info += "<p>Current work directory: " + dirName +"</p>";
        info += "<p>Server file name: " + scriptName +"</p>";

        return info;
}

module.exports = getInfo;