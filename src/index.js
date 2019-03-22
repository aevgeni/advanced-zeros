//module.exports = function getZerosCount(number, base) {
function getZerosCount(number) {  
  // your implementation
  
  var z = 0;
  while(number){
    number = (number/5)|0;
    z+=number;
  }
  console.log(z);
  return z;
  
}

getZerosCount(16);