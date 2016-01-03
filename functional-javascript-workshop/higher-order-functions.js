module.exports = function repeat(operation, num){
  if(num <= 0) return;
  //for(var i=0; i<num; i++){
    operation();
    return repeat(operation, --num);
  //}
}

function operation(){}
