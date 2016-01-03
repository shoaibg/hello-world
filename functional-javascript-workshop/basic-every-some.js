var goodUsers2 = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];


function checkUsersValid(goodUsers, index){
  console.log(goodUsers2[index]);
  return goodUsers.id === 1;
}

// function checkUsersValid(element, index, array) {
//   return element.id === 10;
// }
goodUsers2.every(checkUsersValid);   // false

module.exports = checkUsersValid;
//[12, 54, 18, 130, 44].every(isBigEnough); // true



    // `checkUsersValid` is the function you'll define
    //var testAllValid = checkUsersValid(goodUsers)

    // testAllValid([
    //   { id: 2 },
    //   { id: 1 }
    // ]);


// function isBigEnough(element, index, array) {
//   return element >= 10;
// }
// console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true
