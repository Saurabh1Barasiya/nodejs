console.log("hi i am fom sum module.");

var x = 10;

function doCalculation(a,b){
    console.log("calculation is ",a+b);
}

module.exports = {
    x:x,
    doCalculation:doCalculation
}