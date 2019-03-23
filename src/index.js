module.exports = function getZerosCount(number, base) {
  // your implementation

  //собираем массив множителей
  let arrTemp = [];
  if (base > 0) {
    for (let i = 2; i <= base; i++){
      while (base % i == 0) {
        arrTemp.push(i);
        base = base / i;
      }
    }    
  }

  //массив множителей и степеней множителей 
  let arrMultiplier = [];
  let arrDegree = [];  
  for (let i = 0; 1 <= arrTemp.length; i++) {
    let degree = 1;
    let multiplier = arrTemp[0];
    for (let k = 1; k < arrTemp.length; k++) {
      if (arrTemp[k] == multiplier) {
        degree++;
      }
    }    
    //добавляем множитель и его степень в массив
    arrMultiplier.push(multiplier);
    arrDegree.push(degree);
    //удаляем использованный множитель
    arrTemp = arrTemp.filter(element => element !== multiplier);
  } 
                                        
  let arrZeros = [];
  for (let i = 0; i < arrMultiplier.length; i++) {
      let factor = 0;
      let numbTemp = number;
        while (numbTemp >= 1) {
          numbTemp /= arrMultiplier[i];
          factor += Math.floor(numbTemp);
        }
      let c = Math.floor(factor / arrDegree[i]);
      arrZeros.push(c);
  }

  let zeros = arrZeros[0];  
  for (let i = 1; i <= arrZeros.length; i++) {
    if (arrZeros[i] < zeros) {
      zeros = arrZeros[i];
    }
  }
  return zeros;
}