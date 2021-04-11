

    function getCircleLength(radius){
        return Number((Math.PI * 2 * radius).toFixed(1));
    };

    function getCircleArea(radius) {
        return Number((Math.PI * Math.pow(radius, 2)).toFixed(2));
    };


    module.exports.l = getCircleLength;
    module.exports.a = getCircleArea;