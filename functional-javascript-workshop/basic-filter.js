// module.exports = function getShortMessages(messages){
//   //console.log(messages);
//   var messageReturnArray = [];
//   messages.filter(function(value){
//     //console.log(value.message.length);
//     if(value.message.length < 50){
//     //  console.log(value.message);
//       messageReturnArray.push(value.message);
//     }
//   });
//   return messageReturnArray;
// }

module.exports = function getShortMessages(messages){
  return messages.filter(function(value){
    return value.message.length < 50
  }).map(function(item){
    return item.message;
  });
}
