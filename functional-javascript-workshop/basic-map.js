module.exports = function doubleAll(numbers){
  if(numbers){
    return numbers.map(function(value){
       return value * 2;
    });
  }
}
// var numArrya = [1,2,3,4,5,6,7,8,9,0];
// doubleAll(numArrya);
