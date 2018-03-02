module.exports = function getZerosCount(number) {
  // your implementation
var resalt = 0;
for(var i=5; i < number; i = i * 5){
    debugger;
    var somResalt = Math.floor(number / i);
    resalt = resalt + somResalt;
    somResalt = 0;
}
    return resalt;
}
