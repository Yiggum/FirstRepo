var myObject = {
    green: "grass",
    blue: "sky",
    yellow: "sun"
};

function checkObj(checkProp) {
    if (myObject.hasOwnProperty(checkProp)) {
        return myObject[checkProp]
    } else {
        return "Not Found"
    }
}
console.log(checkObj(green));