module.exports = function getZerosCount(number, base) {

  // your implementation
  
  let reminder;
  let ZerosCount = number;
  let localBase = base;

  for (let i = 2; i <= base; i++) {
    if (localBase % i === 0) {
      reminder = 0;      
      while (localBase % i === 0) {
        localBase = Math.floor(localBase / i);
        reminder++;
      };      

      let count = 0;
      let tempNum = number;
      while (tempNum / i > 0) {
        count += Math.floor(tempNum / i);
        tempNum = Math.floor(tempNum / i);
      };
      let timeVar = Math.floor(count / reminder);
      if (ZerosCount > timeVar) {
        ZerosCount = timeVar;
        console.log("number:" + number + " i=" + i + " timeVar=" + timeVar + " base=" + base);
      }
    }
    
  }
  return ZerosCount;
  
}

