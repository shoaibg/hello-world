// var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
// countWords(countWords(inputWords));
function countWords(inputWords) {
  var solutionArray = [];

  inputWords.reduce(function(previousValue, currentValue, currentIndex, array) {
    //var count = 1 ;
    return previousValue;
    //console.log(solutionArray.push({previousValue : count}));
    //return array + ':' + currentIndex;
  });
}

//module.exports = countWords

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
console.log(countWords(inputWords))
